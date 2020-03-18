/**
 * 服务器端要做的常规任务
 *  1.创建服务：IIS/NGINX/APPACHE/NODE(基于http/https模块)
 *  2.接受客户端的请求信息（请求静态资源文件的，也有请求数据的）
 *  3.查找到对应的资源文件那日容或者对应的数据信息
 *  4.把找到的内容返回给客户端
 *  
 */

 let http = require('http')
 let url = require('url')

 // http.createServer 创建服务
 /*let server = http.createServer()
 const port = 8686*/
 // 监听端口号
 /*server.listen(port,()=>{
  // 当服务创建成功，并且端口号已经监听完成，触发此回调函数执行
  console.log(`server is create success!listing on ${port} port!`)
 })*/

 // 如果端口号被占用，自动加一 (这部分代码有问题)
 /*function listen(port){
  try {
    server.listen(port,()=>{
      // 当服务创建成功，并且端口号已经监听完成，触发此回调函数执行
      console.log(`server is create success!listing on ${port} port!`)
     })
  } catch (err) {
    listen(port++)
  }
 }
 listen(port)*/

 let server = http.createServer((req,res)=>{
   // => 当客户端想当前服务发送请求的时候会触发此回调函数（请求N次出发N次）
   // 而且每次都能获取本次请求的相关信息
   // req：request REQ对象中存储了客户端的请求信息
   // res：response RES对象中提供了对性的属性和方法，可以让服务器返回给客户端信息
   res.end(`hello world`)
 })
 const port = 8686
 server.listen(port,()=>{
  // 当服务创建成功，并且端口号已经监听完成，触发此回调函数执行
  console.log(`server is create success!listing on ${port} port!`)
 })