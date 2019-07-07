// 根据 AST 生成代码
export default function codeGenerator(ast) {
  const generateSpecs = {
    Program: node => {
      return node.body.map(child => codeGenerator(child)).join(';');
    },
    ExpressionStatement: node => {
      return `"${codeGenerator(node.expression)}"`;
    },
    Literal: node => {
      return node.value;
    },
    VariableDeclaration: node => {
      // 暂时只处理每行只定义一个变量的情况
      return `${node.kind} ${codeGenerator(node.declarations[0])}`;
    },
    VariableDeclarator: node => {
      return `${codeGenerator(node.id)} = ${codeGenerator(node.init)}`;
    },
    Identifier: node => {
      return node.name;
    },
    FunctionExpression: node => {
      const functionName = codeGenerator(node.id);
      const functionParams = node.params.map(param => codeGenerator(param)).join(', ');
      const functionBody = codeGenerator(node.body);
      return `function ${functionName}(${functionParams}) ${functionBody}`;
    },
    BlockStatement: node => {
      const statementBody = `${node.body.map(child => codeGenerator(child)).join(';')};`;
      return `{${statementBody}};`;
    },
    ReturnStatement: node => {
      return `  return ${codeGenerator(node.argument)}`;
    },
    BinaryExpression: node => {
      return `${codeGenerator(node.left)} ${node.operator} ${codeGenerator(node.right)}`;
    },
  };

  return generateSpecs[ast.type](ast);
}
