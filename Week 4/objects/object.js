"use strict";
// Create an object literal to represent a course. It should include the course name and course number.
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
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
};

// Create a function to set the name and number of the course in the HTML. Pass the course object into your function (remember that you can use the dot notation to access the parts of an object.)
function set_details(course) {
  let courseName = document.getElementById("courseName");
  let courseCode = document.getElementById("courseCode");
  courseName.innerHTML = course.name;
  courseCode.innerHTML = course.code;
}
set_details(aCourse);

// Create another function that will output the sections into the table identified by #sections. You should pass the sections you want rendered into the function.
function output_table(section) {
  const output = section.map(
    (sections) => `<tr>
            <td>${sections.sectionNum}</td>
            <td>${sections.roomNum}</td>
            <td>${sections.enrolled}</td>
            <td>${sections.days}</td>
            <td>${sections.instructor}</td></tr>`
  );
  document.getElementById("sections").innerHTML = output.join("");
}

output_table(aCourse.sections);
// renderSections(aCourse.sections);
