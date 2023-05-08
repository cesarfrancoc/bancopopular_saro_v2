(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1020,
	height: 485,
	fps: 24,
	color: "#FFFFFF",
	manifest: [{src:"sounds/audio1.mp3"},{src:"sounds/audio1_0.mp3"},{src:"sounds/audio1_1.mp3"},{src:"images/flecha_next.png"},{src:"images/suelo.png"},{src:"images/plataforma.png"},{src:"images/decora0.png"},{src:"images/decora1.png"},{src:"images/decora2.png"},{src:"images/decora3.png"}]
};



// symbols:



// stage content:
(lib.page = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;