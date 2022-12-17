// const navToggle = document.querySelector(".nav--button--menu");
// navToggle.addEventListener("click", () => {
// 	// navToggle.classList.toggle("opened");
// 	console.log("haha");
// });

// document
// 	.querySelector(".nav--menu--button")
// 	.addEventListener("click", function () {
// 		document.querySelector(".navlist").classList.add("opened");
// 	});

"use strict";

document.querySelector(".nav--menu--button").addEventListener("click", () => {
	document.querySelector(".nav--list").classList.toggle("opened");
	document.querySelector(".nav--close--button").classList.toggle("closed");
	document.querySelector(".overlay").style.display = "block";
});

document.querySelector(".nav--close--button").addEventListener("click", () => {
	document.querySelector(".nav--list").classList.toggle("opened");
	document.querySelector(".nav--close--button").classList.toggle("closed");
	document.querySelector(".overlay").style.display = "none";
});

document.querySelector(".overlay").addEventListener("click", () => {
	document.querySelector(".overlay").style.display = "none";
	document.querySelector(".nav--close--button").classList.toggle("closed");
	document.querySelector(".nav--list").classList.toggle("opened");
});
