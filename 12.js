// Q) print only vibgyor ("v","i","b","g","y","o","r") letters of the given string
let str = 'catdogbat'
// const wantchars = ["v","i","b","g","y","o","r"];
str=str.replace(/[acdefhjklmnpqstuwxz]/g, "");  // replace other characters as empty values   
console.log(str)  // ogb

or

let filterstr = 'chandrikavibgyorpoorna'
const wantedChars = ['a','c','d','e','f','h','j','k','l','m','n','p','q','s','t','u','w','x','z']
let splitText = filterstr.split('') 
let filterText = splitText.filter(i => wantedChars.includes(i))  // include(i) is nothing but indexOf(i) >= 0
let finalTest =filterText.join('')
console.log(finalTest) //chandkapna




// Q) Remove vowels in the given string
let str1 = 'catdogbat'
const alphabets1 = ["a","e","i","o","u"];
str1=str1.replace(/[aeiou]/g, "");
console.log(str1) // ctdgbt

//  Q) Remove alphabets in the given string
let str2 = '1ca2tdo3gbat'
str2=str2.replace(/[a-z]/g, "");
console.log(str2)  // 123
  
