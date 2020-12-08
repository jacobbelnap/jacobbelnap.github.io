window.addEventListener('load', (event)=>{
   // Source
   const urlDay = "lesson10/apiDay.json";
   const urlWeek = "lesson10/apiWeek.json";

   // Current JSON
   fetch(urlDay)
   .then(function (response) {
       return response.json();
   })
   .then(function (jsonObject) {
       // Set the current temp
       document.getElementById("curTemp").textContent = Math.floor(jsonObject.main.temp);

       // Set the high
       document.getElementById("highTemp").textContent = Math.floor(jsonObject.main.temp_max);

       // Set the current humidity.
       document.getElementById("humidity").textContent = Math.floor(jsonObject.main.humidity);

       // Set the current windspeed.
       document.getElementById("windSpeed").textContent = jsonObject.wind.speed;

       // Calculate the windchill.
       windChill(jsonObject.main.temp, jsonObject.wind.speed);
   });

   // Forecast JSON
   fetch(urlWeek)
   .then(function (response) {
       return response.json();
   })
   .then(function (jsonObject) {
       // Pass the weather list from the json file.
       const weatherList = jsonObject["list"];

       // Setup the days in the week.
       let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

       // Setup the counter.
       let num = 0;
       // Loop through each item in the list adding each card.
       for (i = 0; i < weatherList.length; i++) {
           // Find the time stamp and put it in a date object.
           let afternoon = new Date(weatherList[i].dt_txt)

           // Add the card if the hour is 18.
           if (afternoon.getHours() == 18){
               // Add one to the counter.
               num = num + 1;

               // Setup the document ids.
               let page_id = "day" + num;
               let page_img = "img" + num;
               let page_output = "temp" + num;

               // Convert the temperature from Kelvin to Farenheit.
               let curTemp = Math.floor((weatherList[i].main.temp - 273.15) * (9 / 5) + 32);

               // Label the day for that card.
               document.getElementById(page_id).textContent = days[afternoon.getDay()];

               // Add the temperature for that card.
               document.getElementById(page_output).textContent = curTemp;

               // Create the image link and add it to the card.
               let imagesrc = 'https://openweathermap.org/img/w/' + weatherList[i].weather[0].icon + '.png';
               document.getElementById(page_img).setAttribute('src', imagesrc);
           }
       }
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