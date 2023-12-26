
let allElements=document.querySelectorAll("body *");
let regExp;
let replacedText;
let nodeText;


function removeHighlighting() {
  const markedElements = document.querySelectorAll("mark");
  markedElements.forEach((markEle) =>{

   let parentNode=markEle.parentNode;
   parentNode.replaceChild((document.createTextNode(markEle.textContent)),markEle);      //(new, old)
  } );
}

function searchInElement(element,regExp){
    if(element.childNodes.length>0){
element.childNodes.forEach((node) => {
      if(node.nodeType===Node.TEXT_NODE){
        nodeText=node.nodeValue;
        if(regExp.test(nodeText)){
            replacedText = nodeText.replace(regExp, "<mark>$&</mark>");
           node.parentNode.innerHTML=node.parentNode.innerHTML.replace(nodeText,replacedText);
        }
        // node.parentNode.innerHTML=node.parentNode.innerHTML.replace(replacedText,nodeText);
      }
      else if(node.nodeType===Node.ELEMENT_NODE){
         searchInElement(node,regExp);
      }
});
    }
}



function search(){
removeHighlighting();
  let textToSearch=document.getElementById("Enter-to-search").value;
  
if(textToSearch!=" "){
 regExp=new RegExp(textToSearch,"gi");
 allElements.forEach(element => {
   if(element.nodeType === Node.ELEMENT_NODE){
    searchInElement(element, regExp);
   } 
 });
}
}







