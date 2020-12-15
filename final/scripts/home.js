window.addEventListener('load', (event)=>{
   // Sources
   const requestURL = "https://jacobbelnap.github.io/final/scripts/temples.json";
   const featuredCity= "Manila";
   fetch(requestURL)
   .then(function (response) {
       return response.json();
   })
   .then(function (jsonObject) {
       const temples = jsonObject['temples'];
       // Loop through JSON
       for (i = 0; i < temples.length; i++) {
            
        let card = document.createElement('section');
        let left = document.createElement('section');
        let right = document.createElement('section');
        let title = document.createElement('h3');
        let name = document.createElement('h1');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let phase = document.createElement('p');
        let dedicated = document.createElement('p');
        let services = document.createElement('p');
        let photo = document.createElement('img');

        let fCard = document.createElement('section');
        let fPhoto = document.createElement('img');
        let fLink = document.createElement('a');
        let fDesc = document.createElement('h4');

        let cleanName = temples[i].name.split(" ").join("").toLowerCase();
        console.log(cleanName);

        // Choose Featured
        if (temples[i].name == featuredCity){  
        
            // Title
            title.textContent = 'Featured City'
            document.querySelector('div.featured').appendChild(title);

            // Name
            name.textContent = '"'+temples[i].name+'"';
            document.querySelector('div.featured').appendChild(name);

            // Phone
            phone.textContent = 'Phone: '+temples[i].telephone;
            left.appendChild(phone);

            // Address
            address.textContent ='Address: '+temples[i].address;
            left.appendChild(address);

            // Phase
            phase.textContent ='Phase: '+temples[i].phase;
            left.appendChild(phase);

            // Dedicated
            dedicated.textContent= 'Dedicated: '+temples[i].dedicated;
            left.appendChild(dedicated);

            // Services
            var service = temples[i].services[0];
            for (j=1;j<temples[i].services.length;j++){
                service = service + ', ' + temples[i].services[j];
            }
            services.textContent = 'Services: '+service;
            left.appendChild(services);

            // Photo
            photo.setAttribute('src', 'images/'+ temples[i].image)
            right.appendChild(photo);
      
            //Add entire card to HTML
            card.appendChild(left);
            card.appendChild(right);
            card.setAttribute('id','fCard');
            document.querySelector('div.featured').appendChild(card);




            // -------------------------------Featured Card-------------------------------
            // Photo Description
            fDesc.textContent = temples[i].name; 

            // Photo
            fPhoto.setAttribute('src','images/' + fDesc.textContent + 'Hotel.jpg');
            fPhoto.setAttribute('alt', fDesc.textContent + ' Hotel');

            fCard.appendChild(fPhoto);
            fCard.appendChild(fDesc);  

            // A tag
            fLink.appendChild(fCard);
            fLink.setAttribute('href', 'locations.html#'+cleanName);
            fLink.setAttribute('data-href', '#'+ cleanName);
            
            // Append to Doc
            document.querySelector('div.pic').appendChild(fLink);
        }
        else{
            // ----------------------------Other Locations Cards----------------------------
            //City Name
            fDesc.textContent = temples[i].name; 

            // Photo
            
            console.log(photo);
            fPhoto.setAttribute('src','images/' + cleanName + 'Hotel.jpg');
            fPhoto.setAttribute('alt', fDesc.textContent + ' Hotel');

            fCard.appendChild(fPhoto);
            fCard.appendChild(fDesc);  

            // A tag
            fLink.appendChild(fCard);
            fLink.setAttribute('href','locations.html#'+ cleanName);
            fLink.setAttribute('data-href', '#' + cleanName);
            console.log(fLink);
            
            // Append to Doc
            document.querySelector('div.locGallery').appendChild(fLink);
        }

    }
});
});

