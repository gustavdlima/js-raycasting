let data = {
	screen: {
		width: 640,
		height: 480,
		halfWidth: null,
		halfHeight: null
	},
	render: {
		delay: 30
	},
	rayCasting: {
		incrementAngle: null,
		precision: 64
	},
	player: {
		fov: 60,
		halfFov: null,
		x: 2,
		y: 2,
		angle: 90
	},
	map: [
        [1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,1,0,1,0,0,1],
        [1,0,0,1,0,0,1,0,0,1],
        [1,0,0,1,0,0,1,0,0,1],
        [1,0,0,1,0,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1],
    ]
}

// Calculated data
data.screen.halfHeight = data.screen.height / 2;
data.screen.halfWidth = data.screen.width / 2;
// incrementAngle = The value to increment for each ray in relation of the screen width
data.rayCasting.incrementAngle = data.player.fov / data.screen.width;
data.player.halfFov = data.player.fov / 2;


// Canvas
const screen = document.createElement('canvas');
screen.width = data.screen.width;
screen.height = data.screen.height;
screen.style.border = '1px solid black';
// The appendChild() method appends a node (element) as the last child of an element.
document.body.appendChild(screen);

function clearScreen(x, y, width, height) {
	screenContext.clearRect(0, 0, width, height);
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

/** Cast degree to radian needed to work with math.sin and math.cos functions
 * @param {Number}
*/
function degreeToRadians(degree) {
	let pi = Math.pi;
	return degree * pi / 180;
}

// Raycasting logic
function rayCasting() {

}

function main() {
	setInterval(function() {
		clearScreen();
	})
}
