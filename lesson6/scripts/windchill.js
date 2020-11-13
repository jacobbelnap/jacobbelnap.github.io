function windChill(){
   var temp = document.querySelector("#curTemp").innerHTML;
   var speed = document.querySelector("#windSpeed").innerHTML;
   var ans = Math.round(35.74+(.6215*temp)-(35.75*Math.pow(speed,.16))+.4275*temp*Math.pow(speed,.16));

   if (temp <= 50 && speed > 3){
      document.getElementById("windChill").innerHTML=f +"&#8457";
   }
   else {
      document.getElementById("windChill").innerHTML="N/A";
   }
}
window.onload=windChill;