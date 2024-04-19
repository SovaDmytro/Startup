let nav = document.querySelector(".nav");
let burger = document.querySelector(".burger");
let menuItems = document.querySelectorAll(".nav a")
menuItems.forEach(element => {
    // element.innerHTML = "test";
    element.onclick = function(){
        nav.classList.remove("active");
        burger.classList.remove("burgerActive");
    }
});
burger.onclick = function(){
    nav.classList.toggle("active");
    burger.classList.toggle("burgerActive");

}
