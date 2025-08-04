const students = ['Raj', 'Amit', 'Ankit', 'Ajit']

for(let i=0; i<students.length; i++){
    console.log(students[i])
}

console.log('=================================================================')

for(const student of  students){
    console.log(student)
}
const user = " Avishek Das"
for(const letter of user){
    console.log(letter)
}

const person = {
    firstname:"sahil",
    endname: 'patra',
    age:22,
    city : 'bbsr'

}


// for(const key in person){
//     // console.log(key,typeof key,person.key)
//     console.log(key,typeof key,person[key])
// }
const personKeys = Object.keys(person)
console.log(personKeys)
for(const key of personKeys){
    console.log(person[key])

}

const personValues = Object.values(person)
console.log(personValues)
for(const values of personValues){
    console.log(values)

}

// for (const value of personValues) {
//     console.log(value)
// }

const personEntries = Object.entries(person)
console.log(personEntries)
for (const keyValueArr of personEntries) {
    console.log('key Value Arr', keyValueArr) // returns an array -> [key, value]

    for (const element of keyValueArr) {
        console.log('element -> ', element)
    }
}

console.log()
for (const [key, value] of personEntries) {
    console.log(key , ' -> ', value)
}