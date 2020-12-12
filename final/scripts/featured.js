window.addEventListener('load', (event)=>{
   // Sources
   const temples = "https://jacobbelnap.github.io/final/js/temples.json";
   const urlWeek = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=90aa44ab21553c527d4d2c29884c7797&units=imperial";
   const townData = "https://byui-cit230.github.io/weather/data/towndata.json";

   // Current JSON
   fetch(temples)
   .then(function (response) {
       return response.json();
   })
   .then(function (jsonObject) {
       // curTemp
       document.getElementById("curTemp").textContent = Math.round(jsonObject.main.temp,0) + '\u00B0F';

       // highTemp
       document.getElementById("highTemp").textContent = Math.round(jsonObject.main.temp_max,0) + '\u00B0F';

       // Humidity.
       document.getElementById("humidity").textContent = Math.round(jsonObject.main.humidity,0) + '%';

       // Windspeed
       document.getElementById("windSpeed").textContent = jsonObject.wind.speed + ' mph';

       // Calculate the windchill.
       windChill(jsonObject.main.temp, jsonObject.wind.speed);
   });

   // Forecast JSON
   fetch(urlWeek)
   .then(function (response) {
       return response.json();
   })
   .then(function (jsonObject) {
       const weatherList = jsonObject["list"];
       let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
       let num = 0;

       // Loop through JSON
       for (i = 0; i < weatherList.length; i++) {
           let dates = new Date(weatherList[i].dt_txt)

           // Find 18:00
           if (dates.getHours() == 18){  
               num++;

               // Page ID's
               let page_id = "day" + num;
               let page_img = "img" + num;
               let page_output = "temp" + num;

               // Day of Week
               document.getElementById(page_id).textContent = days[dates.getDay()];

               // Temp
               let curTemp = Math.round(weatherList[i].main.temp);
               document.getElementById(page_output).textContent = curTemp + '\u00B0F';;

               // Icon Image
               var icon = weatherList[i].weather[0].icon;
               icon = icon.substring(0,2)
               let imagesrc = '/images/icons/' + icon + '.png'; 
               document.getElementById(page_img).setAttribute('src', imagesrc);
           }
       }
   });

   //Event Data
fetch(townData)
.then(function (response){
    return response.json();
})
.then(function (jsonObject) {
    const towns = jsonObject.towns;

    for (i=0;i<towns.length;i++){
        if (towns[i].name == "Preston") {

            let title = document.createElement("h2");
                title.textContent = "Upcoming Events"
                document.getElementById("events").appendChild(title);

            for (m=0;m<towns[i].events.length;m++) {
                let event = document.createElement("p");
                event.textContent = towns[i].events[m];
                document.getElementById("events").appendChild(event);
            };
        };
    };
});
});

// Windchill Function
const windChill = function(temp, speed){
   var ans = Math.round(35.74+(.6215*temp)-(35.75*Math.pow(speed,.16))+.4275*temp*Math.pow(speed,.16));

   if (temp <= 50 && speed > 3){
      document.getElementById("windChill").innerHTML=ans +"&#8457";
   }
   else {
      document.getElementById("windChill").innerHTML="N/A";
   }
};



