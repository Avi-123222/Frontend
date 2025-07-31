/*const a = {

}
console.log(a)
console.log(typeof a)*/
let username = "Ankit"

const user = {
    firstname:"Adarsh",
    lastname:"Sahoo",
    "full-name":"Adarsh Singh",
    age:22,
    isGraduate:true
}
//GET VALUES
console.log(username)
//console.log(firstname)
console.log(user.firstname, user.lastname)
console.log(user['lastname'])
//console.log(user.full-name)//error
console.log(user['full-name'])
console.log(user.age)
let age1 = "age" 
console.log(user.age1)
console.log(user[age1])

//UPDATE VALUES

console.log(user.isGraduate)
user.isGraduate = false
console.log(user.isGraduate)
//console.log(user)

//ADD values//

console.log(user.mobileNumber)//undefined
user.mobileNumber = 99923829
console.log(user.mobileNumber)








//Nested object
const user2 = {
    firstname:"Adarsh",
    lastname:"Sahoo",
    "full-name":"Adarsh Singh",
    age:22,
    isGraduate:true,
    address:{
        city:'BBSR',
        pin:751007,
        isRental:false

    },
   // function greet(){
       // console.log(object)
   // }
   //METHOD IN JAVA SCRIPT//
   greet: function(){
     console.log("user says hello")
     //return undefined
     //return 100;
     return "avishek"
   },
   showNameandMsg: function(name,msg){
    return "Hello " + name+ " ,your msg is "+ msg
   }
}

console.log(user2)
console.log(user2.address.city)
user2.address.city = "Cuttack"
console.log(user2.address.city)

console.log(user2.address.state)//undefined
//console.log(user2.greet2)//undefined
console.log(user2.greet())
//console.log(user2.showNameandMsg())
const x = user2.showNameandMsg("Avishek" , "Good Morning and get lost you non-sense")
console.log(x)





