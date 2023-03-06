// Q) Print only those charecters which are not consecutively similar of a given string
// not consecutive similar case sensitive (ex..b & B also consecutive)

let str = 'abBcDdeEB'
let caseStr = str.toLowerCase()
let newstr = ''
for (let i = 0; i < str.length; i++) {
  if (caseStr[i] == caseStr[i + 1]) {
    i += 1
  } else {
    newstr += str[i]
  }
}
console.log(newstr)


// Q) Print only those charecters which are not consecutively similar of a given string

// let str = 'abbcddeeb'
// let newstr = ''
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == str[i + 1]) {
//     newstr += ''
//     i += 1
//   } else {
//     newstr += str[i]
//   }
// }
// console.log(newstr)