"use strict";
exports.id = 9701;
exports.ids = [9701];
exports.modules = {

/***/ 762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ CardContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CardContainer({ children , style  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: style || "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6",
        children: children
    });
}


/***/ }),

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

/***/ 2736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ listCollectionsService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const listCollectionsService = async (chainKey, options)=>{
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/collections`;
    const { page =1 , offset =0 , author , match , authorizedAccount  } = options;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url, {
        params: {
            author,
            match,
            authorized_account: authorizedAccount,
            page,
            limit: 12,
            offset,
            order: "desc",
            sort: "created"
        }
    });
    return response;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;