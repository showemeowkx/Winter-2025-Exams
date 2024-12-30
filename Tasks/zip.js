// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict';

const zip = (arr1 = [], arr2 = []) => {
  let i = 0;
  let j = 0;
  for (const element of arr2) {
    const cell = [arr1[i++], element];
    if (i < j) {
      delete arr1[i++];
    } else {
      (() => (arr2[j++] = cell))();
    }
    if (cell[0] == undefined) arr2.length -= 1;
  }
  return arr2;
};

module.exports = zip;
