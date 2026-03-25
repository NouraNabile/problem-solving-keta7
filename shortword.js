function fun (str="noura nour nou no"){
    return Math.min(...str.split(" ").map((l)=>l.length))
}
console.log(fun("noura nour nou no"))