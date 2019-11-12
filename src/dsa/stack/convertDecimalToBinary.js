import Stack from './stack';

export default function convertDecimalToBinary(dec) {
  dec = Number(dec);

  if (Number.isNaN(dec)) {
    return '';
  }

  const stack = new Stack();
  while (dec >= 2) {
    const n = dec % 2;
    stack.push(n);
    dec = Math.floor(dec / 2);
  }
  stack.push(dec);

  let binStr = '';
  while (!stack.isEmpty()) {
    binStr += stack.pop();
  }
  return binStr;
}
