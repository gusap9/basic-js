const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArray = [];
  let sortArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      newArray[i] = -1;
    } else {
      sortArray.push(arr[i]);
    }
  }

  let count = 0;
  sortArray.sort((a, b) => a - b);

  for (let j = 0; j < arr.length; j++) {
    if (newArray[j] === undefined) {
      newArray[j] = sortArray[count];
      count++;
    }
  }

  return newArray;
}

module.exports = {
  sortByHeight
};
