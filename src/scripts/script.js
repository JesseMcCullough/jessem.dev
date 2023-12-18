"use strict"

const nav = document.querySelector("nav");
const navMobileMenuIcon = document.querySelector("nav .mobile-menu-icon");

navMobileMenuIcon.addEventListener("click", function() {
    console.log("clicked");
	nav.classList.toggle("active");
});

