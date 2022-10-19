// Activity
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  section: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],

  enrollStudent: function (sectionNum) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.section.findIndex(
        (section) => section.sectionNum == sectionNum
    );
    if (sectionNum >= 0){
        this.section[sectionIndex].enrolled++;
        output_values(this.section)
    }
  },

  dropstudent: function(sectionNum){
    const sectionIndex = this.section.findIndex(
        (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0){
        this.section[sectionIndex].enrolled--;
        output_values(this.section);
    }
  }
};

function set_values(course, selector1, selector2) {
  // Getting the values of the name and the course code of the array
  const name = course.name;
  const number = course.code;
  // Adding that array into the HTML
  document.querySelector(selector1).textContent = name;
  document.querySelector(selector2).textContent = number;
}
// Calls the set_values function
set_values(aCourse, "#courseName", "#courseCode");

function output_values(course, selector) {
  // Gets the section
  const section = course.section;
  // Maps the sectin so it can display the table in HTML
  const mapped_section = section.map(
    (value) => `<tr>
        <td>${value.sectionNum}</td>
        <td>${value.roomNum}</tb>
        <td>${value.enrolled}</td>
        <td>${value.days}</td>
        <td>${value.instructor}</td>
    </tr>`
  );
  // Adds the value of the mapped_section into HTML
  document.querySelector(selector).innerHTML = mapped_section.join("");
}

function enrollStudent(){
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
}

function dropStudent(){
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropstudent(sectionNum);
}

// Calls the output_values function
output_values(aCourse, "#sections");

// document.getElementById("#enrollStudent").addEventListener("click", function(){
//     const sectionNumber = document.getElementById("sectionNumber").value;
//     aCourse.enrollStudent(sectionNumber);
// });

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });