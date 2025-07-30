//<const, let> <variable name> = functional(){}

//<const, let> <variable name> = (list of parameters) =>(//body)
/*const sayHello = (fullName,lastName) => {
    console.log( fullName, lastName, "Good morning everyone!!!")
}*/

const sayHello = (fullName,lastName) =>
    console.log( fullName, lastName, "Good morning everyone!!!"); 

sayHello()
sayHello("Avishek", "Das")

const squareRoot = (x) => {
    console.log("the squareRoot is " , x*x)
}
squareRoot(30)
// it automatically returns the value


const squareRoot2 = (y) => {
    
    console.log("the squareRoot is " , y*y)
    
}
squareRoot2(900)
