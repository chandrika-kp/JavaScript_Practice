// Q)print only those parameters(keys) names whose value of integer type..

let student ={
  name:"sreeram",
  age:35,
  class:20,
  marks:[80,90,70,100]
}
console.log(typeof(student.marks))
let objKeys = Object.keys(student)
let a=[]
for(let eachkey of objKeys){
    if(typeof(student[eachkey])=='number'){
      a.push(eachkey)
    }
  }
console.log(a)