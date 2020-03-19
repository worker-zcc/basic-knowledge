import express from 'express'
// 执行express创建一个服务，返回结果app用来操作这个服务
let app = express()

// app.listen:创建一个WEB服务，监听端口号
app.listen(8080,()=>{
  console.log('server is create success! listening on 8080 port')
})
// 静态文件的请求处理
app.use(express.static('./static'));
app.use((req,res,next)=>{
  /**res.status 设置响应状态码*/
  res.status(404)
  res.send('NOT FOUND!')
   
  // 还可以重定向
  // res.redirect(301,'http://www.google.com/')
})

/**
 * REQUEST对象（REQ）
    * req.path:存储请求地址的路径名称 
    * req.query:存储问号传参的相关信息（对象）
    * req.body:在配合body-parser中间件的情况下，req.body存储的是请求主题传递过来的信息
    * req.method:请求方式
    * req.get:获取响应头信息
 * RESPONSE对象(RES)
    * res.end:类似于原生操作，结束响应并返回内容
    * res.json:返回给客户端的内容，只不过传递数据可以是JSON对象（内部会帮我们转换为JSON字符串）
              * 服务返回给客户端的内容一般是字符串或者BUFFER 格式
    * res.send:最常用的给客户端返回信息（可以传递对象/PATH/BUFFER/TXT等）,
              * 这些都是基于send是通过响应主体返回给客户端信息
    * res.status:返回状态码
    * res.type:返回content-type的类型
    * res.set:设置响应头信息 res.set([key],[value]) res.set({key:value,...})
 */