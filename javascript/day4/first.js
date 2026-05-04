console.log(10 > 5);
console.log(10 < 5);
console.log(10 == 10); // == operator value ko compare karta hai, type ko nahi, isliye 10 aur "10" ko equal samajhta hai
console.log(10 === "10"); // === operator value aur type dono ko compare karta hai, isliye 10 (number) aur "10" (string) ko equal nahi samajhta

true && false; //logical AND operator, dono operands true hone chahiye tabhi result true hoga
true || false; //logical OR operator, dono me se koi ek true hone par result true hoga
!true; //logical NOT operator, true ko false aur false ko true me convert karta hai

let age = 18;
if (age >= 18) {
    console.log("eligible to vote");
} else {
    console.log("not eligible to vote");
}


let marks = 75;
if (marks > 90) {
    console.log("A");
}
else if (marks >= 70) {
    console.log("B");
}
else {
    console.log("C");
}

let age1 = 20;
let hasID = true;
if (age1 >= 18 && hasID) {
    console.log("eligible to vote");
}

//condition ? true_value : false_value
let age2 = 18;
let result = age2 >= 19 ? "Yes" : "No";
console.log(result);

/*
Truthy & Falsy Values (VERY IMPORTANT 🔥)
❌ Falsy Values:
false
0
""
null
undefined
NaN
✅ Baaki sab → Truthy

👉 Example:

if(" "){
    console.log("True");  // chalega
}

⚠️ " " (space) = TRUE
⚠️ "" (empty) = FALSE  */

let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
    default:
        console.log("Invalid day");
}

/*
FINAL SUMMARY
== loose comparison
=== strict comparison ⭐
&& → AND
|| → OR
! → NOT
if-else → decision making
ternary → shortcut
falsy values → 0, "", null, undefined, NaN
switch → multiple cases*/

console.log(0 || "Hello"); //Output: "Hello" (0 is falsy, so it returns the next truthy value)

console.log("Hello" && "World"); //Output: "World" (both are truthy, so it returns the last value)

console.log(Boolean("0")); //Output: true (non-empty string is truthy)

console.log(Boolean("")); //Output: false (empty string is falsy)


let num = 10;
let str = "20";
console.log(num == str); //Output: false (loose comparison, type coercion happens)
console.log(num === str); //Output: false (strict comparison, no type coercion)

/*
| Case              | Result           |
| ----------------- | ---------------- |
| number == string  | string → number  |
| boolean == number | boolean → number |
| null == undefined | true             |
| null == 0         | false ⚠️         |
| undefined == 0    | false            |
| NaN == NaN        | false            |
| 0 == false        | true             |
| "" == false       | true             |

*/

console.log(null == 0);   // false
console.log(null < 0);    // false
console.log(null <= 0);   // true ✅ WTF


/* 👉 Reason:

null becomes 0 in comparison (<, >, <=, >=)
but NOT in ==

👉 Isliye:

null <= 0 → true
null == 0 → false

⚠️ Interview trap: null == undefined → true
null === undefined → false
*/

console.log(undefined == 0); // false
console.log(undefined < 0);  // false
console.log(undefined > 0);  // false
// undefined is only equal to null, and not to any other value, including itself

// NaN is not equal to anything, including itself
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false 


isNaN(NaN); // true
isNaN("Hello"); // true (because "Hello" cannot be converted to a number)
isNaN("123"); // false (because "123" can be converted to the number 123)



console.log(123 == "123" == 123);// false
/* 👉 JS isko aise evaluate karta hai:

Step 1:

123 == "123" → true

Step 2:

true == 123 → 1 == 123 → false

👉 Final output: ❌ false

⚠️ NEVER chain comparisons like this */

console.log(4 & 5); // bitwise AND, output: 4 (0100 & 0101 = 0100) 

/* 
4 = 100
5 = 101
-----------
    100 → 4
*/

console.log(4 | 5); // bitwise OR, output: 5 (0100 | 0101 = 0101)
/*
4 = 100
5 = 101
-----------
    101 → 5
*/

console.log(11 | 14); // bitwise OR, output: 15 (1011 | 1110 = 1111)
/*
11 = 1011
14 = 1110
-----------
    1111 → 15
*/

console.log(5 ^ 7); // bitwise XOR, output: 2 (0101 ^ 0111 = 0010) same bits → 0, different bits → 1
/*
5 = 0101
7 = 0111
-----------
    0010 → 2
*/


//left shift

console.log(5 << 3); // output: 40 (0101 << 3 = 0101000)
/*
5 = 0000 0101
left shift by 3 positions:
0000 0101 << 3 = 0010 1000 → 40
*/

//or 5 * 2^3 = 5 * 8 = 40

//right shift   
console.log(40 >> 3); // output: 5 (0010 1000 >> 3 = 0000 0101)
/*
40 = 0010 1000
right shift by 3 positions:
0010 1000 >> 3 = 0000 0101 → 5
*/
//or 40 / 2^3 = 40 / 8 = 5

10 != "10"   // false
10 !== "10"  // true

console.log("" || "hello"); // hello
console.log(0 && "hi");     // 0

/*
FINAL TAKEAWAY
== → type convert karta hai (dangerous)
=== → safe (always use)
null weird behave karta hai ⚠️
undefined → mostly false comparisons
NaN → kisi ke equal nahi
chaining comparison → galat approach
logical operators → value return karte hain
bitwise → binary level pe kaam

*/

"5" - 2 // 3 (string "5" is converted to number 5, then 5 - 2 = 3)
"5" + 2 // "52" (string concatenation, 2 is converted to string "2", then "5" + "2" = "52")
true + true // 2 // (boolean values are converted to numbers)
false == "0" // true (false is converted to 0, and "0" is also converted to 0, so 0 == 0 is true)
null >= 0 // true (null is converted to 0 in comparison, so 0 >= 0 is true)
undefined < 0 // false (undefined is not converted to a number, so the comparison is false)
NaN == NaN // false (NaN is not equal to anything, including itself)

console.log(true + true); // 2 (boolean values are converted to numbers, true is 1, so 1 + 1 = 2)