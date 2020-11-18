window.addEventListener('load', (event)=>{

   const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


   fetch(requestURL)
      .then(function(response) {
         return response.json();
      })
      .then(function(jsonObject) {
         console.table(jsonObject);
         const towns = jsonObject['towns'];
         for (let i = 0; i < towns.length; i++) {
         
               let card = document.createElement('section');
               let name = document.createElement('h2');
               let motto = document.createElement('p');
               let yearFounded = document.createElement('p');
               let currentPopulation = document.createElement('p');
               let averageRainfall = document.createElement('p');
               let photo = document.createElement('img');

               if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                  //Append Name
                  name.textContent = towns[i].name + ', ID';
                  card.appendChild(name);

                  //Append Motto
                  motto.textContent = 'Motto: ' + towns[i].motto;
                  card.appendChild(motto);

                  //Append Year Founded
                  yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                  card.appendChild(yearFounded);

                  //Append Population
                  currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
                  card.appendChild(currentPopulation);

                  //Append Rain Fall
                  averageRainfall.textContent = 'Annual Average Rainfall: ' + towns[i].averageRainfall + ' in';
                  card.appendChild(averageRainfall);

                  //Append Image
                  photo.setAttribute('src', '/images/' + towns[i].photo);
                  card.appendChild(photo)

                  //Add entire card to HTML
                  document.querySelector('div.towns').appendChild(card);
               }
           
      }
      });
});