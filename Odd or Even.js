function OddOrEven(arr){
    return (arr.map((a,b)=>a+b))%2==0?"even":"odd"
}
console.log(OddOrEven([0,1,4]))