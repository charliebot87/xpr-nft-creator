(() => {
var exports = {};
exports.id = 2784;
exports.ids = [2784];
exports.modules = {

/***/ 2286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6268);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5334);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3007);
/* harmony import */ var _utils_isAuthorizedAccount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9080);
/* harmony import */ var _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8014);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_5__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_5__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Plugin({ ual  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { plugin , chainKey , type , collection: collectionName  } = router.query;
    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const pluginType = type || "default";
    const pluginName = plugin;
    const chain = chainKey;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (collectionName && chain) {
            (0,_services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_7__/* .getCollectionService */ .R)(chain, {
                collectionName: collectionName
            }).then(({ data  })=>{
                setCollection(data.data);
            }).catch(()=>{
            // Collection not found, continue without it
            });
        }
    }, [
        collectionName,
        chain
    ]);
    if (!pluginName || !chain) return null;
    const DynamicComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__(3706)(`./${pluginType}/${pluginName}`).then((mod)=>mod));
    const hasAuthorization = (0,_utils_isAuthorizedAccount__WEBPACK_IMPORTED_MODULE_8__/* .isAuthorizedAccount */ .n)(ual, collection);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            collection && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header.Root */ .h.Root, {
                breadcrumb: [
                    [
                        hasAuthorization ? "My Collections" : "Explorer",
                        hasAuthorization ? `/${chain}` : `/${chain}/explorer`
                    ],
                    [
                        collection.collection_name,
                        `/${chain}/collection/${collection.collection_name}`
                    ],
                    [
                        _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_6__/* .collectionTabs[5].name */ .J[5].name,
                        `/${chain}/collection/${collection.collection_name}?tab=${_utils_collectionTabs__WEBPACK_IMPORTED_MODULE_6__/* .collectionTabs[5].key */ .J[5].key}`
                    ],
                    [
                        pluginName
                    ]
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicComponent, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_1__/* .withUAL */ .D)(Plugin));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 9080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ isAuthorizedAccount)
/* harmony export */ });
function isAuthorizedAccount(ual, collection) {
    if (!ual || !collection) return false;
    const isAuthorized = ual && collection && ual?.activeUser?.accountName === collection.author || collection.authorized_accounts.includes(ual?.activeUser?.accountName);
    return isAuthorized;
}


/***/ }),

/***/ 3706:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./default/airdrop": [
		2425,
		8820,
		6840,
		9894,
		893,
		837,
		6379,
		4025,
		3070,
		3473,
		2425
	],
	"./default/airdrop/": [
		2425,
		8820,
		6840,
		9894,
		893,
		837,
		6379,
		4025,
		3070,
		3473,
		2425
	],
	"./default/airdrop/config": [
		9136,
		3473
	],
	"./default/airdrop/config.ts": [
		9136,
		3473
	],
	"./default/airdrop/index": [
		2425,
		8820,
		6840,
		9894,
		893,
		837,
		6379,
		4025,
		3070,
		3473,
		2425
	],
	"./default/airdrop/index.tsx": [
		2425,
		8820,
		6840,
		9894,
		893,
		837,
		6379,
		4025,
		3070,
		3473,
		2425
	],
	"./default/airdrop/services/getAccountsService": [
		9635,
		9635
	],
	"./default/airdrop/services/getAccountsService.ts": [
		9635,
		9635
	],
	"./default/airdrop/services/getRandomSeedService": [
		3267,
		3267
	],
	"./default/airdrop/services/getRandomSeedService.ts": [
		3267,
		3267
	],
	"./default/airdrop/utils/utils": [
		6379,
		6379
	],
	"./default/airdrop/utils/utils.ts": [
		6379,
		6379
	],
	"./default/airdrop/utils/validationSchema": [
		4025,
		4025,
		6138
	],
	"./default/airdrop/utils/validationSchema.ts": [
		4025,
		4025,
		6138
	],
	"./default/analytics": [
		9163,
		9163
	],
	"./default/analytics/": [
		9163,
		9163
	],
	"./default/analytics/config": [
		7670,
		7670
	],
	"./default/analytics/config.ts": [
		7670,
		7670
	],
	"./default/analytics/index": [
		9163,
		9163
	],
	"./default/analytics/index.tsx": [
		9163,
		9163
	],
	"./default/batch-burn": [
		149,
		8820,
		149
	],
	"./default/batch-burn/": [
		149,
		8820,
		149
	],
	"./default/batch-burn/config": [
		264,
		264
	],
	"./default/batch-burn/config.ts": [
		264,
		264
	],
	"./default/batch-burn/index": [
		149,
		8820,
		149
	],
	"./default/batch-burn/index.tsx": [
		149,
		8820,
		149
	],
	"./default/import": [
		1979,
		8820,
		6840,
		9894,
		6808,
		5399,
		7648,
		1391,
		3070,
		1979
	],
	"./default/import/": [
		1979,
		8820,
		6840,
		9894,
		6808,
		5399,
		7648,
		1391,
		3070,
		1979
	],
	"./default/import/components/ipfsPreview": [
		5399,
		5399
	],
	"./default/import/components/ipfsPreview.tsx": [
		5399,
		5399
	],
	"./default/import/components/review": [
		7648,
		5399,
		7648
	],
	"./default/import/components/review.tsx": [
		7648,
		5399,
		7648
	],
	"./default/import/config": [
		3182,
		3182
	],
	"./default/import/config.ts": [
		3182,
		3182
	],
	"./default/import/index": [
		1979,
		8820,
		6840,
		9894,
		6808,
		5399,
		7648,
		1391,
		3070,
		1979
	],
	"./default/import/index.tsx": [
		1979,
		8820,
		6840,
		9894,
		6808,
		5399,
		7648,
		1391,
		3070,
		1979
	],
	"./default/import/utils/utils": [
		1391,
		1391
	],
	"./default/import/utils/utils.ts": [
		1391,
		1391
	],
	"./default/marketplace": [
		6703,
		6703
	],
	"./default/marketplace/": [
		6703,
		6703
	],
	"./default/marketplace/config": [
		5452,
		9136
	],
	"./default/marketplace/config.ts": [
		5452,
		9136
	],
	"./default/marketplace/index": [
		6703,
		6703
	],
	"./default/marketplace/index.tsx": [
		6703,
		6703
	],
	"./default/quick-mint": [
		9756,
		8820,
		9756
	],
	"./default/quick-mint/": [
		9756,
		8820,
		9756
	],
	"./default/quick-mint/config": [
		7403,
		7403
	],
	"./default/quick-mint/config.ts": [
		7403,
		7403
	],
	"./default/quick-mint/index": [
		9756,
		8820,
		9756
	],
	"./default/quick-mint/index.tsx": [
		9756,
		8820,
		9756
	],
	"./default/send-tokens": [
		1665,
		8820,
		1665
	],
	"./default/send-tokens/": [
		1665,
		8820,
		1665
	],
	"./default/send-tokens/config": [
		2181,
		2181
	],
	"./default/send-tokens/config.ts": [
		2181,
		2181
	],
	"./default/send-tokens/index": [
		1665,
		8820,
		1665
	],
	"./default/send-tokens/index.tsx": [
		1665,
		8820,
		1665
	],
	"./default/token-airdrop": [
		7477,
		8820,
		7477
	],
	"./default/token-airdrop/": [
		7477,
		8820,
		7477
	],
	"./default/token-airdrop/config": [
		6478,
		6478
	],
	"./default/token-airdrop/config.ts": [
		6478,
		6478
	],
	"./default/token-airdrop/index": [
		7477,
		8820,
		7477
	],
	"./default/token-airdrop/index.tsx": [
		7477,
		8820,
		7477
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 3706;
module.exports = webpackAsyncContext;

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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 7153:
/***/ ((module) => {

"use strict";
module.exports = require("papaparse");

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

/***/ 9237:
/***/ ((module) => {

"use strict";
module.exports = require("seed-random");

/***/ }),

/***/ 2963:
/***/ ((module) => {

"use strict";
module.exports = require("ual-anchor");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

"use strict";
module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 9893:
/***/ ((module) => {

"use strict";
module.exports = import("is-ipfs");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,5152,6903,5334,9517,6268,5565], () => (__webpack_exec__(2286)));
module.exports = __webpack_exports__;

})();