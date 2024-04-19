let btn = document.querySelector(".btn");
let body = document.querySelector("body")
let userName = document.querySelector(".userName");
let email = document.querySelector(".email");
let subject = document.querySelector(".subject");
let company = document.querySelector(".company");
let message = document.querySelector(".message");

if(localStorage.getItem("userName")){
    userName.value = localStorage.getItem("userName");
}
if(localStorage.getItem("email")){
    email.value = localStorage.getItem("email");
}
if(localStorage.getItem("subject")){
    subject.value = localStorage.getItem("subject");
}
if(localStorage.getItem("company")){
    company.value = localStorage.getItem("company");
}
if(localStorage.getItem("message")){
    message.value = localStorage.getItem("message");
}
btn.onclick = (e)=>{
    e.preventDefault();
    let confirmWindow = document.createElement("div");
    confirmWindow.classList.add("confirmWindow");
    body.appendChild(confirmWindow);
    
    localStorage.setItem("userName",userName.value);
    localStorage.setItem("email", email.value)
    localStorage.setItem("subject", subject.value)
    localStorage.setItem("company", company.value)
    localStorage.setItem("message", message.value)

    let paragraph = document.createElement("p")
    
    if(email.value.length < 4 || userName.value.length < 2 || company.value.length < 1){
        // alert("Заповніть усі поля!");
        setTimeout (() =>{
            confirmWindow.style.backgroundColor = "red";
            confirmWindow.style.color = "#fff";
            confirmWindow.style.textTransform = "uppercase";
            confirmWindow.innerHTML = "заповніть усі дані коректно!";
        }, 0)
        setTimeout (() =>{
            confirmWindow.style.display ="none";
        }, 3000)
        // confirmWindow.appendChild(paragraph);

        }else{
            confirmWindow.appendChild(paragraph);
            let btnDataConfirm = document.createElement("button");
            btnDataConfirm.innerText = "Send";
            confirmWindow.appendChild(btnDataConfirm);
            let closeDataConfirm = document.createElement("button");
            closeDataConfirm.innerText = "Close";
            confirmWindow.appendChild(closeDataConfirm);
            paragraph.innerHTML = "Ім'я: " + userName.value + "<br>" +
            "Email: " + email.value + "<br> " + 
            "Тема:" + subject.value + "<br>" + 
            "Компанія:" + company.value + "<br>" +
            "Повідомлення: " + "<br>" +
            message.value;
            closeDataConfirm.onclick = () =>{
                confirmWindow.remove();
            }
            btnDataConfirm.onclick = () => {
                let xhr = new XMLHttpRequest()  
                // xhr.open("GET", url  ,true)
                // xhr.setRequestHeader("Content-Type","application/json")
                // xhr.onreadystatechange = function(){
                //     if (xhr.readyState !== 4) return
                    
                //     if (xhr.status !== 200) {
                //         console.log("Ajax Error")
                //     }
                //     else {
                //         console.log(xhr.response);
                //     }
                    
                // }
                
                // xhr.send()
                
                // xhr.onload = () => { }
        
                let data = new FormData()
                // let inputs = document.querySelectorAll("input")
        
                //  inputs.forEach(input => {
                     data.append("userName", userName.value )
                     data.append("email", email.value)
                     data.append("subject", subject.value)
                     data.append("company", company.value)
                     data.append("message", message.value)
                //  })
                 setTimeout (() =>{
                    confirmWindow.innerHTML = "Повідомлення відправлено";
                }, 2000)
                setTimeout (() =>{
                    confirmWindow.style.display ="none";
                }, 5000)
        
                 xhr.open("post", "http://localhost:80/telegram.php", false);
                //  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                 xhr.send(data);
                }

        }
    // }
    

    // btnDataConfirm.onclick = () => {
    //     let xhr = new XMLHttpRequest()  
    //     // xhr.open("GET", url  ,true)
    //     // xhr.setRequestHeader("Content-Type","application/json")
    //     // xhr.onreadystatechange = function(){
    //     //     if (xhr.readyState !== 4) return
            
    //     //     if (xhr.status !== 200) {
    //     //         console.log("Ajax Error")
    //     //     }
    //     //     else {
    //     //         console.log(xhr.response);
    //     //     }
            
    //     // }
        
    //     // xhr.send()
        
    //     // xhr.onload = () => { }

    //     let data = new FormData()
    //     // let inputs = document.querySelectorAll("input")

    //     //  inputs.forEach(input => {
    //          data.append("userName", userName.value )
    //          data.append("email", email.value)
    //          data.append("subject", subject.value)
    //          data.append("company", company.value)
    //          data.append("message", message.value)
    //     //  })
    //      setTimeout (() =>{
    //         confirmWindow.innerHTML = "Повідомлення відправлено";
    //     }, 2000)
    //     setTimeout (() =>{
    //         confirmWindow.style.display ="none";
    //     }, 5000)

    //      xhr.open("post", "http://localhost:80/telegram.php", false);
    //     //  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //      xhr.send(data);
    //     }
    }