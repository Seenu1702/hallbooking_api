let countryDropdown = document.getElementById('countrySelect');
let capitalParagraph = document.getElementById('capitalParagraph');


fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        data.forEach(country => {
            console.log(country.name.common);
            let dropDownItem =  document.createElement('option');
            dropDownItem.textContent = country.name.common;
            dropDownItem.value = country.name.common;
            countryDropdown.appendChild(dropDownItem);
        });

        countryDropdown.addEventListener('change', () =>{
            // console.log(countrySelect.value);
            const selectedCountry = countrySelect.value;

            const selectedCountryData = data.find(country => {
               return country.name.common === selectedCountry;
            }) ;

            console.log(selectedCountryData.capital.join('\n'));
            capitalParagraph.innerText = `Capital: \n${selectedCountryData.capital.join('\n')}`;
         })

        //  countrySelect.addEventListener('change', () => {
        //     // console.log(countrySelect.value);
        //     const selectedCountry = countrySelect.value;

        //     const selectedCountryData = countries.find(country => country.name.common === selectedCountry);

        //     console.log(selectedCountryData.capital.join('\n'));
        //     capitalParagraph.innerText = `Capital: \n${selectedCountryData.capital.join('\n')}`;
        // })
        
    })