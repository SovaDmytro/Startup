let readMore = document.querySelectorAll(".readmore");
readMore.forEach((element,index) => {
    let fullText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam ";
    element.onclick = function(event){
        event.preventDefault();
        let blogText = document.querySelectorAll(".addText");
        let blogState = element.getAttribute("State");
        if(blogState == "full"){
            element.setAttribute("State","part");
            blogText[index].innerHTML = fullText.slice(0,150);
        }else{
            element.setAttribute("State","full");
            blogText[index].innerHTML = fullText;
        }
    }
    
});

