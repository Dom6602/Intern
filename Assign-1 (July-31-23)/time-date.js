// 1)
const Result = new Date()        //internationl
const date = Result.toLocaleDateString()     //local
const time = Result.toLocaleTimeString()
console.log(date, time);

// 2)
const date1 = new Date("December 15, 2022");         
// const localDate1 = date1.toDateString()           
// console.log(localDate1);

const date2 = new Date("December 16, 2022");         
// const localDate2 = date2.toDateString()          
// console.log(localDate2);


ms_bw_TwoDate = date2.getTime() - date1.getTime()
console.log(ms_bw_TwoDate);


// 3)
const current = new Date();         
const Diwali = new Date("November 12, 2023");         
ms_bw_TwoDate = Diwali.getTime() - current.getTime()

seconds_bw_TwoDate = parseInt(ms_bw_TwoDate / 1000)

console.log(seconds_bw_TwoDate);