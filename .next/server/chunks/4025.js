"use strict";
exports.id = 4025;
exports.ids = [4025];
exports.modules = {

/***/ 4025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validationSchema": () => (/* binding */ validationSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_getAccountsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9635);
/* harmony import */ var _services_asset_getAssetService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5045);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_getAccountsService__WEBPACK_IMPORTED_MODULE_1__, _services_asset_getAssetService__WEBPACK_IMPORTED_MODULE_2__]);
([_services_getAccountsService__WEBPACK_IMPORTED_MODULE_1__, _services_asset_getAssetService__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function validationSchema({ queriedAccounts , queriedAssets , chainKey  }) {
    return yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        recipients: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Account is required").test({
            name: "comma-separated",
            message: "Invalid Account",
            test: async function(value) {
                if (!value) {
                    return true;
                }
                const elements = value.split(",").map((element)=>element.trim());
                const invalidAccounts = [];
                const accounts = [
                    ...new Set(elements)
                ];
                await Promise.all(accounts.map(async (account)=>{
                    if (!queriedAccounts.includes(account)) {
                        try {
                            const { data: accountData  } = await (0,_services_getAccountsService__WEBPACK_IMPORTED_MODULE_1__.getAccountsService)(chainKey, {
                                owner: account
                            });
                            if (accountData.data.length === 0) {
                                throw new Error("Data is empty or falsy");
                            }
                        } catch (error) {
                            invalidAccounts.push(account);
                        }
                    }
                }));
                if (invalidAccounts.length > 0) {
                    return this.createError({
                        message: `"${invalidAccounts}" is an invalid account`,
                        path: this.path
                    });
                }
                return true;
            }
        }),
        assets: yup__WEBPACK_IMPORTED_MODULE_0__.string().test({
            name: "comma-separated",
            message: "Invalid NFT ID",
            test: async function(value) {
                if (!value) {
                    return true;
                }
                const elements = value.split(",").map((element)=>element.trim());
                const invalidAssets = [];
                const assets = [
                    ...new Set(elements)
                ];
                await Promise.all(assets.map(async (asset)=>{
                    if (!queriedAssets.includes(asset)) {
                        try {
                            await (0,_services_asset_getAssetService__WEBPACK_IMPORTED_MODULE_2__/* .getAssetService */ .g)(chainKey, {
                                assetId: asset
                            });
                        } catch (error) {
                            invalidAssets.push(asset);
                        }
                    }
                }));
                if (invalidAssets.length > 0) {
                    return this.createError({
                        message: `"${invalidAssets}" is an invalid asset ID`,
                        path: this.path
                    });
                }
                return true;
            }
        }),
        memo: yup__WEBPACK_IMPORTED_MODULE_0__.string()
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5045:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getAssetService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getAssetService(chainKey, { assetId  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/assets/${assetId}`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url);
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;