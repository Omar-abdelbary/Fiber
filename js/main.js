let toggle_menu = document.querySelector("header nav .toggle-menu") ; 

let icon = document.querySelector("header nav .toggle-menu i") ; 

let list = document.querySelector("header nav ul ")  ; 


toggle_menu.addEventListener("click" , function () {
    icon.classList.toggle("fa-close") ; 
    list.classList.toggle("return-nav") ; 

}) ; 


let header = document.querySelector("header") ; 

window.addEventListener("scroll" , function () {
    let window_scroll = window.scrollY ; 
    if (window_scroll >= 5) {
        header.style.backgroundColor = "#FBF8F3"
        header.style.borderBottom = "1px solid #000"
    } else {
        header.style.backgroundColor = "transparent"
        header.style.border = "0"
    }
})