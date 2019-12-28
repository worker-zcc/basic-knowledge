/*
 * @LastEditors  : zcc
 * @Date: 2019-12-28 16:35:45
 * @Description: 优先级队列(先插入再排序（F）：队列插入后就不能在排序了，因为是链式结构，一头出，一头进；（但是一头出，一头进，怎们又可以随便插入呢？）)
 */
function PriorityQueue() {
  this.priorityQueueArr = []
  function QueueElement(item, level){
    this.item = item
    this.level = level
  }
  PriorityQueue.prototype.enqueue = function (item, level) {
    let elemet =new QueueElement(item,level)
    this.priorityQueueArr.push(elemet)
    this.priorityQueueArr.sort((a,b)=>{
      return a.level-b.level
    })
  }
}
let priorityQueue = new PriorityQueue()
priorityQueue.enqueue('b',3)
priorityQueue.enqueue('d',10)
priorityQueue.enqueue('a',1)
priorityQueue.enqueue('c',7)
priorityQueue.enqueue('e',20)
console.log(priorityQueue)