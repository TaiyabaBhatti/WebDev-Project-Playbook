// AOS.init();
let array =[];

function createElements(){
    for(let i= 1 ; i<=7 ; i++){
        box = document.createElement("div");
        box.setAttribute("class","box");
        box.setAttribute("id",`box-${i}`);
        box.innerHTML=`<h2 class="inner-head">Content</h2>`;
        array.push(box);
        document.body.appendChild(box);
    }
    }

let boxes = document.querySelectorAll(".box");
let rect;
let windowBottomTrigeer;

function checking(){
    windowBottomTrigeer =  window.innerHeight - 99;
   array.forEach(box=>{
    rect = box.getBoundingClientRect();
    if(rect.top < windowBottomTrigeer)
        box.classList.add("show");
    else box.classList.remove("show");
   }) 
}



createElements();
checking();
window.addEventListener("scroll",checking);







// boxes.forEach((box) => { 
//      rect= box.getBoundingClientRect();

// // for(let key in rect){

// //     if (typeof rect[key] !== "function") {
// // let info = document.createElement("p"); 
// // info.textContent=`${key} : ${rect[key]}`;
// // box.appendChild(info);
// // }
// // }