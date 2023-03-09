/* Q) Write a function that converts an object into an array,
where each element represents a key-value pair in the form of an array.
Ex:({a:1,b:2}) --> [['a',1],['b',2]] */

let obj = {a:1,b:2,c:3}
let everyEntry =[]

  let eachobj = Object.entries(obj)
  let len = eachobj.length
  
  for(let i= 0;i<len;i++){
    everyEntry.push(eachobj[i])
  }

  let i = len -1
  let reverseEntry= []

  for(let i= len-1;i>=0;i--){
    reverseEntry.push(eachobj[i])
  } 
  
console.log(everyEntry)
console.log("everyEntryAsListReverse --->") 
console.log("everyEntryAsList --->")
console.log(reverseEntry)
  
  