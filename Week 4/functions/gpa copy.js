function getGrades(inputSelector) {
  // get grades from the input box
  const grades = document.getElementById("grades").value;
  // split them into an array (String.split(','))
  const gradesArray = grades.split(",");
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
  const cleanArray = gradesArray.map((grade) => grade.trim().toUpperCase());
  console.log(cleanArray);
  // return grades
  return cleanArray;
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
  const grade_map = grades.map((grade) => lookupGrade(grade));
  // calculates the GPA
  const gradesToPoint = grade_map.reduce((prev, current) => (prev + current))/grade_map.length;
  // return the GPA
  return gradesToPoint.toFixed(2);
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  const output = document.querySelector(selector);
  output.innerText = gpa;
}

function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
  const grade = getGrades();
  // calculate the gpa from the grades entered
  const gpa = calculateGpa(grade);
  // display the gpa
  outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);
