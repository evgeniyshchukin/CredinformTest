/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_module_js__ = __webpack_require__(3);



console.log(123123);
Object(__WEBPACK_IMPORTED_MODULE_1__Components_module_js__["a" /* moduleJS */])();

//import styles from './home.css';
//import React from 'react';
//import { render } from 'react-dom';
//import Component1 from './Components/component.js'

//render(
//	<div>
//		Hello React!
//		<Component1 />
//	</div>,
//	document.getElementById(`main`)
//);

////const buttons = Array.from(document.getElementsByTagName(`button`));
////buttons.forEach((button) => {
////	button.addEventListener(`click`, (event) => {
////		alert(`Ololo`);
////	});
////});

//const button = document.getElementsByTagName(`button`)[1];

//const alertByClick = () => {
//	alert(`Ololo`);
//	button.removeEventListener(`click`, alertByClick);
//};

//const bbb = () => {
//	const ccc = () => {
//		const eee = () => {
//			const fff = () => {
//			}
//		}
//	}
//}


//const bbb = 123123;

//const search = document.querySelectorAll(`.button`);
//console.log(search);
//const search2 = document.getElementById(`button`);
//console.log(search2);

//button.addEventListener(`click`, alertByClick);
//console.log(button);

//const Nastya = `Nastya`;
//const name = `${Nastya} молодец!`;

//const Name = (name, afdasdfsa) => {
//	console.log(name, afdasdfsa);
//};

//Name(`Vasya`, `umer`);

//console.log(`Hey.`);
//console.log(`Say my name!`);



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/*@import \"../../Common/colors.css\";*/\r\n/*@import-normalize;*/\r\n\r\n.aaa {\r\n    background-color: blue;\r\n}\r\n\r\n/*.saf { display: flex; color: $color-gray--darkest; }\r\n\r\n.aaa { color: $color-gray--darkest; & .bbb\r\n{ border-bottom: 1px; & .cc\r\n{ width: 100rem; width: 100px; width: calc(2px + 4px); transition: 500s; }\r\n}\r\n}\r\n\r\n.xxx,\r\n.yyy .zzz { width: calc(2px + 4px); background-image: url(\"http://www.asdf.com\"); -webkit-transition: background-color 0.2s; -o-transition: background-color 0.2s; transition: background-color 0.2s !important; }\r\n\r\n.eee { display: flex; color: $color-gray--darkest; content: \"\"; clip: rect(); width: 20px; }\r\n\r\n.ccc {\r\n    background-color: blue !important;\r\n}\r\n\r\nh1 {\r\n\r\n}*/\r\n\r\n\r\n\r\n/* Это комментаррий */\r\n\r\n/* ОЛОЛО */", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const moduleJS = () => {
	console.log(`Wow`);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = moduleJS;


/***/ })
/******/ ]);