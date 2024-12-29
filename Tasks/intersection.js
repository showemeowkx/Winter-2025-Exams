// Find an intersection of two dictionaries

'use strict';

const intersection = (obj1, obj2) => {
  const keys = Object.keys(obj1).filter((key) => obj1[key] === obj2[key]);
  return keys.reduce((acc, key) => ({ ...acc, [key]: obj1[key] }), {});
};

module.exports = intersection;
