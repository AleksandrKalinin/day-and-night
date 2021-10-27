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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchMode\": () => (/* binding */ switchMode)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction switchMode() {\n  return _switchMode.apply(this, arguments);\n}\n\nfunction _switchMode() {\n  _switchMode = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var doc, btnAuth, select, select2, switchBtn;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            doc = document.getElementById('main');\n            btnAuth = document.getElementById('btnAuth');\n            select = document.getElementById('category');\n            select2 = document.getElementById('api');\n            switchBtn = document.getElementById('switchBtn');\n\n            if (doc.classList.contains('dark-mode')) {\n              doc.className = 'light-mode';\n              select.className = 'light-mode';\n              select2.className = 'light-mode';\n              switchBtn.className = 'lightmode-button';\n              btnAuth.className = 'lightmode-button';\n              switchBtn.innerText = 'Dark mode';\n              localStorage.setItem('color', 'light-mode');\n            } else {\n              doc.className = 'dark-mode';\n              select.className = 'dark-mode';\n              select2.className = 'dark-mode';\n              switchBtn.className = 'darkmode-button';\n              btnAuth.className = 'darkmode-button';\n              switchBtn.innerText = 'Light mode';\n              localStorage.setItem('color', 'dark-mode');\n            }\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _switchMode.apply(this, arguments);\n}\n\n//# sourceURL=webpack://fffff/./src/switchMode.js?");

/***/ })

}]);