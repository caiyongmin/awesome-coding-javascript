import Tokenizer from './../lib/tokenizer';
import Parser from './../lib/parser';
import { before, beforeAST } from './data';

describe('parser test cases', () => {
  it('get before AST', () => {
    const tokens = (new Tokenizer(before)).getTokens();
    const ast = (new Parser(tokens)).getAST();
    expect(ast).toEqual(beforeAST);
  });
});
