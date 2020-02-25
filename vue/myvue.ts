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
    defineReactive(value,key)
  })
}
function defineReactive(obj,key) {
  Object.defineProperty(obj,key,{
    enumerable: true,
    configurable: true,
    get:function () {
      return value[key]
    },
    set: function (val) {
      obj[key] = val
    }
  })
}