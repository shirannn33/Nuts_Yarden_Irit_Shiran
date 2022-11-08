(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Nuts_atlas_1", frames: [[0,813,1554,879],[0,0,1691,811]]},
		{name:"Nuts_atlas_2", frames: [[1966,1651,66,66],[651,1457,66,66],[1885,333,83,28],[463,1761,142,268],[512,1158,142,268],[861,1949,117,99],[1567,1662,117,99],[1602,1551,116,109],[1847,1651,117,99],[1686,1750,117,99],[1567,1763,117,99],[984,1575,223,397],[1088,1974,60,71],[1150,1974,52,61],[1552,374,314,167],[1552,543,123,123],[1868,374,177,177],[1846,553,177,177],[1846,732,177,177],[1846,911,177,177],[1846,1090,177,177],[1209,1682,177,177],[1686,1952,116,88],[1567,1965,106,71],[1686,1851,117,99],[1241,1104,106,71],[1804,1952,116,88],[1922,1752,116,88],[980,1974,106,71],[1567,1864,117,99],[1209,1861,177,177],[1388,1682,177,177],[1388,1861,177,177],[1475,1193,177,177],[1654,1193,177,177],[1833,1269,177,177],[0,0,1550,674],[1475,1372,177,177],[1654,1372,177,177],[1552,0,331,372],[651,1575,331,372],[656,1158,36,297],[1364,676,480,515],[1677,543,124,109],[1885,0,124,109],[607,1949,125,97],[1475,1551,125,102],[734,1949,125,97],[1885,111,124,109],[1885,222,124,109],[1720,1552,125,97],[1833,1448,125,102],[1847,1552,125,97],[1720,1651,125,97],[0,1500,649,259],[722,1104,517,469],[1241,1193,232,487],[0,676,720,480],[0,1158,510,340],[237,1761,224,225],[0,1761,235,215],[722,676,640,426]]}
];



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
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_63 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(img.CachedBmp_61);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2913,175);


(lib.CachedBmp_60 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(img.CachedBmp_58);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2238,1433);


(lib.CachedBmp_57 = function() {
	this.initialize(img.CachedBmp_57);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2238,1433);


(lib.CachedBmp_56 = function() {
	this.initialize(img.CachedBmp_56);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2259,642);


(lib.CachedBmp_55 = function() {
	this.initialize(ss["Nuts_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(img.CachedBmp_54);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2626,175);


(lib.CachedBmp_53 = function() {
	this.initialize(img.CachedBmp_53);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2626,1214);


(lib.CachedBmp_52 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(img.CachedBmp_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3049,392);


(lib.CachedBmp_13 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib._18group = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib._32group = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib._8group = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.candy = function() {
	this.initialize(ss["Nuts_atlas_2"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.zzz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7E1A").s().p("AgmAvQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgBgDIAAgOIAAgDIADgDIApgtIgmAAIgEgBIgBgDIAAgOIABgEIAEgBIBHAAIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAPIgBADIgCACIgoAtIAqAAIADABIABADIAAAOIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape.setTransform(4.325,4.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC7E1A").s().p("AhcBtQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgBgDIAAgOIABgEIACgCIAqguIgmAAIgEgBIgBgDIAAgPIABgDIAEgBIBIAAIADABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAAAQIgBADIgBACIgqAtIArAAIAEABIABAEIAAAOIgBADQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAgAAQgOQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgBgCIAAgPIAAgDIADgDIAqguIgnAAIgEgBIgBgDIAAgOIABgDIAEgBIBJAAIACABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAAPIgBADIgCADIgpAtIArAAIAEABIABADIAAAPIgBACQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_1.setTransform(9.75,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FC7E1A").s().p("AiUCyQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgBgDIAAgOIAAgDIADgDIAqguIgnAAIgEgBIgBgDIAAgOIABgEIAEgBIBIAAIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAPIgBADIgCACIgpAuIArAAIADABIABADIAAAOIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAgnA2QgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgDIAAgOIABgEIACgCIApgtIgmAAIgDgBIgBgEIAAgOIABgDIADgBIBIAAIADABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAAPIgBADIgBADIgpAsIAqAAIAEABIABAEIAAAOIgBADQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAgABHhTQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgBgDIAAgOIAAgDIADgDIAqguIgnAAIgEgBIgBgDIAAgOIABgEIAEgBIBIAAIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAPIgBADIgCACIgpAuIArAAIADABIABADIAAAOIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_2.setTransform(15.325,-8.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},6).to({state:[{t:this.shape_2}]},7).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-26.2,30.7,35.6);


(lib.vx = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this
		this.stop();
	}
	this.frame_1 = function() {
		var self = this
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// flash0_ai
	this.instance = new lib.CachedBmp_62();
	this.instance.setTransform(-4.4,-3.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_63();
	this.instance_1.setTransform(-4.4,-3.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-3.1,33,33);


(lib.trueani = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		var self = this
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// אוזניים
	this.instance = new lib.CachedBmp_45();
	this.instance.setTransform(6.05,1.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_46();
	this.instance_1.setTransform(6.05,1.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_47();
	this.instance_2.setTransform(6.05,1.8,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_48();
	this.instance_3.setTransform(12.25,0.05,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_49();
	this.instance_4.setTransform(6.05,1.8,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_50();
	this.instance_5.setTransform(6.05,1.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},16).wait(1));

	// אף_ופה
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(1,1,1).p("AAAgRQAHA3A5gcAg/gDQAxArAMg6");
	this.shape.setTransform(23.15,85.4778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330000").ss(0.1,1,1).p("AhDgnQA4AkBQgPQgKAthFANIAAAAIgBgBQg5gWABg4g");
	this.shape_1.setTransform(24.0998,79.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330000").s().p("AgLAnQg5gWABg4QA4AkBQgPQgKAthFANIAAAAg");
	this.shape_2.setTransform(24.0998,79.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.3,1,1).p("AABgVIgFA2IgcgDIADgnQASAAANgZIgBAFQARAZAPAAIgDAnIgcgCIgBg2IgBgKQABABAAABg");
	this.shape_3.setTransform(22.975,88.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACAhIgBg2IAAgIIgBgCIABAKIgFA2IgcgDIADgnQASAAANgZIgBAFQARAZAPAAIgDAngAABgVIgBgKIABACIAAAIg");
	this.shape_4.setTransform(22.975,88.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#330000").ss(1,1,1).p("AAKgaQgCAGAAAFAg4ANQA5AUgFgwQgBgEgBgFAACgRQgBACAAABAAIgPQgEAjAqAGIALAB");
	this.shape_5.setTransform(23.125,85.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#330000").ss(0.1,1,1).p("AhDgnQA4AkBQgPQgKAqg7AOIgBAAQgDABgDAAQgCABgBAAIAAAAIgBgBQgCgBgBAAQg2gXABg2g");
	this.shape_6.setTransform(24.0998,79.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#330000").s().p("AgLAnIgDgBIgCgJIACAJQg2gXABg2QA4AkBQgPQgKAqg7AOIgBAAIgHABIABgDIgBADIgCABIAAAAgAgBAmIABgLIgBALg");
	this.shape_7.setTransform(24.0998,79.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCAVQgbgCgRgPQgOgKgCgOIBsAJIALABIAGABQgFALgPAJQgQAKgVAAIgIAAg");
	this.shape_8.setTransform(23.125,88.8466);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF3333").s().p("AgBAMQgNgBgIgJQgHgGgBgHIA9AGQgCAGgIAFQgIAGgKAAIgEAAg");
	this.shape_9.setTransform(22.925,88.2632);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCAVQgbgCgRgPQgOgKgCgOIBsAJIALABIAGABQgFALgPAJQgQAKgVAAIgIAAgAgYgDQAIAIANABQANACAJgHQAIgEACgIIg9gGQABAIAHAGg");
	this.shape_10.setTransform(23.125,88.8466);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_4},{t:this.shape_1},{t:this.shape},{t:this.shape_3}]},3).to({state:[{t:this.shape_2},{t:this.shape_4},{t:this.shape_1},{t:this.shape},{t:this.shape_3}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_7},{t:this.shape_9},{t:this.shape_5},{t:this.shape_6}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_10},{t:this.shape_7},{t:this.shape_9},{t:this.shape_5},{t:this.shape_6}]},1).to({state:[{t:this.shape_2},{t:this.shape_4},{t:this.shape_1},{t:this.shape},{t:this.shape_3}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).wait(1));

	// מתחת_לפה
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7E7DA").s().p("AgbBVQifgLgkiFQA1ALAngmQBDAkBEgTQBHBhCSAJQhMAyh9AAQgWAAgagCg");
	this.shape_11.setTransform(30.35,84.8175);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(30));

	// עיניים
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABvA+QgUgIgGgYQgGgYALgZQAMgaAVgMQAWgMATAIQAUAIAGAZQAGAYgMAZQgLAZgWANQgMAHgMAAQgIAAgIgEgACVglQgKAFgFAMQgGAMADAKQADAMAJADQAJAEAKgFQAKgGAGgLQAFgMgDgLQgDgLgJgEIgHgCQgGAAgGAEgAigAyQgRgCgJgSQgIgQAGgUQAFgXAPgPQAQgNARADQARABAIARQAIARgGAWQgFAWgPANQgOAMgOAAIgEAAgAiRgiQgHAHgCAKQgDALAEAGQAEAIAHAAQAJACAHgHQAIgFACgKQACgLgEgHQgDgJgIAAIgCgBQgHAAgHAGg");
	this.shape_12.setTransform(29.7365,64.8912);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACDAdQgJgEgDgLQgDgLAFgLQAFgMALgGQAKgFAJADQAJAEADAMQACALgFALQgFAMgKAFQgGADgFAAQgEAAgEgBgAiaAUQgIAAgEgJQgDgHADgKQACgKAHgGQAIgHAIABQAHABAEAIQAEAIgDAKQgCAKgHAGQgGAFgHAAIgDAAg");
	this.shape_13.setTransform(30.9724,63.7412);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FC7E1A").s().p("AigAcQgIgBgHgDQgHgCgDgDQgDgCAAgDQAAgGANgFQANgDASAAQASAAANADQANAFAAAGQAAAGgNAEIgIADIgKABIgNABIgQgBgACCAaQgOgCgMgGIgIgGQgGgGAAgGQAAgMAOgIQAPgIAVAAQAUAAAPAIQAOAIAAAMQAAAKgOAIIgCABIgMAFQgJACgMAAIgKAAg");
	this.shape_14.setTransform(31.05,58.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ACDAaQgJgEgDgLQgDgLAFgLQAEgIAFgFIAKAAQAMAAAKgCQAEAEACAHQACALgFALQgFAMgKAFQgGADgFAAQgEAAgEgBgAiaARQgIAAgEgJQgDgHADgKQABgIAFgFIARABIANgBQAEAIgDAKQgCAKgHAGQgGAFgHAAIgDAAg");
	this.shape_15.setTransform(30.9724,64.0342);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABvA1QgUgIgGgZQgGgXALgZQAIgRALgLIAJAGQALAGAOACQgGAFgDAIQgGAMADALQADAKAJAEQAJAEAKgGQAKgFAGgLQAFgMgDgLQgCgHgDgEIALgFIAEALQAGAYgMAZQgLAagWAMQgMAIgMAAQgIAAgIgEgAigApQgRgCgJgSQgIgRAGgUQAEgTAMgOQADADAHACQAHADAIABQgFAFgCAIQgDALAEAHQAEAJAHAAQAJAAAHgFQAIgGACgLQACgKgEgIIAKgBQAFAPgFAVQgFAUgPAOQgOAMgOAAIgEAAg");
	this.shape_16.setTransform(29.7365,65.8012);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABvAoQgUgIgGgYQgEgPAEgRQAUAEAZAAIABAAIAAABQADAMAJADQAJAEAKgFQAKgGAGgMIABgBIANgEQgCAOgGAOQgLAYgWANQgMAHgMAAQgIAAgIgEgAigAcQgRgCgJgSQgIgPAGgVIAFgPQADAFAHAEQAIAEAKACQAAAEACADQAEAIAHAAQAJACAHgHQAHgFACgIIAGgDIAGgDQAAAJgDAKQgFAVgPANQgOANgOAAIgEgBg");
	this.shape_17.setTransform(29.7337,67.0762);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACEANQgJgEgDgKIAAgCQAaAAAVgEIgBACQgFALgKAFQgGAEgFAAQgEAAgEgCgAiZAEQgIAAgEgIQgBgDAAgEIANABQAOAAALgEQgDAJgGAFQgGAEgHAAIgDAAg");
	this.shape_18.setTransform(30.875,65.3092);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FC7E1A").s().p("AByAtQgZAAgUgEIgRgEQgagHAAgKQAAgLAagHQASgEAXgCQgFgFAAgHQAAgMAOgHQAPgJAUABQAVgBAOAJQAPAHAAAMQAAALgMAGIABABQAaAHAAALQAAAKgaAHIgNADQgVAFgaAAIgCAAgAiqAlQgKgCgIgFQgIgDgDgFQgCgEAAgEQAAgIALgGIAAgBQAAgGANgFQANgEASAAQASAAANAEQANAFAAAGQAAAFgNAFIACAFQAAAIgIAGIgFACIgGADQgLAFgOAAIgNgBg");
	this.shape_19.setTransform(31.275,60.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AB3AYQgQgGgHgSQATAHAaAAQAXAAATgGQgKAMgNAIQgNAHgLAAQgJAAgIgEgAiYAMQgRgCgJgRQgEgJAAgLQADAHAHAGQAPAMAUAAQAPAAALgGIgJAIQgNANgOAAIgFgBg");
	this.shape_20.setTransform(28.875,68.6762);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FC7E1A").s().p("ABMA8IgKgFQgXgMAAgQQABgHAFgHQgSgGAAgIQAAgLAZgHQASgFAXgCQgFgFAAgHQAAgMAOgHQAPgJAVABQAUgBAPAJQAOAHAAAMQAAALgMAHIABABQAaAHAAALQAAAGgOAGQAHAIgBAIQAAAQgWAMIgNAGQgSAFgYABQgZgBgUgGgAi/AsQgIgFgCgHQgFgHAAgJQAAgNAJgJIAAgBQAAgIALgHIAAgBQAAgGANgFQANgEASAAQASAAANAEQANAFAAAGQAAAGgMAFIABAFQAAAFgCACQADAIAAAIQAAARgOALIgIAHQgMAFgOAAQgVAAgOgMg");
	this.shape_21.setTransform(30.85,62.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FC7E1A").s().p("ABIBKQgTgHAAgLQAAgKAOgHQgVgLAAgQQABgHAFgGQgSgGAAgJQAAgLAZgHQASgFAXgCQgFgFAAgHQAAgMAOgHQAPgJAVABQAUgBAPAJQAOAHAAAMQAAALgMAHIABABQAaAHAAALQAAAHgOAGQAHAHgBAIQAAAQgWAMIgHADQAHAGAAAHQAAALgSAHQgTAHgaABQgagBgSgHgAjDA1QgNgIAAgLQAAgKAJgHQgEgHAAgJQAAgMAJgKIAAgBQAAgIALgHIAAgBQAAgGANgFQANgEASAAQASAAANAEQANAFAAAGQAAAGgMAFIABAFQAAAFgCADQADAIAAAHQAAAQgMALIABAGQAAALgOAIQgOAIgSAAQgUAAgNgIg");
	this.shape_22.setTransform(30.55,64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},3).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},15).wait(1));

	// ראש
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC7E1A").s().p("AiHDnQhaglgehQQgJi6CWiWQDMhWBqCOQB9DXiECjQhoAshaAAQhFAAg9gZg");
	this.shape_23.setTransform(33.6432,67.3837);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(30));

	// ידיים
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E87027").s().p("AhzD1IBZhUQA7hpBZg6IgIgZQgahTgBhfQAAhuAwgbICIBuQAODBhJCGQh9BYh9AgIgPBWIg+AqQgQg7AQgngAjNEhIAPhZIgzhHQgZhBgFhbIgCgpIBxDiIAVCDIgSAng");
	this.shape_24.setTransform(38.4553,123.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E87027").s().p("AhzD1IBZhUQA7hpBZg6QgihegBhtQAAhuAwgbICIBuQAODBhJCGQh9BYh9AgIgPBWIg+AqQgQg7AQgngAjNEhIAPhZIgzhHQgehPgCh2IBxDiIAVCDIgSAng");
	this.shape_25.setTransform(38.4553,123.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E87027").s().p("AjsEjIgSAGQAAgPABgOIgJgMIAkhUIgfhRQgKhUAchyIA1D3IgEAoIBEglQBThWBlgkQgKhiAbhqQAbhrA1gOIBoCNQgjC9hoBxQiOA2iBAAIgkBPIgXAIIgUAZg");
	this.shape_26.setTransform(37.675,120.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E87027").s().p("AkMEEIgTAEQACgQADgNIgHgOIAvhNIgThVQABhTAshvIASD8IgJAoIBJgbQBdhLBqgVQADhiAphmQAqhlA3gIIBUCbQg9C2h3BhQiVAih/gTIgvBLIgYAEIgXAXg");
	this.shape_27.setTransform(34.425,119.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E87027").s().p("AkkDhIgTABQAEgPAFgNIgFgOIA5hGIgIhXQANhSA6hoIgQD8IgOAmIBLgRQBng9BsgHQAQhhA3hfQA3hfA3AAIA+ClQhVCsiCBRQiYANh9gkIg3BDIgZACIgaATg");
	this.shape_28.setTransform(31.2,118.1499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},3).to({state:[{t:this.shape_26}]},3).to({state:[{t:this.shape_27}]},3).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_25}]},14).wait(1));

	// חלק_אחורי_של_הרגל
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D25F26").s().p("AiaDVQlZorL5CkQAFB2gnBuQg7B+i/Apg");
	this.shape_29.setTransform(71.1913,171.9822);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D25F26").s().p("AiaDVQgegxgWgrQjjnBK3CWQAFB2goBuQgSAoggAfQhFBEiDAcg");
	this.shape_30.setTransform(71.2009,171.9859);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_29}]},3).to({state:[{t:this.shape_29}]},3).to({state:[{t:this.shape_29}]},3).to({state:[{t:this.shape_30}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(9).to({_off:true},20).wait(1));

	// מרכז_גוף
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7E7DA").s().p("AhUG7QiJiHBKi1QhnhrAPjnQAIh9AriiQB0BKDphaQAhCfASCQQA2GwhTEmIgSAAQhvAAiOhIg");
	this.shape_31.setTransform(36.859,141.4001);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7E7DA").s().p("AhTG7QiKiHBKi1QifijB7nOQB0BKDphaQCEJ+hvGHIgSAAQhvAAiNhIg");
	this.shape_32.setTransform(36.8396,141.4001);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7E7DA").s().p("AhTG7IgQgQQh1iCBFiqQifijB7nOQB0BKDphaQB2I5hLF0QgKAtgMArIgSAAQhvAAiNhIg");
	this.shape_33.setTransform(36.8418,141.4001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31}]}).to({state:[{t:this.shape_32}]},3).to({state:[{t:this.shape_32}]},3).to({state:[{t:this.shape_32}]},3).to({state:[{t:this.shape_33}]},20).wait(1));

	// גוף
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D25F26").s().p("AgXIAQjIglheg5Qheg6ACh1QAChTA6hEQhAirgOiBQgVjLBmhiQANAOB4ACQB4ACBGggQAxA5A3AjQBHAsBPAKQEHE3hSE3IABALIAAACQAECEh5BQQhSA2h3AAQg4AAg+gMg");
	this.shape_34.setTransform(54.2228,141.1626);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D25F26").s().p("AgXIAQjIglheg5Qheg6ACh1QAChTA6hEQikm4CnihQANAOB4ACQB4ACBGggQBvCBCPARQEHE3hSE3IABALIAAACQAECEh5BQQhSA2h3AAQg4AAg+gMg");
	this.shape_35.setTransform(54.2221,141.1626);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D25F26").s().p("AgXIAQi0ghhegyIgUgLQheg6ACh1QAChTA6hEQikm4CnihQANAOB4ACQB4ACBGggQBvCBCPARQEHE3hSE3IABALIAAACQADBlhGBGQgVAWgdATQhSA2h3AAQg4AAg+gMg");
	this.shape_36.setTransform(54.2221,141.1626);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},3).to({state:[{t:this.shape_35}]},3).to({state:[{t:this.shape_35}]},3).to({state:[{t:this.shape_36}]},20).wait(1));

	// נעליים
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#882F0D").s().p("AAaBPQAChDA3gMQACABBjALQAyAFBNgBQibAag1AnQgRAEgRAAQgVAAgWgGgAk2gBQAPhdCKAMQATADA1AXQA0AYApALIiIADQhBAYg4AAQggAAgdgHg");
	this.shape_37.setTransform(38.925,191.6944);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#882F0D").s().p("AAiBGQgGhDA2gSQACACBkgBQAyAABMgKQiXAqgwAtQgZAIgaAAQgNAAgNgBgAk1AbQAFhdCKgEQATABA3ARQA3ASApAGIiGATQhMAmhFAAQgRAAgRgCg");
	this.shape_38.setTransform(42.425,192.1447);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#882F0D").s().p("AAcBOQAAhEA3gMQACACBjAIQAyAFBNgDQiaAcg1AoQgSAFgTAAQgTAAgUgFgAk2ACQAOhcCKAJQASADA1AXQA1AXApAKIiIAGQhCAZg5AAQgeAAgcgHg");
	this.shape_39.setTransform(40.775,191.6478);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#882F0D").s().p("AAlBDQgJhDA1gUQACACBkgEQAygCBMgMQiVAugwAvQgaAKgfAAIgSAAgAk0AkQACheCKgIQASAAA3AQQA5APApAFIiGAYQhPArhIAAIgagBg");
	this.shape_40.setTransform(43.3,192.0944);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#882F0D").s().p("AAcBNQAAhDA3gNQABACBkAHQAyAEBNgDQiaAdg0ApQgTAFgUAAQgSAAgUgFgAk2AEQANhcCKAIQASADA1AWQA2AXApAJIiIAHQhDAbg7AAQgcAAgbgHg");
	this.shape_41.setTransform(40.925,191.7335);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#882F0D").s().p("AAcBNQAAhDA3gNQABACBkAHQAyAEBNgDQiaAdg0ApQgTAFgUAAQgSAAgUgFgAk2AEQAJg/BFgQQAegHArACIASAFQAUAGAhAOQA2AXApAJIiIAHQhDAag7AAQgcAAgbgGg");
	this.shape_42.setTransform(40.925,191.736);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37}]}).to({state:[{t:this.shape_37}]},3).to({state:[{t:this.shape_38}]},3).to({state:[{t:this.shape_39}]},3).to({state:[{t:this.shape_40}]},2).to({state:[{t:this.shape_41}]},2).to({state:[{t:this.shape_42}]},16).wait(1));

	// זנב
	this.instance_6 = new lib.CachedBmp_51();
	this.instance_6.setTransform(47.8,42.7,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_52();
	this.instance_7.setTransform(48.5,42.75,0.5,0.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B84C16").s().p("AAYCPIgZhDIgDgGQgvh8ABglQAAgpAOgWQAFgHAFgDQAEgBAFAAQAVgBAPAIQARAIAIAVQAHAPABAYIgBAZQgDAYgIAQQgDAGgDADQgGAFgIAAQgIABgFgCIgDgCIgDAAIgCgDQADAIAHAeIALA5IAMBCIAAAQIAAACIgBAEQgCAAgFgXg");
	this.shape_43.setTransform(93.899,93.3739);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CF5B25").s().p("AASCOQgHgggDgIIACAEIADAAIAEACQAEACAIgBQAIgBAGgFQAEgCADgHQAIgPACgYIABgaQgBgYgHgOQgIgUgQgJQgPgIgVACQgFgBgFACQgEACgGAIQgNAVgBApQgBAkAvB+QgpgNgmgqQg1g6gPhRQgQhSAfg4QAfg5A7ABQA7ACA0A6QA2A6AQBRQAPBSgfA4QgeA5g8gBQgIAAAAACIgMg4g");
	this.shape_44.setTransform(92.9332,81.3491);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F27922").s().p("ACoIFQhEjCiikkQiikigphsQgphtBdg4QBdg4B4AzQB5A0BNCBQBNCAAEB/QADB+hYAcQg3ASg7gHIgLhBQAAgCAIAAQA8ABAeg5QAfg5gPhRQgQhSg2g7Qg0g6g8gBQg6gBgfA4QgfA5AQBSQAPBRA1A6QAlArAqAMIACAGIAaBCQAIAhAAgOIAAgCQB3HigMAAQgDAAgQgtg");
	this.shape_45.setTransform(89.0438,101.3919);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B74C16").s().p("ABlKcIAAAAIAAAAIAAAAgAkchiQiMkBCDjNQEHjrEcEYQD7IRligRQEWJ4lIAnQgBgEmAr6gAiYpoQhdA4ApBtQApBsCiEjQCiEjBEDCQBEDCicp2IAAgQQA7AHA3gSQBYgcgDh/QgEh/hNiAQhNiBh5g0Qg6gYgyAAQg4AAgxAdg");
	this.shape_46.setTransform(82.9405,109.7765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},7).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,119.5,200.1);


(lib.tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_57();
	this.instance.setTransform(-40.9,1.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tree, new cjs.Rectangle(-40.9,1.3,1119,716.5), null);


(lib.time = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("AjSEHQgGgFgEgFQhXhTAAh3QAAh1BXhUQBWhUB6AAQB6AABWBUQBXBUAAB1QAAB0hTBTQgCACgCABQhWBUh6AAQhzAAhThKIhNA/Alui3QAQiNCNgMADblKQCIARAMCRADID6IBHBEAAFiWIAADTIBzAA");
	this.shape.setTransform(-330.325,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.time, new cjs.Rectangle(-370.5,-27,80.39999999999998,74.4), null);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6B4834").ss(8,1,1).p("AtICZQAmk4FCgbAH1isQE4AlAcFC");
	this.shape.setTransform(84.05,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6B4834").ss(12,1,1).p("AApm+IAAHTIEHAAAnGHVQgMgKgLgLQjGi5AAkHQAAkGDGi5QDGi6EXAAQEYAADGC6QDGC5AAEGQAAEBi9C3ICiCXAnGHVIiwCMAHnG4QgEAEgFAEQjGC6kYAAQkHAAi/il");
	this.shape_1.setTransform(81.15,86.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-4,-4,176.1,159.5), null);


(lib.strattree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_58();
	this.instance.setTransform(-40.9,1.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.strattree, new cjs.Rectangle(-40.9,1.3,1119,716.5), null);


(lib.stratbrunch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2E130C").ss(3,1,1).p("EBAOgBcQwsBI1ziUQlejYr6haQiXABBKBMIFXBvIgJBJQitAzp8g6Qzvjq1iA5QrTAAqvCMQh4A4CnAoQSFgjMyA9QAOABAPABQAGAAAFABQBAAFA+AFQF5AiErA4QCTAbCAAgQBmAbBmAYQH+B3IBBCQAFABAFABQBjAPAuACQASACASACQACAAACAAQACABABAAQApAEApAEQAOACAQACQAKAAAKABQBsAKBsAIQBqAIBpAFQAvgBAugCQCKgECCgBQECgEDkAHQCxAFCfALIAiADQBLAFBHAHIAGABQAIABAJABQa+CqgxhS");
	this.shape.setTransform(411.9339,47.4409,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2E130C").ss(1,1,1).p("AAEEPIAAgEIAAgCIAAgBIgBhUIAAgHIgDi5IAAgFIAAgIIgCiPIAAgxIgBg1");
	this.shape_1.setTransform(823.35,29.7,1,1,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C6851").s().p("AQSDSIgdAAQjcgFkkgpQkJgljohAIh2gjQgxgPiQgxQh5gphKgVQlLhei2ADQi2ACgngGQgngFAbgGIgCACQAMgDAqgDQA3gFBBAEQAqACBMAIQC0ASBmATIAIACQCBAYC6A+QEiBfATAFQB9AmCLAdQCXAgClAXQB4APCHAMQCjANC3AIIBLADQBBACgWAHQgOAEhRAAIh2gCg");
	this.shape_2.setTransform(324.2437,53.7371,1,1,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#875A3B").s().p("EAhHAEoIjgABQjRAAAbgKQAbgKC1gJIDFgJIdegJQARAAAfABQAWACAFAFIAAAJIAAAFQgBAMgUACIoIAlQi1ANjtAAQmfAApKgogEA/vAELIAAgJQACACAAADIgCAEgEA/vAECIAAAAgEAhaADSQjKAChugIQhugJhCgQQhCgPgxgDQgzgEiFACQiGACAmgMQAmgLBWgHQBWgIATgDQAQgDAVABIAlAFIAMACQALACAHAEIAGAEQADADAJAAIAWgBQAlgBA6AEIBeAHIBXABIEIAAIAOgBIGWALQE1AHHlgNQHkgMBHACQBHABgZANQgaAMhBAMQhBAMgoABIzLANQgjgDgdgFQgMgDgsgBQgtgBgGAEQgHAEA+ALgAIOC1QmegImEg+QmHg9AggDQAfgCCGARQCGARAGgCQAJgCATACICqAUQC5AWBOAGQCZAOC1AEQCMADDDgBQAFAEANAAICqAAIBpgBQAngCApgEIg8AQQhNASghABQjJAFiUAAIiAgBgASeB2QA1gHAWAAQg6AIhEAEIAzgFgEAgzABjQhWACAEgKQAEgJAYgGQAYgGAHgDQAJgDAVAAIOlAAQAXAAASABQASABBGAAQBHAAAlAEQAmADkIAaQjtALjuAAQjuAAjugLgACjBcQh1gChJgDQhogEhWgHQhbgHhygPQhZgLh3gVIjOgiQmVhFlbglQhmgTi0gRQhMgIgqgDQhBgDg3AEQgqADgMADIACgBQjfguidAEQidAEhagDQhbgEAXgHQAWgHAjgNQAjgOBEACQBbACDGAAQC9AABkADQCxAFDTAVQCXAPDqAdQELAiCVAZIChAbQBmASA7AJQBIAMCTAUQBsAOAoAEQA9AFB5AEIAIABQA7AGB6AAIA1AAQCoAECyABQDhACGwgEQG9gDDUABQAiAAAmACQAmACAvAUQAuAUgsAMQgsALgnAGQgoAFgmAAIkBADIhSAAQABgFgEgDQgCgCgHgBQglgIgxAIIg/ANQkpACisAAIhvAAQlJAAkPgFgAWcgOIscgDQhvAAg4gCQhdgDhJgKIitgaQidgYgWgKQgXgJC7ATIDRAUQC/AKFjgBQF6gCCqAHQAWAAAQAEIBxARQAiALAeAIIgeABIgfAAQhSAAg6gHgAUNhqQifhMgOgCIhKgHQgtgFgdgHQgPgEg6gTQhegehhgMIg/gIIhegdQhrgiAvAFQAuAEBLAPQBLAOAWAGIBfAaQA4AQAoAJIBaARQA4AKAhAIIA9ARIA8AQQAuAMARAHIAqAVIAbALQAQAHAOALQAOALAKAVQAIAQgIAAQgJgHhUgogAVKhFQgHgCgMgHIAIADIARAIIgGgCgEg+ZgB0ICXgsQAqgMA8gJQBIgLBcgHQA3gFBvgEQEmgOBsAAQBsAAArgJQArgJgtAZQgtAYgJAEQgHADgLABIgUABQhpgCiCADIjqAJQiwAHhXAMQhPAKhIATQgbAGg/AJQgeADgfAGIgaAEIgtAHIgWADQgQAABlgeg");
	this.shape_3.setTransform(415.4123,58.1525,1,1,0,180,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B2E1B").s().p("EAqKAFAIkegYIgGAAQhHgHhLgGIgigDIh9gLIhjgGQjRgQBPANQATACgBACIgRAAIgNgBQiGgDiQAAIgBAAIAAAAIihABIgQAAIgDgBQghgLiIAMIhgAGIhdADQhpgGhqgHIgIgCQhFgOhpgBIgigBIgUgCIgegDIhSgJQAIgPgHAKIgEAFIgEgBIgkgEQgugChjgPIgKgBQisgagYgGIgdgGQACgBAIAAIAIAAInShOQjHgmiXgfQhmgXhmgaQiAghiTgbQgBgDAQAAQiGgdiVgVQiggWhMgGQhMgHhggCIh+gKIgDgCIgBAAIgHABIgdgDQgNgCgdgDIgxgHQgTgDgDgCQgDgDgCAAQgngCgdgGQgdgGgWgGIglgLQgQgDglgEIhhgDQgxgDgMgCIAJAAIABAAQARgBgaABIgCAAIgDAAQgQgBgPACQgXABgygEQgDADhdAEIiCAEQglABBwgQQBugRABgBQABgCAQgBQARgCgBABIHMARQEoAJk4gXQk6gXgfACIg0ACQgVABAEgBIAQgFQAMgCAOgBQAZgDAWAAQBfAABgADQBNACA1AFIBiAKQAtAEBSARIAVACIARADQALABAPAEQASAFASAEIAUADQBWACBFAIQBEAIAgAJIAsALQAJABAEACIAcAIQArAKAVAGIDhBEIBeAdQBSAIC4AZQDoA+EJAlQEkAqDbAEIAdABIE6ArQBsANgKACIAZgBIAAgBIAmABIAhABIAWACQG1gHB+ANQB9ALAKADIAUAEIAiAGQAUAFDBAWQLPAtALAGQALAGGkAZIJyAlQDMANAiABIABAAQhxgLpEgwQrSg8pbg8Qpcg7VdBfQVdBeA7gFQAjgDCbAGIA6ADIAAAIQgKADALBQIAAABIABADIgBAAIAAgDIAAADQgwAXg9AEIgRAAQigAAxihagAV8EFIAQAAIChgBIAAAAIABAAQCQAACGADIANABIARAAQgEAHjBAAQj4AAgpgKgAPiEOQhggBhCgMQBqAHBpAGIBdgDQhAADg3AAIgXAAgARwELIAAAAgAdiEIIAAAAgANAEBIAAAAgAHkDhIBSAJQgvgEgnAEIAEgJgAHfDiIgCgCIAEABIgCACIAAgBgAHkDhIAAAAgA+li4QgdgBgcgHIgEgBIB+AKIhBgBgA/ijBIAAAAgEg11gD0IiPgGIgsgCIhJgDQgkgCgBABIgZADIjdgMIAagEIAggBIDAABIAJgCIAPAAQAMgBAeABQAeAAAqAEQAIABBSADQC6AAEDABQAIACBGgCIBsgKQh4AYgvgBQgLgBgIACQifAFhxAAQg9AAgvgBgASLj2QhBgJghgHQgigIgkAAQgkABghgCQgggDgYADQgSAEAEAAIgJABIgEABIgIACQgHAAgGgEQgIgHAEgDQAFgEAJgEQAJgEAIgBQAHgCADgCQACgCABgEIgBgVQgCgSgSgPQgSgQg2gnIAKABQARAGAtAXQBpA4AQAGIAAgBIAiACQAUABATAEQAUAEAQAJIANAGQABADATAIIAkAQQALAFgIgBIAQAEQAwANgRAAIgbgCgEg/xgD+IgHgDIgKgFIgBAAIgBgBIgBgBIgBAAIAAgBIgBAAIAAAAIAAgBIAAAAIgBgBIAAAAIAAgBIgBAAIAAAAIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAgCIAAgBIABAAIAAgCIAAAAIAAAAIABgBIAAgBIAAAAIAFgDIAHgFIAFgEIAAAAIABgBIABAAIABgBIABAAIADgCIABAAIAAgBIABAAIAAgBIABgBIAAAAIABAAIABAAIAAgBIATgDIgNAIIAAABIgBAAIAAABIAAAAIAAABIgBAAIgBAAIAAABIgBABIgBAAIAAAAIgCABIAAAAIAAAAIgBABIgBAAIAAABIgBAAIAAAAIgBABIgBAAIAAAAIgBABIgCABIgDACIgBABIAAABIAAAAIgBAAIAAAAIgBABIgCABIAAAAIgBABIAAAAIgBAAIgBABIAAAAIAAAAIgBABIAAAAIAAAAIAAACIAAABIAAACIAAABIAAAAIABABIAAAAIAAABIABAAIAAAAIABABIABAAIAAAAIAAABIABAAIAAABIAJALIABABIACACgEg/8gEHIAEADIgEgEg");
	this.shape_4.setTransform(413.125,41.2546,1,1,0,180,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AF8265").s().p("AQGExQlkgQiogcQingcBcABQBcAAC2AeISwgKIBTgBQBDgBBIADQBIACiKAQQiLAQkMAQQiGAHicAAQicAAiygHgEAqIAEGQhsgCgxgEIg4gGIgagGQg+gMAHgEQAGgDAtABQAsABAMACQAdAFAjADIAdACQAhACA9gBIK6gBQAlgCCZADQCZADiKAMQiKAMhHgHInyADIheAAIhmgBgAM/C0QgNAAgFgEIgCgCQgDgDADgFQACgEAFgCQAGgCAOAAQDKABAvgCIA5gCQBEgEA6gJQAhgFAdgGIAYgFIA/gNQAxgIAlAIQAHABACADQAEADgBAFIgBAAQgCAGgGABQgHADgTgCQgegCgnAFIhDANQhTARhNAIQgpAEgnABIhpABgAd9CzIhXgBIhegGQg6gFglABIgWABQgJAAgDgCIgGgFQgHgDgLgDQgMgEADgDQAEgFAwABQAvABBBAEIBnAHQAgACAtgBIEEAAQAMAABQgIQBPgHgiAOQgjAOhVAHIgOABgEAlmACoQCIgLDGgGIDUgHQBBgGBlgBICngCQBIgCBngIICugPQC1gNBwgFQBagEBIAKIABAxIgQgCQhxgOgiABIg7ABQhbABiFALIjfASQhoAGiBAEQhOACmkACIh1ABQkbAAB0gKgEAkiABaQhygDg8gKIgrgHIiXgdQgSgCg2gCQg3gDAtgHQAtgGAUgBQATgCAQADIBvAWQA7ALAVADQAyAHBIACQBOACB5ABIDuAAQBBAAAOAIQANAHg8ADIhGAEIi4AAIiygBgADGAqIg1AAQh6AAg7gFIgIgBQiFgNgbgKQgbgLBhAFQBgAGEsAEQEsAFJRgBIBkABQBaABgBAIQAAAHi7AEgAcKAkIgjgBIghgBQgngBgtgKQgegIgigMIgGgCQgagIgNgIQgVgQgMgGIgKgEIgIgGIgpglQglgiAoAWIA4AfIAhAVQARAMAJAFQANAGAgAKQAvAOATADQAbAFAiACQAXABAogBIAfABQARABAmgBQAmAAg1AMQgyAKgSAAIgDAAgAirgMQhGgMiygpQiTgjhbgOQhngQiWgIQiqgIhVgEIjfgPQjDgNDBgEQDAgDALgCQALgDBgAGICxAKQCqALBjAQQBRAMCQAiQCaAlAyAIQAyAIAUAEIBuAYQBZAThRAAQhTAAhHgLgAWigvIgsgmQgSgPgdgMQgSgIgkgMQhhgggegJQiJgqiTgbIhvgXQhhgVA7AHQA7AHAlADQAlACAPACQDpArDaBQQAzATAWAPQANAJAhAmQAiAmgEAFIgCAAQgHAAgigdgAVygdIgRgGIgCAAIgCgBIgRgIIgIgDIgNgHQgWgOghgPQgYgKg5gSIgsgNIgYgHIgJgBIhLgGQgpgFgfgJIgtgNIgsgOQg1gShAgKIgKgCQghgGgjgDIg2gGQgfgEgWgGQgrgLghgUQgggUgRgRQgRgRAhAQQAgAQAGABQAFABAPAHQAiAUA3AJIAkAEIA/AJQBhALBeAeQA6AUAPADQAdAIAtAFIBKAHQAOABCfBNQBUAoAJAGIgFgBgEg/2gBEQAHgRAPgLQAOgKATgJQASgKAkgBIAYgCQARgBAUgFIBHgOQA8gMAqgDQArgChjAZIhsAbQgVAGgWACIgmACQgfADgWATQgKAIgIAEIgVAMIgFABQgGAAAFgMgEg6egBeQBigVAMAAQG8glFmAlQATgBASABQARABBXgCQBXgChSAKQhRALg6ADIssAAQhWANg7ADIgPABQgcAABRgRgEgiwgDYQnxgNk3AGQhEABiCANQiCAMA3gMQA4gLAvgHIA4gJQAogHAzgDQAigCA7ABQFKAAGgAJQDsAFH+APIAzABIBvADQBmADAGAHQAFAGi/AAQjAAAqGgSg");
	this.shape_5.setTransform(414.1305,61.3004,1,1,0,180,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6C4027").s().p("EAmJAFoIgRgCIEeAXQStBhBmgGQA9gEAwgYIAAAEQAQAbisAAQllAAyMhzgEA5lAGNQgiAAjMgNIpygmQmkgZgLgFQgLgGrPgtQjBgXgUgEIgigHIgUgDQgKgDh9gMQh+gMm1AGIgWgCIghgBIgmAAIAAAAIgZABQAKgBhsgNIk6gsQDAAEAVgGQAWgHhBgCIhLgDQi3gIiigNQiHgMh4gPQilgXiXggQiLgdh+glQgTgFkihgQi6g+iBgYIgIgCQFbAlGVBEIDOAkQB3AUBZAMQByAOBbAIQBWAHBnADQBKAEB1ACQE8AGGLgBQCsAAEpgDIgYAFQgdAGghAEQgWAAg1AHIgzAGIg5ACQgvACjKgBQgOAAgGACQgFADgCADQgDAFADADIACACQjDACiMgEQi1gEiZgNQhOgHi5gUIiqgVQgTgCgJACQgGACiGgRQiGgQgfACQggACGHA8QGEA+GeAJQC2AEEngJQAhAABNgTIA8gPQBNgIBTgRIBDgMQAngFAeACQATACAHgCQAGgCACgGIABAAIBSgBIEBgCQAmAAAogGQAngFAsgMQAsgLgugUQgvgUgmgCQgmgDgiAAQjUAAm9ADQmwAEjhgCQiygCiogDIO/AAQC7gFAAgHQABgIhagBIhkgBQpRABksgFQksgEhggGQhhgFAbALQAbAKCFANQh5gFg9gGQgogDhsgPQiTgThIgMQg7gJhmgSIihgcQiVgYkLgjQjqgdiXgPQjTgUixgGQhkgDi9AAQjGABhbgCQhEgDgjAOQgjAOgWAHQgXAHBbADQBaAECdgFQCdgDDfAtQgbAGAnAFQAnAGC2gCQC2gDFLBeQBKAVB5ApQCQAyAxAPIB3AiQi4gYhSgIIhegdIjhhEQgVgGgrgKIgcgHQgEgCgJgCIgsgLQgggJhEgIQhFgIhWgBIgUgEQgSgDgSgFQgPgFgLAAIgRgDIgVgDQhSgQgtgFIhigJQg1gFhNgDQhggDhfAAQgWABgZACQgOABgMADIgQAEQgEACAVgBIA0gCQAfgCE6AXQE4AXkogKInMgQQABgBgRACQgQABgBABQgBAChuAQQhwAQAlgBICCgEQBdgEADgCQAyADAXgBQAPgBAQAAIADAAIACAAQAaAAgRABIgBAAIgJAAQAMACAxACIBhAEQAlAEAQADIAlAKQAWAHAdAGQAdAFAnACQACAAADADQADACATAEIAxAGQAdADANADQsyg9yFAjQingoB4g4QKviMLTAAQVig5TvDqQJ8A6CtgzIAJhJIlXhvQhKhMCXgBQL6BaFeDYQVzCUQshIIABA0QhIgKhaAEQhwAFi1ANIiuAPQhnAIhIACIinACQhlABhBAFIjUAHQjGAGiIAMQiJALGlgCQGkgDBOgCQCBgEBogGIDfgSQCFgKBbgBIA7gBQAigBBxANIAQACIACCPQgFgGgWgBQgfgCgRABI9eAIIjFAJQi1AJgbALQgbAKDRgBIDggBQOZA/HygkIIIglQAUgBABgNIADC6Ig6gDQibgGgjADQg7AF1dhfQ1dhfJcA8QJbA7LSA8QJEAxBxAKIgBAAgAIQB6QCoAdFkAPQFkAOEMgOQEMgQCLgQQCKgQhIgCQhIgChDAAIhTABIywAKQi2gehcAAIgGAAQhQAAChAbgEAmvABpIAaAGIA4AGQAxAEBsACQBCACCCgBIHygDQBHAHCKgMQCKgMiZgDQiZgDglACIq6ACQg9AAghgCIgdgCITLgNQAoAABBgMQBBgMAagNQAZgMhHgCQhHgBnkAMQnlAMk1gHImWgLQBVgHAjgOQAigOhPAIQhQAHgMAAIkEAAQgtABgggCIhngGQhBgFgvgBQgwAAgEAEQgDADAMAEIgMgCIglgEQgVgBgQACQgTAEhWAIQhWAGgmAMQgmALCGgCQCFgBAzADQAxADBCAQQBCAQBuAIQBuAJDKgCgEAwNgAHQEIgagmgEQglgEhHABQhGAAgSgBQgSgCgXAAIulAAQgVAAgJADQgHADgYAGQgYAGgEAKQgEAJBWgBQHcAUHbgUgAe3h2QgUABgtAGQgtAHA3ADQA2ACASACICXAdIArAHQA8AKByADQB5ACDxgBIBGgDQA8gEgNgHQgOgIhBAAIjuAAQh5gBhOgCQhIgCgygHQgVgDg7gLIhvgWQgJgCgLAAIgPABgAbchoIAhABIAjABQARABA2gLQA1gMgmAAQgmABgRgBIgfgBQgoABgXgBQgigCgbgFQgTgDgvgPQgggKgNgGQgJgFgRgMIghgUIg4ggQgogWAlAiIApAlIAIAGIAKAEQAMAHAVAPQANAIAaAJIAGACIhxgQQgQgEgWgBQiqgGl6ABQljACi/gKIjRgUQi7gUAXAKQAVAKCeAXICtAbQBJAKBdADQA4ACBvAAIMcADQBFAIBmgCIAeAAQAtAKAnABgAyNlGQgLACjAAEQjBADDDANIDfAPQBVAFCqAHQCWAJBnAPQBbAOCTAjQCyAqBGALQBHALBSAAQBSAAhZgTIhugYQgUgEgygIQgygIiagkQiQgjhRgMQhjgQiqgLIixgKQhEgEgZAAIgOABgAMdmUIBvAXQCTAbCJAqQAeAJBhAgQAkAMASAIQAdAMASAPIAsAmQAnAiAEgFQAEgFgigmQghgmgNgJQgWgPgzgTQjahQjpgrQgPgCglgCQglgDg7gHIgUgBQgPAABJAPgAOMk+IAsAOIAtANQAfAJApAFIBLAGIAJABIAYAHIAsANQA5ASAYALQAhAOAWAOIANAIQAMAHAHACIAGABIACABIACAAIARAGIAFABQAIAAgIgQQgKgUgOgLQgOgMgQgGIgbgLIgqgVQgRgHgugMIg8gRIg9gQQghgIg4gLIhagRQgogIg4gQIhfgaQgWgGhLgOQhLgPgugEQgvgFBrAiIBeAdIgkgFQg3gJgigUQgPgHgFgBQgGgBgggQQghgQARARQARARAgAUQAhAVArAKQAWAGAfAEIA2AGQAjAEAhAFQA2AoASAQQASAPACASIABAVQgBADgCACQgDADgHABQgIACgJAEQgJAEgFADQgEAEAIAHQAGADAHAAIAIgBIAEgCIAJgBQgEAAASgDQAYgEAgADQAhACAkAAQAkgBAiAIQAhAIBBAIQBBAJhFgUIgQgEQAIABgLgEIgkgRQgTgIgBgCIgNgHQgQgJgUgEQgTgEgUgBIgigCIAAABQgQgFhpg4QgtgYgRgFQBAAKA1ASgEg5tgDCIBJAEIAsACICPAFQCJAFDzgJQAIgBALABQAvABB4gZIhsAKQhGACgIgBQkDgCi6ABQhSgDgIgCQgqgEgeAAQgegBgMABIgPABIgJABIjAAAIggAAQAfgFAegEQA/gIAbgHQBIgSBPgLQBXgLCwgIIDqgIQCCgDBpABIAUAAQALgBAHgEQAJgDAtgZQAtgZgrAJQgrAJhsABQhsAAkmANQhvAFg3AEQhcAHhIALQg8AKgqAMIiXAsQiFAnBGgMIAtgIIDdAMIAZgCIAGAAIAfAAgEg/jgC+IgCgDIgBAAIgJgMIAAAAIgBgBIAAAAIAAgBIgBAAIgBAAIAAgBIgBAAIAAAAIAAgBIgBAAIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIABAAIAAgBIAAAAIABAAIABAAIAAgBIABgBIAAAAIACgBIABAAIAAAAIABgBIAAAAIAAAAIABgBIADgCIACgBIABgBIAAAAIABgBIABAAIAAgBIABAAIAAAAIABgBIABAAIAAgBIAAAAIACAAIAAAAIABgBIABgBIAAAAIABgBIABAAIAAAAIAAgBIAAAAIABgBIAAAAIANgIIgTADIAAAAIgBAAIgBABIAAAAIgBABIAAAAIgBAAIAAABIgBAAIgDACIgBABIgBAAIgBABIgBAAIAAAAIgFAEIgHAFIgFAEIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAACIAAACIAAABIAAABIAAACIABAAIAAACIAAAAIAAABIABAAIAAABIAAAAIABAAIAAABIAAAAIAAABIABAAIAAAAIABABIABAAIABABIABAAIAKAFIAHAEIACACgEg6JgEuQgqADg8AMIhHAOQgUAFgRABIgYACQgkABgSAKQgTAJgOAKQgPALgHARQgHARANgGIAVgMQAIgEAKgIQAWgSAfgEIAmgCQAWgCAVgGIBsgbQBagXgbAAIgHAAgEg4agD+QgMAAhiAVQhhAUA7gEQA7gDBWgNIMsAAQA6gDBRgLQBSgKhXACQhXACgRgBQgSgBgTABQizgSjJAAQjIAAjeASgEgiagFjQKGASDAAAQC/AAgFgGQgGgHhmgDIhvgDIgzgBQn+gPjsgFQmggJlKAAQg7gBgiACQgzADgoAIIg4AIQgvAHg4AMQg3ALCCgMQCCgMBEgCQBigBB1AAQD9AAFUAIgAduFGQABgCgTgDQhPgMDRAPIBjAGIB9AMQifgLixgFgATcFCQCIgLAhALIADABQiCABiKAEIBggGgAJ0EsIAiABQBpABBFAPIAIABQhsgIhsgKgAHtEeIAEgEQAHgKgIAPIgDgBgArVBOQCXAeDHAnIHSBNIgIAAQgIAAgCABIAdAGQAYAGCsAaQoBhCn+h3gA9Yh6QBgACBMAHQBMAHCgAWQCVAUCGAdQgQAAABADQkrg4l5gigA/hiFIAHAAIABAAIADABIgLgBgEg/wgDKIAAAAIAEADg");
	this.shape_6.setTransform(411.9339,47.4409,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stratbrunch, new cjs.Rectangle(-1.5,-1.5,826.9,97.9), null);


(lib.startSquirrel2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// שוונצים_באוזניים
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AEMAyIgDgZIAuheIgrB3IAogvIgmBXgAkzgQIArAxIgEAlgADuA3IAJhMIASAuIgbAeIAAAAgAkGAHIAQgwIAIBMIAAAAIgYgcgAkIAhgAk3hZIAxBgIgCAagAEJAZg");
	this.shape.setTransform(48.45,8.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// אוזניים
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#872E0C").s().p("AjwiKQBGBuAwCCQgdAKgcAhQg/iDACiYgAB7BhQAwiDBHhuQACCYhACDQgdgggcgKg");
	this.shape_1.setTransform(48.8,31.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF8720").s().p("AkKifIAEgjQByCAAyCwQgCAFhYBQQhmhtAYj1gAivCkQAcggAcgKQgviDhHhtQgCCXBACDgABiBuQgPhfC3i/QAaEkhZBFgAB/B0QAcAKAdAgQA/iDgCiXQhGBtgwCDg");
	this.shape_2.setTransform(48.4427,29.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// אף_ופה
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhRhBQBPAjBVgiQgWBDg9APQgYABgegeQgegfADgXgABTAuQhLAygIhLQgHBMhMg0");
	this.shape_3.setTransform(47.95,81.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330000").s().p("Ag2AMQgegeADgXQBPAjBUgiQgVBDg9APIAAAAQgYAAgegeg");
	this.shape_4.setTransform(47.9616,79.2254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_13
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8E8DB").s().p("AkYgQQCVgFAuheQBHA1BhgyQBEBuCCgOQg8B1jIAOIgkABQiuAAhbiEg");
	this.shape_5.setTransform(48.325,86.3944);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// עיניים
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AChA4QgSgGgHgVQgHgUAIgXQAIgXASgMQASgMATAGQARAGAIAVQAHAVgIAWQgIAXgSAMQgMAIgMAAQgGAAgHgCgAC9ggQgEAJAAAMQAAAMAEAJQAFAJAHAAQAGAAAFgJQAFgJAAgMQAAgMgFgJQgFgJgGAAQgHAAgFAJgAjFAyQgSgMgIgXQgIgWAHgVQAHgVASgGQATgGASAMQATAMAHAXQAIAXgHAUQgHAVgTAGQgGACgGAAQgMAAgMgIgAiuggQgFAJAAAMQAAAMAFAJQAFAJAGAAQAHAAAFgJQAFgJAAgMQAAgMgFgJQgFgJgHAAQgGAAgFAJg");
	this.shape_6.setTransform(47.15,64.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACrAVQgFgIAAgNQAAgMAFgJQAEgIAHgBQAHABAEAIQAFAJAAAMQAAANgFAIQgEAKgHgBQgHABgEgKgAjBAVQgEgIAAgNQAAgMAEgJQAFgIAHgBQAGABAFAIQAFAJAAAMQAAANgFAIQgFAKgGgBQgHABgFgKg");
	this.shape_7.setTransform(49.025,63.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// ראש
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF8720").s().p("AkbCWQglk8Djh9QBUgmBzAjQDWBrglFXQiTCciLAAQiPAAiJiig");
	this.shape_8.setTransform(48.0002,69.0803);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// יד_ימין
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E97027").s().p("AimBSIDPhUQioiHgIg0IBhglQCRA6BGCgQAtBkhYgGQh1ATh/AEQgHAtgZApIgrAgQgThLAmhGg");
	this.shape_9.setTransform(68.6806,113.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// יד_שמאל
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E97027").s().p("ACPDDQgZgpgHgtQh/gEh1gTQhYAGAthkQBGigCSg6IBgAkQgIA1ioCHIDQBUQAlBGgTBLg");
	this.shape_10.setTransform(26.8223,113.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// בטן
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8E8DB").s().p("AhgINQgiggg9gVQCHi+jVm4IEWl1IEEFfQjlERCaF9QgmAEgvA2QhtgzhgAsg");
	this.shape_11.setTransform(47.5,130.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// גוף_תחתון
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D25F26").s().p("AhXIMIgCgEQgJgYgXgSIgJgHQgcgVgmgIIgJgCQgsgHgjASIgEABQgWANgLAUIADAJQkpi6EDl+IFonLIFuHkQDsFkkWCvQgJgJgLgIQgngcg1AGQgzAFgiAfIgFADQgGAFgEAGQgNAPgFARIgCAFIACACQh1gdhKAfIAGgKg");
	this.shape_12.setTransform(47.7982,133.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#872E0C").s().p("AB3AvQgPgKgLgNIgBgCIABgFQAGgRAMgNQAFgHAGgFIAEgDQAjgfAzgFQA1gFAnAbQALAIAIAJIADAEQgEAdgbAYQgjAgg0AFIgOAAQgrAAgggWgAjaBAQgzgKgfgkQgPgQgHgOIgDgKQALgTAVgNIAFgCQAigRAtAGIAJACQAmAIAcAVIAJAHQAXATAJAXIACADIgHAKQgLAPgTALQgcAOghAAQgOAAgPgCg");
	this.shape_13.setTransform(48.2,184.5702);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// זנב
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B84C16").s().p("Ak2m8QEoiuCdBZQCdBZAAABQDnIYlmHMIltADQlDmeDNpOg");
	this.shape_14.setTransform(47.925,89.4191);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startSquirrel2, new cjs.Rectangle(0,0,95.6,191.5), null);


(lib.startSquirrel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// שוונצים_באוזניים
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AEMAyIgDgZIAuheIgrB3IAogvIgmBXgAkzgQIArAxIgEAlgADuA3IAJhMIASAuIgbAeIAAAAgAkGAHIAQgwIAIBMIAAAAIgYgcgAkIAhgAk3hZIAxBgIgCAagAEJAZg");
	this.shape.setTransform(48.45,8.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// אוזניים
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#872E0C").s().p("AjwiKQBGBuAwCCQgdAKgcAhQg/iDACiYgAB7BhQAwiDBHhuQACCYhACDQgdgggcgKg");
	this.shape_1.setTransform(48.8,31.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF8720").s().p("AkKifIAEgjQByCAAyCwQgCAFhYBQQhmhtAYj1gAivCkQAcggAcgKQgviDhHhtQgCCXBACDgABiBuQgPhfC3i/QAaEkhZBFgAB/B0QAcAKAdAgQA/iDgCiXQhGBtgwCDg");
	this.shape_2.setTransform(48.4427,29.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// אף_ופה
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhRhBQBPAjBVgiQgWBDg9APQgYABgegeQgegfADgXgABTAuQhLAygIhLQgHBMhMg0");
	this.shape_3.setTransform(47.95,81.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330000").s().p("Ag2AMQgegeADgXQBPAjBUgiQgVBDg9APIAAAAQgYAAgegeg");
	this.shape_4.setTransform(47.9616,79.2254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_13
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8E8DB").s().p("AkYgQQCVgFAuheQBHA1BhgyQBEBuCCgOQg8B1jIAOIgkABQiuAAhbiEg");
	this.shape_5.setTransform(48.325,86.3944);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// עיניים
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AChA4QgSgGgHgVQgHgUAIgXQAIgXASgMQASgMATAGQARAGAIAVQAHAVgIAWQgIAXgSAMQgMAIgMAAQgGAAgHgCgAC9ggQgEAJAAAMQAAAMAEAJQAFAJAHAAQAGAAAFgJQAFgJAAgMQAAgMgFgJQgFgJgGAAQgHAAgFAJgAjFAyQgSgMgIgXQgIgWAHgVQAHgVASgGQATgGASAMQATAMAHAXQAIAXgHAUQgHAVgTAGQgGACgGAAQgMAAgMgIgAiuggQgFAJAAAMQAAAMAFAJQAFAJAGAAQAHAAAFgJQAFgJAAgMQAAgMgFgJQgFgJgHAAQgGAAgFAJg");
	this.shape_6.setTransform(47.15,64.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACrAVQgFgIAAgNQAAgMAFgJQAEgIAHgBQAHABAEAIQAFAJAAAMQAAANgFAIQgEAKgHgBQgHABgEgKgAjBAVQgEgIAAgNQAAgMAEgJQAFgIAHgBQAGABAFAIQAFAJAAAMQAAANgFAIQgFAKgGgBQgHABgFgKg");
	this.shape_7.setTransform(49.025,63.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// ראש
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF8720").s().p("AkbCWQglk8Djh9QBUgmBzAjQDWBrglFXQiTCciLAAQiPAAiJiig");
	this.shape_8.setTransform(48.0002,69.0803);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// יד_ימין
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E97027").s().p("AimBSIDPhUQioiHgIg0IBhglQCRA6BGCgQAtBkhYgGQh1ATh/AEQgHAtgZApIgrAgQgThLAmhGg");
	this.shape_9.setTransform(68.6806,113.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// יד_שמאל
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E97027").s().p("ACPDDQgZgpgHgtQh/gEh1gTQhYAGAthkQBGigCSg6IBgAkQgIA1ioCHIDQBUQAlBGgTBLg");
	this.shape_10.setTransform(26.8223,113.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// בטן
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8E8DB").s().p("AhgINQgiggg9gVQCHi+jVm4IEWl1IEEFfQjlERCaF9QgmAEgvA2QhtgzhgAsg");
	this.shape_11.setTransform(47.5,130.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// גוף_תחתון
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D25F26").s().p("AhXIMIgCgEQgJgYgXgSIgJgHQgcgVgmgIIgJgCQgsgHgjASIgEABQgWANgLAUIADAJQkpi6EDl+IFonLIFuHkQDsFkkWCvQgJgJgLgIQgngcg1AGQgzAFgiAfIgFADQgGAFgEAGQgNAPgFARIgCAFIACACQh1gdhKAfIAGgKg");
	this.shape_12.setTransform(47.7982,133.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#872E0C").s().p("AB3AvQgPgKgLgNIgBgCIABgFQAGgRAMgNQAFgHAGgFIAEgDQAjgfAzgFQA1gFAnAbQALAIAIAJIADAEQgEAdgbAYQgjAgg0AFIgOAAQgrAAgggWgAjaBAQgzgKgfgkQgPgQgHgOIgDgKQALgTAVgNIAFgCQAigRAtAGIAJACQAmAIAcAVIAJAHQAXATAJAXIACADIgHAKQgLAPgTALQgcAOghAAQgOAAgPgCg");
	this.shape_13.setTransform(48.2,184.5702);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// זנב
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B84C16").s().p("Ak2m8QEoiuCdBZQCdBZAAABQDnIYlmHMIltADQlDmeDNpOg");
	this.shape_14.setTransform(47.925,89.4191);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startSquirrel, new cjs.Rectangle(0,0,95.6,191.5), null);


(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollover",over)
		function over(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollout",out)
		function out(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt = new cjs.Text("התחלה", "18px 'Arial'", "#330000");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 63;
	this.txt.parent = this;
	this.txt.setTransform(39.9,29.2,1.1371,1.1371);

	this.instance = new lib.CachedBmp_34();
	this.instance.setTransform(-5.3,-3.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_35();
	this.instance_1.setTransform(-5.3,-3.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).to({state:[{t:this.instance_1},{t:this.txt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3,88.5,88.5);


(lib.restart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollover",over)
		function over(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollout",out)
		function out(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt = new cjs.Text("שחקו שוב", "18px 'Arial'", "#330000");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 63;
	this.txt.parent = this;
	this.txt.setTransform(39.05,15.65,1.1371,1.1371);

	this.instance = new lib.CachedBmp_24();
	this.instance.setTransform(-5.3,-3.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_25();
	this.instance_1.setTransform(-5.3,-3.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).to({state:[{t:this.instance_1},{t:this.txt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3,88.5,88.5);


(lib.myQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this
		self.txt.font="bold 18px Varela Round"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("לחצו על כל התשובות הנכונות:", "18px 'Arial'", "#46322E");
	this.txt.name = "txt";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 253;
	this.txt.parent = this;
	this.txt.setTransform(355.8,18.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#46322E").ss(9,1,1).p("EgxDgLFMBiHAAAQBfAABDBDQBEBDAABgIAAO/QAABfhEBEQhDBDhfAAMhiHAAAQhfAAhEhDQhDhEAAhfIAAu/QAAhgBDhDQBEhDBfAAg");
	this.shape.setTransform(312.8346,65.4628,0.9286,0.9223);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgxDALGQhfAAhEhDQhDhDAAhgIAAu/QAAhfBDhEQBEhDBfAAMBiHAAAQBfAABDBDQBEBEAABfIAAO/QAABghEBDQhDBDhfAAg");
	this.shape_1.setTransform(312.8346,65.4628,0.9286,0.9223);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.myQ, new cjs.Rectangle(-4.6,-4.5,634.9,140), null);


(lib.progressNut = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_43();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progressNut, new cjs.Rectangle(0,0,30,35.5), null);


(lib.ppy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FEFDCA").ss(13,1,1).p("AB3jCIAAGFAh2jCIAAGF");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ppy, new cjs.Rectangle(-18.3,-25.5,36.7,52), null);


(lib.ppw = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(13,1,1).p("ABwjCIAAGFAhvjCIAAGF");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ppw, new cjs.Rectangle(-17.6,-25.5,35.3,52), null);


(lib.ps1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollover",over)
		function over(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollout",out)
		function out(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt = new cjs.Text("דלג", "18px 'Times New Roman'", "#330000");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 63;
	this.txt.parent = this;
	this.txt.setTransform(0.85,-12.1,1.1371,1.1371);

	this.instance = new lib.CachedBmp_37();
	this.instance.setTransform(-44.35,-44.35,0.5,0.5);

	this.txt_1 = new cjs.Text("התחלה", "18px 'Arial'", "#330000");
	this.txt_1.name = "txt_1";
	this.txt_1.textAlign = "center";
	this.txt_1.lineHeight = 20;
	this.txt_1.lineWidth = 63;
	this.txt_1.parent = this;
	this.txt_1.setTransform(0.85,-12.1,1.1371,1.1371);

	this.instance_1 = new lib.CachedBmp_36();
	this.instance_1.setTransform(-44.35,-44.35,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_39();
	this.instance_2.setTransform(-44.35,-44.35,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_38();
	this.instance_3.setTransform(-44.35,-44.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.txt_1},{t:this.instance},{t:this.txt}]}).to({state:[{t:this.instance_3},{t:this.txt_1},{t:this.instance_2},{t:this.txt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-44.3,88.5,88.5);


(lib.nut = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this
		self.stop()
	}
	this.frame_1 = function() {
		var self = this
		self.stop()
	}
	this.frame_2 = function() {
		var self = this
		self.stop()
	}
	this.frame_3 = function() {
		var self = this
		self.stop()
	}
	this.frame_4 = function() {
		var self = this
		self.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglOOQhRgJAYhaQkHgsh2kAIgMgZQhJixgKkNIAcAEIAAgCIgRgDIgygIQjRovNEhdQgOhgAehHQAghLBQgvQADAbAWAQQAaARAyACQiFA9gHCTQJeCGhEFUIgKAlQgUBCgrBJIgGABIgKACQAYKZoRCDQAOBmhRAAIgVgBg");
	this.shape.setTransform(61.4633,89.8918);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9933").ss(4,1,1).p("Ao6AoQAKENBJCxQAGANAGAMQB2EAEHAsQgYBaBRAJQBoANgQhyQIRiDgYqZQAFgBAFgBQADgBADAAQArhJAUhCQAGgTAEgSQBElUpeiGQAHiTCFg9QgygCgagRQgWgQgDgbQhQAvggBLQgeBHAOBgQtEBdDRIvQAYAFAaADQAIACAJAB");
	this.shape_1.setTransform(59.5133,89.8918);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6D4939").ss(4,1,1).p("AI8AKQArhJAUhCQAGgTAEgSQBElUpeiGQAHiTCFg9QgygCgagRQgWgQgDgbQhQAvggBLQgeBHAOBgQtEBdDRIvQAYAFAaADQAIACAJABAo6AoQAKENBJCxQAGANAGAMQB2EAEHAsQgYBaBRAJQBoANgQhyQIRiDgYqZ");
	this.shape_2.setTransform(61.4633,89.8918);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF66FF").ss(4,1,1).p("AgHACQAFgCAEAAQADgBADAA");
	this.shape_3.setTransform(117.85,91);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CC0000").ss(4,1,1).p("AI8AKQArhJAUhCQAGgTAEgSQBElUpeiGQAHiTCFg9QgygCgagRQgWgQgDgbQhQAvggBLQgeBHAOBgQtEBdDRIvQAYAFAaADQAIACAJABAo6AoQAKENBJCxQAGANAGAMQB2EAEHAsQgYBaBRAJQBoANgQhyQIRiDgYqZ");
	this.shape_4.setTransform(61.4633,89.8918);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#30A126").ss(4,1,1).p("AgHACQAFgCAEAAQADgBADAA");
	this.shape_5.setTransform(117.85,91);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.498)").s().p("AouIvQhThTg1heQhgirAAjTQAAlHDojoQAkgkAngeQA6gvBAghQCkhVDFAAQFIAADoDnQDnDoAAFHQAADThgCrQg1BehSBTQjoDolIAAQlGAAjojog");
	this.shape_6.setTransform(61.4,95.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#30A126").ss(4,1,1).p("Ao6AoQAKENBJCxQAGANAGAMQB2EAEHAsQgYBaBRAJQBoANgQhyQIRiDgYqZQAFgBAFgBQADgBADAAQArhJAUhCQAGgTAEgSQBElUpeiGQAHiTCFg9QgygCgagRQgWgQgDgbQhQAvggBLQgeBHAOBgQtEBdDRIvQAYAFAaADQAIACAJAB");
	this.shape_7.setTransform(61.4633,89.8918);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.498)").s().p("AovIvQjnjnAAlIQAAlHDnjoQDojnFHAAQFIAADnDnQDoDoAAFHQAAFIjoDnQjnDolIAAQlHAAjojog");
	this.shape_8.setTransform(61.8,95.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:61.4633}}]}).to({state:[{t:this.shape,p:{x:59.5133}},{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{x:61.4633}},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_6},{t:this.shape,p:{x:61.4633}},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape,p:{x:61.4633}},{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-3.2,158.6,186.2);


(lib.newgame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollover",over)
		function over(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollout",out)
		function out(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt = new cjs.Text("סיום משחק", "18px 'Arial'", "#D18A5C");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 63;
	this.txt.parent = this;
	this.txt.setTransform(39.05,15.65,1.1371,1.1371);

	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(-5.3,-3.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_23();
	this.instance_1.setTransform(-5.3,-3.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).to({state:[{t:this.instance_1},{t:this.txt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3,88.5,88.5);


(lib.mathQ4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.candy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mathQ4, new cjs.Rectangle(0,0,640,426), null);


(lib.mathQ4A9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._32group();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mathQ4A9, new cjs.Rectangle(0,0,517,469), null);


(lib.mathQ4A8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._18group();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mathQ4A8, new cjs.Rectangle(0,0,649,259), null);


(lib.mathQ4A7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._8group();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mathQ4A7, new cjs.Rectangle(0,0,232,487), null);


(lib.holidayQ9A9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.holidayQ9A9, new cjs.Rectangle(0,0,224,225), null);


(lib.holidayQ9A8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.holidayQ9A8, new cjs.Rectangle(0,0,510,340), null);


(lib.holidayQ9A7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.holidayQ9A7, new cjs.Rectangle(0,0,720,480), null);


(lib.holidayQ9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.holidayQ9, new cjs.Rectangle(0,0,235,215), null);


(lib.falseAni = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_30 = function() {
		var self = this;
		self.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(2));

	// אוזניים
	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(23.5,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_27();
	this.instance_1.setTransform(25.75,13.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_28();
	this.instance_2.setTransform(29.75,9.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_29();
	this.instance_3.setTransform(29.75,9.05,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_30();
	this.instance_4.setTransform(25.75,13.85,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_31();
	this.instance_5.setTransform(23.5,0,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_32();
	this.instance_6.setTransform(25.75,13.85,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_33();
	this.instance_7.setTransform(29.75,9.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},12).to({state:[{t:this.instance_7}]},4).to({state:[]},1).wait(1));

	// אף_ופה
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(1,1,1).p("Ag/gDQAxArAMg6AAAgRQAHA3A5gc");
	this.shape.setTransform(40.6,83.6778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330000").ss(0.1,1,1).p("AhDgnQA4AkBQgPQgKAthFANIAAAAIgBgBQg5gWABg4g");
	this.shape_1.setTransform(41.5498,77.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330000").s().p("AgLAnQg5gWABg4QA4AkBQgPQgKAthFANIAAAAg");
	this.shape_2.setTransform(41.5498,77.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#330000").ss(1,1,1).p("AgyANQA4AUgGgwQAAgEAAgEAAOgOQgEAjApAFAAQgZQgCAFAAAGAAIgRQgBACAAAC");
	this.shape_3.setTransform(40,83.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#330000").ss(0.1,1,1).p("AhDgnQA4AkBQgPQgKAqg7AOIgBAAQgDABgDAAQgCABgBAAIAAAAIgBgBQgCgBgBAAQg2gXABg2g");
	this.shape_4.setTransform(41.5498,77.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AgLAnIgDgBIgCgJIACAJQg2gXABg2QA4AkBQgPQgKAqg7AOIgBAAIACgLIgCALIgGABIAAgDIAAADIgDABIAAAAg");
	this.shape_5.setTransform(41.5498,77.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#330000").ss(1,1,1).p("Ag6AfQAxgHgGgwQAAgEgBgFAgBgYQgFAjBBAZAAAgjQgBAGgBAFAgIgaQAAACAAAB");
	this.shape_6.setTransform(41.625,84.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#330000").s().p("AgLAnIgDgBQg2gXABg2QA4AkBQgPQgKAqg7AOIgBAAIACgLIgCALIgGABIAAgDIAAADIgDABIAAAAgAgOAmIgCgJIACAJg");
	this.shape_7.setTransform(41.5498,77.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_4}]},5).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_4}]},5).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_4}]},12).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_4}]},4).to({state:[]},1).wait(1));

	// מתחת_לפה
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7E7DA").s().p("AgbBVQifgLgjiFQA0ALAngmQBDAkBEgTQBGBhCTAJQhMAyh9AAQgWAAgagCg");
	this.shape_8.setTransform(47.8,83.0175);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(30).to({_off:true},1).wait(1));

	// עיניים
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AB1BCQgUgJgHgaQgGgZAMgaQAMgcAWgNQAXgNAVAJQAVAJAGAaQAGAZgMAbQgMAbgXANQgNAIgMAAQgJAAgJgEgACegoQgLAGgFANQgGANADAKQADAMAKAEQAJAEALgFQAKgGAGgMQAGgNgDgLQgDgNgKgEQgDgBgEAAQgGAAgHADgAiqA1QgSgCgKgTQgIgSAGgVQAGgYAQgQQAQgOASADQASACAJASQAIASgFAXQgGAXgQAOQgPAOgOAAIgFgBgAiagkQgHAHgCAKQgDAMADAHQAFAJAIAAQAJABAIgHQAHgFADgLQACgLgEgIQgEgJgIgBIgCAAQgHAAgIAGg");
	this.shape_9.setTransform(47.8106,63.1203);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACLAeQgKgEgDgMQgDgLAGgMQAFgNALgGQALgGAJAEQAKAEADANQADALgGAMQgGANgKAGQgGADgGAAQgEAAgEgCgAijAVQgIAAgFgJQgDgIADgLQACgKAHgHQAJgHAIABQAIABAEAJQAEAIgCALQgDAKgHAGQgHAGgHAAIgDAAg");
	this.shape_10.setTransform(49.1337,61.9042);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FC7E1A").s().p("AihAcQgHgBgHgDQgHgCgDgDQgDgCAAgDQAAgGANgFQANgDASAAQASAAANADQANAFAAAGQAAAGgNAEIgIADIgKABIgNABIgRgBgACCAaQgOgCgLgGIgJgGQgGgGAAgGQAAgMAPgIQAOgIAVAAQAUAAAPAIQAOAIAAAMQAAAKgOAIIgCABIgMAFQgJACgMAAIgKAAg");
	this.shape_11.setTransform(48.5,57.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACDAaQgJgEgDgLQgDgLAFgLQAEgIAFgFIAKAAQAMAAAKgCQAEAEACAHQACALgFALQgFAMgKAFQgGADgFAAQgEAAgEgBgAiaARQgIAAgEgJQgDgHADgKQABgIAFgFIARABIANgBQAEAIgDAKQgCAKgHAGQgGAFgHAAIgDAAg");
	this.shape_12.setTransform(48.4224,62.2342);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABvA1QgUgIgGgZQgGgXALgZQAIgRALgLIAJAGQALAGAOACQgGAFgDAIQgGAMADALQADAKAJAEQAJAEAKgGQAKgFAGgLQAFgMgDgLQgCgHgDgEIALgFIAEALQAGAYgMAZQgLAagWAMQgMAIgMAAQgIAAgIgEgAigApQgRgCgJgSQgIgRAGgUQAEgTAMgOQADADAHACQAHADAIABQgFAFgCAIQgDALAEAHQAEAJAHAAQAJAAAHgFQAIgGACgLQACgKgEgIIAKgBQAFAPgFAVQgFAUgPAOQgOAMgOAAIgEAAg");
	this.shape_13.setTransform(47.1865,64.0012);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABvAoQgUgIgGgYQgEgPAEgRQAUAEAZAAIABAAIAAABQADAMAJADQAJAEAKgFQAKgGAGgMIABgBIANgEQgCAOgGAOQgLAYgWANQgMAHgMAAQgIAAgIgEgAigAcQgRgCgJgSQgIgPAGgVIAFgPQADAFAHAEQAIAEAKACQAAAEACADQAEAIAHAAQAJACAHgHQAHgFACgIIAGgDIAGgDQAAAJgDAKQgFAVgPANQgOANgOAAIgEgBg");
	this.shape_14.setTransform(47.1837,65.2762);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ACEANQgJgEgDgKIAAgCQAaAAAVgEIgBACQgFALgKAFQgGAEgFAAQgEAAgEgCgAiZAEQgIAAgEgIQgBgDAAgEIANABQAOAAALgEQgDAJgGAFQgGAEgHAAIgDAAg");
	this.shape_15.setTransform(48.325,63.5092);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FC7E1A").s().p("AByAtQgZAAgUgEIgRgEQgagHAAgKQAAgLAagHQASgEAXgCQgFgFAAgHQAAgMAOgHQAPgJAUABQAVgBAOAJQAPAHAAAMQAAALgMAGIABABQAaAHAAALQAAAKgaAHIgNADQgVAFgaAAIgCAAgAiqAlQgKgCgIgFQgIgDgDgFQgCgEAAgEQAAgIALgGIAAgBQAAgGANgFQANgEASAAQASAAANAEQANAFAAAGQAAAFgNAFIACAFQAAAIgIAGIgFACIgGADQgLAFgOAAIgNgBg");
	this.shape_16.setTransform(48.725,58.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AiwgOQgBADgDABQgCACgDgBQgDgBgBgDQgCgCABgDQABgDAFgIQAEgIAEgDQADgDgBANQgBANgBADgAC/AdQAAAFgEAEQgEAEgFAAQgFAAgEgEQgDgEAAgFQAAgGADgPQADgPAEgHQAEgIAGAWQAFAXAAAGg");
	this.shape_17.setTransform(46.005,71.6219);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FFFF").s().p("ACpAmQgDgEAAgFQAAgGADgPQADgPAEgHQAEgIAGAWQAFAXAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEgAi5gJQgDgBgBgDQgCgCABgDIAGgLQAEgIAEgDQADgDgBANIgCAQQgBADgDABIgDABIgCAAg");
	this.shape_18.setTransform(46.005,71.6219);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AB3AYQgQgGgHgSQATAHAaAAQAXAAATgGQgKAMgNAIQgNAHgLAAQgJAAgIgEgAiYAMQgRgCgJgRQgEgJAAgLQADAHAHAGQAPAMAUAAQAPAAALgGIgJAIQgNANgOAAIgFgBg");
	this.shape_19.setTransform(46.325,66.8762);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FC7E1A").s().p("ABMA8IgKgFQgXgMAAgQQABgHAFgHQgSgGAAgIQAAgLAZgHQASgFAXgCQgFgFAAgHQAAgMAPgHQAOgJAVABQAUgBAPAJQAOAHAAAMQAAALgMAHIABABQAaAHAAALQAAAGgOAGQAGAIAAAIQAAAQgWAMIgNAGQgTAFgXABQgZgBgUgGgAi/AsQgIgFgCgHQgFgHAAgJQAAgNAJgJIAAgBQAAgIALgHIAAgBQAAgGANgFQANgEASAAQASAAANAEQANAFAAAGQAAAGgMAFIABAFQAAAFgCACQADAIAAAIQAAARgOALIgIAHQgMAFgOAAQgVAAgOgMg");
	this.shape_20.setTransform(48.3,60.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AiegSQAAAFgEAEQgDAEgGAAQgFAAgDgEQgEgEAAgFQAAgFADgQQAEgQAEgHQAEgIAFAYQAFAXAAAFgAC4AzQABAFgEAEQgDAEgFABQgFABgEgDQgEgDgBgFQgBgGABgQQABgQACgIQADgIAJAWQAJAWABAGg");
	this.shape_21.setTransform(46.0111,74.6968);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FFFF").s().p("ACkA/QgEgDgBgFQgBgGABgQQABgQACgIQADgIAJAWQAJAWABAGQABAFgEAEQgDAEgFABIgCAAQgEAAgDgCgAizgJQgEgEAAgFQAAgFADgQQAEgQAEgHQAEgIAFAYQAFAXAAAFQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_22.setTransform(46.0111,74.6968);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC7E1A").s().p("ABIBKQgTgHAAgMQAAgJAOgHQgVgLAAgQQABgHAFgGQgSgGAAgJQAAgLAZgHQASgFAXgCQgFgFAAgHQAAgMAPgHQAOgJAVABQAUgBAPAJQAOAHAAAMQAAALgMAHIABABQAaAHAAALQAAAHgOAGQAGAHAAAIQAAAQgWAMIgHADQAHAGAAAGQAAAMgSAHQgTAHgaABQgagBgSgHgAjDA1QgNgIAAgLQgBgKAKgHQgDgHgBgJQAAgMAJgKIAAgBQAAgIALgHIAAgBQAAgGANgFQANgEASAAQASAAANAEQANAFAAAGQAAAGgMAFIABAFQAAAFgCADQADAIAAAHQAAAQgMALIABAGQAAALgOAIQgOAIgSAAQgUAAgNgIg");
	this.shape_23.setTransform(48,62.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("Ai+gVQgCAFgEACQgFADgFgCQgFgCgCgFQgDgFACgFQACgFAIgNQAIgOAHgGQAGgFgDAXQgCAYgCAFgADYA3QABAFgEAEQgDAFgFABQgFAAgEgDQgEgDgBgGQgBgFACgQQAAgQADgIQADgIAIAWQAJAWABAGg");
	this.shape_24.setTransform(45.35,79.0251);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00FFFF").s().p("ADDBDQgDgDgBgGQgBgFACgQQAAgQADgIQACgIAJAWQAJAWABAGQABAFgEAEQgDAFgFABIgBAAQgFAAgEgDgAjPgNQgEgCgCgFQgDgFABgFQADgFAIgNQAIgOAGgGQAHgFgDAXQgDAYgCAFQgBAFgFACQgDACgDAAIgEgBg");
	this.shape_25.setTransform(45.35,79.0251);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ABvAyQgUgGgGgUQgGgUALgTQAMgVAVgKQAWgKATAGQAUAHAGAUQAGATgMAVQgLAUgWAKQgMAGgMAAQgIAAgIgDgACVgeQgKAEgFAKQgGAKADAIQADAJAJADQAJADAKgFQAKgEAGgJQAFgJgDgJQgDgKgJgDIgHgBQgGAAgGADgAigAoQgRgBgJgPQgIgNAGgQQAFgTAPgLQAQgLARACQARABAIAOQAIAOgGARQgFASgPALQgOAKgOAAIgEgBgAiRgbQgHAFgCAIQgDAJAEAFQAEAGAHAAQAJACAHgGQAIgDACgJQACgIgEgHQgDgGgIgBIgCAAQgHAAgHAFg");
	this.shape_26.setTransform(47.1865,63.104);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ACDAXQgJgDgDgJQgDgJAFgJQAFgJALgFQAKgEAJADQAJADADAJQACAJgFAJQgFAKgKAEQgGACgGAAIgHgBgAiaAQQgIAAgEgHQgDgGADgIQACgIAHgFQAIgFAIABQAHAAAEAHQAEAGgDAJQgCAHgHAFQgGAEgGAAIgEAAg");
	this.shape_27.setTransform(48.4224,62.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},4).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_23},{t:this.shape_25},{t:this.shape_24}]},4).to({state:[{t:this.shape_20},{t:this.shape_19}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},4).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_27},{t:this.shape_26}]},4).to({state:[]},1).wait(1));

	// ראש
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FC7E1A").s().p("AiHDnQhaglgehQQgJi6CWiWQDMhWBqCOQB9DXiECjQhoAshaAAQhFAAg9gZg");
	this.shape_28.setTransform(51.0932,65.5837);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(30).to({_off:true},1).wait(1));

	// ידיים
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E87027").s().p("AhzD1IBZhUQA7hpBZg6QgihegBhtQAAhuAwgbICIBuQAODBhJCGQh9BYh9AgIgPBWIg+AqQgQg7AQgngAjNEhIAPhZIgzhHQgehPgCh2IBxDiIAVCDIgSAng");
	this.shape_29.setTransform(55.9053,121.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E87027").s().p("Ak1EgIAxhNIgThVQADhVAuhsIAND7IghCBIgfAdgAh/DVIBihJQBGhgBfgxQgXhhAMhtQAMhtAzgVIB7B8QgJDChXB9QiGBJiAASIgZBTIhCAjQgKg8AVgmg");
	this.shape_30.setTransform(54.5,122.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E87027").s().p("AlaD9IBEg7IAFhYQAchQA3hPQAeCYhFBRIhDBzIgnASgAisCjIBvgzQBahQBngbQgChjAihoQAjhoA2gKIBeCUQgxC5hwBpQiTAsiAgLIgqBNIhIAUQAEg9Abggg");
	this.shape_31.setTransform(48.925,120.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E87027").s().p("AhdDlIBihJQBHhhBfgyQgXhgAMhsQAMhuAygVIB7B9QgIDBhYB9QiGBKh/ARIgZBUIhDAjQgJg9AUglgAlYEBIAViDQAphnBUiRQgBB+gIBBIhXBjIAPBZIgvAng");
	this.shape_32.setTransform(51.025,120.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E87027").s().p("AgXD1IBZhUQA7hpBag6QgjheAAhtQgBhuAwgbICJBuQANDBhJCGQh9BYh9AgIgPBWIg+AqQgPg7APgngAltCJIBCh0QBKhRBOhiQgbCFADAhIhzA+IgSBZIg5AVg");
	this.shape_33.setTransform(46.6803,121.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E87027").s().p("AASD1IBahUQA7hpBag6QgjheAAhtQgBhuAwgbICJBuQANDBhJCGQh9BYh9AgIgPBWIg/AqQgPg7APgngAmXAyIAZgjICHgxQB3gSAGgtQANBogUAcIiNgXIhLA6g");
	this.shape_34.setTransform(42.4553,121.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E87027").s().p("AAbD1IBZhUQA8hpBZg6QgihegBhtQAAhuAwgbICIBuQAODBhJCGQh9BYh+AgIgPBWIg+AqQgQg7AQgngAkIgzIhlAMIgygyIApgSICbAbQBjAlAKgbQACBjgKAag");
	this.shape_35.setTransform(41.6303,121.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E87027").s().p("AgVD1IBYhUQA8hpBZg6QgihegBhtQAAhuAwgbICIBuQAODBhJCGQh9BYh+AgIgPBWIg9AqQgQg7AQgngAkVh1IhSg8IgIhKIAxASIBdB/QAfA/AQgaQAbB0gSAUQhFg0gniEg");
	this.shape_36.setTransform(46.5053,121.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E87027").s().p("AgjD/IBYhUQA8hpBZg7QgihdgBhtQAAhuAwgbICIBuQAODBhJCGQh9BYh+AgIgPBWIg9AqQgQg7AQgngAkTiwIhOhYIAHhYIAzAfIBNCoQAUBRAZgcQAFCPgZATQhDhKgPikg");
	this.shape_37.setTransform(47.9053,120.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E87027").s().p("Ag6EEIBZhUQA7hpBag8QgjhcAAhtQgBhuAwgbICJBuQANDBhJCGQh9BYh9AgIgPBWIg+AqQgPg7APgngAkKisIhAhiIAUhXIAuAmIAzCyQAIBTAHgeQAFCUgcAPQg2hUAJijg");
	this.shape_38.setTransform(50.1803,119.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E87027").s().p("AhCEnIBYhUQA8hpBZg8QgihcgBhtQAAhuAwgbICIBuQAODAhJCHQh9BYh+AgIgOBWIg+AqQgQg7AQgngAkIArQgqhbAhigIgxhsIBGhMIABAmIAZC4QgDBTALgdQAaCjg1AAQgJAAgKgEg");
	this.shape_39.setTransform(51.0053,116.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},3).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},2).to({state:[{t:this.shape_37}]},2).to({state:[{t:this.shape_38}]},3).to({state:[{t:this.shape_39}]},9).to({state:[{t:this.shape_39}]},4).to({state:[]},1).wait(1));

	// חלק_אחורי_של_הרגל
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D25F26").s().p("AiaDVQlZorL5CkQAFB2gnBuQg7B+i/Apg");
	this.shape_40.setTransform(88.6413,170.1822);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(30).to({_off:true},1).wait(1));

	// מרכז_גוף
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7E7DA").s().p("AhTG7QiKiHBKi1QifijB7nOQB0BKDphaQCEJ+hvGHIgSAAQhvAAiNhIg");
	this.shape_41.setTransform(54.2896,139.6001);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(30).to({_off:true},1).wait(1));

	// גוף
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D25F26").s().p("AgXIAQjIglheg5Qheg6ACh1QAChTA6hEQikm4CnihQANAOB4ACQB4ACBGggQBvCBCPARQEHE3hSE3IABALIAAACQAECEh5BQQhSA2h3AAQg4AAg+gMg");
	this.shape_42.setTransform(71.6721,139.3626);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(30).to({_off:true},1).wait(1));

	// נעליים
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#882F0D").s().p("AAaBPQAChDA3gMQACABBjALQAyAFBNgBQibAag1AnQgRAEgRAAQgVAAgWgGgAk2gBQAPhdCKAMQATADA1AXQA0AYApALIiIADQhBAYg4AAQggAAgdgHg");
	this.shape_43.setTransform(56.375,189.8944);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#882F0D").s().p("AAVA1QANhBA5gDQACACBfAbQAwAOBMAMQidgCg7AeIgJAAQghAAghgPgAk3AOQAPhcCKAMQATADA0AXQA1AYAoALIiHADQhBAYg5AAQgfAAgdgIg");
	this.shape_44.setTransform(56.525,188.2523);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#882F0D").s().p("AANAzQANhBA5gDQACACBfAbQAwAOBMAMQidgCg7AeIgJAAQghAAghgPgAiyhBQATgCA5AIQA5AIArAAIiCAoQhXBAhTACQgLhdCHgbg");
	this.shape_45.setTransform(57.3337,188.4706);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#882F0D").s().p("AjHgwQAQgKA3gSQA3gRAmgTIhjBdQgyBfhLAlQgzhPBvhSgAgOBQQANhCA4gDQACADBfAbQAwAOBMANQidgCg7AdIgJABQghAAgggQg");
	this.shape_46.setTransform(60.133,185.525);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#882F0D").s().p("AjegRQAKgQAogqQAngqAYgkIgqCCQADBrgvBGQhTguA4h9gAgtB2QANhCA5gDQABACBgAcQAwAOBMAMQidgCg7AeIgKAAQggAAghgPg");
	this.shape_47.setTransform(63.1929,181.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#882F0D").s().p("AjaAQQACgSAQg4QAQg2AGgrIAVCHQAzBegKBSQhegCgIiKgAhICNQANhDA6gCQABACBfAbQAwAOBMANQidgCg7AdIgJABQghAAghgPg");
	this.shape_48.setTransform(59.875,179.15);
	this.shape_48._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_44}]},2).to({state:[{t:this.shape_45}]},2).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},3).to({state:[{t:this.shape_48}]},5).to({state:[{t:this.shape_48}]},7).to({state:[{t:this.shape_48}]},9).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(9).to({_off:false},0).wait(21).to({_off:true},1).wait(1));

	// זנבב
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B84C16").s().p("AAcCPIgbhDIgCgFQgyh8AAgkQAAgqANgWQAFgHAFgDQAEgBAFAAQAVgCAPAIQARAIAJAUQAHAPABAYIAAAZQgCAYgIAQQgDAHgDACQgGAFgIABQgIABgEgCIgEgCIgDAAIgCgDQADAIAIAeIAMA4IANBDIABAQIAAABQAAABAAABQAAABAAABQAAAAgBAAQAAABAAAAQgCAAgGgXg");
	this.shape_49.setTransform(111.2083,89.9658);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B74C16").s().p("AB4KaIAAAAIAAAAIAAAAgAkZhcQiRj9B/jQQECjwEhERQEGIMligJQEkJxlIAuQAAgEmRrygAifpkQhcA6ArBsQArBrCoEgQCpEfBIDAQBHDBiopyIgBgQQA7AFA3gTQBXgegGh/QgGh/hQh+QhQh/h6gxQg2gWgyAAQg7AAgxAfg");
	this.shape_50.setTransform(100.2373,106.5672);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CF5B25").s().p("AAVCNQgHgfgEgJIACAEIADAAIAEACQAFACAIgBQAIgBAFgFQAEgDADgGQAHgQACgYIABgaQgCgXgHgOQgIgVgRgHQgPgJgVACQgFABgFABQgEACgFAIQgNAWAAAoQAAAlAxB8QgpgMgngpQg2g5gRhQQgShSAeg5QAeg5A7AAQA7AAA1A5QA3A5ASBSQARBQgeA5QgdA6g8AAQgIAAAAACIgNg4g");
	this.shape_51.setTransform(110.1816,78);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F27922").s().p("AC4ICQhIjBiokgQiokfgrhrQgshrBcg6QBcg6B6AwQB5AxBQB/QBQB/AGB/QAGB+hXAeQg3ATg7gGIgNhBQAAgCAIAAQA8AAAdg6QAeg5gRhRQgShSg3g5Qg1g5g7AAQg7AAgeA5QgeA5ASBSQARBRA2A5QAmApAqAMIACAGIAcBBQAIAhAAgOIAAgCQCBHggLAAQgEAAgRgtg");
	this.shape_52.setTransform(106.1711,98.0316);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B84C16").s().p("AADCQIgThFIgCgFQgkiCAEgjQAEgpAPgVQAGgHAFgCQAFgBAFABQAVAAAOAJQAQALAGAVQAGAPgCAYIgDAZQgEAYgKAPQgDAGgFADQgFAEgIAAQgIAAgEgDIgGgDIgCgDQADAIAEAgIAFA4IAGBEIgCAQIAAACIgBAEQgCAAgDgYg");
	this.shape_53.setTransform(113.9713,91.5813);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B74C16").s().p("AASKgIAAAAIAAAAIAAAAgAkph9Qh1kMCUjBQEajSEDEvQDMIllggwQDeKOlLAKQAAgEk7sZgAh4p0QhiAvAgBwQAfBvCIEwQCIEwAyDHQAzDIhkqCIABgPQA7ALA4gMQBagVAIh+QAIh/hCiHQhCiGh0g+QhBgjg7AAQguAAgqAVg");
	this.shape_54.setTransform(103.1279,107.0527);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CF5B25").s().p("AAFCQQgDghgCgIIABADIAGADQAFADAIAAQAIAAAFgEQAEgDAEgGQAKgPAEgYIADgZQABgYgFgOQgGgVgQgLQgPgJgUAAQgFgBgFABQgFACgGAHQgPAVgFAoQgDAjAkCDQgogRgiguQgwg/gIhQQgJhUAkg1QAjg2A7AHQA7AGAvA+QAxA/AHBTQAJBSgkA2QgjA2g7gHQgIgBgBACIgHg4g");
	this.shape_55.setTransform(113.3,79.3901);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F27922").s().p("ABiIOQgyjIiIkwQiIkwgfhvQgghvBigwQBigvByA9QB0A/BCCGQBCCGgIB/QgIB9haAWQg4AMg7gMIgFhDQABgBAHABQA7AFAkg1QAjg2gIhRQgIhUgwg/Qgwg+g7gHQg6gGgkA2QgjA0AIBUQAIBSAxA+QAhAvAoAQIABAGIAUBEQAFAhABgOIABgBQBMHpgLAAQgEAAgMgvg");
	this.shape_56.setTransform(110.0135,99.4063);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},9).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},17).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},4).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.1,198.4);


(lib.endOfAni = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.continueBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollover",over)
		function over(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollout",out)
		function out(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt = new cjs.Text("המשיכו", "18px 'Arial'", "#330000");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 63;
	this.txt.parent = this;
	this.txt.setTransform(39.9,29.2,1.1371,1.1371);

	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(-5.3,-3.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_21();
	this.instance_1.setTransform(-5.3,-3.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).to({state:[{t:this.instance_1},{t:this.txt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3,88.5,88.5);


(lib.clouds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,0.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clouds, new cjs.Rectangle(0,0.3,775,337), null);


(lib.check = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollover",over)
		function over(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
		self.txt.font = "bold 18px Varela Round"
		self.cursor = "pointer"
		self.addEventListener("rollout",out)
		function out(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt = new cjs.Text("בידקו", "18px 'Arial'", "#330000");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 63;
	this.txt.parent = this;
	this.txt.setTransform(39.9,29.2,1.1371,1.1371);

	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(-5.3,-3.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_18();
	this.instance_1.setTransform(-5.3,-3.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).to({state:[{t:this.instance_1},{t:this.txt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3,88.5,88.5);


(lib.bubblle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E5A965").ss(13,1,1).p("EAi9gFlIAAp4QBKjNkjiDMhI4gDaQoYBSgRHEIAAdoQhILGIig5MBHpgDaQFsAIAzkwIgUrIQJ1EEFAlnQj3ALlvi/Qlvi9AMjLg");
	this.shape.setTransform(286.5556,234.9369);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egx9AN3IAA9oQARnEIYhSMBI4ADaQEjCDhKDNIAAJ4QgMDLFvC9QFvC/D3gLQlAFnp1kEIAULIQgzEwlsgIMhHpADaQgoAEglAAQnPAABCqRg");
	this.shape_1.setTransform(286.5556,234.9369);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,74.1,654.2,321.70000000000005);


(lib.bubble = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop()
	}
	this.frame_1 = function() {
		var self = this;
		self.stop()
		
		self.header.font = "bold 20px Varela Round "
		self.txt.font = "18px Varela Round "
	}
	this.frame_2 = function() {
		var self = this;
		self.stop()
		
		self.header.font = "bold 20px Varela Round "
		self.txt.font = "18px Varela Round "
	}
	this.frame_3 = function() {
		var self = this;
		self.stop()
		
		self.header.font = "bold 20px Varela Round "
		self.txt.font = "18px Varela Round "
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEFE").s().p("Ax8GOQgMgPgEgPIgPg9QgHgkAAgcQACj2gCj3QgBgzARg7QAahXBsgJQA6gFBQADICJAGIGyAPILAAaIF5AQQA4ACApArQApAsgFA5QgBANABAkQACAfgDASQgHAtAZAmQAPAXArAlQBPBCCAARIATAHQgxAVg0ADQgsACg2gKQgygKgeAGQgPACgEAHQgEAFAAAOIABClQAAA9gWAWQgWAXg+ADIjOAJIwsAmIj9ALQiSAFhrABIgEAAQhhAAgwg+g");
	this.shape.setTransform(123.8493,50.6591);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7AF72").s().p("AwYH5QhHgCg3glQg7gngRg/QgLgoAAgmQABkkgBkkQAAhYAyg1QAwgyBXgLQBBgHBYADICYAKIAKAAQA5gCBYAEICSAGIFhAMIFOANICsAFQBkAEBHAFIBlACQA+ACAnAFQBCAJAuAyQAwA0gCBCIAAAzQABAfgCATQgGAvAaAjQATAaAsAbQBmA/B6gBQAOAAAHACQAKAEADALQAEALgHAJIgPAPQgwAuhIAMQgqAHhagFIgZgEQgigFgGAGQgGAFAAAkIAACFQAAAkgWAfQgXAegiALQhBAUg1gBQg4gBhVAEIiMAGQhXACkuAKIlHANIlkANIjRAJQhPADhCAAIg/gBgAwjnHQhtAJgZBXQgRA7AAAzQADD3gDD2QAAAcAIAkIAOA9QAEAPAMAPQAyA/BjgBQBrgBCSgFID9gLIQtgmIDNgJQA/gDAWgXQAVgWAAg9IAAilQAAgOADgFQAFgHAOgCQAegGAyAKQA2AKAsgCQA0gDAxgVIgSgHQiBgRhOhCQgrglgQgXQgZgmAHgtQADgSgBgfQgCgkABgNQAFg5gpgsQgogrg5gCIl4gQIrBgaImxgPIiKgGIgygBQgxAAgmADg");
	this.shape_1.setTransform(126.161,50.5527);

	this.txt = new cjs.Text("בפעם הבאה נאסוף את כולם", "normal 400 18px 'Varela Round'", "#573926");
	this.txt.name = "txt";
	this.txt.textAlign = "right";
	this.txt.lineHeight = 24;
	this.txt.lineWidth = 197;
	this.txt.parent = this;
	this.txt.setTransform(207,38.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.txt);
	}

	this.header = new cjs.Text("נשארו אגוזים על העץ!", "normal 400 20px 'Varela Round'", "#573926");
	this.header.name = "header";
	this.header.textAlign = "right";
	this.header.lineHeight = 26;
	this.header.lineWidth = 197;
	this.header.parent = this;
	this.header.setTransform(204,15.35);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.header);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:126.161,y:50.5527}},{t:this.shape,p:{scaleX:1,scaleY:1,x:123.8493,y:50.6591}}]}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:126.161,y:50.5527}},{t:this.shape,p:{scaleX:1,scaleY:1,x:123.8493,y:50.6591}},{t:this.header,p:{scaleX:1,x:204,y:15.35,text:"נשארו אגוזים על העץ!",font:"normal 400 20px 'Varela Round'",lineHeight:26.2}},{t:this.txt,p:{x:207,y:38.7,text:"בפעם הבאה נאסוף את כולם"}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1.0868,scaleY:1.3759,x:121.3569,y:50.5539}},{t:this.shape,p:{scaleX:1.0868,scaleY:1.3759,x:118.8446,y:50.7004}},{t:this.header,p:{scaleX:1.1293,x:201.8,y:-0.65,text:"יש פה אגוזים מקולקלים!",font:"normal 400 18px 'Varela Round'",lineHeight:23.6}},{t:this.txt,p:{x:202,y:51.7,text:"לא כדאי לקחת אותם!\n פעם הבאה נשים לב"}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:126.161,y:50.5527}},{t:this.shape,p:{scaleX:1,scaleY:1,x:123.8493,y:50.6591}},{t:this.header,p:{scaleX:1,x:204,y:15.35,text:"כל הכבוד!",font:"normal 400 20px 'Varela Round'",lineHeight:26.2}},{t:this.txt,p:{x:207,y:38.7,text:"יש לנו מלא אגוזים לחורף"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-19,281.4,139.2);


(lib.bigger = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9933").ss(1,1,1).p("AAVAUQgBABgBAAQgMANgQAAQgSAAgMgNQgNgMAAgQQAAgSANgMQAMgMASAAQAQAAAMAMQAMAMAAASQAAAPgKAMIAgAe");
	this.shape.setTransform(12.6187,13.1159,1.4188,1.4188);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDBDQgcgcAAgnQAAgnAcgcQAcgcAnAAQAnAAAcAcQAdAcgBAnQABAngdAcQgcAdgngBQgnABgcgdg");
	this.shape_1.setTransform(13.5499,13.5499,1.4188,1.4188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bigger, new cjs.Rectangle(0,0,27.1,27.1), null);


(lib.bgcn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-420.2,-190.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgcn, new cjs.Rectangle(-420.2,-190.3,240,257.5), null);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B6474").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,1280,720), null);


(lib.bar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D4939").s().p("Ah3TiMAAAgnDIDvAAMAAAAnDg");
	this.shape.setTransform(12.025,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bar, new cjs.Rectangle(0,0,24.1,250), null);


(lib._123 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// אוזניים
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(17.3,2.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(17.3,2.9,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(15.35,2.3,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(17.3,2.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(19.8,0,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(19.8,0,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_7();
	this.instance_6.setTransform(17.3,2.9,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_8();
	this.instance_7.setTransform(15.35,2.3,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_9();
	this.instance_8.setTransform(17.3,2.9,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_10();
	this.instance_9.setTransform(19.8,0,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_11();
	this.instance_10.setTransform(19.8,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},6).wait(1));

	// אף_ופה
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAHgoIAgALIADBGIglAAgAgpgdIAggJIAFBPIglAAg");
	this.shape.setTransform(47.975,94.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhRhBQBPAjBVgiQgWBDg9APQgYABgegeQgegfADgXgABTAuQhLAygIhLQgHBMhMg0");
	this.shape_1.setTransform(47.95,84.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFApIAChRIAgAKIADBHgAgpApIAAhHIAggJIAFBQg");
	this.shape_2.setTransform(47.975,94.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("Ag2AMQgegeADgXQBPAjBUgiQgVBDg9APIAAAAQgYAAgegeg");
	this.shape_3.setTransform(47.9616,82.1254);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ABTAuQgCACgDACQgTALgOAEQgEABgDAAQgKABgHgDQgCgBgBgBQgIgFgEgJQgBgBAAAAQgEgLgBgPQgCAPgDAKQgEAJgGAGQgCABgCABQgIAEgLgBQgJgCgKgEQgKgFgLgHQgCgCgDgBAhRhBQBPAjBVgiQgWBDg9APQgYABgegeQgegfADgXg");
	this.shape_4.setTransform(47.95,84.5286);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660000").s().p("AhAAjQgZgKAAgfQgBghAKgBIAVAMQAKAGAJAEQALABAIgDIAEgHQAGgGAEgJIACgCQAFgCADAFIABABQAEAJAIAFIADAGQAHADAJgBIAIgFQAOgEATgLQAQgCgCAfQgCAigbAKQgbAKgkAAQglAAgZgKg");
	this.shape_5.setTransform(48.1804,93.4083);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABKgFIAFgBQgTALgPAEQANgJAQgFgAhOgIQAEAAAFAEIANAIIgWgMg");
	this.shape_6.setTransform(47.925,90.1722);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AgCACQACgFADAC");
	this.shape_7.setTransform(39.575,90.21);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgGASQABAFAAAFQAAAUgJAJQgBABgBABQgHAEgKACQgIAAgJgBQgBAAgBAAQgLgDgNgEQgBAAgBgBQgBgBgBAAAgGASQgWgDgagaQgegfADgXQBPAjBUgiQgUBAg5ARQAAgCAAgCAgHAMQABADAAADAAFARQgDABgCAAQgDAAgDAAABSA4QgDABgDABQgTAHgOABQgBAAgCAAQgEAAgEgBQgEAAgDgBQgBgBAAAAQgEgCgDgCQgBgBgCgBQgFgGgDgKQAAgBAAAAQgCgIAAgKQAAgDABgC");
	this.shape_8.setTransform(47.9616,84.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660000").s().p("AgaA9QgTgDgWgNQgVgNgBggIAAgGQAAgKACgGQABgGAEACIADABIACABIAYAHIACAAQAGADATAAQgDAEANgKQgBABAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIACgCQAJgJAAgUQAEgIADgBQABgBACAEQAAAKABAIIABABIgBAHQAFAJAHAFQACACAEgBIABgBIABACQADAHAJgBIAGgEIAIgDIARgHQAJgEAGgBQAGgBABARQABAQgEASQgFARgLAHQgMAGgNAEQgOAEgTADIgSACIgUgCgAgngDQgRABADAQQADAQAOAKIADACQAOAHARAAQAQAAAOgHIAEgDQAPgJADgPQAEgPgTgCQgSgDgTAAQgTAAgSACgABLgXQgUAHgNABQANgBAUgHIAFgCIgFACgAAYgRIgCgBIACABg");
	this.shape_9.setTransform(48.11,92.7025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF7878").s().p("AgfAUIgDgCQgOgJgDgQQgDgRARgBQASgCATABQATgBASADQATADgEAPQgDAOgPAKIgEACQgOAHgQABQgRgBgOgHg");
	this.shape_10.setTransform(47.9309,94.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#330000").s().p("AgGAqIgBgGIABAGQgWgDgagbQgegeADgXQBPAjBUgiQgUBAg5ARIAAgEIAAAEIgFABIgGAAg");
	this.shape_11.setTransform(47.9616,82.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("ABTAuQgCACgDACQgOAIgLAFQgEABgEABQgBAAgBABQgDAAgCAAQgKABgHgDQgCgBgBgBQgIgFgEgJQgFgLgBgQQgCARgFALQgDAIgGAEIAAABQgCAAgBABQgEACgFABQgFABgFgBQgEgBgDgBQgFgBgEgCQgBAAgCgBQgKgFgLgHQgCgCgDgBAhRhBQBPAjBVgiQgWBDg9APQgYABgegeQgegfADgXg");
	this.shape_12.setTransform(47.95,84.5333);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660000").s().p("AgjAlQgMgKgEgYQgEgYACgDQACgGADAEIADAFQAEAEADABQAGACACgCIACgDIAKgDIACgCIAAAAQAGgFAEgIQACgBACgIQAJAMACAHQADAGAMACQgDAEAIgCQAJgCAAABIABAAIAAABIAEgDIACAAIAIgDQAEADgEAXQgFAXgNAKQgOAJgWABIgCABQgVAAgLgKgAgaABQgMABACAKQACALAKAHIACABQAJAFALAAQALAAAIgFIADgCQAKgGACgKQADgKgNgCQgMgBgMAAIgYABgAgtgVIgIgDIAIADgAAzgZIABABIgHAEIgCAAIAIgFg");
	this.shape_13.setTransform(47.9362,93.1513);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF7878").s().p("AgUANIgCgBQgKgGgCgKQgCgLAMgBIAYgBQAMAAAMACQANABgDAKQgCAJgKAHIgDABQgIAFgLAAQgLAAgJgFg");
	this.shape_14.setTransform(47.706,94.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAEIAEABIgCABIgKADQAFgGADABgAA0AEQAKgFAMgEIAFgBQgOAHgMAFIgIACIAHgEgAgKgGIAEgBQgEAHgGAEQABgKAFAAgAhOgIQAEgBAFAEIANAIIgWgLg");
	this.shape_15.setTransform(47.925,90.2222);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#330000").s().p("AgGAqIgBgGIABAGQgWgDgagbQgegeADgXQBPAjBUgiQgUBAg5ARIAAgEIAAAEIgFABIgGAAgAAFApIAAAAg");
	this.shape_16.setTransform(47.9616,82.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},33).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_3},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},3).to({state:[{t:this.shape_16},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_3},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_3},{t:this.shape_15},{t:this.shape_13},{t:this.shape_14},{t:this.shape_12}]},1).wait(1));

	// Layer_13
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8E8DB").s().p("AkYgQQCVgFAuheQBHA1BhgyQBEBuCCgOQg8B1jIAOIgkABQiuAAhbiEg");
	this.shape_17.setTransform(48.325,89.2944);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(44));

	// עיניים
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AChA4QgSgGgHgVQgHgUAIgXQAIgXASgMQASgMATAGQARAGAIAVQAHAVgIAWQgIAXgSAMQgMAIgMAAQgGAAgHgCgAC9ggQgEAJAAAMQAAAMAEAJQAFAJAHAAQAGAAAFgJQAFgJAAgMQAAgMgFgJQgFgJgGAAQgHAAgFAJgAjFAyQgSgMgIgXQgIgWAHgVQAHgVASgGQATgGASAMQATAMAHAXQAIAXgHAUQgHAVgTAGQgGACgGAAQgMAAgMgIgAiuggQgFAJAAAMQAAAMAFAJQAFAJAGAAQAHAAAFgJQAFgJAAgMQAAgMgFgJQgFgJgHAAQgGAAgFAJg");
	this.shape_18.setTransform(47.15,67.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ACrAVQgFgJAAgMQAAgMAFgIQAEgJAHAAQAHAAAEAJQAFAIAAAMQAAAMgFAJQgEAJgHAAQgHAAgEgJgAjBAVQgEgJAAgMQAAgMAEgIQAFgJAHAAQAGAAAFAJQAFAIAAAMQAAAMgFAJQgFAJgGAAQgHAAgFgJg");
	this.shape_19.setTransform(49.025,66.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF8720").s().p("AifALIgFAAIgDAAIgHgBQghgCgOgDQgMgCAAgDQAAgGBFgEQBEgFBgAAQBhAABFAFQBEAEAAAGQAAAEgbAEIgpADIgYABQg9AEhRAAQhcAAhDgFg");
	this.shape_20.setTransform(48.05,62.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ACrAVQgFgJAAgMQAAgMAFgIQAEgJAHAAQAHAAAEAJQAFAIAAAMQAAAMgFAJQgEAJgHAAQgHAAgEgJgAjBAVQgEgJAAgMQAAgMAEgIQAEgIAFgBIAHABQAEABADAHQAFAIAAAMQAAAMgFAJQgFAJgGAAQgHAAgFgJg");
	this.shape_21.setTransform(49.025,66.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AChAyQgSgGgHgUQgHgVAIgWQAFgPAJgKIAYgCIApgDQAGAGADAKQAHAUgIAWQgIAYgSAMQgMAIgMAAQgGAAgHgDgAC9gmQgEAJAAANQAAAMAEAIQAFAJAHAAQAGAAAFgJQAFgIAAgMQAAgNgFgJQgFgJgGAAQgHAAgFAJgAjFAtQgSgMgIgYQgIgWAHgUQAEgMAIgHQAOADAhADQgFABgEAHQgFAJAAANQAAAMAFAIQAFAJAGAAQAHAAAFgJQAFgIAAgMQAAgNgFgJQgDgGgEgCIACAAIAGABQAJAKAFAQQAIAWgHAVQgHAUgTAGQgGADgGAAQgMAAgMgIg");
	this.shape_22.setTransform(47.15,67.9142);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ACrAKQgFgJAAgLIAAgBIAYgGIAIgCIAAAJQAAALgFAJQgEAJgHAAQgHAAgEgJgAjBAKQgEgJAAgLIAAgBIAGABIAHABIADAAIAFABIALACQgBAJgEAHQgFAJgGAAQgHAAgFgJg");
	this.shape_23.setTransform(49.025,67.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF8720").s().p("AiIAdIgMgCIgLgBIgGgBIgCAAIgHgBIgHgCQgcgEgMgHIgGgCQgGgFAAgEQAAgOBEgLQBFgKBgAAQBhAABFAKQBEALAAAOQAAAGgJAEIgLAFIgHACIgYAFIgRADIgYADIgKABQg5AHhLAAQhNAAg7gHg");
	this.shape_24.setTransform(47.35,63.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AChAoQgSgGgHgUQgGgQAEgSIAKgCIAXgDIARgCIAAABQAAAMAFAJQAFAIAGAAQAHAAAFgIQAFgJAAgMIgBgJIAKgEQAFASgHAVQgIAXgSAMQgMAHgMAAQgGAAgHgCgAjFAjQgSgMgIgXQgIgWAGgTIAFADQANAGAcAFIAAABQAAAMAFAJQAFAIAGAAQAHAAAFgIQAEgHABgKIAMACQAEASgFAQQgHAUgTAGQgGACgGAAQgMAAgMgHg");
	this.shape_25.setTransform(47.1547,68.9392);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF8720").s().p("AiBAfIgGgBIgNgCIgCAAIgKgCIgEgBIgEAAIgDgBIgDgBIgGgBQgdgEgNgGIgCgCIgCgCQgHgEAAgEQAAgFALgFIAAAAQARgIApgGQBEgLBgAAQBhAABEALQAwAHAOAKIACABIABAAIAAABQAEADAAACQAAADgCADIgIAFIgFACIgEACIgIACIgRAEIgIABIgRADIgWADIgHABIgDABQg7AGhKAAQhIAAg5gFg");
	this.shape_26.setTransform(46.85,65.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ACpABIgCgDIARgDIAHgDIAFgCQgBAHgEAEQgEAJgHAAQgGAAgFgJgAjDABIAAgBIAEABIADAAIAFACIAKABQgEAHgGgBQgGAAgGgJg");
	this.shape_27.setTransform(49.2,68.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AChAnQgSgGgHgUQgDgIAAgHIAGgBIAXgDIARgCIAIgCIACAEQAFAIAGAAQAHAAAFgIQADgFABgHIAFgCIAHgFQAAAMgEAMQgIAXgSAMQgMAHgMAAQgGAAgHgCgAjFAiQgSgMgIgXQgEgKAAgKIACACQANAGAcAFIAHABIACAAIABABQAFAIAGAAQAGAAAEgFIACAAIAMACIAHABQgBAGgCAHQgHAUgTAGQgGACgGAAQgMAAgMgHgADigoIAAAAIAAABg");
	this.shape_28.setTransform(47.175,69.0392);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF8720").s().p("AiBBBIgGgCIgHgDIgGgCIgCAAIgKgDQgCgCgCAAIgEAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgDgBIgGgCQgdgLgNgNIgCgDIgCgDQgHgJAAgJQAAgMALgLIAAAAQARgQApgOQBEgXBgAAQBhAABEAXQAwAQAOAUIADAEQAEAHAAAGQAAAGgCAGIgBACIgHAIIgFAGIgEADIgIAFIgRAJIgIADQgHADgKACQgIADgKACIgEABIgHADIgDABQg7AOhKgBQhIABg5gMg");
	this.shape_29.setTransform(46.85,65.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ACgAbQgLgDgGgJQAJgCAJgDQAJgCAIgEIAIgDIARgHIAHgFIAFgEIAFgFIAHgIQgBAHgDAIQgIAXgSAMQgMAHgMAAQgGAAgHgCgAjGAWQgSgMgIgXIgCgFQANANAcAJIAHADIACABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIADAAQADAAACACIAKADIACAAIAGACQgGAHgKADQgGACgGAAQgMAAgMgHg");
	this.shape_30.setTransform(47.275,70.2392);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF8720").s().p("AiKBiIgHgEIgGgCIgHgDIgCAAIgLgGQgCgDgDAAIgDAAQgDgDgCAAIgCgCIgIgDQgdgQgOgTQgCgCgBgEIgCgEQgIgOABgNQAAgSALgQIABAAQARgaAsgVQBJghBnAAQBoAABJAhQAzAYAQAfIACAGQAFAKgBAKQAAAJgCAKIgBACIgHAMIgFAIIgGAHIgIAHIgRAMIgJAFQgIAFgKADQgJAGgLADIgEABIgHADQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQg/AWhPAAQhNAAg9gSg");
	this.shape_31.setTransform(46.9,65.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},29).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_30},{t:this.shape_29}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},2).wait(1));

	// ראש
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF8720").s().p("AkbCWQglk8Djh9QBUgmBzAjQDWBrglFXQiTCciLAAQiPAAiJiig");
	this.shape_32.setTransform(48.0002,71.9803);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(44));

	// יד_ימין
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E97027").s().p("AimBSIDPhUQioiHgIg0IBhglQCRA6BGCgQAtBkhYgGQh1ATh/AEQgHAtgZApIgrAgQgThLAmhGg");
	this.shape_33.setTransform(68.6806,116.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(44));

	// יד_שמאל
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E97027").s().p("ACPDDQgZgpgHgtQh/gEh1gTQhYAGAthkQBGigCSg6IBgAkQgIA1ioCHIDQBUQAlBGgTBLg");
	this.shape_34.setTransform(26.8223,115.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(44));

	// בטן
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F8E8DB").s().p("AhgINQgiggg9gVQCHi9jVm5IEWl1IEEFfQjlERCaF9QgmAEgvA2QhtgzhgAsg");
	this.shape_35.setTransform(47.5,133.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(44));

	// גוף_תחתון
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D25F26").s().p("AhXIMIgCgEQgJgYgXgSIgJgHQgcgVgmgIIgJgCQgsgHgjASIgEACQgWAMgLAUIADAJQkpi6EDl+IFonLIFuHkQDsFkkWCvQgJgJgLgIQgngbg1AFQgzAFgiAfIgFADQgGAFgEAGQgNAPgFARIgCAFIACACQh1gdhKAfIAGgKg");
	this.shape_36.setTransform(47.7982,136.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#872E0C").s().p("AB3AvQgPgKgLgNIgBgCIABgFQAGgRAMgNQAFgHAGgFIAEgDQAjgfAzgFQA1gFAnAbQALAIAIAJIADAEQgEAdgbAYQgjAgg0AFIgOAAQgrAAgggWgAjaBAQgzgKgfgkQgPgQgHgOIgDgKQALgTAVgNIAFgCQAigRAtAGIAJACQAmAIAcAVIAJAHQAXATAJAXIACADIgHAKQgLAPgTALQgcAOghABQgOAAgPgDg");
	this.shape_37.setTransform(48.2,187.4702);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#872E0C").s().p("AB3A8QgPgNgLgQIgBgDIABgEIAAgBIAAgBQADgNAGgKQAEgIAFgIQAFgJAGgHIAEgDQAjgnAzgHQA1gHAnAjQALAKAIAMIADAEIAAABQgEAlgbAeQgjApg0AGIgPABQgqAAgggcgAjaBRQgzgNgfgtQgPgUgHgTIgCgIIgBgEQALgZAVgRIAFgBQAigXAtAJQAFAAAEACQAmAKAcAbIAJAJQAQAQAJAUIAHARIABACIABADIgBADIgGAJQgLATgTAOQgcATgiAAQgOAAgOgEg");
	this.shape_38.setTransform(48.2,187.504);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D25F26").s().p("AhYISIgBgDIABgCIgBgEIgHgOQgKgUgPgQIgJgJQgcgbgmgKQgFgCgFAAQgsgJgiAXIgFABQgVARgMAZIABAEIgBACIAEAJQkqi6EDl+IFonLIFvHjQDqFjkSCvIAAgBIgDgEQgIgMgLgKQgngjg2AHQgyAHgjAnIgEADQgGAHgFAJQgFAIgEAIQgGAJgDAKIgBAFIABABIAAABQhxgchJAcIABgDg");
	this.shape_39.setTransform(47.8051,136.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).to({state:[{t:this.shape_36},{t:this.shape_37}]},3).to({state:[{t:this.shape_39},{t:this.shape_38}]},7).to({state:[{t:this.shape_36},{t:this.shape_37}]},3).to({state:[{t:this.shape_39},{t:this.shape_38}]},8).to({state:[{t:this.shape_36},{t:this.shape_37}]},3).to({state:[{t:this.shape_39},{t:this.shape_38}]},6).to({state:[{t:this.shape_36},{t:this.shape_37}]},5).to({state:[{t:this.shape_39},{t:this.shape_38}]},6).to({state:[{t:this.shape_39},{t:this.shape_38}]},2).wait(1));

	// זנב
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B84C16").s().p("Ak2m8QEoiuCdBZQCdBZAAABQDnIYlmHMIltADQlDmeDNpOg");
	this.shape_40.setTransform(47.925,92.3191);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B84C16").s().p("AjRIpQk2mnDepJQErilCcBeQCbBdAAACQDWIfl0HBg");
	this.shape_41.setTransform(48.0448,92.459);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B84C16").s().p("AlBm2QEji2CgBVQCfBVAAACQD1ISlaHVIltAMQlNmVC9pUg");
	this.shape_42.setTransform(47.8686,92.5445);
	this.shape_42._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[{t:this.shape_40}]},7).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_40}]},7).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_40}]},8).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_40}]},7).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(7).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(10).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).to({_off:true},8).wait(3).to({_off:false},0).to({_off:true},7).wait(3).to({_off:false},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.6,196.4);


(lib.treeAndGrass = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_61();
	this.instance.setTransform(0,664.7,0.5,0.5);

	this.instance_1 = new lib.tree();
	this.instance_1.setTransform(721.2,358.9,1,1,0,0,0,518.4,358.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.treeAndGrass, new cjs.Rectangle(0,1.3,1456.5,750.9000000000001), null);


(lib.timepic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(84,75.8,1,1,0,0,0,84,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-3.7497},0).wait(1).to({rotation:-7.4994,x:84.05},0).wait(1).to({rotation:-11.2492},0).wait(1).to({rotation:-14.9989,y:75.75},0).wait(1).to({rotation:-10.999,x:84},0).wait(1).to({rotation:-6.9991,y:75.8},0).wait(1).to({rotation:-2.9992,x:84.05},0).wait(1).to({rotation:1.0007,x:84},0).wait(1).to({rotation:5.0005},0).wait(1).to({rotation:9.0004,x:83.95},0).wait(1).to({rotation:13.0003},0).wait(1).to({rotation:17.0002,x:84},0).wait(1).to({rotation:21.0001,x:83.95},0).wait(1).to({rotation:25},0).wait(1).to({rotation:20,x:84,y:75.85},0).wait(1).to({rotation:15,y:75.8},0).wait(1).to({rotation:10,x:83.95,y:75.85},0).wait(1).to({rotation:5,x:84,y:75.8},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-20.4,196.2,191.3);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.time();
	this.instance.setTransform(568.45,150.8,1.099,1.1921,0,0,0,84.5,75.9);

	this.instance_1 = new lib.bgcn();
	this.instance_1.setTransform(80,228.1,0.5168,0.5168,90,0,0,0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(45.1,10.9,133.1,124.1), null);


(lib.stop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop()
		self.addEventListener("rollover",next)
		self.cursor = "pointer"
		
		function next(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this;
		self.stop()
		
		self.addEventListener("rollout",next)
		self.cursor = "pointer"
		function next(){
			self.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.ppw();
	this.instance.setTransform(133.2,121.75,0.7519,0.7662,0,0,0,0.1,0.7);

	this.instance_1 = new lib.bgcn();
	this.instance_1.setTransform(132.95,120.45,0.3746,0.3746,90,0,0,-300.2,-61.6);

	this.instance_2 = new lib.ppy();
	this.instance_2.setTransform(131.6,120.75,0.8701,0.7792,0,0,0,0.1,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(84.8,75.5,96.39999999999999,89.9);


(lib.startS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		self.header.font="bold 32px Varela Round"
		self.txt.font="bold 24px Varela Round"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.text = new cjs.Text("", "24px 'Rubik-Bold'", "#6B4834");
	this.text.textAlign = "right";
	this.text.lineHeight = 29;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(399.95,348.15);

	this.startBtn = new lib.start();
	this.startBtn.name = "startBtn";
	this.startBtn.setTransform(277.15,387.15,1,1,0,0,0,39.1,41.3);

	this.txt = new cjs.Text("עזרו לסאני לאגור מספיק אגוזים לחורף.\n\nעל העץ יש אגוזים טובים ואגוזים מקולקלים.\nלחצו על כל האגוזים עם התשובה הנכונה והיזהרו שלא לקטוף אגוזים שגויים.\nשימו לב לשעון וקטפו את האגוזים הכי מהר שאפשר.\nבהצלחה!", "24px 'Arial'", "#6B4834");
	this.txt.name = "txt";
	this.txt.textAlign = "right";
	this.txt.lineHeight = 29;
	this.txt.lineWidth = 465;
	this.txt.parent = this;
	this.txt.setTransform(509.6,99.7);

	this.header = new cjs.Text("סאני צריך עזרה!", "50px 'Arial'", "#6B4834");
	this.header.name = "header";
	this.header.textAlign = "center";
	this.header.lineHeight = 58;
	this.header.lineWidth = 398;
	this.header.parent = this;
	this.header.setTransform(292.75,29.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgwXAhuQk2gBjdjcQjbjbAAk3MAAAgr9QAAk3DbjcQDdjbE2gBMBguAAAQE3ABDcDbQDcDcAAE3MAAAAr9QAAE3jcDbQjcDck3ABg");
	this.shape.setTransform(277.0725,215.75,0.7204,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.header},{t:this.txt},{t:this.startBtn},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startS, new cjs.Rectangle(0.1,0,554,441.9), null);


(lib.startAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_30 = function() {
		var self = this; 
		
		self.s1.addEventListener("click", pass);
		
		function pass()
		{	
			self.gotoAndPlay(Layer_7, 497); 
		}
	}
	this.frame_41 = function() {
		playSound("SoundEffect1mp3cutnet1wav");
	}
	this.frame_43 = function() {
		var self = this;
		self.txt.font="bold 24px Varela Round";
	}
	this.frame_119 = function() {
		playSound("SoundEffect2mp3cutnetwav");
		var self = this;
		self.txt.font="bold 24px Varela Round";
	}
	this.frame_264 = function() {
		playSound("SoundEffect3mp3cutnetwav");
		var self = this;
		self.txt.font="bold 24px Varela Round";
	}
	this.frame_381 = function() {
		playSound("SoundEffect4mp3cutnetwav");
		var self = this;
		self.txt.font="bold 24px Varela Round";
	}
	this.frame_496 = function() {
		var self= this;
		self.stop();
		
		stage.removeChild(stage.getChildByName("endOfAni"));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(11).call(this.frame_41).wait(2).call(this.frame_43).wait(76).call(this.frame_119).wait(145).call(this.frame_264).wait(117).call(this.frame_381).wait(115).call(this.frame_496).wait(1));

	// Layer_12
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6C4027").ss(8,1,1).p("A1Z1+MAqzAAAQCRAABmBmQBnBnAACRMAAAAhBQAACRhnBnQhmBmiRAAMgqzAAAQiRAAhmhmQhnhnAAiRMAAAghBQAAiRBnhnQBmhmCRAAg");
	this.shape.setTransform(1181.1567,336.1922,1.4178,1.1621);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A1YV/QiSAAhmhmQhnhnAAiRMAAAghBQAAiRBnhmQBmhnCSAAMAqxAAAQCSAABmBnQBnBmgBCRMAAAAhBQABCRhnBnQhmBmiSAAg");
	this.shape_1.setTransform(1181.1567,336.1922,1.4178,1.1621);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(108,64,39,0)").ss(8,1,1).p("A1Z1+MAqzAAAQCRAABmBmQBnBnAACRMAAAAhBQAACRhnBnQhmBmiRAAMgqzAAAQiRAAhmhmQhnhnAAiRMAAAghBQAAiRBnhnQBmhmCRAAg");
	this.shape_2.setTransform(1181.1567,336.1922,1.4178,1.1621);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0)").s().p("A1YV/QiSAAhmhmQhnhnAAiRMAAAghBQAAiRBnhmQBmhnCSAAMAqxAAAQCSAABmBnQBnBmgBCRMAAAAhBQABCRhnBnQhmBmiSAAg");
	this.shape_3.setTransform(1181.1567,336.1922,1.4178,1.1621);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},477).wait(1));

	// Layer_11
	this.instance = new lib.stratbrunch();
	this.instance.setTransform(1365.6,147.05,1,1,0,0,0,411.9,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:47.4,x:1401.45,y:146.95},0).wait(1).to({x:1437.35},0).wait(1).to({x:1473.2},0).wait(1).to({x:1509.1},0).wait(1).to({x:1545},0).wait(1).to({x:1580.85},0).wait(1).to({x:1616.75},0).wait(1).to({x:1652.65},0).wait(1).to({x:1688.5},0).wait(1).to({x:1724.4},0).wait(1).to({x:1760.3},0).wait(1).to({x:1796.15},0).wait(1).to({x:1832.05},0).wait(1).to({x:1867.95},0).wait(1).to({x:1903.8},0).wait(1).to({x:1939.7},0).wait(1).to({x:1975.6},0).wait(1).to({x:2011.45},0).wait(1).to({x:2047.35},0).wait(1).to({x:2083.25},0).wait(1).to({x:2119.1},0).wait(1).to({x:2155},0).wait(1).to({x:2190.9},0).to({_off:true},1).wait(473));

	// txt
	this.txt = new cjs.Text("אוי לא.....\nנראה לי שהחורף עומד להגיע!", "normal 400 24px 'Varela Round'", "#872E0C");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 33;
	this.txt.lineWidth = 229;
	this.txt.parent = this;
	this.txt.setTransform(1265.95,519.3);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.txt);
	}

	this.instance_1 = new lib.bubblle("synched",0);
	this.instance_1.setTransform(1306.2,518.65,0.6413,0.6413,0,0,0,320.7,154.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.txt,p:{x:1265.95,y:519.3,text:"אוי לא.....\nנראה לי שהחורף עומד להגיע!",lineWidth:229}}]},43).to({state:[{t:this.instance_1},{t:this.txt,p:{x:1244.5,y:505.8,text:"ועוד לא התחלתי לאסוף מזון וכמו שזה נראה לא נשאר עוד הרבה זמן ",lineWidth:230}}]},76).to({state:[{t:this.instance_1},{t:this.txt,p:{x:1250.65,y:511.85,text:"דרך אגב, לא הצגתי את עצמי\nאני סאני הסנאי",lineWidth:229}}]},145).to({state:[{t:this.instance_1},{t:this.txt,p:{x:1247.3,y:499.8,text:"ואני יתר מאשמח לקצת עזרה...\nאתם כבר פה לא תתנו יד?",lineWidth:236}}]},117).to({state:[]},115).wait(1));

	// Layer_6
	this.instance_2 = new lib._123();
	this.instance_2.setTransform(1664.55,844.15,1,1,-21.1703,0,0,45.3,89.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:47.8,regY:98.2,rotation:-21.1713,x:1669.8,y:850.95},0).wait(26).to({scaleX:0.9994,scaleY:1.0082,rotation:-18.4454,x:1662.8,y:835.5},0).wait(1).to({scaleX:0.9988,scaleY:1.0164,rotation:-15.7194,x:1653.7,y:817.95},0).wait(1).to({scaleX:0.9982,scaleY:1.0246,rotation:-12.9935,x:1642.85,y:798.65},0).wait(1).to({scaleX:0.9976,scaleY:1.0328,rotation:-10.2675,x:1630.45,y:777.85},0).wait(1).to({scaleX:0.9969,scaleY:1.0409,rotation:-7.5416,x:1616.8,y:755.8},0).wait(1).to({scaleX:0.9963,scaleY:1.0491,rotation:-4.8157,x:1602.2,y:732.85},0).wait(1).to({scaleX:0.9957,scaleY:1.0573,rotation:-2.0897,x:1586.85,y:709.35},0).wait(1).to({scaleX:0.9951,scaleY:1.0655,rotation:0.6362,x:1571.05,y:685.6},0).wait(1).to({scaleX:0.9945,scaleY:1.0737,rotation:3.3622,x:1555.1,y:661.9},0).wait(1).to({scaleX:0.9939,scaleY:1.0819,rotation:6.0881,x:1539.3,y:638.5},0).wait(1).to({scaleX:1.0825,scaleY:1.0825,rotation:8.8175,x:1551.1,y:615.75},0).wait(458).to({_off:true},1).wait(1));

	// startSquirrel
	this.instance_3 = new lib.startSquirrel2();
	this.instance_3.setTransform(1457.05,605.2,1,1,0,0,0,47.8,95.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:1490.1,y:604.75},0).wait(1).to({x:1523.15,y:604.3},0).wait(1).to({x:1556.25,y:603.85},0).wait(1).to({x:1589.3,y:603.4},0).wait(1).to({x:1622.35,y:602.95},0).wait(1).to({x:1655.45,y:602.55},0).wait(1).to({x:1688.5,y:602.1},0).wait(1).to({x:1721.55,y:601.65},0).wait(1).to({x:1754.65,y:601.2},0).wait(1).to({x:1787.7,y:600.75},0).wait(1).to({x:1820.8,y:600.35},0).wait(1).to({x:1853.85,y:599.9},0).wait(1).to({x:1886.9,y:599.45},0).wait(1).to({x:1920,y:599},0).wait(1).to({x:1953.05,y:598.55},0).wait(1).to({x:1986.1,y:598.1},0).wait(1).to({x:2019.2,y:597.7},0).wait(1).to({x:2052.25,y:597.25},0).wait(1).to({x:2085.3,y:596.8},0).wait(1).to({x:2118.4,y:596.35},0).wait(1).to({x:2151.45,y:595.9},0).wait(1).to({x:2184.55,y:595.5},0).wait(473).to({_off:true},1).wait(1));

	// btn
	this.s1 = new lib.ps1();
	this.s1.name = "s1";
	this.s1.setTransform(593.15,544.05);
	this.s1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(30).to({_off:false},0).to({_off:true},466).wait(1));

	// Layer_1
	this.instance_4 = new lib.CachedBmp_53();
	this.instance_4.setTransform(324.9,148.55,0.5,0.5);

	this.instance_5 = new lib.strattree();
	this.instance_5.setTransform(559.35,357.55,1,1,0,0,0,518.4,358.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(497));

	// Layer_9
	this.instance_6 = new lib.clouds();
	this.instance_6.setTransform(2039.25,403.35,1,1,0,0,0,387.4,168.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(255).to({_off:false},0).wait(1).to({regX:387.5,regY:168.8,x:2039.15,y:399.4},0).wait(1).to({x:2038.85,y:395.5},0).wait(1).to({x:2038.55,y:391.85},0).wait(1).to({x:2038.2,y:388.35},0).wait(1).to({x:2037.8,y:385},0).wait(1).to({x:2037.4,y:381.8},0).wait(1).to({x:2036.9,y:378.75},0).wait(1).to({x:2036.4,y:375.8},0).wait(1).to({x:2035.9,y:372.95},0).wait(1).to({x:2035.35,y:370.2},0).wait(1).to({x:2034.75,y:367.55},0).wait(1).to({x:2034.15,y:364.95},0).wait(1).to({x:2033.55,y:362.45},0).wait(1).to({x:2032.9,y:360},0).wait(1).to({x:2032.25,y:357.6},0).wait(1).to({x:2031.55,y:355.25},0).wait(1).to({x:2030.85,y:353},0).wait(1).to({x:2030.15,y:350.8},0).wait(1).to({x:2029.4,y:348.6},0).wait(1).to({x:2028.7,y:346.5},0).wait(1).to({x:2027.9,y:344.4},0).wait(1).to({x:2027.15,y:342.4},0).wait(1).to({x:2026.35,y:340.4},0).wait(1).to({x:2025.55,y:338.45},0).wait(1).to({x:2024.75,y:336.5},0).wait(1).to({x:2023.9,y:334.6},0).wait(1).to({x:2023.1,y:332.75},0).wait(1).to({x:2022.25,y:330.95},0).wait(1).to({x:2021.35,y:329.15},0).wait(1).to({x:2020.5,y:327.4},0).wait(1).to({x:2019.6,y:325.65},0).wait(1).to({x:2018.7,y:323.95},0).wait(1).to({x:2017.8,y:322.25},0).wait(1).to({x:2016.9,y:320.6},0).wait(1).to({x:2015.95,y:318.95},0).wait(1).to({x:2015.05,y:317.35},0).wait(1).to({x:2014.1,y:315.75},0).wait(1).to({x:2013.1,y:314.2},0).wait(1).to({x:2012.15,y:312.65},0).wait(1).to({x:2011.2,y:311.15},0).wait(1).to({x:2010.2,y:309.65},0).wait(1).to({x:2009.2,y:308.15},0).wait(1).to({x:2008.2,y:306.7},0).wait(1).to({x:2007.2,y:305.25},0).wait(1).to({x:2006.15,y:303.8},0).wait(1).to({x:2005.1,y:302.4},0).wait(1).to({x:2004.1,y:301},0).wait(1).to({x:2003.05,y:299.6},0).wait(1).to({x:2002,y:298.25},0).wait(1).to({x:2000.9,y:296.9},0).wait(1).to({x:1999.85,y:295.55},0).wait(1).to({x:1998.75,y:294.25},0).wait(1).to({x:1997.65,y:292.95},0).wait(1).to({x:1996.55,y:291.65},0).wait(1).to({x:1995.45,y:290.4},0).wait(1).to({x:1994.35,y:289.1},0).wait(1).to({x:1993.2,y:287.85},0).wait(1).to({x:1992.1,y:286.65},0).wait(1).to({x:1990.95,y:285.4},0).wait(1).to({x:1989.8,y:284.2},0).wait(1).to({x:1988.65,y:283},0).wait(1).to({x:1987.45,y:281.8},0).wait(1).to({x:1986.3,y:280.65},0).wait(1).to({x:1985.1,y:279.45},0).wait(1).to({x:1983.95,y:278.3},0).wait(1).to({x:1982.75,y:277.15},0).wait(1).to({x:1981.55,y:276.05},0).wait(1).to({x:1980.35,y:274.9},0).wait(1).to({x:1979.1,y:273.8},0).wait(1).to({x:1977.9,y:272.7},0).wait(1).to({x:1976.65,y:271.6},0).wait(1).to({x:1975.4,y:270.55},0).wait(1).to({x:1974.15,y:269.45},0).wait(1).to({x:1972.9,y:268.4},0).wait(1).to({x:1971.65,y:267.35},0).wait(1).to({x:1970.35,y:266.3},0).wait(1).to({x:1969.1,y:265.25},0).wait(1).to({x:1967.8,y:264.25},0).wait(1).to({x:1966.5,y:263.25},0).wait(1).to({x:1965.2,y:262.25},0).wait(1).to({x:1963.9,y:261.25},0).wait(1).to({x:1962.55,y:260.25},0).wait(1).to({x:1961.25,y:259.25},0).wait(1).to({x:1959.9,y:258.3},0).wait(1).to({x:1958.6,y:257.3},0).wait(1).to({x:1957.25,y:256.35},0).wait(1).to({x:1955.85,y:255.4},0).wait(1).to({x:1954.5,y:254.45},0).wait(1).to({x:1953.15,y:253.5},0).wait(1).to({x:1951.75,y:252.6},0).wait(1).to({x:1950.35,y:251.7},0).wait(1).to({x:1949,y:250.75},0).wait(1).to({x:1947.6,y:249.85},0).wait(1).to({x:1946.15,y:248.95},0).wait(1).to({x:1944.75,y:248.05},0).wait(1).to({x:1943.35,y:247.2},0).wait(1).to({x:1941.9,y:246.3},0).wait(1).to({x:1940.45,y:245.45},0).wait(1).to({x:1939,y:244.55},0).wait(1).to({x:1937.55,y:243.7},0).wait(1).to({x:1936.1,y:242.85},0).wait(1).to({x:1934.6,y:242},0).wait(1).to({x:1933.15,y:241.2},0).wait(1).to({x:1931.65,y:240.35},0).wait(1).to({x:1930.15,y:239.5},0).wait(1).to({x:1928.65,y:238.7},0).wait(1).to({x:1927.15,y:237.9},0).wait(1).to({x:1925.65,y:237.1},0).wait(1).to({x:1924.1,y:236.3},0).wait(1).to({x:1922.55,y:235.5},0).wait(1).to({x:1921.05,y:234.7},0).wait(1).to({x:1919.5,y:233.9},0).wait(1).to({x:1917.9,y:233.15},0).wait(1).to({x:1916.35,y:232.35},0).wait(1).to({x:1914.8,y:231.6},0).wait(1).to({x:1913.2,y:230.85},0).wait(1).to({x:1911.6,y:230.1},0).wait(1).to({x:1910,y:229.35},0).wait(1).to({x:1908.4,y:228.6},0).wait(1).to({x:1906.75,y:227.85},0).wait(1).to({x:1905.15,y:227.1},0).wait(1).to({x:1903.5,y:226.4},0).wait(1).to({x:1901.85,y:225.65},0).wait(1).to({x:1900.2,y:224.95},0).wait(1).to({x:1898.55,y:224.25},0).wait(1).to({x:1896.9,y:223.55},0).wait(1).to({x:1895.2,y:222.85},0).wait(1).to({x:1893.55,y:222.15},0).wait(1).to({x:1891.85,y:221.45},0).wait(1).to({x:1890.15,y:220.75},0).wait(1).to({x:1888.4,y:220.05},0).wait(1).to({x:1886.7,y:219.4},0).wait(1).to({x:1884.95,y:218.7},0).wait(1).to({x:1883.25,y:218.05},0).wait(1).to({x:1881.5,y:217.4},0).wait(1).to({x:1879.7,y:216.75},0).wait(1).to({x:1877.95,y:216.1},0).wait(1).to({x:1876.15,y:215.45},0).wait(1).to({x:1874.4,y:214.8},0).wait(1).to({x:1872.6,y:214.15},0).wait(1).to({x:1870.8,y:213.55},0).wait(1).to({x:1868.95,y:212.9},0).wait(1).to({x:1867.15,y:212.25},0).wait(1).to({x:1865.3,y:211.65},0).wait(1).to({x:1863.45,y:211.05},0).wait(1).to({x:1861.6,y:210.45},0).wait(1).to({x:1859.75,y:209.85},0).wait(1).to({x:1857.85,y:209.25},0).wait(1).to({x:1856,y:208.65},0).wait(1).to({x:1854.1,y:208.05},0).wait(1).to({x:1852.2,y:207.45},0).wait(1).to({x:1850.25,y:206.85},0).wait(1).to({x:1848.35,y:206.3},0).wait(1).to({x:1846.4,y:205.7},0).wait(1).to({x:1844.45,y:205.15},0).wait(1).to({x:1842.5,y:204.6},0).wait(1).to({x:1840.5,y:204},0).wait(1).to({x:1838.55,y:203.45},0).wait(1).to({x:1836.55,y:202.9},0).wait(1).to({x:1834.55,y:202.35},0).wait(1).to({x:1832.55,y:201.8},0).wait(1).to({x:1830.5,y:201.3},0).wait(1).to({x:1828.45,y:200.75},0).wait(1).to({x:1826.4,y:200.2},0).wait(1).to({x:1824.35,y:199.7},0).wait(1).to({x:1822.3,y:199.15},0).wait(1).to({x:1820.2,y:198.65},0).wait(1).to({x:1818.1,y:198.15},0).wait(1).to({x:1816,y:197.65},0).wait(1).to({x:1813.85,y:197.15},0).wait(1).to({x:1811.7,y:196.65},0).wait(1).to({x:1809.6,y:196.15},0).wait(1).to({x:1807.4,y:195.65},0).wait(1).to({x:1805.25,y:195.15},0).wait(1).to({x:1803.05,y:194.65},0).wait(1).to({x:1800.85,y:194.2},0).wait(1).to({x:1798.65,y:193.7},0).wait(1).to({x:1796.4,y:193.25},0).wait(1).to({x:1794.2,y:192.8},0).wait(1).to({x:1791.9,y:192.3},0).wait(1).to({x:1789.65,y:191.85},0).wait(1).to({x:1787.35,y:191.4},0).wait(1).to({x:1785.05,y:190.95},0).wait(1).to({x:1782.75,y:190.5},0).wait(1).to({x:1780.45,y:190.05},0).wait(1).to({x:1778.1,y:189.65},0).wait(1).to({x:1775.75,y:189.2},0).wait(1).to({x:1773.35,y:188.75},0).wait(1).to({x:1771,y:188.35},0).wait(1).to({x:1768.55,y:187.9},0).wait(1).to({x:1766.15,y:187.5},0).wait(1).to({x:1763.7,y:187.1},0).wait(1).to({x:1761.25,y:186.7},0).wait(1).to({x:1758.8,y:186.3},0).wait(1).to({x:1756.3,y:185.9},0).wait(1).to({x:1753.8,y:185.5},0).wait(1).to({x:1751.3,y:185.1},0).wait(1).to({x:1748.75,y:184.7},0).wait(1).to({x:1746.2,y:184.35},0).wait(1).to({x:1743.65,y:183.95},0).wait(1).to({x:1741.05,y:183.6},0).wait(1).to({x:1738.4,y:183.2},0).wait(1).to({x:1735.8,y:182.85},0).wait(1).to({x:1733.15,y:182.5},0).wait(1).to({x:1730.5,y:182.15},0).wait(1).to({x:1727.8,y:181.8},0).wait(1).to({x:1725.1,y:181.45},0).wait(1).to({x:1722.35,y:181.1},0).wait(1).to({x:1719.6,y:180.75},0).wait(1).to({x:1716.85,y:180.4},0).wait(1).to({x:1714.05,y:180.1},0).wait(1).to({x:1711.2,y:179.75},0).wait(1).to({x:1708.4,y:179.45},0).wait(1).to({x:1705.5,y:179.15},0).wait(1).to({x:1702.65,y:178.85},0).wait(1).to({x:1699.75,y:178.55},0).wait(1).to({x:1696.8,y:178.25},0).wait(1).to({x:1693.85,y:177.95},0).wait(1).to({x:1690.85,y:177.65},0).wait(1).to({x:1687.85,y:177.35},0).wait(1).to({x:1684.8,y:177.1},0).wait(1).to({x:1681.75,y:176.8},0).wait(1).to({x:1678.65,y:176.55},0).wait(1).to({x:1675.55,y:176.25},0).wait(16).to({_off:true},1).wait(1));

	// Layer_5
	this.instance_7 = new lib.clouds();
	this.instance_7.setTransform(2039.25,403.35,1,1,0,0,0,387.4,168.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:387.5,regY:168.8,x:2039.15,y:399.35},0).wait(1).to({x:2038.85,y:395.35},0).wait(1).to({x:2038.55,y:391.5},0).wait(1).to({x:2038.15,y:387.8},0).wait(1).to({x:2037.7,y:384.25},0).wait(1).to({x:2037.25,y:380.85},0).wait(1).to({x:2036.7,y:377.5},0).wait(1).to({x:2036.15,y:374.3},0).wait(1).to({x:2035.55,y:371.15},0).wait(1).to({x:2034.9,y:368.15},0).wait(1).to({x:2034.2,y:365.2},0).wait(1).to({x:2033.5,y:362.3},0).wait(1).to({x:2032.75,y:359.5},0).wait(1).to({x:2032,y:356.75},0).wait(1).to({x:2031.2,y:354.1},0).wait(1).to({x:2030.4,y:351.5},0).wait(1).to({x:2029.55,y:348.95},0).wait(1).to({x:2028.65,y:346.5},0).wait(1).to({x:2027.8,y:344.05},0).wait(1).to({x:2026.85,y:341.65},0).wait(1).to({x:2025.95,y:339.3},0).wait(1).to({x:2024.95,y:337.05},0).wait(1).to({x:2024,y:334.8},0).wait(1).to({x:2023,y:332.6},0).wait(1).to({x:2022,y:330.4},0).wait(1).to({x:2020.95,y:328.3},0).wait(1).to({x:2019.9,y:326.2},0).wait(1).to({x:2018.85,y:324.15},0).wait(1).to({x:2017.75,y:322.15},0).wait(1).to({x:2016.65,y:320.15},0).wait(1).to({x:2015.55,y:318.2},0).wait(1).to({x:2014.4,y:316.3},0).wait(1).to({x:2013.25,y:314.4},0).wait(1).to({x:2012.1,y:312.55},0).wait(1).to({x:2010.9,y:310.7},0).wait(1).to({x:2009.7,y:308.9},0).wait(1).to({x:2008.5,y:307.15},0).wait(1).to({x:2007.3,y:305.4},0).wait(1).to({x:2006.05,y:303.7},0).wait(1).to({x:2004.8,y:302},0).wait(1).to({x:2003.55,y:300.3},0).wait(1).to({x:2002.3,y:298.65},0).wait(1).to({x:2001,y:297.05},0).wait(1).to({x:1999.7,y:295.4},0).wait(1).to({x:1998.4,y:293.85},0).wait(1).to({x:1997.1,y:292.3},0).wait(1).to({x:1995.75,y:290.75},0).wait(1).to({x:1994.4,y:289.2},0).wait(1).to({x:1993.05,y:287.7},0).wait(1).to({x:1991.7,y:286.25},0).wait(1).to({x:1990.35,y:284.75},0).wait(1).to({x:1988.95,y:283.3},0).wait(1).to({x:1987.55,y:281.9},0).wait(1).to({x:1986.15,y:280.5},0).wait(1).to({x:1984.75,y:279.1},0).wait(1).to({x:1983.3,y:277.7},0).wait(1).to({x:1981.85,y:276.35},0).wait(1).to({x:1980.45,y:275},0).wait(1).to({x:1978.95,y:273.7},0).wait(1).to({x:1977.5,y:272.35},0).wait(1).to({x:1976.05,y:271.1},0).wait(1).to({x:1974.55,y:269.8},0).wait(1).to({x:1973.05,y:268.55},0).wait(1).to({x:1971.55,y:267.3},0).wait(1).to({x:1970.05,y:266.05},0).wait(1).to({x:1968.5,y:264.8},0).wait(1).to({x:1967,y:263.6},0).wait(1).to({x:1965.45,y:262.4},0).wait(1).to({x:1963.9,y:261.2},0).wait(1).to({x:1962.35,y:260.05},0).wait(1).to({x:1960.75,y:258.9},0).wait(1).to({x:1959.2,y:257.75},0).wait(1).to({x:1957.6,y:256.6},0).wait(1).to({x:1956,y:255.5},0).wait(1).to({x:1954.4,y:254.4},0).wait(1).to({x:1952.8,y:253.3},0).wait(1).to({x:1951.2,y:252.2},0).wait(1).to({x:1949.55,y:251.15},0).wait(1).to({x:1947.9,y:250.05},0).wait(1).to({x:1946.25,y:249},0).wait(1).to({x:1944.6,y:248},0).wait(1).to({x:1942.95,y:246.95},0).wait(1).to({x:1941.3,y:245.95},0).wait(1).to({x:1939.6,y:244.95},0).wait(1).to({x:1937.95,y:243.95},0).wait(1).to({x:1936.25,y:242.95},0).wait(1).to({x:1934.55,y:241.95},0).wait(1).to({x:1932.85,y:241},0).wait(1).to({x:1931.1,y:240.05},0).wait(1).to({x:1929.4,y:239.1},0).wait(1).to({x:1927.65,y:238.15},0).wait(1).to({x:1925.9,y:237.25},0).wait(1).to({x:1924.15,y:236.3},0).wait(1).to({x:1922.4,y:235.4},0).wait(1).to({x:1920.65,y:234.5},0).wait(1).to({x:1918.9,y:233.6},0).wait(1).to({x:1917.1,y:232.75},0).wait(1).to({x:1915.3,y:231.85},0).wait(1).to({x:1913.55,y:231},0).wait(1).to({x:1911.75,y:230.15},0).wait(1).to({x:1909.9,y:229.3},0).wait(1).to({x:1908.1,y:228.45},0).wait(1).to({x:1906.3,y:227.6},0).wait(1).to({x:1904.45,y:226.8},0).wait(1).to({x:1902.6,y:226},0).wait(1).to({x:1900.75,y:225.2},0).wait(1).to({x:1898.9,y:224.4},0).wait(1).to({x:1897.05,y:223.6},0).wait(1).to({x:1895.2,y:222.8},0).wait(1).to({x:1893.3,y:222.05},0).wait(1).to({x:1891.45,y:221.3},0).wait(1).to({x:1889.55,y:220.5},0).wait(1).to({x:1887.65,y:219.75},0).wait(1).to({x:1885.75,y:219.05},0).wait(1).to({x:1883.85,y:218.3},0).wait(1).to({x:1881.9,y:217.55},0).wait(1).to({x:1880,y:216.85},0).wait(1).to({x:1878.05,y:216.15},0).wait(1).to({x:1876.15,y:215.4},0).wait(1).to({x:1874.2,y:214.7},0).wait(1).to({x:1872.2,y:214.05},0).wait(1).to({x:1870.25,y:213.35},0).wait(1).to({x:1868.3,y:212.65},0).wait(1).to({x:1866.3,y:212},0).wait(1).to({x:1864.35,y:211.35},0).wait(1).to({x:1862.35,y:210.65},0).wait(1).to({x:1860.35,y:210},0).wait(1).to({x:1858.35,y:209.4},0).wait(1).to({x:1856.35,y:208.75},0).wait(1).to({x:1854.3,y:208.1},0).wait(1).to({x:1852.3,y:207.5},0).wait(1).to({x:1850.25,y:206.85},0).wait(1).to({x:1848.25,y:206.25},0).wait(1).to({x:1846.2,y:205.65},0).wait(1).to({x:1844.15,y:205.05},0).wait(1).to({x:1842.05,y:204.45},0).wait(1).to({x:1840,y:203.9},0).wait(1).to({x:1837.95,y:203.3},0).wait(1).to({x:1835.85,y:202.7},0).wait(1).to({x:1833.75,y:202.15},0).wait(1).to({x:1831.65,y:201.6},0).wait(1).to({x:1829.55,y:201.05},0).wait(1).to({x:1827.45,y:200.5},0).wait(1).to({x:1825.35,y:199.95},0).wait(1).to({x:1823.2,y:199.4},0).wait(1).to({x:1821.1,y:198.85},0).wait(1).to({x:1818.95,y:198.35},0).wait(1).to({x:1816.8,y:197.85},0).wait(1).to({x:1814.65,y:197.3},0).wait(1).to({x:1812.5,y:196.8},0).wait(1).to({x:1810.3,y:196.3},0).wait(1).to({x:1808.15,y:195.8},0).wait(1).to({x:1805.95,y:195.3},0).wait(1).to({x:1803.8,y:194.85},0).wait(1).to({x:1801.6,y:194.35},0).wait(1).to({x:1799.4,y:193.85},0).wait(1).to({x:1797.2,y:193.4},0).wait(1).to({x:1794.95,y:192.95},0).wait(1).to({x:1792.75,y:192.5},0).wait(1).to({x:1790.5,y:192.05},0).wait(1).to({x:1788.25,y:191.6},0).wait(1).to({x:1786.05,y:191.15},0).wait(1).to({x:1783.8,y:190.7},0).wait(1).to({x:1781.5,y:190.25},0).wait(1).to({x:1779.25,y:189.85},0).wait(1).to({x:1777,y:189.4},0).wait(1).to({x:1774.7,y:189},0).wait(1).to({x:1772.4,y:188.6},0).wait(1).to({x:1770.1,y:188.2},0).wait(1).to({x:1767.8,y:187.8},0).wait(1).to({x:1765.5,y:187.4},0).wait(1).to({x:1763.2,y:187},0).wait(1).to({x:1760.85,y:186.6},0).wait(1).to({x:1758.55,y:186.25},0).wait(1).to({x:1756.2,y:185.85},0).wait(1).to({x:1753.85,y:185.5},0).wait(1).to({x:1751.5,y:185.15},0).wait(1).to({x:1749.15,y:184.75},0).wait(1).to({x:1746.8,y:184.4},0).wait(1).to({x:1744.4,y:184.05},0).wait(1).to({x:1742.05,y:183.7},0).wait(1).to({x:1739.65,y:183.4},0).wait(1).to({x:1737.25,y:183.05},0).wait(1).to({x:1734.85,y:182.7},0).wait(1).to({x:1732.45,y:182.4},0).wait(1).to({x:1730,y:182.05},0).wait(1).to({x:1727.6,y:181.75},0).wait(1).to({x:1725.15,y:181.45},0).wait(1).to({x:1722.7,y:181.15},0).wait(1).to({x:1720.25,y:180.85},0).wait(1).to({x:1717.8,y:180.55},0).wait(1).to({x:1715.35,y:180.25},0).wait(1).to({x:1712.9,y:179.95},0).wait(1).to({x:1710.4,y:179.7},0).wait(1).to({x:1707.9,y:179.4},0).wait(1).to({x:1705.45,y:179.15},0).wait(1).to({x:1702.9,y:178.85},0).wait(1).to({x:1700.4,y:178.6},0).wait(1).to({x:1697.9,y:178.35},0).wait(1).to({x:1695.4,y:178.1},0).wait(1).to({x:1692.85,y:177.85},0).wait(1).to({x:1690.3,y:177.6},0).wait(1).to({x:1687.75,y:177.35},0).wait(1).to({x:1685.2,y:177.1},0).wait(1).to({x:1682.65,y:176.9},0).wait(1).to({x:1680.1,y:176.65},0).wait(1).to({x:1677.5,y:176.45},0).wait(1).to({x:1674.9,y:176.2},0).wait(1).to({x:1672.3,y:176},0).wait(1).to({x:1669.7,y:175.8},0).wait(1).to({x:1667.1,y:175.6},0).wait(1).to({x:1664.5,y:175.4},0).wait(1).to({x:1661.85,y:175.2},0).wait(1).to({x:1659.25,y:175},0).wait(1).to({x:1656.6,y:174.8},0).wait(1).to({x:1653.95,y:174.65},0).wait(1).to({x:1651.3,y:174.45},0).wait(1).to({x:1648.65,y:174.3},0).wait(1).to({x:1645.95,y:174.1},0).wait(1).to({x:1643.25,y:173.95},0).wait(1).to({x:1640.6,y:173.8},0).wait(1).to({x:1637.9,y:173.65},0).wait(1).to({x:1635.2,y:173.5},0).wait(1).to({x:1632.45,y:173.35},0).wait(1).to({x:1629.75,y:173.2},0).wait(1).to({x:1627,y:173.05},0).wait(1).to({x:1624.3,y:172.95},0).wait(1).to({x:1621.55,y:172.8},0).wait(1).to({x:1618.75,y:172.65},0).wait(1).to({x:1616,y:172.55},0).wait(1).to({x:1613.25,y:172.45},0).wait(1).to({x:1610.45,y:172.35},0).wait(1).to({x:1607.65,y:172.2},0).wait(1).to({x:1604.85,y:172.1},0).wait(1).to({x:1602.05,y:172},0).wait(1).to({x:1599.25,y:171.95},0).wait(1).to({x:1596.4,y:171.85},0).wait(1).to({x:1593.6,y:171.75},0).wait(1).to({x:1590.75,y:171.65},0).wait(1).to({x:1587.9,y:171.6},0).wait(1).to({x:1585.05,y:171.5},0).wait(1).to({x:1582.2,y:171.45},0).wait(1).to({x:1579.3,y:171.4},0).wait(1).to({x:1576.4,y:171.35},0).wait(1).to({x:1573.5,y:171.3},0).wait(1).to({x:1570.6,y:171.25},0).wait(1).to({x:1567.7,y:171.2},0).wait(1).to({x:1564.8,y:171.15},0).wait(1).to({x:1561.85,y:171.1},0).wait(1).to({x:1558.9,y:171.05},0).wait(1).to({x:1555.95},0).wait(1).to({x:1553,y:171},0).wait(1).to({x:1550.05},0).wait(1).to({x:1547.05},0).wait(1).to({x:1544.1,y:170.95},0).wait(1).to({x:1541.1},0).wait(1).to({x:1538.1},0).wait(1).to({x:1535.05},0).wait(1).to({x:1532.05},0).wait(1).to({x:1529,y:171},0).wait(1).to({x:1525.95},0).wait(1).to({x:1522.9},0).wait(1).to({x:1519.85,y:171.05},0).wait(1).to({x:1516.8},0).wait(1).to({x:1513.7,y:171.1},0).wait(1).to({x:1510.6,y:171.15},0).wait(1).to({x:1507.5},0).wait(1).to({x:1504.4,y:171.2},0).wait(1).to({x:1501.3,y:171.25},0).wait(1).to({x:1498.15,y:171.3},0).wait(1).to({x:1495,y:171.4},0).wait(1).to({x:1491.85,y:171.45},0).wait(1).to({x:1488.7,y:171.5},0).wait(1).to({x:1485.5,y:171.6},0).wait(1).to({x:1482.35,y:171.65},0).wait(1).to({x:1479.15,y:171.75},0).wait(1).to({x:1475.95,y:171.8},0).wait(1).to({x:1472.75,y:171.9},0).wait(1).to({x:1469.5,y:172},0).wait(1).to({x:1466.3,y:172.1},0).wait(1).to({x:1463.05,y:172.2},0).wait(1).to({x:1459.8,y:172.3},0).wait(1).to({x:1456.5,y:172.4},0).wait(1).to({x:1453.25,y:172.55},0).wait(1).to({x:1449.95,y:172.65},0).wait(1).to({x:1446.65,y:172.8},0).wait(1).to({x:1443.35,y:172.9},0).wait(1).to({x:1440,y:173.05},0).wait(1).to({x:1436.7,y:173.2},0).wait(1).to({x:1433.35,y:173.3},0).wait(1).to({x:1430,y:173.45},0).wait(1).to({x:1426.6,y:173.6},0).wait(1).to({x:1423.25,y:173.8},0).wait(1).to({x:1419.85,y:173.95},0).wait(1).to({x:1416.45,y:174.1},0).wait(1).to({x:1413.05,y:174.3},0).wait(1).to({x:1409.6,y:174.45},0).wait(1).to({x:1406.2,y:174.65},0).wait(1).to({x:1402.75,y:174.8},0).wait(1).to({x:1399.3,y:175},0).wait(1).to({x:1395.8,y:175.2},0).wait(1).to({x:1392.35,y:175.4},0).wait(1).to({x:1388.85,y:175.6},0).wait(1).to({x:1385.3,y:175.8},0).wait(1).to({x:1381.8,y:176},0).wait(1).to({x:1378.25,y:176.25},0).wait(1).to({x:1374.75,y:176.45},0).wait(1).to({x:1371.15,y:176.7},0).wait(1).to({x:1367.6,y:176.9},0).wait(1).to({x:1364,y:177.15},0).wait(1).to({x:1360.4,y:177.4},0).wait(1).to({x:1356.8,y:177.65},0).wait(1).to({x:1353.2,y:177.9},0).wait(1).to({x:1349.55,y:178.15},0).wait(1).to({x:1345.9,y:178.4},0).wait(1).to({x:1342.25,y:178.65},0).wait(1).to({x:1338.6,y:178.95},0).wait(1).to({x:1334.9,y:179.2},0).wait(1).to({x:1331.2,y:179.5},0).wait(1).to({x:1327.5,y:179.75},0).wait(1).to({x:1323.75,y:180.05},0).wait(1).to({x:1320,y:180.35},0).wait(1).to({x:1316.25,y:180.65},0).wait(1).to({x:1312.5,y:180.95},0).wait(1).to({x:1308.7,y:181.25},0).wait(1).to({x:1304.9,y:181.6},0).wait(1).to({x:1301.1,y:181.9},0).wait(1).to({x:1297.25,y:182.25},0).wait(1).to({x:1293.4,y:182.55},0).wait(1).to({x:1289.55,y:182.9},0).wait(1).to({x:1285.7,y:183.25},0).wait(1).to({x:1281.8,y:183.6},0).wait(1).to({x:1277.9,y:183.95},0).wait(1).to({x:1274,y:184.3},0).wait(1).to({x:1270.05,y:184.65},0).wait(1).to({x:1266.1,y:185},0).wait(1).to({x:1262.15,y:185.4},0).wait(1).to({x:1258.2,y:185.75},0).wait(1).to({x:1254.2,y:186.15},0).wait(1).to({x:1250.15,y:186.55},0).wait(1).to({x:1246.15,y:186.95},0).wait(1).to({x:1242.1,y:187.35},0).wait(1).to({x:1238.05,y:187.75},0).wait(1).to({x:1234,y:188.15},0).wait(1).to({x:1229.9,y:188.55},0).wait(1).to({x:1225.8,y:189},0).wait(1).to({x:1221.65,y:189.4},0).wait(1).to({x:1217.5,y:189.85},0).wait(1).to({x:1213.35,y:190.3},0).wait(1).to({x:1209.2,y:190.75},0).wait(1).to({x:1205,y:191.2},0).wait(1).to({x:1200.75,y:191.65},0).wait(1).to({x:1196.55,y:192.1},0).wait(1).to({x:1192.3,y:192.55},0).wait(1).to({x:1188.05,y:193.05},0).wait(1).to({x:1183.75,y:193.5},0).wait(1).to({x:1179.45,y:194},0).wait(1).to({x:1175.15,y:194.5},0).wait(1).to({x:1170.8,y:195},0).wait(1).to({x:1166.45,y:195.5},0).wait(1).to({x:1162.05,y:196},0).wait(1).to({x:1157.65,y:196.55},0).wait(1).to({x:1153.25,y:197.05},0).wait(1).to({x:1148.8,y:197.6},0).wait(1).to({x:1144.35,y:198.1},0).wait(1).to({x:1139.85,y:198.65},0).wait(1).to({x:1135.4,y:199.2},0).wait(1).to({x:1130.85,y:199.75},0).wait(1).to({x:1126.3,y:200.35},0).wait(1).to({x:1121.75,y:200.9},0).wait(1).to({x:1117.2,y:201.45},0).wait(1).to({x:1112.6,y:202.05},0).wait(1).to({x:1107.95,y:202.65},0).wait(1).to({x:1103.3,y:203.25},0).wait(1).to({x:1098.65,y:203.85},0).wait(1).to({x:1093.95,y:204.45},0).wait(1).to({x:1089.25,y:205.05},0).wait(1).to({x:1084.5,y:205.7},0).wait(1).to({x:1079.75,y:206.3},0).wait(1).to({x:1074.95,y:206.95},0).wait(1).to({x:1070.15,y:207.6},0).wait(1).to({x:1065.35,y:208.25},0).wait(1).to({x:1060.5,y:208.9},0).wait(1).to({x:1055.6,y:209.6},0).wait(1).to({x:1050.7,y:210.25},0).wait(1).to({x:1045.75,y:210.95},0).wait(1).to({x:1040.8,y:211.65},0).wait(1).to({x:1035.85,y:212.35},0).wait(1).to({x:1030.85,y:213.05},0).wait(1).to({x:1025.8,y:213.75},0).wait(1).to({x:1020.75,y:214.5},0).wait(1).to({x:1015.65,y:215.2},0).wait(1).to({x:1010.55,y:215.95},0).wait(1).to({x:1005.4,y:216.7},0).wait(1).to({x:1000.25,y:217.45},0).wait(1).to({x:995.05,y:218.2},0).wait(1).to({x:989.8,y:219},0).wait(1).to({x:984.55,y:219.75},0).wait(1).to({x:979.25,y:220.55},0).wait(1).to({x:973.95,y:221.35},0).wait(1).to({x:968.6,y:222.15},0).wait(1).to({x:963.2,y:223},0).wait(1).to({x:957.8,y:223.8},0).wait(1).to({x:952.35,y:224.65},0).wait(1).to({x:946.9,y:225.5},0).wait(1).to({x:941.4,y:226.35},0).wait(1).to({x:935.85,y:227.2},0).wait(1).to({x:930.3,y:228.1},0).wait(1).to({x:924.7,y:228.95},0).wait(1).to({x:919.05,y:229.85},0).wait(1).to({x:913.35,y:230.75},0).wait(1).to({x:907.65,y:231.7},0).wait(1).to({x:901.9,y:232.6},0).wait(1).to({x:896.1,y:233.55},0).wait(1).to({x:890.3,y:234.5},0).wait(1).to({x:884.45,y:235.45},0).wait(1).to({x:878.55,y:236.4},0).wait(1).to({x:872.6,y:237.4},0).wait(1).to({x:866.6,y:238.4},0).wait(1).to({x:860.6,y:239.4},0).wait(1).to({x:854.55,y:240.4},0).wait(1).to({x:848.4,y:241.45},0).wait(1).to({x:842.3,y:242.5},0).wait(1).to({x:836.1,y:243.55},0).wait(1).to({x:829.85,y:244.6},0).wait(1).to({x:823.55,y:245.65},0).wait(1).to({x:817.25,y:246.75},0).wait(1).to({x:810.85,y:247.85},0).wait(1).to({x:804.45,y:249},0).wait(1).to({x:797.95,y:250.1},0).wait(1).to({x:791.45,y:251.25},0).wait(1).to({x:784.9,y:252.4},0).wait(1).to({x:778.25,y:253.6},0).wait(1).to({x:771.55,y:254.75},0).wait(1).to({x:764.85,y:256},0).wait(1).to({x:758.05,y:257.2},0).wait(1).to({x:751.2,y:258.45},0).wait(1).to({x:744.3,y:259.7},0).wait(1).to({x:737.35,y:260.95},0).wait(1).to({x:730.35,y:262.2},0).wait(1).to({x:723.25,y:263.5},0).wait(1).to({x:716.1,y:264.85},0).wait(1).to({x:708.9,y:266.15},0).wait(1).to({x:701.6,y:267.55},0).wait(1).to({x:694.25,y:268.9},0).wait(1).to({x:686.85,y:270.3},0).wait(1).to({x:679.35,y:271.7},0).wait(1).to({x:671.8,y:273.1},0).wait(1).to({x:664.2,y:274.55},0).wait(1).to({x:656.45,y:276.05},0).wait(1).to({x:648.7,y:277.55},0).wait(1).to({x:640.8,y:279.05},0).wait(1).to({x:632.85,y:280.6},0).wait(1).to({x:624.8,y:282.15},0).wait(1).to({x:616.7,y:283.75},0).wait(1).to({x:608.45,y:285.35},0).wait(1).to({x:600.15,y:286.95},0).wait(1).to({x:591.75,y:288.65},0).wait(1).to({x:583.2,y:290.3},0).wait(1).to({x:574.6,y:292.05},0).wait(1).to({x:565.9,y:293.75},0).wait(1).to({x:557.05,y:295.55},0).wait(1).to({x:548.1,y:297.35},0).wait(1).to({x:539.05,y:299.2},0).wait(1).to({x:529.85,y:301.05},0).wait(1).to({x:520.55,y:302.95},0).wait(1).to({x:511.1,y:304.9},0).wait(1).to({x:501.5,y:306.85},0).wait(1).to({x:491.75,y:308.85},0).wait(1).to({x:481.9,y:310.9},0).wait(1).to({x:471.85,y:313},0).wait(1).to({x:461.65,y:315.15},0).wait(1).to({x:451.3,y:317.3},0).wait(1).to({x:440.75,y:319.55},0).wait(1).to({x:430,y:321.8},0).wait(1).to({x:419.1,y:324.15},0).wait(1).to({x:407.95,y:326.5},0).wait(1).to({x:396.6,y:328.95},0).wait(1).to({x:385.05,y:331.45},0).wait(16).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,0,2606.8,957.9);


(lib.squirrel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop()
	}
	this.frame_1 = function() {
		var self = this
		self.stop();
	}
	this.frame_2 = function() {
		var self = this
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_44();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.falseAni();
	this.instance_1.setTransform(45.5,98.7,1,1,0,0,0,69,99.2);

	this.instance_2 = new lib.trueani();
	this.instance_2.setTransform(56,98,1,1,0,0,0,62.5,101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-1.2,113.10000000000001,199.7);


(lib.soundBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop()
		self.addEventListener("rollover",next)
		self.cursor = "pointer"
		
		function next(){
			self.gotoAndStop(1)
		}
	}
	this.frame_1 = function() {
		var self = this;
		self.stop()
		
		self.addEventListener("rollout",next)
		self.cursor = "pointer"
		function next(){
			self.gotoAndStop(0)
		}
	}
	this.frame_2 = function() {
		var self = this;
		self.stop()
		self.addEventListener("rollover",next)
		self.cursor = "pointer"
		
		function next(){
			self.gotoAndStop(3)
		}
	}
	this.frame_3 = function() {
		var self = this;
		self.stop()
		
		self.addEventListener("rollout",next)
		self.cursor = "pointer"
		function next(){
			self.gotoAndStop(2)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.992)").s().p("AAyISQAAgFgDgCQi9ibi7ieIgKAAIkiAAIAAgKIAAmZIEiAAIAKAAQC/iaC5ifQADgCAAgFIAKAAIAAQZIAAAKIgKAAgAGkGGQgKgPAEgFQBBhbAch6QBOlIi5iyQBWhmBGCQQAwBjAaCBIAACpIAAAKQgFAAAAABQgkC3hjB0QgFAAgCADQgMANgNAAQgSAAgUgagAFAEYQg3gSATgoQABgCAFAAQCNi4h9jLQgQgbgUgZQBahqBDCUQAeBDgBBlQgEDnh9A+IgBAAQgCAAgEgEgAC8A5QACgCAAgFQAYhZg9g1QgDgCAAgFQBghvAnCqQAAABAFAAQAGCuhXAiQgEABgFAAQhIgxA8hAg");
	this.shape.setTransform(140.7051,-4.1042,1.2227,1.2684);

	this.instance = new lib.bgcn();
	this.instance.setTransform(80,296.05,1,1,90,0,0,0,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(209,138,92,0.008)").s().p("AvBOVQmOl7AAoaQAAoZGOl7QGOl7I0AAQI0AAGOF7QGNF7AAIZQAAIamNF7QmOF7o0ABQo0gBmOl7g");
	this.shape_1.setTransform(153.3,118.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFDCA").s().p("AA9KgQAAgGgDgCQjojFjljIIgMAAIliAAIAAgNIAAoHIFiAAIAMAAQDrjEDijJQADgDAAgGIAMAAIAAUzIAAAMIgMAAgAIBHvQgMgTAFgGQBQh1AiiaQBfmgjijiQBqiABVC2QA6B9AgCkIAADWIAAANQgGAAAAABQgsDoh5CUQgGAAgDADQgPARgPAAQgXAAgYghgAGHFjQhEgWAYgzQABgDAGAAQCtjoiYkDQgVgigYggQBviGBRC8QAkBUgBCBQgEEliZBOIgBABQgDAAgFgGgADlBJQADgDAAgGQAehxhMhEQgDgCAAgHQB1iMAwDXQAAABAGAAQAHDehpAqQgFACgHAAQhXg/BIhQg");
	this.shape_2.setTransform(141.025,-4.125);

	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(59.2,-95.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_16();
	this.instance_2.setTransform(59.2,-95.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape_2}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.3,-124.1,277,372.29999999999995);


(lib.progressBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this
		self.countQ.font ="bold 18px Varela Round"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// flash0_ai
	this.instance = new lib.CachedBmp_42();
	this.instance.setTransform(35.2,-40.9,0.5,0.5);

	this.bar = new lib.bar();
	this.bar.name = "bar";
	this.bar.setTransform(46.6,100,1,0.8,0,0,0,12,125);

	this.countQ = new cjs.Text("", "18px 'Arial'", "#6D4939");
	this.countQ.name = "countQ";
	this.countQ.textAlign = "center";
	this.countQ.lineHeight = 20;
	this.countQ.lineWidth = 68;
	this.countQ.parent = this;
	this.countQ.setTransform(81.8,233.65);

	this.instance_1 = new lib.CachedBmp_41();
	this.instance_1.setTransform(0,193.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_40();
	this.instance_2.setTransform(16,-54.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.countQ},{t:this.bar},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progressBar, new cjs.Rectangle(0,-54.6,157,331.8), null);


(lib.forcomb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.startbtn = new lib.start();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(36.2,105.7,1,1,0,0,0,39.1,41.3);

	this.timeline.addTween(cjs.Tween.get(this.startbtn).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-8.2,61.4,88.5,88.5), null);


(lib.endfeedback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		self.header.font = "bold 64px Varela Round"
		self.txt.font = "bold 32px Varela Round"
		self.feedback.font = "bold 24px Varela Round"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.restart = new lib.restart();
	this.restart.name = "restart";
	this.restart.setTransform(223.9,313.45,1,1,0,0,0,39.1,41.3);

	this.newgame = new lib.newgame();
	this.newgame.name = "newgame";
	this.newgame.setTransform(360.9,313.45,1,1,0,0,0,39.1,41.3);

	this.feedback = new cjs.Text("", "18px 'Arial'", "#6D4939");
	this.feedback.name = "feedback";
	this.feedback.textAlign = "center";
	this.feedback.lineHeight = 22;
	this.feedback.lineWidth = 531;
	this.feedback.parent = this;
	this.feedback.setTransform(290.5,204.5);

	this.txt = new cjs.Text("יש לי מלא אגוזים לחורף", "32px 'Arial'", "#6D4939");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 38;
	this.txt.lineWidth = 395;
	this.txt.parent = this;
	this.txt.setTransform(292.35,131.05);

	this.header = new cjs.Text("כל הכבוד!", "64px 'Arial'", "#6D4939");
	this.header.name = "header";
	this.header.textAlign = "center";
	this.header.lineHeight = 74;
	this.header.lineWidth = 340;
	this.header.parent = this;
	this.header.setTransform(292.35,32.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6D4939").ss(7,1,1).p("Egh8gW1MBD5AAAQE3AADcDcQDcDcAAE3IAAWNQAAE3jcDcQjcDck3AAMhD5AAAQk3AAjcjcQjbjcAAk3IAA2NQAAk3DbjcQDcjcE3AAg");
	this.shape.setTransform(292.35,188.2633,1,1.2878);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egh8AW2Qk3AAjcjcQjbjcgBk3IAA2NQABk3DbjcQDcjcE3AAMBD5AAAQE3AADbDcQDdDcAAE3IAAWNQAAE3jdDcQjbDck3AAg");
	this.shape_1.setTransform(292.35,188.2633,1,1.2878);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.header},{t:this.txt},{t:this.feedback},{t:this.newgame},{t:this.restart}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endfeedback, new cjs.Rectangle(-3.5,-3.5,591.7,383.5), null);


(lib.timefeedback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop()
		
		self.header.font="bold 64px Varela Round"
		self.txt.font="bold 32px Varela Round"
	}
	this.frame_1 = function() {
		var self = this;
		self.stop()
		self.header.font="bold 64px Varela Round"
		self.txt.font="bold 32px Varela Round"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.continueBtn = new lib.continueBtn();
	this.continueBtn.name = "continueBtn";
	this.continueBtn.setTransform(669.05,552.6,1,1,0,0,0,39.1,41.3);

	this.txt = new cjs.Text("כדאי למהר החורף מתקרב", "40px 'Arial'", "#6B4834");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 47;
	this.txt.lineWidth = 465;
	this.txt.parent = this;
	this.txt.setTransform(669,306.05);

	this.header = new cjs.Text("נגמר הזמן!", "50px 'Arial'", "#6B4834");
	this.header.name = "header";
	this.header.textAlign = "center";
	this.header.lineHeight = 58;
	this.header.lineWidth = 350;
	this.header.parent = this;
	this.header.setTransform(669,235.45);

	this.instance = new lib.timepic();
	this.instance.setTransform(669,431.65,0.7314,0.7314,0,0,0,84,75.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6C4027").ss(8,1,1).p("EgwXghsMBguAAAQE4AADbDbQDcDcAAE3MAAAAr9QAAE3jcDcQjbDck4AAMhguAAAQk3AAjcjcQjbjcAAk3MAAAgr9QAAk3DbjcQDcjbE3AAg");
	this.shape.setTransform(669,396.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgwXAhuQk2gBjdjcQjbjbAAk3MAAAgr9QAAk3DbjcQDdjbE2gBMBguAAAQE3ABDcDbQDcDcAAE3MAAAAr9QAAE3jcDbQjcDck3ABg");
	this.shape_1.setTransform(669,396.25);

	this.instance_1 = new lib.zzz();
	this.instance_1.setTransform(440,450.55);

	this.instance_2 = new lib.CachedBmp_60();
	this.instance_2.setTransform(389.15,467.95,0.5,0.5);

	this.instance_3 = new lib.squirrel();
	this.instance_3.setTransform(379.05,512.65,1,1,0,0,180,55.9,99.3);

	this.instance_4 = new lib.CachedBmp_59();
	this.instance_4.setTransform(280.4,176.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.header,p:{text:"נגמר הזמן!",font:"50px 'Arial'",lineHeight:57.85}},{t:this.txt,p:{text:"כדאי למהר החורף מתקרב",font:"40px 'Arial'",lineHeight:46.7,lineWidth:465}},{t:this.continueBtn}]}).to({state:[{t:this.instance_4},{t:this.header,p:{text:"הפסקה!",font:"50px 'Times New Roman'",lineHeight:57.35}},{t:this.txt,p:{text:"התעייפתי קצת\nעוד מעט נמשיך לקטוף אגוזים",font:"40px 'Times New Roman'",lineHeight:46.3,lineWidth:522}},{t:this.continueBtn},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280.4,176.5,777.1999999999999,439.5);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(22.8,21.75,0.1664,0.1661,0,0,0,137.1,130.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(7.5,1.8,22.1,20.599999999999998), null);


(lib.starFrame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.header.font = "bold 30px Varela Round";
		self.msg.font = "14px Varela Round";
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.msg = new cjs.Text("", "14px 'Arial'", "#FF0000");
	this.msg.name = "msg";
	this.msg.textAlign = "center";
	this.msg.lineHeight = 18;
	this.msg.lineWidth = 227;
	this.msg.parent = this;
	this.msg.setTransform(948.4,360.3);

	this.gameCodeTXT = new lib.an_TextInput({'id': 'gameCodeTXT', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.gameCodeTXT.name = "gameCodeTXT";
	this.gameCodeTXT.setTransform(949.75,335.4,2.12,2.12,0,0,0,50.1,11.2);

	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(217.4,115.45,0.5,0.5);

	this.forcombo = new lib.forcomb();
	this.forcombo.name = "forcombo";
	this.forcombo.setTransform(912.85,334.6,1,1,0,0,0,7.9,11);

	this.header = new cjs.Text("הכניסו קוד משחק", "30px 'Arial'", "#6C4027");
	this.header.name = "header";
	this.header.textAlign = "center";
	this.header.lineHeight = 36;
	this.header.lineWidth = 447;
	this.header.parent = this;
	this.header.setTransform(942.3,219.3);

	this.instance_1 = new lib.CachedBmp_55();
	this.instance_1.setTransform(696.5,98,0.5,0.5);

	this.instance_2 = new lib.startSquirrel();
	this.instance_2.setTransform(1220.2,605.2,1,1,0,0,0,47.8,95.8);

	this.instance_3 = new lib.CachedBmp_54();
	this.instance_3.setTransform(88.05,668.05,0.5,0.5);

	this.instance_4 = new lib.tree();
	this.instance_4.setTransform(322.5,357.55,1,1,0,0,0,518.4,358.9);

	this.instance_5 = new lib.startAnimation();
	this.instance_5.setTransform(1065.35,458.2,1,1,0,0,0,1302.2,458.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.header},{t:this.forcombo},{t:this.instance},{t:this.gameCodeTXT},{t:this.msg}]}).to({state:[{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.8,0,2426.8,957.9);


(lib.branch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this
		self.timer.font = "Bold 24px Varela Round"
		self.gameName.font = "Bold 24px Varela Round"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.gameName = new cjs.Text("", "24px 'Arial'", "#FFFFFF");
	this.gameName.name = "gameName";
	this.gameName.textAlign = "center";
	this.gameName.lineHeight = 29;
	this.gameName.lineWidth = 208;
	this.gameName.parent = this;
	this.gameName.setTransform(1100.9,26.95);

	this.soundBtn = new lib.soundBtn();
	this.soundBtn.name = "soundBtn";
	this.soundBtn.setTransform(74.25,143.3,0.1754,0.1704,0,0,0,161.3,121.8);

	this.clock = new lib.Symbol3();
	this.clock.name = "clock";
	this.clock.setTransform(178.3,144.75,2.0681,2.0269,0,0,0,23.2,22.3);

	this.stopBtn = new lib.stop();
	this.stopBtn.name = "stopBtn";
	this.stopBtn.setTransform(131.85,121.8,0.4535,0.4597,0,0,0,160,119.9);

	this.timer = new cjs.Text("", "24px 'Arial'", "#FFFFFF");
	this.timer.name = "timer";
	this.timer.textAlign = "center";
	this.timer.lineHeight = 29;
	this.timer.lineWidth = 100;
	this.timer.parent = this;
	this.timer.setTransform(228.6,116.8);

	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(-60.75,-11.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_13();
	this.instance_1.setTransform(-3.95,42.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.timer},{t:this.stopBtn},{t:this.clock},{t:this.soundBtn},{t:this.gameName}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.branch, new cjs.Rectangle(-60.7,-11.5,1524.5,202.1), null);


// stage content:
(lib.Nuts = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this; //שמירה של הבמה
		stage.enableMouseOver(24); //מאפשר מעבר עכבר
		
		canvas.style.direction = "rtl";
		
		WebFontConfig = {
			google: {
		
				families: ['Varela Round']
			}
		};
		(function () {
			var wf = document.createElement('script');
			wf.src = ('https' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
			wf.type = 'text/javascript';
			wf.async = true;
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(wf, s);
		})();
		
		init()
		function init() {
			createjs.Sound.registerSound("sounds/falsewav.mp3", "NO");
			createjs.Sound.registerSound("sounds/truemp3.mp3", "YES");
			createjs.Sound.registerSound("sounds/clockwav.mp3", "clock");
		}
		
		
		//משתנים גלובאלים
		var mychoice = 0;
		var qnum; //מספר שאלה
		var press; //יכיל מערך של מסיחים שנבחרו
		var clicked; //יכיל את מספר המסיחים שנבחרו
		var check; //כפתור בדיקה
		var corrects = 0; //כמה תשובות נכונות ענה
		var wrong = -1; //השאלה הקודמת שהייתה
		var bg; //רקע
		var mytime; //זמן
		var timer; //האינרטוול 
		var squirrel //סנאי
		var wrongBefore = true; //האם טעה מקודם - בשביל האנימציה
		var totalTime = 0 //זמן משחק
		var grade = 0 //ציון
		var totalWrong = 0 //מספר טעויות
		var soundOn = true; //סאונד - דלוק או מכובה
		var game; //המערך של המשחק
		var gametime; //זמן לשאלה
		var starFrame;
		var gamename
		firstFrame();
		
		//מסך פתיחה
		function firstFrame() {
			stage.removeAllChildren()
			mychoice = 0
			//הוספת הקומבו לבמה
			starFrame = new lib.starFrame();
			starFrame.x = -100;
			starFrame.y = -10;
			stage.addChild(starFrame);
		}
		
		
		//הנתיב המוביל לפרויקט המחולל שלכם לשיטה השולפת משחק לפי קוד
		var url = "https://localhost:5001/api/Games/byCode/";
		//var url = "api/Games/byCode/";
		
		//אירוע לחיצה לכפתור הכניסה
		starFrame.forcombo.startbtn.addEventListener("click", getTheGame);
		
		
		//פונקציה א-סינכרונית לשליפת המידע מבסיס הנתונים דרך קריאת רשת
		async function getTheGame() {
		
			//משיכת קוד המשחק שהוקלד בתיבת הטקסט
			var code = gameCodeTXT.value;
			if (code.length > 0) {
				//fetch = שיטה הקיימת בג'אווה סקריפט המאפשר לבצע קריאות רשת ולקרוא את התשובות החוזרות מהן
				//משתנה המכיל את כל תשובת הרשת שחוזרת מהקריאה לנתיב שהוגדר
				var response = await fetch(url + code);
		
				//אם הקריאה הסתיימה והחזירה משחק תקין
				if (response.ok) {
		
					//חילוץ המידע של המשחק מקריאת הרשת בפורמט של ג'ייסון
					var json = await response.json();
					createArray(json);
					//המירו את הג'ייסון למערך שמתאים למשחק שלכם והפעילו את המשחק
				}
		
				//אם הקריאה הסתיימה בתשובה שאינה תקינה (כלומר שגיאה)
				else {
		
					//חילוץ תוכן התשובה עצמה שחזרה מהקריאה = התוכן שכתבנו בתוך הסוגריים במחולל
					var error = await response.text();
		
					if (error == "game not publish") {
						starFrame.msg.text = ("משחק קיים אך לא פורסם");
					} else if (error == "game not found") {
						starFrame.msg.text = ("המשחק שחיפשת אינו קיים");
					} else {
						starFrame.msg.text = ("אירעה תקלת שרת, נסו שוב");
						console.log(error);
					}
				}
			} else {
				starFrame.msg.text = ("להזין קוד תקין");
		
			}
		}
		
		function createArray(json) {
			myArray = [];
			gamename = json.gameName;
			gametime = json.gameTime;
		
			/*
		[ //0
			
					["חגים שיש להם חול המועד", "", 0, false],
		
					["פסח", "text", true, false],
					["חנוכה", "text", false, false],
					["פורים", "text", false, false],
					["סוכות", "text", true, false],
					["ראש השנה", "text", false, false],
					[" יום העצמאות", "text", false, false],
					[" יום כיפור", "text", false, false]
				],	
			*/
		
			// depands upon the json and the structure of your array
			for (var qnumber = 0; qnumber < json.questList.length; qnumber++) {
				var mycontent = []
				//שאלה, תמונה, מספר נסיונות, האם נענה
				var theQuestion = []
				theQuestion[0] = json.questList[qnumber].questText;
				if (theQuestion[0] == null)
					theQuestion[0] = ""
				theQuestion[1] = json.questList[qnumber].questImg;
				if (theQuestion[1] == null)
					theQuestion[1] = ""
		
				theQuestion[2] = 0;
				theQuestion[3] = false;
				mycontent[0] = theQuestion;
				for (var content = 0; content < json.questList[qnumber].questionAnswers.length; content++) {
					//תוכן, סוג, האם נכון, האם הוגרך
					var theAnswer = [];
					theAnswer[0] = json.questList[qnumber].questionAnswers[content].newanswer
					theAnswer[1] = json.questList[qnumber].questionAnswers[content].type
					theAnswer[2] = json.questList[qnumber].questionAnswers[content].iscorrect
					theAnswer[3] = false
					mycontent[content + 1] = theAnswer
				}
				myArray[qnumber] = mycontent
			}
		
			game = myArray
		fl_ClickToPosition();
			//createTheInterface()
		}
		
		//לחיצה על בחר
		function fl_ClickToPosition() {
			var endOfAni = new lib.endOfAni()
			endOfAni.name = "endOfAni"
			stage.addChild(endOfAni)
			starFrame.gotoAndStop(1);
			endOfAni.addEventListener("removed", gameScreen)
			//if (mychoice == 1) {
			//	holiday();
			//} else if (mychoice == 2) {
			//	math();
			//}
		}
		
		function gameScreen() {
			var message = new lib.startS()
			message.x = 360;
			message.y = 140
			stage.addChild(message)
			message.startBtn.addEventListener("click", gamestart)
		
		}
		
		function gamestart() {
				startgame(); // קריאהלתחילתהמשחק
		
			/*
			if (mychoice == 1) {
				holiday();
			} else if (mychoice == 2) {
				math();
			}*/
		}
		
		
		
		
		
		var game;
		var gametime;
		
		
		function holiday() {
			gamename = "חגים ומועדים"
			gametime = 60
			game = [
				[ //0
					//[0]השאלה[1]כמהתשובותנכונות[2]נסיונותמענה
					["חגים שיש להם חול המועד", "", 0, false],
		
					["פסח", "text", true, false],
					["חנוכה", "text", false, false],
					["פורים", "text", false, false],
					["סוכות", "text", true, false],
					["ראש השנה", "text", false, false],
					[" יום העצמאות", "text", false, false],
					[" יום כיפור", "text", false, false]
				],
				[ //1
					["כל החגים שחוגגים בתשרי", "", 0, false],
		
					["טו בשבט", "text", false, false],
					["סוכות", "text", true, false],
					["ראש השנה", "text", true, false],
					["שמחת תורה", "text", true, false],
					["פסח", "text", false, false],
					["חנוכה", "text", false, false]
				],
				[ //2
					["שלושת הרגלים הם?", "", 0, false],
		
					["פסח", "text", true, false],
					["שבועות", "text", true, false],
					["סוכות", "text", true, false],
					["חנוכה", "text", false, false],
					["פורים", "text", false, false]
				],
				[ //3
					["כל המנהגים שנוהגים לעשות בפורים", "", 0, false],
		
					["משלוח מנות", "text", true, false],
					["קריאת מגילת אסתר", "text", true, false],
					["ללבוש תחפושות", "text", true, false],
					["להרעיש ברעשנים", "text", true, false],
					["לאכול מצות", "text", false, false],
					["להדליק נרות", "text", false, false],
					["לתקוע בשופר", "text", false, false],
					["לאכול דגים", "text", false, false],
				],
				[ //4
					["כל השמות של חג הפסח", "", 0, false],
		
					["חג החירות", "text", true, false],
					["חג האביב", "text", true, false],
					["חג המצות", "text", true, false],
					["חג הגאולה", "text", true, false],
					["חג ההודיה", "text", false, false],
					["חג המולד", "text", false, false],
		
				],
				[ //5
					["כל המועדים הלאומיים", "", 0, false],
		
					["לג בעומר", "text", false, false],
					["יום העצמאות", "text", true, false],
					["יום ירושלים", "text", true, false],
					["יום האם", "text", false, false],
					["יום השמיטה", "text", false, false],
					["יום הקציר", "text", false, false],
		
				],
				[ //6
					["כל מועדי הצומות", "", 0, false],
		
					["עשרה בטבת", "text", true, false],
					["תשעה באב", "text", true, false],
					["יז בתמוז", "text", true, false],
					["תענית אסתר", "text", true, false],
					["יום הכיפורים", "text", true, false],
					["כד בחשוון", "text", false, false],
					["שלושה עשר באלול", "text", false, false],
					["טו תשרי", "text", false, false],
		
		
				],
				[ //7
					["כל המנהגים והמצוות של חג הפסח", "", 0, false],
		
					["בעור חמץ", "text", true, false],
					["קריאת הגדה", "text", true, false],
					["מכירת חמץ", "text", true, false],
					["הגעלת כלים", "text", true, false],
					["אכילת מצות", "text", true, false],
					["אכילת אוזני המן", "text", false, false],
					["נטיעת עצים", "text", false, false],
					["בניית סוכה", "text", false, false],
					["הדלקת נרות בחנוכיה", "text", false, false],
		
		
				],
				[ //8
					["מה שייך לשיר אחד מי יודע?", "", 0, false],
		
					["13 מידיא", "text", true, false],
					["7 ימי שבתא", "text", true, false],
					["9 ירחי לידה", "text", true, false],
					["6 סדרי משנה", "text", true, false],
					["2 מלכיא", "text", false, false],
					["14 כוכביא", "text", false, false],
					["3 אבות", "text", true, false],
					["10 דיבריא", "text", true, false],
					["חד גדיא", "text", false, false],
					["8 סוכריא ", "text", false, false]
				],
				[ //9
					["במשך שבעת ימי חג הסוכות נוהגים ליטול את 4 המינים אשר מייצגים את הגיוון בעם ישראל. מיהם ארבעת המינים?", lib.holidayQ9, 0, false],
		
					["רימון", "text", false, false],
					["כתוב בתורה לקחת פרי עץ הדר והכוונה היא לפרי אתרוג", "text", true, false],
					["ערבה", "text", true, false],
					["לולב", "text", true, false],
					["תאנה", "text", false, false],
					["שעורה", "text", false, false],
					[lib.holidayQ9A7, "img", false, false],
					[lib.holidayQ9A8, "img", false, false],
					[lib.holidayQ9A9, "img", true, false],
					["זית", "text", false, false],
					["תמר", "text", false, false]
				]
			]
			startgame(); // קריאהלתחילתהמשחק
		
		}
		function math() {
			gamename = "חשבון"
			gametime = 30
			game = [
				[ //0
					//[0] השאלה [1] כמה תשובות נכונות [2] נסיונות מענה
					["הכפולות של הסיפרה 9", "", 0, false],
					//[4] תמיד פולס [2] נכון או לא נכון [1] סוג מסיח [0] תוכן [0]
					[" 27", "text", true, false],
					["19", "text", false, false],
					[" 35  ", "text", false, false],
					[" 45  ", "text", true, false],
					[" 18", "text", true, false],
					["79", "text", false, false],
					[" 60", "text", false, false],
					[" 90", "text", true, false]
		
				],
				[ //1
					["מספרים הקטנים מתוצאת התרגיל 42/6", "", 0, false],
		
					["4", "text", true, false],
					["1", "text", true, false],
					["6", "text", true, false],
					["15", "text", false, false],
					["13", "text", false, false],
					["2", "text", true, false],
					["10", "text", false, false]
				],
				[ //2
					["כל המספרים הזוגיים", "", 0, false],
		
					["22", "text", true, false],
					["33", "text", false, false],
					["44", "text", true, false],
					["55", "text", false, false],
					["9", "text", false, false]
				],
				[ //3
					["לדני יש 64 סוכריות. יוסי לקח לדני חצי מהן. דני רוצה לחלק את הסוכריות לקבוצות שוות. מה יכול להתאים?", lib.mathQ4, 0, false],
		
					["דני יכול לעשות 8 קבוצות כאשר בכל קבוצה יש 4 סוכריות", "text", true, false],
					["שתי קבוצות של 16 סוכריות", "text", true, false],
					["שלוש קבוצות של 11 סוכריות", "text", false, false],
					["שלוש קבוצות של 12 סוכריות", "text", false, false],
					["שתי קבוצות של 14 סוכריות", "text", false, false],
					["שתי קבוצות של 32 סוכריות", "text", false, false],
					[lib.mathQ4A7, "img", false, false],
					[lib.mathQ4A8, "img", false, false],
					[lib.mathQ4A9, "img", true, false],
					["לא ניתן לחלק את הסוכריות לקבוצות שוות", "text", false, false],
					["קבוצה אחת של 32 סוכריות", "text", true, false]
				],
				[ //4
					["כל המספרים הראשוניים", "", 0, false],
		
					["4", "text", false, false],
					["1", "text", true, false],
					["6", "text", false, false],
					["15", "text", false, false],
					["13", "text", true, false],
					["2", "text", true, false],
					["10", "text", false, false]
				],
				[ //5
					["כל המספרים האי זוגיים", "", 0, false],
		
					["28", "text", false, false],
					["9", "text", true, false],
					["35", "text", true, false],
					["128", "text", false, false],
					["14", "text", false, false],
					["77", "text", true, false],
					["100", "text", false, false]
				],
				[ //6
					["כל המספרים המתחלקים ב- 5", "", 0, false],
		
					["5", "text", true, false],
					["20", "text", true, false],
					["28", "text", false, false],
					["15", "text", true, false],
					["30", "text", true, false],
					["44", "text", false, false],
					["55", "text", true, false],
					["14", "text", false, false]
				],
				[ //7
					["כל המספרים המתחלקים גם ב- 2 וגם ב- 7", "", 0, false],
		
					["7", "text", false, false],
					["14", "text", true, false],
					["20", "text", false, false],
					["21", "text", false, false],
					["28", "text", true, false],
					["32", "text", false, false],
					["63", "text", false, false],
					["70", "text", true, false]
				],
				[ //8
					["כל המספרים שהסיפרה 8 מופיעה בערך העשרות", "", 0, false],
		
					["108", "text", false, false],
					["18", "text", false, false],
					["180", "text", true, false],
					["81", "text", true, false],
					["48", "text", false, false],
					["284", "text", true, false],
					["10", "text", false, false]
				],
				[ //9
					["כל המספרים המתחלקים גם ב- 3 וגם ב- 6", "", 0, false],
		
					["3", "text", false, false],
					["14", "text", false, false],
					["12", "text", true, false],
					["22", "text", false, false],
					["18", "text", true, false],
					["36", "text", true, false],
					["9", "text", false, false],
					["30", "text", true, false],
					["33", "text", false, false],
					["66", "text", true, false],
					["70", "text", false, false]
				]
			];
		
			startgame(); //קריאה לתחילת המשחק
		
		}
		
		
		//איפוס כל הנתונים ותחילת המשחק
		function startgame() {
			stage.removeAllChildren()
			corrects = 0;
			wrong = -1;
			totalTime = 0
			grade = 0
			totalWrong = 0
			wrongBefore = true;
			soundOn = true;
			//שאלה ראשונה
			start();
		}
		//פונקציה של השאלות
		function start() {
		
			var gamelength = game.length
			//רקע
			bg = new lib.bg();
			bg.name = "bg"
			//חישוב אנימציה לרקע אם צדק מקודם
			darkPre = (1 / gamelength) * (corrects - 1)
			if (wrongBefore == false)
				bg.alpha = darkPre;
			else
				bg.alpha = (1 / gamelength) * corrects;
			dark = (1 / gamelength) * corrects
			stage.addChild(bg);
		
			var ani = new createjs.Tween.get(bg).to({
				alpha: dark
			}, 500)
		
		
			//עץ
			var tree = new lib.treeAndGrass()
			tree.x = -80
			stage.addChild(tree)
		
		
			//סנאי
			squirrel = new lib.squirrel()
			squirrel.x = 1100
			squirrel.y = 520
			stage.addChild(squirrel)
		
			//מד התקדמות
			var progressBar = new lib.progressBar()
			progressBar.x = 20
			progressBar.y = 430
			progressBar.name = "progressBar"
			stage.addChild(progressBar)
			progressBar.countQ.text = gamelength + " / " + corrects;
		
			//ירוק למד
			var progressHeight = (190 / gamelength) * corrects //*corrects
			var progress = new createjs.Shape(new createjs.Graphics().f("#9CBB49").drawRect(37.6, 200 - progressHeight, 18, progressHeight));
		
			progressBar.addChild(progress)
		
			//הוספת אגוזים
			for (var v = 0; v < corrects; v++) {
				var place = v % 5 //מיקום בשורה - שארית של 5
				var row = Math.floor(v / 5) //מספר שורה על פי חלוקה ל5
				var nut = new lib.progressNut();
				nut.y = 180 - row * 20;
				nut.x = 101 - place * 13
				progressBar.addChild(nut)
			}
			//מיקום תשובות לפי מספר מסיח
			var answerPlaces = [null, 509.95, 581.95, 678.3, 752.1, 846.65, 411.8, 341.6, 922.25, 1015, 241.65, 173.25];
			//הגרלת שאלה
			qnum = Math.floor(Math.random() * gamelength)
			while (game[qnum][0][3] == true || (wrong == qnum && corrects < gamelength - 1)) //בדיקה האם השאלה כבר נענתה, האם זאת השאלה הקודמת שהייתה והאם זאת השאלה האחרונה
				qnum = Math.floor(Math.random() * gamelength) // אם כן אז המשך להגריל
				//alert(qnum)
			clicked = 0 //כמה לחצתי
		
			//כפתור בדיקה
			check = new lib.check()
		
			check.x = 632
			check.y = 504
			stage.addChild(check); //הוספה לבמה
			//הוספת אירוע לחיצה
			check.addEventListener("click", checkme)
			check.visible = false; //הסתרה
		
			//שאלה
			var theQ = new lib.myQ(); //שמית השאלה
			theQ.x = 327; //מיקום
			theQ.y = 19;
			theQ.name = "question"
			stage.addChild(theQ); //הוספה לבמה
		
			//ענפים
			var branch = new lib.branch()
			branch.name = "branch"
			stage.addChild(branch)
			branch.stopBtn.addEventListener("click", stoptime)
			branch.soundBtn.addEventListener("click", soundOnOff)
			branch.gameName.text = gamename
		
			//אם יש סאונד או לא
			if (soundOn == true)
				branch.soundBtn.gotoAndStop(0)
			else
				branch.soundBtn.gotoAndStop(2)
		
			//טקסט שאלה
				var question = new createjs.Text(game[qnum][0][0], "bold 20px Varela Round", "#46322E"); //הופסת טקסט
			question.textAlign = "right" //יישור לימין
			question.lineWidth = 480
			question.x = 585
			question.y = 40
		
			theQ.addChild(question) //הוספה לשאלה
		
			//אם יש תמונה בשאלה	
		
			console.log("qnum: "+qnum)
			if (game[qnum][0][1] != "") {
					console.log("qnum: "+qnum)
					console.log("anum: "+anum)
				var bmp = new Image(); 
				bmp.src = myArray[qnum][0][1]
				
					console.log("bmp.src: " +bmp.src)
		
				var questimg = new createjs.Bitmap(bmp).set
				({scale: 0.5,});
		
				theQ.addChild(questimg)
				questimg.x = 10
				questimg.y = 20
				
				
				var bigger = new lib.bigger()
				bigger.scale = 0.5;
				bigger.name = "bigger"
				theQ.addChild(bigger)
				questimg.addEventListener("rollover", bigImg)
				questimg.addEventListener("rollout", smallImg)
				questimg.name = "questimg"
				
			}
		
			press = new Array(game[qnum].length); //יצירת מערך לפי מספר המסיחים
		
			//הוספת מסיחים
			for (var i = 1; i < game[qnum].length; i++) {
		
				var questionlenght = game[qnum].length - 1;
				var anum = Math.floor(Math.random() * questionlenght + 1);
				while (game[qnum][anum][3] == true)
					anum = Math.floor(Math.random() * questionlenght + 1)
				game[qnum][anum][3] = true
				var answer = new lib.nut(); //יצירת מסיח
				press[i] = false; //סימן שלא לחצו על השאלה
				//מערך תיקונים למסיחים לפי מספר המסיחים כדי שיראו טוב
				var fix = [null, null, null, null, null, null, 70, 30, 10, 50, 80, 20, 0];
				//מיקום מסיח בשורות שונות
				if (i % 2 == 0) {
					answer.y = 300;
				} else {
					answer.y = 155;
				}
				//מיקום לפי מערך מיקומים + תיקונים
				answer.x = answerPlaces[i] - fix[game[qnum].length]
				answer.name = "ans" + anum //שם
				stage.addChild(answer)
		
				//טקסט במסיח
				if (game[qnum][anum][1] == "text") { // בדקנו האם זה טקסט או תמונה. מידע מתוך המסיח
					var theanswer = new createjs.Text(game[qnum][anum][0], "bold 14px Varela Round", "brown");
					theanswer.textAlign = "right"
					theanswer.lineWidth = 90;
					theanswer.y = 50
					theanswer.x = 100
		
		
				} else {
								//תמונה במסיח
		console.log("qnum: "+qnum)
					console.log("anum: "+anum)
					
		
					var bmp = new Image(); 
					bmp.src = myArray[qnum][anum][0] 
			console.log("bmp.src: " +bmp.src)
		
					var theanswer = new createjs.Bitmap(bmp).set
					({scale: 0.05,}); 
					width = 232;
					height = 487;
					var bigger = new lib.bigger()
					bigger.y = height - 20
					bigger.x = width - 20
					bigger.scale = 1 
					bigger.name = "bigger"
					theanswer.addEventListener("mouseover", bigImg)
					theanswer.addEventListener("mouseout", smallImg)
				}
				answer.addChild(theanswer) //הוספה
				
				//אירועי עכבר
				answer.addEventListener("rollover", over)
				answer.addEventListener("rollout", out)
				answer.cursor = "pointer";
				answer.addEventListener("click", choose);
			}
			//זמן
			mytime = gametime;
			timer = setInterval(clock, 1000)
			//עיצוב שעון
			var min = Math.floor(mytime / 60)
			if (min < 10)
				min = "0" + min;
			var sec = mytime % 60
			if (sec < 10)
				sec = "0" + sec
			branch.timer.text = min + ":" + sec
		
		}
		
		//בלחיצה על כפתור סאונד- מכבה ומדליקה את הסאונד
		function soundOnOff(evt) {
			if (soundOn == true) {
				evt.currentTarget.gotoAndStop(3)
				soundOn = false
				createjs.Sound.muted = true;
		
			} else {
				evt.currentTarget.gotoAndStop(1)
				soundOn = true
				createjs.Sound.muted = false;
		
		
			}
		
		}
		
		//הגדלת תמונה
		function bigImg(evt) {
			var img = evt.currentTarget;
			img.scale=1;
			
		}
		
		//הקטנה
		function smallImg(evt) {
			var img = evt.currentTarget;
			
			if(img.name == "questimg"){
				img.scale=0.5;
			}
			img.scale = 0.05;
		}
		
		//עצירת משחק
		function stoptime() {
			//עצירה של האינטרוול
			clearInterval(timer);
			//הוספת משוב
			var timefeedback = new lib.timefeedback()
			timefeedback.gotoAndStop(1)
			stage.addChild(timefeedback)
			timefeedback.name = "timefeedback"
			timefeedback.continueBtn.addEventListener("click", back)
		
			stage.removeChild(stage.getChildByName("question"))
			//הסרת כפתורים בענף
			var branch = stage.getChildByName("branch");
			branch.timer.visible = false;
			branch.clock.visible = false;
			branch.stopBtn.visible = false;
			branch.soundBtn.visible = false;
			squirrel.visible = false;
			//הסרת מסיחים
			for (var a = 1; a < game[qnum].length; a++) { //לולאה שתעבור על כל המסיחים
				var answer = stage.getChildByName("ans" + a)
				stage.removeChild(answer)
				game[qnum][a][3] = false
			}
		}
		
		//חזרה מעצירת משחק
		function back() {
			stage.removeAllChildren()
			wrongBefore = true
			wrong = qnum;
			start();
		
		}
		
		//זמנים
		function clock(evt) {
			var branch = stage.getChildByName("branch");
			mytime--;
			var min = Math.floor(mytime / 60)
			if (min < 10)
				min = "0" + min;
			var sec = mytime % 60
			if (sec < 10)
				sec = "0" + sec
			branch.timer.text = min + ":" + sec
		
			//נגמר הזמן
			if (mytime == 0) {
				var timefeedback = new lib.timefeedback()
				stage.addChild(timefeedback)
				timefeedback.continueBtn.addEventListener("click", nextQ)
				wrongBefore = true
				totalWrong++
				stage.removeChild(stage.getChildByName("question"))
				var branch = stage.getChildByName("branch");
				branch.timer.visible = false;
				branch.clock.visible = false;
				branch.stopBtn.visible = false;
				branch.soundBtn.visible = false;
				var clockSound = createjs.Sound.play("clock")
		
				for (var a = 1; a < game[qnum].length; a++) { //לולאה שתעבור על כל המסיחים
					game[qnum][a][3] = false
					var answer = stage.getChildByName("ans" + a)
					stage.removeChild(answer)
					answer.mouseEnabled = false //נטרול העכבר
				}
				clearInterval(timer);
			}	
			
		}
		
		//פונקציה שמופעלת בלחיצה על מסיח
		function choose(evt) {
			var object = evt.currentTarget; //מקבלת את המסיח שנלחץ
			//ans11
			var answernum = object.name.charAt(3); //שומרת את המספר
			if (object.name.length > 4)
				answernum = parseInt(answernum.toString() + object.name.charAt(4).toString());
			if (press[answernum] == false) { //בדיקה האם כבר לחצו על המסיח
				press[answernum] = true; //סימון שנלחץ
				clicked++ //הוספה למונה המסיחים שנלחצו
				check.visible = true; //מראה את הכפתור
				object.gotoAndStop(1); //מראה שנלחץ
			} else { //ביטול לחיצה
				press[answernum] = false;
				//עדכון מונה הלחיצות
				clicked--
				//אם אין כפתורים שנבחרו מסתיר את הכפתור
				if (clicked == 0)
					check.visible = false
				object.gotoAndStop(0);
			}
		
		}
		
		//מעבר עכבר על מסיח
		function over(evt) {
			var change = evt.currentTarget //קבלת המסיח
			change.gotoAndStop(2); //שינוי מראה
		}
		//יציאה ממעבר עכבר למסיח
		function out(evt) {
			var change = evt.currentTarget //קבלת המסיח
			var answernum = change.name.charAt(3) //קבלת המספר
		
			//במידה וידנם יותר מ10 מסיחים- הופת התו הרביעי לשם המסיח
			//למסיחים 10 ו11
			if (change.name.length > 4)
				answernum = parseInt(answernum.toString() + change.name.charAt(4).toString());
		
			//חזרה למראה לפי האם המסיח נבחר
			if (press[answernum] == false) {
				change.gotoAndStop(0);
			} else {
				change.gotoAndStop(1);
			}
		}
		
		//בדיקה
		function checkme() {
		
			stage.removeChild(check);
		
			var bubble = new lib.bubble()
			bubble.x = -257
			bubble.y = 19
		
			clearInterval(timer);
			wrongAnswer = false;
			var iswrong = false; //האם טעה- כרגע לא
			for (var a = 1; a < game[qnum].length; a++) { //לולאה שתעבור על כל המסיחים
				game[qnum][a][3] = false
				var answer = stage.getChildByName("ans" + a)
				answer.mouseEnabled = false //נטרול העכבר
				if (press[a] == true) { //אם נלחץ
					var vx = new lib.vx()
					vx.x = 105
					vx.y = 35
					answer.addChild(vx)
					if (game[qnum][a][2] == false) { //אם המסיח לא נכון
						answer.gotoAndStop(3)
						vx.gotoAndStop(0)
						iswrong = true; //סימון שטעה
						wrongAnswer = true;
						wrongBefore = true
		
					} else {
						answer.gotoAndStop(4)
						vx.gotoAndStop(1)
						bubble.gotoAndStop(2)
					}
		
				} else { //אם לא לחץ
					if (game[qnum][a][2] == true) { //אם המסיח כן נכון
						iswrong = true //סימון שטעה
						answer.gotoAndStop(0)
						bubble.gotoAndStop(2)
					}
				}
			}
			if (iswrong == false) //צדק
			{
				bubble.gotoAndStop(3)
				squirrel.gotoAndStop(2)
				game[qnum][0][3] = true;
				corrects++
				wrongBefore = false
				var instance = createjs.Sound.play("YES")
				//חישוב ניקוד על פי הנוסחא 
				grade += Math.floor(100 / ((game.length * (game[qnum][0][2] + 1))));
		
				gamelength = game.length
				var progressBar = stage.getChildByName("progressBar")
				progressBar.countQ.text = gamelength + " / " + corrects;
		
				var progressHeight = (190 / gamelength) * corrects //*corrects
				var progress = new createjs.Shape(new createjs.Graphics().f("#9cbb49").drawRect(37.6, 200 - progressHeight, 18, progressHeight));
		
				progressBar.addChild(progress)
		
				for (var v = 0; v < corrects; v++) {
					var place = v % 5
					var row = Math.floor(v / 5)
					var nut = new lib.progressNut();
					nut.y = 180 - row * 20;
					nut.x = 101 - place * 13
					progressBar.addChild(nut)
				}
		
		
		
		
			} else { //טעה
				totalWrong++
				var instance = createjs.Sound.play("NO")
				squirrel.gotoAndStop(1)
				//לחץ על תשובות לא נכונות
				if (wrongAnswer == false)
					bubble.gotoAndStop(1)
			}
			//כפתור המשיכי
			var continueBtn = new lib.continueBtn()
			continueBtn.x = 632
			continueBtn.y = 504
			continueBtn.cursor = "pointer"
			continueBtn.addEventListener("click", nextQ);
			stage.addChild(continueBtn);
			squirrel.addChild(bubble)
		
		}
		
		//שאלה הבאה
		function nextQ() {
		
			var instance = createjs.Sound.stop("clock")
			wrong = qnum;
			game[qnum][0][2]++
			totalTime += gametime - mytime
			stage.removeAllChildren()
			//בדיקה האם השאלה האחרונה
			if (corrects == game.length) {
				end()
			} else
				start();
		}
		//סיום מסחק
		function end() {
			//רקע
			bg = new lib.bg();
			bg.name = "bg"
		
			stage.addChild(bg);
			//עץ
			var tree = new lib.treeAndGrass()
			tree.x = -80
			stage.addChild(tree)
		
		
			//סנאי
			squirrel = new lib.squirrel()
			squirrel.x = 1100
			squirrel.y = 520
			stage.addChild(squirrel)
		
			var gamelength = game.length
		
			var progressBar = new lib.progressBar()
			progressBar.x = 20
			progressBar.y = 430
			stage.addChild(progressBar)
			progressBar.countQ.text = gamelength + " / " + corrects;
		
			var progressHeight = (190 / gamelength) * corrects //*corrects
			var progress = new createjs.Shape(new createjs.Graphics().f("#9cbb49").drawRect(37.6, 200 - progressHeight, 18, progressHeight));
		
			progressBar.addChild(progress)
		
			for (var v = 0; v < corrects; v++) {
				var place = v % 5
				var row = Math.floor(v / 5)
				var nut = new lib.progressNut();
				nut.y = 180 - row * 20;
				nut.x = 101 - place * 13
				progressBar.addChild(nut)
			}
		
			//זמן וניקוד
			var min = Math.floor(totalTime / 60)
			//if (min < 10)
			//min = "0" + min;
			var sec = totalTime % 60
			if (sec < 10)
				sec = "0" + sec
		
			usertime = min + ":" + sec;
		
			var endfeedback = new lib.endfeedback()
			endfeedback.feedback.text = "הציון שלך: " + grade + " | שגיאות: " + totalWrong + " | זמן כולל: " + usertime;
			endfeedback.x = 347.65
			endfeedback.y = 171.75
		
			stage.addChild(endfeedback)
		
			endfeedback.newgame.addEventListener("click", firstFrame)
			endfeedback.restart.addEventListener("click", restartGame)
		
		}
		//משחק חדש- בדיקה איזה  משחק להפעיל
		function restartGame() {
			if (mychoice == 1) {
				holiday();
			} else if (mychoice == 2) {
				math();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'F051DA0CC0522B40965BE824CE9E5A21',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#CBFFFD",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_61.png", id:"CachedBmp_61"},
		{src:"images/CachedBmp_58.png", id:"CachedBmp_58"},
		{src:"images/CachedBmp_57.png", id:"CachedBmp_57"},
		{src:"images/CachedBmp_56.png", id:"CachedBmp_56"},
		{src:"images/CachedBmp_54.png", id:"CachedBmp_54"},
		{src:"images/CachedBmp_53.png", id:"CachedBmp_53"},
		{src:"images/CachedBmp_14.png", id:"CachedBmp_14"},
		{src:"images/Nuts_atlas_1.png", id:"Nuts_atlas_1"},
		{src:"images/Nuts_atlas_2.png", id:"Nuts_atlas_2"},
		{src:"sounds/SoundEffect1mp3cutnet1wav.mp3", id:"SoundEffect1mp3cutnet1wav"},
		{src:"sounds/SoundEffect2mp3cutnetwav.mp3", id:"SoundEffect2mp3cutnetwav"},
		{src:"sounds/SoundEffect3mp3cutnetwav.mp3", id:"SoundEffect3mp3cutnetwav"},
		{src:"sounds/SoundEffect4mp3cutnetwav.mp3", id:"SoundEffect4mp3cutnetwav"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
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
an.compositions['F051DA0CC0522B40965BE824CE9E5A21'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;