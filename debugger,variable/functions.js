//debugger
console.log("program started")

//function declaration
//syntax -> function <function_name> (list of parameters) {}

function hello(){
    console.log("Hello Everyone")
}
hello() //function called

function add(){
    const x =10;
    const y =20;
    console.log("sum is" +(x+y))
}
add()
//================================
function addTwoNumbers(x, y){
    console.log("x value is" , x)
    console.log("y value is " , y)
    console.log(x + y)
}
 addTwoNumbers(100, 200)
console.log("program ended")

function subtractTwoNumbers(x, y=23){
    const res = x-y;
    //console.log("result is" , res)
    return res

}
const  result = subtractTwoNumbers(200,300)
console.log("outside the function is" + result)