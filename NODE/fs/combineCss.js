/*
  • 读取CSS目录中的所有文件：找到后缀名是.css的
  • 依次读取css文件中的内容，最后把所有内容合并在一起
  • 把合并后的结果放到DIST文件夹的index.css文件中
*/
let {
  readFile,
  readdir,
  writeFile
} = require('./promiseFs.js')

/**未压缩css代码
 * 利用less压缩css代码*/
let less = require('less')
readdir('./css').then(res=>{
  // 过滤所有css文件
  let css = res.filter(item => /\.css$/i.test(item))
  css = css.map(item=>{
    // 读取文件内容
    return readFile(`./css/${item}`)
  })
  return Promise.all(css)
}).then(res=>{
  // 拼接css代码
  res = res.join("\n")
  return new Promise((resolve,reject)=>{
    // 基于less模块进行css压缩
    less.render(res,{
      // less模块规定：设置压缩
      compress:true
    },(err,result)=>{
      if(err !== null) reject(err)
      // result是一个对象，对象包含css压缩后的代码
      resolve(result.css)
    })
  })
}).then(res=>{
  // 把压缩后的css代码写入指定的文件
  return writeFile('./dist/index.css',res)
}).then(() =>{
  console.log(`创建成功~~`)
})
/*未压缩css代码
 * readdir('./css').then(res=>{
  let css = res.filter(item => /\.css$/i.test(item))
  css = css.map(item=>{
    // 读取文件内容
    return readFile(`./css/${item}`)
  })
  return Promise.all(css)
}).then(res=>{
  res = res.join("\n")
  return writeFile('./dist/index.css',res)
}).then(() =>{
  console.log(`创建成功~`)
})*/