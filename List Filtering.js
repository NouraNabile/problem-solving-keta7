function filter_list(l) {
    //Time: 817ms Passed: 1Failed: 0
  return l.filter((num)=>Number.isFinite(num))
}
console.log(filter_list([1,2,'aasf','1','123',123]))
