// Q) Remove except vibgyor ("v","i","b","g","y","o","r") letters in the given string
let str = 'catdogbat'
const alphabet = ["v","i","b","g","y","o","r"];
str=str.replace(/[acdefhjklmnpqstuwxz]/g, "");
console.log(str)

// Q) Remove vowels in the given string
let str1 = 'catdogbat'
const alphabets1 = ["a","e","i","o","u"];
str1=str1.replace(/[aeiou]/g, "");
console.log(str1)

//  Q) Remove alphabets in the given string
let str2 = '1ca2tdo3gbat'
str2=str2.replace(/[a-z]/g, "");
console.log(str2)
  