/*String.prototype.myIndexOf = function (str) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === str[0]) {
      if(this.slice(i,i+str.length) === str ){
        return i
      }
    }
  }
  return -1
}*/
/*String.prototype.myIndexOf = function (T) {
  let lenT = T.length,
    lenS = this.length
  for (let i = 0; i < lenS - lenT; i++) {
    if(this.substr(i,lenT) === T){
      return i
    }
  }
  return -1
}*/
// 正则
String.prototype.myIndexOf = function (T) {
  let reg = new RegExp(T)
  let res = reg.exec(this)
  return res === null ? -1 :res.index
}

let S = 'asdsdfghjkl',
  T = 'fgh'
console.log(S.myIndexOf(T))