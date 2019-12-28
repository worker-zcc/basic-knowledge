/*
 * @LastEditors  : zcc
 * @Date: 2019-12-28 15:41:33
 * @Description:  击鼓传花（基于队列-数组）预定一个数字，一组人围成一圈轮流数数，数到预定数字的人淘汰，以此循环，直到只剩一个人
 */
 
 import BaseQueue from "./basicQueue"

 function passGame(arr,num){
   let queue = new BaseQueue()
  
   arr.forEach(item => {
     queue.enqueue(item)
   });
   // 当队列中的人数大于1的时候
   // 队列中的人循环数数，数的数不是num的时候，把该人放到队列末尾
   // 是num的时候，删除掉
   // 返回最终剩下的人的索引
   while(queue.size()>1){
     for (let i = 0; i < num-1; i++) {
       queue.enqueue(queue.dequeue())
     }
     queue.dequeue()
   }
   return `最后一个人是${queue.front()}，他的下标是${arr.indexOf(queue.front())}`
 }
 
 const lastIndex = passGame(['a','b','c','d','e','f','g'],5)
 console.log(lastIndex)