"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,6903];
exports.modules = {

/***/ 6903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ap": () => (/* binding */ metaIcon),
/* harmony export */   "DJ": () => (/* binding */ appName),
/* harmony export */   "FB": () => (/* binding */ appDescription),
/* harmony export */   "Gd": () => (/* binding */ appUrl),
/* harmony export */   "Ge": () => (/* binding */ ipfsEndpoint),
/* harmony export */   "Ly": () => (/* binding */ chainKeyDefault),
/* harmony export */   "bu": () => (/* binding */ ipfsJwt),
/* harmony export */   "yb": () => (/* binding */ favicon)
/* harmony export */ });
/* unused harmony export requestAccount */
const favicon = "/favicon.ico";
const appName = "XPR NFT Creator";
const ipfsJwt = "";
const ipfsEndpoint = "https://agent.mypinata.cloud/ipfs";
const appDescription = "Create, manage, and airdrop AtomicAssets NFTs on XPR Network. Powered by WebAuth wallet.";
const chainKeyDefault = "xpr";
const metaIcon = "https://nft.charliebot.dev/og-image.png";
const appUrl = "https://nft.charliebot.dev";
const requestAccount = (/* unused pure expression or super */ null && ("protonnz"));


/***/ }),

/***/ 5970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6903);



function Home() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
            name: "robots",
            content: "noindex"
        })
    });
}
async function getServerSideProps() {
    const destination = _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_2__/* .chainKeyDefault */ .Ly;
    return {
        redirect: {
            destination,
            permanent: true
        }
    };
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5970));
module.exports = __webpack_exports__;

})();