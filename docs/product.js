//Selecting Sidenavbar,MenuIcon

var Sidenav = document.getElementById("Sidenav")
var MenuIcon = document.getElementById("MenuIcon")
var Closenav = document.getElementById("Close-nav")

MenuIcon.addEventListener("click", function () {
    Sidenav.style.right = 0;
})

Closenav.addEventListener("click", function () {
    Sidenav.style.right = "-50%";
})

//product search functionality
var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
    var EnteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h1").textContent



        if (productname.toUpperCase().indexOf(EnteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});