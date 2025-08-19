//Functional programming 
//when we have to write a code which is used multiple times all over th code at diff places we create a function of that peice of code and call that function when ever we want to use that code

//function decleration
function greet(){
    //body of function named greet 
    console.log('hello how are u,good morning')
}

//to execute the code in the body -> call the function
// calling function through functions name

greet()
greet()
greet() // can call the functions n no of time executing the code inside it

before()

function before(){

    console.log("called before decleration")
} // u can call the function before decleration it will work as js code is executed in a 2 step process -> 1) memory allocation 2)displaying

//we can also take input in the function

function hello(fname){ //fname is called as a parameter , fname is not a global variable but a variable for this function only and other functions can aslo have this name and can also be declared globally
        console.log("hi",fname)
}

hello("aryan") //"aryan" is a argument here , pass the value here that u want to assign to variable fname in function and want it to be used

function msg(fname,city){ // we can take n no. of parameters
 console.log(`${fname} welcome`)
 console.log(`you from ${city}`)

}

msg("aryan","delhi")
msg("ayan","mosco")
msg("aryn") // as argumrnt to city is not assigned , so when no vlaue is assigned to a varibale undefined is assigned to

//sum of range ofr numbers taken as  argument
function sum(number){
let count = 0
for(let i = 1 ; i<=number; i++){
    count= count +i
}
console.log(`sum of numbers from 1 to ${number} is ${count}`)
}

sum(10)

//annonymous function -> a function that doesnt have a name
// u assign that nameless function to variable and call/adress that function by variable name

let anon = function (){ //not a nice practice
    console.log('i dont have any name , anonnymous')
}

anon() // the variable name becomes the name of the function 
console.log(typeof anon)

// u cant call a anonymous function before declaration as it is treated like a variable and beahves like one

let fexpression= function here(fname){ // a function expression , when a function with a name is assigned to variable , the variable becomes it name and called by variable name
    console.log(`i know ur name is ${fname}`)

}
fexpression("hihi") // accesed by variable name
// here("haahaa")  will give  an error as it is not globally defined but defined and assignes to the variable , will be accessed whne called by variable name , local function

// Return type -> when u want function to give  back somw value and u want to use it as per a wish after assigning th return value to a variable
//a good practice , mostly followed

function add(x,y){
    return x+y

}
add(12,18) // wont be logged as the body of function doesnt have a console.log n have a instructionn to log the ouput, the function only returns a value -> give back a value

console.log(add(12,12)) // calling the function inside the console.log -> the function returns a value back to where  function is called , here internally in console.log(24)

const result = add(7,7) //calling the function , the function returns back a value where it is called here in a variable , then the return value from the function i assigned to variable . then to logg and use this o/p anywhere it will be assecced by this variable result
console.log(result)


