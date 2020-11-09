var ad = document.getElementById("pancake");
var curDate = new Date();
var curDay = curDate.getDay();


if (curDay == 5){
    ad.style.display = "block";
} 
else {
    ad.style.display = "none";
}