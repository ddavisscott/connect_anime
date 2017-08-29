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
// helper functions:

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


(lib.hallow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EA0F2").s().p("AhACfIBuhvIkSAAIAAhfIESAAIhuhvICGAAICfCeIifCfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hallow, new cjs.Rectangle(-22.8,-15.8,45.8,31.8), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Arrow = new lib.hallow();
	this.Arrow.parent = this;
	this.Arrow.setTransform(69.8,10.1,0.634,0.634);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EA0F2").ss(7).p("AFAAAIp/AA");
	this.shape.setTransform(83.1,40.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EA0F2").ss(3).p("ABDAAIiFAA");
	this.shape_1.setTransform(6.7,47.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0EA0F2").ss(3).p("ABDAAIiFAA");
	this.shape_2.setTransform(6.7,33);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EA0F2").ss(7).p("AiriHIDGAAIAWACQAbAEAWAJQBIAfACBMQACBXg+AmQglAYgwAAIjGAAg");
	this.shape_3.setTransform(32,40.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AirCIIAAkPIDGAAIAWACQAbAEAWAJQBIAfACBMQACBXg+AmQglAYgwAAg");
	this.shape_4.setTransform(32,40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.Arrow}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-1.5,0,120.1,57.7), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(58.5,28.8,1,1,0,0,0,58.5,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,0,120.1,57.7);


// stage content:
(lib.power_off_anime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASABAZQgBAagSASQgSASgaABQgZgBgSgSg");
	this.shape.setTransform(331.6,329.9,1.564,1.564);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASABAZQgBAagSASQgSASgaABQgZgBgSgSg");
	this.shape_1.setTransform(307,329.9,1.564,1.564);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAsQgSgSgBgaQABgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSASgaABQgZgBgSgSg");
	this.shape_2.setTransform(283.1,329.9,1.564,1.564);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASABAZQgBAagSASQgSASgaABQgZgBgSgSg");
	this.shape_3.setTransform(358.2,329.9,1.564,1.564);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0EA0F2").s().p("AgrAsQgTgSAAgaQAAgZATgSQASgSAZAAQAaAAASASQATASAAAZQAAAagTASQgSASgaABQgZgBgSgSg");
	this.shape_4.setTransform(267.9,329.9,1.564,1.564);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0EA0F2").s().p("AgrAsQgTgSAAgaQAAgZATgSQASgSAZAAQAaAAASASQATASAAAZQAAAagTASQgSASgaABQgZgBgSgSg");
	this.shape_5.setTransform(243.3,329.9,1.564,1.564);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0EA0F2").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSASgaABQgZgBgSgSg");
	this.shape_6.setTransform(219.4,329.9,1.564,1.564);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0EA0F2").s().p("AiTAHQA+g/BRAAQBRAABHA+IhGAvIgjgNQgZgIgTgBQgRAAgcAJIgwARg");
	this.shape_7.setTransform(248.7,226.5,1.564,1.564);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0EA0F2").s().p("AjTBUIhAgwQBph4CtgCQCtgCBkBzIg2A8QjaivjXCsg");
	this.shape_8.setTransform(247.5,203.8,1.564,1.564);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0EA0F2").s().p("AmGA4QBAhJBhgsQBhgrBtgEQD1gKCpCrIhBA2QiNiDi8AAQi5ACiNCEg");
	this.shape_9.setTransform(248.4,181.5,1.564,1.564);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0EA0F2").s().p("ApkFzIAAmCIFOAAQAAihgBggQAAgHgIgLIgPgRQgUgbABgeQABgeAYgVQAVgTAdABQAdAAAVAUQAVAVABAcQABAbgTAbQgVAfgCAeQgCAfAAAvIABBTIM+AAIAAGLgAngCXQgNAPABAJQAAAKAMANIAWAWQAHgHARgMQAOgMABgJQABgJgLgRQgOgWgJgQIgcAjgAh/CKQgLABgOAMQgOAOgBAKQgBALAMAOQAMAPAMACQAHACARgLIAjgZIgfgfQgOgPgIAAIgBABgAHECKQgMABgNAOQgNANgBALQgBAKANAOQANAOAMACQAIACAPgMIAigbIghgeQgNgNgIAAIgBABgAkmCKQgKABgNAPQgMAOAAALQAAAKAOAOQANANAKABQAJABAPgNIAfgcIgggbQgPgNgIAAIgCABg");
	this.shape_10.setTransform(286.6,302,1.564,1.564);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(33));

	// Layer 1
	this.instance = new lib.Symbol23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(145,300.2,1,1,0,0,0,58.5,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:57.5,x:146},0).wait(1).to({x:148.1},0).wait(1).to({x:150.1},0).wait(1).to({x:152.1},0).wait(1).to({x:154.2},0).wait(1).to({x:156.2},0).wait(1).to({x:158.3},0).wait(1).to({x:160.3},0).wait(1).to({x:162.3},0).wait(1).to({x:164.4},0).wait(1).to({x:166.4},0).wait(1).to({x:168.4},0).wait(1).to({x:170.5},0).wait(1).to({x:172.5},0).wait(1).to({x:174.6},0).wait(1).to({x:176.6},0).wait(1).to({x:178.6},0).wait(1).to({x:180.7},0).wait(1).to({x:182.7},0).wait(1).to({x:184.7},0).wait(1).to({x:186.8},0).wait(1).to({x:188.8},0).wait(1).to({x:190.9},0).wait(1).to({x:192.9},0).wait(1).to({x:194.9},0).wait(1).to({x:197},0).wait(1).to({x:199},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0EA0F2").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_11.setTransform(88.4,319.2,1.426,1.426);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0EA0F2").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_12.setTransform(88.4,303.9,1.426,1.426);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0EA0F2").ss(7).p("AAAjiQBeAABDBCQBCBDAABdQAABfhCBCQhDBDheAAQhdAAhDhDQhChCAAhfQAAhdBChDQBDhCBdAAg");
	this.shape_13.setTransform(87.8,310.2,1.342,1.342);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AigChQhChDAAheQAAhdBChDQBDhDBdAAQBeAABDBDQBCBDAABdQAABehCBDQhDBDheAAQhdAAhDhDg");
	this.shape_14.setTransform(87.8,310.2,1.342,1.342);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0EA0F2").ss(7).p("ADyF4IniAAQggAAgWgXQgXgWAAggIAApVQAAggAXgWQAWgXAgAAIHiAAQAfAAAXAXQAWAWAAAgIAAJVQAAAggWAWQgXAXgfAAg");
	this.shape_15.setTransform(89.6,310.4,1.339,1.339);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjwF3QggABgWgXQgXgXAAgfIAApVQAAggAXgWQAWgWAgAAIHiAAQAfAAAXAWQAWAWAAAgIAAJVQAAAfgWAXQgXAXgfgBg");
	this.shape_16.setTransform(89.6,310.4,1.339,1.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250.6,532.3,338.9,199.9);
// library properties:
lib.properties = {
	id: '08BBD091B6704E2A8B3701528E157BAA',
	width: 414,
	height: 736,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
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