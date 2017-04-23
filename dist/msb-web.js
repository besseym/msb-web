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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(3);
exports.Container = container_1.Container;
var matrix_1 = __webpack_require__(4);
exports.Matrix = matrix_1.Matrix;
var utility_1 = __webpack_require__(0);
exports.degrees2radians = utility_1.degrees2radians;
exports.createRandomRangeGenerator = utility_1.createRandomRangeGenerator;
exports.createIntegerRandomRangeGenerator = utility_1.createIntegerRandomRangeGenerator;
exports.integerRandomRange = utility_1.integerRandomRange;
exports.radians2degrees = utility_1.radians2degrees;
exports.randomRange = utility_1.randomRange;
var vector_1 = __webpack_require__(5);
exports.Vector = vector_1.Vector;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mm28969 on 4/23/17.
 */

Object.defineProperty(exports, "__esModule", { value: true });
//msb-math
var index_1 = __webpack_require__(1);
exports.Container = index_1.Container;
exports.degrees2radians = index_1.degrees2radians;
exports.createRandomRangeGenerator = index_1.createRandomRangeGenerator;
exports.createIntegerRandomRangeGenerator = index_1.createIntegerRandomRangeGenerator;
exports.integerRandomRange = index_1.integerRandomRange;
exports.radians2degrees = index_1.radians2degrees;
exports.randomRange = index_1.randomRange;
exports.Matrix = index_1.Matrix;
exports.Vector = index_1.Vector;


/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = __webpack_require__(0);
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


/***/ })
/******/ ]);
});