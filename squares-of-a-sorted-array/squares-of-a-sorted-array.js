/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = nums.map(val => val**2)
    return arr.sort((a,b)=>a-b)
};