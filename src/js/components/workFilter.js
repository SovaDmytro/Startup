let filterBlock = document.querySelectorAll(".block1");
let works = [];
localStorage.getItem("key");
filterBlock.forEach(function (element){
    works.push(element.cloneNode(true));
});

let filterMenu = document.querySelectorAll(".filter");
let myFilter = function (key){
    let row1 = document.querySelector(".row1");
        localStorage.setItem("key",key);
        let blocksWorks = document.querySelector(".blocksWorks");
        row1.innerHTML = "";
        let filtredElements = [];
        
        if(key == "All"){
            filtredElements = works;
        }else{
            filtredElements = works.filter((filtredElement) => filtredElement.getAttribute("work") == key);
        }
        console.log(filtredElements);
        filtredElements.forEach(function(elem){
            row1.appendChild(elem.cloneNode(true));
            row1.classList.add(".row1",".block1");
            blocksWorks.style.display = "flex";

        })
    
}
filterMenu.forEach(element =>{
    element.onclick = function(event){
        event.preventDefault();
        myFilter(element.innerText.trim());
    //     let row1 = document.querySelector(".row1");
    //     localStorage.setItem("key",element.innerText.trim());
    //     let blocksWorks = document.querySelector(".blocksWorks");
    //     row1.innerHTML = "";
    //     let filtredElements = [];
        
    //     if(element.innerText.trim() == "All"){
    //         filtredElements = works;
    //     }else{
        //         filtredElements = works.filter((filtredElement) => filtredElement.getAttribute("work") == element.innerText.trim());
    //     }
    //     console.log(filtredElements);
    //     filtredElements.forEach(function(elem){
    //         row1.appendChild(elem.cloneNode(true));
    //         row1.classList.add(".row1",".block1");
    //         blocksWorks.style.display = "flex";

    //     })
    }
});

if(localStorage != null && localStorage.getItem("key") != null){
    myFilter(localStorage.getItem("key"));
}
 
// works.forEach(element => {
//     console.log(element);
// });