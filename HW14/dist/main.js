/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".box{\\r\\n    width: 250px;\\r\\n    height: 250px;\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.elem{\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n}\\r\\n\\r\\n.result {\\r\\n    width: 250px;\\r\\n    height: 250px;\\r\\n}\\r\\n\\r\\n.letters {\\r\\n    position: relative;\\r\\n    max-width: min-content;\\r\\n    display: flex;\\r\\n    align-items: stretch;\\r\\n    margin: 20% auto;\\r\\n    padding: 5px;\\r\\n}\\r\\n\\r\\n.letter {\\r\\n    margin: 10px 10px;\\r\\n    width: 100px;\\r\\n    height: 100px;\\r\\n    text-align: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.txt {\\r\\n    text-align: center;\\r\\n    justify-self: center;\\r\\n    margin: 30px;\\r\\n    font-size: 32px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    color: #D2EDE8;\\r\\n}\\r\\n\\r\\n.active {\\r\\n    border: 5px solid #6DEDD3;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cursor_webpack/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://cursor_webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://cursor_webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://cursor_webpack/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://cursor_webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://cursor_webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://cursor_webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://cursor_webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://cursor_webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://cursor_webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Students\": () => (/* binding */ Students),\n/* harmony export */   \"calcMaxValue\": () => (/* binding */ calcMaxValue),\n/* harmony export */   \"createIdGenerator\": () => (/* binding */ createIdGenerator),\n/* harmony export */   \"division\": () => (/* binding */ division),\n/* harmony export */   \"generateBlocksInterval\": () => (/* binding */ generateBlocksInterval),\n/* harmony export */   \"getMaxDigit\": () => (/* binding */ getMaxDigit),\n/* harmony export */   \"getModa\": () => (/* binding */ getModa),\n/* harmony export */   \"getMyTaxes\": () => (/* binding */ getMyTaxes),\n/* harmony export */   \"getPlanets\": () => (/* binding */ getPlanets),\n/* harmony export */   \"getRandomChinese\": () => (/* binding */ getRandomChinese),\n/* harmony export */   \"getSubjects\": () => (/* binding */ getSubjects),\n/* harmony export */   \"summaryNum\": () => (/* binding */ summaryNum)\n/* harmony export */ });\n\r\n\r\n// HW 1\r\n\r\nfunction calcMaxValue () {\r\n    const tomatos = 15.678\r\n    const potatos = 123.965\r\n    const cabbage = 90.2345\r\n    const productsMaxValue = Math.max(tomatos, potatos, cabbage)\r\n    return productsMaxValue\r\n}\r\n\r\n// HW 2 \r\n\r\nfunction summaryNum () {\r\n    let n\r\n    let m\r\n    do {\r\n        n = +prompt(\"Введіть число від якого ми будемо складати\", 1);\r\n        if (n % 1 !== 0)  alert(\"Введіть ціле число\");\r\n    }while (n % 1 !== 0);\r\n        \r\n    \r\n    do {\r\n         m = +prompt(\"Введіть число до якого ми будемо складати\", 2);\r\n        if (m % 1 !== 0)  alert(\"Введіть ціле число\");\r\n    }while (m % 1 !== 0);\r\n        \r\n    const skipPairs = confirm(\"Пропускать парные числа?\");\r\n    \r\n    let summary = 0;\r\n    if (m > n) {\r\n    for (let i = n; i <= m; i++) {\r\n        if (skipPairs && i % 2 == 0) {\r\n            continue;\r\n        }\r\n        summary += i;\r\n    }\r\n    } else {\r\n        for (let i = n; i >= m; i--) {\r\n            if (skipPairs && i % 2 == 0) {\r\n                continue;\r\n            }\r\n            summary += i;\r\n        }\r\n    }\r\n    \r\n    console.log(`Сумма чисел між ${n} і ${m} складає ${summary}`)\r\n}\r\n\r\n// HW 3\r\n\r\nfunction getMaxDigit(number) {\r\n    const numberSplit = number.toString().split('')\r\n\r\n    let maxValue = 0\r\n\r\n    numberSplit.forEach(function(e) {\r\n        if (e > maxValue) {\r\n            maxValue = e\r\n        }\r\n    })\r\n    return +maxValue\r\n}\r\n\r\n// HW 4\r\n\r\nfunction division (students, boys, girls) {\r\n    students.forEach(function(e) {\r\n        if (e[e.length - 1] === \"а\") {\r\n            girls.push(e)\r\n       } else {  boys.push(e)}\r\n    }\r\n    )\r\n    }\r\n\r\n// HW 5 \r\nfunction getModa (...numbers) {\r\n    const distinctNumbers = new Set (numbers.filter(item => Number.isInteger(item)))\r\n    let max = 0;\r\n    const result = [];\r\n    distinctNumbers.forEach(num => {\r\n        const count = numbers.filter(number => number === num).length\r\n        if (max < count) max = count\r\n        result.push({num, count})\r\n    });\r\n    return result.filter((item) => item.count == max).map(i => i.num).join()\r\n    }\r\n\r\n// HW 6 \r\nfunction getSubjects(student) {\r\n    let arrKeys = Object.keys(student.subjects)\r\n    let arrKeysUpp = []\r\n    let arrFinalEdit = []\r\n    arrKeys.forEach(key => {arrKeysUpp.push(key[0].toUpperCase() + key.slice(1).toLowerCase())})\r\n    for (let key of arrKeysUpp) {\r\n        arrFinalEdit.push(key.replace('_', ' '))\r\n    }\r\n    return arrFinalEdit\r\n  }\r\n\r\n// HW 7\r\n\r\nfunction getMyTaxes(salary) {\r\n    return  salary * this.tax\r\n}\r\n\r\n// HW 8 \r\n\r\nclass Students {\r\n    constructor(university, course, fullName, marks) {\r\n        this.university = university\r\n        this.course = course\r\n        this.fullName = fullName\r\n        this.marks = marks\r\n        this.dismiss = false\r\n    }\r\n\r\n    get getMarks() {\r\n        return this.dismiss ? null : this.marks\r\n    }\r\n\r\n    set setMarks(number) {\r\n        if (this.dismiss) {\r\n            return null            \r\n        } else {\r\n            this.marks.push(number)\r\n        }\r\n    }\r\n\r\n    getAverageMark() {\r\n       if (this.dismiss) {\r\n        return null            \r\n    } else {return this.marks.reduce((sum, curr) => { \r\n            return sum + curr / this.marks.length\r\n        }, 0)}\r\n    }\r\n    \r\n    getInfo() {\r\n        return `${this.course} ${this.university} ${this.fullName}`\r\n    }\r\n\r\n    dismissed() {\r\n        this.dismiss = true\r\n    }\r\n\r\n    recover() {\r\n        this.dismiss = false\r\n    }\r\n}\r\n\r\n// HW 9 \r\n\r\nfunction generateBlocksInterval () {\r\n    function getRandomInt() {\r\n        return Math.floor(Math.random() * 256);\r\n      }\r\n    const block = document.createElement(\"div\");\r\n    block.className = \"box\";\r\n    document.body.append(block);\r\n\r\n    for (let el = 0; el < 25; el++) {\r\n        const elem = document.createElement(\"div\");\r\n        elem.className = \"elem\";\r\n        block.append(elem);\r\n\r\n        setInterval(() => elem.style.background = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`, 1000);\r\n    }\r\n}\r\n\r\n// HW 10\r\nasync function getRandomChinese(length) {\r\n    let result = ''\r\n  \r\n    while (length != 0) {\r\n        result += await new Promise((resolve, rej) => {\r\n            setTimeout(() => {\r\n                const sign = Date.now().toString().slice(-5)\r\n                let char = String.fromCharCode(sign)\r\n                if (char) {resolve(char)} else {rej('Error with data')}\r\n            }, 50)\r\n        })\r\n        length--\r\n    }\r\n    return result\r\n  }\r\n\r\n  // HW 11\r\n\r\n  async function getPlanets () {\r\n    await fetch(\"https://swapi.dev/api/planets/?page=1\")\r\n    .then(\r\n      (response) => response.json())\r\n    .then(\r\n      (res) => {\r\n        let plans = []\r\n        let nextPage = res.next\r\n        let previousPage = res.previous\r\n        res.results.forEach(el => plans.push(el.name))\r\n        document.body.insertAdjacentHTML( \r\n          \"beforeend\",\r\n          `<div>\r\n          <p>${plans}</p>\r\n          </div>`\r\n        )\r\n      } )\r\n  }\r\n  \r\n  // HW 12\r\n\r\n  function *createIdGenerator() {\r\n    for (let i = 1; i > 0; i++) {\r\n        yield i\r\n    }\r\n}\r\n  \n\n//# sourceURL=webpack://cursor_webpack/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\r\n\r\n\r\n\r\n// HW 1 \r\nconsole.log((0,_functions__WEBPACK_IMPORTED_MODULE_0__.calcMaxValue)());\r\n// HW 2\r\n(0,_functions__WEBPACK_IMPORTED_MODULE_0__.summaryNum)()\r\n\r\n// HW 3\r\nconsole.log((0,_functions__WEBPACK_IMPORTED_MODULE_0__.getMaxDigit)(+prompt(\"Введіть число для 1 функції\")))\r\n\r\n// HW 4 \r\n\r\nconst students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"]\r\nconst arrBoys = []\r\nconst arrGirls = []\r\n;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.division)(students, arrBoys, arrGirls)\r\nconsole.log(arrBoys)\r\nconsole.log(arrGirls)\r\n\r\n// HW 5\r\n\r\nconsole.log((0,_functions__WEBPACK_IMPORTED_MODULE_0__.getModa)(1,3,4,5,5,6))\r\n\r\n// HW 6\r\n\r\nconst arrStudents = [{\r\n    name: \"Tanya\",\r\n    course: 3,\r\n    subjects: {\r\n      math: [4, 4, 3, 4],\r\n      algorithms: [3, 3, 3, 4, 4, 4],\r\n      data_science: [5, 5, 3, 4]\r\n    }\r\n  }, {\r\n    name: \"Victor\",\r\n    course: 4,\r\n    subjects: {\r\n      physics: [5, 5, 5, 3],\r\n      economics: [2, 3, 3, 3, 3, 5],\r\n      geometry: [5, 5, 2, 3, 5]\r\n    }\r\n  }, {\r\n    name: \"Anton\",\r\n    course: 2,\r\n    subjects: {\r\n      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\r\n      english: [5, 3],\r\n      cosmology: [5, 5, 5, 5]\r\n    }\r\n  }];\r\n\r\nconsole.log((0,_functions__WEBPACK_IMPORTED_MODULE_0__.getSubjects)(arrStudents[0]))\r\n\r\n// HW 7\r\nconst ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 }\r\n\r\nconsole.log(_functions__WEBPACK_IMPORTED_MODULE_0__.getMyTaxes.call(ukraine, 3000))\r\n\r\n// HW 8 \r\n\r\nconst ostap = new _functions__WEBPACK_IMPORTED_MODULE_0__.Students('Вищої Школи Психотерапії м.Одеса', 'Студент 1го курсу', 'Остап Бендер', [5, 4, 4, 5])\r\n\r\nconsole.log(ostap)\r\n\r\n// HW 9\r\n\r\n;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.generateBlocksInterval)()\r\n\r\n// Hw 10 \r\n\r\n;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomChinese)(4).then((resolve) => console.log(resolve)).catch(err => {console.log(err);})\r\n\r\n// HW 11 \r\n\r\n;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.getPlanets) ()\r\n\r\n// HW 12\r\n\r\nconst idGenerator = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createIdGenerator)()\r\n\r\nconsole.log(idGenerator.next().value);\r\nconsole.log(idGenerator.next().value);\r\nconsole.log(idGenerator.next().value);\r\nconsole.log(idGenerator.next().value);\n\n//# sourceURL=webpack://cursor_webpack/./src/index.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;