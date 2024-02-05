let person = {
    name: 'krish',
    age: 25,
    phone: 9080706050,
    address: 'chennai',
    pincode: 600024,
    skills: ['javascript', 'html']
};
// console.log(typeof person);
// let json = JSON.stringify(person);
// let jso = JSON.parse(json);
// console.log(jso);
// console.log(typeof jso);
// console.log(json);
// console.log(typeof json);

// console.log(JSON.stringify(person));

// let json = '{"name":"krish","age":25,"phone":9080706050,"address":"chennai","pincode":600024}';

// let json = JSON.stringify(person);

// let jsonObject = JSON.parse(json);

// console.log(jsonObject);

// for (let key in jsonObject) {
//     console.log(key, jsonObject[key]);
// }

// for (let value of Object.values(jsonObject)) {
//     console.log(value);
// }

// for (let key of Object.keys(jsonObject)) {
//     console.log(key, jsonObject[key]);
// }

// for (let [key, value] of Object.entries(jsonObject)) {
//     console.log(key, value);
// }

let json = '{"name":"krish","age":25,"phone":9080706050,"address":"chennai","pincode":600024}';

console.log(Object.entries(person));

for (let entry of Object.entries(person)) {
        console.log(entry);
    }


// for (let [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }
