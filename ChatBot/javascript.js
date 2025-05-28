const inputBar=document.getElementById("input");
const generateBtn=document.getElementById("generate-icon");

const screen=document.getElementById("screen");

const userReplyBox = document.getElementById("user");
const botReplyBox = document.getElementById("bot");

 const userIcon=document.getElementById("icon");
const userInput=document.getElementById("user-input");


const output=((value)=>{
    let messageInput=value;
    let messageOutput;
if(messageInput ==="hi"){
    messageOutput="Hi, you too. How may i help you today?";
}

else if(messageInput==="Want to know about ES6."){
       messageOutput="ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.";
}
else{
    messageOutput="This follows already written response and questions in javascript file.";
}
 return messageOutput;
});




const displayBotOuput = ((value) => {
    const botDiv =document.createElement("div");
    botDiv.setAttribute("class","reply-box");
    botDiv.classList.add("bot");
    
    const botPara =document.createElement("p");
    botPara.setAttribute("class","reply");
    botPara.classList.add("bot-input");
    botPara.innerText=output(value.trim());
    
    const botIcon =document.createElement("i");
    botIcon.setAttribute("class","icon");
    botIcon.classList.add("fa-solid","fa-user-astronaut","fa");
    botDiv.prepend(botPara);
    botDiv.append(botIcon);
    screen.append(botDiv);
    });

// user message
const displayUserInput = ((value) => {
const userDiv =document.createElement("div");
userDiv.setAttribute("class","reply-box");
userDiv.classList.add("user");

const userPara =document.createElement("p");
userPara.setAttribute("class","reply");
userPara.classList.add("user-input");
userPara.innerText=value.trim();

const userIcon =document.createElement("i");
userIcon.setAttribute("class","icon");
userIcon.classList.add("fa-regular","fa-user","fa");

userDiv.prepend(userPara);
userDiv.append(userIcon);
screen.append(userDiv);
setTimeout(() => {displayBotOuput(value.trim())},1000);
});

// Prompt styling
inputBar.addEventListener("input",() => {
let inputString = inputBar.value.trim();
if(inputString.length>0){
    generateBtn.style.color="rgb(36 43 55)";
generateBtn.style.backgroundColor="#eee"
}
else{
    generateBtn.style.color="#eee";
generateBtn.style.backgroundColor="rgb(175 175 175)";
}
});

generateBtn.addEventListener("click", () => { 
    let string=inputBar.value;
    inputBar.value="";
    generateBtn.style.color="#eee";
generateBtn.style.backgroundColor="rgb(175 175 175)";
displayUserInput(string);
});



