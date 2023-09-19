"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server/api */ \"./server/api.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ \"./pages/text.js\");\n\n\n\nfunction getFrase() {\n    try {\n        const frase = (0,_server_api__WEBPACK_IMPORTED_MODULE_1__.buscarFrase)();\n        console.log(frase);\n        return frase;\n    } catch (error) {\n        console.error(error);\n        return \"deu erro\";\n    }\n    return \"hello world\";\n}\nfunction Home() {\n    //const text = getFrase();\n    const text = \"valor fixo\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Titulo 1\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Projetos\\\\aprendizado\\\\CursoFilipeDeschamps\\\\pages\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 18\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text__WEBPACK_IMPORTED_MODULE_2__.TextComponent, {\n                text: text\n            }, void 0, false, {\n                fileName: \"H:\\\\Projetos\\\\aprendizado\\\\CursoFilipeDeschamps\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Projetos\\\\aprendizado\\\\CursoFilipeDeschamps\\\\pages\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 13\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUN2QyxTQUFTRSxXQUFVO0lBQ2YsSUFBSTtRQUNBLE1BQU1DLFFBQVFILHdEQUFXQTtRQUN6QkksUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU9BO0lBQ1gsRUFBRSxPQUFPRyxPQUFPO1FBQ1pGLFFBQVFFLEtBQUssQ0FBQ0E7UUFDZCxPQUFPO0lBQ1g7SUFDQSxPQUFPO0FBQ1g7QUFDQSxTQUFTQyxPQUFPO0lBQ1osMEJBQTBCO0lBQzFCLE1BQU1DLE9BQU87SUFDYixxQkFBUSw4REFBQ0M7OzBCQUFJLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNiLDhEQUFDVCxnREFBYUE7Z0JBQUNPLE1BQU1BOzs7Ozs7Ozs7Ozs7QUFHN0I7QUFHQSxpRUFBZUQsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGUtc29jaWFsLXRlc3RlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBidXNjYXJGcmFzZSB9IGZyb20gXCIuLi9zZXJ2ZXIvYXBpXCI7XHJcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tIFwiLi90ZXh0XCI7XHJcbmZ1bmN0aW9uIGdldEZyYXNlKCl7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZyYXNlID0gYnVzY2FyRnJhc2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmcmFzZSk7XHJcbiAgICAgICAgcmV0dXJuIGZyYXNlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gJ2RldSBlcnJvJztcclxuICAgIH1cclxuICAgIHJldHVybiBcImhlbGxvIHdvcmxkXCI7XHJcbn1cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIC8vY29uc3QgdGV4dCA9IGdldEZyYXNlKCk7XHJcbiAgICBjb25zdCB0ZXh0ID0gXCJ2YWxvciBmaXhvXCI7XHJcbiAgICByZXR1cm4gKDxkaXY+PGgxPlRpdHVsbyAxPC9oMT5cclxuICAgICAgICA8VGV4dENvbXBvbmVudCB0ZXh0PXt0ZXh0fT48L1RleHRDb21wb25lbnQ+XHJcbiAgICA8L2Rpdj4pXHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbImJ1c2NhckZyYXNlIiwiVGV4dENvbXBvbmVudCIsImdldEZyYXNlIiwiZnJhc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJIb21lIiwidGV4dCIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/text.js":
/*!***********************!*\
  !*** ./pages/text.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TextComponent\": () => (/* binding */ TextComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction TextComponent({ text  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: text\n    }, void 0, false, {\n        fileName: \"H:\\\\Projetos\\\\aprendizado\\\\CursoFilipeDeschamps\\\\pages\\\\text.js\",\n        lineNumber: 2,\n        columnNumber: 13\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxjQUFjLEVBQUVDLEtBQUksRUFBRSxFQUFFO0lBQ3BDLHFCQUFRLDhEQUFDQztrQkFBR0Q7Ozs7OztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkZS1zb2NpYWwtdGVzdGUvLi9wYWdlcy90ZXh0LmpzPzEwNTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIFRleHRDb21wb25lbnQoeyB0ZXh0IH0pIHtcclxuICAgIHJldHVybiAoPHA+e3RleHR9PC9wPilcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlRleHRDb21wb25lbnQiLCJ0ZXh0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/text.js\n");

/***/ }),

/***/ "./server/api.js":
/*!***********************!*\
  !*** ./server/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buscarFrase\": () => (/* binding */ buscarFrase)\n/* harmony export */ });\nasync function buscarFrase() {\n    try {\n        const response = await fetch(\"https://type.fit/api/quotes\");\n        const data = await response.json();\n        // Escolhendo uma frase aleatória da resposta da API\n        const fraseAleatoria = data[Math.floor(Math.random() * data.length)].text;\n        // Exibindo a frase na página\n        return fraseAleatoria;\n    } catch (error) {\n        console.error(\"Erro ao buscar a frase:\", error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxlQUFlQSxjQUFjO0lBQ2hDLElBQUk7UUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU07UUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1FBRWhDLG9EQUFvRDtRQUNwRCxNQUFNQyxpQkFBaUJGLElBQUksQ0FBQ0csS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtMLEtBQUtNLE1BQU0sRUFBRSxDQUFDQyxJQUFJO1FBRXpFLDZCQUE2QjtRQUM3QixPQUFPTDtJQUNYLEVBQUUsT0FBT00sT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtJQUM3QztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRlLXNvY2lhbC10ZXN0ZS8uL3NlcnZlci9hcGkuanM/OWU2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gYnVzY2FyRnJhc2UoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdHlwZS5maXQvYXBpL3F1b3RlcycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIC8vIEVzY29saGVuZG8gdW1hIGZyYXNlIGFsZWF0w7NyaWEgZGEgcmVzcG9zdGEgZGEgQVBJXHJcbiAgICAgICAgY29uc3QgZnJhc2VBbGVhdG9yaWEgPSBkYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKV0udGV4dDtcclxuXHJcbiAgICAgICAgLy8gRXhpYmluZG8gYSBmcmFzZSBuYSBww6FnaW5hXHJcbiAgICAgICAgcmV0dXJuIGZyYXNlQWxlYXRvcmlhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGJ1c2NhciBhIGZyYXNlOicsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYnVzY2FyRnJhc2UiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJmcmFzZUFsZWF0b3JpYSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInRleHQiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/api.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();