// function disemvowel(str) {
//     return str.replace(/[aouie]/ig,"");
// }
// console.log(disemvowel("This website is for losers LOL!"))

// another solution
const vowels = 'aeiou';

function disemvowel(str) {
    return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}