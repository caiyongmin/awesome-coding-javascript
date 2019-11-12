export function thousands1(num) {
  num = Number(num);

  if (!num) {
    return '';
  }

  return num.toLocaleString('zh');
}

export function thousands2(num) {
  num = Number(num);

  if (!num) {
    return '';
  }

  num = String(num);
  return num.replace(/(\d+?)(?=(\d{3})+$)/g, '$1,');
}
