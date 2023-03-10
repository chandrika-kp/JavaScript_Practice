  /* Q) Write a function that converts an object into an array,
where each element represents a key-value pair  as a value-key pair in the form of an array.
Ex:({a:1,b:2}) --> [[1,'a'],[2,'b']] */

let obj = {a:1,b:2,c:3}
let everyEntry =[]

  let eachobj = Object.entries(obj)
  let len = eachobj.length
  let eachArrayReverse = []
  
  for(let i= 0;i<len;i++){
      let eachobjEntry = eachobj[i]
    for(let i= 0;i<1;i++){
      let b= []
      let eachvalue = eachobjEntry[i]
      eachobjEntry[i]=eachobjEntry[i+1]
      eachobjEntry[i+1] = eachvalue
      b.push(eachobjEntry[i],eachobjEntry[i+1])
      eachArrayReverse.push(b)
    }
  }
  console.log(eachArrayReverse)
