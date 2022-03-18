// export const longestUniqueSubsttr = (input: string): number => {
//   const map = {};
//   let maxLen = 0;
//   let start = 0;
//   for (let end = 0; end < input.length; end++) {
//     const lastChar = input[end];
//     if (map[lastChar] === undefined) {
//       map[lastChar] = 0;
//     }

//     map[lastChar] += 1;

//     while (map[lastChar] > 1) {
//       let firstChar = input[start];
//       map[firstChar] -= 1;
//       start += 1;
//     }

//     maxLen = Math.max(maxLen, end - start + 1);
//   }
//   return maxLen;
// };
