const rightNavbar = document.querySelector(".navbar-right");
const centerNavbar  =document.querySelector(".navbar-center");

let navbarSqueezStatus = false;
let microphone;
let search;

const addingRightNavs = () => {
microphone = document.createElement("i");
microphone.classList.add("fa-solid","fa-microphone");
search = document.createElement("i");
search.classList.add("fa-solid","fa-magnifying-glass");
rightNavbar.insertAdjacentElement("afterbegin",microphone);
rightNavbar.insertAdjacentElement("afterbegin",search);
}

const navbarSqueez = () => {
    console.log("hwllo")
    const screeWidth = window.innerWidth;
    if(screeWidth <= 870){
        centerNavbar.style.display = "none"
      
        if(!navbarSqueezStatus){
            addingRightNavs();
            navbarSqueezStatus = true;
        }
       else{
            return;
        }

    }
    else{
        centerNavbar.style.display = "flex"
        navbarSqueezStatus= false;
        rightNavbar.removeChild(microphone);
        rightNavbar.removeChild(search);
       
        
    }
}


// menu hiding

const openingBar = document.querySelector(".opening-bars");
const closingBar = document.querySelector(".closing-bars");
const hideMenuBlock = document.getElementById("hide-navbar");
const mainElement = document.querySelector("main");

const hide = () =>{
    hideMenuBlock.classList.add("hide");
    mainElement.classList.remove("overlay");
}
const unHide = () =>{
    hideMenuBlock.classList.remove("hide");
    mainElement.classList.add("overlay");
}


const menuToggling = () =>{
    hideMenuBlock.classList.contains("hide") ?
     unHide():
      hide();
}


openingBar.addEventListener("click",menuToggling);
closingBar.addEventListener("click",menuToggling );

 window.addEventListener("resize" , navbarSqueez)
 navbarSqueez();

