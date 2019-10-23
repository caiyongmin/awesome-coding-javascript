function checkStr(strs, i) {
  // filter empty item
  const targetStrs = strs.map(str => str[i]).filter(str => str);
  if (targetStrs.length !== strs.length) {
    return false;
  }
  const set = new Set(targetStrs);  // check all item is equal
  return set.size === 1;
}

export default function longestCommonSubStr(strs) {
  const start = strs[0];
  let result = '';
  let i = 0;

  while (checkStr(strs, i)) {
    result += start[i];
    i++;
  }

  return result;
}
