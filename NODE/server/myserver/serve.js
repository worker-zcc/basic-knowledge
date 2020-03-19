// 创建自己的服务器
let http = require('http'),
  url = require('url'),
  path = require('path'),
  mime = require('mime')

let {
  readFile
} = require('../../fs/promiseFs')

let server = http.createServer((req, res) => {
  /*let {
    url: requstURL, //URL中存储的是请求资源的路径名称和问号传参的信息
  } = req*/
  let {
    pathname, // 请求资源的路径名称
    query // 问号传参信息（键值对）
  } = url.parse(req.url, true)
  // 根据请求的路径和名称，让其去static文件中查找对应的资源
  pathname = path.resolve('./static') + pathname

  /**获取后缀名 */
  let suffixREG = /\.([0-9a-zA-Z]+)$/,
      // suffix为了得到其后缀名
      suffix = suffixREG.test(pathname) ? suffixREG.exec(pathname)[1] : null,
      encodeREG = /^(PNG|GIF|JPG|JPEG|WEBP|BMP|ICO|SVG|MP3|MP4|WAV|OGG|M3U8)$/i,
      encoding = ''
  if(suffix !== null){
    !encodeREG.test(suffix) ? encoding = 'charset=utf8;': null
    suffix = mime.getType(suffix)
    readFile(pathname).then(result=>{
      res.writeHead(200,{
        'content-type':`${suffix};${encoding}`
      });
      res.end(result);
    }).catch(err=>{
      res.writeHead(404,{
        'content-type':`application/json;charset=utf8;`
      });
      res.end(JSON.stringify(err))
    })
    return
  }
  // 项目中我们一般认为有后缀名的是为了请求web静态资源文件（web服务器处理），没有后缀名的是要求请求数据（数据服务器API）
  /*readFile(pathname).then(result => {
      // 返回的数据格式一般都是字符串或者Buffer
      // write服务器返回信息（可以执行多次）
      res.write(result);
      // end告诉客户端返回信息已经结束了（必须写的）
      // RES.END相当于基于响应主体返回信息，还需要掌握基于响应头返回信息
      res.end()
    res.writeHead(200, {
      'content-type': 'text/html;charset=utf8' // 客户端返回的数据格式和编码信息
    })
    res.end(result)
  }).catch(err => {
    res.end(`no find`)
  })*/
})

const port = 8688
// 端口监听
server.listen(port, () => {
  console.log(`server is create success!listing on ${port} port!`)
})