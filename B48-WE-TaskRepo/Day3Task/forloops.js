const jsonArray = [{
    "First_name" : "Seenu",
    "Last_name" : "Subrmaniyan",
    "Mobile_number" : "9487813894",
    "Company_name" : "Infosys"
},
{
    "First_name" : "Seenu1",
    "Last_name" : "Subrmaniyan",
    "Mobile_number" : "94878138940",
    "Company_name" : "Infosys1"
} 
];

// for loop
for (let i = 0; i < jsonArray.length; i++)
{
    console.log(jsonArray[i]);
}


// for in ...
for (let key in jsonArray)
{
    console.log(key);
}



// for of ...
for (let value of jsonArray)
{
    console.log(value);
}


// forEach ..
jsonArray.forEach((value) => 
{
    console.log(value);
});