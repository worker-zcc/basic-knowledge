// promiseFs封装
// fs基于NODEJS操作I/O
let fs = require('fs'),
  path = require('path'),
  exportsOBJ = {}

exportsOBJ['copyFile'] = function anonymous(pathname1, pathname2) {
  pathname1 = path.resolve(pathname1)
  pathname2 = path.resolve(pathname2)

  return new Promise((resolve, reject) => {
    fs['copyFile'](pathname1, pathname2, (err) => {
      // 请求失败
      if (err !== null) {
        reject(err)
        return;
      }
      // 请求成功
      resolve();
    })
  })
};

['writeFile', 'appendFile'].forEach(item => {
  exportsOBJ[item] = function anonymous(pathname, content) {
    pathname = path.resolve(pathname)
    content = contentHandle(content)
    return new Promise((resolve, reject) => {
      let encoding = suffixHandle(pathname),
        callback = (err, result) => {
          // 请求失败
          if (err !== null) {
            reject(err)
            return;
          }
          // 请求成功
          resolve(result);
        }
      if (item !== 'readFile') {
        encoding = callback
        callback = null
      }
      fs[item](pathname, content, encoding, callback)
    })
  }
});

// content不是字符串转化为JSON字符串
function contentHandle(content) {
  if (content !== null && typeof content === 'object') {
    content = JSON.stringify(content)
  } else if (typeof content !== 'string') {
    content += ''
  }
  return content
}


['readFile', 'readdir', 'mkdir', 'rmdir', 'unlink'].forEach(item => {
  exportsOBJ[item] = function anonymous(pathname) {

    pathname = path.resolve(pathname)

    return new Promise((resolve, reject) => {
      let encoding = suffixHandle(pathname),
        callback = (err, result) => {
          // 请求失败
          if (err !== null) {
            reject(err)
            return;
          }
          // 请求成功
          resolve(result);
        }
      if (item !== 'readFile') {
        encoding = callback
        callback = null
      }
      fs[item](pathname, encoding, callback)
    })
  }
});

// 根据后缀名返回编码格式 UTF8/NULL
function suffixHandle(pathname) {
  // 富文本资源不能使用UTF-8编码格式
  // 进行后缀名判断
  const reg = /\.([0-9a-zA-Z]+)$/
  const suffix = reg.test(pathname) ? reg.exec(pathname)[1] : ''
  let encoding = 'utf8';
  /^(PNG|GIF|JPG|JPEG|WEBP|BMP|ICO|SVG|MP3|MP4|WAV|OGG|M3U8)$/i.test(suffix) ? encoding = null : null
  return encoding
}

/*
  readFile('路径').then(res => {
    // 请求成功
  }).catch(err => {
    //请求失败
  })
*/

module.exports = exportsOBJ