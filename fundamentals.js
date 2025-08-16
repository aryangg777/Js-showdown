console.log("New file for few imp amd extra things");

//concatenation and template literals

let name = "aryan";
let age = 19;
//if i want to write my name is _____ and my age is _____ and write in blanks through variables and logging that
//a way to write/log string/text and variables along together in a line

console.log("\nMy name is " + name + " and my age is " + age + "\n"); //type conversion of all variables happen to string

console.log(`My name is ${name} and my age is ${age}`); //in this also all types of variables converted to string (2nd better to use)

console.log("\nMy name is", name, "and my age is", age); //keeps the variable in its true form/type and doesnt convert it to string (best to use)

//Arthmetic operators
let x = 12;
let y = 3;

console.log(x + y); //adding nos
console.log(x - y); //subtracting nos
console.log(x / y); //dividing nos
console.log(x * y); //multiplication nos
console.log(y ** 2); //x raise to power 2
console.log(y ** 3); //x raise to power 3

let a = "12";
let b = 3;
console.log(a + b); //+ means to add and concatenate but when atleast one of the no in variables is written in strings, then + means concat
console.log(a - b); // but for rest of all operators the no written in string converts in number type

let m = "apple";
let n = "mango";
let c = 9;
console.log(m + n); //concat
console.log(m - c); //as data stored in m is not a number in strings but words so subtracting a no from words(and type conversion of string to number) will give not a number(NAN)

//type conersion
const aa = "10";
const bb = "3";
console.log(aa + bb); //concat
console.log(Number(aa) + Number(bb)); // type conversion of string to number -> number(string name) , so add will take place
console.log(typeof Number(aa));
console.log(typeof aa);

const xx = 3;
const yy = 0;
const zz = String(xx); //type conversion of number to string , rarely used

console.log(Boolean(aa)); //type converison of string to boolean will always return a true if not a empty string
console.log(Boolean("")); // return a false as a empty string
console.log(Boolean(xx)); //type converison of number to boolean will always return a true if not 0
console.log(Boolean(0)); // return a false as 0

//Readline-sync , a package to take input from user in terminal , usage possible after dowloading of package
const readlineSync = require("readline-sync"); // intialising the module , just giving a name to module to use it

const input = readlineSync.question("What is your name : "); // question is a property/power that this module gives and expects a input from user
//assigning the input from the user to variable so that it can be used in the code

console.log("\nhello",input,"nice name"); // logging the input from user

console.log("Done for this file")


