//Selecting Sidenavbar,MenuIcon

var Sidenav = document.getElementById("Sidenav")
var MenuIcon = document.getElementById("MenuIcon")
var Closenav = document.getElementById("Close-nav")

MenuIcon.addEventListener("click", function () {
    Sidenav.style.right = 0
})

Closenav.addEventListener("click", function () {
    Sidenav.style.right = "-50%"
})