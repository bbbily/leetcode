// Problem: House Robber
// Source : https://leetcode.com/problems/house-robber
// Author : Peng Wu
// Date   : 04/05/2018

/***************************************************************************************
 *
 You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

 Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 *
 ***************************************************************************************/

 /**
  // * @param {number[]} nums
  // * @return {number}
  */



  var rob = function(nums) {
      var odd = 0;
      var even = 0;
      for (var i=0; i<nums.length; i++) {
          if (i % 2 === 0) {
              odd = Math.max(odd+nums[i], even);
          }
          else {
              even = Math.max(even+nums[i], odd);
          }
      }
      return Math.max(odd, even);
  };
