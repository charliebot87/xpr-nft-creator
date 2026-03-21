"use strict";
exports.id = 6840;
exports.ids = [6840];
exports.modules = {

/***/ 6840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ BaseField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_1__);


function BaseField({ icon , label , hint , error , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
        className: "block w-full",
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "block body-2 font-bold text-white mb-2 truncate",
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `flex gap-2 px-[calc(1rem-1px)] rounded bg-neutral-800 border focus-within:border-white focus-within:bg-neutral-700 ${error ? "border-red-600" : "border-neutral-700"}`,
                children: [
                    icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-none text-neutral-500 pt-[calc(1rem-1px)]",
                        children: icon
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1 w-full",
                        children: children
                    }),
                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-none text-red-600 pt-[calc(1rem-1px)]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_1__.WarningCircle, {
                            size: 24
                        })
                    })
                ]
            }),
            error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "block body-3 text-red-600 mt-2",
                children: error
            }) : hint && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "block body-3 text-neutral-400 mt-2",
                children: hint
            })
        ]
    });
}


/***/ })

};
;