import Tokenizer from './../lib/tokenizer';
import Parser from './../lib/parser';
import transformer from './../lib/transformer';
import { input, newAst } from './data';

describe('transformer test cases', () => {
  it('get after AST', () => {
    const tokens = (new Tokenizer(input)).getTokens();
    const ast = (new Parser(tokens)).getAST();
    const _newAST = transformer(ast);
    expect(_newAST).toEqual(newAst);
  });
});
