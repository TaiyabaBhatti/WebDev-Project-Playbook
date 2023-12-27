let inputField = document.getElementById("enter-text");
let allKeys = document.querySelectorAll(".keys");
let result = document.getElementById("result");
let ballLeft = true;

function calculate(){
    let equation = inputField.value;
    let calculatedResult = eval(equation);
   result.innerText=calculatedResult;
}

function display(key) {
result.style.fontSize="1rem";
result.style.color="gray";

if(ballLeft){
  inputField.style.color="#fff";
}
if(!ballLeft){

  inputField.style.color="rgb(20, 20, 20)";

}
  if ( key.innerText !== "C" && key.innerText !== "%" && key.innerText !== "del" && key.innerText !== "=") {
    inputField.value += key.innerText;
    if ( key.innerText !== "/" && key.innerText !== "+" && key.innerText !== "-" && key.innerText !== "*") {          calculate();  }
  }//get values except C % del =
  
  else if (key.innerText === "C") {         //clear all
    inputField.value = "0";
    result.innerText = " ";
  }

   else if (key.innerText === "del") {        //delete last character
      inputField.value=inputField.value.slice(0,-1);
}

else if (key.innerText === "="){
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

allKeys.forEach((key) => {
  key.addEventListener("click", () => display(key));
});

//  javascript for toggle button

const toggle_btn=document.getElementById("scroller");
const ball=document.getElementById("ball");
const calculator=document.getElementById("calculator-brick");
const keys =document.querySelectorAll(".keys");
const operation=document.getElementsByClassName("opt");
const body = document.body;
let ball_width = "35px";



function toggle(){
console.log("hello");

 if(ballLeft){
   ball.style.left = ball_width;
   calculator.style.backgroundColor="white";
   body.style.backgroundColor="gray";
   toggle_btn.style.backgroundColor="rgb(20, 20, 20)";
   ball.style.backgroundColor="#fff";
   inputField.style.backgroundColor="#fff";
 //  inputField.style.color="black";
   keys.forEach((key)=>{ 
    if(!(key.classList.contains("opt"))){  
      key.style.color="rgb(20, 20, 20)";
      key.style.boxShadow="0px 0px 7px -2px rgb(127 126 124)";
 key.style.backgroundImage="linear-gradient(to bottom right,#e7e3dc,#fff)";
    }  
   });








// keys.forEach((key) => { key.style.color="rgb(20, 20, 20)";
// key.style.boxShadow="0px 0px 7px -2px #524f4999";
// key.backgroundImage="linear-gradient(to bottom right,#e7e3dc,#fff)";});

// operation.forEach((opt) => {  opt.style.color="#fff";});  
 
   ballLeft=false;
 }

 else{
   ball.style.left="1px";
   calculator.style.backgroundColor="rgb(20, 20, 20)";
   body.style.backgroundColor="white";
   toggle_btn.style.backgroundColor="#fff";
   ball.style.backgroundColor="rgb(20, 20, 20)";
   inputField.style.backgroundColor="rgb(20, 20, 20)";
  //  inputField.style.color="#fff";
   keys.forEach((key)=>{
      
    if(!(key.classList.contains("opt"))){    
      // key.style.color="#fff";
      key.style.boxShadow="0 0 2px 0 gray";
      key.style.backgroundImage=" linear-gradient(to bottom right,rgb(20, 20, 20),#413e3a)";
    }
   });

   ballLeft=true;
 }

}
toggle_btn.addEventListener("click",toggle);










