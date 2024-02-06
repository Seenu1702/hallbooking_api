/*
Functions are a way of packaging functionality that you wish to reuse. It's possible to define a body of code as a function that executes when you call the function name in your code.



session storage and local storage:
sessionStorage maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open, including page reloads and restores).
    Stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
    Data is never transferred to the server.
    Storage limit is larger than a cookie (at most 5MB).
localStorage does the same thing, but persists even when the browser is closed and reopened.
Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data.
Storage limit is the maximum amongst the two.



function populateStorage() {
  localStorage.setItem("bgcolor", "yellow");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "cats.png");

  return localStorage.length; // Should return 3
}

The following function creates three data entries in local storage, and then deletes them by using clear().

function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "miGato.png");

  localStorage.clear();
}

The following function retrieves three data items from local storage, then uses them to set custom styles on a page.

function setStyles() {
  const currentColor = localStorage.getItem("bgcolor");
  const currentFont = localStorage.getItem("font");
  const currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = `#${currentColor}`;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}

The key() method of the Storage interface, when passed a number n, returns the name of the nth key in a given Storage object. The order of keys is user-agent defined, so you should not rely on it.
A string containing the name of the key. If the index does not exist, null is returned.

for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
}


The removeItem() method of the Storage interface, when passed a key name, will remove that key from the given Storage object if it exists. The Storage interface of the Web Storage API provides access to a particular domain's session or local storage.

function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");

  localStorage.removeItem("image");
}
We can do the above same for the session storage.

The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.

function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");
}
Storage only supports storing and retrieving strings. If you want to save other data types, you have to convert them to strings.For plain objects and arrays, you can use JSON.stringify().

const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }

// Save data to sessionStorage
sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
sessionStorage.clear();
*/