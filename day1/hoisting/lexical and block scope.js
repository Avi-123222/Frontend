function A() {
    let x = 10; //local scope
    console.log(x)

    function B() {
        const y =20;
        console.log(y)
       // console.log(x)// this line triggers the clousser
        
            function C(){
                const z =30;
                console.log(z)
                console.log(y)
                console.log(x)
            }
        C()
    }
    B()
    
}
//B()// B is not defined as it is local to for function A

const a = "hello everyone" //script scope 
console.log(a)

A()
console.log("Program Ended")