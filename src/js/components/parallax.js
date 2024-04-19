let parallax = document.querySelector(".parallax");
let getIntocuh = document.querySelector(".getInTouch");
parallax.onmousemove =(event)=>{
    // console.log("[ "+ event.x + "," + event.y +" ]");
    let backgroundX =  100*event.x/parallax.getBoundingClientRect().width;
    let backgroundY = 100*event.y/parallax.getBoundingClientRect().height;
    parallax.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
    // parallax.getBoundingClientRect().width/2
}
getIntocuh.onmousemove =(event)=>{
    // console.log("[ "+ event.x + "," + event.y +" ]");
    let backgroundX =  100*event.x/parallax.getBoundingClientRect().width;
    let backgroundY = 100*event.y/parallax.getBoundingClientRect().height/2;
    getIntocuh.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
    // parallax.getBoundingClientRect().width/2
}
