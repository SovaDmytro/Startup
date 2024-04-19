let services = document.querySelector(".services");
services.onclick = function(evt){
    if (evt.detail === 3){
        let subServicesText = document.querySelectorAll(".subServicesText");
        subServicesText.forEach(element => {
            element.style.margin = "0px 10px";
        });
        let figcaptions = document.querySelectorAll("figcaption");
        figcaptions.forEach(element => {
            element.innerText = "Hack this site"
            element.style.color = "red";
            element.style.fontWeight = "bold";
        });

    }else {
        evt.previouseDeafult();
    }
    
}
