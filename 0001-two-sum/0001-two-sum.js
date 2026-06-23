/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let seen={};
  for(let i=0;i<nums.length;i++){
    compliment=target-nums[i];
    if(seen[compliment]!=undefined){
      return [seen[compliment],i]
    }else{
      seen[nums[i]]=i
    }
  }

}
