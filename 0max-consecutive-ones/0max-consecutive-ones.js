/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
const arr = nums.join("").split("0")
let max = 0

arr.forEach(val => {
  max = max < val.length ? val.length : max
})

return max
};