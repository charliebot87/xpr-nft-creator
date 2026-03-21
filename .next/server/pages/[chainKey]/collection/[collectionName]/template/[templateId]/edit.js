"use strict";
(() => {
var exports = {};
exports.id = 6346;
exports.ids = [6346];
exports.modules = {

/***/ 7999:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6268);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1185);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_template_getTemplateService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5691);
/* harmony import */ var _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8014);
/* harmony import */ var _services_template_lockTemplateService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3883);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3007);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8820);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5334);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6903);
/* harmony import */ var _hooks_usePermission__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7534);
/* harmony import */ var _utils_handlePreview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6071);
/* harmony import */ var _utils_isResourceError__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1295);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_6__, _services_template_getTemplateService__WEBPACK_IMPORTED_MODULE_8__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_9__, _components_Modal__WEBPACK_IMPORTED_MODULE_11__, _components_Header__WEBPACK_IMPORTED_MODULE_12__, _utils_handlePreview__WEBPACK_IMPORTED_MODULE_14__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_6__, _services_template_getTemplateService__WEBPACK_IMPORTED_MODULE_8__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_9__, _components_Modal__WEBPACK_IMPORTED_MODULE_11__, _components_Header__WEBPACK_IMPORTED_MODULE_12__, _utils_handlePreview__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















function EditTemplate({ ual , collection , template , chainKey  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { PermissionDenied  } = (0,_hooks_usePermission__WEBPACK_IMPORTED_MODULE_13__/* .usePermission */ .g)({
        loggedAccountName: ual?.activeUser?.accountName,
        collectionAuthor: collection.author,
        collectionAuthorizedAccounts: collection.authorized_accounts
    });
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isSaved, setIsSaved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        message: "",
        details: "",
        isError: false,
        resourceError: false
    });
    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils_handlePreview__WEBPACK_IMPORTED_MODULE_14__/* .handlePreview */ .G)(template, setImages);
    }, [
        template
    ]);
    const enableLock = Number(template.issued_supply) > 0;
    const lockedTemplate = Number(template.issued_supply) === Number(template.max_supply);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setIsSaved(false);
        }, 2000);
        return ()=>clearTimeout(timer);
    }, [
        isSaved
    ]);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setIsLoading(true);
        try {
            await (0,_services_template_lockTemplateService__WEBPACK_IMPORTED_MODULE_15__/* .lockTemplateService */ .F)({
                activeUser: ual.activeUser,
                authorized_editor: ual.activeUser.accountName,
                collection_name: collection.collection_name,
                template_id: template.template_id
            });
            setIsSaved(true);
            modalRef.current?.openModal();
            const title = "Template was successfully locked";
            const message = "Please wait while we redirect you.";
            setModal({
                title,
                message
            });
            setTimeout(()=>{
                router.push(`/${chainKey}/collection/${collection.collection_name}/template/${template.template_id}`);
                setIsSaved(false);
            }, 3000);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message1 = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to lock the template";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_16__/* .isResourceError */ ._)(message1);
            setModal({
                title: "Error",
                message: message1,
                details,
                isError: true,
                resourceError
            });
        }
        setIsLoading(false);
    };
    if (PermissionDenied) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PermissionDenied, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `Update template #${template.template_id} - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_17__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Header__WEBPACK_IMPORTED_MODULE_12__/* .Header.Root */ .h.Root, {
                border: true,
                breadcrumb: [
                    [
                        "My Collections",
                        `/${chainKey}`
                    ],
                    [
                        collection.collection_name,
                        `/${chainKey}/collection/${collection.collection_name}`
                    ],
                    [
                        _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_10__/* .collectionTabs[2].name */ .J[2].name,
                        `/${chainKey}/collection/${collection.collection_name}?tab=${_utils_collectionTabs__WEBPACK_IMPORTED_MODULE_10__/* .collectionTabs[2].key */ .J[2].key}`
                    ],
                    [
                        `${template.name}`,
                        `/${chainKey}/collection/${collection.collection_name}/template/${template.template_id}`
                    ],
                    [
                        "Update"
                    ]
                ],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__/* .Header.Content */ .h.Content, {
                        title: template.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__/* .Header.Banner */ .h.Banner, {
                        images: images
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_11__/* .Modal */ .u, {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.CircleNotch, {
                                size: 24,
                                weight: "bold",
                                className: "animate-spin"
                            }),
                            "Redirecting..."
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Disclosure, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row gap-4 items-baseline",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Disclosure.Button, {
                                        className: "btn btn-small mt-4",
                                        children: "Details"
                                    }),
                                    modal.resourceError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: `/${chainKey}/resources`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "btn btn-small",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Manage resources"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Disclosure.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                    className: "overflow-auto p-4 rounded-lg bg-neutral-700 max-h-96 mt-4",
                                    children: modal.details
                                })
                            })
                        ]
                    })
                ]
            }),
            lockedTemplate ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto py-16 flex flex-col gap-4 items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "headline-3 text-amber-400",
                        children: "Locked template"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "body-1",
                        children: "The max supply is already locked to the current issued supply."
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto py-16 flex flex-col gap-8 items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-2 text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "body-1",
                                children: "Locking will prevent further copies of this template from being created."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "body-1",
                                children: "The max supply will be locked to the current issued supply."
                            })
                        ]
                    }),
                    !enableLock && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "headline-3 text-amber-400",
                        children: "You can't lock a template with no NFTs minted."
                    }),
                    isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.CircleNotch, {
                                size: 24,
                                weight: "bold",
                                className: "animate-spin"
                            }),
                            "Loading..."
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: `btn w-fit whitespace-nowrap ${isSaved && "animate-pulse bg-emerald-600"}`,
                        onClick: handleSubmit,
                        disabled: !enableLock,
                        children: isSaved ? "Saved" : "Lock template"
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async ({ params  })=>{
    const chainKey = params.chainKey;
    const collectionName = params.collectionName;
    const templateId = params.templateId;
    const [{ data: collection  }, { data: template  }] = await Promise.all([
        (0,_services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_9__/* .getCollectionService */ .R)(chainKey, {
            collectionName
        }),
        (0,_services_template_getTemplateService__WEBPACK_IMPORTED_MODULE_8__/* .getTemplateService */ .K)(chainKey, {
            collectionName,
            templateId
        })
    ]);
    return {
        props: {
            chainKey,
            collection: collection.data,
            template: template.data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_5__/* .withUAL */ .D)(EditTemplate));

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

/***/ }),

/***/ 5691:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ getTemplateService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getTemplateService(chainKey, { collectionName , templateId  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/templates/${collectionName}/${templateId}`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url);
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ lockTemplateService)
/* harmony export */ });
async function lockTemplateService({ activeUser , authorized_editor , collection_name , template_id  }) {
    const response = await activeUser.signTransaction({
        actions: [
            {
                account: "atomicassets",
                name: "locktemplate",
                authorization: [
                    {
                        actor: activeUser.accountName,
                        permission: activeUser.requestPermission
                    }
                ],
                data: {
                    authorized_editor,
                    collection_name,
                    template_id
                }
            }
        ]
    }, {
        blocksBehind: 3,
        expireSeconds: 30
    });
    return response;
}


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


/***/ }),

/***/ 2033:
/***/ ((module) => {

module.exports = require("@proton/js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9628:
/***/ ((module) => {

module.exports = require("phosphor-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 3789:
/***/ ((module) => {

module.exports = require("react-swipeable");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2963:
/***/ ((module) => {

module.exports = require("ual-anchor");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 9893:
/***/ ((module) => {

module.exports = import("is-ipfs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,8820,5565,7534,6071], () => (__webpack_exec__(7999)));
module.exports = __webpack_exports__;

})();