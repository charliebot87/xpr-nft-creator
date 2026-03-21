"use strict";
(() => {
var exports = {};
exports.id = 5772;
exports.ids = [5772];
exports.modules = {

/***/ 6:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6268);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6903);
/* harmony import */ var _services_template_getTemplateService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5691);
/* harmony import */ var _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8014);
/* harmony import */ var _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2348);
/* harmony import */ var _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3594);
/* harmony import */ var _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1689);
/* harmony import */ var _utils_isAuthorizedAccount__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9080);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3007);
/* harmony import */ var _utils_handlePreview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6071);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2793);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5334);
/* harmony import */ var _components_Attributes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6199);
/* harmony import */ var _components_collection_CollectionHints__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2529);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__, _services_template_getTemplateService__WEBPACK_IMPORTED_MODULE_6__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_7__, _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_8__, _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_9__, _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_10__, _utils_handlePreview__WEBPACK_IMPORTED_MODULE_12__, _components_Header__WEBPACK_IMPORTED_MODULE_14__, _components_Attributes__WEBPACK_IMPORTED_MODULE_15__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__, _services_template_getTemplateService__WEBPACK_IMPORTED_MODULE_6__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_7__, _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_8__, _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_9__, _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_10__, _utils_handlePreview__WEBPACK_IMPORTED_MODULE_12__, _components_Header__WEBPACK_IMPORTED_MODULE_14__, _components_Attributes__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const API_BASE = "https://xpr.api.atomicassets.io";
function formatXprPrice(listing_price, precision = 4) {
    const raw = parseInt(listing_price, 10);
    if (isNaN(raw)) return "0.0000 XPR";
    const xpr = raw / Math.pow(10, precision);
    return xpr.toLocaleString(undefined, {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4
    }) + " XPR";
}
function getIpfsImage(data) {
    const hash = data?.img || data?.image || data?.video || "";
    if (!hash) return "";
    if (hash.startsWith("http")) return hash;
    return `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_17__/* .ipfsEndpoint */ .Ge}/${hash}`;
}
function Template({ ual , chainKey , template , assets , schemas , templates  }) {
    const collection = template.collection;
    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [templateSales, setTemplateSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingSales, setLoadingSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils_handlePreview__WEBPACK_IMPORTED_MODULE_12__/* .handlePreview */ .G)(template, setImages);
    }, [
        template
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            setLoadingSales(true);
            try {
                const res = await fetch(`${API_BASE}/atomicmarket/v1/sales?state=1&template_id=${template.template_id}&sort=price&order=asc&limit=20`);
                const json = await res.json();
                if (json.success) setTemplateSales(json.data || []);
            } catch  {
            // silently fail
            } finally{
                setLoadingSales(false);
            }
        })();
    }, [
        template.template_id
    ]);
    const hasAuthorization = (0,_utils_isAuthorizedAccount__WEBPACK_IMPORTED_MODULE_18__/* .isAuthorizedAccount */ .n)(ual, collection);
    const lowestSale = templateSales.length > 0 ? templateSales[0] : null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `Template #${template.template_id} - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_17__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Header__WEBPACK_IMPORTED_MODULE_14__/* .Header.Root */ .h.Root, {
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
                        _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_11__/* .collectionTabs[2].name */ .J[2].name,
                        `/${chainKey}/collection/${collection.collection_name}?tab=${_utils_collectionTabs__WEBPACK_IMPORTED_MODULE_11__/* .collectionTabs[2].key */ .J[2].key}`
                    ],
                    [
                        `${template.name}`
                    ]
                ],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_14__/* .Header.Content */ .h.Content, {
                        title: template.name,
                        subtitle: `Template #${template.template_id}`,
                        children: hasAuthorization && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `/${chainKey}/collection/${collection.collection_name}/template/${template.template_id}/edit`,
                            className: "btn mt-4 w-fit",
                            children: "Lock Template"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_14__/* .Header.Banner */ .h.Banner, {
                        images: images
                    })
                ]
            }),
            hasAuthorization && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CollectionHints__WEBPACK_IMPORTED_MODULE_16__/* .CollectionHints */ .K, {
                assets: assets,
                schemas: schemas,
                chainKey: chainKey,
                templates: templates,
                collection: collection
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.Group, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.List, {
                        className: "tab-list mb-14",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab, {
                                className: "tab",
                                children: "Information"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab, {
                                className: "tab",
                                children: "Immutable data"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.Panels, {
                        className: "container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.Panel, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col md:flex-row gap-8 lg:gap-0 justify-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "grid grid-cols-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_13__/* .Card */ .Z, {
                                                href: `/${chainKey}/collection/${collection.collection_name}`,
                                                image: collection.img ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_17__/* .ipfsEndpoint */ .Ge}/${collection.img}` : "",
                                                title: collection.name,
                                                subtitle: `by ${collection.author}`
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "md:w-1/2 w-full",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "w-full md:max-w-sm mx-auto",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between py-3 body-2 text-white border-b border-neutral-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Schema"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: `/${chainKey}/collection/${collection.collection_name}/schema/${template.schema.schema_name}`,
                                                                className: "font-bold underline",
                                                                children: template.schema.schema_name
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between py-3 body-2 text-white border-b border-neutral-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Burnable"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "font-bold",
                                                                children: template.is_burnable ? "Yes" : "No"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between py-3 body-2 text-white border-b border-neutral-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Transferable"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "font-bold",
                                                                children: template.is_transferable ? "Yes" : "No"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between py-3 body-2 text-white border-b border-neutral-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Issued Supply"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "font-bold",
                                                                children: template.issued_supply
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between py-3 body-2 text-white border-b border-neutral-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Max Supply"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "font-bold",
                                                                children: parseInt(template.max_supply, 10) || "Infinite"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Attributes__WEBPACK_IMPORTED_MODULE_15__/* .Attributes.List */ .z.List, {
                                    children: template.schema.format.map((schema)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Attributes__WEBPACK_IMPORTED_MODULE_15__/* .Attributes.Item */ .z.Item, {
                                            name: schema.name,
                                            type: schema.type,
                                            value: template.immutable_data[schema.name]
                                        }, schema.name))
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container py-8",
                children: [
                    lowestSale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rounded-xl border border-[#00ff88]/20 bg-neutral-900/90 p-4 md:p-6 mb-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-neutral-400 text-sm",
                                    children: "Lowest Price:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-[#00ff88] text-2xl font-bold",
                                    children: formatXprPrice(lowestSale.listing_price, lowestSale.price?.token_precision || 4)
                                })
                            ]
                        })
                    }),
                    templateSales.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-xl font-bold text-white mb-4",
                                children: "\uD83D\uDCB0 Copies for Sale"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                                children: templateSales.map((sale)=>{
                                    const asset = sale.assets?.[0];
                                    if (!asset) return null;
                                    const immData = asset?.template?.immutable_data || asset?.data || {};
                                    const imgUrl = getIpfsImage(immData);
                                    const name = asset?.name || asset?.data?.name || immData?.name || `#${asset.asset_id}`;
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `/${chainKey}/collection/${collection.collection_name}/asset/${asset.asset_id}`,
                                        className: "rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/80 hover:border-[#00ff88]/40 transition-all duration-200 flex flex-col group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "aspect-square bg-neutral-800 relative overflow-hidden",
                                                children: [
                                                    imgUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: imgUrl,
                                                        alt: name,
                                                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                                                        loading: "lazy"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-full h-full flex items-center justify-center text-neutral-600 text-sm",
                                                        children: "No Image"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "absolute top-2 left-2 bg-neutral-900/80 text-white text-xs font-bold px-2 py-1 rounded",
                                                        children: [
                                                            "#",
                                                            asset.template_mint || "?"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-3 flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "text-white font-semibold text-sm truncate",
                                                        children: name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-[#00ff88] font-bold text-lg",
                                                        children: formatXprPrice(sale.listing_price, sale.price?.token_precision || 4)
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-neutral-500 text-xs truncate",
                                                        children: [
                                                            "Seller: ",
                                                            sale.seller
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, sale.sale_id);
                                })
                            })
                        ]
                    }),
                    !loadingSales && templateSales.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center py-8 text-neutral-500",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "No copies currently for sale"
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
    const templateId = params.templateId;
    try {
        const [{ data: collection  }, { data: templates  }, { data: schemas  }, { data: assets  }, { data: template  }] = await Promise.all([
            (0,_services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_7__/* .getCollectionService */ .R)(chainKey, {
                collectionName
            }),
            (0,_services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_10__/* .collectionTemplatesService */ .B)(chainKey, {
                collectionName
            }),
            (0,_services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_9__/* .collectionSchemasService */ .c)(chainKey, {
                collectionName
            }),
            (0,_services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_8__/* .collectionAssetsService */ .w)(chainKey, {
                collectionName
            }),
            (0,_services_template_getTemplateService__WEBPACK_IMPORTED_MODULE_6__/* .getTemplateService */ .K)(chainKey, {
                collectionName,
                templateId
            })
        ]);
        return {
            props: {
                chainKey,
                assets: assets.data,
                schemas: schemas.data,
                template: template.data,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_4__/* .withUAL */ .D)(Template));

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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,5565,2793,6071,3085,3649,6199], () => (__webpack_exec__(6)));
module.exports = __webpack_exports__;

})();