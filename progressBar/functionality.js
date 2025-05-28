const next=document.querySelector("#next");
const prev=document.querySelector("#prev");
const indicator = document.querySelectorAll(".indicator");
const timeline = document.querySelectorAll(".timeline");



let newStep;
let oldStep;
let currentStep=indicator[0];
let count=0;
const proceed = () => {  
    for( let line of timeline){
    if(!line.classList.contains("current")){
        line.classList.add("current");
        return;
    }
    }
}

const backward = () => {  
    for( let i=timeline.length-1 ; i>=0 ; i--){
        if(timeline[i].classList.contains("current")){
            timeline[i].classList.remove("current");
            return;
        }
        }

   
       
    
}
const checkBreakPoint1 = () => {
if(count === indicator.length){
    return true;
}

else{
    return false;
}
    
}
const checkBreakPoint2 = () => {
    if(count === 0){
        return true;
    }
    
    else{
        return false;
    }
        
    }
const enableSwitch= () => {
    if(count > 1 || count < indicator.length){
       next.disabled = false;
       prev.disabled = false;
    }

}




const takingStep = () => {
    enableSwitch();
        proceed();
    newStep=indicator[count];
    newStep.classList.add("current");
    currentStep=newStep;
}

const takingStepPrev = () => {
    enableSwitch();
     backward();
  currentStep.classList.remove("current");
  count--;
  currentStep=indicator[count];
 
}

function nextStep(){
count++;
if(!checkBreakPoint1()){
    console.log(count);
  takingStep();
}
 if(count === indicator.length-1){
    next.disabled = true;
}
}

function prevStep(){    
    if(!checkBreakPoint2()){
      takingStepPrev();
    }
     if(count === 0){
        prev.disabled = true;
    }
    }


next.addEventListener("click",nextStep);
prev.addEventListener("click",prevStep);
