/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//iterative
// var reverseList = function (head) {
//   let prev = null;
//   let curr = head;
//   while (curr) {
//     let tmp = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = tmp;
//   }
//   return prev;
// };
var reverseList = function (head) {
  if (head === null) {
    return null;
  }
  n = head;
  if (head.next) {
    n = reverseList(head.next);
    head.next.next = head;
  }
  head.next = null;
  return n;
};
