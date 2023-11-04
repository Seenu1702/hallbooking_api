//  Comparing Two JavaScript Objects with  same data with order:
var  object1 = { 
    "name": "Seenu", 
    "age ": 25
};

var object2 = {
    "name": "Seenu" ,
    "age ": 25   
};

 console.log(JSON.stringify(object1)===JSON.stringify(object2));



//  Comparing Two JavaScript Objects with  same data without order:
var  object1 = { 
    "name": "Seenu", 
    "age ": 25
};

var object2 = {
    "age ": 25,
    "name": "Seenu"   
};
console.log(JSON.stringify(object1) === JSON.stringify(object2));

