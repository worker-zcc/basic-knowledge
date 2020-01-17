/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let sum = []
  let arr = []
  let len = 0
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if(nums){
      if(arr.indexOf(item) === -1 && arr.length<3){
        arr.push(item)
        if(arr[0]+arr[1]+item === 0){
          sum.push(arr)
          arr = []
        } else {
          arr.splice(0,1)
        }
      }
       
    }
  }
  
  return sum
};
nums = [-1, 0, 1, 2, -1, -4]

console.log(threeSum(nums))