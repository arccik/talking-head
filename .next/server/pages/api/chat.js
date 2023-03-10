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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n        apiKey: process.env.OPENAI_API_KEY\n    });\n    const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n    const question = req.query.q;\n    if (!question) return res.json({\n        message: \"Question is not provided, you need to do this dude !\"\n    });\n    const promtOptions = `Q: ${question}\\nA:`;\n    const response = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: promtOptions,\n        temperature: 0,\n        max_tokens: 2000,\n        top_p: 1,\n        frequency_penalty: 0.0,\n        presence_penalty: 0.0,\n        stop: [\n            \"\\n\"\n        ]\n    });\n    return res.status(200).json({\n        answer: response.data.choices[0].text\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBRTNCO0FBRW5DLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLGdCQUFnQixJQUFJTCxpREFBYUEsQ0FBQztRQUN0Q00sUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0lBQ3BDO0lBQ0EsTUFBTUMsU0FBUyxJQUFJVCw2Q0FBU0EsQ0FBQ0k7SUFDN0IsTUFBTU0sV0FBV1IsSUFBSVMsS0FBSyxDQUFDQyxDQUFDO0lBRTVCLElBQUksQ0FBQ0YsVUFDSCxPQUFPUCxJQUFJVSxJQUFJLENBQUM7UUFDZEMsU0FBUztJQUNYO0lBRUYsTUFBTUMsZUFBZSxDQUFDLEdBQUcsRUFBRUwsU0FBUyxJQUFJLENBQUM7SUFFekMsTUFBTU0sV0FBVyxNQUFNUCxPQUFPUSxnQkFBZ0IsQ0FBQztRQUM3Q0MsT0FBTztRQUNQQyxRQUFRSjtRQUNSSyxhQUFhO1FBQ2JDLFlBQVk7UUFDWkMsT0FBTztRQUNQQyxtQkFBbUI7UUFDbkJDLGtCQUFrQjtRQUNsQkMsTUFBTTtZQUFDO1NBQUs7SUFDZDtJQUNBLE9BQU90QixJQUFJdUIsTUFBTSxDQUFDLEtBQUtiLElBQUksQ0FBQztRQUFFYyxRQUFRWCxTQUFTWSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7SUFBQztBQUN0RSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BhZ2VzL2FwaS9jaGF0LmpzPzM1NjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbiAgfSk7XG4gIGNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG4gIGNvbnN0IHF1ZXN0aW9uID0gcmVxLnF1ZXJ5LnE7XG5cbiAgaWYgKCFxdWVzdGlvbilcbiAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgbWVzc2FnZTogXCJRdWVzdGlvbiBpcyBub3QgcHJvdmlkZWQsIHlvdSBuZWVkIHRvIGRvIHRoaXMgZHVkZSAhXCIsXG4gICAgfSk7XG5cbiAgY29uc3QgcHJvbXRPcHRpb25zID0gYFE6ICR7cXVlc3Rpb259XFxuQTpgO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgICBwcm9tcHQ6IHByb210T3B0aW9ucyxcbiAgICB0ZW1wZXJhdHVyZTogMCxcbiAgICBtYXhfdG9rZW5zOiAyMDAwLFxuICAgIHRvcF9wOiAxLFxuICAgIGZyZXF1ZW5jeV9wZW5hbHR5OiAwLjAsXG4gICAgcHJlc2VuY2VfcGVuYWx0eTogMC4wLFxuICAgIHN0b3A6IFtcIlxcblwiXSxcbiAgfSk7XG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGFuc3dlcjogcmVzcG9uc2UuZGF0YS5jaG9pY2VzWzBdLnRleHQgfSk7XG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicXVlc3Rpb24iLCJxdWVyeSIsInEiLCJqc29uIiwibWVzc2FnZSIsInByb210T3B0aW9ucyIsInJlc3BvbnNlIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwidG9wX3AiLCJmcmVxdWVuY3lfcGVuYWx0eSIsInByZXNlbmNlX3BlbmFsdHkiLCJzdG9wIiwic3RhdHVzIiwiYW5zd2VyIiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/chat.js\n");

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