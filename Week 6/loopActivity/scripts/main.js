// loops.js
let myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Funcion for food
function arrayLoop(array) {
  const food = array.favoriteFoods;
  food.forEach((element) => {
    const favFood = document.createElement("li");
    favFood.textContent = element;
    const container = document.getElementById("favorite-foods");
    container.appendChild(favFood);
  });
}

// Create a function that will take a place string and return that string embedded in some html.
function places(array){
    const placesLived = array.placesLived;
    const mappedArry = placesLived.map((value) =>
        `<dt>${value.place}</dt>
        <dd>${value.length}</dd>`)
    const container = document.getElementById("places-lived");
    container.innerHTML += mappedArry.join("");
};

function generateLoop(list, callBackFunction){
    return callBackFunction(list);
};

generateLoop(myInfo,arrayLoop);
generateLoop(myInfo,places);