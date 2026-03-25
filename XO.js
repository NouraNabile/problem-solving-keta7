function XO (str){
    //Time: 863ms Passed: 1Failed: 0
    return str.match(/x/ig||[])?.length == str.match(/o/ig||[])?.length?true:false;
}
console.log(XO("zzzXo"))