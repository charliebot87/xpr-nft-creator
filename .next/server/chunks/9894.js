"use strict";
exports.id = 9894;
exports.ids = [9894];
exports.modules = {

/***/ 6942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BaseField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6840);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Select({ icon , label , hint , error , onChange , selectedValue , options , placeholder  }) {
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedValue);
    const selectedOption = options.find((option)=>option.value === selected);
    function handleChange(value) {
        setSelected(value);
        onChange(value);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox, {
        as: "div",
        className: "relative",
        value: selected,
        onChange: handleChange,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BaseField__WEBPACK_IMPORTED_MODULE_2__/* .BaseField */ .n, {
                icon: icon,
                label: label,
                hint: hint,
                error: error,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox.Button, {
                    className: "flex gap-1 w-full text-left py-[0.875rem] bg-transparent body-1 text-white placeholder:text-neutral-500 focus:outline-none",
                    children: [
                        selectedOption ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "flex-1 truncate",
                            children: selectedOption?.label
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "flex-1 truncate text-neutral-500",
                            children: placeholder
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_4__.CaretDown, {
                            size: 24,
                            className: "flex-none",
                            "aria-hidden": "true"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                leave: "transition ease-in duration-100",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox.Options, {
                    className: "absolute py-2 mt-1 max-h-60 w-full overflow-auto rounded bg-neutral-800 border border-neutral-700 body-2 focus:outline-none z-10",
                    children: options.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox.Option, {
                            value: option.value,
                            className: "py-2 px-8 ui-active:bg-neutral-700",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ui-selected:font-bold",
                                children: option.label
                            })
                        }, option.value))
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ isResourceError)
/* harmony export */ });
function isResourceError(str) {
    const message = str.toLowerCase();
    const resourceError = message.includes("cpu") || message.includes("ram") || message.includes("net");
    return resourceError;
}


/***/ })

};
;