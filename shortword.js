function fun (str="noura nour nou no"){
    // let x = s.split(" ").map((a)=>a.length).sort((a,b)=>a-b)
    // return x[0]
    return Math.min(...str.split(" ").map((l)=>l.length))
}
console.log(fun("noura nour nou no"))