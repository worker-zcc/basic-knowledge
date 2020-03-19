/*
 * @LastEditors: zcc
 * @Date: 2020-03-19 16:57:28
 * @Description:  
 */
let express = require('express')
let qs = require('qs')
let bodyParser = require('body-parser')

let promiseFs = require('../fs/promiseFs')
let app = express()

app.listen(8080, () => {
  console.log('server is create success! listening on 8080 port')
})

/**中间件bodyParser：在创建完服务和处理数据（文件请求之前），我们提前做一些事情的公共事情
 * 例如：我们需要在所有请求之前，把客户端基于请求主体传递的信息获取到
 * 存放到req.body属性上，这样以后具体的接口处理方法中，想要获取信息直接通过req.body获取即可
 * app.use((req,res,next)=>{}):使用中间件，next执行是让其接续执行下面该做的事情
 *   */
/**
 * app.use((req,res,next)=>{
  let chunk =''
  req.on('data',chart =>{
    chunk += chart
  })
  req.on('end',()=>{
    console.log(chunk)
    req.body = qs.parse(chunk)
    next()//一定要有next，不执行next就不往下走了
  })
})*/
/** 通过执行不同的方法，把客户端传递的内容转化为对象存放到REQ.BODY上
 * bodyParser.urlencoded/json/raw...
 */
app.use(bodyParser.urlencoded({ extended:true }))
app.post('/add', (req, res) => {
  res.status(200)
  res.type('application/json')
  promiseFs.writeFile('./static/clientData.json',req.body)
  .then(()=>{
    res.send({
      code:0,
      codeText:'ok'
    })
  }).catch(err=>{
    res.send({
      code:1,
      codeText:'error'
    })
  })
})

// 静态文件的请求处理
app.use(express.static('./static'));
app.use((req, res, next) => {
  res.status(404)
  res.send('NOT FOUND!')
})