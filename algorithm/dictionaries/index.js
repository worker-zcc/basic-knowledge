/*
 * @Page: 字典
 * @Author: cong
 * @Date: 2020-01-02 14:35:19
 * @Last Modified by: zcc
 */
function Dictionaries() {
  this.dictionaries = {}
  Dictionaries.prototype.set = function (key, val) {
    this.dictionaries[key] = val
  }
  Dictionaries.prototype.has = function (key) {
    return this.dictionaries.hasOwnProperty(key)
  }
  Dictionaries.prototype.get = function (key) {
    return this.has(key) ? this.dictionaries[key] : undefined
  }
  Dictionaries.prototype.remove = function (key) {
    if (this.has(key)) {
      delete this.dictionaries[key]
      return true
    } else {
      return false
    }
  }
  Dictionaries.prototype.keys = function () {
    return Object.keys(this.dictionaries)
  }
  Dictionaries.prototype.values = function () {
    return Object.values(this.dictionaries)
  }
  Dictionaries.prototype.clear = function () {
    this.dictionaries = Object.create(null)
  }
  Dictionaries.prototype.size = function () {
    return this.keys.length
  }
}