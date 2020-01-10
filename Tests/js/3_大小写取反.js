let str = 'STr'

str = str.replace(/[a-zA-z]/g, content => {
  // content.charCodeAt() > 65 && content.charCodeAt() <= 90
  return content === content.toUpperCase() ? content.toLowerCase() : content.toUpperCase()
})