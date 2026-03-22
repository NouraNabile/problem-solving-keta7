function squareDigits(num){
    // let str = num+""
    // let sum =""
    // for(let i=0;i<str.length;i++){
    //     sum+=(Number(str[i]))**2
    // }
    // return sum
        return Number(num.toString().split("").map((a)=>Math.pow(a,2)).join(""))

}

console.log(squareDigits(123))
