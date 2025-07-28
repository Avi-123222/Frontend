function f1(cb){
    console.log("value of cb is:",cb)
    console.log("type of cb:",cb)
    cb()
    return 'java Technocrat'

}
//f1()
function sayHello(){
    console.log("Good morning")
}
//f1(sayHello())//->(undefined)// bcz -> sayhello returns nothing
f1(sayHello)