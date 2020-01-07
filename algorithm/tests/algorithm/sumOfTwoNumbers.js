/*
 * @LastEditors  : zcc
 * @Date: 2020-01-07 19:12:31
 * @Description:  两数之和
 */
var twoSum1 = function(nums, target) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
}
function twoSum2(nums, target) {
  const len = nums.length
  let result = {}
  for (let i = 0; i < len; i++) {
    const diff = target - nums[i]
    if (diff in result) {
      return [result[diff], i]
    } else {
      result[nums[i]] = i
    }
  }
}
var twoSum3 = function(nums, target) {
  var result = new Map()
  var len = nums.length
  var diff = 0
  var out = []
  for (var i = 0; i < len; i++) {
    diff = target - nums[i]
    var diffVal = result.get(diff)
    if (result.has(diff) && diffVal != i) {
      out.push(i)
      out.push(diffVal)
      return out
    } else {
      result.set(nums[i], i)
    }
  }
}

console.time("a")
twoSum1([3, 2, 4], 6)
console.timeEnd("a")
console.time("b")
twoSum2([3, 2, 4], 6)
console.timeEnd("b")
console.time("c")
twoSum3([3, 2, 4], 6)
console.timeEnd("c")
