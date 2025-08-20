let num1 = 231 // created a no -> no type -> memory in stack -> storing a no in variable

let num2 = new Number(231) //new way to create a no -> object type ->memory allocation in heap

console.log(num2)
console.log(typeof num2)

let num3= new Number(231)
console.log (num1 == num2 )
console.log(num2 == num3)

//exploring number methods by num.
let num = 231.68
console.log(num.toFixed(1)) //() u put a digit in it which refers to no of digits after the decimal point -> if 1 then it will be 1 digit after decimal point and it will be rounded of to log the number till 1 decimal point , output is rounded off

console.log(num.toFixed(3)) // since we wanr three numbers after poin and it has 2 so to make it three and log it it will add 0 at last

console.log(num.toPrecision(4)) //() u put a value in here stating how many digit u want from start to end in the number->and the ouput will be rounded off

console.log(num.toExponential(2)) //