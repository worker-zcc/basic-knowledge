/*
 * @LastEditors  : zcc
 * @Date: 2019-12-28 16:35:45
 * @Description: 优先级队列（先排序插插入）
 */
  function PriorityQueue() {
    this.priorityQueueArr = []
    // QueueElement相当于一个内部类，在本方法中相当于返回了一个对象
    function QueueElement(item, level){
      this.item = item
      this.level = level
    }
    // 队列和优先级队列的区别主要是插入的方法，所以这里只写了插入方法
    PriorityQueue.prototype.enqueue = function (item, level) {
      let elemet =new QueueElement(item,level)
      if(this.priorityQueueArr.length=== 0){
        this.priorityQueueArr.push(elemet)
      } else{
        let added = true
        for (let i = 0; i < this.priorityQueueArr.length; i++) {
          if(elemet.level<this.priorityQueueArr[i].level){
            this.priorityQueueArr.splice(i,0,elemet)
            added =false
            break
          }
        }
        if(added){
          this.priorityQueueArr.push(elemet)
        }
      }
    }
  }
  let priorityQueue = new PriorityQueue()
  priorityQueue.enqueue('b',3)
  priorityQueue.enqueue('d',10)
  priorityQueue.enqueue('a',1)
  priorityQueue.enqueue('c',7)
  priorityQueue.enqueue('e',20)
  console.log(priorityQueue)