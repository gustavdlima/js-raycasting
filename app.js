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
