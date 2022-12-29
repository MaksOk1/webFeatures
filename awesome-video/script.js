const videoIn = document.querySelector(".video-in");
const varCanvas = document.querySelector("#video-gx-canvas");
const render = varCanvas.getContext("2d");

varCanvas.style.width = videoIn.clientWidth + "px";
varCanvas.style.height = videoIn.clientHeight + "px";

function renderImage() {
	render.drawImage(videoIn, 0, 0, varCanvas.width, varCanvas.height);
}

function renderFinal() {
	let rdInt = setInterval(renderImage, 20);
	setTimeout(rdInt, 80);
}
setInterval(renderFinal, 30);