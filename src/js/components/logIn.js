let getStarted = document.querySelector("#getStarted");


getStarted.onclick = function(event){
    event.preventDefault();
    console.log("GetStarted");
    let confirmWindow = document.createElement("div");
    confirmWindow.classList.add("confirmWindow");
    body.appendChild(confirmWindow);
    let login = document.createElement("input");
    login.placeholder="Введіль Ваш email";
    login.type = "email";
    let password = document.createElement("input");
    password.placeholder = "Пароль";
    password.type = "password"
    let cloth = document.createElement("div");
    cloth.textContent = "x"
    cloth.className="cloth";

    cloth.onclick = function(){
        confirmWindow.remove();
    }

   

    let switchOn = document.createElement("div");
    let swichButton = document.createElement("div");
    let swichEnd = document.createElement("div");
    let send = document.createElement("button");
    send.onclick = function(){
        let welcome = document.querySelector("h2")
        if(login.value.length >  4 &&  password.value.length && swichButton.draggable == false ){

            send.style.backgroundColor = "green";
            welcome.innerText = "Hello user";
            getStarted.onclick= ()=>{};
            confirmWindow.remove();
        } 
    }
    send.textContent = "Увійти";
    send.type = "submit";

    switchOn.appendChild(swichButton);
    switchOn.appendChild(swichEnd);
    confirmWindow.appendChild(cloth);
    confirmWindow.appendChild(login);
    confirmWindow.appendChild(password);
    confirmWindow.appendChild(switchOn);
    confirmWindow.appendChild(send);

    switchOn.classList.add("switchOn");
    swichButton.classList.add("switchButton");
    swichEnd.classList.add("switchEnd");
    swichButton.draggable = true;   
    swichEnd.ondragover = () =>{ 
        console.log("dragOver");
        swichButton.draggable = false;
        swichButton.classList.remove("switchButton");
        swichButton.classList.add("switchEnd");
        swichEnd.classList.add("switchButton");
        swichEnd.classList.remove("switchEnd");

}
}