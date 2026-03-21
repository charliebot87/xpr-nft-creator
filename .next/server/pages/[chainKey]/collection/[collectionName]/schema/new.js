"use strict";
(() => {
var exports = {};
exports.id = 2227;
exports.ids = [2227];
exports.modules = {

/***/ 3628:
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
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6268);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1185);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_schema_createSchemaService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1065);
/* harmony import */ var _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8014);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5740);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8820);
/* harmony import */ var _components_schema_Attributes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9901);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5334);
/* harmony import */ var _hooks_usePermission__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7534);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3007);
/* harmony import */ var _utils_isResourceError__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1295);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_11__, _components_Modal__WEBPACK_IMPORTED_MODULE_13__, _components_schema_Attributes__WEBPACK_IMPORTED_MODULE_14__, _components_Header__WEBPACK_IMPORTED_MODULE_15__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_11__, _components_Modal__WEBPACK_IMPORTED_MODULE_13__, _components_schema_Attributes__WEBPACK_IMPORTED_MODULE_14__, _components_Header__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const defaultAttributes = [
    {
        name: "name",
        type: "string"
    }
];
const schema = yup__WEBPACK_IMPORTED_MODULE_10__.object().shape({
    schemaName: yup__WEBPACK_IMPORTED_MODULE_10__.string().eosName(),
    attributes: yup__WEBPACK_IMPORTED_MODULE_10__.array().of(yup__WEBPACK_IMPORTED_MODULE_10__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_10__.string().required().test("testDefaultAttributes", "Attribute has already used", (value)=>{
            const hasDefaultAttributeNameUsed = defaultAttributes.some((defaultAttribute)=>defaultAttribute.name === value);
            return !hasDefaultAttributeNameUsed;
        }).label("Attribute name")
    }))
});
function NewSchema({ ual , collection , chainKey  }) {
    const { PermissionDenied  } = (0,_hooks_usePermission__WEBPACK_IMPORTED_MODULE_16__/* .usePermission */ .g)({
        loggedAccountName: ual?.activeUser?.accountName,
        collectionAuthor: collection.author,
        collectionAuthorizedAccounts: collection.authorized_accounts
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const attributeModalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isSaved, setIsSaved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        message: "",
        details: "",
        isError: false,
        resourceError: false
    });
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__.yupResolver)(schema),
        defaultValues: {
            schemaName: "",
            attributes: [
                {
                    name: "img",
                    type: "image"
                },
                {
                    name: "video",
                    type: "string"
                }
            ]
        }
    });
    async function onSubmit({ schemaName , attributes  }) {
        const hasImageOrVideoAttribute = attributes.some((attribute)=>attribute.name === "img" && attribute.type === "image" || attribute.name === "video" && attribute.type === "string");
        if (!hasImageOrVideoAttribute) {
            attributeModalRef.current?.openModal();
            return;
        }
        setIsLoading(true);
        const schemaFormat = [
            ...defaultAttributes,
            ...attributes
        ];
        try {
            await (0,_services_schema_createSchemaService__WEBPACK_IMPORTED_MODULE_18__/* .createSchemaService */ .r)({
                activeUser: ual.activeUser,
                collectionName: collection.collection_name,
                schemaName,
                schemaFormat
            });
            setIsSaved(true);
            modalRef.current?.openModal();
            const title = "Schema was successfully created";
            const message = "Please wait while we redirect you.";
            setModal({
                title,
                message
            });
            async function redirect() {
                setIsSaved(false);
                router.push(`/${chainKey}/collection/${collection.collection_name}/schema/${schemaName}`);
            }
            setTimeout(redirect, 8000);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message1 = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to create schema";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_19__/* .isResourceError */ ._)(message1);
            setModal({
                title: "Error",
                message: message1,
                details,
                isError: true,
                resourceError
            });
        }
        setIsLoading(false);
    }
    if (PermissionDenied) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PermissionDenied, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `New Schema - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_20__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_15__/* .Header.Root */ .h.Root, {
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
                        _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_17__/* .collectionTabs[1].name */ .J[1].name,
                        `/${chainKey}/collection/${collection.collection_name}?tab=${_utils_collectionTabs__WEBPACK_IMPORTED_MODULE_17__/* .collectionTabs[1].key */ .J[1].key}`
                    ],
                    [
                        "New Schema"
                    ]
                ],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_15__/* .Header.Content */ .h.Content, {
                    title: "New Schema"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_13__/* .Modal */ .u, {
                ref: attributeModalRef,
                title: "Add img or video attribute",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "body-2 mt-2",
                    children: [
                        "Your schema must contain at least one ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "img"
                        }),
                        " attribute with type ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "Image"
                        }),
                        " or one ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "video"
                        }),
                        " ",
                        "attribute with type ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "Text"
                        }),
                        "."
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_13__/* .Modal */ .u, {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.CircleNotch, {
                                size: 24,
                                weight: "bold",
                                className: "animate-spin"
                            }),
                            "Redirecting..."
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row gap-4 items-baseline",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Button, {
                                        className: "btn btn-small mt-4",
                                        children: "Details"
                                    }),
                                    modal.resourceError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                    className: "overflow-auto p-4 rounded-lg bg-neutral-700 max-h-96 mt-4",
                                    children: modal.details
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.FormProvider, {
                ...methods,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: methods.handleSubmit(onSubmit),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container py-8",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full max-w-3xl flex flex-col gap-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_12__/* .Input */ .I, {
                                    ...methods.register("schemaName"),
                                    error: methods.formState.errors.schemaName?.message,
                                    label: "Schema name",
                                    hint: "Must be up to 12 characters (a-z, 1-5, .) and cannot end with a .",
                                    type: "text",
                                    maxLength: 12
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_schema_Attributes__WEBPACK_IMPORTED_MODULE_14__/* .Attributes */ .z, {
                                    attributes: defaultAttributes
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.CircleNotch, {
                                                size: 24,
                                                weight: "bold",
                                                className: "animate-spin"
                                            }),
                                            "Loading..."
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: `btn ${isSaved ? "animate-pulse bg-emerald-600" : ""}`,
                                        children: isSaved ? "Saved" : "Create schema"
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
const getServerSideProps = async ({ params  })=>{
    const chainKey = params.chainKey;
    const collectionName = params.collectionName;
    const { data: collection  } = await (0,_services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_11__/* .getCollectionService */ .R)(chainKey, {
        collectionName
    });
    return {
        props: {
            chainKey,
            collection: collection.data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_2__/* .withUAL */ .D)(NewSchema));

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

/***/ 1065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ createSchemaService)
/* harmony export */ });
async function createSchemaService({ activeUser , collectionName , schemaName , schemaFormat  }) {
    const response = await activeUser.signTransaction({
        actions: [
            {
                account: "atomicassets",
                name: "createschema",
                authorization: [
                    {
                        actor: activeUser.accountName,
                        permission: activeUser.requestPermission
                    }
                ],
                data: {
                    authorized_creator: activeUser.accountName,
                    collection_name: collectionName,
                    schema_name: schemaName,
                    schema_format: schemaFormat
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

/***/ 9191:
/***/ ((module) => {

module.exports = require("react-beautiful-dnd");

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

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,8820,6840,5565,9894,7534,9901], () => (__webpack_exec__(3628)));
module.exports = __webpack_exports__;

})();