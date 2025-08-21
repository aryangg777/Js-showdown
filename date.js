//Date in js is a imp object which represents a single moment time in a platform independent format

const d = new Date() // created a date object -> which shows the current date in time ->orignally calculate things in milliseconds from 1st jan 1970 12am which is then converted to date ans time
console.log(d)

//using date properties
console.log(d.toDateString()) //date o/p in proper form 

console.log(d.toString()) //simpler format of date and personalised date time string , time shown acc to where u live in compared to gmt

console.log(typeof d) // object type made using new keyword
// date object is giving us date and time from system clock -> change the date and time of ur system  o/p will be differnet

//d= value  in ms -> which is converted to todays date n time  and the ms is calculated from 1st jan 1970 12:0:0 am set as std

const dd = new Date(1000) //(ms) u want the date n time to be calculate for from std date

console.log(d.getDate()) // when  only date is needed will return th date value only nothing else
console.log(d.getDay()) // will tell u what day it is in value not text , days follow a 0 based  indexing sun(0) , mon(1) ..
console.log(dd.getMonth()) //will retrun u what month it is in value not text , days follow a 0 based  indexing jan(0) , feb(1) ..
console.log(dd.getFullYear()) // will retrun year value only
console.log(d.getMilliseconds()) // will return u the the current ms value in the clock not the total ms from 1970 jan 12am to the current date n time
console.log(d.getMinutes()) // will return u the the current min value in the clock not the total ms from 1970 jan 12am to the current date n time

//why compare date n time from ms -> has indepth knowledge , give precission , accuracy for comparison , aslo easy to do operations on  it
// eg: first come first serve for booking last ticket and both came on same time , so we check on ms to check u came first

console.log(d.getTime()) //will return u the total ms from 1970 jan 12am to the current date n time

const now = Date.now() //will  also return total ms lapsed from that date n time to current date n time
console.log(now) //timestamp , time when it was executed

//line no 28 n 31 is for same purpose but returns diff value when run together -> as the code n function is run line by line it takes time so thus this  deviation

let da = new Date("2022-10-20") //  in string fromat the indexing is 1 based no 0 , jan (1), yr-month-day format
// giving and setting a custom date in da variable
console.log(da) // logs the date and time as 00:00:00 as in custom date we didnt set  time

da = new Date("2023-11-20T01:01:30") // now setting both custom date and time in da variable
console.log(da)

da = new Date(2024,4,28) // number based input so the months will follow a 0 based indexing jan(0) -> so ur month o/p value will be 1 greater than ur input to match same month
console.log(da)
//when in date() single value is given -> then ms from 1970 calculated
// when multiple values given -> custom date n tim


//setting date components
const dec = new Date()

dec.setDate(20) //set day of the month
dec.setFullYear(2021) //set year
dec.setMonth(5) //set month , 0 based indexiing followed so  o/p of month will be acc  to that , n to match our i/p it will show month grtr than 1 we put
dec.setMinutes(20) //set minutes
dec.setMilliseconds(30) //set ms
console.log(dec)
console.log(dec.toString())

//formatting date -> will show same o/p in  different format
//date.tostring, toisostring , tolocaldatestring , tolocaltimestring ....

//date calculation
const date1=new Date() //store current date when no i/p given
const date2 = new Date("2025-12-21") //store this custom date
console.log(date2-date1) // will log  o/p in ms , all arthmetic operations done using ms and o/p given in that

//countdown  timer of  olympic 2028
// in days , hour , minutes , sec

let dat = new Date()
let dat2 = new Date("2028-07-14T00:00:00")
const sub= dat2-dat // in ms
const days = Math.floor(sub/(1000*60*60*24))
console.log(days)
const hours = Math.floor((sub/(1000*60*60))%24)
console.log(hours)
const minutes = Math.floor((sub/(1000*60))%60)
console.log(minutes)
const sec = Math.floor((sub/(1000))%60)
console.log(`timer : ${days} days ${hours} hours ${minutes} minutes ${sec} seconds`)


console.log("Done for this file")