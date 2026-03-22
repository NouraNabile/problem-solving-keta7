function highAndLow(numbers="1 2 3 4 5 "){
    // //Time: 1978ms Passed: 2Failed: 0
    // let arr = numbers.trim().split(" ")
    // let max = Math.max(...arr)
    // let min = Math.min(...arr)
    // return `${max} ${min}`

//     //Time: 755ms Passed: 2Failed: 0
//     let arr = numbers.split(" ")
//     let max = Math.max(...arr)
//     let min = Math.min(...arr)
//     return `${max} ${min}`
// }
//      Time: 754ms Passed: 2Failed: 0  
    let arr = numbers.split(" ").map((n)=>Number(n)).sort((a,b)=>a-b);
    return `${arr[arr.length-1]} ${arr[0]}`
}