const panels = document.querySelectorAll(".card");

panels.forEach((panel) => {

panel.addEventListener("click", () => {

removePanelSpread();
panel.classList.add("active");

})

})

const removePanelSpread = () => {

panels.forEach((panel)=>{

    panel.classList.remove("active");
})


}