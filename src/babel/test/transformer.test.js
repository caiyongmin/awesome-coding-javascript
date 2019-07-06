import Tokenizer from './../lib/tokenizer';
import Parser from './../lib/parser';
import transformer from './../lib/transformer';
import { before, afterAST } from './data';

describe('transformer test cases', () => {
  it('get after AST', () => {
    const tokens = (new Tokenizer(before)).getTokens();
    const ast = (new Parser(tokens)).getAST();
    const outputAST = transformer(ast);
    expect(outputAST).toEqual(afterAST);
  });
});
