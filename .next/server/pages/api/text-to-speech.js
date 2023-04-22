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
exports.id = "pages/api/text-to-speech";
exports.ids = ["pages/api/text-to-speech"];
exports.modules = {

/***/ "@google-cloud/text-to-speech":
/*!***********************************************!*\
  !*** external "@google-cloud/text-to-speech" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@google-cloud/text-to-speech");

/***/ }),

/***/ "(api)/./src/pages/api/text-to-speech.js":
/*!*****************************************!*\
  !*** ./src/pages/api/text-to-speech.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _google_cloud_text_to_speech__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google-cloud/text-to-speech */ \"@google-cloud/text-to-speech\");\n/* harmony import */ var _google_cloud_text_to_speech__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_google_cloud_text_to_speech__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new (_google_cloud_text_to_speech__WEBPACK_IMPORTED_MODULE_0___default().TextToSpeechClient)();\nasync function handler(req, res) {\n    const textToSynth = req.query.text;\n    const text = textToSynth || \"Hello\";\n    const request = {\n        input: {\n            text: text\n        },\n        // Select the language and SSML voice gender (optional)\n        voice: {\n            languageCode: \"en-US\",\n            name: \"en-US-Studio-O\"\n        },\n        // select the type of audio encoding\n        audioConfig: {\n            audioEncoding: \"MP3\",\n            pitch: -1.6,\n            speakingRate: 0.85\n        }\n    };\n    const [response] = await client.synthesizeSpeech(request);\n    // Write the binary audio content to a local file\n    // const writeFile = util.promisify(fs.writeFile);\n    // await writeFile(\"output.mp3\", response.audioContent, \"binary\");\n    res.setHeader(\"Content-Type\", \"audio/mpeg\");\n    return res.send(response.audioContent);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RleHQtdG8tc3BlZWNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RDtBQUV4RCxNQUFNQyxTQUFTLElBQUlELHdGQUErQjtBQUVuQyxlQUFlRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxjQUFjRixJQUFJRyxLQUFLLENBQUNDLElBQUk7SUFDbEMsTUFBTUEsT0FBT0YsZUFBZTtJQUM1QixNQUFNRyxVQUFVO1FBQ2RDLE9BQU87WUFBRUYsTUFBTUE7UUFBSztRQUNwQix1REFBdUQ7UUFDdkRHLE9BQU87WUFBRUMsY0FBYztZQUFTQyxNQUFNO1FBQWlCO1FBQ3ZELG9DQUFvQztRQUNwQ0MsYUFBYTtZQUNYQyxlQUFlO1lBQU9DLE9BQU8sQ0FBQztZQUM5QkMsY0FBYztRQUVoQjtJQUNGO0lBQ0EsTUFBTSxDQUFDQyxTQUFTLEdBQUcsTUFBTWpCLE9BQU9rQixnQkFBZ0IsQ0FBQ1Y7SUFDakQsaURBQWlEO0lBQ2pELGtEQUFrRDtJQUNsRCxrRUFBa0U7SUFDbEVKLElBQUllLFNBQVMsQ0FBQyxnQkFBZ0I7SUFDOUIsT0FBT2YsSUFBSWdCLElBQUksQ0FBQ0gsU0FBU0ksWUFBWTtBQUN2QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BhZ2VzL2FwaS90ZXh0LXRvLXNwZWVjaC5qcz8xNGZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZXh0VG9TcGVlY2ggZnJvbSBcIkBnb29nbGUtY2xvdWQvdGV4dC10by1zcGVlY2hcIjtcblxuY29uc3QgY2xpZW50ID0gbmV3IHRleHRUb1NwZWVjaC5UZXh0VG9TcGVlY2hDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB0ZXh0VG9TeW50aCA9IHJlcS5xdWVyeS50ZXh0O1xuICBjb25zdCB0ZXh0ID0gdGV4dFRvU3ludGggfHwgXCJIZWxsb1wiO1xuICBjb25zdCByZXF1ZXN0ID0ge1xuICAgIGlucHV0OiB7IHRleHQ6IHRleHQgfSxcbiAgICAvLyBTZWxlY3QgdGhlIGxhbmd1YWdlIGFuZCBTU01MIHZvaWNlIGdlbmRlciAob3B0aW9uYWwpXG4gICAgdm9pY2U6IHsgbGFuZ3VhZ2VDb2RlOiBcImVuLVVTXCIsIG5hbWU6ICdlbi1VUy1TdHVkaW8tTycgfSxcbiAgICAvLyBzZWxlY3QgdGhlIHR5cGUgb2YgYXVkaW8gZW5jb2RpbmdcbiAgICBhdWRpb0NvbmZpZzoge1xuICAgICAgYXVkaW9FbmNvZGluZzogXCJNUDNcIiwgcGl0Y2g6IC0xLjYsXG4gICAgICBzcGVha2luZ1JhdGU6IDAuODUsXG4gICAgICAvLyB2b2x1bWVHYWluRGI6IDJcbiAgICB9LFxuICB9O1xuICBjb25zdCBbcmVzcG9uc2VdID0gYXdhaXQgY2xpZW50LnN5bnRoZXNpemVTcGVlY2gocmVxdWVzdCk7XG4gIC8vIFdyaXRlIHRoZSBiaW5hcnkgYXVkaW8gY29udGVudCB0byBhIGxvY2FsIGZpbGVcbiAgLy8gY29uc3Qgd3JpdGVGaWxlID0gdXRpbC5wcm9taXNpZnkoZnMud3JpdGVGaWxlKTtcbiAgLy8gYXdhaXQgd3JpdGVGaWxlKFwib3V0cHV0Lm1wM1wiLCByZXNwb25zZS5hdWRpb0NvbnRlbnQsIFwiYmluYXJ5XCIpO1xuICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXVkaW8vbXBlZ1wiKTtcbiAgcmV0dXJuIHJlcy5zZW5kKHJlc3BvbnNlLmF1ZGlvQ29udGVudCk7XG59XG4iXSwibmFtZXMiOlsidGV4dFRvU3BlZWNoIiwiY2xpZW50IiwiVGV4dFRvU3BlZWNoQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInRleHRUb1N5bnRoIiwicXVlcnkiLCJ0ZXh0IiwicmVxdWVzdCIsImlucHV0Iiwidm9pY2UiLCJsYW5ndWFnZUNvZGUiLCJuYW1lIiwiYXVkaW9Db25maWciLCJhdWRpb0VuY29kaW5nIiwicGl0Y2giLCJzcGVha2luZ1JhdGUiLCJyZXNwb25zZSIsInN5bnRoZXNpemVTcGVlY2giLCJzZXRIZWFkZXIiLCJzZW5kIiwiYXVkaW9Db250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/text-to-speech.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/text-to-speech.js"));
module.exports = __webpack_exports__;

})();