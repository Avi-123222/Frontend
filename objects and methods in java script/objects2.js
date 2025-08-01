const person = {
    firstname:"Adarsh",
    lastname:"singh"
}
//console.log(object)
//person{}// error -> as person is declared with  const
 console.log(person.firstname +" "+  person.lastname)


 //let person2 ={
   // firstName:"Avishek",
   // lastName:"patra"
 //}

 //person2 = {}// empty object
//const isdeleted = delete person.lastname
//console.log(isdeleted)

 Object.seal(person)//it restrict the Object,so that any addition and deletion of any key can't be possible(still updating of key and values are possible)

 Object.freeze(person)//through freeze method,we can't make any kind of operation(except extracting values) inside the object