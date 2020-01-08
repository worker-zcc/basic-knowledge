/**
 * @param {string} s
 * @return {number}
 * @description 最长回文子串必须连续，而最长回文子序列可以在原字符串中不连续
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var lengthOfLongestSubstring = function (s) {
  let arrStr = Array.from(s)
  if (arrStr.length === 1) return 1
  let arr = []
  let str = ''
  let len = ''
  for (let i = 0; i < arrStr.length; i++) {
    const element = arrStr[i];
    if (str.indexOf(element) === -1) {
      str += element
      len = str.length > len ? str.length : len
    } else {
      arr.push(str)
      str = element
    }
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