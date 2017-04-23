(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("msb-web", [], factory);
	else if(typeof exports === 'object')
		exports["msb-web"] = factory();
	else
		root["msb-web"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(40);
exports.Container = container_1.Container;
var matrix_1 = __webpack_require__(41);
exports.Matrix = matrix_1.Matrix;
var utility_1 = __webpack_require__(13);
exports.degrees2radians = utility_1.degrees2radians;
exports.constrain = utility_1.constrain;
exports.createRandomRangeGenerator = utility_1.createRandomRangeGenerator;
exports.createIntegerRandomRangeGenerator = utility_1.createIntegerRandomRangeGenerator;
exports.integerRandomRange = utility_1.integerRandomRange;
exports.normalDistribution = utility_1.normalDistribution;
exports.normalGaussianGenerator = utility_1.normalGaussianGenerator;
exports.radians2degrees = utility_1.radians2degrees;
exports.randomRange = utility_1.randomRange;
var vector_1 = __webpack_require__(42);
exports.Vector = vector_1.Vector;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 4/22/17.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var eye_1 = __webpack_require__(30);
exports.DimEye = eye_1.DimEye;
var light_1 = __webpack_require__(31);
exports.DimLight = light_1.DimLight;
var projection_1 = __webpack_require__(32);
exports.DimOrthographicProjection = projection_1.DimOrthographicProjection;
exports.DimPerspectiveProjection = projection_1.DimPerspectiveProjection;
var element_1 = __webpack_require__(29);
exports.DimElement = element_1.DimElement;
var face_1 = __webpack_require__(10);
exports.DimFace = face_1.DimFace;
var model_1 = __webpack_require__(11);
exports.DimModel = model_1.DimModel;
var scene_1 = __webpack_require__(33);
exports.DimScene = scene_1.DimScene;
var utility_1 = __webpack_require__(4);
exports.getWebGLRenderingContext = utility_1.getWebGLRenderingContext;
exports.compileShaders = utility_1.compileShaders;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created on 11/13/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var ModelBuilder = (function () {
    function ModelBuilder() {
        this.origin = new index_1.Vector();
        this.hasNormals = false;
    }
    return ModelBuilder;
}());
exports.ModelBuilder = ModelBuilder;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/24/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(9);
exports.ColorRGB = index_1.ColorRGB;
exports.Material = index_1.Material;
var index_2 = __webpack_require__(1);
exports.compileShaders = index_2.compileShaders;
exports.DimEye = index_2.DimEye;
exports.DimLight = index_2.DimLight;
exports.DimOrthographicProjection = index_2.DimOrthographicProjection;
exports.DimPerspectiveProjection = index_2.DimPerspectiveProjection;
exports.DimScene = index_2.DimScene;
exports.getWebGLRenderingContext = index_2.getWebGLRenderingContext;
var index_3 = __webpack_require__(24);
exports.DimCircleModelBuilder = index_3.DimCircleModelBuilder;
exports.DimConeModelBuilder = index_3.DimConeModelBuilder;
exports.DimCubeModelBuilder = index_3.DimCubeModelBuilder;
exports.DimCylinderModelBuilder = index_3.DimCylinderModelBuilder;
exports.DimObjModelLoader = index_3.DimObjModelLoader;
exports.DimRectangleModelBuilder = index_3.DimRectangleModelBuilder;
exports.DimSphereModelBuilder = index_3.DimSphereModelBuilder;
exports.DimTriangleModelBuilder = index_3.DimTriangleModelBuilder;
var index_4 = __webpack_require__(6);
exports.DimMatrix = index_4.DimMatrix;
var index_5 = __webpack_require__(37);
exports.RasterCircle = index_5.RasterCircle;
exports.RasterImage = index_5.RasterImage;
exports.RasterRectangle = index_5.RasterRectangle;
exports.RasterShape = index_5.RasterShape;
exports.RasterText = index_5.RasterText;
exports.RasterTriangle = index_5.RasterTriangle;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by on 11/13/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var glContextNames = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
function getWebGLRenderingContext(canvas, optAttribs) {
    var context = null;
    for (var _i = 0, glContextNames_1 = glContextNames; _i < glContextNames_1.length; _i++) {
        var name_1 = glContextNames_1[_i];
        try {
            context = canvas.getContext(name_1, optAttribs);
        }
        catch (e) {
            context = null;
        }
        if (context) {
            break;
        }
    }
    return context;
}
exports.getWebGLRenderingContext = getWebGLRenderingContext;
function compileShaders(gl, vertexShaderId, fragmentShaderId) {
    var program, vertextShader, fragmentShader, vertextShaderElement = document.getElementById(vertexShaderId), fragmentShaderElement = document.getElementById(fragmentShaderId);
    vertextShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertextShader, vertextShaderElement.innerText);
    gl.compileShader(vertextShader);
    if (!gl.getShaderParameter(vertextShader, gl.COMPILE_STATUS)) {
        throw gl.getShaderInfoLog(vertextShader);
    }
    fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderElement.innerText);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        throw gl.getShaderInfoLog(fragmentShader);
    }
    program = gl.createProgram();
    gl.attachShader(program, vertextShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw gl.getProgramInfoLog(program);
    }
    return program;
}
exports.compileShaders = compileShaders;
function toDataArray(a) {
    return (new Float32Array(a));
}
exports.toDataArray = toDataArray;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 7/18/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var RasterShape = (function () {
    function RasterShape() {
        this.angle = 0;
        this.location = new index_1.Vector(0, 0);
        this.lineWidth = 0;
        this.strokeStyle = "#000000";
    }
    RasterShape.prototype.draw = function (context) {
        context.save();
        context.translate(this.location.x, this.location.y);
        context.rotate(index_1.degrees2radians(this.angle));
        context.fillStyle = this.fillStyle;
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.strokeStyle;
        this.doDraw(context);
        context.restore();
    };
    return RasterShape;
}());
exports.RasterShape = RasterShape;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/24/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var matrix_1 = __webpack_require__(34);
exports.DimMatrix = matrix_1.DimMatrix;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 8/6/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var msb_math_1 = __webpack_require__(0);
// const G: number = 0.0000000000667428;
var G = 0.5;
var NatureMover = (function () {
    function NatureMover(mass) {
        if (mass === void 0) { mass = 1.0; }
        this.mass = mass;
        this.location = new msb_math_1.Vector(0, 0);
        this.velocity = new msb_math_1.Vector(0, 0);
        this._acceleration = new msb_math_1.Vector(0, 0);
        this.angle = 0;
        this.aVelocity = 0;
        this._aAcceleration = 0;
        this.speedLimit = 10;
        this.angularLimit = 10;
        this.damping = 1.0;
    }
    NatureMover.prototype.update = function () {
        this.velocity.add(this._acceleration);
        this.velocity.multiply(this.damping);
        this.aVelocity = this.aVelocity + this._aAcceleration;
        this.applySpeedLimit();
        this.location.add(this.velocity);
        this.angle = this.angle + this.aVelocity;
        this._acceleration.multiply(0);
        this._aAcceleration = 0;
    };
    NatureMover.prototype.applyAngularForce = function (a) {
        this._aAcceleration = this._aAcceleration + a;
    };
    NatureMover.prototype.applyForce = function (f) {
        this._acceleration.add(msb_math_1.Vector.divide(f, this.mass));
    };
    NatureMover.prototype.applyFriction = function (c) {
        var friction = this.velocity.clone();
        friction.normalize();
        friction.multiply(-1);
        friction.multiply(c);
        this.applyForce(friction);
    };
    NatureMover.prototype.applyDrag = function (c, p, a) {
        if (p === void 0) { p = 1; }
        if (a === void 0) { a = 1; }
        var drag = this.velocity.clone(), speed = drag.magnitude, dragMagnitude = -0.5 * p * speed * speed * a * c;
        drag.normalize();
        drag.multiply(dragMagnitude);
        this.applyForce(drag);
    };
    NatureMover.prototype.getAttraction = function (m, minDistance, maxDistance) {
        if (minDistance === void 0) { minDistance = 5.0; }
        if (maxDistance === void 0) { maxDistance = 25.0; }
        var attraction = msb_math_1.Vector.subtract(m.location, this.location), distance = attraction.magnitude, attractionStrength = 1;
        // console.log(distance);
        if (distance >= minDistance && distance <= maxDistance) {
            attractionStrength = (G * this.mass * m.mass) / (distance * distance);
            // console.log(attractionStrength);
            attraction.normalize();
            attraction.multiply(attractionStrength);
        }
        else {
            attraction.multiply(0);
        }
        return attraction;
    };
    NatureMover.prototype.applyRepellent = function (m, minDistance, maxDistance) {
        if (minDistance === void 0) { minDistance = 5.0; }
        if (maxDistance === void 0) { maxDistance = 25.0; }
        var repellent = this.getAttraction(m, minDistance, maxDistance);
        repellent.multiply(-1);
        this.applyForce(repellent);
    };
    NatureMover.prototype.applyAttraction = function (m, minDistance, maxDistance) {
        if (minDistance === void 0) { minDistance = 5.0; }
        if (maxDistance === void 0) { maxDistance = 25.0; }
        var attraction = this.getAttraction(m, minDistance, maxDistance);
        this.applyForce(attraction);
    };
    NatureMover.prototype.applyGravity = function (g) {
        var gravity = new msb_math_1.Vector(0.0, g);
        gravity.multiply(this.mass);
        this.applyForce(gravity);
    };
    NatureMover.prototype.applyPassThrough = function (container) {
        if (this.location.x < container.xMin) {
            this.location.x = container.xMax;
        }
        if (this.location.x > container.xMax) {
            this.location.x = container.xMin;
        }
        if (this.location.y < container.yMin) {
            this.location.y = container.yMax;
        }
        if (this.location.y > container.yMax) {
            this.location.y = container.yMin;
        }
    };
    NatureMover.prototype.applyBounce = function (container) {
        if ((this.location.x < container.xMin) || (this.location.x > container.xMax)) {
            this.velocity.x = this.velocity.x * -1;
        }
        if ((this.location.y < container.yMin) || (this.location.y > container.yMax)) {
            this.velocity.y = this.velocity.y * -1;
        }
    };
    NatureMover.prototype.applySpeedLimit = function () {
        if (this.speedLimit && this.speedLimit > 0) {
            var m = this.velocity.magnitude;
            if (m > this.speedLimit) {
                this.velocity.magnitude = this.speedLimit;
            }
        }
        this.aVelocity = msb_math_1.constrain(this.aVelocity, -this.angularLimit, this.angularLimit);
    };
    return NatureMover;
}());
exports.NatureMover = NatureMover;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created on 11/13/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var ColorHSL = (function () {
    // static getRandom(): ColorHSL {
    //
    //     let integerRandomRangeGenerator = createIntegerRandomRangeGenerator(0, 101);
    //     return new ColorHSL(getIntegerRandomRange(0, 256),
    //         integerRandomRangeGenerator(), integerRandomRangeGenerator());
    // }
    function ColorHSL(h, s, l, a) {
        if (a === void 0) { a = 1.0; }
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    ColorHSL.prototype.toArray = function () {
        return [this.h, this.s, this.l];
    };
    ColorHSL.prototype.toString = function () {
        var h = this.h, s = this.s, l = this.l, a = this.a;
        return "hsla(" + h + ", " + s + "%, " + l + "%, " + a + ")";
    };
    return ColorHSL;
}());
exports.ColorHSL = ColorHSL;
var ColorRGB = (function () {
    function ColorRGB(r, g, b, a) {
        if (a === void 0) { a = 1.0; }
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    ColorRGB.getRandom = function (min, max) {
        if (min === void 0) { min = 0.0; }
        if (max === void 0) { max = 1.0; }
        var rangeRandomGenerator = index_1.createRandomRangeGenerator(min, max);
        return new ColorRGB(rangeRandomGenerator(), rangeRandomGenerator(), rangeRandomGenerator());
    };
    ColorRGB.prototype.toArray = function () {
        return [this.r, this.g, this.b, this.a];
    };
    ColorRGB.prototype.toString = function () {
        var r = this.r, g = this.g, b = this.b, a = this.a;
        return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
    };
    return ColorRGB;
}());
exports.ColorRGB = ColorRGB;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/24/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(8);
exports.ColorRGB = color_1.ColorRGB;
exports.ColorHSL = color_1.ColorHSL;
var font_1 = __webpack_require__(18);
exports.Font = font_1.Font;
var material_1 = __webpack_require__(19);
exports.Material = material_1.Material;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 4/22/17.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var DimFace = (function () {
    function DimFace() {
        this.elementArray = [];
    }
    Object.defineProperty(DimFace.prototype, "elementCount", {
        get: function () {
            return this.elementArray.length;
        },
        enumerable: true,
        configurable: true
    });
    return DimFace;
}());
exports.DimFace = DimFace;
var DimFaceData = (function () {
    function DimFaceData(face) {
        var element, eDataArray = [];
        this.elementDataArray = [];
        for (var _i = 0, _a = face.elementArray; _i < _a.length; _i++) {
            element = _a[_i];
            this.elementDataArray = this.elementDataArray.concat(element.toArray());
        }
    }
    return DimFaceData;
}());
exports.DimFaceData = DimFaceData;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 4/22/17.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
var face_1 = __webpack_require__(10);
var DimModel = (function () {
    function DimModel() {
        this.faceArray = [];
        this.matrix = new index_1.DimMatrix();
    }
    return DimModel;
}());
exports.DimModel = DimModel;
var DimModelData = (function () {
    function DimModelData(model) {
        var face, faceData;
        this.elementCount = 0;
        this.elementDataArray = [];
        for (var _i = 0, _a = model.faceArray; _i < _a.length; _i++) {
            face = _a[_i];
            faceData = new face_1.DimFaceData(face);
            this.elementDataArray = this.elementDataArray.concat(faceData.elementDataArray);
            this.elementCount = this.elementCount + face.elementCount;
        }
    }
    return DimModelData;
}());
exports.DimModelData = DimModelData;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 8/6/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(5);
var RasterRectangle = (function (_super) {
    __extends(RasterRectangle, _super);
    function RasterRectangle(w, h) {
        var _this = _super.call(this) || this;
        _this.width = w;
        _this.height = h;
        return _this;
    }
    RasterRectangle.prototype.populate = function (container) {
        this.width = container.width;
        this.height = container.height;
        this._hWidth = container.width * 0.5;
        this._hHeight = container.height * 0.5;
        this.location.x = container.xMin + this._hWidth;
        this.location.y = container.yMin + this._hHeight;
    };
    RasterRectangle.prototype.isHit = function (v) {
        return (v.x >= this.x) && (v.x <= this.limitX) && (v.y >= this.y) && (v.y <= this.limitY);
    };
    RasterRectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    RasterRectangle.prototype.doDraw = function (context) {
        context.beginPath();
        context.rect(-this._hWidth, -this._hHeight, this._width, this._height);
        context.closePath();
        if (this.fillStyle) {
            context.fill();
        }
        if (this.lineWidth > 0) {
            context.stroke();
        }
    };
    Object.defineProperty(RasterRectangle.prototype, "x", {
        get: function () {
            return this.location.x - this._hWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RasterRectangle.prototype, "y", {
        get: function () {
            return this.location.y - this._hHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RasterRectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (w) {
            this._width = w;
            this._hWidth = w * 0.5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RasterRectangle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (h) {
            this._height = h;
            this._hHeight = h * 0.5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RasterRectangle.prototype, "limitX", {
        get: function () {
            return (this.x + this.width);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RasterRectangle.prototype, "limitY", {
        get: function () {
            return (this.y + this.height);
        },
        enumerable: true,
        configurable: true
    });
    return RasterRectangle;
}(shape_1.RasterShape));
exports.RasterRectangle = RasterRectangle;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function degrees2radians(degrees) {
    return degrees * Math.PI / 180.0;
}
exports.degrees2radians = degrees2radians;
function radians2degrees(radians) {
    return radians * 180.0 / Math.PI;
}
exports.radians2degrees = radians2degrees;
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
exports.randomRange = randomRange;
// Return a random integer number between min and max
function createRandomRangeGenerator(min, max) {
    return function () {
        return randomRange(min, max);
    };
}
exports.createRandomRangeGenerator = createRandomRangeGenerator;
// Return a random integer number between min and max
function createIntegerRandomRangeGenerator(min, max) {
    return function () {
        return Math.floor((Math.random() * max) + min);
    };
}
exports.createIntegerRandomRangeGenerator = createIntegerRandomRangeGenerator;
// Return a random integer number between min and max
function integerRandomRange(min, max) {
    return Math.floor((Math.random() * max) + min);
}
exports.integerRandomRange = integerRandomRange;
function constrain(v, min, max) {
    var r = v;
    if (r < min) {
        r = min;
    }
    else if (r > max) {
        r = max;
    }
    return r;
}
exports.constrain = constrain;
// http://bl.ocks.org/mbostock/4349187
// Sample from a normal distribution with mean 0, stddev 1.
function normalDistribution() {
    var x = 0, y = 0, rds, c;
    do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        rds = x * x + y * y;
    } while (rds === 0 || rds > 1);
    c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform
    return x * c; // throw away extra sample y * c
}
exports.normalDistribution = normalDistribution;
// Simple 1D Gaussian (normal) distribution
function normalGaussianGenerator(mean, deviation) {
    return function () {
        return mean + deviation * normalDistribution();
    };
}
exports.normalGaussianGenerator = normalGaussianGenerator;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 8/7/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mover_1 = __webpack_require__(7);
var NatureActor = (function (_super) {
    __extends(NatureActor, _super);
    function NatureActor(body) {
        var _this = _super.call(this) || this;
        _this.body = body;
        return _this;
    }
    NatureActor.prototype.draw = function (context) {
        this.body.location = this.location.clone();
        this.body.angle = this.angle;
        this.body.draw(context);
    };
    return NatureActor;
}(mover_1.NatureMover));
exports.NatureActor = NatureActor;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 8/20/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var msb_math_1 = __webpack_require__(0);
var msb_gl_1 = __webpack_require__(3);
var mover_1 = __webpack_require__(7);
var NatureParticle = (function (_super) {
    __extends(NatureParticle, _super);
    function NatureParticle() {
        var _this = _super.call(this) || this;
        _this.lifeSpan = 120;
        _this.fillColor = msb_gl_1.ColorRGB.getRandom();
        return _this;
    }
    NatureParticle.prototype.isDead = function () {
        if (this._life <= 0) {
            return true;
        }
        return false;
    };
    NatureParticle.prototype.update = function () {
        _super.prototype.update.call(this);
        this._life = this._life - 1;
        this.fillColor.a = this._life / this._lifeSpan;
    };
    NatureParticle.prototype.draw = function (context) {
        this.body.fillStyle = this.fillColor.toString();
        this.body.location = this.location.clone();
        this.body.angle = this.angle;
        this.body.draw(context);
    };
    Object.defineProperty(NatureParticle.prototype, "lifeSpan", {
        set: function (v) {
            this._life = v;
            this._lifeSpan = v;
        },
        enumerable: true,
        configurable: true
    });
    return NatureParticle;
}(mover_1.NatureMover));
exports.NatureParticle = NatureParticle;
var NatureParticleCircle = (function (_super) {
    __extends(NatureParticleCircle, _super);
    function NatureParticleCircle() {
        var _this = _super.call(this) || this;
        _this.body = new msb_gl_1.RasterCircle(msb_math_1.randomRange(5, 10));
        return _this;
    }
    return NatureParticleCircle;
}(NatureParticle));
exports.NatureParticleCircle = NatureParticleCircle;
var NatureParticleSquare = (function (_super) {
    __extends(NatureParticleSquare, _super);
    function NatureParticleSquare() {
        var _this = _super.call(this) || this;
        var side = msb_math_1.randomRange(10, 15);
        _this.body = new msb_gl_1.RasterRectangle(side, side);
        _this.aVelocity = 2;
        return _this;
    }
    return NatureParticleSquare;
}(NatureParticle));
exports.NatureParticleSquare = NatureParticleSquare;
var NatureParticleTriangle = (function (_super) {
    __extends(NatureParticleTriangle, _super);
    function NatureParticleTriangle() {
        var _this = _super.call(this) || this;
        var side = msb_math_1.randomRange(5, 10);
        _this.body = new msb_gl_1.RasterTriangle(side, side);
        _this.aVelocity = 2;
        return _this;
    }
    return NatureParticleTriangle;
}(NatureParticle));
exports.NatureParticleTriangle = NatureParticleTriangle;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var actor_1 = __webpack_require__(14);
exports.NatureActor = actor_1.NatureActor;
var mover_1 = __webpack_require__(7);
exports.NatureMover = mover_1.NatureMover;
var oscillator_1 = __webpack_require__(43);
exports.NatureOscillator = oscillator_1.NatureOscillator;
var particle_1 = __webpack_require__(44);
exports.NatureParticle = particle_1.NatureParticle;
exports.NatureParticleSystemConfetti = particle_1.NatureParticleSystemConfetti;
var pendulum_1 = __webpack_require__(46);
exports.NaturePendulum = pendulum_1.NaturePendulum;
var repeller_1 = __webpack_require__(47);
exports.NatureRepeller = repeller_1.NatureRepeller;
var spring_1 = __webpack_require__(48);
exports.NatureSpring = spring_1.NatureSpring;
var time_1 = __webpack_require__(50);
exports.NatureClock = time_1.NatureClock;
var walker_1 = __webpack_require__(51);
exports.NatureWalker = walker_1.NatureWalker;
var wave_1 = __webpack_require__(52);
exports.NatureWave = wave_1.NatureWave;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 4/23/17.
 */

Object.defineProperty(exports, "__esModule", { value: true });
//msb-gl
var index_1 = __webpack_require__(3);
exports.ColorRGB = index_1.ColorRGB;
exports.compileShaders = index_1.compileShaders;
exports.DimEye = index_1.DimEye;
exports.DimLight = index_1.DimLight;
exports.DimOrthographicProjection = index_1.DimOrthographicProjection;
exports.DimPerspectiveProjection = index_1.DimPerspectiveProjection;
exports.DimScene = index_1.DimScene;
exports.DimCircleModelBuilder = index_1.DimCircleModelBuilder;
exports.DimConeModelBuilder = index_1.DimConeModelBuilder;
exports.DimCubeModelBuilder = index_1.DimCubeModelBuilder;
exports.DimCylinderModelBuilder = index_1.DimCylinderModelBuilder;
exports.DimObjModelLoader = index_1.DimObjModelLoader;
exports.DimRectangleModelBuilder = index_1.DimRectangleModelBuilder;
exports.DimSphereModelBuilder = index_1.DimSphereModelBuilder;
exports.DimTriangleModelBuilder = index_1.DimTriangleModelBuilder;
exports.DimMatrix = index_1.DimMatrix;
exports.getWebGLRenderingContext = index_1.getWebGLRenderingContext;
exports.Material = index_1.Material;
exports.RasterCircle = index_1.RasterCircle;
exports.RasterImage = index_1.RasterImage;
exports.RasterRectangle = index_1.RasterRectangle;
exports.RasterText = index_1.RasterText;
exports.RasterTriangle = index_1.RasterTriangle;
//msb-math
var index_2 = __webpack_require__(0);
exports.Container = index_2.Container;
exports.degrees2radians = index_2.degrees2radians;
exports.createRandomRangeGenerator = index_2.createRandomRangeGenerator;
exports.createIntegerRandomRangeGenerator = index_2.createIntegerRandomRangeGenerator;
exports.integerRandomRange = index_2.integerRandomRange;
exports.normalDistribution = index_2.normalDistribution;
exports.normalGaussianGenerator = index_2.normalGaussianGenerator;
exports.radians2degrees = index_2.radians2degrees;
exports.randomRange = index_2.randomRange;
exports.Matrix = index_2.Matrix;
exports.Vector = index_2.Vector;
//msb-nature
var index_3 = __webpack_require__(16);
exports.NatureActor = index_3.NatureActor;
exports.NatureClock = index_3.NatureClock;
exports.NatureMover = index_3.NatureMover;
exports.NatureOscillator = index_3.NatureOscillator;
exports.NatureParticle = index_3.NatureParticle;
exports.NatureParticleSystemConfetti = index_3.NatureParticleSystemConfetti;
exports.NaturePendulum = index_3.NaturePendulum;
exports.NatureRepeller = index_3.NatureRepeller;
exports.NatureSpring = index_3.NatureSpring;
exports.NatureWalker = index_3.NatureWalker;
exports.NatureWave = index_3.NatureWave;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 8/27/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Font = (function () {
    function Font(size, family) {
        if (size === void 0) { size = 30; }
        if (family === void 0) { family = "Arial"; }
        this.size = size;
        this.family = family;
        this.style = "normal";
    }
    Font.prototype.toString = function () {
        var f = this.family, sz = this.size, stl = this.style;
        return stl + " " + sz + "px " + f;
    };
    return Font;
}());
exports.Font = Font;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/26/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(8);
var Material = (function () {
    function Material() {
    }
    Material.emerald = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.0215, 0.1745, 0.0215);
        material.diffuse = new color_1.ColorRGB(0.07568, 0.61424, 0.07568);
        material.specular = new color_1.ColorRGB(0.633, 0.727811, 0.633);
        material.shininess = 0.6;
        return material;
    };
    Material.jade = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.135, 0.2225, 0.1575);
        material.diffuse = new color_1.ColorRGB(0.54, 0.89, 0.63);
        material.specular = new color_1.ColorRGB(0.316228, 0.316228, 0.316228);
        material.shininess = 0.1;
        return material;
    };
    Material.obsidian = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.05375, 0.05, 0.06625);
        material.diffuse = new color_1.ColorRGB(0.18275, 0.17, 0.22525);
        material.specular = new color_1.ColorRGB(0.332741, 0.328634, 0.346435);
        material.shininess = 0.3;
        return material;
    };
    Material.pearl = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.25, 0.20725, 0.20725);
        material.diffuse = new color_1.ColorRGB(1.0, 0.829, 0.829);
        material.specular = new color_1.ColorRGB(0.296648, 0.296648, 0.296648);
        material.shininess = 0.088;
        return material;
    };
    Material.ruby = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.1745, 0.01175, 0.01175);
        material.diffuse = new color_1.ColorRGB(0.61424, 0.04136, 0.04136);
        material.specular = new color_1.ColorRGB(0.727811, 0.626959, 0.626959);
        material.shininess = 0.6;
        return material;
    };
    Material.turquoise = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.1, 0.18725, 0.1745);
        material.diffuse = new color_1.ColorRGB(0.396, 0.74151, 0.69102);
        material.specular = new color_1.ColorRGB(0.297254, 0.30829, 0.306678);
        material.shininess = 0.1;
        return material;
    };
    Material.brass = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.329412, 0.223529, 0.027451);
        material.diffuse = new color_1.ColorRGB(0.780392, 0.568627, 0.113725);
        material.specular = new color_1.ColorRGB(0.992157, 0.941176, 0.807843);
        material.shininess = 0.21794872;
        return material;
    };
    Material.bronze = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.2125, 0.1275, 0.054);
        material.diffuse = new color_1.ColorRGB(0.714, 0.4284, 0.18144);
        material.specular = new color_1.ColorRGB(0.393548, 0.271906, 0.166721);
        material.shininess = 0.2;
        return material;
    };
    Material.chrome = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.25, 0.25, 0.25);
        material.diffuse = new color_1.ColorRGB(0.4, 0.4, 0.4);
        material.specular = new color_1.ColorRGB(0.774597, 0.774597, 0.774597);
        material.shininess = 0.6;
        return material;
    };
    Material.copper = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.19125, 0.0735, 0.0225);
        material.diffuse = new color_1.ColorRGB(0.7038, 0.27048, 0.0828);
        material.specular = new color_1.ColorRGB(0.256777, 0.137622, 0.086014);
        material.shininess = 0.1;
        return material;
    };
    Material.gold = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.24725, 0.1995, 0.0745);
        material.diffuse = new color_1.ColorRGB(0.75164, 0.60648, 0.22648);
        material.specular = new color_1.ColorRGB(0.628281, 0.555802, 0.366065);
        material.shininess = 0.4;
        return material;
    };
    Material.silver = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.19225, 0.19225, 0.19225);
        material.diffuse = new color_1.ColorRGB(0.50754, 0.50754, 0.50754);
        material.specular = new color_1.ColorRGB(0.508273, 0.508273, 0.508273);
        material.shininess = 0.4;
        return material;
    };
    Material.plasticBlack = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.0, 0.0, 0.0);
        material.diffuse = new color_1.ColorRGB(0.01, 0.01, 0.01);
        material.specular = new color_1.ColorRGB(0.50, 0.50, 0.50);
        material.shininess = 0.25;
        return material;
    };
    Material.plasticCyan = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.0, 0.1, 0.06);
        material.diffuse = new color_1.ColorRGB(0.0, 0.50980392, 0.50980392);
        material.specular = new color_1.ColorRGB(0.50196078, 0.50196078, 0.50196078);
        material.shininess = 0.25;
        return material;
    };
    Material.plasticGreen = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.0, 0.0, 0.0);
        material.diffuse = new color_1.ColorRGB(0.1, 0.35, 0.1);
        material.specular = new color_1.ColorRGB(0.45, 0.55, 0.45);
        material.shininess = 0.25;
        return material;
    };
    Material.plasticRed = function () {
        var material = new Material();
        material.ambient = new color_1.ColorRGB(0.0, 0.0, 0.0);
        material.diffuse = new color_1.ColorRGB(0.5, 0.0, 0.0);
        material.specular = new color_1.ColorRGB(0.7, 0.6, 0.6);
        material.shininess = 0.25;
        return material;
    };
    return Material;
}());
exports.Material = Material;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/26/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var dim_1 = __webpack_require__(1);
var builder_1 = __webpack_require__(2);
var TWO_PIE = Math.PI * 2;
var DimCircleModelBuilder = (function (_super) {
    __extends(DimCircleModelBuilder, _super);
    function DimCircleModelBuilder(radius, divisions) {
        if (radius === void 0) { radius = 1.0; }
        if (divisions === void 0) { divisions = 10; }
        var _this = _super.call(this) || this;
        _this.radius = radius;
        _this.divisions = divisions;
        return _this;
    }
    DimCircleModelBuilder.prototype.buildModel = function (gl) {
        var model, face, element, theta, slice = TWO_PIE / this.divisions;
        model = new dim_1.DimModel();
        face = new dim_1.DimFace();
        face.drawMode = gl.TRIANGLE_FAN;
        if (this.material) {
            face.material = this.material;
        }
        element = new dim_1.DimElement();
        element.vertex = new index_1.Vector();
        if (this.color) {
            element.color = this.color;
        }
        if (this.hasNormals) {
            element.normal = new index_1.Vector(0, 0, 1);
        }
        face.elementArray.push(element);
        for (theta = 0.0; theta <= TWO_PIE; theta = theta + slice) {
            if (theta != TWO_PIE && (theta + slice) > TWO_PIE) {
                theta = TWO_PIE - slice;
            }
            element = new dim_1.DimElement();
            element.vertex = new index_1.Vector(this.radius * Math.cos(theta), this.radius * Math.sin(theta), 0);
            if (this.color) {
                element.color = this.color;
            }
            if (this.hasNormals) {
                element.normal = new index_1.Vector(0, 0, 1);
            }
            face.elementArray.push(element);
        }
        model.faceArray.push(face);
        return model;
    };
    return DimCircleModelBuilder;
}(builder_1.ModelBuilder));
exports.DimCircleModelBuilder = DimCircleModelBuilder;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/26/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var dim_1 = __webpack_require__(1);
var builder_1 = __webpack_require__(2);
var TWO_PIE = Math.PI * 2;
var DimConeModelBuilder = (function (_super) {
    __extends(DimConeModelBuilder, _super);
    function DimConeModelBuilder(radius, height, divisions) {
        if (radius === void 0) { radius = 0.5; }
        if (height === void 0) { height = 1.0; }
        if (divisions === void 0) { divisions = 20; }
        var _this = _super.call(this) || this;
        _this.radius = radius;
        _this.height = height;
        _this.divisions = divisions;
        return _this;
    }
    DimConeModelBuilder.prototype.buildModel = function (gl) {
        var model, face, element, i, theta, slice = TWO_PIE / this.divisions, hHalf = this.height * 0.5, v, vArray = [];
        model = new dim_1.DimModel();
        //create circle
        for (theta = 0.0; theta <= TWO_PIE; theta = theta + slice) {
            if (theta != TWO_PIE && (theta + slice) > TWO_PIE) {
                theta = TWO_PIE - slice;
            }
            v = new index_1.Vector(this.radius * Math.cos(theta), 0, this.radius * Math.sin(theta));
            vArray.push(v);
        }
        //cone face
        face = new dim_1.DimFace();
        face.drawMode = gl.TRIANGLE_FAN;
        if (this.material) {
            face.material = this.material;
        }
        //top point
        element = new dim_1.DimElement();
        element.vertex = new index_1.Vector(0.0, hHalf, 0.0);
        face.elementArray.push(element);
        for (i = 0; i < vArray.length; i++) {
            v = vArray[i];
            element = new dim_1.DimElement();
            element.vertex = new index_1.Vector(v.x, -hHalf, v.z);
            face.elementArray.push(element);
        }
        model.faceArray.push(face);
        //bottom face
        face = new dim_1.DimFace();
        face.drawMode = gl.TRIANGLE_FAN;
        if (this.material) {
            face.material = this.material;
        }
        //bottom point
        element = new dim_1.DimElement();
        element.vertex = new index_1.Vector(0, -hHalf, 0);
        face.elementArray.push(element);
        for (i = 0; i < vArray.length; i++) {
            v = vArray[i];
            element = new dim_1.DimElement();
            element.vertex = new index_1.Vector(v.x, -hHalf, v.z);
            face.elementArray.push(element);
        }
        model.faceArray.push(face);
        return model;
    };
    return DimConeModelBuilder;
}(builder_1.ModelBuilder));
exports.DimConeModelBuilder = DimConeModelBuilder;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/26/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var dim_1 = __webpack_require__(1);
var builder_1 = __webpack_require__(2);
var DimCubeModelBuilder = (function (_super) {
    __extends(DimCubeModelBuilder, _super);
    function DimCubeModelBuilder(width, height, depth) {
        if (width === void 0) { width = 1.0; }
        if (height === void 0) { height = 1.0; }
        if (depth === void 0) { depth = 1.0; }
        var _this = _super.call(this) || this;
        _this._quadArray = [
            [1, 0, 3, 2],
            [2, 3, 7, 6],
            [3, 0, 4, 7],
            [6, 5, 1, 2],
            [4, 5, 6, 7],
            [5, 4, 0, 1]
        ];
        _this.dimensions = {
            width: width,
            height: height,
            depth: depth
        };
        return _this;
    }
    Object.defineProperty(DimCubeModelBuilder.prototype, "dimensions", {
        set: function (d) {
            var wHalf = d.width * 0.5, hHalf = d.height * 0.5, dHalf = d.depth * 0.5;
            this._vertexArray = [
                new index_1.Vector(-wHalf, -hHalf, dHalf),
                new index_1.Vector(-wHalf, hHalf, dHalf),
                new index_1.Vector(wHalf, hHalf, dHalf),
                new index_1.Vector(wHalf, -hHalf, dHalf),
                new index_1.Vector(-wHalf, -hHalf, -dHalf),
                new index_1.Vector(-wHalf, hHalf, -dHalf),
                new index_1.Vector(wHalf, hHalf, -dHalf),
                new index_1.Vector(wHalf, -hHalf, -dHalf)
            ];
            this._normalArray = [
                new index_1.Vector(0.0, 0.0, 1.0),
                new index_1.Vector(1.0, 0.0, 0.0),
                new index_1.Vector(0.0, -1.0, 0.0),
                new index_1.Vector(0.0, 1.0, 0.0),
                new index_1.Vector(0.0, 0.0, -1.0),
                new index_1.Vector(-1.0, 0.0, 0.0)
            ];
        },
        enumerable: true,
        configurable: true
    });
    DimCubeModelBuilder.prototype.buildModel = function (gl) {
        var model, face, element, i, j, indexArray;
        model = new dim_1.DimModel();
        for (i = 0; i < this._quadArray.length; i++) {
            face = new dim_1.DimFace();
            face.drawMode = gl.TRIANGLE_FAN;
            if (this.material) {
                face.material = this.material;
            }
            indexArray = this._quadArray[i];
            for (j = 0; j < indexArray.length; ++j) {
                element = new dim_1.DimElement();
                element.vertex = this._vertexArray[indexArray[j]];
                if (this.color) {
                    element.color = this.color;
                }
                if (this.hasNormals) {
                    element.normal = this._normalArray[i];
                }
                face.elementArray.push(element);
            }
            model.faceArray.push(face);
        }
        return model;
    };
    return DimCubeModelBuilder;
}(builder_1.ModelBuilder));
exports.DimCubeModelBuilder = DimCubeModelBuilder;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/26/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var dim_1 = __webpack_require__(1);
var builder_1 = __webpack_require__(2);
var TWO_PIE = Math.PI * 2;
var DimCylinderModelBuilder = (function (_super) {
    __extends(DimCylinderModelBuilder, _super);
    function DimCylinderModelBuilder(radius, height, divisions) {
        if (radius === void 0) { radius = 0.5; }
        if (height === void 0) { height = 1.0; }
        if (divisions === void 0) { divisions = 20; }
        var _this = _super.call(this) || this;
        _this.radius = radius;
        _this.height = height;
        _this.divisions = divisions;
        return _this;
    }
    DimCylinderModelBuilder.prototype.buildModel = function (gl) {
        var model, face, element, i, theta, slice = TWO_PIE / this.divisions, hHalf = this.height * 0.5, v, vArray = [], vertex;
        model = new dim_1.DimModel();
        //create circle
        for (theta = 0.0; theta <= TWO_PIE; theta = theta + slice) {
            if (theta != TWO_PIE && (theta + slice) > TWO_PIE) {
                theta = TWO_PIE - slice;
            }
            v = new index_1.Vector(this.radius * Math.cos(theta), 0, this.radius * Math.sin(theta));
            vArray.push(v);
        }
        //wrap face
        face = new dim_1.DimFace();
        face.drawMode = gl.TRIANGLE_STRIP;
        if (this.material) {
            face.material = this.material;
        }
        for (i = 0; i < vArray.length; i++) {
            v = vArray[i];
            element = new dim_1.DimElement();
            element.vertex = new index_1.Vector(v.x, hHalf, v.z);
            if (this.color) {
                element.color = this.color;
            }
            if (this.hasNormals) {
                element.normal = element.vertex.clone();
                element.normal.normalize();
            }
            face.elementArray.push(element);
            element = new dim_1.DimElement();
            element.vertex = new index_1.Vector(v.x, -hHalf, v.z);
            if (this.color) {
                element.color = this.color;
            }
            if (this.hasNormals) {
                element.normal = element.vertex.clone();
                element.normal.normalize();
            }
            face.elementArray.push(element);
        }
        model.faceArray.push(face);
        //top face
        face = new dim_1.DimFace();
        face.drawMode = gl.TRIANGLE_FAN;
        if (this.material) {
            face.material = this.material;
        }
        //top point
        element = new dim_1.DimElement();
        element.vertex = new index_1.Vector(0, hHalf, 0);
        if (this.color) {
            element.color = this.color;
        }
        if (this.hasNormals) {
            element.normal = new index_1.Vector(0, 1.0, 0);
        }
        face.elementArray.push(element);
        for (i = 0; i < vArray.length; i++) {
            v = vArray[i];
            element = new dim_1.DimElement();
            element.vertex = new index_1.Vector(v.x, hHalf, v.z);
            if (this.color) {
                element.color = this.color;
            }
            if (this.hasNormals) {
                element.normal = new index_1.Vector(0, 1.0, 0);
            }
            face.elementArray.push(element);
        }
        model.faceArray.push(face);
        //bottom face
        face = new dim_1.DimFace();
        face.drawMode = gl.TRIANGLE_FAN;
        if (this.material) {
            face.material = this.material;
        }
        //bottom point
        element = new dim_1.DimElement();
        element.vertex = new index_1.Vector(0, -hHalf, 0);
        if (this.color) {
            element.color = this.color;
        }
        if (this.hasNormals) {
            element.normal = new index_1.Vector(0, -1.0, 0);
        }
        face.elementArray.push(element);
        for (i = 0; i < vArray.length; i++) {
            v = vArray[i];
            element = new dim_1.DimElement();
            element.vertex = new index_1.Vector(v.x, -hHalf, v.z);
            if (this.color) {
                element.color = this.color;
            }
            if (this.hasNormals) {
                element.normal = new index_1.Vector(0, -1.0, 0);
            }
            face.elementArray.push(element);
        }
        model.faceArray.push(face);
        return model;
    };
    return DimCylinderModelBuilder;
}(builder_1.ModelBuilder));
exports.DimCylinderModelBuilder = DimCylinderModelBuilder;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 4/22/17.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = __webpack_require__(20);
exports.DimCircleModelBuilder = circle_1.DimCircleModelBuilder;
var cone_1 = __webpack_require__(21);
exports.DimConeModelBuilder = cone_1.DimConeModelBuilder;
var cube_1 = __webpack_require__(22);
exports.DimCubeModelBuilder = cube_1.DimCubeModelBuilder;
var cylinder_1 = __webpack_require__(23);
exports.DimCylinderModelBuilder = cylinder_1.DimCylinderModelBuilder;
var rectangle_1 = __webpack_require__(26);
exports.DimRectangleModelBuilder = rectangle_1.DimRectangleModelBuilder;
var sphere_1 = __webpack_require__(27);
exports.DimSphereModelBuilder = sphere_1.DimSphereModelBuilder;
var triangle_1 = __webpack_require__(28);
exports.DimTriangleModelBuilder = triangle_1.DimTriangleModelBuilder;
var loader_obj_1 = __webpack_require__(25);
exports.DimObjModelLoader = loader_obj_1.DimObjModelLoader;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/26/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var dim_1 = __webpack_require__(1);
var DimObjModelLoader = (function () {
    function DimObjModelLoader() {
    }
    DimObjModelLoader.prototype.parseModel = function (gl, material, data) {
        var i, j, f, r = /\s+/, fr = /\//, index, lArray, fArray, vertexArray = [], texCoordArray = [], normalArray = [], line, lineArray, face, element, model;
        model = new dim_1.DimModel();
        lineArray = data.split("\n");
        for (i = 0; i < lineArray.length; i++) {
            line = lineArray[i];
            if (line.startsWith("vt")) {
                lArray = line.split(r);
                texCoordArray.push([parseFloat(lArray[1]), parseFloat(lArray[2]), parseFloat(lArray[3])]);
            }
            else if (line.startsWith("vn")) {
                lArray = line.split(r);
                normalArray.push(new index_1.Vector(parseFloat(lArray[1]), parseFloat(lArray[2]), parseFloat(lArray[3])));
            }
            else if (line.startsWith("v")) {
                lArray = line.split(r);
                vertexArray.push(new index_1.Vector(parseFloat(lArray[1]), parseFloat(lArray[2]), parseFloat(lArray[3])));
            }
            else if (line.startsWith("f")) {
                lArray = line.split(r);
                if (lArray.length > 0) {
                    face = new dim_1.DimFace();
                    face.drawMode = gl.TRIANGLES;
                    if (material) {
                        face.material = material;
                    }
                    for (j = 1; j < lArray.length; j++) {
                        if (lArray[j] && lArray[j] !== "") {
                            fArray = lArray[j].split(fr);
                            if (fArray.length > 0 && vertexArray.length > 0) {
                                index = parseInt(fArray[0]) - 1;
                                element = new dim_1.DimElement();
                                element.vertex = vertexArray[index];
                                // if(texCoordArray.length > 0 && fArray.length > 1 && fArray[1] !== "") {
                                //
                                //     index = parseInt(fArray[1]) - 1;
                                //     element.texCoord = texCoordArray[index];
                                // }
                                if (normalArray.length > 0 && fArray.length > 2 && fArray[2] !== "") {
                                    index = parseInt(fArray[2]) - 1;
                                    element.normal = normalArray[index];
                                }
                                face.elementArray.push(element);
                            }
                        }
                    }
                    model.faceArray.push(face);
                }
            }
        }
        return model;
    };
    DimObjModelLoader.prototype.loadModel = function (gl, url, callback) {
        var model, parseModel = this.parseModel, material = this.material, xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                model = parseModel(gl, material, this.responseText);
                callback(model);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    };
    return DimObjModelLoader;
}());
exports.DimObjModelLoader = DimObjModelLoader;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created on 11/13/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var dim_1 = __webpack_require__(1);
var builder_1 = __webpack_require__(2);
var DimRectangleModelBuilder = (function (_super) {
    __extends(DimRectangleModelBuilder, _super);
    function DimRectangleModelBuilder(w, h) {
        if (w === void 0) { w = 1.0; }
        if (h === void 0) { h = 1.0; }
        var _this = _super.call(this) || this;
        _this.width = w;
        _this.height = h;
        return _this;
    }
    DimRectangleModelBuilder.prototype.buildModel = function (gl) {
        var model, face, element, normal, wHalf = this.width * 0.5, hHalf = this.height * 0.5;
        // x1 = this.origin.x - wHalf,
        // y1 = this.origin.y - hHalf,
        // x2 = this.origin.x - wHalf,
        // y2 = this.origin.y + hHalf,
        // x3 = this.origin.x + wHalf,
        // y3 = this.origin.y - hHalf;
        model = new dim_1.DimModel();
        face = new dim_1.DimFace();
        face.drawMode = gl.TRIANGLE_FAN;
        if (this.material) {
            face.material = this.material;
        }
        element = new dim_1.DimElement();
        element.vertex = new index_1.Vector(this.origin.x - wHalf, this.origin.y - hHalf, 0);
        if (this.color) {
            element.color = this.color;
        }
        if (this.hasNormals) {
            element.normal = new index_1.Vector(0, 0, 1.0);
        }
        face.elementArray.push(element);
        element = new dim_1.DimElement();
        element.vertex = new index_1.Vector(this.origin.x - wHalf, this.origin.y + hHalf, 0);
        if (this.color) {
            element.color = this.color;
        }
        if (this.hasNormals) {
            element.normal = new index_1.Vector(0, 0, 1.0);
        }
        face.elementArray.push(element);
        element = new dim_1.DimElement();
        element.vertex = new index_1.Vector(this.origin.x + wHalf, this.origin.y + hHalf, 0);
        if (this.color) {
            element.color = this.color;
        }
        if (this.hasNormals) {
            element.normal = new index_1.Vector(0, 0, 1.0);
        }
        face.elementArray.push(element);
        element = new dim_1.DimElement();
        element.vertex = new index_1.Vector(this.origin.x + wHalf, this.origin.y - hHalf, 0);
        if (this.color) {
            element.color = this.color;
        }
        if (this.hasNormals) {
            element.normal = new index_1.Vector(0, 0, 1.0);
        }
        face.elementArray.push(element);
        model.faceArray.push(face);
        return model;
    };
    return DimRectangleModelBuilder;
}(builder_1.ModelBuilder));
exports.DimRectangleModelBuilder = DimRectangleModelBuilder;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/26/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var dim_1 = __webpack_require__(1);
var builder_1 = __webpack_require__(2);
var TWO_PIE = Math.PI * 2;
var DimSphereModelBuilder = (function (_super) {
    __extends(DimSphereModelBuilder, _super);
    function DimSphereModelBuilder(radius, divisions) {
        if (radius === void 0) { radius = 0.5; }
        if (divisions === void 0) { divisions = 20; }
        var _this = _super.call(this) || this;
        _this.radius = radius;
        _this.divisions = divisions;
        return _this;
    }
    DimSphereModelBuilder.prototype.buildModel = function (gl) {
        var model, face, element, phi = 0.0, theta = 0.0, thetaSlice = TWO_PIE / this.divisions, phiSlice = Math.PI / this.divisions;
        model = new dim_1.DimModel();
        face = new dim_1.DimFace();
        face.drawMode = gl.TRIANGLE_STRIP;
        if (this.material) {
            face.material = this.material;
        }
        for (phi = 0; phi < Math.PI; phi = phi + phiSlice) {
            if (phi != Math.PI && (phi + phiSlice) > Math.PI) {
                phi = Math.PI - phiSlice;
            }
            for (theta = 0.0; theta <= TWO_PIE; theta = theta + thetaSlice) {
                if (theta != TWO_PIE && (theta + thetaSlice) > TWO_PIE) {
                    theta = TWO_PIE - thetaSlice;
                }
                element = new dim_1.DimElement();
                element.vertex = new index_1.Vector(this.radius * Math.sin(phi) * Math.cos(theta), this.radius * Math.cos(phi), this.radius * Math.sin(phi) * Math.sin(theta));
                if (this.color) {
                    element.color = this.color;
                }
                if (this.hasNormals) {
                    element.normal = element.vertex.clone();
                    element.normal.normalize();
                }
                face.elementArray.push(element);
                element = new dim_1.DimElement();
                element.vertex = new index_1.Vector(this.radius * Math.sin(phi + phiSlice) * Math.cos(theta), this.radius * Math.cos(phi + phiSlice), this.radius * Math.sin(phi + phiSlice) * Math.sin(theta));
                if (this.color) {
                    element.color = this.color;
                }
                if (this.hasNormals) {
                    element.normal = element.vertex.clone();
                    element.normal.normalize();
                }
                face.elementArray.push(element);
            }
        }
        model.faceArray.push(face);
        return model;
    };
    return DimSphereModelBuilder;
}(builder_1.ModelBuilder));
exports.DimSphereModelBuilder = DimSphereModelBuilder;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created on 11/13/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var dim_1 = __webpack_require__(1);
var builder_1 = __webpack_require__(2);
var DimTriangleModelBuilder = (function (_super) {
    __extends(DimTriangleModelBuilder, _super);
    function DimTriangleModelBuilder(w, h) {
        if (w === void 0) { w = 1.0; }
        if (h === void 0) { h = 1.0; }
        var _this = _super.call(this) || this;
        _this.width = w;
        _this.height = h;
        return _this;
    }
    DimTriangleModelBuilder.prototype.buildModel = function (gl) {
        var model, face, element, wHalf = this.width * 0.5, hHalf = this.height * 0.5, x1 = this.origin.x - wHalf, y1 = this.origin.y - hHalf, x2 = this.origin.x, y2 = this.origin.y + hHalf, x3 = this.origin.x + wHalf, y3 = this.origin.y - hHalf;
        model = new dim_1.DimModel();
        face = new dim_1.DimFace();
        face.drawMode = gl.TRIANGLES;
        if (this.material) {
            face.material = this.material;
        }
        element = new dim_1.DimElement();
        element.vertex = new index_1.Vector(x1, y1, 0);
        if (this.color) {
            element.color = this.color;
        }
        if (this.hasNormals) {
            element.normal = new index_1.Vector(0, 0, 1.0);
        }
        face.elementArray.push(element);
        element = new dim_1.DimElement();
        element.vertex = new index_1.Vector(x2, y2, 0);
        if (this.color) {
            element.color = this.color;
        }
        if (this.hasNormals) {
            element.normal = new index_1.Vector(0, 0, 1.0);
        }
        face.elementArray.push(element);
        element = new dim_1.DimElement();
        element.vertex = new index_1.Vector(x3, y3, 0);
        if (this.color) {
            element.color = this.color;
        }
        if (this.hasNormals) {
            element.normal = new index_1.Vector(0, 0, 1.0);
        }
        face.elementArray.push(element);
        model.faceArray.push(face);
        return model;
    };
    return DimTriangleModelBuilder;
}(builder_1.ModelBuilder));
exports.DimTriangleModelBuilder = DimTriangleModelBuilder;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 4/22/17.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var DimElement = (function () {
    function DimElement() {
        this.vertex = new index_1.Vector();
    }
    DimElement.prototype.toArray = function () {
        var eArray = [];
        eArray = eArray.concat(this.vertex.toArray());
        if (this.color) {
            eArray = eArray.concat(this.color.toArray());
        }
        if (this.normal) {
            eArray = eArray.concat(this.normal.toArray());
        }
        return eArray;
    };
    return DimElement;
}());
exports.DimElement = DimElement;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/26/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var math_1 = __webpack_require__(6);
var utility_1 = __webpack_require__(4);
var DimEye = (function () {
    function DimEye() {
        this.position = new index_1.Vector(0, 0, 4.0);
        this.at = new index_1.Vector();
        this.up = new index_1.Vector(0, 1.0, 0);
    }
    Object.defineProperty(DimEye.prototype, "viewMatrix", {
        get: function () {
            return math_1.DimMatrix.createLookAtViewMatrix(this.position, this.at, this.up);
        },
        enumerable: true,
        configurable: true
    });
    DimEye.prototype.init = function (gl, glProgram) {
        this.uViewMatrixLocation = gl.getUniformLocation(glProgram, "u_ViewMatrix");
    };
    DimEye.prototype.render = function (gl) {
        if (!this.uViewMatrixLocation) {
            throw "GL uniform u_ViewMatrix location required.";
        }
        gl.uniformMatrix4fv(this.uViewMatrixLocation, false, utility_1.toDataArray(this.viewMatrix));
    };
    return DimEye;
}());
exports.DimEye = DimEye;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/26/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var index_2 = __webpack_require__(9);
var utility_1 = __webpack_require__(4);
var DimLight = (function () {
    function DimLight(id) {
        if (id === void 0) { id = 1; }
        this.id = id;
    }
    DimLight.starter = function () {
        var light = new DimLight();
        light.position = new index_1.Vector(2.0, 2.0, 2.0);
        light.ambient = new index_2.ColorRGB(0.2, 0.2, 0.2);
        light.diffuse = new index_2.ColorRGB(1.0, 1.0, 1.0);
        light.specular = new index_2.ColorRGB(0.5, 0.5, 0.5);
        // light.ambient = ColorRGB.getRandom();
        // light.diffuse = ColorRGB.getRandom();
        // light.specular = ColorRGB.getRandom();
        return light;
    };
    DimLight.prototype.init = function (gl, glProgram) {
        this.uLightPositionLocation = gl.getUniformLocation(glProgram, "u_LightPosition_" + this.id);
        this.uLightAmbientLocation = gl.getUniformLocation(glProgram, "u_LightAmbient_" + this.id);
        this.uLightDiffuseLocation = gl.getUniformLocation(glProgram, "u_LightDiffuse_" + this.id);
        this.uLightSpecularLocation = gl.getUniformLocation(glProgram, "u_LightSpecular_" + this.id);
    };
    DimLight.prototype.render = function (gl) {
        if (!this.uLightPositionLocation) {
            throw "GL uniform u_LightPosition location required.";
        }
        if (!this.uLightAmbientLocation) {
            throw "GL uniform u_LightAmbient location required.";
        }
        if (!this.uLightDiffuseLocation) {
            throw "GL uniform u_LightDiffuse location required.";
        }
        if (!this.uLightSpecularLocation) {
            throw "GL uniform u_LightSpecular location required.";
        }
        gl.uniform3fv(this.uLightPositionLocation, utility_1.toDataArray(this.position.toArray()));
        gl.uniform4fv(this.uLightAmbientLocation, utility_1.toDataArray(this.ambient.toArray()));
        gl.uniform4fv(this.uLightDiffuseLocation, utility_1.toDataArray(this.diffuse.toArray()));
        gl.uniform4fv(this.uLightSpecularLocation, utility_1.toDataArray(this.specular.toArray()));
    };
    return DimLight;
}());
exports.DimLight = DimLight;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 4/22/17.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
var utility_1 = __webpack_require__(4);
var DimProjection = (function () {
    function DimProjection(near, far) {
        this.near = near;
        this.far = far;
    }
    DimProjection.prototype.init = function (gl, glProgram) {
        this.uProjectionMatrixLocation = gl.getUniformLocation(glProgram, "u_ProjectionMatrix");
    };
    DimProjection.prototype.render = function (gl) {
        if (!this.uProjectionMatrixLocation) {
            throw "GL uniform u_ProjectionMatrix location required.";
        }
        gl.uniformMatrix4fv(this.uProjectionMatrixLocation, false, utility_1.toDataArray(this.projectionMatrix));
    };
    return DimProjection;
}());
var DimOrthographicProjection = (function (_super) {
    __extends(DimOrthographicProjection, _super);
    function DimOrthographicProjection(near, far) {
        if (near === void 0) { near = 5; }
        if (far === void 0) { far = -5; }
        var _this = _super.call(this, near, far) || this;
        _this.left = -1;
        _this.right = 1;
        _this.bottom = -1;
        _this.top = 1;
        return _this;
    }
    Object.defineProperty(DimOrthographicProjection.prototype, "projectionMatrix", {
        get: function () {
            return index_1.DimMatrix.orthographicProjection(this.left, this.right, this.bottom, this.top, this.near, this.far);
        },
        enumerable: true,
        configurable: true
    });
    return DimOrthographicProjection;
}(DimProjection));
exports.DimOrthographicProjection = DimOrthographicProjection;
var DimPerspectiveProjection = (function (_super) {
    __extends(DimPerspectiveProjection, _super);
    function DimPerspectiveProjection(aspect, near, far) {
        if (near === void 0) { near = 0.1; }
        if (far === void 0) { far = -10.0; }
        var _this = _super.call(this, near, far) || this;
        _this.aspect = aspect;
        _this.angle = 45.0;
        return _this;
    }
    Object.defineProperty(DimPerspectiveProjection.prototype, "projectionMatrix", {
        get: function () {
            return index_1.DimMatrix.perspectiveProjection(this.angle, this.aspect, this.near, this.far);
        },
        enumerable: true,
        configurable: true
    });
    return DimPerspectiveProjection;
}(DimProjection));
exports.DimPerspectiveProjection = DimPerspectiveProjection;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 4/22/17.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = __webpack_require__(4);
var model_1 = __webpack_require__(11);
var DimScene = (function () {
    function DimScene(id, vertexSize) {
        if (id === void 0) { id = 1; }
        if (vertexSize === void 0) { vertexSize = 3; }
        this.id = id;
        this.vertexSize = vertexSize;
        this.colorSize = 0;
        this.normalSize = 0;
        this.modelArray = [];
        this.hasTransformation = false;
        this.hasMaterial = false;
    }
    Object.defineProperty(DimScene.prototype, "elementSize", {
        get: function () {
            return this.vertexSize + this.colorSize + this.normalSize;
        },
        enumerable: true,
        configurable: true
    });
    DimScene.prototype.init = function (gl, glProgram) {
        var offset = 0, stride = Float32Array.BYTES_PER_ELEMENT * this.elementSize, sceneData = new DimSceneData(this.modelArray);
        if (this.hasTransformation) {
            this.uTranslationMatrix = gl.getUniformLocation(glProgram, "u_TranslationMatrix_" + this.id);
            this.uRotationMatrixX = gl.getUniformLocation(glProgram, "u_RotationMatrixX_" + this.id);
            this.uRotationMatrixY = gl.getUniformLocation(glProgram, "u_RotationMatrixY_" + this.id);
            this.uRotationMatrixZ = gl.getUniformLocation(glProgram, "u_RotationMatrixZ_" + this.id);
            this.uScaleMatrix = gl.getUniformLocation(glProgram, "u_ScaleMatrix_" + this.id);
        }
        if (this.hasMaterial) {
            this.uAmbient = gl.getUniformLocation(glProgram, "u_Ambient_" + this.id);
            this.uDiffuse = gl.getUniformLocation(glProgram, "u_Diffuse_" + this.id);
            this.uSpecular = gl.getUniformLocation(glProgram, "u_Specular_" + this.id);
            this.uShininess = gl.getUniformLocation(glProgram, "u_Shininess_" + this.id);
        }
        this.bufferId = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferId);
        gl.bufferData(gl.ARRAY_BUFFER, utility_1.toDataArray(sceneData.elementDataArray), gl.STATIC_DRAW);
        this.aPosition = gl.getAttribLocation(glProgram, "a_Position_" + this.id);
        gl.vertexAttribPointer(this.aPosition, this.vertexSize, gl.FLOAT, false, stride, offset);
        offset = offset + this.vertexSize;
        if (this.colorSize > 0) {
            this.aColor = gl.getAttribLocation(glProgram, "a_Color_" + this.id);
            gl.vertexAttribPointer(this.aColor, this.colorSize, gl.FLOAT, false, stride, Float32Array.BYTES_PER_ELEMENT * offset);
            offset = offset + this.colorSize;
        }
        if (this.normalSize > 0) {
            this.aNormal = gl.getAttribLocation(glProgram, "a_Normal_" + this.id);
            gl.vertexAttribPointer(this.aNormal, this.normalSize, gl.FLOAT, false, stride, Float32Array.BYTES_PER_ELEMENT * offset);
            offset = offset + this.normalSize;
        }
    };
    DimScene.prototype.rotate = function () {
        var model;
        for (var _i = 0, _a = this.modelArray; _i < _a.length; _i++) {
            model = _a[_i];
            model.matrix.rotationX = model.matrix.rotationX + 1;
        }
    };
    DimScene.prototype.render = function (gl) {
        var model, face, elementOffset = 0;
        gl.enableVertexAttribArray(this.aPosition);
        if (this.colorSize > 0) {
            gl.enableVertexAttribArray(this.aColor);
        }
        if (this.normalSize > 0) {
            gl.enableVertexAttribArray(this.aNormal);
        }
        for (var _i = 0, _a = this.modelArray; _i < _a.length; _i++) {
            model = _a[_i];
            if (this.hasTransformation) {
                gl.uniformMatrix4fv(this.uTranslationMatrix, false, utility_1.toDataArray(model.matrix.toTranslationArray()));
                gl.uniformMatrix4fv(this.uRotationMatrixX, false, utility_1.toDataArray(model.matrix.toRotationArrayX()));
                gl.uniformMatrix4fv(this.uRotationMatrixY, false, utility_1.toDataArray(model.matrix.toRotationArrayY()));
                gl.uniformMatrix4fv(this.uRotationMatrixZ, false, utility_1.toDataArray(model.matrix.toRotationArrayZ()));
                gl.uniformMatrix4fv(this.uScaleMatrix, false, utility_1.toDataArray(model.matrix.toScaleArray()));
            }
            for (var _b = 0, _c = model.faceArray; _b < _c.length; _b++) {
                face = _c[_b];
                if (this.hasMaterial && face.material) {
                    var material = face.material;
                    gl.uniform4fv(this.uAmbient, utility_1.toDataArray(material.ambient.toArray()));
                    gl.uniform4fv(this.uDiffuse, utility_1.toDataArray(material.diffuse.toArray()));
                    gl.uniform4fv(this.uSpecular, utility_1.toDataArray(material.specular.toArray()));
                    gl.uniform1f(this.uShininess, material.shininess);
                }
                gl.drawArrays(face.drawMode, elementOffset, face.elementCount);
                elementOffset = elementOffset + face.elementCount;
            }
        }
    };
    return DimScene;
}());
exports.DimScene = DimScene;
var DimSceneData = (function () {
    function DimSceneData(modelArray) {
        var model, modelData;
        this.elementCount = 0;
        this.elementDataArray = [];
        for (var _i = 0, modelArray_1 = modelArray; _i < modelArray_1.length; _i++) {
            model = modelArray_1[_i];
            modelData = new model_1.DimModelData(model);
            this.elementDataArray = this.elementDataArray.concat(modelData.elementDataArray);
            this.elementCount = this.elementCount + modelData.elementCount;
        }
    }
    return DimSceneData;
}());
exports.DimSceneData = DimSceneData;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 11/13/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var msb_math_1 = __webpack_require__(0);
var DimMatrix = (function () {
    function DimMatrix() {
        this.translationX = 0.0;
        this.translationY = 0.0;
        this.translationZ = 0.0;
        this.rotationX = 0.0;
        this.rotationY = 0.0;
        this.rotationZ = 0.0;
        this.scaleX = 1.0;
        this.scaleY = 1.0;
        this.scaleZ = 1.0;
    }
    DimMatrix.identity = function () {
        return [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    };
    DimMatrix.orthographicProjection = function (left, right, bottom, top, near, far) {
        var w = right - left, h = top - bottom, d = far - near, matrix = DimMatrix.identity();
        // 0 0
        matrix[0] = 2.0 / w;
        // 1 1
        matrix[5] = 2.0 / h;
        // 2 2
        matrix[10] = -2.0 / d;
        // 0 3
        matrix[3] = (left + right) / w;
        // 3 1
        matrix[13] = (top + bottom) / h;
        // 3 2
        matrix[14] = (near + far) / d;
        return matrix;
    };
    DimMatrix.perspectiveProjection = function (fovy, aspect, near, far) {
        var f = 1.0 / Math.tan(msb_math_1.degrees2radians(fovy) / 2.0), d = far - near, matrix = DimMatrix.identity();
        //column order first
        // 0 0
        matrix[0] = f / aspect;
        // 1 1
        matrix[5] = f;
        // 2 2
        matrix[10] = -(near + far) / d;
        // 3 2
        matrix[14] = -2.0 * near * far / d;
        // 2 3
        matrix[11] = -1.0;
        // 3 3
        matrix[15] = 0.0;
        return matrix;
    };
    DimMatrix.createLookAtViewMatrix = function (position, at, up) {
        var f, s, u, matrix = DimMatrix.identity();
        f = msb_math_1.Vector.subtract(position, at); // view direction vector
        f.normalize();
        s = msb_math_1.Vector.cross(f, up); // perpendicular vector
        s.normalize();
        u = msb_math_1.Vector.cross(s, f); // "new" up vector
        u.normalize();
        // f.negate();
        //column order first
        // 0 0
        matrix[0] = s.x;
        // 1 0
        matrix[4] = s.y;
        // 2 0
        matrix[8] = s.z;
        // 3 0
        matrix[12] = -msb_math_1.Vector.dot(s, position);
        // 0 1
        matrix[1] = u.x;
        // 1 1
        matrix[5] = u.y;
        // 2 1
        matrix[9] = u.z;
        // 3 1
        matrix[13] = -msb_math_1.Vector.dot(u, position);
        // 0 2
        matrix[2] = f.x;
        // 1 2
        matrix[6] = f.y;
        // 2 2
        matrix[10] = f.z;
        // 3 2
        matrix[14] = -msb_math_1.Vector.dot(f, position);
        return matrix;
    };
    DimMatrix.prototype.toRotationArrayX = function () {
        var angle = msb_math_1.degrees2radians(this.rotationX), cosAngle = Math.cos(angle), sinAngle = Math.sin(angle);
        return [
            1.0, 0.0, 0.0, 0.0,
            0.0, cosAngle, sinAngle, 0.0,
            0.0, -sinAngle, cosAngle, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    };
    DimMatrix.prototype.toRotationArrayY = function () {
        var angle = msb_math_1.degrees2radians(this.rotationY), cosAngle = Math.cos(angle), sinAngle = Math.sin(angle);
        return [
            cosAngle, 0.0, -sinAngle, 0.0,
            0.0, 1.0, 0.0, 0.0,
            sinAngle, 0.0, cosAngle, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    };
    DimMatrix.prototype.toRotationArrayZ = function () {
        var angle = msb_math_1.degrees2radians(this.rotationZ), cosAngle = Math.cos(angle), sinAngle = Math.sin(angle);
        return [
            cosAngle, -sinAngle, 0.0, 0.0,
            sinAngle, cosAngle, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    };
    DimMatrix.prototype.toScaleArray = function () {
        return [
            this.scaleX, 0.0, 0.0, 0.0,
            0.0, this.scaleY, 0.0, 0.0,
            0.0, 0.0, this.scaleZ, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    };
    DimMatrix.prototype.toTranslationArray = function () {
        return [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            this.translationX, this.translationY, this.translationZ, 1.0
        ];
    };
    return DimMatrix;
}());
exports.DimMatrix = DimMatrix;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 8/6/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(5);
var RasterCircle = (function (_super) {
    __extends(RasterCircle, _super);
    function RasterCircle(radius) {
        if (radius === void 0) { radius = 50.0; }
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    RasterCircle.prototype.doDraw = function (context) {
        context.beginPath();
        context.arc(0, 0, this.radius, 0, 2 * Math.PI, true);
        context.closePath();
        if (this.fillStyle) {
            context.fill();
        }
        if (this.lineWidth > 0) {
            context.stroke();
        }
    };
    RasterCircle.prototype.isHit = function (v) {
        var subX = v.x - this.location.x, subY = v.y - this.location.y;
        return ((Math.pow(subX, 2) + Math.pow(subY, 2)) < Math.pow(this.radius, 2));
    };
    return RasterCircle;
}(shape_1.RasterShape));
exports.RasterCircle = RasterCircle;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 8/27/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = __webpack_require__(12);
var RasterImage = (function (_super) {
    __extends(RasterImage, _super);
    function RasterImage(image) {
        var _this = _super.call(this, image.width, image.height) || this;
        _this.image = image;
        return _this;
    }
    RasterImage.prototype.doDraw = function (context) {
        context.drawImage(this.image, 0, 0, this.width, this.height);
    };
    return RasterImage;
}(rectangle_1.RasterRectangle));
exports.RasterImage = RasterImage;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 12/26/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = __webpack_require__(35);
exports.RasterCircle = circle_1.RasterCircle;
var image_1 = __webpack_require__(36);
exports.RasterImage = image_1.RasterImage;
var rectangle_1 = __webpack_require__(12);
exports.RasterRectangle = rectangle_1.RasterRectangle;
var shape_1 = __webpack_require__(5);
exports.RasterShape = shape_1.RasterShape;
var text_1 = __webpack_require__(38);
exports.RasterText = text_1.RasterText;
var triangle_1 = __webpack_require__(39);
exports.RasterTriangle = triangle_1.RasterTriangle;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 8/6/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(5);
var RasterText = (function (_super) {
    __extends(RasterText, _super);
    function RasterText(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    RasterText.prototype.doDraw = function (context) {
        context.font = this.fontStyle;
        if (this.fillStyle) {
            context.fillText(this.value, 0, 0);
        }
        if (this.lineWidth > 0) {
            context.strokeText(this.value, 0, 0);
        }
    };
    RasterText.prototype.isHit = function (v) {
        return false;
    };
    return RasterText;
}(shape_1.RasterShape));
exports.RasterText = RasterText;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __webpack_require__(5);
var RasterTriangle = (function (_super) {
    __extends(RasterTriangle, _super);
    function RasterTriangle(w, h) {
        if (w === void 0) { w = 50; }
        if (h === void 0) { h = 50; }
        var _this = _super.call(this) || this;
        _this.width = w;
        _this.height = h;
        return _this;
    }
    RasterTriangle.prototype.doDraw = function (context) {
        context.beginPath();
        context.moveTo(-this._hWidth, this._hHeight);
        context.lineTo(0, -this._hHeight);
        context.lineTo(this._hWidth, this._hHeight);
        context.closePath();
        if (this.fillStyle) {
            context.fill();
        }
        if (this.lineWidth > 0) {
            context.stroke();
        }
    };
    RasterTriangle.prototype.isHit = function (v) {
        return false;
    };
    Object.defineProperty(RasterTriangle.prototype, "width", {
        set: function (w) {
            this._hWidth = w * 0.5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RasterTriangle.prototype, "height", {
        set: function (h) {
            this._hHeight = h * 0.5;
        },
        enumerable: true,
        configurable: true
    });
    return RasterTriangle;
}(shape_1.RasterShape));
exports.RasterTriangle = RasterTriangle;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Container = (function () {
    function Container(xMin, xMax, yMin, yMax, zMin, zMax) {
        this.xMin = xMin;
        this.xMax = xMax;
        this.yMin = yMin;
        this.yMax = yMax;
        this.zMin = zMin;
        this.zMax = zMax;
    }
    Container.prototype.isContained = function (point) {
        var isContained = (point.x > this.xMin && point.x < this.xMax && point.y > this.yMin && point.y < this.yMax);
        if (this.hasRangeZ()) {
            isContained = isContained && point.z > this.zMin && point.z < this.zMax;
        }
        return isContained;
    };
    Object.defineProperty(Container.prototype, "width", {
        get: function () {
            return this.xMax - this.xMin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "height", {
        get: function () {
            return this.yMax - this.yMin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "depth", {
        get: function () {
            return this.zMax - this.zMin;
        },
        enumerable: true,
        configurable: true
    });
    Container.prototype.hasRangeZ = function () {
        return (this.zMin !== undefined && this.zMax !== undefined);
    };
    return Container;
}());
exports.Container = Container;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 4/23/17.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Matrix = (function () {
    function Matrix() {
    }
    Matrix.identity = function () {
        return [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    };
    return Matrix;
}());
exports.Matrix = Matrix;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = __webpack_require__(13);
var Vector = (function () {
    function Vector(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector.getRandom = function (c) {
        var x = utility_1.randomRange(c.xMin, c.xMax), y = utility_1.randomRange(c.yMin, c.yMax), z = 0;
        if (c.hasRangeZ()) {
            z = utility_1.randomRange(c.zMin, c.zMax);
        }
        return new Vector(x, y, z);
    };
    Vector.add = function (v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    };
    Vector.subtract = function (v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    };
    Vector.multiply = function (v, n) {
        return new Vector(v.x * n, v.y * n, v.z * n);
    };
    Vector.divide = function (v, n) {
        return new Vector(v.x / n, v.y / n, v.z / n);
    };
    Vector.magnitude = function (v) {
        return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    };
    Vector.cross = function (v1, v2) {
        return new Vector(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
    };
    Vector.dot = function (v1, v2) {
        var sum = (v1.x * v2.x);
        sum = sum + (v1.y * v2.y);
        sum = sum + (v1.z * v2.z);
        return sum;
    };
    Object.defineProperty(Vector.prototype, "magnitude", {
        get: function () {
            return Vector.magnitude(this);
        },
        set: function (m) {
            this.normalize();
            this.multiply(m);
        },
        enumerable: true,
        configurable: true
    });
    Vector.prototype.add = function (v) {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
        this.z = this.z + v.z;
    };
    Vector.prototype.subtract = function (v) {
        this.x = this.x - v.x;
        this.y = this.y - v.y;
        this.z = this.z - v.z;
    };
    Vector.prototype.multiply = function (n) {
        this.x = this.x * n;
        this.y = this.y * n;
        this.z = this.z * n;
    };
    Vector.prototype.divide = function (n) {
        this.x = this.x / n;
        this.y = this.y / n;
        this.z = this.z / n;
    };
    Vector.prototype.normalize = function () {
        var m = this.magnitude;
        if (m > 0) {
            this.divide(m);
        }
    };
    Vector.prototype.negate = function () {
        this.x = -this.x;
        this.y = -this.y;
        this.y = -this.y;
    };
    Vector.prototype.setXY = function (theta, radius) {
        var thetaRadians = utility_1.degrees2radians(theta);
        this.setXYRadians(thetaRadians, radius);
    };
    Vector.prototype.setXYRadians = function (theta, radius) {
        this.x = radius * Math.sin(theta);
        this.y = radius * Math.cos(theta);
    };
    Vector.prototype.getAngleXY = function () {
        return utility_1.radians2degrees(this.getAngleXYRadians());
    };
    Vector.prototype.getAngleXYRadians = function () {
        return Math.atan2(this.y, this.x);
    };
    Vector.prototype.clone = function () {
        return new Vector(this.x, this.y, this.z);
    };
    Vector.prototype.toString = function () {
        var x = this.x, y = this.y, z = this.z;
        return "Vector (" + x + ", " + y + ", " + z + ")";
    };
    Vector.prototype.toArray = function () {
        return [this.x, this.y, this.z];
    };
    return Vector;
}());
exports.Vector = Vector;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by besseym on 8/8/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var msb_math_1 = __webpack_require__(0);
var NatureOscillator = (function () {
    function NatureOscillator() {
        this.location = new msb_math_1.Vector();
        this.angle = new msb_math_1.Vector();
        this.velocity = new msb_math_1.Vector();
        this.amplitude = new msb_math_1.Vector();
    }
    NatureOscillator.prototype.oscillate = function () {
        this.angle.add(this.velocity);
    };
    NatureOscillator.prototype.draw = function (context) {
        var x = Math.sin(this.angle.x) * this.amplitude.x, y = Math.sin(this.angle.y) * this.amplitude.y;
        this.body.location.x = x;
        this.body.location.y = y;
        context.save();
        context.translate(this.location.x, this.location.y);
        this.body.draw(context);
        context.restore();
    };
    return NatureOscillator;
}());
exports.NatureOscillator = NatureOscillator;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 4/23/17.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var particle_1 = __webpack_require__(15);
exports.NatureParticle = particle_1.NatureParticle;
var system_1 = __webpack_require__(45);
exports.NatureParticleSystemConfetti = system_1.NatureParticleSystemConfetti;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 8/20/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var msb_math_1 = __webpack_require__(0);
var particle_1 = __webpack_require__(15);
var NatureParticleSystem = (function () {
    function NatureParticleSystem(location) {
        this.location = location;
        this.particles = [];
    }
    NatureParticleSystem.prototype.applyForce = function (force) {
        var particle;
        for (var _i = 0, _a = this.particles; _i < _a.length; _i++) {
            particle = _a[_i];
            particle.applyForce(force);
        }
    };
    NatureParticleSystem.prototype.applyRepeller = function (repeller) {
        var particle, force;
        for (var _i = 0, _a = this.particles; _i < _a.length; _i++) {
            particle = _a[_i];
            force = repeller.repel(particle);
            particle.applyForce(force);
        }
    };
    NatureParticleSystem.prototype.draw = function (context) {
        var particle;
        for (var i = this.particles.length - 1; i >= 0; i--) {
            particle = this.particles[i];
            if (!particle.isDead()) {
                particle.update();
                particle.draw(context);
            }
            else {
                this.particles.splice(i, 1);
            }
        }
    };
    return NatureParticleSystem;
}());
exports.NatureParticleSystem = NatureParticleSystem;
var NatureParticleSystemConfetti = (function (_super) {
    __extends(NatureParticleSystemConfetti, _super);
    function NatureParticleSystemConfetti() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NatureParticleSystemConfetti.prototype.addParticle = function () {
        var particle, r = Math.random();
        if (r < 0.34) {
            particle = new particle_1.NatureParticleCircle();
        }
        else if (r < 0.67) {
            particle = new particle_1.NatureParticleSquare();
        }
        else {
            particle = new particle_1.NatureParticleTriangle();
        }
        // particle = new ParticleSquare();
        // particle.aVelocity = getRangeRandom(0, 1);
        particle.velocity = new msb_math_1.Vector(msb_math_1.randomRange(-2, 2), msb_math_1.randomRange(-3, -1));
        particle.location = this.location.clone();
        this.particles.push(particle);
    };
    return NatureParticleSystemConfetti;
}(NatureParticleSystem));
exports.NatureParticleSystemConfetti = NatureParticleSystemConfetti;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by besseym on 8/12/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var msb_gl_1 = __webpack_require__(3);
var actor_1 = __webpack_require__(14);
var gravity = 0.4;
var NaturePendulum = (function () {
    function NaturePendulum(anchor, radius) {
        this.anchor = anchor;
        this.radius = radius;
        this.angle = Math.PI / 4;
        this.aVelocity = 0;
        this._aAcceleration = 0;
        this.damping = 0.9995;
        var circle = new msb_gl_1.RasterCircle();
        this.bob = new actor_1.NatureActor(circle);
        this.updateBobLocation();
    }
    NaturePendulum.prototype.update = function () {
        this._aAcceleration = (-1 * gravity / this.radius) * Math.sin(this.angle);
        this.aVelocity = this.aVelocity + this._aAcceleration;
        this.angle = this.angle + this.aVelocity;
        this.aVelocity = this.aVelocity * this.damping;
        this.updateBobLocation();
    };
    NaturePendulum.prototype.draw = function (context) {
        context.save();
        context.strokeStyle = this._strokeStyle;
        context.beginPath();
        context.moveTo(this.anchor.x, this.anchor.y);
        context.lineTo(this.bob.location.x, this.bob.location.y);
        context.stroke();
        context.closePath();
        context.restore();
        this.bob.draw(context);
    };
    NaturePendulum.prototype.updateBobLocation = function () {
        this.bob.location.setXYRadians(this.angle, this.radius);
        this.bob.location.add(this.anchor);
    };
    Object.defineProperty(NaturePendulum.prototype, "strokeStyle", {
        set: function (s) {
            this._strokeStyle = s;
            this.bob.body.strokeStyle = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NaturePendulum.prototype, "fillStyle", {
        set: function (s) {
            this.bob.body.fillStyle = s;
        },
        enumerable: true,
        configurable: true
    });
    return NaturePendulum;
}());
exports.NaturePendulum = NaturePendulum;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 8/27/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var msb_math_1 = __webpack_require__(0);
var msb_gl_1 = __webpack_require__(3);
var NatureRepeller = (function () {
    function NatureRepeller(location) {
        this.location = location;
        this.strength = 500;
        this.body = new msb_gl_1.RasterCircle();
    }
    NatureRepeller.prototype.repel = function (mover) {
        var direction = msb_math_1.Vector.subtract(this.location, mover.location), m = direction.magnitude, f = 0.0;
        m = msb_math_1.constrain(m, 5, 200);
        direction.normalize();
        f = -1 * this.strength / (m * m);
        direction.multiply(f);
        return direction;
    };
    NatureRepeller.prototype.draw = function (context) {
        this.body.location = this.location.clone();
        this.body.draw(context);
    };
    return NatureRepeller;
}());
exports.NatureRepeller = NatureRepeller;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 8/14/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var msb_math_1 = __webpack_require__(0);
var k = 0.02;
var NatureSpring = (function () {
    function NatureSpring(anchor, length) {
        this.anchor = anchor;
        this.length = length;
        this.minLength = 30;
        this.maxLength = 2 * this.length;
    }
    NatureSpring.prototype.connect = function (actor) {
        var force = msb_math_1.Vector.subtract(actor.location, this.anchor.location), displacement = force.magnitude, stretch = displacement - this.length;
        force.normalize();
        force.multiply(-1 * k * stretch);
        actor.applyForce(force);
    };
    NatureSpring.prototype.constrainLength = function (actor) {
        var direction = msb_math_1.Vector.subtract(actor.location, this.anchor.location), displacement = direction.magnitude;
        if (displacement < this.minLength) {
            direction.normalize();
            direction.multiply(this.minLength);
            actor.location = msb_math_1.Vector.add(this.anchor.location, direction);
            actor.velocity.multiply(0);
        }
        else if (displacement > this.maxLength) {
            direction.normalize();
            direction.multiply(this.maxLength);
            actor.location = msb_math_1.Vector.add(this.anchor.location, direction);
            actor.velocity.multiply(0);
        }
    };
    NatureSpring.prototype.draw = function (context, actor) {
        context.save();
        context.strokeStyle = this.strokeStyle;
        context.beginPath();
        context.moveTo(this.anchor.location.x, this.anchor.location.y);
        context.lineTo(actor.location.x, actor.location.y);
        context.stroke();
        context.closePath();
        context.restore();
        this.anchor.draw(context);
    };
    return NatureSpring;
}());
exports.NatureSpring = NatureSpring;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 7/19/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var msb_gl_1 = __webpack_require__(3);
var NatureClockHand = (function () {
    function NatureClockHand() {
        this.lineWidth = 1;
    }
    NatureClockHand.prototype.draw = function (context) {
        var angle = (Math.PI * 2) * this.value - Math.PI / 2;
        context.save();
        context.lineWidth = this.lineWidth;
        context.moveTo(this.startLocation.x, this.startLocation.y);
        context.lineTo(this.startLocation.x + Math.cos(angle) * this.length, this.startLocation.y + Math.sin(angle) * this.length);
        context.stroke();
        context.restore();
    };
    return NatureClockHand;
}());
var NatureClockNumerals = (function () {
    function NatureClockNumerals() {
        this.setFont(25, "Arial");
        this._numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
    NatureClockNumerals.prototype.setFont = function (height, typeface) {
        this._fontHeight = height;
        this._font = height.toString() + "px " + typeface;
    };
    NatureClockNumerals.prototype.draw = function (context) {
        var angle = 0, numeralWidth = 0, nStr = "", x = 0, y = 0;
        for (var _i = 0, _a = this._numerals; _i < _a.length; _i++) {
            var n = _a[_i];
            angle = Math.PI / 6 * (n - 3);
            nStr = n.toString();
            context.save();
            context.font = this._font;
            numeralWidth = context.measureText(nStr).width;
            x = this.center.x + Math.cos(angle) * (this.radius) - numeralWidth / 2;
            y = this.center.x + Math.sin(angle) * (this.radius) + this._fontHeight / 3;
            context.fillText(nStr, x, y);
            context.restore();
        }
    };
    return NatureClockNumerals;
}());
var NatureClock = (function () {
    function NatureClock(v, r) {
        var color = new msb_gl_1.ColorRGB(255, 255, 255, 1);
        this._innerCircle = new msb_gl_1.RasterCircle();
        this._outerCircle = new msb_gl_1.RasterCircle();
        this._outerCircle.lineWidth = 5;
        this._outerCircle.fillStyle = color.toString();
        this._hourHand = new NatureClockHand();
        this._minuteHand = new NatureClockHand();
        this._secondHand = new NatureClockHand();
        this._numerals = new NatureClockNumerals();
        this.center = v;
        this.radius = r;
    }
    Object.defineProperty(NatureClock.prototype, "center", {
        set: function (c) {
            this._center = c;
            this._innerCircle.location = c;
            this._outerCircle.location = c;
            this._hourHand.startLocation = c;
            this._minuteHand.startLocation = c;
            this._secondHand.startLocation = c;
            this._numerals.center = c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NatureClock.prototype, "radius", {
        set: function (r) {
            this._radius = r;
            this._outerCircle.radius = r;
            this._innerCircle.radius = r * 0.05;
            this._hourHand.length = this._radius * 0.7;
            this._hourHand.lineWidth = 10;
            this._minuteHand.length = this._radius * 0.8;
            this._minuteHand.lineWidth = 5;
            this._secondHand.length = this._radius * 0.9;
            this._numerals.radius = this._radius * 0.85;
        },
        enumerable: true,
        configurable: true
    });
    NatureClock.prototype.draw = function (context) {
        var hours = this.date.getHours(), minutes = this.date.getMinutes(), seconds = this.date.getSeconds();
        this._outerCircle.draw(context);
        this._innerCircle.draw(context);
        this._hourHand.value = (hours / 12);
        this._hourHand.draw(context);
        this._minuteHand.value = (minutes / 60);
        this._minuteHand.draw(context);
        this._secondHand.value = (seconds / 60);
        this._secondHand.draw(context);
        this._numerals.draw(context);
    };
    return NatureClock;
}());
exports.NatureClock = NatureClock;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var clock_1 = __webpack_require__(49);
exports.NatureClock = clock_1.NatureClock;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by michaelbessey on 7/18/16.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var msb_math_1 = __webpack_require__(0);
var mover_1 = __webpack_require__(7);
var NatureWalker = (function (_super) {
    __extends(NatureWalker, _super);
    function NatureWalker(_body) {
        var _this = _super.call(this) || this;
        _this._body = _body;
        _this.normalGaussianGenerator = msb_math_1.normalGaussianGenerator(0, 15);
        return _this;
    }
    // set location(v: Vector) {
    //
    //     this._body.location = v;
    //     this.normalGaussianGenerator = normalGaussianGenerator(v.x, 55);
    // }
    //
    // get location() : Vector {
    //     return this._body.location;
    // }
    NatureWalker.prototype.stepX = function () {
        var r = Math.random();
        if (r <= 0.4) {
            this.location.x = this.location.x + 1;
        }
        else if (r <= 0.9) {
            this.location.x = this.location.x - 1;
        }
        // let step = Math.floor((Math.random() * 3) - 1);
    };
    NatureWalker.prototype.stepY = function () {
        var r = Math.random();
        if (r <= 0.4) {
            this.location.y = this.location.y + 1;
        }
        else if (r <= 0.9) {
            this.location.y = this.location.y - 1;
        }
        // let step = Math.floor((Math.random() * 3) - 1);
    };
    NatureWalker.prototype.walk = function () {
        this.stepX();
        this.stepY();
    };
    NatureWalker.prototype.place = function () {
        this.location.x = this.normalGaussianGenerator();
    };
    NatureWalker.prototype.draw = function (context) {
        this._body.location = this.location.clone();
        this._body.draw(context);
    };
    return NatureWalker;
}(mover_1.NatureMover));
exports.NatureWalker = NatureWalker;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by besseym on 8/8/16.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var msb_math_1 = __webpack_require__(0);
var NatureWave = (function () {
    function NatureWave(amplitude, period) {
        if (amplitude === void 0) { amplitude = 100.0; }
        if (period === void 0) { period = 100; }
        this.amplitude = amplitude;
        this.period = period;
        this.location = new msb_math_1.Vector();
        this.lineWidth = 30;
        this.aVelocity = 0.1;
        this.increment = this.period * 0.5;
        this._startAngle = 0.0;
    }
    NatureWave.prototype.draw = function (context) {
        context.save();
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.strokeStyle;
        context.translate(this.location.x, this.location.y);
        context.beginPath();
        var angle = this._startAngle;
        this._startAngle += this.aVelocity;
        var y = this.amplitude * Math.sin(angle);
        context.moveTo(0, y);
        angle += this.aVelocity;
        for (var x = this.increment; x <= this.period; x += this.increment) {
            y = this.amplitude * Math.sin(angle);
            context.lineTo(x, y);
            angle += this.aVelocity;
        }
        context.stroke();
        context.closePath();
        context.restore();
    };
    return NatureWave;
}());
exports.NatureWave = NatureWave;


/***/ })
/******/ ]);
});