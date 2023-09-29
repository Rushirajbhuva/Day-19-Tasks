async function getCountriesData(){
    const response = await fetch("https://fakestoreapi.com/products")
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

        const category = document.createElement('tr')
        const categoryCell = document.createElement('td')
        categoryCell.textContent = country.category
        row.appendChild(categoryCell)

        const height = document.createElement('tr')
        const heightCell = document.createElement('td')
        heightCell.textContent = country.title
        row.appendChild(heightCell)

        const flagCell = document.createElement('td')
        const flagImg =  document.createElement('img')
        flagImg.src = country.image
        flagCell.appendChild(flagImg)
        row.appendChild(flagCell)
 
        const flagCelll = document.createElement('td')
        const flagImgg =  document.createElement('td')
        flagImgg.textContent = country.description
        flagCelll.appendChild(flagImgg)
        row.appendChild(flagCelll)
        
     
     

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