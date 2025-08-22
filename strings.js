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

const pr = (text,char)=> {
    let index = text.indexOf(char)
    index<0?"not present":"present"
}

console.log(pr("heelo","g"))