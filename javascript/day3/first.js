let obj = {
    name: 'ashutosh rai',
    age: 20,
    account_number: 20448156529,
    balance: 100000
}

console.log(obj.name);


let fun = function () {
    console.log("ashutosh rai is my name");
    return 10;
}

fun();
console.log(fun());

let account_balance = "1000"; //number
console.log(Number(account_balance));

let x = false;
console.log(Number(x)); //0

let xd = true;
console.log(Number(xd)); //1

let y = "100xs";
console.log(Number(y)); //NaN (Not a Number, jab string me number ke alawa characters hote hain)

Number(null); //0
Number(undefined); //NaN

let ab = 20;
console.log(String(ab)); // "20"

let abc = " ";
console.log(Boolean(abc)); //true (empty string ke alawa koi bhi string true hoti hai)

console.log(6 * 3 + 9 / 8);//Operator precedence: multiplication and division pehle hote hain, phir addition

console.log(20 % 3); //modulus operator, remainder return karta hai

console.log(2 ** 3); //exponentiation operator, 2 raised to the power of 3

let sum = 20;
let total = ++sum; //sum ko pehle use karega, phir increment karega
console.log(total); //Output: 21 (pre-increment operator, pehle increment karega, phir use karega)

let h = 20;
x += 20;
x *= 20;
x /= 20;
x %= 20;
x **= 20; //x = x + 20; x = x * 20; x = x / 20; x = x % 20; x = x ** 20; (compound assignment operators)

/* Bonus (Real Dev Tip)
👉 Jab API ya DB ka kaam karega:
1. Data ko sahi type me convert karna bahut zaroori hota hai, kyunki APIs aur databases specific data types expect karte hain.
2. Agar data type mismatch hota hai, toh API ya database error throw kar sakta hai, ya galat data store kar sakta hai.
3. Isliye, jab bhi API ya database ke saath kaam kare, toh ensure kare ki aap data ko sahi type me convert kar rahe hain, jaise ki strings ko numbers me, ya vice versa, jaisa ki API ya database documentation me specified hai. */

console.log(typeof NaN); //Output: "number" (NaN bhi ek number type hai, lekin iska value "Not a Number" hota hai)
console.log(typeof null); //Output: "object" (null type, but typeof null returns "object" due to a historical bug in JavaScript)
console.log(Boolean(0)); //Output: false (0 is falsy)
console.log(Number(true)); //Output: 1 (true is converted to 1)

/*FINAL SUMMARY (EXAM TYPE)
Primitive → single value (number, string, boolean)
Non-primitive → array, object, function
typeof array → object
Number("100") → 100
Number("abc") → NaN
Boolean(" ") → true ⚠️ tricky
% → remainder
++sum vs sum++ → order matters
x += 10 → shortcut for addition */






