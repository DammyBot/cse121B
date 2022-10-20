/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const date = new Date();

// Step 2: Declare another variable to hold the day of the week
let day = null;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
day = date.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message = "";

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
  message = "Hang in there!";
} else {
  message = "Woohoo!  It is the weekend!";
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
// Done

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message1 = "";

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (day) {
  case 0:
    message1 = "Sunday";
    break;
  case 1:
    message1 = "Monday";
    break;
  case 2:
    message1 = "Tuesday";
    break;
  case 3:
    message1 = "Wednesday";
    break;
  case 4:
    message1 = "Thursday";
    break;
  case 5:
    message1 = "Friday";
    break;
  case 6:
    message1 = "Saturday";
    break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").textContent = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").textContent = message1;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let newArray = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(templesList) {
  templesList.forEach((temple) => {
    let container = document.createElement("container");

    let templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;
    // console.log(templeName)

    let location = document.createElement("h4");
    location.textContent = temple.location;

    let dedicated = document.createElement("h4");
    dedicated.textContent = temple.dedicated;

    let image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", temple.templeName);
    image.style.width = "75%";
    image.style.height = "50%";
    image.style.borderRadius = "10%";
    image.style.boxShadow = "2px 2px 10px black";

    container.appendChild(templeName);
    container.appendChild(location);
    container.appendChild(dedicated);
    container.appendChild(image);

    document.querySelector("#temples").appendChild(container);
  });
}

const templeUrl =
  "https://byui-cse.github.io/cse121b-course/week05/temples.json";
// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
async function getTemples(url) {
  // Fetches the url inputed
  const result = await fetch(url);
  // Converts the result produced from the url into a json file that we can use
  if (result.ok) {
    const data = await result.json();
    newArray = data;
    output(newArray);
    console.log(newArray);
  }
}

getTemples(templeUrl);

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
  document.querySelector("#temples").innerHTML = "";
}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

function sortBy() {
  reset();
  let filter = document.getElementById("sortBy").value;
  switch (filter) {
    case "templeNameAscending":
      output(
        newArray.sort((temple1, temple2) => {
          let name1 = temple1.templeName.toLowerCase();
          let name2 = temple2.templeName.toLowerCase();
          if (name1 > name2) return 1;
          else if (name1 < name2) return -1;
          else return 0;
        })
      );
      break;
    case "templeNameDescending":
      output(
        newArray.sort((temple1, temple2) => {
          let name1 = temple1.templeName.toLowerCase();
          let name2 = temple2.templeName.toLowerCase();
          if (name1 > name2) return -1;
          else if (name1 < name2) return 1;
          else return 0;
        })
      );
      break;
    default:
      output(newArray.sort((temple1,temple2) => {
        temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase() ? 1:
        temple1.templeName.toLowerCase() < temple2.templeName.toLowerCase() ? -1 : 0
      }))
  }
}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById("sortBy").addEventListener("change", sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
