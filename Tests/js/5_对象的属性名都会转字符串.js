/**
 * 可以变相理解为一个字符串中的属性名都是字符串
 * a['123'] === a[123]
 */
var a={},b='123',c=123
a[b] = 'b'
a[c] = 'c'
// a = {123: "c"}
console.log(a[b])//=>'c' 

/**
 * Symbol 是唯一值
 * Symbol('123') !== Symbol('123')
 */

var a={},b=Symbol('123') ,c=Symbol('123')
a[b] = 'b'
a[c] = 'c'
// a = {Symbol(123): "b", Symbol(123): "c"}
console.log(a[b])//=>'b'

/**
 * var a={},b=[12,23];a[b] = 10 //=> a{12,23:10} 调用了Array上面的toString方法
 * 
 * 对象的属性名不能是对象，遇到对象属性名会默认转换成字符串
 * 题目中的a[b] 即 调用的是Object的toString(),返回的结果是[Object Object]
 */
var a={},b={key:'123'} ,c={key:'456'}
a[b] = 'b'
a[c] = 'c'
// a = {[Object Object]:c}
console.log(a[b])//=>'c'