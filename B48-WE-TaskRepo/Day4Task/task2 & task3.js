var request = new XMLHttpRequest();
	request.open('GET', ' https://restcountries.eu/rest/v2/all ',true);
	request.send();
	request.onload=function(){
	var data = JSON.parse(request.response);
	for(let i=0; i<data.length; i++)
	console.log(data[i].flag);
	}
{/* <script>
            
            let xhr = new XMLHttpRequest();

            // open a connection
            xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

            // after the request is processed
            xhr.onload = function(){
                let responseObject = JSON.parse(this.responseText);

                // for(let country of responseObject){
                //     console.log(country.flag);
                // }

                console.log(responseObject.map(country => country.flag).join(' '));
            }

            // send the request
            xhr.send();
        </script> */}


{/* <script>
            
            let xhr = new XMLHttpRequest();

            // open a connection
            xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

            // after the request is processed
            xhr.onload = function(){
                let responseObject = JSON.parse(this.responseText);

                for(country of responseObject){
                    console.log(`Name : ${country.name.common},Population :${country.population},Region : ${country.region},Sub-region : ${country.subregion}`);
                }

                
            }

            // send the request
            xhr.send();
</script> */}

        