/**
 * 题目：each(fn,this)
 */

// TODO 未做完
let arr = [10, 20, 30, 'AA', 40]
let obj = {}

Array.prototype.each = function (callback, thisArg) {
  thisArg = thisArg || window
  _this = thisArg
  const length = this.length
  let arr = []
  for (let i = 0; i <length ; i++) {
    if(callback(this[i],i )){
      arr.push(callback(this[i],i ))
    } else {
      break
    }
  }
  
  return arr
}


let arr1 = arr.each(function (item) {
  if(isNaN(item)){
    return false
  }
  return item * 10
}, obj)
console.log(arr1)