function isIsogram(str){
    //Time: 950ms Passed: 1Failed: 0
    // str = str.toLowerCase()
    // let obj = {}

    // for(let i = 0; i < str.length; i++){
    //     if(obj[str[i]]){
    //         return false
    //     }
    //     obj[str[i]] = true
    // }

    // return true

    //Time: 892ms Passed: 2Failed: 0
    return new Set(str.toLowerCase().split("")).size === str.length
}

console.log(isIsogram("abcda")) // false