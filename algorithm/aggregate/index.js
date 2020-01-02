/*
 * @Page: 集合类Set
 * @Author: zcc
 * @Date: 2020-01-02 10:40:05
 * @Last Modified by: zcc
 */

function Set() {
  this.aggregate = Object.create(null)
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
    this.aggregate = Object.create(null)
  }
  Set.prototype.size = function () {
    return Object.keys(this.aggregate).length
  }
  Set.prototype.values = function () {
    return Object.keys(this.aggregate)
  }
  Set.prototype.union = function (otherSet) {
    let newSet = new Set()
    this.values().forEach(item => {
      newSet.add(item)
    })
    otherSet.values().forEach(item => {
      newSet.add(item)
    })
    return newSet
  }
  Set.prototype.intersection = function (otherSet) {
    let newSet = new Set()
    otherSet.values().forEach(item => {
      if (this.has(item)) {
        newSet.add(item)
      }
    })
    return newSet
  }
  Set.prototype.difference = function (otherSet) {
    let newSet = new Set()
    this.values().forEach(item => {
      if (!otherSet.has(item)) {
        newSet.add(item)
      }
    })
    return newSet
  }
  Set.prototype.subset = function (otherSet) {
    for (let i = 0; i < this.values().length; i++) {
      if (!otherSet.has(this.values()[i])) {
        return false
      }
    }
    return true
  }
}
let set = new Set()
set.add('A')
set.add('B')
set.add('C')
set.add('D')
set.add('M')
let set1 = new Set()
set1.add('f')
set1.add('g')
set1.add('k')
set1.add('D')
set1.add('D')
set1.add('A')
console.log(set.union(set1));
console.log(set.intersection(set1));
console.log(set.difference(set1));
let set2 = new Set()
set2.add('A')
set2.add('B')
set2.add('C')
set2.add('D')
set2.add('E')
set2.add('F')
console.log(set.subset(set2));