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
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./src/pages/api/chat.js":
/*!*******************************!*\
  !*** ./src/pages/api/chat.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n        apiKey: process.env.OPENAI_API_KEY\n    });\n    const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n    const question = req.query.q;\n    if (!question) return res.json({\n        message: \"Question is not provided, you need to do this dude !\"\n    });\n    const promtOptions = `Q: ${question}\\nA:`;\n    const response = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: promtOptions,\n        temperature: 0,\n        max_tokens: 1000,\n        top_p: 1,\n        frequency_penalty: 0.0,\n        presence_penalty: 0.0,\n        stop: [\n            \"\\n\"\n        ]\n    });\n    return res.status(200).json({\n        answer: response.data.choices[0].text\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBRTNCO0FBRW5DLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLGdCQUFnQixJQUFJTCxpREFBYUEsQ0FBQztRQUN0Q00sUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0lBQ3BDO0lBQ0EsTUFBTUMsU0FBUyxJQUFJVCw2Q0FBU0EsQ0FBQ0k7SUFDN0IsTUFBTU0sV0FBV1IsSUFBSVMsS0FBSyxDQUFDQyxDQUFDO0lBQzVCLElBQUksQ0FBQ0YsVUFDSCxPQUFPUCxJQUFJVSxJQUFJLENBQUM7UUFDZEMsU0FBUztJQUNYO0lBRUYsTUFBTUMsZUFBZSxDQUFDLEdBQUcsRUFBRUwsU0FBUyxJQUFJLENBQUM7SUFFekMsTUFBTU0sV0FBVyxNQUFNUCxPQUFPUSxnQkFBZ0IsQ0FBQztRQUM3Q0MsT0FBTztRQUNQQyxRQUFRSjtRQUNSSyxhQUFhO1FBQ2JDLFlBQVk7UUFDWkMsT0FBTztRQUNQQyxtQkFBbUI7UUFDbkJDLGtCQUFrQjtRQUNsQkMsTUFBTTtZQUFDO1NBQUs7SUFDZDtJQUNBLE9BQU90QixJQUFJdUIsTUFBTSxDQUFDLEtBQUtiLElBQUksQ0FBQztRQUFFYyxRQUFRWCxTQUFTWSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7SUFBQztBQUN0RSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BhZ2VzL2FwaS9jaGF0LmpzPzM1NjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbiAgfSk7XG4gIGNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG4gIGNvbnN0IHF1ZXN0aW9uID0gcmVxLnF1ZXJ5LnE7XG4gIGlmICghcXVlc3Rpb24pXG4gICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IFwiUXVlc3Rpb24gaXMgbm90IHByb3ZpZGVkLCB5b3UgbmVlZCB0byBkbyB0aGlzIGR1ZGUgIVwiLFxuICAgIH0pO1xuXG4gIGNvbnN0IHByb210T3B0aW9ucyA9IGBROiAke3F1ZXN0aW9ufVxcbkE6YDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsXG4gICAgcHJvbXB0OiBwcm9tdE9wdGlvbnMsXG4gICAgdGVtcGVyYXR1cmU6IDAsXG4gICAgbWF4X3Rva2VuczogMTAwMCxcbiAgICB0b3BfcDogMSxcbiAgICBmcmVxdWVuY3lfcGVuYWx0eTogMC4wLFxuICAgIHByZXNlbmNlX3BlbmFsdHk6IDAuMCxcbiAgICBzdG9wOiBbXCJcXG5cIl0sXG4gIH0pO1xuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBhbnN3ZXI6IHJlc3BvbnNlLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pO1xufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInF1ZXN0aW9uIiwicXVlcnkiLCJxIiwianNvbiIsIm1lc3NhZ2UiLCJwcm9tdE9wdGlvbnMiLCJyZXNwb25zZSIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsInRvcF9wIiwiZnJlcXVlbmN5X3BlbmFsdHkiLCJwcmVzZW5jZV9wZW5hbHR5Iiwic3RvcCIsInN0YXR1cyIsImFuc3dlciIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/chat.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/chat.js"));
module.exports = __webpack_exports__;

})();