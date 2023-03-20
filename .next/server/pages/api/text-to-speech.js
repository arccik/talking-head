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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _google_cloud_text_to_speech__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google-cloud/text-to-speech */ \"@google-cloud/text-to-speech\");\n/* harmony import */ var _google_cloud_text_to_speech__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_google_cloud_text_to_speech__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new (_google_cloud_text_to_speech__WEBPACK_IMPORTED_MODULE_0___default().TextToSpeechClient)();\n// TODO: This code has been completed, check where you want to save file because you cannot pass them to the client\nasync function handler(req, res) {\n    const textToSynth = req.query.text;\n    const text = textToSynth || \"Hello\";\n    const request = {\n        input: {\n            text: text\n        },\n        // Select the language and SSML voice gender (optional)\n        voice: {\n            languageCode: \"en-GB\",\n            ssmlGender: \"NEUTRAL\"\n        },\n        // select the type of audio encoding\n        audioConfig: {\n            audioEncoding: \"MP3\"\n        }\n    };\n    const [response] = await client.synthesizeSpeech(request);\n    // Write the binary audio content to a local file\n    // const writeFile = util.promisify(fs.writeFile);\n    // await writeFile(\"output.mp3\", response.audioContent, \"binary\");\n    console.log(\"Google Responded\");\n    res.setHeader(\"Content-Type\", \"audio/mpeg\");\n    return res.send(response.audioContent);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RleHQtdG8tc3BlZWNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RDtBQUV4RCxNQUFNQyxTQUFTLElBQUlELHdGQUErQjtBQUVsRCxtSEFBbUg7QUFDcEcsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsY0FBY0YsSUFBSUcsS0FBSyxDQUFDQyxJQUFJO0lBQ2xDLE1BQU1BLE9BQU9GLGVBQWU7SUFDNUIsTUFBTUcsVUFBVTtRQUNkQyxPQUFPO1lBQUVGLE1BQU1BO1FBQUs7UUFDcEIsdURBQXVEO1FBQ3ZERyxPQUFPO1lBQUVDLGNBQWM7WUFBU0MsWUFBWTtRQUFVO1FBQ3RELG9DQUFvQztRQUNwQ0MsYUFBYTtZQUFFQyxlQUFlO1FBQU07SUFDdEM7SUFDQSxNQUFNLENBQUNDLFNBQVMsR0FBRyxNQUFNZixPQUFPZ0IsZ0JBQWdCLENBQUNSO0lBQ2pELGlEQUFpRDtJQUNqRCxrREFBa0Q7SUFDbEQsa0VBQWtFO0lBQ2xFUyxRQUFRQyxHQUFHLENBQUM7SUFDWmQsSUFBSWUsU0FBUyxDQUFDLGdCQUFnQjtJQUM5QixPQUFPZixJQUFJZ0IsSUFBSSxDQUFDTCxTQUFTTSxZQUFZO0FBQ3ZDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL3RleHQtdG8tc3BlZWNoLmpzPzE0ZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRleHRUb1NwZWVjaCBmcm9tIFwiQGdvb2dsZS1jbG91ZC90ZXh0LXRvLXNwZWVjaFwiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgdGV4dFRvU3BlZWNoLlRleHRUb1NwZWVjaENsaWVudCgpO1xuXG4vLyBUT0RPOiBUaGlzIGNvZGUgaGFzIGJlZW4gY29tcGxldGVkLCBjaGVjayB3aGVyZSB5b3Ugd2FudCB0byBzYXZlIGZpbGUgYmVjYXVzZSB5b3UgY2Fubm90IHBhc3MgdGhlbSB0byB0aGUgY2xpZW50XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHRleHRUb1N5bnRoID0gcmVxLnF1ZXJ5LnRleHQ7XG4gIGNvbnN0IHRleHQgPSB0ZXh0VG9TeW50aCB8fCBcIkhlbGxvXCI7XG4gIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgaW5wdXQ6IHsgdGV4dDogdGV4dCB9LFxuICAgIC8vIFNlbGVjdCB0aGUgbGFuZ3VhZ2UgYW5kIFNTTUwgdm9pY2UgZ2VuZGVyIChvcHRpb25hbClcbiAgICB2b2ljZTogeyBsYW5ndWFnZUNvZGU6IFwiZW4tR0JcIiwgc3NtbEdlbmRlcjogXCJORVVUUkFMXCIgfSxcbiAgICAvLyBzZWxlY3QgdGhlIHR5cGUgb2YgYXVkaW8gZW5jb2RpbmdcbiAgICBhdWRpb0NvbmZpZzogeyBhdWRpb0VuY29kaW5nOiBcIk1QM1wiIH0sXG4gIH07XG4gIGNvbnN0IFtyZXNwb25zZV0gPSBhd2FpdCBjbGllbnQuc3ludGhlc2l6ZVNwZWVjaChyZXF1ZXN0KTtcbiAgLy8gV3JpdGUgdGhlIGJpbmFyeSBhdWRpbyBjb250ZW50IHRvIGEgbG9jYWwgZmlsZVxuICAvLyBjb25zdCB3cml0ZUZpbGUgPSB1dGlsLnByb21pc2lmeShmcy53cml0ZUZpbGUpO1xuICAvLyBhd2FpdCB3cml0ZUZpbGUoXCJvdXRwdXQubXAzXCIsIHJlc3BvbnNlLmF1ZGlvQ29udGVudCwgXCJiaW5hcnlcIik7XG4gIGNvbnNvbGUubG9nKFwiR29vZ2xlIFJlc3BvbmRlZFwiKTtcbiAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImF1ZGlvL21wZWdcIik7XG4gIHJldHVybiByZXMuc2VuZChyZXNwb25zZS5hdWRpb0NvbnRlbnQpO1xufVxuIl0sIm5hbWVzIjpbInRleHRUb1NwZWVjaCIsImNsaWVudCIsIlRleHRUb1NwZWVjaENsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0ZXh0VG9TeW50aCIsInF1ZXJ5IiwidGV4dCIsInJlcXVlc3QiLCJpbnB1dCIsInZvaWNlIiwibGFuZ3VhZ2VDb2RlIiwic3NtbEdlbmRlciIsImF1ZGlvQ29uZmlnIiwiYXVkaW9FbmNvZGluZyIsInJlc3BvbnNlIiwic3ludGhlc2l6ZVNwZWVjaCIsImNvbnNvbGUiLCJsb2ciLCJzZXRIZWFkZXIiLCJzZW5kIiwiYXVkaW9Db250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/text-to-speech.js\n");

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