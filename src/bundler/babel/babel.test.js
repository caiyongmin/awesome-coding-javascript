import Tokenizer from './lib/tokenizer';
import Parser from './lib/parser';
import transformer from './lib/transformer';
import codeGenerator from './lib/codeGenerator';
import { input, output } from './test/data';

describe('babel test cases', () => {
  /**
   * ES6 code:
   * const a = 1;
   * const b = 2;
   * const add = (a, b) => {
   *  return a + b;
   * }
   *
   * will get ES5 code:
   * "use strict";
   * var a = 1;
   * var b = 2;
   * var add = function add(a, b) {
   *  return a + b;
   * }
   */
  it('get ES5 code from ES6 code', () => {
    const tokens = (new Tokenizer(input)).getTokens();
    const ast = (new Parser(tokens)).getAST();
    const newAst = transformer(ast);
    const code = codeGenerator(newAst);
    expect(code).toEqual(output);
  });
});
