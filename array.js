//Array in js
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