/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
let currentsum=nums[0];
  let maxsum=nums[0];
  for(let i=1;i<nums.length;i++){
    let sum=Math.max(nums[i],currentsum+nums[i]);
    currentsum=sum;
    if(currentsum>maxsum){
      maxsum=currentsum;
    }
  }
  return maxsum;
}
