// Problem: Binary Tree Level Order Traversal II
// Source : https://leetcode.com/problems/binary-tree-level-order-traversal-ii
// Author : Peng Wu
// Date   : 04/05/2018

/***************************************************************************************
 *
 Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

 For example:
 Given binary tree [3,9,20,null,null,15,7],
     3
    / \
   9  20
     /  \
    15   7
 return its bottom-up level order traversal as:
 [
   [15,7],
   [9,20],
   [3]
 ]
 *
 ***************************************************************************************/

 /**
  * Definition for a binary tree node.
  * function TreeNode(val) {
  *     this.val = val;
  *     this.left = this.right = null;
  * }
  */
 /**
  // * @param {TreeNode} root
  // * @return {number[][]}
  */



var levelOrderBottom = function(root) {
    if (root === null) return [];
    var result = [];
    var queue = [];
    queue.push(root);
    while (queue.length) {
        var len = queue.length;
        var childNodes = [];
        for (var i=0; i<len; i++) {
            var parentNode = queue.shift();
            childNodes.push(parentNode.val);
            if (parentNode.left) {
                queue.push(parentNode.left);
            }
            if (parentNode.right) {
                queue.push(parentNode.right);
            }
        }
        result.unshift(childNodes);
    }
    return result;
};
