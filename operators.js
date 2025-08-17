// comparison operators -> compare values and return a boolean
// comparison operators include <,>,<=,>=,==,!=

console.log(5 > 3); // returns a boolean
console.log(30 >= 30);
console.log(40 == 40); //  equality operator

//comparison in string
console.log("apple" > "banana"); // string will be compared by character by character indvidually of each string after character being converted in thier ascii value , for eg b=98>a=97 .. so false

console.log("glow" > "glowing"); // if the ascii value of characters are same move onto next one until u fine a bigger value

console.log("2" > 1); // true string being converted to number type for comparison operator

console.log("01" == 1); // string convert to number for being compared with a number

console.log("01" === 1); // this is strict equality operator and returns a false when comparison is btw diff data types

console.log(null == undefined); // true bcause in vague lang both is no vlaue
console.log(null === undefined); // false as both are diff data tyoe and has diff meaning and importance

console.log(null >= 0); // null when compared  with numbers using <,>,<=,>= it will br converted to 0
console.log(null < 1);
console.log(null == 0); // only in equality null is not converted to number

console.log(undefined == 0);
console.log(undefined <= 1); // undefined when compared to anything except null will return a false

console.log(1 != 0); // not equals to operator

//Conditional statements
let condn = true;
if (condn) {
  //body of if
  console.log("condition is true");
}
// the code written in the body of if will only be run when the condition inside the if(condition) is true only thwn is the body of if is executed
else {
  console.log("condition is false");
} // when  the condn of if is wrong the code written in else body is execeuted if the condn is true after runnin the if bosy this will be skipped
// one of them will run and that will be dependent on con is true all false

let marks1 = 90;

// when u have multiple condns and only one of the o/p is correct acc to conds u use if elseif elseif else

if (marks1 > 95) {
  console.log("1 better");
} else if (marks1 > 85) {
  console.log("pass");
} else if (marks1 > 75) {
  console.log("try hard");
} else {
  console.log("fail");
}
//only one  of the statements will be logged depending  on the conditions , if the 1st if condn true rest all will  not be checked , if 1st is false then 2nd if condn will be  checked if true it will run or else move on to next .. if no condn true else will run finally

// nested if else
const no = 15;
if (no % 5 == 0) {
  if (no % 3 == 0) {
    console.log("no divisble by 5 and 3");
  } else {
    console.log("no only divisible by 5");
  }
} else {
  console.log("no not divisible by 5");
}

//ternary operator a short single line way to write if else condn
// condition ? true code written here will work : false code written here will work

no % 3 == 0 ? console.log("divisible be 3") : console.log("not divisible be 3");
const check = no % 3 == 0 ? "divisible be 3" : "not divisible be 3"; // if u write without console.log just string by default means it will return a value not log it , for it to be logged that value must be assigned to value and then log
console.log(check);

//switch case -> used less
let day = "monday";
switch (day
    // single valued exact match of value of  variable to the case for the body to be logged , for only one of tha case to be logged put break and default to run when no case matches
) {
  case "monday":
    console.log("start");
    break;
  case "tuesday":
    console.log("2nd");
    break;
  case "wednesday":
    console.log("3rd");
    break;
  default:
    console.log("incorrect input");
}

//logical operator
// operators include -> || or , && and , used when multiple conditions are taken in consideration to log something

const phy = 80
const math = 90
const chem  = 75

if (phy>75 && math >=90 && chem>70){ // in and operator all conditions mustt be true even if one condn is flase th if body wont be executed all conditions must be true
    console.log("great")

}
else{
    console.log("work hard")
}

if (phy>80 || math >=90 || chem >80){ //  in or operator atleast one conditon must be true , if 1st condn is true rest condns wil not be checked and if body will be executed otherwise checked 2nd condn will go on till atleast one condn is right
    console.log("topper")

}
else{
    console.log("missed")
}

// logical operators used to identify falsy values like = "",0,null,undefined
let fname = null
let nname = "arru"
console.log("username :",fname) // pitfall as a falsy value in fname so how to save from this
let username = fname || nname || "Guest"  //if fname is falsy value then we assign nname , if fname is a correct value then that is assigned
console.log('username is ',username)
// || will return last falsy value if all falsy value or return first truly value

console.log(fname && nname) // && will either return first falsy value or return last truthy value -> thats why it is used less

// nullish coalescing (??)
// 0,"" are considered truthy value for ?? but null and undefined still considered falsy value
//will return first truthy value or last falsy value

let firstname
let a=0
console.log(firstname??"hidden")
console.log(a ?? 1) // 0 holds a truthy value(imp value)for u use ?? for truthy vlue as using || will consider it as falsy value
