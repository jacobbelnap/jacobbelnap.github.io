var curDate = new Date();
var curYear = curDate.getFullYear();
var curDay = curDate.getDate();
var curWeekday = curDate.getDay();
var curMonth = curDate.getMonth();

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

curWeekday = weekday[curWeekday];

var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
curMonth = month[curMonth];


document.getElementById("curDate").innerHTML =  curWeekday + ', ' + curDay + ' '+ curMonth + ' ' + curYear;