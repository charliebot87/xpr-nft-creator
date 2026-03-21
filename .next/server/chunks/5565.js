"use strict";
exports.id = 5565;
exports.ids = [5565];
exports.modules = {

/***/ 2907:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _ualAnchor = __webpack_require__(2963);
module.exports = {
    xpr: {
        name: "XPR Network",
        imageUrl: "/xpr-icon-white.png",
        authenticators: [
            _ualAnchor.Anchor
        ],
        aaEndpoint: "https://xpr.api.atomicassets.io",
        chainId: "384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0",
        protocol: "https",
        host: "api.protonnz.com",
        port: "443"
    }
};


/***/ }),

/***/ 8125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 8000
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ collectionTabs)
/* harmony export */ });
const collectionTabs = [
    {
        name: "Details",
        key: "details"
    },
    {
        name: "Schemas",
        key: "schemas"
    },
    {
        name: "Templates",
        key: "templates"
    },
    {
        name: "NFTs",
        key: "nfts"
    },
    {
        name: "Accounts",
        key: "accounts"
    },
    {
        name: "For Sale",
        key: "for-sale"
    }
];


/***/ })

};
;