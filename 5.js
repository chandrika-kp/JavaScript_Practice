//Q) Inverse the case of characters in a given string
let string = "AbbcdDeE"
let i = 0;
let caseInverseStr='';

while(i<string.length)
{
  let letter = string.charAt(i);
  if(letter == letter.toUpperCase())
    {
    letter = letter.toLowerCase()
    }else
    {
    letter = letter.toUpperCase()
    }
    caseInverseStr+= letter
    i+=1
}
console.log(string + "  -->  " +caseInverseStr)


//Q) Inverse the case of charecters in a given string ----using for loop & ternary operator

// let string = "AbbcdDeE"
// let i = 0;
// let caseInverseStr='';

// for(let i in string){
//   //using ternory operator -->condition ? if true  : else false
//   let caseInv = ((string[i] == string[i].toUpperCase()) ? string[i].toLowerCase() : string[i].toUpperCase())
//   caseInverseStr+=caseInv
// }

// console.log(string + "  -->  " +caseInverseStr)