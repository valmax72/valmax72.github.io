'use strict';

// More information about this technique/pen:
// https://medium.com/@electerious/parallax-scrolling-with-js-controlled-css-variables-63cfe96820c7#.o1kkd4cte

var scenes = document.querySelectorAll('.paralax');

Array.prototype.forEach.call(scenes, function (elem) {

	var modifier = elem.getAttribute('data-modifier');

	basicScroll.create({
		elem: elem,
		from: 0,
		to: 519,
		props: {
			'--translateY': {
				from: '0',
				to: 10 * modifier + 'px',
				direct: true
			}
		}
	}).start();
});