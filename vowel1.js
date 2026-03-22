// function getCount(str="Ahmed") {
// str = str.toLowerCase();
// var arr = str.split("");
// var arr2 = ['a','e','i','o','u']
// var count=0
// console.log(arr)
// for(var i=0;i<arr.length;i++){
//     for(var c=0;i<arr2.length;c++){
//         if(arr[i]==arr2[c]){
//         count++;
//         break;
//     }
// }

// }
//     return count;
// }
function getCount(str="Ahmed HI"){
    // //هو قايل ان اللي داخل lower ليه تستخدم دي .toLowerCase().
    // let arr = str.replaceAll(" ","").split("");
    // let vowel = "aeiou"
    // let count = 0 
    // for(let i=0;i<arr.length;i++){
    //     if(vowel.includes(arr[i]))
    //         count++
    // }
    // return count

    // let vowel = "aeiou"
    // return str.replaceAll(" ","").split("").filter((ele)=>vowel.includes(ele)).length

    return str.match(/[a,e,o,i,u]/gi).length;
}


console.log(getCount("ahmed"))