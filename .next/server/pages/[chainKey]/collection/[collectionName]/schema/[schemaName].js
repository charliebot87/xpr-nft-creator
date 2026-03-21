"use strict";
(() => {
var exports = {};
exports.id = 8652;
exports.ids = [8652];
exports.modules = {

/***/ 2284:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6268);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6903);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2793);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5334);
/* harmony import */ var _components_collection_CollectionHints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2529);
/* harmony import */ var _services_schema_getSchemaService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9094);
/* harmony import */ var _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8014);
/* harmony import */ var _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2348);
/* harmony import */ var _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3594);
/* harmony import */ var _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1689);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3007);
/* harmony import */ var _utils_isAuthorizedAccount__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9080);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _components_Header__WEBPACK_IMPORTED_MODULE_6__, _services_schema_getSchemaService__WEBPACK_IMPORTED_MODULE_8__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_9__, _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_10__, _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_11__, _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_12__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _components_Header__WEBPACK_IMPORTED_MODULE_6__, _services_schema_getSchemaService__WEBPACK_IMPORTED_MODULE_8__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_9__, _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_10__, _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_11__, _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function Schema({ chainKey , ual , schema , assets , schemas , templates  }) {
    const collection = schema.collection;
    const hasAuthorization = (0,_utils_isAuthorizedAccount__WEBPACK_IMPORTED_MODULE_14__/* .isAuthorizedAccount */ .n)(ual, collection);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `Schema ${schema.schema_name} - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_15__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__/* .Header.Root */ .h.Root, {
                breadcrumb: [
                    [
                        hasAuthorization ? "My Collections" : "Explorer",
                        hasAuthorization ? `/${chainKey}` : `/${chainKey}/explorer`
                    ],
                    [
                        collection.collection_name,
                        `/${chainKey}/collection/${collection.collection_name}`
                    ],
                    [
                        _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_13__/* .collectionTabs[1].name */ .J[1].name,
                        `/${chainKey}/collection/${collection.collection_name}?tab=${_utils_collectionTabs__WEBPACK_IMPORTED_MODULE_13__/* .collectionTabs[1].key */ .J[1].key}`
                    ],
                    [
                        schema.schema_name
                    ]
                ],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__/* .Header.Content */ .h.Content, {
                    title: schema.schema_name,
                    subtitle: "Schema",
                    children: hasAuthorization && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/${chainKey}/collection/${collection.collection_name}/schema/${schema.schema_name}/edit`,
                        className: "btn w-fit",
                        children: "Update Schema"
                    })
                })
            }),
            hasAuthorization && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CollectionHints__WEBPACK_IMPORTED_MODULE_7__/* .CollectionHints */ .K, {
                assets: assets,
                schemas: schemas,
                chainKey: chainKey,
                templates: templates,
                collection: collection
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Group, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.List, {
                        className: "tab-list mb-4 md:mb-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab, {
                            className: "tab",
                            children: "Information"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panels, {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panel, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col md:flex-row gap-8 lg:gap-0 justify-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid grid-cols-1 h-fit",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* .Card */ .Z, {
                                            href: `/${chainKey}/collection/${collection.collection_name}`,
                                            image: collection.img ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_15__/* .ipfsEndpoint */ .Ge}/${collection.img}` : "",
                                            title: collection.name,
                                            subtitle: `by ${collection.author}`
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "md:w-1/2 w-full",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full md:max-w-sm mx-auto",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "headline-3 mb-4 block",
                                                    children: "Attributes"
                                                }),
                                                schema.format.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between items-center py-3 body-2 gap-8 text-white border-b border-neutral-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: item.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "font-bold break-all",
                                                                children: item.type
                                                            })
                                                        ]
                                                    }, item.name))
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async ({ params  })=>{
    const chainKey = params.chainKey;
    const collectionName = params.collectionName;
    const schemaName = params.schemaName;
    try {
        const [{ data: collection  }, { data: templates  }, { data: schemas  }, { data: assets  }, { data: schema  }] = await Promise.all([
            (0,_services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_9__/* .getCollectionService */ .R)(chainKey, {
                collectionName
            }),
            (0,_services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_12__/* .collectionTemplatesService */ .B)(chainKey, {
                collectionName
            }),
            (0,_services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_11__/* .collectionSchemasService */ .c)(chainKey, {
                collectionName
            }),
            (0,_services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_10__/* .collectionAssetsService */ .w)(chainKey, {
                collectionName
            }),
            (0,_services_schema_getSchemaService__WEBPACK_IMPORTED_MODULE_8__/* .getSchemaService */ .h)(chainKey, {
                collectionName,
                schemaName
            })
        ]);
        return {
            props: {
                chainKey,
                schema: schema.data,
                assets: assets.data,
                schemas: schemas.data,
                templates: templates.data,
                collection: collection.data
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_2__/* .withUAL */ .D)(Schema));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9094:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ getSchemaService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getSchemaService(chainKey, { collectionName , schemaName  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/schemas/${collectionName}/${schemaName}`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url);
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,5565,2793,3085,3649], () => (__webpack_exec__(2284)));
module.exports = __webpack_exports__;

})();