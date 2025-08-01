/*const s1 = "Raj"
const s2 = "Amit"
const s3 = "Chandan"
const isa = true
const s4 = 10
const s6 = null
const s9 = NaN
let a 
// new Array

// array declaration
const students = ["Raj", "Amit", "Chandan",true,10,null,NaN,a]
console.log(students)
console.log(students.length)


//const fruits = new Array(3)
//console.log(fruits)

console.log(students[0])
console.log(students[1])
console.log(students[2])
console.log(students[3])
 for(let i =0; i < students.length; i++){
    console.log(students[i])
 }

 students[8] = "Avishek"
 console.log(students)

 students[20] = "Ansuman"
 console.log(students)

 students[students.length] = "Ayush"
 console.log(students)

 students.push("Sai")
 console.log(students)

 const removedStudent = students.pop()
 console.log(removedStudent)

 console.log(students)*/


 const fruits = ['Apple', 'Banana', 'Mango']
console.log(fruits)

// fruits.unshift('Orange')//add in first
// fruits.push('Orange') //will add in last 
// fruits.pop()
// fruits.pop()
// fruits.pop()
// fruits.pop()
// console.log(fruits)

//fruits.unshift('Orange')
//console.log(fruits)
//fruits.shift()
//fruits.shift()
//fruits.shift()
//fruits.shift()
//console.log(fruits)
 const  isMangoIncluded =fruits.includes('Mango')
 console.log(isMangoIncluded)
 const  isDatesIncluded =fruits.includes('Mango')
 console.log(isDatesIncluded)

 const moreFruits = ['Pineapple', 'Grapes']
const addedFruits = fruits.concat(moreFruits)
console.log(fruits)
console.log(moreFruits)
console.log(addedFruits) 