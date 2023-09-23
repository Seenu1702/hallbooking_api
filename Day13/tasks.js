/*
    1. Create a new '<p>' element with the text 'Hello, DOM!' and append it to a '<div>' element in the html with the ID 'output'.

    2. Create a new '<h1>' element and set its text content to "Welcome to our Website". Append this element to the '<body>'.

    3. Create an '<img>' element and set its 'src' attribute to "image.png" and 'alt' attribute to 'an image'. Append the image to a '<div>' with the ID 'imageContainer'

    4. Create a new '<ul>' element and append three '<li>' elements with the text "Item 1", "Item 2", and "Item 3" to it. Then, append the '<ul>' element to a '<div>' with the ID 'listContainer'

    5. Create a new '<a>' (anchor) element and set its 'href' attribute to 'https://www.google.com' and its 'target' attribute to "_blank". Append the anchor element to a '<p>' element.
*/

let paragraph = document.createElement('p');

paragraph.textContent = 'Hello, DOM!';

document.getElementById('output').append(paragraph);

let header = document.createElement('h1');
header.textContent = 'Welcome to our website'
document.body.appendChild(header);

let image = document.createElement('img');
image.setAttribute('src', './Google-logo.png');
image.alt='an image';
image.width=200;
document.getElementById('imageContainer').appendChild(image);

let unorderList = document.createElement('ul');
unorderList.id = 'containerOfList';
let listItem1 = document.createElement('li')
let listItem2 = document.createElement('li')
let listItem3 = document.createElement('li')

listItem1.textContent = 'Item 1';
listItem2.textContent = 'Item 2';
listItem3.textContent = 'Item 3';


document.getElementById('listContainer').append(unorderList);
document.getElementById('containerOfList').append(listItem1,listItem2,listItem3);

// Create a new '<a>' (anchor) element and set its 'href' attribute to 'https://www.google.com' and its 'target' attribute to "_blank". Append the anchor element to a '<p>' element.

let anchor = document.createElement('a');
anchor.textContent = "click here";
anchor.href = 'https://www.google.com';
anchor.target = "_blank";
document.getElementById('anchorReference').append(anchor);



