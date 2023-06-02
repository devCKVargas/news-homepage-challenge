"use strict";

//? HTML Elements
const navMenuBtn = document.querySelector(".nav--menu--button");
const navList = document.querySelector(".nav--list");
const navListAnchorTags = document.querySelectorAll(".nav--list a");
const navCloseBtn = document.querySelector(".nav--close--button");
const overlay = document.querySelector(".overlay");

//? Check if overlay is open
let overlayIsOpen = window.getComputedStyle(overlay).display === "block";

//? Function
const toggleOverlay = () => {
	overlay.style.display = "none";
	navCloseBtn.classList.toggle("closed");
	navList.classList.toggle("opened");
	overlayIsOpen = false;
};

const closeOverlay = () => {
	overlayIsOpen === true ? toggleOverlay() : null;
};

//? Close overlay when user clicks a navLink
for (const links of navListAnchorTags) {
	links.addEventListener("click", closeOverlay);
}

//? Dynamically get Viewport Width & Height
window.addEventListener(`resize`, () => {
	const vw = Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	);
	const vh = Math.max(
		document.documentElement.clientHeight || 0,
		window.innerHeight || 0
	);

	//? Close overlay if viewWidth reaches 700
	vw >= 700 ? closeOverlay() : null;
});

//? onclick Overlay
overlay.addEventListener("click", toggleOverlay);

//? onclick Menu Btn
navMenuBtn.addEventListener("click", () => {
	navList.classList.toggle("opened");
	navCloseBtn.classList.toggle("closed");
	overlay.style.display = "block";
	overlayIsOpen = true;
});

//? onclick Close Btn
navCloseBtn.addEventListener("click", toggleOverlay);
