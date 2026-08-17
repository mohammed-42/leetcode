/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    function max(weights){
let largest=0
for(let i=0;i<weights.length;i++){
  if(weights[i]>largest){
    largest=weights[i]
  }
}
return largest
}
function sumof(weights){
  let sum=0
  for(let i=0;i<weights.length;i++){
    sum=sum+weights[i]
  }
  return sum
}
  let left=max(weights)
  let right=sumof(weights)
  while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(feasible(mid)<=days){
      right=mid-1
    }else{
      left=mid+1
    }

  }
  function feasible(mid){
  let currentWeight=0
  let dayused=1
  for(let weight of weights){
    if(currentWeight+weight<=mid){
      currentWeight=currentWeight+weight
    }else{
      dayused++
      currentWeight=weight
    }
  }
  return dayused
}
return left
};