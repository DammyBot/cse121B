const new_section = document.querySelector("section");

const link = document.querySelector("a");
link.textContent = "Gogoanime";
link.href = "https://gogoanime.sk";

const text = document.querySelector("p");
const text_node = document.createTextNode("p");
text_node.textContent = "-Best website to download anime"
text.appendChild(text_node);

const para = document.createElement('p')
para.textContent = "Click the link above"
new_section.appendChild(para)

const csslist = document.styleSheets
console.log(csslist)

para.setAttribute('class', 'highlight')