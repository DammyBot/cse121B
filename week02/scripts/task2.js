/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Oluwadamilare Obalana";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
// const newYear = new Date();
// const option = {year: "numeric"}
const currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
// document.querySelector("#year").textContent = new Date().toLocaleDateString("en-US", option);
document.querySelector("#year").textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const pictureName = "A picture of my friends and I";

// Step 6: copy your image into the "images" folder
// Done

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
const new_image = document.querySelector('img');
new_image.setAttribute("src", "images/my_friends_and_i.jpg");
new_image.setAttribute("alt", pictureName);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const myFavourite = ["Rice", "Bread", "Milk"]

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = myFavourite


// Step 3: declare and instantiate a variable to hold another favorite food
const FavouriteFood2 = ["Amala", "Beans"]

// Step 4: add the variable holding another favorite food to the favorite food array
myFavourite.push(FavouriteFood2)

// Step 5: repeat Step 2
document.querySelector("#food").textContent = myFavourite

// Step 6: remove the first element in the favorite foods array
myFavourite.shift()

// Step 7: repeat Step 2
document.querySelector("#food").textContent = myFavourite

// Step 8: remove the last element in the favorite foods array
myFavourite.pop()

// Step 7: repeat Step 2
document.querySelector("#food").textContent = myFavourite


