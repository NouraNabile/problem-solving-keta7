function check (str){
    reg = /\b\d{3}\b/
    return reg.test(str)
}
console.log(check("123")) //true
console.log(check("123b")) //true
console.log(check("b123"))//true

console.log(check("123 b"))//true
console.log(check("b 123"))//true

console.log(check("1b23"))//false


