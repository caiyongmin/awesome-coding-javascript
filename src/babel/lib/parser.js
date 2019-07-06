import {
  Program,
  ArrowFunctionExpression,
  VariableDeclaration,
  Identifier,
  BlockStatement,
  ReturnStatement,
  Literal,
  tokenTypeMap,
} from './specs';

class Parser {
  constructor(tokens) {
    if (!Array.isArray(tokens)) {
      throw new Error('Parse tokens must be an array');
    }

    this.tokens = tokens;
    this.curToken = null;
    this.stashStack = [];
    this.index = -1;
  }

  getTreeNode = () => {
    return this.nextStatement() || this.nextExpression();
  }

  getAST = () => {
    const ast = new Program();

    while (this.index < this.tokens.length - 1) {
      const treeNode = this.getTreeNode();
      if (!treeNode) {
        break;
      }
      ast.body.push(treeNode);
    }

    return ast;
  }

  /**
   * 读取并返回下一个语句
   */
  nextStatement = () => {
    this.stash();
    this.setNextToken();

    if (this.curToken.type === tokenTypeMap.brace.type && this.curToken.value === '{') {
      const blockStatement = new BlockStatement();
      while (this.index < this.tokens.length - 1) {
        this.stash();
        this.setNextToken();
        if (this.curToken.type === tokenTypeMap.brace.type && this.curToken.value === '}') {
          // `{` 紧接着就是 `}`，说明是空的语句块
          this.commit();
          break;
        }

        // 处理 return 语句的情况
        if (
          this.curToken.type === tokenTypeMap.identifier.type
          && this.curToken.value === 'return'
        ) {
          const returnStatement = new ReturnStatement();
          const returnStatementArgument = returnStatement.argument;
          while (this.index < this.tokens.length - 1) {
            this.stash();
            this.setNextToken();

            if (this.curToken.type === tokenTypeMap.identifier.type) {
              if (returnStatementArgument.left && !returnStatementArgument.right) {
                this.rewind();
                returnStatementArgument.right = this.getTreeNode();
              }
              if (!returnStatementArgument.left) {
                this.rewind();
                returnStatementArgument.left = this.getTreeNode();
              }

              continue;
            }

            if (this.curToken.type === tokenTypeMap.operator.type) {
              returnStatementArgument.operator = this.curToken.value;
              continue;
            }

            // 处理 `;` 结束的情况
            if (this.curToken.type === tokenTypeMap.colon.type) {
              this.commit();
              break;
            }
          }
          blockStatement.body.push(returnStatement);
          continue;
        }
      }

      return blockStatement;
    }

    // 没有找到语句块，回到处理之前的位置
    this.rewind();
  }

  /**
   * 读取并返回下一个表达式
   */
  nextExpression = () => {
    this.stash();
    this.setNextToken();

    if (
      this.curToken.type === tokenTypeMap.identifier.type
      && (this.curToken.value === 'const' || this.curToken.value === 'let')
    ) {
      const declaration = new VariableDeclaration({
        kind: this.curToken.value,
      });
      const declarator = declaration.declarations[0];  // 暂时只处理每行只定义一个变量的情况
      while (this.index < this.tokens.length - 1) {
        this.stash();
        this.setNextToken();

        // 解析变量名
        if (this.curToken.type === tokenTypeMap.identifier.type) {
          if (!declarator.id) {
            declarator.id = new Identifier({
              name: this.curToken.value,
            });
          }
          continue;
        }
        // 碰到 `=` 继续往前解析
        if (this.curToken.type === tokenTypeMap.equal.type) {
          continue;
        }
        // 解析赋于变量的值
        if (
          this.curToken.type === tokenTypeMap.string.type
          || this.curToken.type === tokenTypeMap.number.type
        ) {
          let value = this.curToken.value;
          if (this.curToken.type === tokenTypeMap.number.type) {
            value = Number(value);
          }
          declarator.init = new Literal({ value });
        }
        else if (
          tokenTypeMap.parens.chars.includes(this.curToken.value)
          && this.curToken.value === '('
        ) {
          this.rewind();  // 处理 `(a, b)` 这种函数调用，或者函数定义的情况
          declarator.init = this.getTreeNode();
        }

        // 解析冒号结尾
        if (this.curToken.type == tokenTypeMap.colon.type) {
          // 解析完成
          this.commit();
          break;
        }
      }
      return declaration;
    }

    // 碰到 `(` 的情况，先只假设是箭头函数的情况
    if (
      this.curToken.type === tokenTypeMap.parens.type
      && this.curToken.value === '('
    ) {
      const arrowFunction = new ArrowFunctionExpression();
      while (this.index < this.tokens.length - 1) {
        this.stash();
        this.setNextToken();

        // 处理 `)` 结束符的情况，继续解析
        if (this.curToken.type === tokenTypeMap.parens.type && this.curToken.value === ')') {
          continue;
        }

        // 处理函数的变量
        if (this.curToken.type === tokenTypeMap.identifier.type) {
          this.rewind();  // 回退一步，处理函数的变量
          arrowFunction.params.push(this.getTreeNode());
          continue;
        }

        // 处理逗号的情况
        if (this.curToken.type === tokenTypeMap.comma.type) {
          continue;
        }

        // 处理 => 箭头函数符号的问题
        if (this.curToken.type === tokenTypeMap.arrow.type) {
          continue;
        }

        // 处理函数体的情况
        if (this.curToken.type === tokenTypeMap.brace.type && this.curToken.value === '{') {
          this.rewind();  // 需要回退一步，处理函数体的情况
          const treeNode = this.getTreeNode();
          arrowFunction.body = treeNode;
          continue;
        }

        // 解析冒号结尾
        if (this.curToken.type == tokenTypeMap.colon.type) {
          this.commit();
          break;
        }
      }
      return arrowFunction;
    }

    // 处理字符串变量的情况
    if (this.curToken.type === tokenTypeMap.identifier.type) {
      return new Identifier({
        name: this.curToken.value,
      });
    }

    // 没有找到表达式块，回到处理之前的位置
    this.rewind();
  }

  /**
   * 读取下一个语法单元（或称符号），赋值给 curToken
   */
  setNextToken = () => {
    this.index = this.index += 1;
    this.curToken = this.tokens[this.index];
  }

  /**
   * 暂存当前读取符号的位置，方便在需要的时候返回
   */
  stash = () => {
    this.stashStack.push(this.index);
  }

  /**
   * 返回到上一个暂存点
   */
  rewind = () => {
    this.index = this.stashStack.pop();
  }

  /**
   * 上一个暂存点不再被需要，其将被销毁
   */
  commit = () => {
    this.stashStack.pop();
  }
}

export default Parser;
