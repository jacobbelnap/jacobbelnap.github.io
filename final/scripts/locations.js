window.addEventListener('load', (event)=>{
   // Sources
   const templeURL = "https://jacobbelnap.github.io/final/scripts/temples.json";
   const weatherURL= ["https://api.openweathermap.org/data/2.5/weather?id=1717512&appid=90aa44ab21553c527d4d2c29884c7797&units=imperial"
                     ,"https://api.openweathermap.org/data/2.5/weather?id=1819729&appid=90aa44ab21553c527d4d2c29884c7797&units=imperial"
                     ,"https://api.openweathermap.org/data/2.5/weather?id=7873868&appid=90aa44ab21553c527d4d2c29884c7797&units=imperial"
                     ,"https://api.openweathermap.org/data/2.5/weather?id=1701668&appid=90aa44ab21553c527d4d2c29884c7797&units=imperial"
    ];
    const city = ["cebu","hongkong","guam","manila"];

   fetch(templeURL)
   .then(function (response) {
       return response.json();
   })
   .then(function (jsonObject) {
       const temples = jsonObject['temples'];
       // Loop through JSON
       for (i = 0; i < temples.length; i++) {

            let card = document.createElement('div');
            let card2 = document.createElement('div');
            let title = document.createElement('h4');
            let phone = document.createElement('p');
            let address = document.createElement('p');
            let phase = document.createElement('p');
            let dedicated = document.createElement('p');
            let services = document.createElement('p');

            let cont1 = document.createElement('section');
            let cont2 = document.createElement('section');
            let cont3 = document.createElement('section');
            let cont4 = document.createElement('section');

            let img1 = document.createElement('img');
            let img2 = document.createElement('img');
            let img3 = document.createElement('img');
            let img4 = document.createElement('img');

            let cleanName = temples[i].name.split(" ").join("").toLowerCase();
            let tempDiv = 'div.templeInfo_'+cleanName;
            let galleryDiv = 'div.gallery_'+cleanName;


            // Title
            title.textContent = 'Temple Information';
            card.appendChild(title);

            // Phone
            phone.textContent = 'Phone: '+temples[i].telephone;
            card.appendChild(phone);

            // Address
            address.textContent ='Address: '+temples[i].address;
            card.appendChild(address);

            // Phase
            phase.textContent ='Phase: '+temples[i].phase;
            card.appendChild(phase);

            // Dedicated
            dedicated.textContent= 'Dedicated: '+temples[i].dedicated;
            card.appendChild(dedicated);

            // Services
            var service = temples[i].services[0];
            for (j=1;j<temples[i].services.length;j++){
                service = service + ', ' + temples[i].services[j];
            }
            services.textContent = 'Services: '+service;
            card.appendChild(services);

            img1.setAttribute('src','images/'+cleanName+"Hotel.jpg");
            img1.setAttribute('alt',temples[i].name+" Hotel");
            img2.setAttribute('src','images/'+cleanName+"HotelView.jpg");
            img2.setAttribute('alt',temples[i].name+" Hotel View");
            img3.setAttribute('src','images/'+cleanName+"HotelRoom.jpg");
            img3.setAttribute('alt',temples[i].name+" Hotel Room");
            img4.setAttribute('src','images/'+cleanName+"Temple.jpg");
            img4.setAttribute('alt',temples[i].name+" Temple");

            cont1.appendChild(img1);
            cont2.appendChild(img2);
            cont3.appendChild(img3);
            cont4.appendChild(img4);

            card2.appendChild(cont1);
            card2.appendChild(cont2);
            card2.appendChild(cont3);
            card2.appendChild(cont4);


            //Add entire card to HTML
            card2.setAttribute('class','cityGal');
            document.querySelector(tempDiv).appendChild(card);
            document.querySelector(galleryDiv).appendChild(card2);
        }
    });
    
    for (i=0; i < weatherURL.length; i++){


        // Current JSON
        fetch(weatherURL[i])
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {

            
            console.log(city[i].textContent);
            let card = document.createElement('div');
            let title = document.createElement('h4');
            let curTemp = document.createElement('p');
            let highTemp = document.createElement('p');
            let humidity = document.createElement('p');
            let windSpeed = document.createElement('p');
            console.log('weatherInfo_'+cities[i].textContent);

            // Title
            title.textContent ='Weather Summary';
            card.appendChild(title);

            // CurTemp
            curTemp.textContent= 'Currently: '+ Math.round(jsonObject.main.temp,0) + '\u00B0F';
            card.appendChild(curTemp);
    
            // highTemp
            highTemp.textContent= 'High: '+ Math.round(jsonObject.main.temp_max,0) + '\u00B0F';
            card.appendChild(highTemp);

            // Humidity.
            humidity.textContent= 'Humidity: '+ Math.round(jsonObject.main.humidity,0) + '\u00B0F';
            card.appendChild(humidity);

            // Windspeed
            windSpeed.textContent= 'Wind Speed: '+ jsonObject.wind.speed + ' mph';
            card.appendChild(windSpeed);

            // Add Card to HTML
            document.getElementById('weatherInfo_' + cities[i]).appendChild(card);



        }); 
    };
   
}); 
    
