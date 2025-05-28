const containerInsert = document.querySelector(".container");

// Method one of doing this stuff
// window.addEventListener("keydown", (e) => {

// containerInsert.innerHTML = `
// <div class="key-details">
// <div class="block">
// <p class="title">event.key</p>
// <div class="box">
//     <span class="event-key">${e.key}</span>
// </div>
// </div>
// <div class="block">
//     <p class="title">event.keyCode(old)</p>
//     <div class="box">
//         <span class="event-key">${e.keyCode}</span>
//     </div>
// </div>
// <div class="block">
//     <p class="title">event.code(new)</p>
//     <div class="box">
//         <span class="event-key">${e.code}</span>
//     </div>
// </div>
// </div>
// `
// });


// Method two of doing


function showKeyCode(e){

containerInsert.innerHTML = "";



const keyCodeObj = {
"e.Key" : e.key === "" ?"Space":e.key,
"e.keyCode" : e.keyCode,
"e.code" : e.code
}    

for (const key in keyCodeObj) {
   
const divBlock = document.createElement("div");
divBlock.className="block";
const p = document.createElement("p");
p.className="title";
const divBox = document.createElement("div");
divBox.className="box";
const span = document.createElement("span");
span.className="event-key";

const titleText = document.createTextNode(key);
const valueText = document.createTextNode(keyCodeObj[key]);

p.appendChild(titleText);
span.appendChild(valueText);


divBlock.appendChild(p);
divBlock.appendChild(divBox);
divBox.appendChild(span);

containerInsert.appendChild(divBlock);

}


}








window.addEventListener("keydown",showKeyCode);












