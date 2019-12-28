/**
 * @function decimalToBinary
 * @description 十进制转二进制
 * @param decimaldecimalNum 十进制数字
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
