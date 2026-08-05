/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let unique=1
  for(let i=1;i<nums.length;i++){
    if(nums[i]===nums[i-1]){
      continue
    }else{
      nums[unique] = nums[i];
      unique++
    }
  }
  return unique
};
