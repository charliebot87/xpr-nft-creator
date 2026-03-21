"use strict";
exports.id = 3085;
exports.ids = [3085];
exports.modules = {

/***/ 3594:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ collectionSchemasService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function collectionSchemasService(chainKey, { collectionName , page , offset  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/schemas?collection_name=${collectionName}`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url, {
        params: {
            page: page || 1,
            limit: 12,
            offset: offset || 12,
            order: "desc",
            sort: "created"
        }
    });
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ collectionTemplatesService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function collectionTemplatesService(chainKey, { collectionName , page , offset , templateId  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/templates`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url, {
        params: {
            collection_name: collectionName || "",
            template_id: templateId || "",
            page: page || 1,
            limit: 12,
            offset: offset || 12,
            order: "desc",
            sort: "created"
        }
    });
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getCollectionService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getCollectionService(chainKey, { collectionName  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/collections/${collectionName}`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url);
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;