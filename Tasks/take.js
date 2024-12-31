// Copy all listed keys from dictionary

'use strict';

const take = (dict, ...xor) => {
  const keys = Object.keys(dict);
  keys.forEach((key) => {
    if (!xor.includes(key)) {
      delete dict[key];
    }
  });
  return dict;
};

module.exports = take;
