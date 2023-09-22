/*  write a program to find how many time each element was repeated and 
sort the object by value in decending order(without using filter method)*/
// Input:["Apple","Orange","Apple","Mango","Orange","Apple"]

let list = ["Apple","Orange","Apple","Mango","Orange","Apple"]

let count = {};
for(let i=0; i< list.length; i++){
    // console.log(list[i])
    if(count[list[i]] === undefined){
        count[list[i]] = 1 ;
    }else{
        count[list[i]]++ ;
    }
}
console.log(count)

//convert object to array 
const obj2arr = Object.entries(count);
console.log(obj2arr)

// Sort the array based on (values) 2ndElement of KeyValuePair
// x[1]--> 2ndElement of KeyValuePair in above array
// y[1]--> next SecondElement of KeyValuePair

obj2arr.sort((x,y) => y[1] - x[1]);

// convert array to new object
const ObjSort = {};
for (const [key, value] of obj2arr) {
  ObjSort[key] = value;
}
console.log(ObjSort);
