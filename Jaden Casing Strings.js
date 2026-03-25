String.prototype.tojadenCase=function(){
    return this.split(" ").map((word)=>word[0].toUpperCase + word.substring(1)).join()
}
let str = "how old are you"
console.log(str.tojadenCase())