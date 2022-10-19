const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newname = document.createElement('h1');
newname.textContent = "Hello guys, welcome to my minecrft channel!"
minecraft = document.querySelector(".minecraft") 
minecraft.appendChild(newname)

const new_Image = document.createElement('img')
new_Image.setAttribute('src', 'https://placeimg.com/200/200/animals')
new_Image.setAttribute('alt', 'Image of animals/')
minecraft.appendChild(new_Image)

// // Creates a new section
// const newSection = document.createElement("section");
// // Creates a new h1
// const newH1 = document.createElement("h1");
// // Modifies the h1
// newH1.textContent = "CSE 121b"
// // Appends the h1 to the section
// newSection.appendChild(newH1)
// // Creates a new p
// const newP = document.createElement("p");
// // Modifies the new p
// newP.textContent = "Welcome to Javascript Language"
// // Appends the new p to the section
// newSection.appendChild(newP)
// // Appends the section to the body of the HTML
// document.body.appendChild(newSection)

const newSection = document.createElement('section')
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to JavaScript Language</p>"
document.body.appendChild(newSection)