/*
 * @LastEditors  : zcc
 * @Date: 2020-01-08 19:08:20
 * @Description:  
 */
/**
 * @param {string} s
 * @return {number}
 * @description 最长回文子串必须连续，而最长回文子序列可以在原字符串中不连续
 */

var lengthOfLongestSubstring = function (s) {
  let arrStr = Array.from(s)
  if (arrStr.length === 1) return 1
  let str = ''
  let len = ''
  for (let i = 0; i < arrStr.length; i++) {
    const element = arrStr[i];
    const index = str.indexOf(element)
    if (index === -1) {
      str += element
    } else {
      str = str.slice(index+1)+element
    }
    len = str.length > len ? str.length : len
  }
  return len
}
const a = lengthOfLongestSubstring('abcabcbb')
console.log(a)
const b = lengthOfLongestSubstring('bbbbb')
console.log(b)
const c = lengthOfLongestSubstring('pwwkew')
console.log(c)
const d = lengthOfLongestSubstring('dvdf')
console.log(d)