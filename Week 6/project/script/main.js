const url = "https://pokeapi.co/api/v2/pokemon/";

let newArray = [];

async function getArray(url) {
  const data = await fetch(url);
  if (data.ok) {
    const converted = await data.json();
    newArray = converted.results;
    output(newArray);
  }
}

getArray(url);

function output(data) {
  const output = document.querySelector("#output");
  output.style.display = "grid";
  output.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";

//   const array1 = data.results;
  //Arranges the list
  data.sort(compare);

  const arranged = data.forEach((value) => {
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
    url.style.display = "block";
    url.style.padding = ".2rem";
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
  const filter = document.querySelector("#sortBy");
  switch (filter){
    case "nameAscending":
        output(newArray.sort((value1,value2) => {
            const name1 = value1.name.toLowerCase();
            const name2 = value2.name.toLowerCase();
            if (name1 > name2) return 1;
            else if (name1 < name2) return -1;
            else return 0;
        }))
        break;
    case "nameDescending":
        output(newArray.sort((value1,value2) => {
            const name1 = value1.name.toLowerCase();
            const name2 = value2.name.toLowerCase();
            if (name1 > name2) return -1;
            else if (name1 < name2) return 1;
            else return 0;
        }))
        break;
    default:
        output(newArray.sort((value1,value2) => {
            value1.name.toLowerCase() > value2.name.toLowerCase() ? -1 :
            value1.name.toLowerCase() < value2.name.toLowerCase() ? 1 : 0
        }))
  }
};

document.getElementById("sortBy").addEventListener("change", sortBy);
