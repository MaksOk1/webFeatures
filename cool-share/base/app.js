var img = document.createElement('img');
img.onload = function (e) {
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	var url = canvas.toDataURL(); // Read succeeds, canvas won't be dirty.
};
img.crossOrigin = '';
img.src = '/';