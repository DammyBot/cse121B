// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(data) {
    const output = document.getElementById("output");
    results = data;
    const html = `<h1>${results.name}</h1>
    <img src="${results.sprites.front_default}" alt="Image of ${results.name}"`;
    output.innerHTML = html;
    console.log("first: ", results);
}

// New
const urlList = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonList(url1) {
    const response1 = await fetch(url1);
    if (response1.ok){
        const data1 = await response1.json();
        doStuffList(data1);
    }
}

function doStuffList(data) {
    const output = document.getElementById("outputList");
    const pokeListpokeList = data.results
    pokeListpokeList.sort(compare);
    // First method
    // const map = pokeListpokeList.map(value => `<li>${value.name}</li>`);
    // output.innerHTML += map.join("");

    // Second Method
    pokeListpokeList.forEach((currentItem) => {
        const html = `<li>${currentItem.name}</li>`;
        // note the += here...
        output.innerHTML += html;
    });
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

function sortedPokemon(list){
    let sortedlist = list.sort(compare);
    return sortedlist
}

getPokemonList(urlList);

getPokemon(url);

console.log("second: ", results);

const body = document.querySelector("#output");

function sortPokemon(list) {

}