/* Given an alphanumeric input,
find the sum of all the integers in the input string 
shift all the charecters by 3 places and concat to the sum
eg:3fe45Xd --->12ihag  */

const concat = (str) => {
// let str = '3fe45Xd'
let digits = []
let letters =[]
let sum = 0
let text=''
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","o","q","r","s","t","u","v","w","x","y","z"];
for(let i of str){
  if(i==Number(i)){
    digits.push(i)
    sum+=Number(i)
  }
  else{
    letters.push(i)
  }
}
text+=sum
for(let index in letters){
  let k= alphabet.indexOf(letters[index].toLowerCase())
  let newindex = k + 3
  if(newindex>=(alphabet.length)){
    newindex = newindex-alphabet.length
  }
  text+=alphabet[newindex]
}
console.log(str + "----> " +text)
}
concat("3fe45Xd")
