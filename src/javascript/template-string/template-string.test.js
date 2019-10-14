import compile from './template-string';

describe('template string', () => {
  it('compile', () => {
    const template = `
      <ul>
        <% for(let i=0; i < data.size.length; i++) { %>
          <li><%= data.size[i] %></li>
        <% } %>
      </ul>
    `;
    const data = { size: [ 'X', 'XL', 'XLL' ] };
    const expectResult = '<ul><li>X</li><li>XL</li><li>XLL</li></ul>';
    const result = compile(template, data);
    expect(result.replace(/\s/g, '')).toBe(expectResult);
  });
});
