/*
 * @LastEditors  : zcc
 * @Date: 2019-12-28 14:59:57
 * @Description:  基础队列（数组）
 */

 function BaseQueue(){
   this.queueArr = []
   BaseQueue.prototype.enqueue = function(queueNum){
     this.queueArr.push(queueNum)
   }
   BaseQueue.prototype.dequeue = function () {
     return this.queueArr.shift()
   }
   BaseQueue.prototype.front = function(){
     return this.queueArr[0]
   }
   BaseQueue.prototype.isEmpty = function(){
     return this.queueArr.length === 0
   }
   
   BaseQueue.prototype.size = function () {
     return this.queueArr.length
   }

   BaseQueue.prototype.toString = function(){
     let queueStr = ''
     for (let i = 0; i < this.queueArr.length; i++) {
      queueStr += this.queueArr[i]+' ';
     }
     return queueStr
    //  return this.queueArr.join(' ')
   }
 }

 let queue = new BaseQueue()

 queue.enqueue('a')
 queue.enqueue('b')
 queue.enqueue('c')

 console.log(queue)
 queue.dequeue()

 console.log(queue)
 console.log(queue.toString())
 console.log(queue.isEmpty())
 console.log(queue.size())
 console.log(queue.front())