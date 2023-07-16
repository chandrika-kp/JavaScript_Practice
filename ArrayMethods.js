
let Arrayfunction = (arryMethodName, beforeOperation, expectedOutput, actualOutput) => {
    console.log(arryMethodName, ' - ', beforeOperation, ' - ', expectedOutput, ' - ', actualOutput, ' - ', `Expected = Actual? ${expectedOutput === actualOutput}`)
}

let array1 = [1,4,5,9,11]
let array2 =[1,2,3,4,5]
let array3=[[1,2],[3,4],[5,6]]
// Array length
Arrayfunction("array Length " ,array1 , 5, array1.length)
// Array toString()
Arrayfunction("convert array to srtring", array1 ,"1,4,5,9,11", array1.toString())
// Array pop()
Arrayfunction("remove last element from an array",array1,11,array1.pop()) /*returns new array---array1= [1,4,5,9] */
// Array push()\
Arrayfunction("add element to the end of the array", array1,5,array1.push(50))/*push method returns new length of the array ---array1=[1,4,5,9,50] */
// Array shift()
/*shift equals to popping but from beginning of the array */
Arrayfunction("remove first element of the array",array1,1,array1.shift()) /*returns new array---array1= [4,5,9,50] */
// Array unshift()
Arrayfunction("add element to the start of the array", array1,5,array1.unshift(0))/*unshift method returns new length of the array ---array1=[0,4,5,9,50] */

// Array join()
Arrayfunction("combine all elements of the array in to string with default comma",array1,"0,4,5,9,50",array1.join())
Arrayfunction("combine all elements of the array in to string with given symbol",array1,"0*4*5*9*50",array1.join('*'))
// Array delete()
Arrayfunction("delete the particular element ", array1,[0,,5,9,50],delete array1[1])
// Array concat()
Arrayfunction("Add another array",array2,[1,2,3,4,5,'chandu','jshf'],array2.concat(['chandu','jshf']))
// Array flat()
/*creates a new array with sub-array elements concatenated */
Arrayfunction("combine the sub arrays",array3,[1,2,3,4,5,6],array3.flat())
// Array slice()----------/*take a piece of an arrAY */
Arrayfunction("a piece of an array",array2,[3,4],array2.slice(2,4))
// Array splice()----------used to add or delete elements
Arrayfunction("add new items to an array",array2, [3,4], array2.splice(2,2,'a','b'))
/*first parameter indicates index value ,
second paramete indicates no.of delete elements ,
returns deleted elements and return new array--array2=[1,2,'a','b',5] */
Arrayfunction("delete items in an array",array2, [2,'a'], array2.splice(1,2))/* return new array--array2=[1,'b',5] */

