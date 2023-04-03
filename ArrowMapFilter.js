// Arrow functions
let fn1 = () => {   return 1 }
let fn2 = () => !1
let fn3 = () => !undefined
let fn4 = () => !!112
let fn5 = () => 'sdsdfssf'.split('s').slice(1).length
let fn6 = () => 'sdsdffss'.split('s').splice(1,1).length
let fn7 = () => 'sdsdffds'.split('').filter(i => i =='s').length
let arr = 'sssdfssdssf'.split('')

let fn8 = () => arr.slice(1).length
let fn9 = () => arr.splice(1,1).length
let fn10 = () => arr.filter(i => i =='s').length
console.log(fn1(), fn2(),fn3(),fn4(),fn5(),fn6(),fn7(),fn8(),fn9(),fn10())

console.log("==============")

// filter & map
let array = [234,23,65,732,112]    // [234,732,112]
let fa1 = array.map( eachValue => {
    let sum = 0;
   return eachValue.toString().split().map(i => sum+= parseInt(i) )
})
let fa2 = array.filter( eachValue => {
    return eachValue
 })
let fa3 = array.filter( eachValue => true)
let fa4 = array.filter( eachValue => { !eachValue })
let fa5 = array.filter( eachValue => { isNaN(eachValue) })
let fa6 = array.map( eachValue =>  eachValue > 100 )
console.log(`fa1: ${fa1}\n`,`fa2: ${fa2}\n`,`fa3: ${fa3}\n`,`fa4: ${fa4}\n`,`fa5: ${fa5}\n`,`fa6: ${fa6}\n`)
