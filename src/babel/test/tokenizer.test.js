import Tokenizer from './../lib/tokenizer';
import { before, beforeTokens } from './data';

describe('tokenizer test cases', () => {
  it('get before Tokens', () => {
    const instance = new Tokenizer(before);
    const tokens = instance.getTokens();
    expect(JSON.stringify(tokens)).toBe(JSON.stringify(beforeTokens));
  });
});
