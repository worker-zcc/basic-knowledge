let express = require('express')
let qs = require('qs')
let promiseFs = require('../fs/promiseFs')
let app = express()

app.listen(8080, () => {
  console.log('server is create success! listening on 8080 port')
})

// 数据API请求
// 客户端请求地址 http://127.0.0.1:8080/list?lx=pro  GET
app.get('/list', (req, res) => {
  let {
    lx
  } = req.query
  /* 如果不传默认pro
  let { lx='pro' } = req.query*/
  promiseFs.readFile('./static/data.json')
    .then(result => {
      result = JSON.parse(result)
      result = lx === 'dev' ? result.dev : result.dep
      res.status(200);
      res.type('application/json')
      res.send(result)
    }).catch(err => {
      res.status(500)
      res.type('application/json')
      res.send(err)
    })
})
// 客户端请求地址 http://127.0.0.1:8080/add  POST
// 服务器接收到信息后把信息存储在clientData.json的信息中，并返回给客户端成功或者失败

app.post('/add', (req, res) => {
 let chunk =''
 req.on('data',chart =>{
   // =>正在分批接受客户端传递的主体信息 chart：当前接收部分
   chunk += chart
 })
 req.on('end',()=>{
   console.log(qs.parse(chunk))
 })
  /* 如果不传默认pro
  let { lx='pro' } = req.query*/
  promiseFs.readFile('./static/data.json')
    .then(result => {
      result = JSON.parse(result)
      result = lx === 'dev' ? result.dev : result.dep
      res.status(200);
      res.type('application/json')
      res.send(result)
    }).catch(err => {
      res.status(500)
      res.type('application/json')
      res.send(err)
    })
})
// 静态文件的请求处理
app.use(express.static('./static'));
app.use((req, res, next) => {
  res.status(404)
  res.send('NOT FOUND!')
})