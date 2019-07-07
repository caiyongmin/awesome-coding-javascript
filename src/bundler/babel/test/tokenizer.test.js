import Tokenizer from './../lib/tokenizer';
import { input, tokens } from './data';

describe('tokenizer test cases', () => {
  it('get input Tokens', () => {
    const instance = new Tokenizer(input);
    const _tokens = instance.getTokens();
    expect(JSON.stringify(_tokens)).toBe(JSON.stringify(tokens));
  });
});
