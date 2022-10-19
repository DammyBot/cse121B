const url = "https://pokeapi.co/api/v2/pokemon/";

let newArray = [];

async function getArray(url) {
  const data = await fetch(url);
  if (data.ok) {
    const converted = await data.json();
    newArray = converted;
    output(newArray);
  }
}

function output(data) {
  const output = document.querySelector("#output");
  output.style.display = "grid";
  output.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";

  const newData = data.results;

  //Arranges the list
  newData.sort(compare);

  const arranged = newData.forEach((value) => {
    const container = document.createElement("div");
    container.style.border = "1px solid black";
    container.style.borderRadius = "1rem";
    container.style.boxShadow = "0 0 5px black";
    container.style.margin = ".5rem";
    container.style.padding = ".2rem";

    const name = document.createElement("h3");
    name.textContent = value.name.toUpperCase();
    container.appendChild(name);

    const url = document.createElement("a");
    url.textContent = value.url;
    container.appendChild(url);

    output.appendChild(container);
  });
}

function compare(a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else return 0;
}

function reset() {
  document.getElementById("output").innerHTML = "";
}

function sortBy() {
  reset();
  let filter = document.getElementById("sortBy").value;
  switch(filter){
    case "nameAscending":
        output(newArray.sort((value1,value2) => {
            if (value1.name.toLowerCase() > value2.name.toLowerCase()) return 1
            else if (value1.name.toLowerCase() < value2.name.toLowerCase()) return -1
            else return 0
        }))
        break;
    case "nameDescending":
        output(newArray.sort((value1,value2) => {
            if (value1.name.toLowerCase() > value2.name.toLowerCase()) return -1
            else if (value1.name.toLowerCase() < value2.name.toLowerCase()) return 1
            else return 0
        }))
        break;
    default:
        output(newArray.sort((value1,value2) => {
            value1.name.toLowerCase() > value2.name.toLowerCase() ? 1 :
            value1.name.toLowerCase() < value2.name.toLowerCase() ? -1 : 0
        }))
  }
};

getArray(url);
document.getElementById("sortBy").addEventListener("change", sortBy);
