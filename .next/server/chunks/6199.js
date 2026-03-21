"use strict";
exports.id = 6199;
exports.ids = [6199];
exports.modules = {

/***/ 6199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Attributes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var is_ipfs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9893);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([is_ipfs__WEBPACK_IMPORTED_MODULE_1__]);
is_ipfs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function AttributesList({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full px-4 mx-auto pb-8",
        children: children
    });
}
function AttributesItem({ name , value , type  }) {
    if (!value) return;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between items-center py-3 body-2 gap-8 text-white border-b border-neutral-700",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: name
            }),
            type === "bool" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-bold break-keep",
                children: `${Boolean(value)}`
            }) : is_ipfs__WEBPACK_IMPORTED_MODULE_1__.cid(value) || is_ipfs__WEBPACK_IMPORTED_MODULE_1__.cidPath(value) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_2__/* .ipfsEndpoint */ .Ge}/${value}`,
                className: "font-bold underline break-all",
                target: "_blank",
                rel: "noreferrer",
                children: value
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-bold break-keep",
                children: value
            })
        ]
    });
}
const Attributes = {
    List: AttributesList,
    Item: AttributesItem
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;