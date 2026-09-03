/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left=0
  let sum=0
  let minlength=Infinity
  for(let i=0;i<=nums.length-1;i++){
    sum=sum+nums[i]
    let currentlength=0
    if(sum>=target){
      while(sum>=target){
      currentlength=i - left + 1
      if(currentlength<minlength){
        minlength=currentlength
      }
      sum = sum - nums[left];
      left++
      }
      
    }
  }
  return minlength === Infinity ? 0:minlength;
};