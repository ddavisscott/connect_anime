(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,36);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,9,36);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhBhQgogoAAg5QAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpg");
	this.shape.setTransform(13.8,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.5,27.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQBQQghghAAgvQAAguAhgiQAighAuAAQAvAAAhAhQAiAiAAAuQAAAvgiAhQghAigvAAQguAAgigig");
	this.shape.setTransform(11.4,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.8,22.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3.9,1,1).p("AhkCWIDJkr");
	this.shape.setTransform(10.1,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,24.1,33.9);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1A1QgVgVgBggQABgeAVgXQAXgVAegBQAgABAVAVQAXAXAAAeQAAAggXAVQgVAXggAAQgeAAgXgXg");
	this.shape.setTransform(7.6,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.1,15.1);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3.9,1,1).p("ABxCCIjhkD");
	this.shape.setTransform(11.3,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,26.4,29.9);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");
	this.shape.setTransform(13,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,26);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCg");
	this.shape.setTransform(22.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,45);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(20.3,19.7,2.593,2.593,0,0,0,7.8,7.6);

	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.9,53.6,1.375,1.156,18.6,0,0,11.5,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.9,75);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(11,0,1.281,1.281);

	this.instance_1 = new lib.Symbol8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.1,38.8,1,1,0,0,0,10.1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,0,42.2,55.7);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(13.8,13.8,1,1,0,0,0,13.8,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.5,27.5);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(38.7,24.7,0.754,0.754,0,0,0,14,14);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3.9,1,1).p("Aixh2IFjDt");
	this.shape.setTransform(17.8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,50.8,36.8);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,0,42.2,55.7);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(29.7,37.8,1,1,0,0,0,29.7,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.9,75);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(16.2,45.6,1.175,1.175,0,0,0,13.8,13.8);

	this.instance_1 = new lib.Symbol13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.1,18.2,1,1,0,0,0,2.6,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,32.3,61.7), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(16.1,30.9,1,1,0,0,0,16.1,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.3,61.7);


// stage content:
(lib.discovery_anime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.Symbol15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(282.3,407.2,1,1,0,0,0,16.1,30.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(1).to({regY:30.8,y:407.1,alpha:0.063},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(128,451,1,1,0,0,0,13,13);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.314},0).wait(1).to({alpha:0.343},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.657},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.743},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:1},0).wait(1));

	// Layer 7
	this.instance_2 = new lib.Symbol19("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(272.1,309.6,1,1,0,0,0,29.7,37.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:1},0).wait(1));

	// Layer 8
	this.instance_3 = new lib.Symbol20("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(309.6,317.9,1,1,0,0,0,19.1,27.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(1));

	// Layer 10
	this.instance_4 = new lib.Symbol21("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(323,396.8,1,1,0,0,0,23.4,16.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).wait(1).to({regX:23.5,x:323.1,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeDMQgTgNgGgVQgGgXAAglIAAiZIgKAAQgSAAgJgIQgJgIAAgMQAAgNAKgIQAJgJASABIAJAAIAAgxIABgeQABgLAEgHQAGgJAIgFQAJgFALAAQAPAAALALQAJAIACALIACAfIAAA3IAeAAQAQgBAKAJQAIAIAAANQAAAPgNAHQgMAGgYAAIgPAAIAACSIACAeQAAAJAHAHQAFAGANAAIATgCIATgDQAKAAAIAIQAHAIAAALQAAAUgVAKQgWAKgnAAQgkAAgUgNg");
	this.shape.setTransform(291.7,360.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhtB4QgpgsAAhIQAAgxATgmQATglAkgUQAkgWAxAAQAfABAaAIQAaAJASAPQASAPAKAQQAJAQAAAOQAAAPgLAJQgKALgPAAQgKgBgHgFIgPgRQgPgWgPgLQgRgLgYAAQgjAAgVAcQgWAbAAAwQAAAWAFATQAGATALAOQALANAOAGQAPAIARAAQAYAAASgMQAQgLANgXQAIgNAIgIQAJgIAMABQAPAAAJALQAKALAAANQAAAOgJARQgJARgSAQQgTAPgbAJQgcAJgjAAQhJAAgqgqg");
	this.shape_1.setTransform(267.1,365.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhtB3QgqgsAAhLQAAgjALgeQAKgeAUgWQAUgWAegLQAdgMAkAAQAuAAAiAUQAiAUAQAfQARAgAAAgQAAAdgSAJQgQAJggAAIibAAQAAAbALAVQALAVARAKQASALAUAAQAOAAAMgDQAMgEAMgHIAUgPIAYgXQAHgFALAAQAMAAAIAHQAHAGABANQAAAKgJAPQgIAOgSAOQgRANgaAJQgaAJghAAQhNAAgrgsgABLgZQgEgpgTgUQgTgVgfAAQgdABgTAUQgUAVgDAoICQAAIAAAAg");
	this.shape_2.setTransform(236.6,365.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABKCWQgLgNAAgXIAAiEQAAgogLgVQgLgVghAAQgVAAgRANQgSANgHAWQgHASAAAwIAABkQABAYgLANQgMAMgSAAQgRAAgMgNQgKgNgBgXIAAjmQABgXAJgLQALgMAQAAQALAAAIAFQAJAFAFAKQAFAKABAPIAAAJQAUgcAagMQAXgOAhAAQAgAAAYAOQAZAOANAZQAIAPACARIADArIAACUQgBAYgKAMQgMANgRAAQgSAAgLgNg");
	this.shape_3.setTransform(205.7,365.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABKCWQgLgNAAgXIAAiEQAAgogLgVQgLgVghAAQgUAAgSANQgRANgJAWQgFASgBAwIAABkQAAAYgLANQgLAMgSAAQgRAAgLgNQgLgNAAgXIAAjmQAAgXAKgLQAJgMASAAQAKAAAJAFQAIAFAFAKQAGAKAAAPIAAAJQAUgcAagMQAXgOAhAAQAgAAAZAOQAZAOAMAZQAIAPACARIACArIAACUQABAYgMAMQgKANgSAAQgSAAgLgNg");
	this.shape_4.setTransform(174.5,365.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhBCXQgdgMgVgWQgVgWgLgdQgLgeAAgkQAAgjALgfQALgeAVgVQAVgVAdgMQAegMAjAAQAkAAAdAMQAeAMAVAVQAVAWALAeQALAeAAAjQAAAkgLAeQgLAegVAWQgVAVgeAMQgdAMgkAAQgkAAgdgMgAgphaQgSAMgKAYQgJAXAAAfQAAAfAJAYQAKAXASANQASAMAXAAQAkAAAVgbQAWgcAAgwQAAgwgWgbQgVgbgkAAQgXAAgSAMg");
	this.shape_5.setTransform(143.3,365.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhsB4QgqgsAAhIQAAgxATgmQATglAkgUQAkgWAxAAQAfABAaAIQAaAJASAPQASAPAJAQQAKAQAAAOQAAAPgLAJQgKALgQAAQgJgBgHgFIgPgRQgPgWgPgLQgRgLgYAAQgjAAgVAcQgWAbAAAwQAAAWAGATQAFATALAOQAKANAPAGQAPAIARAAQAYAAASgMQAQgLANgXQAIgNAJgIQAIgIAMABQAPAAAKALQAJALAAANQAAAOgJARQgIARgTAQQgTAPgbAJQgcAJgjAAQhJAAgpgqg");
	this.shape_6.setTransform(112.2,365.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(70));

	// Layer 1 copy
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(185,275,0.667,0.667,0,0,0,22.6,22.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).wait(1).to({regX:22.5,regY:22.5,x:184.9,y:274.9,alpha:0.038},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.115},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.192},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.269},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.346},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.423},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.577},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.654},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.731},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.808},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.885},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1 copy 2
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(210,460,0.444,0.444,0,0,0,22.6,22.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).wait(1).to({regX:22.5,regY:22.5,x:209.9,y:459.9,alpha:0.031},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.344},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.406},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.594},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.656},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.844},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1 copy 8
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(244.2,118.2,1.333,1.333,0,0,0,22.6,22.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(1).to({regX:22.5,regY:22.5,x:244,y:118,alpha:0.03},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.152},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.212},0).wait(1).to({alpha:0.242},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.303},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.424},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.485},0).wait(1).to({alpha:0.515},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.576},0).wait(1).to({alpha:0.606},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.697},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.758},0).wait(1).to({alpha:0.788},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.848},0).wait(1).to({alpha:0.879},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1 copy 3
	this.instance_8 = new lib.Symbol1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(330.2,210.2,1.333,1.333,0,0,0,22.6,22.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({_off:false},0).wait(1).to({regX:22.5,regY:22.5,x:330,y:210,alpha:0.036},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.107},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.393},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.464},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.536},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.607},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.679},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.821},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.893},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1 copy 4
	this.instance_9 = new lib.Symbol1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(97.5,142.5,1,1,0,0,0,22.5,22.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({_off:false},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1 copy 7
	this.instance_10 = new lib.Symbol1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(90.5,530.1,1.333,1.333,0,0,0,22.8,22.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).wait(1).to({regX:22.5,regY:22.5,x:90,y:529.6,alpha:0.045},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1 copy 9
	this.instance_11 = new lib.Symbol1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(170.3,623.4,0.778,0.778,0,0,0,22.9,22.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50).to({_off:false},0).wait(1).to({regX:22.5,regY:22.5,x:170,y:623.1,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1 copy 5
	this.instance_12 = new lib.Symbol1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(340.2,540.2,1.778,1.778,0,0,0,22.8,22.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({_off:false},0).wait(1).to({regX:22.5,regY:22.5,x:339.6,y:539.6,alpha:0.033},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1 copy 6
	this.instance_13 = new lib.Symbol1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(77.6,256.6,1,1,0,0,0,22.5,22.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({alpha:0.021},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.149},0).wait(1).to({alpha:0.17},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.234},0).wait(1).to({alpha:0.255},0).wait(1).to({alpha:0.277},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.383},0).wait(1).to({alpha:0.404},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.489},0).wait(1).to({alpha:0.511},0).wait(1).to({alpha:0.532},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.617},0).wait(1).to({alpha:0.638},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.681},0).wait(1).to({alpha:0.702},0).wait(1).to({alpha:0.723},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.766},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1
	this.instance_14 = new lib.Symbol1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(77.6,256.6,1,1,0,0,0,22.5,22.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(30).to({_off:false},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.074},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.185},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.593},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.852},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.963},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(262.1,602.1,243.4,162);
// library properties:
lib.properties = {
	id: '08BBD091B6704E2A8B3701528E157BAA',
	width: 414,
	height: 736,
	fps: 24,
	color: "#026DBF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['08BBD091B6704E2A8B3701528E157BAA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;