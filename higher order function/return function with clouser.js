//const a = 10;

//?const outer = function(){
       /* const b = 10;
        const x = 110;
    const add = function(){
        console.log("addition is:" , a + b)
    }
    //add()// calling

     return add
}

const func = outer()
//console.log('func',func)
//console.log('func',func)
func()*/

function f1(){
    let firstName = "Avishek"
    let lastName = "Das"

    function f2(){
        console.log("first name is",firstName)
    }
    return f2;

}
const printname = f1()
printname()