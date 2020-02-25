/*
 * @LastEditors: zcc
 * @Date: 2020-02-25 15:02:17
 * @Description:  vue的Object.defineProperty
 */
class Vue {
  constructor(options){
    this._data = options.data
    this.observer(this._data)
  }
  observer(data){
    if(!data || typeof data !== 'object') return

    Object.keys(data).forEach(item => {
      this.defineReactive(data, item, data[item])
    })
  }
  defineReactive(object, key, val){
    Object.defineProperty(object,key,{
      enumerable: true,/* 属性可枚举 */
      configurable: true,/* 属性可被修改或删除 */
      get: function reactiveGetter(){/* 实际上会依赖收集，下一小节会讲 */
        return val
      },
      set: function reactiveSetter(newVal){
        if(newVal === val) return
        cb(newVal)
      }
    })
  }
}

function cb(val) {
  console.log(val+'你的小宝贝试图更新啦！');
}
let o = new Vue({
  data: {
      test: "I am test."
  }
});
o._data.test = "hello,world.";
