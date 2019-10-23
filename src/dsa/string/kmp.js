function getPartMatchTable(str) {
  if (!str) {
    return [];
  }

  const matchTable = [];
  for (let i = 0; i < str.length; i++) {
    let prefix = '';
    let suffix = '';
    const partStr = str.slice(0, i + 1);
    for (let j = 0; j < i; j++) {
      prefix = partStr.slice(0, j + 1);
      suffix = partStr.slice(-j - 1);
      if (prefix === suffix) {
        matchTable[i] = prefix.length;
      }
    }
    matchTable[i] = matchTable[i] || 0;
  }

  return matchTable;
}

export default function kmp(sourceStr, subStr) {
  const matchTable = getPartMatchTable(subStr);

  for (let i = 0; i < sourceStr.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (sourceStr[i + j] === subStr[j]) {
        // the last item
        if (j === subStr.length - 1) {
          return i;
        }
      }
      else {
        if (j === 0) {
          break;
        }
        else {
          i += (j + 1) - matchTable[j] - 1;
        }
      }
    }
  }

  return -1;
}
