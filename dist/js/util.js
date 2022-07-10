/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var sunUtil;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nvar _a;\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n/**\r\n * Settings management\r\n * @public\r\n */\n\nclass sunSettings {\n  /**\r\n   * Update the provided settings variables\r\n   * @param settings - Object of settings variables to update\r\n   */\n  static set(settings) {\n    let newDelay = false;\n\n    if (typeof settings.delayBase === 'number') {\n      this.delayBase = settings.delayBase;\n      newDelay = true;\n    }\n\n    if (typeof settings.delayStep === 'number') {\n      this.delayStep = settings.delayStep;\n      newDelay = true;\n    }\n\n    if (newDelay) {\n      this.setDelay();\n    }\n\n    if (settings.delay && Object.keys(settings.delay).length) {\n      if (Object.values(settings.delay).reduce((prev, next) => prev && typeof next === 'number', true)) {\n        this.delay = Object.assign(Object.assign({}, this.delay), settings.delay);\n      }\n    }\n  }\n  /**\r\n   * Updates the delay variables based on `this.delayBase` and `this.delayStep`\r\n   */\n\n\n  static setDelay() {\n    this.delay = {\n      instant: this.delayBase + this.delayStep * 0,\n      fast: this.delayBase + this.delayStep * 1,\n      medFast: this.delayBase + this.delayStep * 2,\n      default: this.delayBase + this.delayStep * 3,\n      medSlow: this.delayBase + this.delayStep * 4,\n      slow: this.delayBase + this.delayStep * 5\n    };\n  }\n\n}\n\nexports[\"default\"] = sunSettings;\n_a = sunSettings;\n/**\r\n * Value added to all delay variables\r\n */\n\nsunSettings.delayBase = 0;\n/**\r\n * Value multiplied by delay variable index\r\n */\n\nsunSettings.delayStep = 100;\n/**\r\n * Delay variables\r\n */\n\nsunSettings.delay = {\n  instant: _a.delayBase + _a.delayStep * 0,\n  fast: _a.delayBase + _a.delayStep * 1,\n  medFast: _a.delayBase + _a.delayStep * 2,\n  default: _a.delayBase + _a.delayStep * 3,\n  medSlow: _a.delayBase + _a.delayStep * 4,\n  slow: _a.delayBase + _a.delayStep * 5\n};\n\n//# sourceURL=webpack://sun/./src/ts/settings.ts?");

/***/ }),

/***/ "./src/ts/util.ts":
/*!************************!*\
  !*** ./src/ts/util.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n/**\r\n * Imports\r\n */\n\nconst settings_1 = __importDefault(__webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\"));\n/**\r\n * Utility function\r\n * @public\r\n */\n\n\nclass n4vUtil {\n  /**\r\n   * Ensures that a function `func` is called at most every `wait` milliseconds with optional leading and trailing calls\r\n   * @param func - the function to throttle\r\n   * @param wait - the amount of time between function calls\r\n   * @param options - leading and trailing options: default = \\{ leading: true, trailing, true \\}\r\n   * @returns - the throttled function\r\n   */\n  static throttle(func) {\n    let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : settings_1.default.delay.default;\n    let options = arguments.length > 2 ? arguments[2] : undefined;\n\n    let context,\n        args,\n        result,\n        timeout,\n        previous = 0,\n        later = function () {\n      previous = (options === null || options === void 0 ? void 0 : options.leading) === false ? 0 : new Date().getTime();\n      timeout = 0;\n      result = func.apply(context, args);\n\n      if (!timeout) {\n        context = args = null;\n      }\n    },\n        throttled = function () {\n      let now = new Date().getTime();\n\n      if (!previous && (options === null || options === void 0 ? void 0 : options.leading) === false) {\n        previous = now;\n      }\n\n      let remaining = wait - now + previous;\n      context = this;\n      args = arguments;\n\n      if (remaining <= 0 || remaining > wait) {\n        if (timeout) {\n          clearTimeout(timeout);\n          timeout = 0;\n        }\n\n        previous = now;\n        result = func.apply(context, args);\n\n        if (!timeout) {\n          context = args = null;\n        }\n      } else if (!timeout && (options === null || options === void 0 ? void 0 : options.trailing) !== false) {\n        timeout = window.setTimeout(later, remaining);\n      }\n\n      return result;\n    };\n\n    return throttled;\n  }\n  /**\r\n   * Sets the element's height to its `innerHeight`, then to `auto` after a delay\r\n   * @param el - the element whose height will be set\r\n   */\n\n\n  static show(el) {\n    if (el) {\n      el.style.height = \"\".concat(el.scrollHeight, \"px\");\n      setTimeout(() => {\n        el.style.height = 'auto';\n      }, settings_1.default.delay.default);\n    }\n  }\n  /**\r\n   * Sets the element's height to 0\r\n   * @param el - the element whose height will be set\r\n   */\n\n\n  static hide(el) {\n    if (el) {\n      let height = el.scrollHeight,\n          transition = el.style.transition;\n      el.style.transition = '';\n      requestAnimationFrame(function () {\n        el.style.height = \"\".concat(height, \"px\");\n        el.style.transition = transition;\n        requestAnimationFrame(function () {\n          el.style.height = '0px';\n        });\n      });\n    }\n  }\n\n}\n\nexports[\"default\"] = n4vUtil;\n\n//# sourceURL=webpack://sun/./src/ts/util.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/util.ts");
/******/ 	sunUtil = __webpack_exports__["default"];
/******/ 	
/******/ })()
;