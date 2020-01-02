/*
 * @Page: 集合类Set
 * @Author: zcc
 * @Date: 2020-01-02 10:40:05
 * @Last Modified by: zcc
 */

function Set() {
  this.aggregate = new Object(null)
  Set.prototype.add = function (value) {
    if (this.has(value)) {
      return false
    } else {
      this.aggregate[value] = value
      return true
    }
  }
  Set.prototype.has = function (value) {
    return this.aggregate.hasOwnProperty(value)
  }
  Set.prototype.remove = function (value) {
    if (this.has(value)) {
      delete this.aggregate[value]
      return true
    } else {
      return false
    }
  }
  Set.prototype.clear = function () {
    this.aggregate = new Object(null)
  }
  Set.prototype.size = function () {
    return Object.keys(this.aggregate).length
  }
  Set.prototype.values = function () {
    return Object.keys(this.aggregate)
  }
}
let set = new Set()
set.add('A')
set.add('B')
set.add('C')
set.add('D')
console.log(set)
console.log(set.add('A'))

console.log(set.has('A'))

set.remove('A')
console.log(set)

console.log(set.size())
console.log(set.values())
set.clear()
console.log(set)