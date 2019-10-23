/**
 * https://mrluo.life/article/detail/115
 * https://www.html.cn/archives/7324
 * https://www.cnblogs.com/wangmeijian/p/4163936.html
 */

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
