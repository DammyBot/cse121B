// Saves the user input, and searches for the word the user searches for

let newArray = []

async function getWord(){
    const userInput = document.getElementById("userInput").value;
    const lowerCase = userInput.toLowerCase();
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${lowerCase}`;
    const word = await fetch(url);
    if (word.ok){
        const result = await word.json();
        newArray = result;
        const actualArray = newArray[0]
        // console.log(actualArray);
        output(actualArray);
    }
}
// getWord();

function output(array){
    const container = document.createElement("div");
    container.style.border = "1px solid black";
    container.style.width = "80%";
    container.style.height = "100%";
    container.style.padding = ".5rem";
    container.style.margin = ".5rem auto";
    container.style.borderRadius = "2rem";
    container.style.boxShadow = "0 0 5px black"

    const word = document.createElement("h2");
    word.textContent = `Word:   ${array.word.toUpperCase()}`;
    container.appendChild(word);

    const phonetic = document.createElement("p");
    phonetic.textContent = `Phonetic: ${array.phonetic}`;
    container.appendChild(phonetic);

    const partOfSpeech = document.createElement("p");
    partOfSpeech.textContent = `Part of speech: ${array.meanings[0].partOfSpeech}`;
    container.appendChild(partOfSpeech);

    const definition1 = document.createElement("p");
    definition1.textContent = `Definition: ${array.meanings[0].definitions[0].definition}`;
    container.appendChild(definition1);

    const button = document.createElement("button");
    button.setAttribute("id", "buttonClass");
    button.textContent = "❌";
    container.appendChild(button);


    document.getElementById("output").appendChild(container);

    document.getElementById("buttonClass").addEventListener("click", clear);
}

function clear(){
    document.getElementById("output").innerHTML = ""
};

document.getElementById("search").addEventListener("click",getWord);