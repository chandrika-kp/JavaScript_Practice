/*write a javaScript program that reorders the digits of
each numerical elements in an array based on ascending Input 
=> [515,543,784]--->[155,345,478]  */

// let array = [515,543,784]
// let newstr = ''
// let sortArray = []

// for(let num of array){
//   let numToString = num.toString()
//   let splitNum = numToString.split('')
//   let listitem = splitNum.sort()
//   sortArray.push(listitem.join(''))
// }
// console.log(array + " ----> " + sortArray)

//------------------without using methods.......

let array = [515,543,784]
let newstr = ''
let arrayItemOrder = []
let big = 0
console.log("Given array --->" + array)
for (let i of array) {
  let str = i.toString()
  // let strSplit = str.split('')
  let strSplit = Array.from(str)

  for (let strSplitArray = 0; strSplitArray < strSplit.length; strSplitArray++) {
    let small = strSplit[0]
    for (let digits = 0; digits < str.length; digits++) {

      if (small <= str[digits]) {
        small = small
      } else {
        small = str[digits]
      }
    }
    let num = str.indexOf(small)
    newstr += small
    strSplit.splice(num, 1)
    str = strSplit.join('')
    if (str.length == 1) {
      big = str[0]
    }
  }
  arrayItemOrder.push(parseInt(newstr + big))
  newstr = ''
}
console.log( "ArrayItemOrder --->" + arrayItemOrder)
let ascendArray = []
for(let i=0 ;i<arrayItemOrder.length; i++){
  let min= arrayItemOrder[0]
  for(let i=0 ;i<arrayItemOrder.length; i++){
    if(min>arrayItemOrder[i]){
      min =arrayItemOrder[i]
    }else{
      min= min
    }
  }
  ascendArray.push(min)
  arrayItemOrder.splice(arrayItemOrder.indexOf(min),1)
  if(arrayItemOrder.length ==1){
    min= arrayItemOrder[0]
    ascendArray.push(min)
  }
  
}
console.log('ascendArray---'+ascendArray)
