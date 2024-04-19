let subHeader = document.querySelector(".sub-header");
let wrapper = document.querySelectorAll(".wrapper");
window.onscroll = function(){
    let header = document.querySelector("header");
    let y = window.scrollY;
    if(y >= header.getBoundingClientRect().height - subHeader.getBoundingClientRect().height*0.5){
        subHeader.style.backgroundColor = "#c0301c"; 
        subHeader.style.justifyContent = "space-around";
    }else{
        subHeader.style.backgroundColor = "transparent"; 
        subHeader.style.justifyContent = "space-around";
}
window.onwheel = function(event){
    // console.log(event.deltaY);
    let servicesY = document.querySelector(".services").offsetHeight;
    let textAboutUsY = document.querySelector(".aboutUs").offsetHeight;

    if(event.deltaY >= 0 ){
        subHeader.style.top = "-"+(subHeader.getBoundingClientRect().height) + "px";
        // subHeader.style.width = "80";
        subHeader.style.maxWidth = "none";
    }else{
        subHeader.style.top= "0";
        // subHeader.style.width = 100 +"%";
    }
    if(window.scrollY> servicesY){
        animServices()
    }
    if(window.scrollY> textAboutUsY){
        animScale()
    }
    if(window.scrollY>1200){
        animOpacity()
    }
}
}
//////////////// Анімація
let animServices = ()=>{
    let subServices = document.querySelectorAll(".catalog figure");
subServices.forEach(element => {
    element.classList.add("rotate360")

});
}

let animScale = function (){
    let textAboutUs = document.querySelectorAll(".textAboutUs");
    textAboutUs.forEach(element => {
        element.classList.remove("scale")
    });
}

let animOpacity = function(){
    let opacity = document.querySelector(".row1");
    opacity.classList.remove("opacity");
}

let animOpacityScale = function(){
    let lastWorks = document.querySelector(".lastWorks");
    opacity.classList.remove("opacity");
}