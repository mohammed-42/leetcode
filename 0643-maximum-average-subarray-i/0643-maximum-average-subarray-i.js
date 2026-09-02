/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
   let window=[]
  
  for(let i=0;i<k;i++){
    window.push(nums[i])
  }
  let windowsum=0
  
for(let i=0;i<window.length;i++){
        windowsum+=window[i]
        

  }
  let maxsum=windowsum
    
    for (let i = k; i < nums.length; i++) {
       windowsum = windowsum - nums[i - k] + nums[i];
       if(windowsum>maxsum){
          maxsum=windowsum
        }

    }
     return maxsum / k

};