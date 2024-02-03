/*Task 1: List all the countries

        - Retrieve and display all the names of the countries available in the API
        https://restcountries.com/v3.1/all

*/

let list = document.getElementById('countryList');



fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((country, index) => {
            // console.log(country.name.common);
            // console.log(data[index].name.common);
            let listItem = document.createElement('li');
            listItem.textContent = data[index].name.common;
            list.appendChild(listItem);
        });
    })
    .catch((error) => {
        console.log(error);
    })