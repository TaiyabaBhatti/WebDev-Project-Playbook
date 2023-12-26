let inputField = document.getElementById("enter-text");
let allKeys = document.querySelectorAll(".keys");
let result = document.getElementById("result");
let calculation;


function calculate(){

    let equation = inputField.value;
    let calculatedResult = eval(equation);
   result.innerText=calculatedResult;
}

function display(key) {

result.style.fontSize="1rem";
result.style.color="gray";
inputField.style.color="#fff";

  if ( key.innerText !== "C" && key.innerText !== "%" && key.innerText !== "del" && key.innerText !== "=") {
    inputField.value += key.innerText;

    if ( key.innerText !== "/" && key.innerText !== "+" && key.innerText !== "-" && key.innerText !== "*") {
             calculate();        // calculate and display
    }

  }//get values except C % del =
  
  else if (key.innerText == "C") {         //clear all
    inputField.value = "0";
    result.innerText = " ";
  }

   else if (key.innerText == "del") {        //delete last character
      inputField.value=inputField.value.slice(0,-1);
}

else if (key.innerText == "="){
result.style.fontSize="2rem";
result.style.color="#fff";
inputField.style.color="gray";
}
}



allKeys.forEach((key) => {
  key.addEventListener("click", () => display(key));
});
