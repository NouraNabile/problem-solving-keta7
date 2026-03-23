function accum(s="abcd") {
    // //Time: 812ms Passed: 1Failed: 0
    // let str = ""
	// for(let i=0;i<s.length;i++){
    //     let c=0 
    //     while(c<=i){
    //         if(c==0){str+=s[i].toUpperCase()}
    //         else {str+=s[i].toLowerCase()}
    //         c++
    //     }
    //     str+="-"
    // }
    // str=str.slice(0,str.length-1)
    // return str;

    // //Time: 761ms Passed: 1Failed: 0
    // let f="";
    // for(let i=0;i<s.length;i++){
    //     f+=s[i].toUpperCase()+s[i].toLowerCase().repeat(i)+"-"
    // }
    // return f.slice(0,f.length-1);

    //Time: 929ms Passed: 1Failed: 0
    return s.toLowerCase().split("").map((letter,i)=>letter.toUpperCase()+letter.repeat(i)).join("-")
}

console.log(accum())