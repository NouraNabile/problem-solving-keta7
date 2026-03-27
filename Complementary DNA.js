function dnaStrand(dna){
//   return dna.split("").map((a)=>a=="T"?"A":a=="A"?"T":a=="C"?"G":a=="G"?"C":"").join("")
let obj = {
  A:"T",
  C:"G",
  T:"A",
  G:"C"
}
return dna.split("").map((a)=>obj[a]).join("")
}