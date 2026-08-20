/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    function max(bloomDay){
let largest=0
for(let i=0;i<bloomDay.length;i++){
  if(bloomDay[i]>largest){
    largest=bloomDay[i]
  }
}
return largest
}
    let left=1
    let right=max(bloomDay)
  if (m * k > bloomDay.length) {
    return -1
}
  while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(feasible(mid)>=m){
      right=mid-1
    }else{
      left=mid+1
    }
  }
  function feasible(mid){
    let bloom=0
    let bouqet=0
    for(let i=0;i<bloomDay.length;i++){
        if(bloomDay[i]<=mid){
          bloom+=1
        }else{
          bloom=0
        }

        if(bloom==k){
           bouqet+=1
           bloom=0
        }
    }
    return bouqet
  }
  return left
};