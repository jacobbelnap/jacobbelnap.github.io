let curDate = new Date();

let daysOfWeek = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesdsay',
   'Thursday',
   'Friday',
   'Saturday'
];

let fullDate = daysOfWeek[curDate.getDay()];

let dayofMonth = curDate.getDate();
fullDate += ', ' + dayofMonth;

let months = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December'
];

fullDate += ' ' + months[curDate.getMonth()];

let year = curDate.getFullYear();
fullDate += ' ' + year;

console.log(fullDate);

document.querySelector('#date').textContent = fullDate;