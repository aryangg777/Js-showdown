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

//we never do console.log() inside a function , bad practice . 
//functions should be pure functionsthat should accept parameters and return back some value n also dont change the data type of accepted variable

function multiply(number){
    return number**2 // executing function ends here
    console.log("hey") // code beyond return in a function is not logged 
}

console.log(multiply(2)) // make sure not to write any thing beyond return

//Arrow function : it is just function expression with diff syntax , easier
//defining a function to a variable

let trying = function(x,y){
    return x+y;
}
console.log(trying(4,4))

let arrow = (x,y) => {return x+y}  //remove word function from anonymous function for arrow function and seperate parameters and body of function by arrow

console.log(arrow(3.5,3.5))

const addn = (x,y) => x+y // whenever we have just one single value after arrow that we have to return , no need to write retrun and {}
//single expression(value) written after arrow is automatically returned to function 
console.log(addn(111,111))

const greater = function(x,y){
    if(x>y){
        return x
    }
    else {return y}
}

console.log(greater(11,12))

const bigger = (x,y) => x>y ? x : y //dont use {} in single line body code and also dont use when u are not writing return in {} 
const ouput = bigger(12,23)
console.log(ouput)

const addition = (number)=>{ 
    let count = 0
for(let i = 1 ; i<=number; i++){
    count= count +i
}
return count
}
console.log(addition(10))
  
// defigning a function inside a function

function testing(number){
        console.log("testing a function inside a function")
        let sum = 7
        
        function baby (){
            console.log(`i am inside function testing ${number}`) 
            console.log(sum)
            //the inner function will have access to the variables and parameters of its outer function due to JavaScript’s lexical scoping rule.

        }
        baby()

}
// testing()
try {
    baby()
} catch (error) {
    console.log(error.message)
    
}  // will give an error as the function baby is not defined in global scope and only known and personal to function testing so to execute the function baby u need to call the function baby inside testing do that when we call function testing globally funcyion baby also gets called as function baby is a local scope 

testing(7) //The inner function is available only within the scope of its outer function. function baby is not known globally but personal and locally known to parent

//what ever u write within a function is local and acessible to the function and executed when only the function is called , cant globally access whatever in the function : variable,function etc.. all these cann only be accessed within function only

// thus a same variable can be declared and used independently in diff variables as whatever is defined in a variable is personal to itself without acesss to anyone . a variable used or defined globally can be used inside a function independently or dependently


const lname = 'gupta'
function lnameprint(lname){
    console.log("last name is",lname)
}

lnameprint("verma")

console.log("Done for this file")