/*
 * @LastEditors  : zcc
 * @Date: 2020-01-04 16:19:39
 * @Description:  哈希函数
 */
/**
 * @function HashFn
 * @description 哈希函数 1:将字符串转为较大的数字，2:将大的数字hashcode压缩到数组范围内
 * @param {string} str 字符串
 * @param {number} size 数组范围
 */
function HashFn(str, size){
  let hashCode = 0
  for (let i = 0; i < str.length; i++) {
    // 霍纳算法：37 *hashCode + str.charCodeAt(i) 
    // 将字符串的每一个字符转变为unicode编码：str.charCodeAt(i)
    hashCode= 37 *hashCode + str.charCodeAt(i)
    
  }
  // 取余操作
  let index = hashCode % size
  return index
}
console.log(HashFn('abc',7)); //4
