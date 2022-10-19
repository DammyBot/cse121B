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
  enrollStudent: function(sectionNum){
    // Finds the index value the user entered from the array
    const sectionIndex = this.sections.findIndex(
        section => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0){
        this.sections[sectionIndex].enrolled++;
        output_table(aCourse);
    }
  },
  dropStudent: function(sectionNum) {
    const sectionIndex = this.sections.findIndex(
        section => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0){
        this.sections[sectionIndex].enrolled--;
    }
  },
  changeEnrollment: function(sectionNum, add=true){
    const sectionIndex = this.sections.findIndex(
        section => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0 ){
        if(add){
            this.sections[sectionIndex].enrolled++;
        }
        else{
            this.sections[sectionIndex].enrolled--;
        }
        output_table(this.sections);
    }
  },
};

function enrollStudent(){
    const section = document.getElementById("sectionNumber").value;
    aCourse.enrollStudent(section);
}

function dropStudent(){
    const section = document.getElementById("sectionNumber").value;
    aCourse.dropStudent(section);
}

// Defines a function to set the name and code of the course into the HTML
function set_name(course, nameSelector, codeSelector) {
  // Gets the name and course code in the course object
  const name = course.name;
  const code = course.code;
  // Sets the value of the name and code into the selected property
  document.getElementById(nameSelector).innerHTML = name;
  document.getElementById(codeSelector).innerHTML = code;
}

// Calls the set_name function to input the name and value of the course into HTML
set_name(aCourse, "courseName", "courseCode");

// Defines a function to set the section table of the course into HTML
function output_table(course) {
  // Gets the section values from the course object
  const section = course.sections;
  // Sets the table value
  const table = section.map(
    (value) =>
      `<tr>
            <td>${value.sectionNum}</td>
            <td>${value.roomNum}</td>
            <td>${value.enrolled}</td>
            <td>${value.days}</td>
            <td>${value.instructor}</td>
        </tr>`
  );
  document.getElementById("sections").innerHTML = table.join("");
}
// Calls the output_table function so it can display the table into the HTML
output_table(aCourse);

document.getElementById("enrollStudent").addEventListener("click", enrollStudent);
document.getElementById("dropStudent").addEventListener("click", dropStudent);