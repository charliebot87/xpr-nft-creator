"use strict";
(() => {
var exports = {};
exports.id = 7911;
exports.ids = [7911];
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

/***/ 5740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 2850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Explorer),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5334);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5740);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2793);
/* harmony import */ var _components_CardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(762);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_5__]);
_components_Header__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const API_BASE = "https://xpr.api.atomicassets.io";
function getIpfsImage(data) {
    const hash = data?.img || data?.image || data?.video || "";
    if (!hash) return "";
    if (hash.startsWith("http")) return hash;
    return `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_10__/* .ipfsEndpoint */ .Ge}/${hash}`;
}
function formatXprPrice(listing_price, precision = 4) {
    const raw = parseInt(listing_price, 10);
    if (isNaN(raw)) return "0.0000 XPR";
    const xpr = raw / Math.pow(10, precision);
    return xpr.toLocaleString(undefined, {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4
    }) + " XPR";
}
function getCollectionImageUrl(img) {
    if (!img) return "";
    if (img.startsWith("http")) return img;
    const base = _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_10__/* .ipfsEndpoint */ .Ge || "https://ipfs.io/ipfs";
    return `${base}/${img}`;
}
function Explorer({ chainKey , initialCollections  }) {
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [hotSales, setHotSales] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [loadingSales, setLoadingSales] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (async ()=>{
            try {
                // Get SimpleDEX community collections
                const allowedCollections = new Set([
                    ...initialCollections.map((c)=>c.collection_name),
                    "whisperer123",
                    "charlieart12",
                    "purplemoon12"
                ]);
                const res = await fetch(`${API_BASE}/atomicmarket/v1/sales?state=1&sort=created&order=desc&limit=50`);
                const json = await res.json();
                if (json.success) {
                    const filtered = (json.data || []).filter((s)=>allowedCollections.has(s.collection_name));
                    setHotSales(filtered.slice(0, 8));
                }
            } catch  {
            // silently fail
            } finally{
                setLoadingSales(false);
            }
        })();
    }, [
        initialCollections
    ]);
    const filtered = initialCollections.filter((c)=>{
        if (!search) return true;
        const q = search.toLowerCase();
        return c.name?.toLowerCase().includes(q) || c.collection_name?.toLowerCase().includes(q) || c.author?.toLowerCase().includes(q);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `SimpleDEX Community Collections - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_10__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header.Root */ .h.Root, {
                border: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header.Content */ .h.Content, {
                        title: "SimpleDEX Community Collections"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header.Search */ .h.Search, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_6__/* .Input */ .I, {
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_4__.MagnifyingGlass, {
                                size: 24
                            }),
                            type: "search",
                            placeholder: "Search collection",
                            onChange: (e)=>setSearch(e.target.value)
                        })
                    })
                ]
            }),
            hotSales.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container py-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl md:text-2xl font-bold text-white",
                                children: "\uD83D\uDD25 Active Sales"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: `/${chainKey}/plugins/marketplace?type=default`,
                                className: "text-[#9966ff] hover:text-[#b088ff] text-sm font-semibold transition-colors",
                                children: "View all →"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide",
                        style: {
                            WebkitOverflowScrolling: "touch"
                        },
                        children: hotSales.map((sale)=>{
                            const asset = sale.assets?.[0];
                            if (!asset) return null;
                            const immData = asset?.template?.immutable_data || asset?.data || {};
                            const imgUrl = getIpfsImage(immData);
                            const name = asset?.name || asset?.data?.name || immData?.name || `#${asset.asset_id}`;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: `/${chainKey}/collection/${sale.collection_name}/asset/${asset.asset_id}`,
                                className: "flex-shrink-0 w-48 md:w-56 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/80 hover:border-[#00ff88]/40 transition-all duration-200 snap-start group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "aspect-square bg-neutral-800 relative overflow-hidden",
                                        children: imgUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: imgUrl,
                                            alt: name,
                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                                            loading: "lazy"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full h-full flex items-center justify-center text-neutral-600 text-sm",
                                            children: "No Image"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "p-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-white font-semibold text-sm truncate",
                                                children: name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-neutral-500 text-xs truncate",
                                                children: sale.collection_name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-[#00ff88] font-bold text-base mt-1",
                                                children: formatXprPrice(sale.listing_price, sale.price?.token_precision || 4)
                                            })
                                        ]
                                    })
                                ]
                            }, sale.sale_id);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container py-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-green-400 text-sm mb-6 font-mono",
                        children: "Showing NFT collections from SimpleDEX token creators and top traders"
                    }),
                    filtered.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CardContainer__WEBPACK_IMPORTED_MODULE_8__/* .CardContainer */ ._, {
                        children: filtered.map((collection, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_7__/* .Card */ .Z, {
                                href: `/${chainKey}/collection/${collection.collection_name}`,
                                image: collection.img ? getCollectionImageUrl(collection.img) : "",
                                title: collection.name,
                                subtitle: `by ${collection.author}`
                            }, index))
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-neutral-800 px-8 py-24 text-center rounded-xl",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "title-1",
                            children: "No collections found"
                        })
                    })
                ]
            })
        ]
    });
}
const getStaticPaths = async ()=>{
    const chainsKeys = Object.keys(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_9__);
    const paths = chainsKeys.map((chainKey)=>({
            params: {
                chainKey
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const chainKey = params.chainKey;
    try {
        const UA = "xpr-nft-creator/1.0";
        // Fetch SimpleDEX creators (token creators)
        const tokensRes = await fetch("https://indexer.protonnz.com/api/tokens?fields=compact&limit=500", {
            headers: {
                "User-Agent": UA
            }
        });
        const tokensJson = await tokensRes.json();
        const creatorAccounts = (tokensJson.tokens || []).map((t)=>t.creator);
        // Fetch SimpleDEX leaderboard (top creators + top traders)
        const lbRes = await fetch("https://indexer.protonnz.com/api/leaderboard?limit=100", {
            headers: {
                "User-Agent": UA
            }
        });
        const lbJson = await lbRes.json();
        const topCreatorAccounts = (lbJson.topCreators || []).map((t)=>t.account);
        const topTraderAccounts = (lbJson.topTraders || []).map((t)=>t.account);
        // Combine into unique set
        const allowedAccounts = new Set([
            ...creatorAccounts,
            ...topCreatorAccounts,
            ...topTraderAccounts
        ]);
        // Fetch all collections from AtomicAssets (high limit)
        const aaEndpoint = _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_9__[chainKey]?.aaEndpoint || "https://xpr.api.atomicassets.io";
        const collectionsRes = await fetch(`${aaEndpoint}/atomicassets/v1/collections?limit=500&order=desc&sort=created`, {
            headers: {
                "User-Agent": UA
            }
        });
        const collectionsJson = await collectionsRes.json();
        const allCollections = collectionsJson.data || [];
        // Filter to only SimpleDEX community members with images
        const filteredCollections = allCollections.filter((c)=>allowedAccounts.has(c.author) && c.img);
        return {
            props: {
                chainKey,
                initialCollections: filteredCollections
            },
            revalidate: 300
        };
    } catch (error) {
        console.error("Explorer getStaticProps error:", error);
        return {
            props: {
                chainKey,
                initialCollections: []
            },
            revalidate: 300
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,6840,2793], () => (__webpack_exec__(2850)));
module.exports = __webpack_exports__;

})();