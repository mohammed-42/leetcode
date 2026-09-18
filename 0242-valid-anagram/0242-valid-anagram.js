/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let re=s.split("").sort().join("");
    let res=t.split("").sort().join("");
    if(re===res){
        return true;
    }else{
        return false;
    }
};