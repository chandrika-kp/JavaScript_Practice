// Q)print only those parameters(keys) names whose value length greater than 3..

let student ={
  name:"sreeram",
  age:35,
  class:20,
  marks:[80,90,70,100],
  rank: 12345
}

let a=[]
let studentKeys =Object.keys(student)
for(let eachKey of studentKeys){
  let len = student[eachKey].toString().length
  if(len>3){
    a.push(eachKey)
  }
  len=0
}
console.log(a)