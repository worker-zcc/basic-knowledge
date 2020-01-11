/*
 * @LastEditors  : zcc
 * @Date: 2020-01-04 19:20:41
 * @Description:  二叉搜索树
 */
function BinarySearchTree() {
  this.root = null
  function Node(key) {
    this.left = null
    this.right = null
    this.key = key
  }
  BinarySearchTree.prototype.insert = function(key) {
    const newNode = new Node(key)
    if (this.root == null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  BinarySearchTree.prototype.insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right == null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  BinarySearchTree.prototype.search = function(key) {
    return this.searchNode(this.root, key)
  }
  BinarySearchTree.prototype.searchNode = function(node, key) {
    if (node === null) {
      return false
    }
    if (key < node.key) {
      return this.searchNode(node.left, key)
    } else if (key === node.key) {
      return true
    } else {
      return this.searchNode(node.right, key)
    }
  }
  /**
   * 使用循环的方法处理search
   * BinarySearchTree.prototype.search = function(key) {
    let node = this.root

    while (node != null) {
      if (key < node.key) {
        node = node.left
      } else if (key === node.key) {
        return true
      } else {
        node = node.right
      }
    }
    return false
  }*/
  /**
   * @function midOrderTraverse
   * @description 通过中序遍历所有节点
   */
  BinarySearchTree.prototype.midOrderTraverse = function(handler) {
    this.midOrderTraverseNode(this.root, handler)
  }
  BinarySearchTree.prototype.midOrderTraverseNode = function(node, handler) {
    if (node != null) {
      this.midOrderTraverseNode(node.left, handler)
      handler(node.key)
      this.midOrderTraverseNode(node.right, handler)
    }
  }

  /**
   * @function preOrderTraverse
   * @description 通过先序遍历所有节点
   */
  BinarySearchTree.prototype.preOrderTraverse = function(handler) {
    this.preOrderTraverseNode(this.root, handler)
  }
  BinarySearchTree.prototype.preOrderTraverseNode = function(node, handler) {
    if (node != null) {
      handler(node.key) // 处理经过的节点
      this.preOrderTraverseNode(node.left, handler) // 处理该节点的左子节点
      this.preOrderTraverseNode(node.right, handler) // 处理该节点的右子节点
    }
  }
  /**
   * @function postOrderTraverse
   * @description 通过后序遍历所有节点
   */
  BinarySearchTree.prototype.postOrderTraverse = function(handler) {
    this.postOrderTraverseNode(this.root, handler)
  }
  BinarySearchTree.prototype.postOrderTraverseNode = function(node, handler) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, handler)
      this.postOrderTraverseNode(node.right, handler)
      handler(node.key)
    }
  }
  BinarySearchTree.prototype.min = function() {
    let node = this.root
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }
  BinarySearchTree.prototype.max = function() {
    let node = this.root
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }
  BinarySearchTree.prototype.remove = function(key) {
    let current = this.root
    let parent = null
    let isLeft = true
    // 查找节点
    // console.log(current.key,key)
    
    while(current.key !== key){
      parent = current
      if(current.key > key){
        current = current.left
        isLeft = true
      } else {
        current = current.right
        isLeft = false
      }
      if(current == null){
        return false
      }
    }

    // 判断子节点
    // 1.没有子节点
    if(current.left == null && current.right == null){
      if(current == this.root){
        this.root = null
      } else if(isLeft){
        parent.left = null
      } else {
        parent.right = null
      }
    }
    // 2.只有一个子节点
    else if(current.right == null && current.left !== null){
      if(current == this.root){
        this.root = current.left
      }else if(isLeft){
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else if( current.right !== null && current.left == null){
      if(current == this.root){
        this.root = current.right
      }else if(isLeft){
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    }
    // 3.有两个子节点
    // 3.1使用找后继的方法
    else {
      let successor = this.getSuccessor(current)
      if(current == this.root){
        this.root = successor
      }else if(isLeft){
        parent.left = successor
      } else {
        parent.right = successor
      }
      successor.left = current.left
    }
  }
  /**
   * @function getSuccessor
   * @description 获取【后继】
   */
  BinarySearchTree.prototype.getSuccessor = function(current){
    let successor = current
    let successorParent = current
    let successorCurrent = current.right
    while (successorCurrent !== null){
      successorParent = successor
      successor = successorCurrent
      successorCurrent = successorCurrent.left
    }
    if(current.right !== successor){
      successorParent.left = successor.right
      successor.right = current.right
    }
    return successor
  }
}
let tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
tree.insert(19)
console.log(tree)
// let preStr = ""
// tree.preOrderTraverse(function(key) {
//   preStr += key + " "
//   // 回调函数，用来处理拼接方式
// })
// console.log(preStr)
// let midStr = ""
// tree.midOrderTraverse(function(key) {
//   midStr += key + " "
// })
// console.log(midStr)
// let postStr = ""
// tree.postOrderTraverse(function(key) {
//   postStr += key + " "
// })
// console.log(postStr)
// console.log(tree.min())
// console.log(tree.max())
// console.log(tree.search(25))
// console.log(tree.search(110))

tree.remove(11)
console.log(tree)
