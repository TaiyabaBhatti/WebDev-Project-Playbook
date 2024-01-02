let inputField = document.getElementById("enter-text");
let allKeys = document.querySelectorAll("#keys-section *");
let result = document.getElementById("result");
let ballLeft = true;
let equalSign=0;
let maximizeStatus=false;
const animation=document.getElementsByClassName("animation");
const keys_section=document.getElementById("keys-section");
let addRows=document.querySelectorAll(".add");

function calculate(){
    let equation = inputField.value;
    let calculatedResult = eval(equation);
   result.innerText=calculatedResult;
}

function display(click) {
let key=click;
result.style.fontSize="1rem";
result.style.color="gray";

if(ballLeft){
  inputField.style.color="#fff";
}
if(!ballLeft){
  inputField.style.color="rgb(20, 20, 20)";
}
  if (key.innerText==="1" || key.innerText==="2" || key.innerText==="3" || key.innerText==="4" || key.innerText==="5" || key.innerText==="6" || key.innerText==="7" || key.innerText==="8" || key.innerText==="9" || key.innerText === "%" || key.innerText === "+" || key.innerText === "-" || key.innerText === "*" || key.innerText === "/" ) {
       
      if(equalSign==0){
        inputField.value += key.innerText;
      }
      if(equalSign>0){
        equalSign=0;
          if(key.innerText === "%" || key.innerText === "+" || key.innerText === "-" || key.innerText === "*" || key.innerText === "/" ){

            inputField.value=result.innerText;
        inputField.value += key.innerText; 
          }

          else{
            inputField.value = key.innerText; 
          }

      }
    
    if ( key.innerText !== "/" && key.innerText !== "%" && key.innerText !== "+" && key.innerText !== "-" && key.innerText !== "*" ) {          calculate();  }
   
  }//get values except C del =
  
  else if (key.innerText === "C") {         //clear all
    inputField.value = "0";
    result.innerText = " ";
  }

   else if (key.innerText === "del") {        //delete last character
      inputField.value=inputField.value.slice(0,-1);
}

else if (key.innerText === "="){
  equalSign=1;
  result.style.transition="0.3s";
result.style.fontSize="2rem";
if(ballLeft){
  result.style.color="#fff";
}
else if(!ballLeft){
  result.style.color="rgb(20,20,20)";
}

inputField.style.color="gray";
}
}

allKeys.forEach((click) => {
  let key=click;
  key.addEventListener("click", () => display(click));
});

//  javascript for toggle button

const toggleBtn=document.getElementById("scroller");
const ball=document.getElementById("ball");
const calculator=document.getElementById("calculator-brick");
const keys =document.querySelectorAll(".keys");
const body = document.body;
let ballWidth = "35px";


function maximize(){
if(maximizeStatus===false){
  allKeys.forEach((click) => {
    let key=click;

    key.style.fontSize="0.8rem";

    if(key.classList.contains("add")){
        key.style.display="flex";
    }
  });
  keys_section.style.gridTemplateColumns="repeat(5,1fr)";
     maximizeStatus=true; 
}
else if(maximizeStatus===true){

  allKeys.forEach((click) => {
    let key=click;
    key.style.fontSize="1.3rem";
    if(key.classList.contains("add")){
        key.style.display="none";
    }
  });
  keys_section.style.gridTemplateColumns="repeat(4,1fr)";
     maximizeStatus=false; 
}
      




}

function toggle(){
 if(ballLeft){
   ball.style.left = ballWidth;
   calculator.style.backgroundColor="white";
   
   body.style.backgroundColor="rgb(20, 20, 20)";
   toggleBtn.style.backgroundColor="rgb(20, 20, 20)";
   ball.style.backgroundColor="#fff";
   inputField.style.backgroundColor="#fff";
 //  inputField.style.color="black";
   keys.forEach((click)=>{ 

    let key=click;
    if(!(key.classList.contains("opt"))){  
      key.style.color="rgb(20, 20, 20)";
      key.style.boxShadow="0px 0px 7px -2px rgb(127 126 124)";
 key.style.backgroundImage="linear-gradient(to bottom right,#e7e3dc,#fff)";
    }  
   });

 
   ballLeft=false;
 }

 else{
   ball.style.left="1px";
   calculator.style.backgroundColor="rgb(20, 20, 20)";
   body.style.backgroundColor="white";
   toggleBtn.style.backgroundColor="#fff";
   ball.style.backgroundColor="rgb(20, 20, 20)";
   inputField.style.backgroundColor="rgb(20, 20, 20)";
  //  inputField.style.color="#fff";
   keys.forEach((key)=>{
      
    if(!(key.classList.contains("opt"))){    
       key.style.color="#fff";
      key.style.boxShadow="0 0 2px 0 gray";
      key.style.backgroundImage=" linear-gradient(to bottom right,rgb(20, 20, 20),#413e3a)";
    }
   });

   ballLeft=true;
 }

}
toggleBtn.addEventListener("click",toggle);










