//Print all the attribute names of student object in console

let student ={
  name:"sreeram",
  age:35,
  class:20
}

// Display particular object key value
let Name= student.name
let Age = student.age
let Class = student.class
console.log({Name},{Age},{Class}) //given in { Name } treat result as object key with 'Name:' 

// Display all obj keys with Object.keys
let objKeys = Object.keys(student)
console.log(objKeys)
objKeys.map(key => console.log(key))


// Display all obj values with Object.values
let objValues = Object.values(student)
console.log(objValues)
objValues.map(value => console.log(value))

//Display obj keys,values with Object.entries
let all = Object.entries(student)
all.map((obj) =>console.log(obj))



/* Q)print only those parameters(keys) names whose value of integer type..

        here (age & class) values are interger type
        so loop over keys_List
        w.k.t object[Key]=value here object is "student" & key will take from keys_List
        so check typeof(object[key]) is not equal to string type or (equal to integer type)
        typeof(object[key]) is here ckecking  typeof of value*/

let a=[]
for(let eachkey of objKeys){
    if(typeof(student[eachkey])=='number'){
      a.push(eachkey)
    }
  }
console.log(a)
