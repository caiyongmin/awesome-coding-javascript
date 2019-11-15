import { compile } from './template-string';

describe('template string', () => {
  it('template is empty', () => {
    const template = `
      <p><%= data.price %> 元</p>
    `;
    const result = compile(template, null);

    expect(result).toBe(template);
  });

  it('compile a paragraph', () => {
    const template = `
      <p><%= data.price %> 元</p>
    `;
    const data = {
      price: 10.1,
    };
    const expectResult = '<p>10.1元</p>';
    const result = compile(template, data);

    expect(result.replace(/\s/g, '')).toBe(expectResult);
  });

  it('compile a list', () => {
    const template = `
      <ul>
        <% for(let i=0; i < data.size.length; i++) { %>
          <li><%= data.size[i] %></li>
        <% } %>
      </ul>
    `;
    const data = {
      size: [ 'X', 'XL', 'XLL' ],
    };
    const expectResult = '<ul>'
    + '<li>X</li>'
    + '<li>XL</li>'
    + '<li>XLL</li>'
    +'</ul>';
    const result = compile(template, data);

    expect(result.replace(/\s/g, '')).toBe(expectResult);
  });
});
