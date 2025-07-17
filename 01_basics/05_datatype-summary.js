// Data TYPES 

// Primitive

// 7 Types : String, Boolean, Number, undefined, Symbol, BigINT

// Reference (Non Primitive)

// Array, Objects, Functions




// ++++++++++++++++++++++++++++++++++++

// Two types of memory in Js

// Stack(Primitive) & Heap(Non-Primitive)

// let myYoutubename = "Aashi"

// let anotherName = myYoutubename

// console.log(anotherName);

let userOne = {
        name : "Tabish", 
        email : "tabishabbas@gmail.com"
}

let userTwo = userOne
userTwo.email = "ashikhan@gmail.com" 

console.log(userOne);
console.log(userTwo);
