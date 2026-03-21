(() => {
var exports = {};
exports.id = 6128;
exports.ids = [6128];
exports.modules = {

/***/ 5740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BaseField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6840);



function InputComponent({ icon , label , hint , error , ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BaseField__WEBPACK_IMPORTED_MODULE_2__/* .BaseField */ .n, {
        icon: icon,
        label: label,
        hint: hint,
        error: error,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            ...props,
            ref: ref,
            className: "w-full block py-[0.875rem] bg-transparent body-1 text-white placeholder:text-neutral-500 focus:outline-none"
        })
    });
}
const Input = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(InputComponent);


/***/ }),

/***/ 1754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ ResourceCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-circular-progressbar"
const external_react_circular_progressbar_namespaceObject = require("react-circular-progressbar");
// EXTERNAL MODULE: ./node_modules/react-circular-progressbar/dist/styles.css
var styles = __webpack_require__(1121);
// EXTERNAL MODULE: ./src/components/Input.tsx
var Input = __webpack_require__(5740);
;// CONCATENATED MODULE: ./src/components/ResourceCard.tsx





function ResourceCard({ ual , percentage , resource , label , chainKey , callback  }) {
    const [inputValue, setInputValue] = (0,external_react_.useState)("1");
    const isWaxChain = false;
    const resourceChain = "XPR";
    function handleActions() {
        const actions = [];
        const unstakeActions = [];
        const resourceValue = `${parseInt(inputValue).toFixed(4)} ${resourceChain}`;
        const defaultValue = `${"0.0000"} ${resourceChain}`;
        if (isWaxChain) {
            actions.push({
                account: "bw.facings",
                name: "boost",
                authorization: [
                    {
                        actor: ual.activeUser.accountName,
                        permission: ual.activeUser.requestPermission
                    }
                ],
                data: {}
            });
        }
        if (resource === "RAM") {
            actions.push({
                account: "eosio",
                name: "buyram",
                authorization: [
                    {
                        actor: ual.activeUser.accountName,
                        permission: ual.activeUser.requestPermission
                    }
                ],
                data: {
                    payer: ual.activeUser.accountName,
                    receiver: ual.activeUser.accountName,
                    quant: resourceValue
                }
            });
            unstakeActions.push({
                account: "eosio",
                name: "sellram",
                authorization: [
                    {
                        actor: ual.activeUser.accountName,
                        permission: ual.activeUser.requestPermission
                    }
                ],
                data: {
                    account: ual.activeUser.accountName,
                    bytes: inputValue
                }
            });
        } else {
            actions.push({
                account: "eosio",
                name: "delegatebw",
                authorization: [
                    {
                        actor: ual.activeUser.accountName,
                        permission: ual.activeUser.requestPermission
                    }
                ],
                data: {
                    from: ual.activeUser.accountName,
                    receiver: ual.activeUser.accountName,
                    stake_net_quantity: resource === "NET" ? resourceValue : defaultValue,
                    stake_cpu_quantity: resource === "CPU" ? resourceValue : defaultValue,
                    transfer: false
                }
            });
            unstakeActions.push({
                account: "eosio",
                name: "undelegatebw",
                authorization: [
                    {
                        actor: ual.activeUser.accountName,
                        permission: ual.activeUser.requestPermission
                    }
                ],
                data: {
                    from: ual.activeUser.accountName,
                    receiver: ual.activeUser.accountName,
                    unstake_net_quantity: resource === "NET" ? resourceValue : defaultValue,
                    unstake_cpu_quantity: resource === "CPU" ? resourceValue : defaultValue,
                    transfer: false
                }
            });
        }
        return {
            stake: actions,
            unstake: unstakeActions
        };
    }
    const actions = handleActions();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col gap-8 bg-neutral-800 p-8 w-60 rounded items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col gap-2 items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex px-4 pt-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_circular_progressbar_namespaceObject.CircularProgressbar, {
                            value: percentage,
                            text: `${percentage}%`,
                            circleRatio: 0.75,
                            styles: (0,external_react_circular_progressbar_namespaceObject.buildStyles)({
                                rotation: 1 / 2 + 1 / 8,
                                trailColor: "#404040",
                                textColor: "white",
                                pathColor: isWaxChain ? "#ffd238" : "#0f4fe3"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "headline-2",
                        children: resource
                    })
                ]
            }),
            isWaxChain && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Input/* Input */.I, {
                        label: `Amount of ${resource}`,
                        defaultValue: 1,
                        type: "number",
                        onChange: (e)=>setInputValue(e.target.value)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn w-full",
                        onClick: ()=>callback(actions.stake),
                        children: label
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn w-full",
                        onClick: ()=>callback(actions.unstake),
                        children: label === "Stake" ? "Unstake" : "Sell"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2907:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

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

/***/ 4489:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6268);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1185);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8820);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5334);
/* harmony import */ var _components_ResourceCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1754);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_account_getAccount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8220);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6903);
/* harmony import */ var _services_resources_stakeResources__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3773);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_5__, _components_Modal__WEBPACK_IMPORTED_MODULE_7__, _components_Header__WEBPACK_IMPORTED_MODULE_8__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_5__, _components_Modal__WEBPACK_IMPORTED_MODULE_7__, _components_Header__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Resources({ ual  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const chainKey = router.query.chainKey ?? _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_12__/* .chainKeyDefault */ .Ly;
    const chainIdLogged = ual?.activeUser?.chainId ?? ual?.activeUser?.chain.chainId;
    const chainId = _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_10__[chainKey].chainId;
    const [accountResources, setAccountResources] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [liquidBalance, setLiquidBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("0.0000");
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        message: "",
        details: "",
        isError: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!!chainId && !!chainIdLogged && chainId === chainIdLogged) {
            async function handleResources(actions) {
                try {
                    await (0,_services_resources_stakeResources__WEBPACK_IMPORTED_MODULE_13__/* .stakeResources */ .H)({
                        activeUser: ual.activeUser,
                        actions
                    });
                    modalRef.current?.openModal();
                    const title = "Resource was successfully updated";
                    const message = "Please wait while we refresh the page.";
                    setModal({
                        title,
                        message
                    });
                    setTimeout(()=>{
                        router.reload();
                    }, 3000);
                } catch (error) {
                    modalRef.current?.openModal();
                    const jsonError = JSON.parse(JSON.stringify(error));
                    const details = JSON.stringify(error, undefined, 2);
                    const message1 = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to stake/buy resources";
                    setModal({
                        title: "Error",
                        message: message1,
                        details,
                        isError: true
                    });
                }
            }
            async function loadResources() {
                try {
                    const { accountName  } = ual.activeUser;
                    const result = await (0,_services_account_getAccount__WEBPACK_IMPORTED_MODULE_11__/* .getAccount */ .D)(chainKey, {
                        accountName
                    });
                    if (result.core_liquid_balance) {
                        setLiquidBalance(result.core_liquid_balance);
                    }
                    const resources = [
                        {
                            percentage: (result.cpu_limit.available * 100 / result.cpu_limit.max).toFixed(2),
                            resource: "CPU",
                            label: "Stake",
                            callback: handleResources
                        },
                        {
                            percentage: (result.net_limit.available * 100 / result.net_limit.max).toFixed(2),
                            resource: "NET",
                            label: "Stake",
                            callback: handleResources
                        },
                        {
                            percentage: ((result.ram_quota - result.ram_usage) * 100 / result.ram_quota).toFixed(2),
                            resource: "RAM",
                            label: "Buy",
                            callback: handleResources
                        }
                    ];
                    setAccountResources(resources);
                } catch (error) {
                    modalRef.current?.openModal();
                    const jsonError = JSON.parse(JSON.stringify(error));
                    const details = JSON.stringify(error, undefined, 2);
                    const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to get user resources";
                    setModal({
                        title: "Error",
                        message,
                        details,
                        isError: true
                    });
                }
            }
            loadResources();
        }
    }, [
        ual,
        chainKey,
        chainIdLogged,
        chainId,
        router
    ]);
    function handleLogin() {
        ual?.showModal();
    }
    if (!!chainId && !!chainIdLogged && chainId === chainIdLogged) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `Resources - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_12__/* .appName */ .DJ}`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__/* .Header.Root */ .h.Root, {
                    border: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__/* .Header.Content */ .h.Content, {
                        title: "Resources"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "headline-2 mt-4 md:mt-8",
                            children: [
                                "Available - ",
                                liquidBalance
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex md:flex-row flex-col gap-8 items-center md:my-16 my-8",
                            children: accountResources.map((item, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ResourceCard__WEBPACK_IMPORTED_MODULE_9__/* .ResourceCard */ .P, {
                                    ual: ual,
                                    label: item.label,
                                    chainKey: chainKey,
                                    resource: item.resource,
                                    callback: item.callback,
                                    percentage: Number(item.percentage)
                                }, index);
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_7__/* .Modal */ .u, {
                    ref: modalRef,
                    title: modal.title,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "body-2 mt-2",
                            children: modal.message
                        }),
                        !modal.isError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "flex gap-2 items-center py-4 body-2 font-bold text-white",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CircleNotch, {
                                    size: 24,
                                    weight: "bold",
                                    className: "animate-spin"
                                }),
                                "Refreshing..."
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Button, {
                                    className: "btn btn-small mt-4",
                                    children: "Details"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Panel, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                        className: "overflow-auto p-4 rounded-lg bg-neutral-700 max-h-96 mt-4",
                                        children: modal.details
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `Resources - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_12__/* .appName */ .DJ}`
                })
            }),
            !ual?.activeUser && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto my-14 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "headline-2",
                        children: "Connect your wallet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "body-1 mt-2 mb-6",
                        children: "You need to connect your wallet to manage your resources"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "btn",
                        onClick: handleLogin,
                        children: "Connect Wallet"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_4__/* .withUAL */ .D)(Resources));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ getAccount)
});

;// CONCATENATED MODULE: external "eosjs"
const external_eosjs_namespaceObject = require("eosjs");
// EXTERNAL MODULE: ./src/configs/chainsConfig.ts
var chainsConfig = __webpack_require__(2907);
;// CONCATENATED MODULE: ./src/services/account/getAccount.ts


async function getAccount(chainKey, { accountName  }) {
    const rpcEndpoint = `${chainsConfig[chainKey].protocol}://${chainsConfig[chainKey].host}`;
    const rpc = new external_eosjs_namespaceObject.JsonRpc(rpcEndpoint, {
        fetch
    });
    const response = await rpc.get_account(accountName);
    return response;
}


/***/ }),

/***/ 3773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ stakeResources)
/* harmony export */ });
async function stakeResources({ activeUser , actions  }) {
    const response = await activeUser.signTransaction({
        actions
    }, {
        blocksBehind: 3,
        expireSeconds: 30
    });
    return response;
}


/***/ }),

/***/ 1121:
/***/ (() => {



/***/ }),

/***/ 2033:
/***/ ((module) => {

"use strict";
module.exports = require("@proton/js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9628:
/***/ ((module) => {

"use strict";
module.exports = require("phosphor-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 3789:
/***/ ((module) => {

"use strict";
module.exports = require("react-swipeable");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2963:
/***/ ((module) => {

"use strict";
module.exports = require("ual-anchor");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,8820,6840], () => (__webpack_exec__(4489)));
module.exports = __webpack_exports__;

})();