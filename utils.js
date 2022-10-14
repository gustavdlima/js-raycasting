/** Cast degree to radian needed to work with math.sin and math.cos functions
 * @param {Number}
*/
function degreeToRadians(degree) {
	let pi = Math.pi;
	return degree * pi / 180;
}

/**
 * @param {Number} x1
 * @param {Number} y1
 * @param {Number} x2
 * @param {Number} y2
 * @param {String} cssColor
*/
function drawLine(x1, y1, x2, y2, cssColor) {
	screenContext.strokeStyle = cssColor;
	screenContext.beginPath();
	screenContext.moveTo(x1, y1);
	screenContext.lineTo(x2. y2);
	screenContext.stroke();
}

function clearScreen(x, y, width, height) {
	screenContext.clearRect(0, 0, width, height);
}
