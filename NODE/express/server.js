let express = require('express')
let qs = require('qs')
let bodyParser = require('body-parser')

let promiseFs = require('../fs/promiseFs')
let app = express()

app.listen(8080, () => {
  console.log('server is create success! listening on 8080 port')
})

// 中间件bodyParser：在创建完服务和处理数据（文件请求之前），我们提前做一些事情的公共事情


// 静态文件的请求处理
app.use(express.static('./static'));
app.use((req, res, next) => {
  res.status(404)
  res.send('NOT FOUND!')
})