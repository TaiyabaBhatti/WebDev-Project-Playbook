
const progressBar=document.getElementById("input-bar");
let playIcon=document.getElementById("play");
let state=false;
let song=document.getElementById("song");


song.onloadedmetadata=function(){
    progressBar.max=song.duration;
    progressBar.value=song.currentTime;
    
    }

function playSong(){
if(playIcon.classList.contains("fa-play")){
playIcon.classList.remove("fa-play");
playIcon.classList.add("fa-pause");
song.play();
}

else{
    playIcon.classList.remove("fa-pause");
playIcon.classList.add("fa-play");
song.pause();
}
}

if(song.play){
    setInterval(()=>{

progressBar.value=song.currentTime;
if(progressBar.value===song.duration){
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  
}


    },500);
}


playIcon.addEventListener("click",playSong);
progressBar.onchange = function(){
    song.play();
    song.currentTime=progressBar.value;
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
}