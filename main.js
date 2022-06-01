const mainElement = document.querySelector("main");

const toggleDarkMode = function () {
	mainElement.classList.toggle("dark");
};
const darkModeButton = document.querySelector("#dark-mode-button");
darkModeButton.addEventListener("click", toggleDarkMode);

///new html element

const newElement = document.querySelector("text");

const showNewThing = function () {
	newElement.classList.toggle("show");
};
const newThingButton = document.querySelector("#new-thing-button");
newThingButton.addEventListener("click", showNewThing);

//mouse events

document.getElementById("circle").onmouseenter = function () {
	mouseEnter();
};
document.getElementById("circle").onmouseleave = function () {
	mouseLeave();
};
function mouseEnter() {
	document.getElementById("circle").style.backgroundColor = "yellow";
	// document.getElementById("");
}
function mouseLeave() {
	document.getElementById("circle").style.backgroundColor = "palegoldenrod";
}
