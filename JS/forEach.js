/*
 * @Page: forEach
 * @Author: zcc
 * @Date: 2020-01-09 14:43:49
 */

Array.prototype.zccforEach = function (fn) {
  const length = this.length
  for (let i = 0; i < length; i++) {
    fn(this[i], i)
  }
}
const arr = [1, 2, 3]
arr.zccforEach((item, index) => {
  console.log(item, index)
})
