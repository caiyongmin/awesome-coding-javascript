import Tokenizer from './../lib/tokenizer';
import Parser from './../lib/parser';
import { input, ast } from './data';

describe('parser test cases', () => {
  it('get input ast', () => {
    const tokens = (new Tokenizer(input)).getTokens();
    const _ast = (new Parser(tokens)).getAST();
    expect(_ast).toEqual(ast);
  });
});
