function getMiddle(s="test") {
    // //Time: 871ms Passed: 1Failed: 0
    // if(s.length%2==0){
    //     return s[s.length/2-1] + s[s.length/2]
    // }
    // else{
    //     return s[(s.length+1)/2-1];
    // }

    // //Time: 817ms Passed: 1Failed: 0
    // return s.length % 2 === 0
    //     ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    //     : s.slice(s.length / 2, s.length / 2 + 1);
    
}
console.log(getMiddle("test"))
console.log(getMiddle("testing"))//7