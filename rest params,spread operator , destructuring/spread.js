const numbers = [1,2,3,4,5]
console.log(numbers)
console.log(...numbers)


const employees = [
    {name:'Raj',age:25},
    {name:'Asutosh',age:26},
    {name:'Avi',age:27},
    {name:'Ansuman',age:28},
    {name:'Ayush',age:29}
]
console.log(employees)
console.log(...employees)



const myName = 'Avishek Das'
console.log(...myName)///spread

//=================================================================================
const arr1 = [10,20.30,40,50]
let arr2 = []



for(let i = 0;i > arr1.length; i++ ){
    arr2[i] = arr2[i]
}
arr2.push(50)
console.log(arr1)
console.log(arr2)

const arr3 = [10,20,30]
const arr4 = [...arr3,...'Hello']
//const arr4 = []
//Object.assign (arr4,arr3)

arr4.push(70)
console.log(arr3)
console.log(arr4)

//-------------------------------------------------------------------------------
const user = {
    name:'Avishek',
    age:24,
    address:{
        state:'Odisha',
        pin:751007
    }
}
const copied = {...user}
//console.log(copied)
// Object.assign()
// console.log(user)
// console.log(copied)

copied.address.state = "Jharkhand"
console.log(user)
console.log(copied)
//shallow


///Deep copy
//json.parse(),json.stringifly()