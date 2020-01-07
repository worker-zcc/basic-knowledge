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
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
};
let l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
};


var addTwoNumbers = function(l1, l2) {
  var add = 0
    , ans
    , head;

  while(l1 || l2) {
    var a = l1 ? l1.val : 0
      , b = l2 ? l2.val : 0;

    var sum = a + b + add;
    add = ~~(sum / 10);

    var node = new ListNode(sum % 10);

    if (!ans)
      ans = head = node;
    else {
      head.next = node;
      head = node; 
    }
    
    if (l1)
      l1 = l1.next;
    if (l2)
      l2 = l2.next;
  }

  if (add) {
    var node = new ListNode(add);
    head.next = node;
    head = node;
  }
  console.log(ans)
  return ans;
};
addTwoNumbers(l1,l2)