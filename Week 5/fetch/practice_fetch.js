const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
const urlList = "https://pokeapi.co/api/v2/pokemon";

function doStuff(data) {
  const output = document.getElementById("output");
  results = data;
  const html = `<h2>${results.name}</h2>
  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  output.innerHTML += html;
  // console.log("first: ", results);
}

function doStuffList(data) {
  const output = document.getElementById("outputList");
  let pokeList = data.results;
  // sorts the list
  pokeList = sortPokemon(pokeList);
  // const pokemon = `<li>${pokeList.name}</li>`
  const maped = pokeList.map((value) => `<li>${value.name}</li>`);
  output.innerHTML += maped.join("");
}

async function getPoke(url, doThis) {
  const result = await fetch(url);
  if (result.ok) {
    const output = await result.json();
    doThis(output);
  }
}

function compare(a,b){
    if (a.name > b.name){
        return 1
    }
    else if (a.name < b.name){
        return -1
    }
    else {
        return 0
    }
}

function sortPokemon(list){
    const sortedList = list.sort(compare);
    return sortedList;
}

getPoke(url, doStuff);
console.log("second: ", results);

getPoke(urlList, doStuffList);
