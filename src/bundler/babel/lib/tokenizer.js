import { tokenTypeMap } from './specs';

class Tokenizer {
  constructor(input) {
    if (typeof input !== 'string') {
      throw new Error('Tokenizer input is not a string');
    }

    this.input = input;
    this.index = 0;
    this.context = null;
  }

  getTokens = () => {
    const tokens = [];
    while (this.index < this.input.length) {
      tokens.push(this.getCurToken());
      this.index++;
    }
    return tokens;
  }

  getCurToken = () => {
    this.eatSpaces();
    return (
      this.readColon()
      || this.readComma()
      || this.readParens()
      || this.readBrace()
      || this.readOperator()
      || this.readString()
      || this.readNumber()
      || this.readIdentifier()
      || this.readEqual()
      || this.error()
    );
  }

  readColon = () => {
    return this.readChar('colon');
  }

  readComma = () => {
    return this.readChar('comma');
  }

  readParens = () => {
    return this.readChar('parens');
  }

  readBrace = () => {
    return this.readChar('brace');
  }

  readOperator = () => {
    return this.readChar('operator');
  }

  readEqual = () => {
    return this.readChar('equal');
  }

  readString = () => {
    const curChar = this.char();
    const token = tokenTypeMap.string;

    if (token.chars.includes(curChar)) {
      const result = {
        type: token.type,
        value: curChar,
      };

      const closer = curChar;
      this.index++;
      // 找到字符串结尾，暂时不处理字符串中有转义的情况
      while (this.char() !== closer) {
        // 加上字符串中的内容
        result.value += this.char();
        this.index++;
      }
      result.value += this.char();  // 加上字符串的结尾

      this.setContext(result.type);
      return result;
    }
  }

  readNumber = () => {
    const curChar = this.char();
    const token = tokenTypeMap.number;

    if (token.regx.test(curChar)) {
      const result = {
        type: token.type,
        value: curChar,
      };

      this.index++;
      // TODO: process eslint error
      // eslint-disable-next-line no-useless-escape
      while (/[0-9\.]/.test(this.char())) {  // 这里也没有处理 3.4.1 类似数字格式的情况
        result.value += this.char();
        this.index++;
      }
      this.index--;

      this.setContext(result.type);
      return result;
    }
  }

  readIdentifier = () => {
    const curChar = this.char();
    const token = tokenTypeMap.identifier;

    if (token.regx.test(curChar)) {
      const result = {
        type: token.type,
        value: curChar,
      };

      this.index++;
      while (token.regx.test(this.char())) {
        result.value += this.char();
        this.index++;
      }
      this.index--;

      this.setContext(result.type);
      return result;
    }
  }

  readChar = type => {
    const curChar = this.char();
    const token = tokenTypeMap[type];

    if (token.chars.includes(curChar)) {
      // 处理箭头函数的情况
      if (curChar === '=' && this.input[this.index + 1] === '>') {
        this.setContext(tokenTypeMap.arrow.type);
        this.index++;  // 向前走一位
        return {
          type: tokenTypeMap.arrow.type,
          value: tokenTypeMap.arrow.chars[0],
        };
      }

      this.setContext(token.type);
      return {
        type: token.type,
        value: curChar,
      };
    }
  }

  isEOF = () => {
    return this.index >= this.input.length;
  }

  eatSpaces = () => {
    while (/\s/.test(this.char())) {
      this.index++;
    }
  }

  setContext = type => {
    this.context = type;
  }

  inContext = type => {
    return this.context = type;
  }

  char = () => {
    return this.input[this.index];
  }

  error = () => {
    throw new Error(`Unexpected token: ${this.char()}`);
  }
}

export default Tokenizer;
