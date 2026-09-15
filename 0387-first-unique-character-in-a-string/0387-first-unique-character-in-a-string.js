/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map=new Map()
  for(let first of s){
    if(map.has(first)){
      map.set(first,map.get(first)+1)
    }else{
      map.set(first,1)
    }
  }
  for(let i=0;i<s.length;i++){
    if(map.get(s[i])===1){
      return i
    }
    
  }
  return -1
};