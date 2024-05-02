// SELECTOR  
// document.getElementById  document.querySelector  document.querySelectorAll , document.getElementsByClassName , document.getElementsByName
// // 

// We have a consturctor called Date();


// By default Javascript will use the browsers time zone  and dispaly a date as a full text string


/* Creates a new Date.
* @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
* @param monthIndex The month as a number between 0 and 11 (January to December).
* @param date The date as a number between 1 and 31.
* @param hours Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.
* @param minutes Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.
* @param seconds Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.
* @param ms A number from 0 to 999 that specifies the milliseconds.
*/
 // month have 0 indexing , 0 ->Jan , 11 => Dec


// getting time stamp

console.log( 'Hey'  , new Date().getTime())

const date  = new Date();
console.log('Day' ,  date.getDay()) // this will give the number of day 1=> monday , 0=> sunday , sat=>6
console.log('Year' ,  date.getFullYear()) // 

console.log('Month' ,  date.getMonth()) // 


date.setFullYear('2023');
date.setDate('04')

