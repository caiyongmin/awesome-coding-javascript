import Tokenizer from './../lib/tokenizer';
import Parser from '../lib/parser';
import transformer from './../lib/transformer';
import codeGenerator from './../lib/codeGenerator';
import { input, output } from './data';

describe('codeGenerator test cases', () => {
  it('get ES5 code from ES6 code', () => {
    const tokens = (new Tokenizer(input)).getTokens();
    const ast = (new Parser(tokens)).getAST();
    const newAst = transformer(ast);
    const code = codeGenerator(newAst);
    expect(code).toEqual(output);
  });
});
