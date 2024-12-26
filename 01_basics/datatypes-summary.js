// Primitive datatypes
    //7 types :string, number, boolean, null, undefined, symbol (is for unique), bigint(is for scientific and large value)

// js is dynamic type or static type lang. ?
    
const score = 100           //num
const scorevalue = 100.99   //number

const isloggedin = false //simple boolean type
const temperature = null //null type
let userEmail;      //undefined type

const id = Symbol('123')     //symboldatatype
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bignum = 38493847534958373928n    //bigint datatype ...n
// console.log(typeof(bignum));


//Reference datatpe (non Primitive)
    //array, objects, functions

const car = ["BMW", "Ferrari", "RR"]    //array
console.log(car);


let myobj = {               //object
    name: "meet",
    age: 19,
}
console.log(myobj);


const myFunction = function(params) {
    console.log("Hello World");
}

// for finding datatype
console.log(typeof myFunction, typeof myobj, typeof car);

// https://262.ecma-international.org/5.1/#sec-11.4.3