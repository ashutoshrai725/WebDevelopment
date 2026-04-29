let a = 10; //block scope, value change ho jati var mat use kro old + buggy hai and change nahi hone dena hai toh const use kro

//👉 Primitive = single value store karta hai
let account_balance = 1000; //number
let str = "ashutoshrai" //string
let dost_ko_block_kara_hai = true; //boolean
let account; //undefined
let bal = null; //null
let a = 43431232323232323232324n;//bigint

//maximum safe integer in js is 2^53 - 1
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
//Isse bada number → use BigInt

//🔹 3. Non-Primitive Data Types
//Ye reference type hote hain (memory me alag store)
//Types:
//Array
//Object
//Function

//Example:

let arr = [1, 2, 3, 4, 5]; //array
let obj = { name: 'ashutosh', age: 20 }; //object
function greet() { //function
    console.log("Hello, World!");
}

/* | Type          | Example        | Nature         |
| ------------- | -------------- | -------------- |
| Primitive     | number, string | value copy     |
| Non-Primitive | array, object  | reference copy |
|               | function       |                | */

//practice:

let x;
console.log(x); //undefined

let a = null;
console.log(typeof a); //object (ye js ka bug hai, null ko object type show karta hai)

let a = 10;
let b = a;
b = 20;
console.log(a); //Output: 10 (primitive type, value copy hota hai)

let obj1 = { name: "ashu" };
let obj2 = obj1;
obj2.name = "rohit";

console.log(obj1.name); //Output: "rohit" (non-primitive type, reference copy hota hai)

console.log(typeof undefined); //Output: "undefined" (undefined type)
console.log(typeof null); //Output: "object" (null type, but typeof null returns "object" due to a historical bug in JavaScript)

/* Bonus (Real Dev Tip)

👉 Jab API ya DB ka kaam karega:

undefined = missing data
null = intentionally empty field */
