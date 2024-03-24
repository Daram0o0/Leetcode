/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [12, 345, 2, 6, 7896]

var findNumbers = function (nums) {
  let count = 0
  nums.forEach(val => {
    if ((val+"").length % 2 === 0) count++
  })

  return count
};
