// Activity 1
const newArray_1 = ['one', 'two', 'three'];
const list_array = newArray_1.map(value => `<li>${value}</li>`);
document.querySelector("#myList").innerHTML = list_array.join("");


// Activity 2
const newArray_2 = ['A', 'B', 'A'];
function check_grade(grade) {
    let point = 0;
    if (grade === "A") {
        point = 4;
    }
    else if (grade === "B") {
        point = 3;
    }
    return point
}
const new_value = newArray_2.map(check_grade);
console.log("Activity 2");
console.log(new_value);


// Activity 3
console.log("Activity 3");
const initialValue = 0;
const reduced_value = new_value.reduce((previousValue, currentValue) => previousValue+currentValue, initialValue);
console.log(reduced_value);


// Activity 4
const newArray_4 = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filtered_array = newArray_4.filter(word => word.length > 6);
console.log("Activiy 4");
console.log(filtered_array);


// Activity 5
const newArray_5 = [12, 34, 21, 54];
const luckyNumber = 21;
console.log("Activity 5");
console.log(newArray_5.indexOf(luckyNumber));


const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));
  
  // reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],
  
  // kvArray is still:
  // [{key: 1, value: 10},
  //  {key: 2, value: 20},
  //  {key: 3, value: 30}]
console.log(reformattedArray[0]);