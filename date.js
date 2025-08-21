//Date in js is a imp object which represents a single moment time in a platform independent format

const d = new Date() // created a date object -> which shows the current date in time ->orignally calculate things in milliseconds from 1st jan 1970 12am which is then converted to date ans time
console.log(d)

//using date properties
console.log(d.toDateString()) //date o/p in proper form 

console.log(d.toString()) //simpler format of date and personalised date time string , time shown acc to where u live in compared to gmt
