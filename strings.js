//Strings -> basically any word or line 
let msg = "i am a mentor"
//iterating over a string -> display each character of string in each seperate line
//char is the smallest individual unit of string  , basically each alphabet of string is a char
for (let  char of msg){ //for let loop , every char of msg , doesnt give index directly gives char
    console.log(char)
}

for(let  char of msg){ //dont want to print n but rest all
    if (char==="n"){
       continue;
    }
    else { console.log(char)}
}

let count = 0
for(let char of msg){
    if(char === "a"){ //calculating no of a in a string
        count ++
    }

}
console.log(count)

//index is position of character in a string , 0 based indexing followed, space is also considerd a char in string and has a index
console.log(msg[0])
console.log(msg[1])
console.log(msg[2])

for(let i =0 ; i<msg.length ; i++ ){
    console.log(msg[i])
}

let price = 80
console.log(`price of tomato is ${price} , get asap`) //varibable data type no converted to string
console.log("price of tomato is",price,"get a asap") // no type conversion
// can access and print multiple things in a single line 

console.log("Hello \nAryan Gupta")

//string methods
msg = "i am a mentor"
let index = 5
console.log(msg.charAt(index)) // returns a no that is logged in 
// takes a (index) -> and returns a character at that index of string msg
console.log(msg.charAt(100)) // retunrns aempty string when the index put in is  not present in the string

//charcodeat(index) -> it will return the ascii value of the character at that index
//evry char on keyboard is given a special code known as ascii code
console.log(msg.charCodeAt(7)) //logs the ascii value of n
let ascii = msg.charCodeAt(2)
console.log(ascii) 
console.log("the ascii code of",msg.charAt(2),ascii)

//indexof method -> to find if a char is present in a string or not , to find the index of a char in the string 

msg = "i am a mentor"
console.log(msg.indexOf("a")) // ("") specify the string whose index u need find , returns index when the char occurs first
//but if there same multiple string/char in a string and u need thr index of some other ocureance of that char not 1st

let position= 3 //(index) no to start searching for that char in string and return its index
console.log(msg.indexOf("a",position))

console.log(msg.indexOf("a",3)) // will start seraching of a from 3 index in string and then return 1st occurance after that of a

let hero = 'Hello coder army'
console.log(hero.indexOf("coder")) //it will check if the substring is present in the mainstring  or not , if yes then it will return the index of 1st charcter of substring

console.log(hero.indexOf('b')) //for any char not presen in the string it will return -ve no

//to check if char is present in the string
function char (string,char){
    const index = string.indexOf(char)
    if(index <0){
        console.log('not present')
    }
    else{
        console.log('present')
    }
}

char('i am a mentor','g')

let pr = (text, char) => { 
    let index = text.indexOf(char);
    return index < 0 ? "not present" : "present";
}

console.log(pr("heelo","g"))

//includes() -> most useful method in string , checks if a string/char is present in a string or not -> will return a boolean value

msg = "i love code"
console.log(msg.includes("code"))
// can be used as condn as retruns a bool

if(msg.includes("dark")){
    console.log('dark person')
}
else
{
console.log("light person")
}

//vowels in a string or not
let vowels = "aeiou"
for(let char of msg){
    if (vowels.includes(char)){
        console.log(char,'is a vowel')
    }
}
let flag

for(let char of msg){
    if (vowels.includes(char)){
        flag = true
        break;
    }
    else{
        flag=false
        break;
    }
}

if (flag){
    console.log("vowel present")
}
else{
    console.log("vowel not present")
}

//touppercase , tolowercase -> converting case of any string

msg ="i am aryann"

console.log(msg.toUpperCase()) // returns a string where every char is converted to upercase
console.log(msg) //orignal msg not changed

//we can chain multiple methods

for(let char of msg){
    if (vowels.includes(char.toLowerCase())){ //convterted every char of string to lower case compared to aieou , coversion imp if string contains A as js is case sesitive it will not identified as vowel as not included in aeiou
        console.log(char, 'is a vowel')
    }
}

//substring method -> if a string is too short and u want to display cut short and display some part of it

const  username= "Aryan Gupta"
let startno=0 //starting char of substring from 0th index
let endno = 9 //no charcters in substring
const substring = username.substring(startno,endno) //no of index
//include charcter from 0th index to 9 index making it 10 charcters

console.log(substring,"...")

//usefull in responsive design if cut short a too long video title in a small screen


//trim method -> to cut short and delete extra space

const text = "    hola !! how u    " //extra space on left and right of text u need to delelte as applying other string ,ethods to this may give unxpected o/p , can be a input by user

console.log(text.length) //each space also included in string length
console.log(text.substring(0,6))
console.log(text.trim()) //trim removes leading space and trailing spcae from a string
console.log(text.trim().substring(0,6)) //chaining of methods can be done in some cant in some so see acc.

console.log(msg.length) //retuns the total length of string , total no characters in a string

//u can explore for methods of strings go through that , understand , read through docs .. as covering all methods no possible .
// done all imp , but u can read more docs and articles for more methods eg: concat ,slice etc..
//no one remebers all methods from day 1 and no need to -> u will get it when u use regulary and visit and read when u need something

//new way to create string : -> not prefferd much
let lateststring = new String("hello") // creates a new string hello and stores in variable lateststring

console.log((lateststring)) //prints string in diff way in  object  form
console.log(typeof lateststring) // creating  something using new keyword creates a object type data typee storing that value only
//stores string data in object from and also inclues its method 
// 0:h
//1:e
//.
//.
//lenght : 5 , u can access all this normally through lateststring[1],.length .. see it in chrome console


//when string created in normal way using let str = 'heelo' , memory sllocstion in stack
// when string creted usong new keyword memroy allocation in heap of data and varibale stored in stack stroting the refrence to this data in heap

