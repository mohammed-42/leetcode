/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set=new Set(nums)
    let seq=1
    let longest=0
    for(let num of set){
        let currentnum=num
        
        if(!set.has(currentnum-1)){
            seq=1
        while(set.has(currentnum+1)){
            currentnum+=1
            seq+=1
        }
        if (seq > longest) {
                longest = seq
            }
    }
    }
     return longest
};