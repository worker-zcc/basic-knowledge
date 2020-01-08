/*
 * @LastEditors  : zcc
 * @Date: 2020-01-08 19:35:46
 * @Description:  
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2).sort((a,b)=>a-b)
    const divisor = parseInt(nums.length/2)
    if(nums.length%2===1){
      return nums[divisor+1]
    } else {
      return (nums[divisor]+nums[divisor+1])/2
    }
};
findMedianSortedArrays([1,3],[2,4,6])
// 用优先级队列做（待完善）
var findMedianSortedArrays1 = function(nums1, nums2) {
  //TODO
};
findMedianSortedArrays1([1,3],[2,4,6])