function initImages() {
	var images = {
		0: {
			base: 'Cross.png',
			flow: {
				'n': [
				'Cross Vertical Flow Up 0.25.png',
				'Cross Vertical Flow Up 0.5.png',
				'Cross Vertical Flow Up 0.75.png',
				'Cross Vertical 1.0.png',
				],
				's': [
				'Cross Horizontal Flow Down 0.25.png',
				'Cross Horizontal Flow Down 0.5.png',
				'Cross Horizontal Flow Down 0.75.png',
				'Cross Vertical 1.0.png',
				],
				'e': [
				'Cross Horizontal Flow Right 0.25.png',
				'Cross Horizontal Flow Right 0.5.png',
				'Cross Horizontal Flow Right 0.75.png',
				'Cross Horizontal 1.0.png',
				],
				'w': [
				'Cross Horizontal Flow Left 0.25.png',
				'Cross Horizontal Flow Left 0.5.png',
				'Cross Horizontal Flow Left 0.75.png',
				'Cross Horizontal 1.0.png',
				],
				'nb': [
				'Cross Both Flow Up 0.25.png',
				'Cross Both Flow Up 0.5.png',
				'Cross Both Flow Up 0.75.png',
				'Cross Both 1.0.png',
				],
				'sb': [
				'Cross Both Flow Down 0.25.png',
				'Cross Both Flow Down 0.5.png',
				'Cross Both Flow Down 0.75.png',
				'Cross Both 1.0.png',
				],
				'eb': [
				'Cross Both Flow Right 0.25.png',
				'Cross Both Flow Right 0.5.png',
				'Cross Both Flow Right 0.75.png',
				'Cross Both 1.0.png',
				],
				'wb': [
				'Cross Both Flow Left 0.25.png',
				'Cross Both Flow Left 0.5.png',
				'Cross Both Flow Left 0.75.png',
				'Cross Both 1.0.png',
				],
			},
		},
		1: {
			base: 'Horizontal.png',
			flow: {
				'e': [
				'Horizontal Flow Right 0.25.png',
				'Horizontal Flow Right 0.5.png',
				'Horizontal Flow Right 0.75.png',
				'Horizontal 1.0.png',
				],
				'w': [
				'Horizontal Flow Left 0.25.png',
				'Horizontal Flow Left 0.5.png',
				'Horizontal Flow Left 0.75.png',
				'Horizontal 1.0.png',
				],
			},
		},
		2: {
			base: 'Vertical.png',
			flow: {
				'n': [
				'Vertical Flow Up 0.25.png',
				'Vertical Flow Up 0.5.png',
				'Vertical Flow Up 0.75.png',
				'Vertical 1.0.png',
				],
				's': [
				'Vertical Flow Down 0.25.png',
				'Vertical Flow Down 0.5.png',
				'Vertical Flow Down 0.75.png',
				'Vertical 1.0.png',
				],
			},
		},
		3: {
			base: 'Curve NE.png',
			flow: {
				's': [
				'Curve NE Fill E 0.25.png',
				'Curve NE Fill E 0.5.png',
				'Curve NE Fill E 0.75.png',
				'Curve NE 1.0.png',
				],
				'w': [
				'Curve NE Fill N 0.25.png',
				'Curve NE Fill N 0.5.png',
				'Curve NE Fill N 0.75.png',
				'Curve NE 1.0.png',
				],
			},
		},
		4: {
			base: 'Curve SE.png',
			flow: {
				'n': [
				'Curve SE Fill E 0.25.png',
				'Curve SE Fill E 0.5.png',
				'Curve SE Fill E 0.75.png',
				'Curve SE 1.0.png',
				],
				'w': [
				'Curve SE Fill S 0.25.png',
				'Curve SE Fill S 0.5.png',
				'Curve SE Fill S 0.75.png',
				'Curve SE 1.0.png',
				],
			},
		},
		5: {
			base: 'Curve SW.png',
			flow: {
				'e': [
				'Curve SW Fill S 0.25.png',
				'Curve SW Fill S 0.5.png',
				'Curve SW Fill S 0.75.png',
				'Curve SW 1.0.png',
				],
				'n': [
				'Curve SW Fill W 0.25.png',
				'Curve SW Fill W 0.5.png',
				'Curve SW Fill W 0.75.png',
				'Curve SW 1.0.png',
				],
			},
		},
		6: {
			base: 'Curve NW.png',
			flow: {
				's': [
				'Curve NW Fill W 0.25.png',
				'Curve NW Fill W 0.5.png',
				'Curve NW Fill W 0.75.png',
				'Curve NW 1.0.png',
				],
				'e': [
				'Curve NW Fill N 0.25.png',
				'Curve NW Fill N 0.5.png',
				'Curve NW Fill N 0.75.png',
				'Curve NW 1.0.png',
				],
			},
		},
	};

	return images;
};

function initConnections() {
	var connections = {
		0: { 'n': 'n', 'e': 'e', 's': 's', 'w': 'w' },
		1: { 'e': 'e', 'w': 'w' },
		2: { 'n': 'n', 's': 's' },
		3: { 's': 'e', 'w': 'n' },
		4: { 'w': 's', 'n': 'e' },
		5: { 'n': 'w', 'e': 's' },
		6: { 's': 'w', 'e': 'n' },
	};
	return connections;
};