/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0); // i(1)번째 인덱스에 0(3)을 삽입 1에서부터 0(2)개를 지움
      i++;
      arr.pop();
    }
  }
  return arr;
};