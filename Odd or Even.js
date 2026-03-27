function oddOrEven(array) {
        if(!array.length)return "even";
           return array.reduce((a,b)=>a+b,0)%2===0?"even":"odd"

}
console.log(OddOrEven([0,2,4]))