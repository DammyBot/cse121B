/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const myself = {
  name: "Oluwadamilare Obalana",
  photo: "..week04/images/my_friends_and_i.jpg",
  favouriteFoods: ["Bread and Tea", "Jollof rice", "Amala"],
  hobbies: [
    "Watching movies",
    "Listening to music",
    "Editing videos",
    "Playing games",
  ],
  placesLives: [
    {
      place: "Ibadan",
      length: "17 years",
    },
    {
      place: "Lagos",
      length: "2 years",
    },
  ],
};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Done

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Done

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Done

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Done

// Step 6: Add another property named placesLived with a value of an empty array
// Done

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Done

// Step 8: For each property, add appropriate values as strings
// Done

// Step 9: Add additional objects with the same properties for each place you've lived
// Done

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
const value = document.getElementById("name");
value.innerHTML = myself.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
const newImage = document.querySelector("img");
newImage.setAttribute("src", myself.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
newImage.setAttribute("alt", myself.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const favouriteFood = myself.favouriteFoods;
const favouriteFoodSplit = favouriteFood.map((value) => value.split(","));
const toHTML = favouriteFoodSplit.map((value) => `<li>${value}</li>`);

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
const list = document.getElementById("favorite-foods");
list.innerHTML = toHTML.join("");

// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbies = myself.hobbies;
const hobbiesSplit = hobbies.map((value) => value.split(","));
const toHTMLHobbies = hobbiesSplit.map((value) => `<li>${value}</li>`);

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
const listHobbies = document.getElementById("hobbies");
listHobbies.innerHTML = toHTMLHobbies.join("");

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
const placesLived = myself.placesLives;
const table = placesLived.map(
  (value) => `
<dt>${value.place}</dt>
<dd>${value.length}</dd>
`
);

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
const placesLivedHTML = document.getElementById("places-lived");
placesLivedHTML.innerHTML = table.join("");