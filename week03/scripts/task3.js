/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2){
    const sum = number1 + number2;
    return sum;
};

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(){
    const append1 = Number(document.getElementById("addend1").value)
    const append2 = Number(document.getElementById("addend2").value)
    const sum = add(append1, append2);
    // console.log(append1, append2);
    // console.log(sum)
    document.getElementById("sum").value = sum;
}

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById("addNumbers").addEventListener("click", addNumbers)


// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2) {
    return (number1 - number2);
}

function subtractNumbers(){
    const subtract1 = Number(document.querySelector("#minuend").value);
    const subtract2 = Number(document.querySelector("#subtrahend").value);
    const subtraction = subtract(subtract1, subtract2);
    document.getElementById("difference").value = subtraction;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multipliy = (multiply_1, multiply_2) => multiply_1*multiply_2;

function multiplyNumbers() {
    const multiply1 = Number(document.getElementById("factor1").value);
    const multiply2 = Number(document.getElementById("factor2").value);
    const multiplication = multipliy(multiply1, multiply2);
    document.getElementById("product").value = multiplication;
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(newnumber1, newnumber2) {
    return (newnumber1 / newnumber2);
}

function divideNumbers() {
    const division_1 = Number(document.getElementById("dividend").value);
    const division_2 = Number(document.getElementById("divisor").value);
    const division = divide(division_1, division_2);
    document.getElementById("quotient").value = division;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const current_date = new Date();
console.log("Variable Declared:", current_date);

// Step 2: Declare a variable to hold the current year
let current_year = "";
const option = {year: "numeric"};

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
current_year = current_date.toLocaleDateString("en-US", option);
console.log("Current Year:", current_year);

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").textContent = current_year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").textContent = array_1;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odd_number = array_1.filter(value => (value % 2));
document.getElementById("odds").textContent = odd_number;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const even_number = array_1.filter(value => ((value % 2) == 0));
document.getElementById("evens").textContent = even_number;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const starting_value = 0
const sum_array = array_1.reduce((previousValue, currentValue) => previousValue + currentValue, starting_value);
document.querySelector("#sumOfArray").textContent = sum_array;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multiplied_array = array_1.map(value => value*2);
document.querySelector("#multiplied").textContent = multiplied_array;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const multiplied_sum = multiplied_array.reduce((previousValue, currentValue) => previousValue + currentValue, starting_value);
document.querySelector("#sumOfMultiplied").textContent = multiplied_sum;