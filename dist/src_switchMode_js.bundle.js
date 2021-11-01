"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfffff"] = self["webpackChunkfffff"] || []).push([["src_switchMode_js"],{

/***/ "./src/switchMode.js":
/*!***************************!*\
  !*** ./src/switchMode.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchMode\": () => (/* binding */ switchMode)\n/* harmony export */ });\nfunction switchMode() {\n  var doc = document.getElementById('main');\n  var btnAuth = document.getElementById('btnAuth');\n  var select = document.getElementById('category');\n  var select2 = document.getElementById('api');\n  var switchBtn = document.getElementById('btnSwitch');\n\n  if (doc.classList.contains('dark-mode')) {\n    doc.className = 'light-mode';\n    select.className = 'light-mode';\n    select2.className = 'light-mode';\n    switchBtn.className = 'lightmode-button';\n    btnAuth.className = 'lightmode-button';\n    switchBtn.innerText = 'Dark mode';\n    localStorage.setItem('color', 'light-mode');\n  } else {\n    doc.className = 'dark-mode';\n    select.className = 'dark-mode';\n    select2.className = 'dark-mode';\n    switchBtn.className = 'darkmode-button';\n    btnAuth.className = 'darkmode-button';\n    switchBtn.innerText = 'Light mode';\n    localStorage.setItem('color', 'dark-mode');\n  }\n}\n\n//# sourceURL=webpack://fffff/./src/switchMode.js?");

/***/ })

}]);