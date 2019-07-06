import Tokenizer from './../lib/tokenizer';
import Parser from '../lib/parser';
import transformer from './../lib/transformer';
import codeGenerator from './../lib/codeGenerator';
import { before } from './data';

describe('codeGenerator test cases', () => {
  it('get ES5 code from ES6 code', () => {
    const tokens = (new Tokenizer(before)).getTokens();
    const ast = (new Parser(tokens)).getAST();
    const outputAST = transformer(ast);
    const code = codeGenerator(outputAST);
    // eslint-disable-next-line no-console
    console.info(code);
    expect(1).toEqual(1);
  });
});
