
const button = document.getElementById("btn");
button.addEventListener("click",(e) => {
    
      const X = e.clientX;
      const Y = e.clientY;
      const buttonLeft = e.target.offsetLeft;
      const buttonTop = e.target.offsetTop;

      const insideButtonX = X - buttonLeft;
      const insideButtonY = Y - buttonTop;
        
      const circle = document.createElement("span");
      circle.classList.add("circle");
      circle.style.left = `${insideButtonX}px`;
      circle.style.top = `${insideButtonY}px`; 

button.appendChild(circle);


});