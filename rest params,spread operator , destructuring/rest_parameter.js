//function(a,b){
//const add = function(a,b)
//const add = (a,b) =>// error because the arrow function doesn't support arguments





// function add(a,b){
//     console.log(a+b)
//     console.log("arguments",arguments.length)
//    // arguments.forEach(() =>console.log('hello'))
//    let sum = 0
//    for(let i=0; i <arguments.length; i++){
//     //console.log(argument[i])
//     sum += argument[i]
//    }

// }
// add(20,30)
// add(20,30,45,45,334,2343)
// console.dir(add)
//arugments are seems to be like array but not an array which means it doesn't support array property

//==========================================================================================================
//rest parameters///=====================>
// =============================================================================
// Rest Params -->> ...args 
// -----------------------------------------------------------------------------
// exactly same as var arg in java 
// The rest parameter in JavaScript, denoted by three dots (...) followed by a parameter name, allows a function to accept an indefinite number of arguments and gather them into an array. This array then becomes accessible within the function body.
// =============================================================================
// const sum = (...args, a, b) => { //error -//A rest parameter must be last in a parameter list.
// const sum = (a, b, ...args) => {
//     console.log('sum of (a+b):', a+b)
    
//     console.log(args)
//     console.log(args.length)
//     const sum = args.reduce((acc, current) => acc + current)
//     console.log("sum of rest params", sum)
// }
// sum(10,20,30,40,50)





function printMessage(...params){
    params.forEach(msg => console.log(msg))
}
printMessage('hello','tata','bye','goodbye','gaya')





