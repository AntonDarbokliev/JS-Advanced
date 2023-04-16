function previousDay(year,month,day){
const yearDate =  new Date(year,month - 1,day - 1);
const currentYear = yearDate.getFullYear();
const currentMonth = yearDate.getMonth() + 1;
const currentDay = yearDate.getDate();
console.log(`${currentYear}-${currentMonth}-${currentDay}`);
}
previousDay(2016, 10 , 1)
previousDay(2015, 5, 10)


