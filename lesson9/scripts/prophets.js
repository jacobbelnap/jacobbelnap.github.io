const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let fullname = document.createElement('h2');
            let dob = document.createElement('p');
            let birth = document.createElement('p');
            let image = document.createElement('img')

            //Append Fullname
            fullname.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            card.appendChild(fullname);

            //Append DOB
            dob.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            card.appendChild(dob);

            //Append Birth Place
            birth.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            card.appendChild(birth);

            //Append Image
            image.setAttribute('src', prophets[i].imageurl);
            card.appendChild(image)

            //Add entire card to HTML
            document.querySelector('div.cards').appendChild(card);
        }
    });



