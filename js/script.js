"use strict";

//? HTML Elements
const navMenuBtn = document.querySelector(".nav--menu--button");
const navList = document.querySelector(".nav--list");
const navListAnchorTags = document.querySelectorAll(".nav--list a");
const navCloseBtn = document.querySelector(".nav--close--button");
const overlay = document.querySelector(".overlay");

//? Check if overlay display property is set to block
let overlayIsOpen = window.getComputedStyle(overlay).display === "block";

//? Functions
const toggleOverlay = () => {
	overlay.style.display = overlayIsOpen ? "none" : "block"; //* if true, change
	overlayIsOpen = !overlayIsOpen; //* flips from true to false or vice-versa
	navCloseBtn.classList.toggle("closed");
	navList.classList.toggle("opened");
};
const closeOverlay = () => {
	if (overlayIsOpen) {
		toggleOverlay();
	}
};

//? Close overlay when user clicks a navLink
for (const links of navListAnchorTags) {
	links.addEventListener("click", closeOverlay);
}

//? Dynamically get Viewport Width & Height, then close overlay if viewWidth reaches 700
window.addEventListener(`resize`, () => {
	const vw = Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	);
	if (vw >= 700) {
		closeOverlay();
		return;
	}
});

//? onclick events
overlay.addEventListener("click", toggleOverlay);
navMenuBtn.addEventListener("click", toggleOverlay);
navCloseBtn.addEventListener("click", toggleOverlay);
