let con_1=document.getElementsByClassName("con=1")
[0];
let login_next=document.getElementById("login-next")
let password_next=document.getElementById("password-next")
let password_bact=document.getElementById("password-bact")

login_next.addEventListener("click",()=>{
    con_1.classList.toggle("active")  
})

