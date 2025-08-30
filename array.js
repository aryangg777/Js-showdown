//Array in js
//array a non primitive data type used to store and manage collections of data efficiently
//arrays can store multiple datatypes in it including nos,strings,arrays,objects ..
//elements of array can be assecsed by thier ids(index) , arrays follow a 0 based indexing

const arr = [2,3,4,5,6,8,8,9,10,22,33,11]
console.log(arr)

const array = [2,'aryan',[],{},true]

console.log(arr.length) // no of elements in an array

//acessing elements in an array
console.log(arr[0]) // array follows 0 based indexing
console.log(arr[1])

console.log(arr.at(0)) //(index) returns the element present at that index in an array
//adv latest , can take -ve index

console.log(arr.at(-1)) //when indexing starts from the last element it start from -1,-2 ..so on
console.log(arr[-1])

const newarr= arr
console.log(newarr)
console.log(newarr==arr) //shallow copy refrence copied  , changes in newarr will be changes in arr

//want newarr and arr to have same elements but should point diff arr in heap

const newwarr=structuredClone(arr) //creates a new array with same elements as arr but now diff memory locations

console.log(newwarr==arr) //refrence value compared and it its diff as it is pointing to diff arrays in memory location having same elements
//changes in one array doesnt affect another now

arr.push(30) //(element) that will be added at last of the array
console.log(arr)

arr.pop() //delete the last element from the array
console.log(arr)

arr.unshift(7) //(elements) add that at the start of array
console.log(arr)

arr.shift() //delete the starting element of the array
console.log(arr)

delete arr[2] //[index] deletes element at particular index of an array
console.log(arr) //dis adv = the index of the elements will remain same as previous as the element at that index is deleted but still the space will be reserved for the 2 index 
//unlike in shift and pop as the space along with element is freed
// sace reserved at the deleted index is called hole

console.log(arr.indexOf(5)) //(element) will return the index of the element from the aray , index of first occurance returned
console.log(arr.lastIndexOf(6)) //(element) will return the index of the element from the aray ,index of the lastoccurance of the elment returned in case od same elements in array

console.log(arr.includes(3)) //(element) returns a boolean stating if the element is present in the array or not

//arr.slice(start index , last index) , remove elements

arr.slice(2,4) //returns an array with elements of index 2 and 3

console.log(arr.slice(2,4)) //returns a new array 
console.log(arr) //orignal array not changed , remains same

//arr.splice(starting index , no of elements) cut an array from existing from 2nd index having 5 elements(2nd index element included)

console.log(arr.splice(2,5))//cuts an array from 2nd index having 5 elments and returns that
console.log(arr) //orignal array changed and returned the uncut part

//arr.splice(starting index , no of elements,elements to add)
arr.splice(2,3,"money",99) //cut 3 elements from array from 2nd index and add elements money n 99 from 2nd index
console.log(arr) 
arr.splice(2,0,true,'testing') //when u dont want to delete array and add elements in array at(from) 2nd index included
console.log(arr)

arr.toString() // converts array to string
console.log(arr.toString())
console.log(typeof arr.toString())

console.log(arr.join()) //converts array to string
console.log(arr.join('*')) // ('symbol') elements in the string seperated by that symbol (,) by default

let arr1=[false,true,'fake']
let arr2 = [2,3,4,5]
let arr3 = [9,10]

let arr4=arr1.concat(arr2) //want to convert/mix two elements of array into one array
console.log(arr4) //1d array only

let arr5=arr1.concat(arr3,arr2)
console.log(arr5) 

arr1.push(arr3)
console.log(arr1) //2d array , arr3 pushed whole toghter as a single entity , not element by element
console.log(arr1[0])
console.log(arr1[3][0])

//2d array
let arr1d = [1,2,3,4]
let arr2d = [[1,2,3],[4,5,6],[7,8,9]] //each sub bracket [] treated as a single row and elments in it as elments of that row
console.log(arr2d)
console.log(arr2d[0]) //elemts of 0th row
console.log(arr2d[0][2]) //element at 0th row and 2nd column position 

//convert 2d array into 1d array
let new1d = arr2d.flat() 
console.log(new1d) //inner arrays broken to merge in bigger array , all elements individually present sequently

let abc = [2,3,2,3]
//to check if abc is array or not
console.log(typeof abc) //returns object -> array datatypes are objects and are stored in same fasion , so no clear ans if array or not or something else as object data types can of many data
console.log(Array.isArray(abc)) //returns a boolean , stating (variable) is a array or not

//another way to create array but not recommended
let ac = new Array(2,3)
console.log(ac) //stores array into object and also stores its diff prop in it

let a = new Array(10) //(single value) size of an array a, reserve and create an empty array capable to take 10 elemets
let ab = new Array() // array ab created of variable legnth and will take size upon elements added/subtracted in it

console.log(a)
console.log(ab)

//split method -> convert string to array
//to check if a string is palindrome or not
const input = 'madam'
//reverse string n check but we cant aplly reverse on string but can on array
const trial = [1,2,3]
console.log(trial.reverse()) //reverses elements in array

const char = input.split("") //("") how u want the elements to seperated in array
console.log(char.reverse()) //changes done in orignal array
let reverse = char.join("")
console.log(reverse==input)


//spread operator (...arr)

Array = [12,3,4,4]
console.log(...Array) //not an array , unpacking elements of an array

arr1 = [1,23,44,32]
arr2 = [1,2,34,3]
arr3 = [...arr1,...arr2,10,77] //when u have to add multiple items  in array
//doesnt change orignal array
console.log(arr3)

//deconstucting array = extracting values from array and assigning them to a variable
const num = [1,23,34,4]
const [aa,b,c] = num
console.log(aa)

const [x,y,z,courses] = [5,6,7,['html','css','js']] //const [, , ,courses] = [5,6,7,['html','css','js']] not assigning variables to elements not needed
console.log(courses)

const aaa =[['html'],2,3,45,5]
const [course , f] = aaa
const [bb,cc , ...rest] = aaa //cant add more variables after rest , returns left elements as an seperate array
console.log(course)
console.log(rest) // returns left elements as an seperate array

//swapping nos
let nos1 = 5;
let nos2 = 1;

// Proper swap
[nos1, nos2] = [nos2, nos1];

console.log(nos1);   // Output: 1
console.log(nos2);  // Output: 5

//sort method
const fruits = ['apple','mango','banana']
fruits.sort() //changes in orginal array
console.log(fruits) // compared character by charcter after converting into thier ascii code . arranges iin asscending orger


const Numbers = [1,4,2,7,8,61,11]
Numbers.sort()
console.log(Numbers) //numbers converted to string and compared their unicode transformation

function asc(a,b){//call back function
    return a-b //sort in ascending order , for descending order b-a
    //take no pair wise
  //first 1,4 if diff -ve then no change in order
  //then 4,2 if diff +ve then change in order
  //keep going on .
}
Numbers.sort(asc)
console.log(Numbers)

//to avoid shallow copy use spread operator
let ARRAY = [1,2,3,4] 
let ARR3 = [...ARRAY] //points to a diff element in memor with same element , deep copy
console.log(ARR3)
ARR3.push(777) //chnages in ARR3 not ARRAY as they are diff now as deep copy is created using spread operator
console.log(ARR3)
let Arr4 =[] //empty array with no elements can add later

for (let char of ARRAY)
{
    Arr4.push(char)
}
console.log(Arr4)

