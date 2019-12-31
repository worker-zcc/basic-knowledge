function SingleLinkedList() {
  this.length = 0
  this.head = null

  function Node(data) {
    this.data = data
    this.next = null
  }
  SingleLinkedList.prototype.append = function (data) {
    let newNode = new Node(data)
    if (this.length === 0) {
      this.head = newNode
    } else {
      /**
       * 如果this.head不是null
       * 创建一个当前节点指向head
       */
      let currentNode = this.head
      // 如果当前节点的next不为null，把当前节点指向下一个节点
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      // 如果为null 指向新的节点
      currentNode.next = newNode

    }
    this.length += 1
  }
  SingleLinkedList.prototype.insert = function (data, position) {
    // 对位置进行边界判断
    if (position < 0 || position > this.length) {
      return false
    }
    let currentNode = this.head
    let newNode = new Node(data)
    if (position === 0) {
      this.head = newNode
      newNode.next = currentNode
    } else {
      let index = 0
      let previousNode = null // 上一个节点
      while (index++ < position) { //如果index小于position的话，就说明还没到位置
        previousNode = currentNode
        currentNode = currentNode.next
      }
      newNode.next = currentNode
      previousNode.next = newNode
    }
    this.length += 1
  }

  SingleLinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) {
      return null
    }
    let index = 0
    let currentNode = this.head
    while (index++ < position) {
      currentNode = currentNode.next
    }
    return currentNode.data
  }

  SingleLinkedList.prototype.indexOf = function (data) {
    let index = 0
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.data === data) {
        return index
      }
      currentNode = currentNode.next
      index++
    }
    return -1
  }
  SingleLinkedList.prototype.update = function (data, position) {
    if (position < 0 || position >= this.length) {
      return false
    }
    let index = 0
    let currentNode = this.head
    while (index++ < position) {
      currentNode = currentNode.next
    }
    currentNode.data = data
  }
  SingleLinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) {
      return null
    }
    let index = 0
    let currentNode = this.head
    let previousNode = null // 上一个节点
    if (position === 0) {
      this.head = this.head.next
    } else {
      while (index++ < position) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }
    this.length -= 1
    return currentNode.data
  }
  SingleLinkedList.prototype.remove = function (data) {
    // 方法一
    /*let currentNode = this.head
    let previousNode = null // 上一个节点

    while (currentNode) {
      while (currentNode.data === data) {
        if (data === this.head.data) {
          this.head = this.head.next
        } else {
          previousNode.next = currentNode.next
        }
        this.length -= 1
        return currentNode.data
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
    return -1
    */
    // 方法二
    return this.removeAt(this.indexOf(data))

  }
  SingleLinkedList.prototype.toString = function () {
    let currentNode = this.head
    let stringLinkedList = ''
    while (currentNode) {
      stringLinkedList += currentNode.data + ' '
      currentNode = currentNode.next
    }
    return stringLinkedList
  }
  SingleLinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }
  SingleLinkedList.prototype.size = function () {
    return this.length
  }
}
let list = new SingleLinkedList()

list.append('A')
list.append('B')
list.append('C')
list.insert('D', 3)
list.insert('E', 0)

console.log(list.toString())
console.log(list.remove('E'))
console.log(list.toString())
console.log(list.isEmpty())
console.log(list.size())