/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    function max(piles){
    let largest=0
    for(let i=0;i<piles.length;i++){
        if(piles[i]>largest){
           largest=piles[i]
  }
}
return largest
}
  let left=1
  let right=max(piles)
  while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(feasible(mid)<=h){
      right=mid-1
    }else{
      left=mid+1
    }
  }
  function feasible(mid){
    let hours=0
    for(let bananas of piles){
      hours+=Math.ceil(bananas/mid)
    }
    return hours
  }
  return left
};