var myRegisterBox = document.getElementById("Register");
var buttonRemind = document.getElementById("RemindMe");

setInterval ( ()=>  {
    myRegisterBox.style.display = "Block";
}, 2000*10)

buttonRemind.addEventListener("click", ()=> {
    myRegisterBox.style.display = "none";

    setTimeout (()=> {
        myRegisterBox.style.display = "Block";
    }, 4000*10)
})