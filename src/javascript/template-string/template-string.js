export default function compile(str, data) {
  if (!str || !data) {
    return str;
  }

  const statementRegEXp = /<%=([^%>]+)%>/g;
  const expressionRegExp = /<%([^%>]+)%>/g;

  let template = str
    .replace(statementRegEXp, '`) \n add($1); \n add(`')  // must replace statement first
    .replace(expressionRegExp, '`) \n $1 \n add(`');

  template = `add(\`${ template }\`)`;

  // must the ` and '(funtion () {})' typo together
  const funcString =
  `(function (data) {
    let output = "";
    const add = str => output += str;
    ${template};
    return output;
  })`;
  const parse = (new Function(`return ${funcString};`))();
  return parse(data);
}
