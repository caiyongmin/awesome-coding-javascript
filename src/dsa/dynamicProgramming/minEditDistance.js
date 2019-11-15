/**
 * matrix[i][j] = Math.min(
 *    matrix[i - 1][j] + 1,
 *    matrix[i][j - 1] + 1,
 *    matrix[i - 1][j - 1] + (str1[i - 1] === str2[j - 1] ? 0 : 1)
 * );
 */
export default function minEditDistance(str1, str2) {
  if (!str1 || !str2) {
    return Math.max(str1.length, str2.length);
  }

  const len1 = str1.length;
  const len2 = str2.length;
  const matrix = [];

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [];

    for (let j = 0; j <= len2; j++) {
      if (i === 0) {
        matrix[i][j] = j;
      }
      else if (j === 0) {
        matrix[i][j] = i;
      }
      else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + (str1[i - 1] === str2[j - 1] ? 0 : 1)
        );
      }
    }
  }

  return matrix[len1][len2];
}
