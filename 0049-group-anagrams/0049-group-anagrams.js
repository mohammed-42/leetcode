/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    groups={}
    for(let word of strs){
       let key = word.split("").sort().join("");
       if(groups[key]){
        groups[key].push(word)
       }else{
         groups[key] = [word]
       }
    }
    return Object.values(groups);
};