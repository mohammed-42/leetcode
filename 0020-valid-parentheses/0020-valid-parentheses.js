/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let stack=[]
let result=""
let isValid = true;
for(let char of s){
  if(char === "(" || char === "{" || char === "["){
    stack.push(char)
  }else if(char === ")" || char === "}" || char === "]"){
    let top=stack[stack.length - 1]
    if((top === "(" && char === ")") ||
  (top === "{" && char === "}") ||
  (top === "[" && char === "]")){
        stack.pop()
    }else{
      isValid=false
    }
  }
}
if (stack.length > 0) {
    isValid = false;
}
return isValid
}