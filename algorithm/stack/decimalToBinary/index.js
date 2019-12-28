/*
 * @LastEditors  : zcc
 * @Date: 2019-12-28 14:02:57
 * @Description:  十进制转二进制
 */
/**
 * @function decimalToBinary
 * @description 十进制转二进制
 * @param { decimaldecimalNum }
 */

 function decimalToBinary(decimalNum){
   let stackArr = []
   // 不确定循环次数的时候使用while
   while(decimalNum>0){
     stackArr.push(decimalNum%2)
     decimalNum = Math.floor(decimalNum/2)
   }
   let binaryStr = ''
   while(stackArr.length>0){
    binaryStr += stackArr.pop()
   }
   return binaryStr
 }

 console.log(decimalToBinary(100))
 console.log(decimalToBinary(10))
 console.log(decimalToBinary(1000))
