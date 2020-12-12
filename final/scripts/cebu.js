window.addEventListener('load', (event)=>{
   // Sources
   const requestURL = "https://jacobbelnap.github.io/final/scripts/temples.json";
   // Temples JSON
   fetch(requestURL)
   .then(function (response) {
       return response.json();
   })
   .then(function (jsonObject) {
       const temples = jsonObject['temples'];
       // Loop through JSON
       for (i = 0; i < temples.length; i++) {
            
        let card = document.createElement('section');
            let title = document.createElement('h3');
            let name = document.createElement('h1');
            let phone = document.createElement('p');
            let address = document.createElement('p');
            let dedicated = document.createElement('p');
            let services = document.createElement('p');

           // Find 18:00
            if (temples[i].name == "Cebu"){  
            
                // Title
                title.textContent = 'Featured City'
                card.appendChild(title);

                // Name
                name.textContent = temples[i].name;
                card.appendChild(name);

                // Phone
                phone.textContent = temples[i].telephone;
                card.appendChild(phone);

                // Address
                address.textContent =temples[i].address;
                card.appendChild(address);

                // Dedicated
                dedicated.textContent= temples[i].dedicated;
                card.appendChild(dedicated);

                // Services
                services.textContent = temples[i].services;
                card.appendChild(services);

                // Photo
                var photo = temples[i].image;
                let imagesrc = 'images/' + photo; 
                document.getElementById(fPhoto).setAttribute('src', imagesrc);
                document.getElementById(fPhoto).setAttribute('alt', photo);
                
                //Add entire card to HTML
                document.querySelector('div.featured').appendChild(card);
        
            }
       }
   });
});

