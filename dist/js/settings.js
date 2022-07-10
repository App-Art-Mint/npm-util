/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var sunSettings;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nvar _a;\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n/**\r\n * Settings management\r\n * @public\r\n */\n\nclass sunSettings {\n  /**\r\n   * Update the provided settings variables\r\n   * @param settings - Object of settings variables to update\r\n   */\n  static set(settings) {\n    let newDelay = false;\n\n    if (typeof settings.delayBase === 'number') {\n      this.delayBase = settings.delayBase;\n      newDelay = true;\n    }\n\n    if (typeof settings.delayStep === 'number') {\n      this.delayStep = settings.delayStep;\n      newDelay = true;\n    }\n\n    if (newDelay) {\n      this.setDelay();\n    }\n\n    if (settings.delay && Object.keys(settings.delay).length) {\n      if (Object.values(settings.delay).reduce((prev, next) => prev && typeof next === 'number', true)) {\n        this.delay = Object.assign(Object.assign({}, this.delay), settings.delay);\n      }\n    }\n  }\n  /**\r\n   * Updates the delay variables based on `this.delayBase` and `this.delayStep`\r\n   */\n\n\n  static setDelay() {\n    this.delay = {\n      instant: this.delayBase + this.delayStep * 0,\n      fast: this.delayBase + this.delayStep * 1,\n      medFast: this.delayBase + this.delayStep * 2,\n      default: this.delayBase + this.delayStep * 3,\n      medSlow: this.delayBase + this.delayStep * 4,\n      slow: this.delayBase + this.delayStep * 5\n    };\n  }\n\n}\n\nexports[\"default\"] = sunSettings;\n_a = sunSettings;\n/**\r\n * Value added to all delay variables\r\n */\n\nsunSettings.delayBase = 0;\n/**\r\n * Value multiplied by delay variable index\r\n */\n\nsunSettings.delayStep = 100;\n/**\r\n * Delay variables\r\n */\n\nsunSettings.delay = {\n  instant: _a.delayBase + _a.delayStep * 0,\n  fast: _a.delayBase + _a.delayStep * 1,\n  medFast: _a.delayBase + _a.delayStep * 2,\n  default: _a.delayBase + _a.delayStep * 3,\n  medSlow: _a.delayBase + _a.delayStep * 4,\n  slow: _a.delayBase + _a.delayStep * 5\n};\n\n//# sourceURL=webpack://sun/./src/ts/settings.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/settings.ts"](0, __webpack_exports__);
/******/ 	sunSettings = __webpack_exports__["default"];
/******/ 	
/******/ })()
;