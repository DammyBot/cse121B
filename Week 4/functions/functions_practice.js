function getGrades(inputSelector) {
  // get grades from the input box
  const grades = document.getElementById("grades").value;
  // split them into an array (String.split(','))
  const splitted_grade = grades.split(",");
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
  const neat_grade = splitted_grade.map((value) => value.trim().toUpperCase());
  // return grades
  return neat_grade;
}

function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  } else {
    points = 0;
  }
  return points;
}

function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to gpa points
  const grade = grades.map((value) => lookupGrade(value));
  // calculates the GPA
  const gpa =
    grade.reduce((previous, current) => previous + current) / grade.length;
  // return the GPA
  return gpa;
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  const output = document.querySelector(selector);
  output.innerHTML = gpa;
}

function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
  const grades = getGrades();
  // calculate the gpa from the grades entered
  const calculate_grade = calculateGpa(grades);
  // display the gpa
  outputGpa(calculate_grade, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);
