/* convert array of array's into object
 Ex: [['a',1],['b',2],['c',3]] -->{ a: 1, b: 2, c: 3 } */
 
let arr = [['a',1],['b',2],['c',3]]
let obj = {}
for(let i of arr){
  for(let j=0;j<1;j++){
    let key = i[0]
    let value = i[1]
    obj[key]=value
  }
}
console.log(obj)