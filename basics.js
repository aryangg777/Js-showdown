
// First program in Js : hello world

// how to display and print any thing in Js  -> console.log()

console.log("Hello World")   // to  print a text in js put that js in  "" or '' in console.log()

// we can do arthmetic operations in console.log() , display nos
// what ever u want to display or log(to write something somewhere) has to passed in console.log()

console.log(7+3)
console.log(10)

//JS variables 
// it is a like a container to store information , basically a place holder which can hold data
console.log ("js variables are created by using keywords let const and var")

// creating a variable var/let name 
var nameofvariabale  // how would u want ur data stored in variabales to be called and addressed and distinguised from other varaiable

let  message // created a variable using let and nameing it message
message = "hello wolrd" // assigning/storing a value/info to the variable

console.log(message) // go inside the variable naming message , extract the info and log/display it 

message = "changed" // when u have a variable made using let and var u can remive the previous data stored in it and can store a new data to the same variable
//old infoin message vairable gets removed as a new info is assigned to th variable
//also no need to redeclare the variable while storing info as it already declared with same name

console.log(message) // new/latest info stored will be logged


let Fname = "Aryan" // declaring and assigning/intialising a variable can be done in a single step too
console.log(Fname)


// const variable is a diff variable from let , while using const u need declare and intialise it in a single step cant do it in diff steps
const single = "step"
console.log(single)
// single = "me" // it will give u a error as info/value in const varibale cant be changed later-on in the code can only be changed in at the step declaring it
console.log(single)

console.log('we only use 2 types of variable const and let variable not var as its old')

//variable naming 
const age = 19
let username 
let firstName
let _name
let $lname
let non_1
const number1 = 77
//variable names consist on words numbers and $ _
//a variable name cant start with a no can end with it , name cant be a keyword
//variable name is also cast sensitve age and Age diff names for diff varibales
const Age = 20
console.log(age)
console.log(Age) 

// Data types : diff values which can be used in js
// data stored in variables 

//primitive data types
//string : text written in "" or ''
let string1 = "hello"
console.log(typeof string1) // logs the type of data stored in string1
console.log(string1)
string1 = "multiple words also"
console.log(string1)

//Number
let value = 99
console.log(typeof value)
console.log(value)
value = 99.86
console.log(value)

//boolean -> true/false 
let productInCart = false
console.log(typeof productInCart)
let product = "true" // string not boolean
console.log(productInCart)

// Undefined = value assigned to variable when no value is assigned to variable
let Data
console.log(Data)
console.log(typeof Data)

//NUll -> no value , intentionally assigning no value to it
let noValue = null
console.log(noValue)
console.log(typeof noValue) // it will return object which is wrong and a error of js

//non primitive data types
//object 
const details = {
    subject : "sci",
    edu : "btech"
}
console.log(typeof details)
console.log(details)

//array
const arr = [10,"sci",true]
console.log(typeof arr)
console.log(arr)

console.log("Done for this file")


