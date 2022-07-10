/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var sunSelectors;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/selectors.ts":
/*!*****************************!*\
  !*** ./src/ts/selectors.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nvar _a;\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n/**\r\n * CSS-selector helpers\r\n * @public\r\n */\n\nclass sunSelectors {\n  /**\r\n   * Adds the library prefix to the beginning of the provided string\r\n   * @param base - the string to be prefixed\r\n   * @returns - the provided string prefixed with the library name\r\n   */\n  static prefix(base) {\n    base = base.toLowerCase();\n    return base.startsWith(this.pre) ? base : \"\".concat(this.pre).concat(base);\n  }\n  /**\r\n   * Adds two dashes to the beginning of the provided string\r\n   * @param base - the string to be prefixed\r\n   * @returns - the provided string prefixed with two dashes\r\n   */\n\n\n  static cssPrefix(base) {\n    return \"--\".concat(this.prefix(base.replace(/^-+/, '')));\n  }\n  /**\r\n   * Turns the provided string into a CSS variable call\r\n   * @param base - the name of the CSS variable to call\r\n   * @returns - the CSS variable call for the provided string\r\n   */\n\n\n  static cssVar(base) {\n    return \"var(\".concat(this.cssPrefix(base), \")\");\n  }\n  /**\r\n   * Negates the provided CSS selector\r\n   * @param base - the CSS selector to negate\r\n   * @returns - the negated CSS selector\r\n   */\n\n\n  static neg(base) {\n    return \":not(\".concat(base, \")\");\n  }\n  /**\r\n   * Generates a class CSS selector\r\n   * @param base - the name of the class to generate\r\n   * @returns - the generated CSS selector\r\n   */\n\n\n  static class(base) {\n    return \".\".concat(this.prefix(base));\n  }\n  /**\r\n   * Generates an id CSS selector\r\n   * @param base - the name of the id to generate\r\n   * @returns - the generated CSS selector\r\n   */\n\n\n  static id(base) {\n    return \"#\".concat(this.prefix(base));\n  }\n  /**\r\n   * Generates an aria-controls CSS selector\r\n   * @param id - the id of the controlled element\r\n   * @returns - the generated CSS selector\r\n   */\n\n\n  static controls(id) {\n    return id ? \"[aria-controls=\\\"\".concat(this.prefix(id), \"\\\"]\") : this.hasControls;\n  }\n  /**\r\n   * Generates an aria-expanded CSS selector\r\n   * @param bool - whether the element is expanded or not\r\n   * @returns - the generated CSS selector\r\n   */\n\n\n  static expanded(bool) {\n    return typeof bool === 'boolean' ? \"[aria-expanded=\\\"\".concat(bool, \"\\\"]\") : this.hasExpanded;\n  }\n\n}\n\nexports[\"default\"] = sunSelectors;\n_a = sunSelectors;\n/**\r\n * The library name that will be added as a prefix\r\n */\n\nsunSelectors.lib = 'sun';\n/**\r\n * The prefix built from the library name\r\n */\n\nsunSelectors.pre = \"\".concat(_a.lib, \"-\");\n/**\r\n * CSS-selector for disabled elements\r\n */\n\nsunSelectors.disabled = '[disabled]';\n/**\r\n * CSS-selector for elements with an aria-controls attribute\r\n */\n\nsunSelectors.hasControls = '[aria-controls]';\n/**\r\n * CSS-selector for elements with an aria-expanded attribute\r\n */\n\nsunSelectors.hasExpanded = '[aria-expanded]';\n/**\r\n * CSS-selector for elements with an href attribute\r\n */\n\nsunSelectors.hasLink = '[href]';\n/**\r\n * CSS-selector for elements with a routerLink attribute\r\n */\n\nsunSelectors.hasRouterLink = '[routerLink]';\n/**\r\n * CSS-selector for elements with an id attribute\r\n */\n\nsunSelectors.hasId = '[id]';\n/**\r\n * CSS-selector for elements that aren't tabbable (i.e. tabindex is negative)\r\n */\n\nsunSelectors.notTabbable = '[tabindex^=\"-\"]';\n/**\r\n * CSS-selector for elements that are tabbable (i.e. tabindex isn't negative)\r\n */\n\nsunSelectors.tabbable = \"[tabindex]\".concat(_a.neg(_a.notTabbable));\n/**\r\n * CSS-selector for elements that can receive focus\r\n */\n\nsunSelectors.focusable = \"input\".concat(_a.neg(_a.disabled)).concat(_a.neg(_a.notTabbable), \",\\n                                select\").concat(_a.neg(_a.disabled)).concat(_a.neg(_a.notTabbable), \",\\n                                textarea\").concat(_a.neg(_a.disabled)).concat(_a.neg(_a.notTabbable), \",\\n                                button\").concat(_a.neg(_a.disabled)).concat(_a.neg(_a.notTabbable), \",\\n                                object\").concat(_a.neg(_a.disabled)).concat(_a.neg(_a.notTabbable), \",\\n                                a\").concat(_a.hasLink, \", a\").concat(_a.hasRouterLink, \",\\n                                area\").concat(_a.hasLink, \",\\n                                \").concat(_a.tabbable).replace(/\\s/g, '');\n\n//# sourceURL=webpack://sun/./src/ts/selectors.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/selectors.ts"](0, __webpack_exports__);
/******/ 	sunSelectors = __webpack_exports__["default"];
/******/ 	
/******/ })()
;