var curDate = new Date();
var lastModified = new Date(document.lastModified);
lastModified = Date.parse(lastModified);
var curYear = curDate.getFullYear();
document.getElementById("curYear").innerHTML = curYear;
document.getElementById("lastModified").innerHTML = lastModified;