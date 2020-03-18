/*
 * @LastEditors: zcc
 * @Date: 2020-01-30 16:19:38
 * @Description:  
 */

/*
 * @LastEditors: zcc
 * @Date: 2020-01-11 16:54:59
 * @Description:  图论
 */
function Graph() {
  /**
   * 属性：
   *  * 顶点（数组）
   *  * 边（字典）
   */
  this.vertexes = [] // 顶点
  this.edges = new Dictionaries()

  /** 添加方法
   * addVertex 添加顶点
   * addEdges 添加边
   */
  Graph.prototype.addVertex = function(v) {
    this.vertexes.push(v)
    this.edges.set(v, [])
  }
  Graph.prototype.addEdges = function(v1, v2) {
    this.edges.get(v1).push(v2)
    this.edges.get(v2).push(v1)
  }
  Graph.prototype.toString = function() {
    let resultStr = ""
    for (let i = 0; i < this.vertexes.length; i++) {
      const item = this.vertexes[i]
      resultStr += item + ` => ` + this.edges.get(item).join(" ") + `\n`
    }
    return resultStr
  }
  /**
   * @function initializeColor
   * @description 初始化状态颜色
   *  * 白色 ： 该顶点还没有被访问
   *  * 灰色 ： 该顶点被访问过，但是还没有被探索过
   *  * 黑色 ： 该顶点被访问过且被完全探索过
   */
  Graph.prototype.initializeColor = function() {
    let colors = []
    for (let i = 0; i < this.vertexes.length; i++) {
      colors[this.vertexes[i]] = "white"
    }
    return colors
  }
  /**
   * @function bfs (Breadth-First Search)
   * @description 广度优先搜索
   * @param { string } initV 初始化顶点
   * @param { function } handler 处理方式
   */
  Graph.prototype.bfs = function(initV, handler) {}
}

let graph = new Graph()

const myVertexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]

// 添加顶点
for (let i = 0; i < myVertexes.length; i++) {
  graph.addVertex(myVertexes[i])
}
// 添加边
graph.addEdges("A", "B")
graph.addEdges("A", "C")
graph.addEdges("A", "D")
graph.addEdges("C", "D")
graph.addEdges("C", "G")
graph.addEdges("D", "G")
graph.addEdges("D", "H")
graph.addEdges("B", "E")
graph.addEdges("B", "F")
graph.addEdges("E", "I")
graph.toString()
console.log(graph.initializeColor())

function fibonacci(n) {
    
    if(n===1 || n===2){
      return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
