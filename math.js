//Math in js
let num1 = 231 // created a no -> no type -> memory in stack -> storing a no in variable

let num2 = new Number(231) //new way to create a no -> object type ->memory allocation in heap
//the num1 stores the value(data) in it as it is stored in memory stack
// the num2 variable store the refrence(memomry location) pointing to data stored in it as the new keyword creates a variable in object type and because of that the data of the variable is stored in the heap memory and the variable in stack memory stores the refrence pointing to that data


console.log(num2)
console.log(typeof num2)

let num3= new Number(231)


console.log (num1 == num2 ) // as both are diff types num1= number num2=object ,type conversion need to happen for fair comparison ,as number is stored in object type because of new keyword , so while comparison the object datatype is converted to number data type and compares the number num1 with the number data stored in it , because its the data in varibale gets coonverted(undergoes type conversion)
//it is like string converted to no or boolean
// 231==231 -> true

 
console.log(num2 == num3) // as both are of same types that is object , so comparison will happen without any type conversion
//comparison of num2 and num3 both stores the refrence of thier data type which is number (same) but stored in diff memory location as declared indvidually and seprately as new . so as both num2 n num3 store diff values(refrences) as that is what gets coompared
// for eg : 60048==9083 -> false


//exploring number methods by num.
let num = 231.68
console.log(num.toFixed(1)) //() u put a digit in it which refers to no of digits after the decimal point -> if 1 then it will be 1 digit after decimal point and it will be rounded of to log the number till 1 decimal point , output is rounded off

console.log(num.toFixed(3)) // since we wanr three numbers after poin and it has 2 so to make it three and log it it will add 0 at last

console.log(num.toPrecision(4)) //() u put a value in here stating how many digit u want from start to end in the number->and the ouput will be rounded off

console.log(num.toExponential(3)) // convert the number in exponential form and in that how many digits u need after decimal in conversion form , and the no will be rounded off
//for eg no is 231.68 and u need to convert it in exponential form with 2 digits after point it will be 2.32*10**2
// (3) -> 2.317 * 10**2

console.log(num.toString()) //converts number data type to string data type
console.log(typeof num.toString())

console.log(num.valueOf) // tells the value of no , basically just loggs the number -> 231.68

//Math -> built-in global object that provides a collection of constants, properties, and methods for performing mathematical operations and calculations.

console.log(Math.E) // logs the value of eulers constant e -> 2.178
console.log(Math.LN10) // logs th value of ln 10
console.log(Math.PI) //-> 3.14 

console.log(Math.random()) // randomnness achived in logging the value through this property
// the random values logged will be from 0<= value <1 (0 included and 1 excluded and no b/w them)

// to generate a random no from 0-9
console.log(Math.random()*10) // value -> (0<= value <1)*10 -> 0<= value < 10
// but it will generate all the random nos from 0-9 and all will decimals , but if we need only integers no decimals from 0-9 then we use something floor and ciel properties

num = 23.5
console.log(Math.floor(num)) // floor will remove the decimal and return the lower integer value of the number that is just the digits before before and no rounding off

console.log(Math.ceil(num)) // integer greater than the integer left after decimal removal without rounding of is returned
// 23 < 23.5 < 24
// floor < number < ceil

// now to log random nos from 0-9 and only integers
console.log(Math.floor(Math.random()*10)) // now it will return floor values only and integers

// generate random integrs from 1-10
//value -> (0<= value <1)*10 -> (0<= value < 10)+1 -> 1<=value<11
console.log(Math.floor(Math.random()*10+1))

// generate random integrs from 0-11
//value -> (0<= value <1)*12 -> (0<= value < 12)
console.log(Math.floor(Math.random()*12))

// generate random integrs from 11-20
//value -> (0<= value <1)*10 -> (0<= value < 10)+11 -> 11<=value <21
console.log(Math.floor(Math.random()*10+11))

// generate random integrs from min-max
//console.log(Math.floor(Math.random()*(max-min+1)+min))

// generate random integrs from 40-50
//50-40+1-> 11 
console.log(Math.floor(Math.random()*11+40))

//ludo dice genrerator goes from 1-6
console.log(Math.floor(Math.random()*6+1))

//math.random() -> a public function which internally will be executing a code to generate random values , its algorithm to calculate and return random nos uses system clock to generate random nos , as system clock is continously moving and is used to calcultate time , predictable once hacker gets to know ur system clock and algorithm/code in the math.random function which is public

//not truly random as its guessable and can finded out after getting to know its algoritm and system clock , because a trully random is which  isnt predicible and cant be find out ever , so thats a more secure and system is needed to genrate random nos as otp -> so companies selling this otp services made a system with thier algos more secure and private impossible to find out for hacker and making it close to truly random

console.log("Done for this file")