// // XML-HTTP Request --> How to access the data from API

// // Step 1: Create an XHR Object

// var request = new XMLHttpRequest();

// // Step 2: Opening a request

// request.open("GET","https://restcountries.com/v3.1/all");

// // Step 3: Sending the request

// request.send();

// // Step 4: Once the data has been successfully received from the server
// // status code: 200

// //  request.onload = function(){
// //     // var result =  request.response;  the output will be in the string or mixed format
// //     var result =  JSON.parse(request.response);
// //     console.log(result);
// //  }

// //  Print all the country common names and capital's of each country name in console
// // Print the population as well as continents of all the contries

// request.onload = function(){
//     // var result =  request.response;  the output will be in the string or mixed format
//     var result =  JSON.parse(request.response);
//     console.log(result);
//     for(var i=0;i<result.length;i++)
//     {
//         console.log(result[i].name.common,result[i].capital,result[i].population,result[i].continents);
//     }
//  }


 var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true);
 request.send();
 request.onload = function(){
    // var result =  request.response;  the output will be in the string or mixed format
    // console.log(typeof result); o/p: string
    var result =  JSON.parse(request.response);
    console.log(result);
    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].name.common,result[i].capital,result[i].population,result[i].continents);
    }
 }



