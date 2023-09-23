let fname = document.getElementById('fname')

let gender1 = document.getElementById('male')
let gender2 = document.getElementById('female')

fname.addEventListener('change', function (){
    console.log(fname.value);
})

lname.addEventListener('change', function (){
    console.log(lname.value);
})

address.addEventListener('change', function (){
    console.log(address.value);
})

gender1.addEventListener('change', function (){
    console.log(gender1.value);
})

gender2.addEventListener('change', function (){
    console.log(gender2.value);
})