function DobulyLinkedList() {
  this.head = null
  this.tail = null
  this.length = 0

  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
  DobulyLinkedList.prototype.append = function (data) {
    let newNode = new Node(data)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
  }
  DobulyLinkedList.prototype.insert = function (data, position) {
    if (position < 0 || position > this.length) return false

    let newNode = new Node(data)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (position === 0) {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      } else if (position === this.length) {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      } else {
        let currentNode = this.head
        let index = 0
        while (index++ < position) {
          currentNode = currentNode.next
        }
        newNode.next = currentNode
        newNode.prev = currentNode.prev
        currentNode.prev.next = newNode
        currentNode.prev = newNode
      }
    }
    this.length++
  }
  DobulyLinkedList.prototype.get = function (position) {
    if (position < 0 || position > this.length) return false
    let currentNode, index
    if (this.length / 2 >= position) {
      index = 0
      currentNode = this.head
      while (index++ < position) {
        currentNode = currentNode.next
      }
    } else {
      index = this.length - 1
      currentNode = this.tail
      while (index-- > position) {
        currentNode = currentNode.next
      }
    }
    return currentNode.data
  }
  DobulyLinkedList.prototype.indexOf = function (data) {
    let currentNode = this.head
    let index = 0
    while (currentNode) {
      if (currentNode.data === data) {
        return index
      }
      currentNode = currentNode.next
      index++
    }

    return -1
  }
  DobulyLinkedList.prototype.update = function (data, position) {
    if (position < 0 || position > this.length) return false
    let index = 0
    let currentNode = this.head
    while (index++ < position) {
      currentNode = currentNode.next
    }
    currentNode.data = data
    return true
  }
  DobulyLinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return null

    let currentNode = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      if (position === 0) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position === this.length - 1) {
        currentNode = this.tail
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        let index = 0
        while (index++ < position) {
          currentNode = currentNode.next
        }
        currentNode.prev.next = currentNode.next
        currentNode.next.prev = currentNode.prev
      }
    }
    this.length -= 1
    return currentNode.data
  }
  DobulyLinkedList.prototype.remove = function (data) {

    return this.removeAt(this.indexOf(data))
  }
  DobulyLinkedList.prototype.toString = function () {
    return this.forwardString()
  }
  DobulyLinkedList.prototype.forwardString = function () {
    let strLinkedList = ''
    let currentNode = this.head
    while (currentNode) {
      strLinkedList += currentNode.data + ' '
      currentNode = currentNode.next
    }
    return strLinkedList
  }
  DobulyLinkedList.prototype.backwardString = function () {
    let strLinkedList = ''
    let currentNode = this.tail
    while (currentNode) {
      strLinkedList += currentNode.data + ' '
      currentNode = currentNode.prev
    }
    return strLinkedList
  }
  DobulyLinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }
  DobulyLinkedList.prototype.size = function () {
    return this.length
  }
  DobulyLinkedList.prototype.getHead = function () {
    return this.head.data
  }
  DobulyLinkedList.prototype.getTail = function () {
    return this.tail.data
  }
}

let list = new DobulyLinkedList()

list.append('A')
list.append('B')
// list.append('C')
list.append('D')
// console.log(list.forwardString())
// console.log(list.backwardString())
console.log(list.toString())
list.insert('C', 2)
console.log(list.toString())
list.insert('E', 4)
console.log(list.toString())
list.insert('0', 0)
console.log(list.toString())
list.update('b', 2)
console.log(list.toString())
list.removeAt(0)
console.log(list.toString())
list.removeAt(4)
console.log(list.toString())
console.log(list.remove('C'))
console.log(list.toString())