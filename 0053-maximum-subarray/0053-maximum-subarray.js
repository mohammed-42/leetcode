/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
let currentSum=nums[0]
  let maxsum=nums[0]
  for(let i=1;i<nums.length;i++){
     if(nums[i]> currentSum +nums[i]){
      currentSum=nums[i]
     }else{
      currentSum=currentSum+nums[i]
     }
     if(currentSum>maxsum){
      maxsum=currentSum
     }
  }
  return maxsum;
}
