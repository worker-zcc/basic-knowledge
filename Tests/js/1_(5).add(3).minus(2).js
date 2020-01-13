/**
 * (5).add(3).minus(2)
 */
~ function () {

  function check(num) { // 边界检查
    num = Number(num)
    return isNaN(num) ? 0 : num
  }

  function add(num) {
    num = check(num)
    return this + num
  }

  function minus(num) {
    num = check(num)
    return this - num
  }

  ['add', 'minus'].forEach(item => {
    Number.prototype[item] = eval(item)
  })

}()
console.log((5).add(3).minus(2))
