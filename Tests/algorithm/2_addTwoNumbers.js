/*
 * @LastEditors: zcc
 * @Date: 2020-01-07 20:03:41
 * @Description: 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  this.head = null;
  this.length = 0;
  this.remainder = 0; //除数

  while (l1 || l2) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;
    const num = l1Val + l2Val + this.remainder;
    this.remainder = parseInt(num / 10);
    const newNode = new ListNode(num % 10);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (this.remainder > 0) {
    const newNode = new ListNode(this.remainder);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  return this.head;
};
