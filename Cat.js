async function getCountriesData(){
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=11")
    const countriesData = await response.json()
    return countriesData
}

async function displayCountriesTable(){
    const countries = await getCountriesData()
    console.log(countries)
    const countriesTableBody = document.getElementById('countries-table-body')

    for(let country of countries){
        const row = document.createElement('tr')
        const nameCell = document.createElement('td')
        nameCell.textContent = country.id
        row.appendChild(nameCell)

        const width = document.createElement('tr')
        const widthCell = document.createElement('td')
        widthCell.textContent = country.width
        row.appendChild(widthCell)

        const height = document.createElement('tr')
        const heightCell = document.createElement('td')
        heightCell.textContent = country.height
        row.appendChild(heightCell)

        const flagCell = document.createElement('td')
        const flagImg =  document.createElement('img')
        flagImg.src = country.url
        flagCell.appendChild(flagImg)
        row.appendChild(flagCell)
        
        const heightt = document.createElement('tr')
        const heightCelll = document.createElement('td')
        heightCell.textContent = country.height
        row.appendChild(heightCelll)

        // const populationCell = document.createElement('tr')
        // populationCell.textContent = (country.population/1000000).toFixed(2)
        // row.appendChild(populationCell)

        // const areaCell = document.createElement('td');
        // areaCell.textContent = country.area;
        // row.appendChild(areaCell);

        // const callingCodeCell = document.createElement('td');
        // callingCodeCell.textContent = '+' +  country.callingCodes[0];
        // row.appendChild(callingCodeCell);

        // const capitalCell = document.createElement('td');
        // capitalCell.textContent = country.capital;
        // row.appendChild(capitalCell);

        //  const languagesCell = document.createElement('id');
        //  const languagesList = country.languages.map(language => language.name).join(',');
        //  languagesCell.textContent = languagesList;
        //  row.appendChild(languagesCell);
        
        countriesTableBody.appendChild(row);

        countriesTableBody.appendChild(row);
    }
}

displayCountriesTable()