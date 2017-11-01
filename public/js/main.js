"use strict";

document.addEventListener("DOMContentLoaded", function() {
    var toggleNavbar = function() {
        document.body.classList.toggle("show-menu");
        document.getElementById("navbar").classList.toggle("show");
        document.getElementById("overlay").classList.toggle("show");
    };

    document.getElementById("menu-button").addEventListener("click", toggleNavbar);
    document.getElementById("overlay").addEventListener("click", toggleNavbar);
});
