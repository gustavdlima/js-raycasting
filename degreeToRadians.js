// Cast degree to radian needed to work with math.sin and math.cos functions

function degreeToRadians(degree) {
	let pi = Math.pi;
	return degree * pi / 180;
}
