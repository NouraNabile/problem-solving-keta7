function descendingOrder(n){
    //Time: 825ms Passed: 1Failed: 0
    let arr= n.toString().split("").sort((a,b)=>b-a).join("")
    return Number(arr)
}
descendingOrder()