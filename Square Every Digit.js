function squareDigits(num){
  return Number(String(num).split("").map((a)=>Math.pow(a,2)).join(""));
}

console.log(squareDigits(3212))