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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/fonts/Jost-VariableFont_wght.ttf */ \"./src/fonts/Jost-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/styles/assets/blue-wall-bg.jpg */ \"./src/styles/assets/blue-wall-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: 'Lato';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\nbody{\r\n    min-height: 760px;\r\n    text-align: center;\r\n    margin:0;\r\n    background-color: black;\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100vw;\r\n    height: 139vh;\r\n    font-family: 'Lato', sans-serif; \r\n    background-color: #161d29;\r\n}\r\n\r\n#lowerContactDiv{\r\n    height: 40vh;\r\n    width: 100vw;\r\n    background-color:#161d29;\r\n    display:flex;\r\n    flex-direction: row;\r\n\r\n}\r\n#teamDetailsDiv{\r\n    height: 37vh;\r\n    width: 50vw;\r\n    background-color: #161d29;\r\n    display:flex;\r\n    flex-direction: column;\r\n}\r\n#teamDiv{\r\n    height: 23vh;\r\n    width: 50vw;\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n}\r\n#teamTitle{\r\n    font-size: 2rem;\r\n    color:white;\r\n    font-weight: bold;\r\n    margin-top: 20px;\r\n    margin-left: 40px;\r\n    cursor:default;\r\n}\r\n#contactTitle{\r\n    font-size: 2rem;\r\n    color:white;\r\n    font-weight: bold;\r\n    margin-left: 40px;\r\n    cursor:default;\r\n}\r\n#contactDiv{\r\n    height: 14vh;\r\n    width: 50vw;\r\n    background-color: #161d29;\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n}\r\n#manager, #waiter, #cook, #contactEmail, #contactNumber{\r\n    font-size: 1rem;\r\n    color:white;\r\n    margin: 5px;\r\n    margin-left: 40px;\r\n    cursor:default;\r\n}\r\n\r\n#contactEmail{\r\n    cursor:pointer;\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.firstAward{\r\n    height: 20vh;\r\n    margin-right: 50px;\r\n}\r\n\r\n#awardsDiv{\r\n    width: 50vw;\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#copyrightDiv{\r\n    height: 3vh;\r\n    width: 50vw;\r\n    background-color: #161d29;\r\n    display:flex;\r\n    justify-content: flex-start;\r\n}\r\n#copyright{\r\n    margin-left: 20px;\r\n    color: white;\r\n    cursor: default;\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n#contactAndTeamDetails{\r\n    height: 40vh;\r\n    width: 50vw;\r\n    background-color: #161d29;\r\n}\r\n\r\n#darkGreenDiv{\r\n    width: 100vw;\r\n    height: 80px;\r\n    background-color: #005B41;\r\n    \r\n}\r\n#menuPopUp{\r\n    margin-top:0;\r\n    width: 100vw;\r\n    height: 80px;\r\n    display:flex;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    background-color: #173C40;\r\n}\r\n#menuPopUp:hover{\r\n    background-color: #818FB4;\r\n}\r\n.menuPopUpArrowLeft{\r\n    height: 50px;\r\n    width: 50px;\r\n    margin-right: 15px;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n.menuPopUpArrowRight{\r\n    height: 50px;\r\n    width: 50px;\r\n    margin-left: 15px;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n.clickedRArrow{\r\n    transform:rotate(90deg);\r\n}\r\n.clickedLArrow{\r\n    transform:rotate(-90deg);\r\n}\r\n.transition-image {\r\n    transition-duration:0.1s;\r\n}\r\n.menuPopUpButton{\r\n    border:none;\r\n    font-size: 2.5rem;\r\n    font-family: 'Lato',sans-serif;\r\n    color: white;\r\n    background-color: #2d395b;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100vw;\r\n    height: 80px;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n.menuPopUpButton:hover{\r\n    background-color: #818FB4;\r\n}\r\n\r\n#menuDiv {\r\n    display: flex;\r\n    height: 0vh;\r\n    width: 100vw;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;\r\n    opacity: 1;\r\n    overflow: hidden;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.specialtiesBackground{\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n }\r\n  \r\n  #gridCoaste, #gridCeafa, #gridMici, #gridWings {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    height: 30vh;\r\n    width: 30vw;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    margin: 5vw;\r\n    border-radius: 5px;\r\n    min-width: 400px;\r\n  }\r\n  #gridMici, #gridWings{\r\n    margin-top: 1vh;\r\n  }\r\n  #coastePic, #miciPic, #wingsPic, #ceafaPic{\r\n    height: 23vh;\r\n    max-width: 350px;\r\n    min-width: 300px;\r\n    width: 22vw;\r\n    margin-top: 1vh;\r\n    border-radius: 4px;\r\n  }\r\n  .description{\r\n    color: white;\r\n    font-size: 1.2rem;\r\n    cursor:default;\r\n  }\r\n\r\n#forestDiv {\r\n    position: relative; /* Ensure relative positioning */\r\n    text-align: center;\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100vw;\r\n    height: 91vh; /* Adjust the height as needed */\r\n}\r\n\r\n#topDiv{\r\n    position: fixed;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    height: 100px;\r\n    width: 100vw;\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 5;\r\n    transition: transform 0.5s ease-in-out;\r\n}\r\n\r\n.placeholderTopDiv{\r\n    height: 100px;\r\n    width: 100vw;\r\n}\r\n\r\n.buttonContact, .buttonMenu, .buttonHome{\r\n    width: 60vh;\r\n    height: 50px;\r\n    max-width: 200px;\r\n    margin: 30px;\r\n    font-size: 2.5rem;\r\n    background-color: #2d395b;\r\n    border-radius: 5px;\r\n    border: none;\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: 'Lato';\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-in-out;\r\n    color:white;\r\n}\r\n.buttonContact:hover, .buttonMenu:hover, .buttonHome:hover{\r\n    background-color: #818FB4;\r\n    color: black;\r\n    transition-duration: 0.3s;\r\n}\r\n\r\n\r\n.clicked{\r\n    width: 60vh;\r\n    height: 50px;\r\n    max-width: 200px;\r\n    margin: 30px;\r\n    font-size: 2.5rem;\r\n    background-color: #818FB4;\r\n    border-radius: 5px;\r\n    border: none;\r\n    color: black;\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: 'Lato';\r\n    cursor: pointer;\r\n    transition: all ease-in-out 0.3s;\r\n}\r\n.clicked:hover{\r\n    background-color: #6f7c9e;\r\n    transition-duration: 0.3s;\r\n}\r\n#homeDiv{\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    width: 800px;\r\n    height: 65vh;\r\n    border-radius: 10px;\r\n    margin-top: 80px;\r\n    border: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n    z-index: 2;\r\n}\r\n\r\n.workingHours{\r\n    font-family: 'Lato';\r\n    margin-top: 3px;\r\n}\r\n\r\n#workingHoursTitle{\r\n    cursor:default;\r\n    font-size: 2.5rem;\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\n#titleDiv{\r\n    cursor:default;\r\n    background-color: none;\r\n    height: 100px;\r\n    width: 450px;\r\n    margin:10px;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content:center;\r\n    font-size: 4rem;\r\n    margin-top: 20px;\r\n    font-weight: normal;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-family: 'Lato';\r\n    color: white;\r\n}\r\n\r\n#hoursDiv{\r\n    cursor:default;\r\n    background-color: none;\r\n    height: 360px;\r\n    width: 450px;\r\n    margin:10px;\r\n    font-size: 20px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-family: 'Rosarivo';\r\n    color: white;\r\n}\r\n\r\n\r\n#locationDiv{\r\n    cursor:default;\r\n    background-color: none;\r\n    height: 100px;\r\n    width: 450px;\r\n    margin:10px;\r\n    display:flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    border-radius: 5px;\r\n    border: none;\r\n    color: white;\r\n}\r\n\r\n#locationTitle{\r\n    font-size: 35px;\r\n    font-weight: normal;\r\n    font-family: 'Lato', sans-serif;\r\n    margin-top: 40px;\r\n}\r\n\r\n#location{\r\n    font-size: 20px;\r\n    margin-top: 10px;\r\n    font-family: 'Lato';\r\n}\r\n\r\n@media screen and (min-height: 750px) and (max-height: 850px) {\r\n    #homeDiv{\r\n        background-color: rgba(0, 0, 0, 0.7);\r\n        width: 800px;\r\n        height: 70vh;\r\n        border-radius: 10px;\r\n        margin-top: 5px;\r\n        border: none;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: flex-start;\r\n        align-items: center;\r\n        margin-bottom: 10px;\r\n        z-index: 2;\r\n    }\r\n    \r\n    .workingHours{\r\n        font-family: 'Lato';\r\n        margin-top: 0px;\r\n    }\r\n    \r\n    #workingHoursTitle{\r\n        cursor:default;\r\n        font-size: 2.5rem;\r\n        font-family: 'Lato', sans-serif;\r\n    }\r\n    \r\n    #titleDiv{\r\n        cursor:default;\r\n        background-color: none;\r\n        height: 50px;\r\n        width: 450px;\r\n        margin:0px;\r\n        display:flex;\r\n        align-items: center;\r\n        justify-content:center;\r\n        font-size: 4rem;\r\n        margin-top: 20px;\r\n        font-weight: normal;\r\n        border: none;\r\n        border-radius: 5px;\r\n        font-family: 'Lato';\r\n        color: white;\r\n    }\r\n    \r\n    #hoursDiv{\r\n        cursor:default;\r\n        background-color: none;\r\n        height: 340px;\r\n        width: 450px;\r\n        margin:5px;\r\n        font-size: 18px;\r\n        border-radius: 5px;\r\n        border: none;\r\n        font-family: 'Rosarivo';\r\n        color: white;\r\n    }\r\n    \r\n    \r\n    #locationDiv{\r\n        cursor:default;\r\n        background-color: none;\r\n        height: 50px;\r\n        width: 450px;\r\n        margin:0px;\r\n        display:flex;\r\n        flex-direction: column;\r\n        justify-content: flex-start;\r\n        align-items: center;\r\n        border-radius: 5px;\r\n        border: none;\r\n        color: white;\r\n    }\r\n    \r\n    #locationTitle{\r\n        font-size: 35px;\r\n        font-weight: normal;\r\n        font-family: 'Lato', sans-serif;\r\n        margin-top: 0px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    /* Styles for tablets and desktops */\r\n\r\n    #titleDiv{\r\n        font-size: 3rem;\r\n        height: 50px;\r\n    }\r\n\r\n    #locationTitle{\r\n        font-size: 35px;\r\n        font-weight: normal;\r\n        font-family: 'Lato', sans-serif;\r\n        margin-top: 10px;\r\n    }\r\n    body {\r\n        width: 100vw;\r\n    }\r\n    .buttonContact, .buttonMenu, .buttonHome {\r\n        margin: 10px; \r\n        font-size: 2rem;\r\n    }\r\n    .clicked{\r\n        margin: 10px;\r\n        font-size: 2rem;\r\n    }\r\n    #homeDiv{\r\n        width:90vw;\r\n        margin-top: 20px;\r\n        height: 80vh;\r\n    }\r\n    #titleDiv{\r\n        width: 80vw;\r\n        margin-top: 20px;\r\n    }\r\n    #hoursDiv{\r\n        width: 80vw;\r\n        margin-top: 20px;\r\n    }\r\n    #locationDiv{\r\n        width: 80vw;\r\n        margin-top: 20px;\r\n    }\r\n    #lowerContactDiv{\r\n        flex-direction: column;\r\n    }\r\n    #teamDiv{\r\n        width: 100vw;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    #teamTitle{\r\n        margin: 0;\r\n        margin-top: 15px;\r\n    }\r\n    #manager, #waiter, #cook, #contactEmail, #contactNumber{\r\n        margin:10px;\r\n    }\r\n    #contactDiv{\r\n        width: 100vw;\r\n        height: 14vh;\r\n        background-color: #161d29;\r\n        display:flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    #lowerContactDiv{\r\n        height: 90vh;\r\n    }\r\n    body{\r\n        height: 180vh;\r\n    }\r\n    #awardsDiv{\r\n        height: 50vh;\r\n        display:flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: space-evenly;\r\n        width: 100vw;\r\n    }\r\n    .firstAward{\r\n       margin-right: 0;\r\n    }\r\n    #contactDiv{\r\n        align-items: center;\r\n    }\r\n    #contactTitle{\r\n        margin-top: 15px;\r\n        margin-left: 0;\r\n        margin-right: 0;\r\n    }\r\n    #menuDiv{\r\n        height: 120vh;\r\n    }\r\n\r\n    #gridCoaste, #gridCeafa, #gridMici, #gridWings {\r\n        \r\n        min-width: 350px;\r\n    }\r\n    #coastePic, #miciPic, #wingsPic, #ceafaPic{\r\n        max-width: 320px;\r\n        min-width: 280px;\r\n    }\r\n    .menuPopUpButton{\r\n        font-size: 1.8rem;\r\n        \r\n    }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/assets/noir1.mp4":
/*!*************************************!*\
  !*** ./src/styles/assets/noir1.mp4 ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"videos/noir1.mp4\");\n\n//# sourceURL=webpack://restaurant/./src/styles/assets/noir1.mp4?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _src_styles_assets_noir1_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/styles/assets/noir1.mp4 */ \"./src/styles/assets/noir1.mp4\");\n/* harmony import */ var _src_styles_assets_ribs_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../src/styles/assets/ribs.jpg */ \"./src/styles/assets/ribs.jpg\");\n/* harmony import */ var _src_styles_assets_mici_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../src/styles/assets/mici.jpg */ \"./src/styles/assets/mici.jpg\");\n/* harmony import */ var _src_styles_assets_wings_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../src/styles/assets/wings.jpg */ \"./src/styles/assets/wings.jpg\");\n/* harmony import */ var _src_styles_assets_ceafa_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../src/styles/assets/ceafa.jpg */ \"./src/styles/assets/ceafa.jpg\");\n/* harmony import */ var _src_styles_assets_left_arrow_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../src/styles/assets/left-arrow.png */ \"./src/styles/assets/left-arrow.png\");\n/* harmony import */ var _src_styles_assets_right_arrow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../src/styles/assets/right-arrow.png */ \"./src/styles/assets/right-arrow.png\");\n/* harmony import */ var _src_styles_assets_badge_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../src/styles/assets/badge.png */ \"./src/styles/assets/badge.png\");\n/* harmony import */ var _src_styles_assets_badge2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../src/styles/assets/badge2.png */ \"./src/styles/assets/badge2.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst body = document.body;\r\n\r\nconst forestDiv = document.createElement('div');\r\nforestDiv.id = 'forestDiv';\r\nforestDiv.style.background = `url(${_src_styles_assets_noir1_mp4__WEBPACK_IMPORTED_MODULE_1__[\"default\"]})`;\r\nforestDiv.style.backgroundSize = 'cover';\r\nbody.appendChild(forestDiv);\r\n\r\nconst videoElement = document.createElement('video');\r\nvideoElement.src = _src_styles_assets_noir1_mp4__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\nvideoElement.autoplay = true;\r\nvideoElement.loop = true;\r\nvideoElement.muted = true;\r\n\r\nvideoElement.style.position = 'absolute';\r\nvideoElement.style.top = '0';\r\nvideoElement.style.left = '0';\r\nvideoElement.style.width = '100%';\r\nvideoElement.style.height = '100%';\r\nvideoElement.style.objectFit = 'cover'; \r\n\r\n// Append the <video> element as a child of the div\r\nforestDiv.appendChild(videoElement);\r\n\r\n\r\nconst specialtiesBackground = document.createElement('img');\r\nspecialtiesBackground.classList = 'specialtiesBackground';\r\n\r\nconst darkGreenDiv = document.createElement('div');\r\ndarkGreenDiv.id = 'darkGreenDiv';\r\nbody.appendChild(darkGreenDiv);\r\nconst menuDiv = document.createElement('div');\r\nmenuDiv.id = 'menuDiv';\r\nbody.appendChild(menuDiv);\r\n\r\nconst gridCoaste = document.createElement('div')\r\ngridCoaste.id = 'gridCoaste';\r\nmenuDiv.appendChild(gridCoaste);\r\nconst coastePic = document.createElement('img');\r\ncoastePic.id = 'coastePic';\r\ncoastePic.src = _src_styles_assets_ribs_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\ngridCoaste.appendChild(coastePic);\r\nconst coasteDesc = document.createElement('p');\r\ncoasteDesc.classList = 'description';\r\ncoasteDesc.textContent = 'Tender Barbecue Pork Ribs';\r\ngridCoaste.appendChild(coasteDesc);\r\nconst gridCeafa = document.createElement('div')\r\ngridCeafa.id = 'gridCeafa';\r\nmenuDiv.appendChild(gridCeafa);\r\nconst ceafaPic = document.createElement('img');\r\nceafaPic.id = 'ceafaPic';\r\nceafaPic.src = _src_styles_assets_ceafa_jpg__WEBPACK_IMPORTED_MODULE_5__;\r\ngridCeafa.appendChild(ceafaPic);\r\nconst ceafaDesc = document.createElement('p');\r\nceafaDesc.classList = 'description';\r\nceafaDesc.textContent = 'Juicy Pork Shoulder';\r\ngridCeafa.appendChild(ceafaDesc);\r\nconst gridMici = document.createElement('div')\r\ngridMici.id = 'gridMici';\r\nmenuDiv.appendChild(gridMici);\r\nconst miciPic = document.createElement('img');\r\nmiciPic.id = 'miciPic';\r\nmiciPic.src = _src_styles_assets_mici_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\ngridMici.appendChild(miciPic);\r\nconst miciDesc = document.createElement('p');\r\nmiciDesc.classList = 'description';\r\nmiciDesc.textContent = 'Succulent Porc & Beef Mici';\r\ngridMici.appendChild(miciDesc);\r\nconst gridWings = document.createElement('div')\r\ngridWings.id = 'gridWings';\r\nmenuDiv.appendChild(gridWings);\r\nconst wingsPic = document.createElement('img');\r\nwingsPic.id = 'wingsPic';\r\nwingsPic.src = _src_styles_assets_wings_jpg__WEBPACK_IMPORTED_MODULE_4__;\r\ngridWings.appendChild(wingsPic);\r\nconst wingsDesc = document.createElement('p');\r\nwingsDesc.classList = 'description';\r\nwingsDesc.textContent = 'Crispy Chicken Wings';\r\ngridWings.appendChild(wingsDesc);\r\n\r\nconst lowerContactDiv = document.createElement('div');\r\nlowerContactDiv.id = 'lowerContactDiv';\r\nbody.appendChild(lowerContactDiv);\r\nconst contactAndTeamDetails = document.createElement('div');\r\ncontactAndTeamDetails.id = 'contactAndTeamDetails';\r\nlowerContactDiv.appendChild(contactAndTeamDetails);\r\nconst teamDetailsDiv = document.createElement('div');\r\nteamDetailsDiv.id = 'teamDetailsDiv';\r\ncontactAndTeamDetails.appendChild(teamDetailsDiv);\r\n\r\nconst teamDiv = document.createElement('div');\r\nteamDiv.id = 'teamDiv';\r\nteamDetailsDiv.appendChild(teamDiv);\r\n\r\nconst contactDiv = document.createElement('div');\r\ncontactDiv.id = 'contactDiv';\r\nteamDetailsDiv.appendChild(contactDiv);\r\nconst contactTitle = document.createElement('h');\r\ncontactTitle.id = 'contactTitle';\r\ncontactTitle.textContent = 'Contact Us';\r\ncontactDiv.appendChild(contactTitle);\r\nconst contactEmail = document.createElement('a');\r\ncontactEmail.id = 'contactEmail';\r\ncontactEmail.textContent = 'nicubilac1@gmail.com'\r\ncontactEmail.href = 'mailto:nicubilac1@gmail.com';\r\ncontactDiv.appendChild(contactEmail);\r\nconst contactNumber = document.createElement('h');\r\ncontactNumber.id = 'contactNumber';\r\ncontactNumber.textContent = '+40752845018';\r\ncontactDiv.appendChild(contactNumber);\r\n\r\nconst teamTitle = document.createElement('h');\r\nteamTitle.id = 'teamTitle';\r\nteamTitle.textContent = 'Meet the Team';\r\nteamDiv.appendChild(teamTitle);\r\nconst manager = document.createElement('p');\r\nmanager.id = 'manager';\r\nmanager.textContent = 'Micliuc Adrian - Seasoned Manager';\r\nteamDiv.appendChild(manager);\r\n\r\nconst cook = document.createElement('p');\r\ncook.id = 'cook';\r\ncook.textContent = 'Bilac Nicolae - Michelin Star Cook';\r\nteamDiv.appendChild(cook);\r\n\r\nconst waiter = document.createElement('p');\r\nwaiter.id = 'waiter';\r\nwaiter.textContent = 'Stanaranga Stefan - Swift Waiter';\r\nteamDiv.appendChild(waiter);\r\n\r\n\r\nconst copyrightDiv = document.createElement('div');\r\ncopyrightDiv.id = 'copyrightDiv';\r\ncontactAndTeamDetails.appendChild(copyrightDiv);\r\nconst copyright = document.createElement('h');\r\ncopyright.id = 'copyright';\r\ncopyright.textContent = '';\r\ncopyrightDiv.appendChild(copyright);  \r\n\r\nconst awardsDiv = document.createElement('div');\r\nawardsDiv.id = 'awardsDiv';\r\nlowerContactDiv.appendChild(awardsDiv);\r\nconst firstAward = document.createElement('img');\r\nfirstAward.classList = 'firstAward';\r\nfirstAward.src = _src_styles_assets_badge_png__WEBPACK_IMPORTED_MODULE_8__;\r\nawardsDiv.appendChild(firstAward);\r\nconst secondAward = document.createElement('img');\r\nsecondAward.classList = 'firstAward';\r\nsecondAward.src = _src_styles_assets_badge2_png__WEBPACK_IMPORTED_MODULE_9__;\r\nawardsDiv.appendChild(secondAward);\r\n\r\nconst menuPopUp = document.createElement('div');\r\nmenuPopUp.id = 'menuPopUp';\r\ndarkGreenDiv.appendChild(menuPopUp);\r\nconst menuPopUpButton = document.createElement('button');\r\nmenuPopUpButton.classList = 'menuPopUpButton'; \r\nmenuPopUp.appendChild(menuPopUpButton);\r\n\r\nconst menuPopUpArrowLeft = document.createElement('img');\r\nmenuPopUpArrowLeft.classList = 'menuPopUpArrowLeft';\r\nmenuPopUpArrowLeft.src = _src_styles_assets_left_arrow_png__WEBPACK_IMPORTED_MODULE_6__;\r\nmenuPopUpButton.appendChild(menuPopUpArrowLeft);\r\nconst menuPopUpButtonText = document.createElement('p');\r\nmenuPopUpButtonText.id = 'menuPopUpButtonText';\r\nmenuPopUpButtonText.textContent = 'See Our Specialties';\r\nmenuPopUpButton.appendChild(menuPopUpButtonText);\r\n\r\nconst menuPopUpArrowRight = document.createElement('img');\r\nmenuPopUpArrowRight.classList = 'menuPopUpArrowRight';\r\nmenuPopUpArrowRight.src = _src_styles_assets_right_arrow_png__WEBPACK_IMPORTED_MODULE_7__;\r\nmenuPopUpButton.appendChild(menuPopUpArrowRight);\r\n\r\nconst newDiv = document.createElement('div');\r\nconst buttonHome = document.createElement('button');\r\nconst buttonMenu = document.createElement('button');\r\nconst buttonContact = document.createElement('button');\r\n\r\nconst locationTitle = document.createElement('h');\r\nlocationTitle.id = \"locationTitle\"; \r\nlocationTitle.textContent = \"Location\"\r\n\r\nconst location = document.createElement('h');\r\nlocation.id = \"location\";\r\nlocation.textContent = \"Targu-Mures, Ciucas Street 9\";\r\n\r\nconst workingHoursTitle = document.createElement('h');\r\nworkingHoursTitle.id = 'workingHoursTitle';\r\nworkingHoursTitle.textContent = 'HOURS';\r\n\r\nconst workingHoursMonday = document.createElement('p');\r\nworkingHoursMonday.classList = 'workingHours';\r\nworkingHoursMonday.textContent = 'Monday: 8am - 10pm';\r\n\r\nconst workingHoursTuesday = document.createElement('p');\r\nworkingHoursTuesday.classList = 'workingHours';\r\nworkingHoursTuesday.textContent = 'Tuesday: 8am - 10pm';\r\n\r\nconst workingHoursWendsday = document.createElement('p');\r\nworkingHoursWendsday.classList = 'workingHours';\r\nworkingHoursWendsday.textContent = 'Wendsday: 8am - 10pm';\r\n\r\nconst workingHoursThursday = document.createElement('p');\r\nworkingHoursThursday.classList = 'workingHours';\r\nworkingHoursThursday.textContent = 'Thursday: 8am - 10pm';\r\n\r\nconst workingHoursFriday = document.createElement('p');\r\nworkingHoursFriday.classList = 'workingHours';\r\nworkingHoursFriday.textContent = 'Friday: 8am - 12pm';\r\n\r\nconst workingHoursSaturday = document.createElement('p');\r\nworkingHoursSaturday.classList = 'workingHours';\r\nworkingHoursSaturday.textContent = 'Saturday: 10am - 12pm';\r\n\r\nconst workingHoursSunday = document.createElement('p');\r\nworkingHoursSunday.classList = 'workingHours';\r\nworkingHoursSunday.textContent = 'Sunday: 10am - 12pm';\r\n\r\nconst homeDiv = document.createElement('div');\r\nhomeDiv.id = 'homeDiv';\r\nconst titleDiv = document.createElement('div');\r\ntitleDiv.id = 'titleDiv';\r\ntitleDiv.textContent = \"NICU'S BITES\";\r\nconst hoursDiv = document.createElement('div');\r\nhoursDiv.id = 'hoursDiv';\r\nconst locationDiv = document.createElement('div');\r\nlocationDiv.id = 'locationDiv';\r\n\r\nbuttonHome.className = 'buttonHome';\r\nbuttonMenu.className =  'buttonMenu';\r\nbuttonContact.className = 'buttonContact';\r\n\r\nbuttonHome.textContent = 'Home';\r\nbuttonMenu.textContent = 'Menu';\r\nbuttonContact.textContent = 'Contact';\r\n\r\nconst placeholderTopDiv = document.createElement('div');\r\nplaceholderTopDiv.classList = 'placeholderTopDiv';\r\n\r\nnewDiv.id = 'topDiv';\r\n\r\nforestDiv.appendChild(newDiv);\r\nforestDiv.appendChild(placeholderTopDiv);\r\nforestDiv.appendChild(homeDiv);\r\n\r\nnewDiv.appendChild(buttonHome);\r\nnewDiv.appendChild(buttonMenu);\r\nnewDiv.appendChild(buttonContact);\r\n\r\nhomeDiv.appendChild(titleDiv);\r\nhomeDiv.appendChild(hoursDiv);\r\nhomeDiv.appendChild(locationDiv);\r\n\r\nhoursDiv.appendChild(workingHoursTitle);\r\nhoursDiv.appendChild(workingHoursMonday);\r\nhoursDiv.appendChild(workingHoursTuesday);\r\nhoursDiv.appendChild(workingHoursWendsday);\r\nhoursDiv.appendChild(workingHoursThursday);\r\nhoursDiv.appendChild(workingHoursFriday);\r\nhoursDiv.appendChild(workingHoursSaturday);\r\nhoursDiv.appendChild(workingHoursSunday);\r\n\r\nlocationDiv.appendChild(locationTitle);\r\nlocationDiv.appendChild(location);\r\n\r\nlet arrowsRotated = false;\r\n\r\nfunction handleButtonClickForSmallScreen() {\r\n  if (arrowsRotated) {\r\n    menuPopUpArrowLeft.style.transform = 'rotate(0deg)';\r\n    menuPopUpArrowRight.style.transform = 'rotate(0deg)';\r\n    arrowsRotated = false;\r\n    \r\n\r\n    menuDiv.style.height = '80vh'; // Set to the maximum height or desired value\r\n    menuDiv.style.opacity = '1';\r\n\r\n    setTimeout(() => {\r\n      menuDiv.style.opacity = '0';\r\n      menuDiv.style.height = '0';\r\n    }, 50); // A slight delay before applying reverse styles\r\n\r\n    setTimeout(() => {\r\n      menuDiv.style.display = 'none';\r\n      body.style.height = '140vh'; \r\n    }, 500); // Should match the longest transition duration (0.5s in this example)\r\n\r\n    window.scrollTo({\r\n      top: 0,\r\n      left: 0,\r\n      behavior: 'smooth'\r\n    });\r\n\r\n  } else {\r\n    menuPopUpArrowLeft.style.transform = 'rotate(-90deg)';\r\n    menuPopUpArrowRight.style.transform = 'rotate(90deg)';\r\n    arrowsRotated = true;\r\n    \r\n    body.style.height = '340vh';\r\n    menuDiv.style.display = 'grid';\r\n    setTimeout(() => {\r\n      menuDiv.style.height = '300vh'; // Set to the maximum height or desired value\r\n      menuDiv.style.opacity = '1';\r\n    }, 100); // A slight delay before applying styles\r\n\r\n    window.scrollTo({\r\n      top: darkGreenDiv.offsetTop,\r\n      behavior: 'smooth' // Optional: Adds smooth scrolling effect\r\n    });\r\n  }\r\n}\r\n\r\n// Function to handle button click for larger screens\r\nfunction handleButtonClickForLargeScreen() {\r\n  if (arrowsRotated) {\r\n    menuPopUpArrowLeft.style.transform = 'rotate(0deg)';\r\n    menuPopUpArrowRight.style.transform = 'rotate(0deg)';\r\n    arrowsRotated = false;\r\n    \r\n\r\n    menuDiv.style.height = '80vh'; // Set to the maximum height or desired value\r\n    menuDiv.style.opacity = '1';\r\n\r\n    setTimeout(() => {\r\n      menuDiv.style.opacity = '0';\r\n      menuDiv.style.height = '0';\r\n    }, 50); // A slight delay before applying reverse styles\r\n\r\n    setTimeout(() => {\r\n      menuDiv.style.display = 'none';\r\n      body.style.height = '140vh'; \r\n    }, 500); // Should match the longest transition duration (0.5s in this example)\r\n\r\n    window.scrollTo({\r\n      top: 0,\r\n      left: 0,\r\n      behavior: 'smooth'\r\n    });\r\n\r\n  } else {\r\n    menuPopUpArrowLeft.style.transform = 'rotate(-90deg)';\r\n    menuPopUpArrowRight.style.transform = 'rotate(90deg)';\r\n    arrowsRotated = true;\r\n    \r\n    body.style.height = '220vh';\r\n    menuDiv.style.display = 'flex';\r\n    setTimeout(() => {\r\n      menuDiv.style.height = '80vh'; // Set to the maximum height or desired value\r\n      menuDiv.style.opacity = '1';\r\n    }, 100); // A slight delay before applying styles\r\n\r\n    window.scrollTo({\r\n      top: darkGreenDiv.offsetTop,\r\n      behavior: 'smooth' // Optional: Adds smooth scrolling effect\r\n    });\r\n  }\r\n}\r\n\r\n\r\nmenuPopUpButton.addEventListener('click', function() {\r\n  if (window.matchMedia('(max-width: 768px)').matches) {\r\n    // For smaller screens\r\n    handleButtonClickForSmallScreen();\r\n  } else {\r\n    // For larger screens\r\n    handleButtonClickForLargeScreen();\r\n  }\r\n});\r\n\r\nbuttonMenu.addEventListener('click', function() {\r\n  // Trigger the click event of menuPopUpButton\r\n  menuPopUpButton.click();\r\n});\r\n\r\nbuttonContact.addEventListener('click', function() {\r\n  // Scroll the window to the bottom of the page\r\n  window.scrollTo({\r\n    top: document.documentElement.scrollHeight, // Scroll to the bottom\r\n    behavior: 'smooth' // Add smooth scrolling effect\r\n  });\r\n\r\n  contactEmail.style.backgroundColor = 'rgba(255, 255, 255, 0.553)';\r\n  setTimeout(function() {\r\n    contactEmail.style.backgroundColor = ''; // Reset the glow after half a second\r\n  }, 500); // Half a second (500 milliseconds)\r\n\r\n});\r\n\r\n  \r\n\r\nmenuPopUpButton.addEventListener('mouseout', function() {\r\n  if (!arrowsRotated) {\r\n    menuPopUpArrowLeft.style.transform = 'rotate(0deg)';\r\n    menuPopUpArrowRight.style.transform = 'rotate(0deg)';\r\n  }\r\n});\r\n\r\nmenuPopUpButton.addEventListener('mouseover', function() {\r\n  if (!arrowsRotated) {\r\n    menuPopUpArrowLeft.style.transform = 'rotate(-90deg)';\r\n    menuPopUpArrowRight.style.transform = 'rotate(90deg)';\r\n  }\r\n});\r\n\r\n\r\nbuttonHome.addEventListener('click', function(){\r\n  window.scrollTo({\r\n    top: 0,\r\n    left: 0,\r\n    behavior: 'smooth'\r\n  });\r\n    buttonHome.classList.remove('buttonHome');\r\n    buttonHome.classList.add('clicked');\r\n\r\n    buttonContact.classList.remove('clicked');\r\n    buttonContact.classList.add('buttonContact');\r\n\r\n    buttonMenu.classList.remove('clicked');\r\n    buttonMenu.classList.add('buttonMenu');\r\n});\r\n\r\nbuttonContact.addEventListener('click', function(){\r\n    buttonContact.classList.remove('buttonContact');\r\n    buttonContact.classList.add('clicked');\r\n\r\n    buttonHome.classList.remove('clicked');\r\n    buttonHome.classList.add('buttonHome');\r\n\r\n    buttonMenu.classList.remove('clicked');\r\n    buttonMenu.classList.add('buttonMenu');\r\n})\r\n\r\nbuttonMenu.addEventListener('click', function(){\r\n    buttonMenu.classList.remove('buttonMenu');\r\n    buttonMenu.classList.add('clicked');\r\n\r\n    buttonHome.classList.remove('clicked');\r\n    buttonHome.classList.add('buttonHome');\r\n\r\n    buttonContact.classList.remove('clicked');\r\n    buttonContact.classList.add('buttonContact');\r\n})\r\n\r\nlet lastScrollTop = 0;\r\nconst topDiv = document.getElementById('topDiv');\r\nconst topDivPlaceholder = document.getElementById('topDivPlaceholder');\r\n\r\nwindow.addEventListener('scroll', function() {\r\n  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;\r\n\r\n  if (currentScroll > lastScrollTop) {\r\n    // Scrolling down\r\n    topDiv.style.transform = 'translateY(-100%)'; // Hide the topDiv by moving it above the viewport\r\n  } else {\r\n    // Scrolling up\r\n    topDiv.style.transform = 'translateY(0)'; // Show the topDiv by moving it back to its original position\r\n  }\r\n\r\n  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling\r\n});\r\n\r\n\r\n\r\n\r\nfunction navigateToMenu(){\r\n    window.location.href = 'menu.html';\r\n}\r\n\r\nfunction navigateToHome(){\r\n    window.location.href = 'index.html';\r\n}\r\n\r\nfunction navigateToContact(){\r\n    window.location.href = 'contact.html';\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/fonts/Jost-VariableFont_wght.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/Jost-VariableFont_wght.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34835cd554b7b71732e2.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/fonts/Jost-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/styles/assets/badge.png":
/*!*************************************!*\
  !*** ./src/styles/assets/badge.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e687b5bbd6efa3ada4b8.png\";\n\n//# sourceURL=webpack://restaurant/./src/styles/assets/badge.png?");

/***/ }),

/***/ "./src/styles/assets/badge2.png":
/*!**************************************!*\
  !*** ./src/styles/assets/badge2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd48757c6b25b9000d33.png\";\n\n//# sourceURL=webpack://restaurant/./src/styles/assets/badge2.png?");

/***/ }),

/***/ "./src/styles/assets/blue-wall-bg.jpg":
/*!********************************************!*\
  !*** ./src/styles/assets/blue-wall-bg.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a9aaae05ec70baf2490e.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/styles/assets/blue-wall-bg.jpg?");

/***/ }),

/***/ "./src/styles/assets/ceafa.jpg":
/*!*************************************!*\
  !*** ./src/styles/assets/ceafa.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f86ad089259285370b5a.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/styles/assets/ceafa.jpg?");

/***/ }),

/***/ "./src/styles/assets/left-arrow.png":
/*!******************************************!*\
  !*** ./src/styles/assets/left-arrow.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d4be4fde52841a2ca79b.png\";\n\n//# sourceURL=webpack://restaurant/./src/styles/assets/left-arrow.png?");

/***/ }),

/***/ "./src/styles/assets/mici.jpg":
/*!************************************!*\
  !*** ./src/styles/assets/mici.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf70cfc4123ceb127862.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/styles/assets/mici.jpg?");

/***/ }),

/***/ "./src/styles/assets/ribs.jpg":
/*!************************************!*\
  !*** ./src/styles/assets/ribs.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"33351ee8ab1315958f70.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/styles/assets/ribs.jpg?");

/***/ }),

/***/ "./src/styles/assets/right-arrow.png":
/*!*******************************************!*\
  !*** ./src/styles/assets/right-arrow.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf36f9e8d00dfa9f6958.png\";\n\n//# sourceURL=webpack://restaurant/./src/styles/assets/right-arrow.png?");

/***/ }),

/***/ "./src/styles/assets/wings.jpg":
/*!*************************************!*\
  !*** ./src/styles/assets/wings.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f7308de4058151732c0.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/styles/assets/wings.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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