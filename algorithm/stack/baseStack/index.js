/*
 * @LastEditors  : zcc
 * @Date: 2019-12-28 13:09:42
 * @Description:  基础栈
 */

function Stack(){
  this.stackArr = []

  // 添加一个新元素到栈顶
  Stack.prototype.push = function(element){
    this.stackArr.push(element)
  }
  // 移除一个栈顶元素
  Stack.prototype.pop = function(element){
    this.stackArr.pop(element)
  }
  // 返回栈顶元素
  Stack.prototype.peek = function(){
    return this.stackArr[this.stackArr.length-1]
  }
  // 判断栈是否为空
  Stack.prototype.isEmpty = function(){
    return this.stackArr.length === 0 
  }
  // 返回栈里元素个数
  Stack.prototype.size = function(){
    return this.stackArr.length
  }

  // 返回字符串格式元素
  Stack.prototype.toString = function(){
    return this.stackArr.join(' ')
  }
}

let s = new Stack()

