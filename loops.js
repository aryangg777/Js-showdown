// loops -> when u have to write multiple lines of same code so u automate it
// for loop
const readlinesync= require('readline-sync')

for (let i =0 ; i<=5 ; i++) //for(declaration and initialisation ; condition ; increment/decremrnt)
{ // printing gm 6 times without logging it manually
    console.log("Good morning") // 6 iterations 0-5
}
// running a loop 1 time is called 1 iteration
for(let j = 1 ; j<=5 ; j++){
    console.log("iteration no :",j)
}

//value of i  doesnt have any significance outside loop, cant use outside
let i = 10 // globally declared variable for public

for ( i  ; i<=16 ; i++){
    console.log(i)
} // variable used in loop will be personal to it can run multiple loops using same variabale i, as that private and known to that loop only, if it is decalred and intialised in loop , doesnt depend if used earlier or not

//globally declared variable can also be used in the loop , but remember it will change tghe value of orignal varibale for every peice of code in future

console.log(i) // will log the value of i that is declared and intialised outside loops for public use
// will log 17 as loop changed the value of i 

let fname = "aryan"
for (let i=0; i<fname.length ; i++){
    console.log(fname[i])
}

//nested loop 
// logging table from 1-10
for (let i = 1; i<11 ; i++){
    console.log("the table of",i,"is")
   for(let j= 1 ; j<=10; j++){
        
    console.log(i,"*",j,"=",i*j)
   }
   console.log("----------------")

} // outer loop will complete 1 iteration when the inner loop completes its 10 iterations

// checking even nos from 1 - 101
for (let i = 1 ; i<101 ; i++){
   let rem = i%2
   if (rem ===0){
    console.log(i)
   }

}

// while loop -> nothing just open copy of for loop

let k = 1
while (k<=10){ // in this we onl write condition in the bracket , decleration of variable is done outside globally
    
    console.log("Hello world",k)
    k++ //increment done in body , the body willonly run if condn is true
}

//do-while loop -> a loop that will run atleast once for the first time and then run if the condn is true

let j = 10
do {
    console.log("hi i am no",j) // what ever written in do body will be executed for the first time w/o checking condn letter subsequent run of do body code inly if condn written in while() is true
    j++                               
} while(j<17)
// do this thing and check this condn for every next iteration

console.log("\n")

//take a no input from user till the time its greater than 50
let no = readlinesync.question("enter a no greater than 50 ")
for (no ; no <=50 ; ){
    no = readlinesync.question("enter a no again greater than 50 ")
}
console.log("congrats u won")

// while(no<=50){
//     no = readlinesync.question("enter a no again greater than 50 ")
// }
// console.log("accepted")

// Try-catch block
//js basically runs code line by line if it encounter a error in code in a line then it will stop running the code after that line so to tackle the error better so that it doesnt stop the execution of code after it we use try catch block

try {
     console.log(age) // u put the code in body of code that u think might give an error , so if an error occur code execution after this runs too
     // calling and logging an undeclared variable , so it will give an error but wont stop code execution

     // it is basically try this code if runs well good skip cacth block and go ahead , if it returns and error then catch the error pass that as an parameter to catch and log whatever inside catch body and continue code exectution , no stopping even after error that its role
} 
catch (error) {
       console.log("error occured")
       console.log(error.message)
      }

console.log('i am running fine after an error')

// you use try catch block is genrally used for pice of code that code go wrong and can give an error eg: response fom api , if u get an error in that which u can due to your or thier mistake then it should stop executing the code after it and stop running application.

// continue and break imp things for loops and conditionals

// continue : used to skip the rest of the code of current itertation
// printing odd nos from 1-20

for(let i=1 ; i<=20 ; i++){
    if(i%2===0){
        continue 
    }
    console.log(i)
}


// break : used to terminate the loop , when it is executed it terminates the loop , exits switch case/if else ...
// priting first no in 50-70 divsible by 9

for(let i=50 ; i<=70 ; i++){
    if(i%9===0){
        console.log(i,'i am first number now,exiting loop')
        break
    }
}

console.log("Done for this file")
