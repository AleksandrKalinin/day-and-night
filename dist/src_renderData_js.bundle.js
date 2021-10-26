"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfffff"] = self["webpackChunkfffff"] || []).push([["src_renderData_js"],{

/***/ "./src/renderData.js":
/*!***************************!*\
  !*** ./src/renderData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderData\": () => (/* binding */ renderData)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction renderData(_x) {\n  return _renderData.apply(this, arguments);\n}\n\nfunction _renderData() {\n  _renderData = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(data) {\n    var root, i, row, id, title, category;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            root = document.getElementById('root');\n            root.innerHTML = '';\n\n            for (i = 0; i < data.length; i++) {\n              row = document.createElement('tr');\n              id = document.createElement('td');\n              id.innerText = i;\n              title = document.createElement('td');\n              title.innerText = data[i].API;\n              category = document.createElement('td');\n              category.innerText = data[i].Category;\n              row.setAttribute('dataId', i);\n              row.appendChild(id);\n              row.appendChild(title);\n              row.appendChild(category);\n              root.appendChild(row);\n            }\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _renderData.apply(this, arguments);\n}\n\n//# sourceURL=webpack://fffff/./src/renderData.js?");

/***/ })

}]);