// Problem: Merge Two Sorted Lists
// Source : https://leetcode.com/problems/merge-two-sorted-lists
// Author : Peng Wu
// Date   : 04/05/2018

/***************************************************************************************
 *
 Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

 Example:

 Input: 1->2->4, 1->3->4
 Output: 1->1->2->3->4->4
 *
 ***************************************************************************************/

 /**
  * Definition for singly-linked list.
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }
  */
 /**
  // * @param {ListNode} l1
  // * @param {ListNode} l2
  // * @return {ListNode}
  */


  // recursive solusion
  var mergeTwoLists = function(l1, l2) {
      if (l1 === null) return l2;
      if (l2 === null) return l1;
      if (l1.val < l2.val) {
          l1.next = mergeTwoLists(l1.next, l2);
          return l1;
      }
      else {
          l2.next = mergeTwoLists(l2.next, l1);
          return l2;
      }
  };


  // iterative solution
  var mergeTwoLists = function(l1, l2) {
    var result = new ListNode(-1);
    var tail = result;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        }
        else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return result.next;
  };
