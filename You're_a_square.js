var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n)) 
    // return num%(Math.sqrt(num))==0 ? true :false //wrong 0

}
console.log(isSquare(19))
