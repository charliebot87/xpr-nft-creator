"use strict";
exports.id = 3267;
exports.ids = [3267];
exports.modules = {

/***/ 3267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomSeedService": () => (/* binding */ getRandomSeedService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getRandomSeedService() {
    try {
        const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get("https://www.random.org/strings/", {
            params: {
                num: 1,
                len: 8,
                digits: "on",
                upperalpha: "on",
                loweralpha: "on",
                unique: "on",
                format: "plain",
                rnd: "new"
            }
        });
        return response.data.trim();
    } catch (error) {
        console.error("Error fetching random seed:", error.message);
        return null;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;