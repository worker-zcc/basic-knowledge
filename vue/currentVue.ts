class Vue{
  _data : any
  constructor(options){
    this._data = options.data
    observe(this._data)
  }
}

function observe(value) {
  if(!value || typeof value !== 'object' ) { return }
  // 一层数据，不考虑递归
  Object.keys(value).forEach(key=>{
    defineReactive(value,key,value[key])
  })
}
function defineReactive(obj,key,val) {
  Object.defineProperty(obj,key,{
    enumerable: true,
    configurable: true,
    get:function () {
      return val
    },
    set: function (newval) {
      if (newval === val) return;
      cb(newval);
    }
  })
}
function cb (val) {
  /* 渲染视图 */
  console.log("视图更新啦～");
}