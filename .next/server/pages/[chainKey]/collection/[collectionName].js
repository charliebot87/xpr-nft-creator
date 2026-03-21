"use strict";
(() => {
var exports = {};
exports.id = 7499;
exports.ids = [7499];
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

/***/ 1880:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ CollectionAccountsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_collection_collectionAccountsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(586);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2793);
/* harmony import */ var _components_CardContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(762);
/* harmony import */ var _components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9070);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3007);
/* harmony import */ var _services_proton_rpc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1345);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_collection_collectionAccountsService__WEBPACK_IMPORTED_MODULE_2__]);
_services_collection_collectionAccountsService__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function CollectionAccountsList({ chainKey , initialAccounts , collectionName  }) {
    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialAccounts);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [avatars, setAvatars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchAvatars() {
            const avs = {};
            for (const acc of accounts){
                try {
                    const data = await _services_proton_rpc__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getAccountData */ .Z.getAccountData(acc.account);
                    if (data.avatar) {
                        avs[acc.account] = `data:image/jpeg;base64,${data.avatar}`;
                    }
                } catch  {}
            }
            setAvatars(avs);
        }
        fetchAvatars();
    }, [
        accounts
    ]);
    const limit = 12;
    const currentPage = Math.ceil(accounts.length / limit);
    const offset = (currentPage - 1) * limit;
    const isEndOfList = accounts.length % limit > 0;
    async function handleSeeMoreAccounts() {
        setIsLoading(true);
        try {
            const { data  } = await (0,_services_collection_collectionAccountsService__WEBPACK_IMPORTED_MODULE_2__/* .collectionAccountsService */ .O)(chainKey, {
                collectionName,
                page: currentPage + 1,
                offset
            });
            setAccounts((state)=>[
                    ...state,
                    ...data.data
                ]);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "headline-2 my-8 flex items-center gap-2",
                children: _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_6__/* .collectionTabs[4].name */ .J[4].name
            }),
            accounts.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CardContainer__WEBPACK_IMPORTED_MODULE_4__/* .CardContainer */ ._, {
                        children: accounts.map((account)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Z, {
                                image: avatars[account.account] || `https://robohash.org/${account.account}.png?set=set1`,
                                title: account.account,
                                subtitle: `${account.assets} NFTs`
                            }, account.account))
                    }),
                    !isEndOfList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center mt-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_5__/* .SeeMoreButton */ .j, {
                            isLoading: isLoading,
                            onClick: handleSeeMoreAccounts
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-neutral-800 px-8 py-24 text-center rounded-xl",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "title-1",
                    children: "There is no account in this collection"
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7294:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ CollectionAssetsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6903);
/* harmony import */ var _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2348);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2793);
/* harmony import */ var _components_CardContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(762);
/* harmony import */ var _components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9070);
/* harmony import */ var _components_collection_CreateNewItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9928);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3007);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_2__]);
_services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function CollectionAssetsList({ chainKey , initialAssets , initialBurnedAssets , totalAssets , totalBurned , collectionName , hasAuthorization  }) {
    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialAssets);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [burnedAssets, setBurnedAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialBurnedAssets);
    const limit = 12;
    const currentPage = Math.ceil(assets.length / limit);
    const currentBurnedPage = Math.ceil(burnedAssets.length / limit);
    const offset = (currentPage - 1) * limit;
    const burnedOffset = (currentBurnedPage - 1) * limit;
    const isEndOfList = Number(totalAssets) === assets.length;
    const isEndOfBurnedList = Number(totalBurned) === burnedAssets.length;
    async function handleSeeMoreAssets() {
        setIsLoading(true);
        try {
            const { data  } = await (0,_services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_2__/* .collectionAssetsService */ .w)(chainKey, {
                collectionName,
                burned: false,
                page: currentPage + 1,
                offset
            });
            setAssets((state)=>[
                    ...state,
                    ...data.data
                ]);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }
    async function handleSeeMoreBurnedAssets() {
        setIsLoading(true);
        try {
            const { data  } = await (0,_services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_2__/* .collectionAssetsService */ .w)(chainKey, {
                collectionName,
                burned: true,
                page: currentBurnedPage + 1,
                offset: burnedOffset
            });
            setBurnedAssets((state)=>[
                    ...state,
                    ...data.data
                ]);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "headline-2 my-8 flex items-center gap-2",
                        children: [
                            _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_7__/* .collectionTabs[3].name */ .J[3].name,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "badge-medium",
                                children: totalAssets ?? 0
                            })
                        ]
                    }),
                    assets.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CardContainer__WEBPACK_IMPORTED_MODULE_4__/* .CardContainer */ ._, {
                                children: [
                                    hasAuthorization && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CreateNewItem__WEBPACK_IMPORTED_MODULE_6__/* .CreateNewItem */ .r, {
                                        href: `/${chainKey}/collection/${collectionName}/asset/new`,
                                        label: "Create NFT"
                                    }),
                                    assets.map((asset)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Z, {
                                            id: asset.template && asset.template.template_id,
                                            href: `/${chainKey}/collection/${collectionName}/asset/${asset.asset_id}`,
                                            image: asset.data.img ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__/* .ipfsEndpoint */ .Ge}/${asset.data.img}` : "",
                                            video: asset.data.video ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__/* .ipfsEndpoint */ .Ge}/${asset.data.video}` : "",
                                            title: asset.name,
                                            subtitle: asset.owner && `Owned by ${asset.owner}`
                                        }, asset.asset_id))
                                ]
                            }),
                            !isEndOfList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_5__/* .SeeMoreButton */ .j, {
                                    isLoading: isLoading,
                                    onClick: handleSeeMoreAssets
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: hasAuthorization ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CreateNewItem__WEBPACK_IMPORTED_MODULE_6__/* .CreateNewItem */ .r, {
                            href: `/${chainKey}/collection/${collectionName}/asset/new`,
                            label: "Create your first NFT"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container mx-auto px-8 py-24 text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "headline-3",
                                children: "There is no NFTs in this collection"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "headline-2 my-8 flex items-center gap-2",
                        children: [
                            "Burned ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "badge-medium",
                                children: totalBurned ?? 0
                            })
                        ]
                    }),
                    burnedAssets.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CardContainer__WEBPACK_IMPORTED_MODULE_4__/* .CardContainer */ ._, {
                                children: burnedAssets.map((asset)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Z, {
                                        id: asset.template && asset.template.template_id,
                                        href: `/${chainKey}/collection/${collectionName}/asset/${asset.asset_id}`,
                                        image: asset.data.img ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__/* .ipfsEndpoint */ .Ge}/${asset.data.img}` : "",
                                        video: asset.data.video ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__/* .ipfsEndpoint */ .Ge}/${asset.data.video}` : "",
                                        title: asset.name,
                                        subtitle: `Burned by ${asset.burned_by_account}`
                                    }, asset.asset_id))
                            }),
                            !isEndOfBurnedList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_5__/* .SeeMoreButton */ .j, {
                                    isLoading: isLoading,
                                    onClick: handleSeeMoreBurnedAssets
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container mx-auto px-8 py-24 text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "headline-3",
                            children: "There is no burned NFTs in this collection"
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CollectionForSale)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6903);




const API_BASE = "https://xpr.api.atomicassets.io";
function getIpfsImage(data) {
    const hash = data?.img || data?.image || data?.video || "";
    if (!hash) return "";
    if (hash.startsWith("http")) return hash;
    return `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_3__/* .ipfsEndpoint */ .Ge}/${hash}`;
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
function CollectionForSale({ chainKey , collectionName  }) {
    const [sales, setSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            setLoading(true);
            try {
                const res = await fetch(`${API_BASE}/atomicmarket/v1/sales?state=1&collection_name=${collectionName}&sort=price&order=asc&limit=50`);
                const json = await res.json();
                if (json.success) setSales(json.data || []);
            } catch  {
            // silently fail
            } finally{
                setLoading(false);
            }
        })();
    }, [
        collectionName
    ]);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "container py-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center py-20",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "animate-spin rounded-full h-8 w-8 border-2 border-[#00ff88] border-t-transparent"
                })
            })
        });
    }
    if (sales.length === 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "container py-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-neutral-800 px-8 py-24 text-center rounded-xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "title-1 text-neutral-400",
                        children: "No NFTs currently for sale"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-neutral-500 mt-2 text-sm",
                        children: "Check back later or list your own!"
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "container py-8",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
            children: sales.map((sale)=>{
                const asset = sale.assets?.[0];
                if (!asset) return null;
                const immData = asset?.template?.immutable_data || asset?.data || {};
                const imgUrl = getIpfsImage(immData);
                const name = asset?.name || asset?.data?.name || immData?.name || `#${asset.asset_id}`;
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `/${chainKey}/collection/${collectionName}/asset/${asset.asset_id}`,
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute top-2 right-2 bg-[#00ff88]/90 text-neutral-900 text-xs font-bold px-2 py-1 rounded",
                                    children: "FOR SALE"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-4 flex flex-col gap-1 flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-white font-semibold text-sm truncate",
                                    children: name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[#00ff88] font-bold text-lg mt-auto",
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
    });
}


/***/ }),

/***/ 3012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ CollectionSchemasList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3594);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2793);
/* harmony import */ var _components_CardContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(762);
/* harmony import */ var _components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9070);
/* harmony import */ var _components_collection_CreateNewItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9928);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3007);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_2__]);
_services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function CollectionSchemasList({ chainKey , initialSchemas , totalSchemas , collectionName , hasAuthorization  }) {
    const [schemas, setSchemas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSchemas);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const limit = 12;
    const currentPage = Math.ceil(schemas.length / limit);
    const offset = (currentPage - 1) * limit;
    const isEndOfList = Number(totalSchemas) === schemas.length;
    async function handleSeeMoreSchemas() {
        setIsLoading(true);
        try {
            const { data  } = await (0,_services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_2__/* .collectionSchemasService */ .c)(chainKey, {
                collectionName,
                page: currentPage + 1,
                offset
            });
            setSchemas((state)=>[
                    ...state,
                    ...data.data
                ]);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "headline-2 my-8 flex items-center gap-2",
                children: [
                    _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_7__/* .collectionTabs[1].name */ .J[1].name,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "badge-medium",
                        children: totalSchemas
                    })
                ]
            }),
            schemas.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CardContainer__WEBPACK_IMPORTED_MODULE_4__/* .CardContainer */ ._, {
                        children: [
                            hasAuthorization && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CreateNewItem__WEBPACK_IMPORTED_MODULE_6__/* .CreateNewItem */ .r, {
                                href: `/${chainKey}/collection/${collectionName}/schema/new`,
                                label: "Create Schema",
                                horizontal: true
                            }),
                            schemas.map((schema)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Z, {
                                    title: schema.schema_name,
                                    subtitle: `${schema.format.length} Attributes`,
                                    href: `/${chainKey}/collection/${collectionName}/schema/${schema.schema_name}`,
                                    withThumbnail: false
                                }, schema.schema_name))
                        ]
                    }),
                    !isEndOfList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center mt-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_5__/* .SeeMoreButton */ .j, {
                            isLoading: isLoading,
                            onClick: handleSeeMoreSchemas
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: hasAuthorization ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CreateNewItem__WEBPACK_IMPORTED_MODULE_6__/* .CreateNewItem */ .r, {
                    href: `/${chainKey}/collection/${collectionName}/schema/new`,
                    label: "Create your first schema"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container mx-auto px-8 py-24 text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "headline-3",
                        children: "There is no schemas in this collection"
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ CollectionStats)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3007);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_3__);




function XIcon({ size =24  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        })
    });
}
function CollectionStats({ stats , collection  }) {
    const [floorPrice, setFloorPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            try {
                const res = await fetch(`https://xpr.api.atomicassets.io/atomicmarket/v1/sales?state=1&collection_name=${collection.collection_name}&sort=price&order=asc&limit=1`);
                const json = await res.json();
                if (json.success && json.data?.length > 0) {
                    const sale = json.data[0];
                    const precision = sale.price?.token_precision || 4;
                    const raw = parseInt(sale.listing_price, 10);
                    if (!isNaN(raw)) {
                        const xpr = raw / Math.pow(10, precision);
                        setFloorPrice(xpr.toLocaleString(undefined, {
                            minimumFractionDigits: 4,
                            maximumFractionDigits: 4
                        }) + " XPR");
                    }
                }
            } catch  {
            // silently fail
            }
        })();
    }, [
        collection.collection_name
    ]);
    const statsContent = [
        [
            "Name",
            collection.collection_name
        ],
        [
            "Created",
            new Date(Number(collection.created_at_time)).toLocaleString()
        ],
        [
            "NFTs",
            stats.assets ?? 0
        ],
        [
            "Burned",
            stats.burned ?? 0
        ],
        [
            "Templates",
            stats.templates
        ],
        [
            "Schemas",
            stats.schemas
        ],
        ...floorPrice ? [
            [
                "Floor Price",
                floorPrice
            ]
        ] : []
    ];
    const creatorInfo = collection.data.creator_info && JSON.parse(collection.data.creator_info);
    const socials = collection.data.socials && JSON.parse(collection.data.socials);
    const hasCreatorInfo = creatorInfo && Object.keys(creatorInfo).filter((key)=>creatorInfo[key] !== "").length > 0;
    const hasSocials = socials && Object.keys(socials).filter((key)=>socials[key] !== "").length > 0;
    function handleSocialIcon(social) {
        switch(social){
            case "twitter":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(XIcon, {
                    size: 24
                });
                break;
            case "facebook":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.FacebookLogo, {
                    size: 24
                });
                break;
            case "medium":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.MediumLogo, {
                    size: 24
                });
                break;
            case "github":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.GithubLogo, {
                    size: 24
                });
                break;
            case "discord":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.DiscordLogo, {
                    size: 24
                });
                break;
            case "youtube":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.YoutubeLogo, {
                    size: 24
                });
                break;
            case "telegram":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.TelegramLogo, {
                    size: 24
                });
                break;
            default:
                break;
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col py-8 gap-12",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "headline-2",
                    children: _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_2__/* .collectionTabs[0].name */ .J[0].name
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid md:grid-cols-2 grid-cols-1 gap-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "headline-3 mb-4",
                                    children: "Description"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "body-1",
                                    children: collection.data.description
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "headline-3 mb-4",
                                    children: "Stats"
                                }),
                                statsContent.map(([label, value])=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between py-3 body-2 text-white border-b border-neutral-700",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: label
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-bold",
                                                children: value
                                            })
                                        ]
                                    }, label))
                            ]
                        }),
                        hasCreatorInfo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "headline-3 mb-4",
                                    children: "Company details"
                                }),
                                Object.keys(creatorInfo).map((key)=>{
                                    if (creatorInfo[key]) {
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between py-3 body-2 text-white border-b border-neutral-700",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: key
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-bold",
                                                    children: creatorInfo[key]
                                                })
                                            ]
                                        }, key);
                                    }
                                })
                            ]
                        }),
                        hasSocials && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "headline-3 mb-4",
                                    children: "Social medias"
                                }),
                                Object.keys(socials).map((key)=>{
                                    if (socials[key]) {
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: socials[key],
                                            target: "_blank",
                                            className: "font-bold underline block",
                                            rel: "noreferrer",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-start gap-4 py-3 body-2 text-white border-b border-neutral-700 min-h-[44px] items-center overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "flex-shrink-0",
                                                        children: handleSocialIcon(key)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-bold truncate",
                                                        children: socials[key]
                                                    })
                                                ]
                                            })
                                        }, key);
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "headline-3 mb-4",
                                    children: "Authorized accounts"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-row gap-2 flex-wrap",
                                    children: collection.authorized_accounts.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "body-1",
                                            children: [
                                                item,
                                                index !== collection.authorized_accounts.length - 1 ? "," : "."
                                            ]
                                        }, item))
                                })
                            ]
                        }),
                        collection.notify_accounts.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "headline-3 mb-4",
                                    children: "Notified accounts"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-row gap-2 flex-wrap",
                                    children: collection.notify_accounts.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "body-1",
                                            children: [
                                                item,
                                                index !== collection.notify_accounts.length - 1 ? "," : "."
                                            ]
                                        }, item))
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 4001:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ CollectionTemplatesList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6903);
/* harmony import */ var _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1689);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2793);
/* harmony import */ var _components_CardContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(762);
/* harmony import */ var _components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9070);
/* harmony import */ var _components_collection_CreateNewItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9928);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3007);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_2__]);
_services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function CollectionTemplatesList({ chainKey , initialTemplates , totalTemplates , collectionName , hasAuthorization  }) {
    const [templates, setTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialTemplates);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const limit = 12;
    const currentPage = Math.ceil(templates.length / limit);
    const offset = (currentPage - 1) * limit;
    const isEndOfList = Number(totalTemplates) === templates.length;
    async function handleSeeMoreTemplates() {
        setIsLoading(true);
        try {
            const { data  } = await (0,_services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_2__/* .collectionTemplatesService */ .B)(chainKey, {
                collectionName,
                page: currentPage + 1,
                offset
            });
            setTemplates((state)=>[
                    ...state,
                    ...data.data
                ]);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "headline-2 my-8 flex items-center gap-2",
                children: [
                    _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_7__/* .collectionTabs[2].name */ .J[2].name,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "badge-medium",
                        children: totalTemplates
                    })
                ]
            }),
            templates.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CardContainer__WEBPACK_IMPORTED_MODULE_4__/* .CardContainer */ ._, {
                        children: [
                            hasAuthorization && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CreateNewItem__WEBPACK_IMPORTED_MODULE_6__/* .CreateNewItem */ .r, {
                                href: `/${chainKey}/collection/${collectionName}/template/new`,
                                label: "Create template"
                            }),
                            templates.map((template)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Z, {
                                    id: template.template_id,
                                    href: `/${chainKey}/collection/${collectionName}/template/${template.template_id}`,
                                    image: template.immutable_data.img ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__/* .ipfsEndpoint */ .Ge}/${template.immutable_data.img}` : "",
                                    video: template.immutable_data.video ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__/* .ipfsEndpoint */ .Ge}/${template.immutable_data.video}` : "",
                                    title: template.name,
                                    subtitle: `${template.issued_supply} ${Number(template.issued_supply) > 1 ? "NFTs" : "NFT"}`
                                }, template.template_id))
                        ]
                    }),
                    !isEndOfList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center mt-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_5__/* .SeeMoreButton */ .j, {
                            isLoading: isLoading,
                            onClick: handleSeeMoreTemplates
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: hasAuthorization ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CreateNewItem__WEBPACK_IMPORTED_MODULE_6__/* .CreateNewItem */ .r, {
                    href: `/${chainKey}/collection/${collectionName}/template/new`,
                    label: "Create your first template"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container mx-auto px-8 py-24 text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "headline-3",
                        children: "There is no templates in this collection"
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4656:
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1185);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6268);
/* harmony import */ var _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8014);
/* harmony import */ var _services_collection_collectionStatsService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9514);
/* harmony import */ var _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2348);
/* harmony import */ var _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3594);
/* harmony import */ var _services_collection_collectionAccountsService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(586);
/* harmony import */ var _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1689);
/* harmony import */ var _components_collection_CollectionTemplatesList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4001);
/* harmony import */ var _components_collection_CollectionAccountsList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1880);
/* harmony import */ var _components_collection_CollectionSchemasList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3012);
/* harmony import */ var _components_collection_CollectionAssetsList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7294);
/* harmony import */ var _components_collection_CollectionForSale__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8265);
/* harmony import */ var _components_collection_CollectionStats__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5869);
/* harmony import */ var _components_collection_CollectionHints__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2529);
/* harmony import */ var _utils_isAuthorizedAccount__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9080);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3007);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5334);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_5__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_7__, _services_collection_collectionStatsService__WEBPACK_IMPORTED_MODULE_8__, _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_9__, _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_10__, _services_collection_collectionAccountsService__WEBPACK_IMPORTED_MODULE_11__, _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_12__, _components_collection_CollectionTemplatesList__WEBPACK_IMPORTED_MODULE_13__, _components_collection_CollectionAccountsList__WEBPACK_IMPORTED_MODULE_14__, _components_collection_CollectionSchemasList__WEBPACK_IMPORTED_MODULE_15__, _components_collection_CollectionAssetsList__WEBPACK_IMPORTED_MODULE_16__, _components_Header__WEBPACK_IMPORTED_MODULE_21__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_5__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_7__, _services_collection_collectionStatsService__WEBPACK_IMPORTED_MODULE_8__, _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_9__, _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_10__, _services_collection_collectionAccountsService__WEBPACK_IMPORTED_MODULE_11__, _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_12__, _components_collection_CollectionTemplatesList__WEBPACK_IMPORTED_MODULE_13__, _components_collection_CollectionAccountsList__WEBPACK_IMPORTED_MODULE_14__, _components_collection_CollectionSchemasList__WEBPACK_IMPORTED_MODULE_15__, _components_collection_CollectionAssetsList__WEBPACK_IMPORTED_MODULE_16__, _components_Header__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























function Collection({ ual , chainKey , collection , stats , templates , assets , burnedAssets , schemas , accounts  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const selectedTabIndex = _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_20__/* .collectionTabs.findIndex */ .J.findIndex((tab)=>tab.key == router.query.tab);
    const hasAuthorization = (0,_utils_isAuthorizedAccount__WEBPACK_IMPORTED_MODULE_22__/* .isAuthorizedAccount */ .n)(ual, collection);
    const tabsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [isAddBackground, setIsAddBackground] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const tabsElement = tabsRef.current;
        window.addEventListener("scroll", ()=>{
            const { top  } = tabsElement.getBoundingClientRect();
            setIsAddBackground(top <= 88);
        });
    }, []);
    function handleSelectedTabIndex(tabIndex) {
        router.push(`/${chainKey}/collection/${collection.collection_name}?tab=${_utils_collectionTabs__WEBPACK_IMPORTED_MODULE_20__/* .collectionTabs */ .J[tabIndex].key}`, undefined, {
            shallow: true
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `${collection.collection_name} - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_23__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Header__WEBPACK_IMPORTED_MODULE_21__/* .Header.Root */ .h.Root, {
                breadcrumb: [
                    [
                        hasAuthorization ? "My Collections" : "Explorer",
                        hasAuthorization ? `/${chainKey}` : `/${chainKey}/explorer`
                    ],
                    [
                        collection.collection_name
                    ]
                ],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_21__/* .Header.Content */ .h.Content, {
                        title: collection.name,
                        subtitle: "Collection",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-wrap gap-4 mt-4",
                            children: [
                                hasAuthorization ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/${chainKey}/collection/${collection.collection_name}/edit`,
                                    className: "btn",
                                    children: "Update Collection"
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/${chainKey}/author/${collection.author}`,
                                    className: "btn",
                                    children: [
                                        "Created by ",
                                        collection.author
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: collection.data.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "btn",
                                    children: "Website"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_21__/* .Header.Banner */ .h.Banner, {
                        images: [
                            {
                                ipfs: collection.img,
                                type: "image"
                            }
                        ],
                        unique: true
                    })
                ]
            }),
            hasAuthorization && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CollectionHints__WEBPACK_IMPORTED_MODULE_19__/* .CollectionHints */ .K, {
                assets: assets,
                schemas: schemas,
                chainKey: chainKey,
                templates: templates,
                collection: collection
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Group, {
                selectedIndex: selectedTabIndex,
                defaultIndex: 0,
                onChange: handleSelectedTabIndex,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.List, {
                        ref: tabsRef,
                        className: `tab-list sticky top-[5.5rem] z-10 duration-75 ${isAddBackground ? "bg-neutral-900" : ""}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                className: "tab",
                                children: _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_20__/* .collectionTabs[0].name */ .J[0].name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                className: "tab",
                                children: [
                                    _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_20__/* .collectionTabs[1].name */ .J[1].name,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "badge-small",
                                        children: stats.schemas ?? "0"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                className: "tab",
                                children: [
                                    _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_20__/* .collectionTabs[2].name */ .J[2].name,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "badge-small",
                                        children: stats.templates ?? "0"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                className: "tab",
                                children: [
                                    _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_20__/* .collectionTabs[3].name */ .J[3].name,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "badge-small",
                                        children: stats.assets ?? "0"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                className: "tab",
                                children: _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_20__/* .collectionTabs[4].name */ .J[4].name
                            }),
                            hasAuthorization && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                className: "tab",
                                children: _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_20__/* .collectionTabs[5].name */ .J[5].name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                                className: "tab",
                                children: [
                                    _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_20__/* .collectionTabs[6].name */ .J[6].name,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "badge-small",
                                        children: "\uD83D\uDCB0"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panels, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CollectionStats__WEBPACK_IMPORTED_MODULE_18__/* .CollectionStats */ .o, {
                                    stats: stats,
                                    collection: collection
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CollectionSchemasList__WEBPACK_IMPORTED_MODULE_15__/* .CollectionSchemasList */ .h, {
                                    chainKey: chainKey,
                                    initialSchemas: schemas,
                                    totalSchemas: stats.schemas,
                                    collectionName: collection.collection_name,
                                    hasAuthorization: hasAuthorization
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CollectionTemplatesList__WEBPACK_IMPORTED_MODULE_13__/* .CollectionTemplatesList */ .r, {
                                    chainKey: chainKey,
                                    initialTemplates: templates,
                                    totalTemplates: stats.templates,
                                    collectionName: collection.collection_name,
                                    hasAuthorization: hasAuthorization
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CollectionAssetsList__WEBPACK_IMPORTED_MODULE_16__/* .CollectionAssetsList */ .v, {
                                    chainKey: chainKey,
                                    initialAssets: assets,
                                    initialBurnedAssets: burnedAssets,
                                    totalAssets: stats.assets - stats.burned,
                                    totalBurned: stats.burned,
                                    collectionName: collection.collection_name,
                                    hasAuthorization: hasAuthorization
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CollectionAccountsList__WEBPACK_IMPORTED_MODULE_14__/* .CollectionAccountsList */ .K, {
                                    chainKey: chainKey,
                                    initialAccounts: accounts,
                                    collectionName: collection.collection_name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CollectionForSale__WEBPACK_IMPORTED_MODULE_17__/* .CollectionForSale */ .Z, {
                                    chainKey: chainKey,
                                    collectionName: collection.collection_name
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async (context)=>{
    const chainKey = context.params.chainKey;
    const collectionName = context.params.collectionName;
    try {
        const [{ data: collection  }, { data: stats  }, { data: templates  }, { data: assets  }, { data: burnedAssets  }, { data: schemas  }, { data: accounts  }] = await Promise.all([
            (0,_services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_7__/* .getCollectionService */ .R)(chainKey, {
                collectionName
            }),
            (0,_services_collection_collectionStatsService__WEBPACK_IMPORTED_MODULE_8__/* .collectionStatsService */ .p)(chainKey, {
                collectionName
            }),
            (0,_services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_12__/* .collectionTemplatesService */ .B)(chainKey, {
                collectionName
            }),
            (0,_services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_9__/* .collectionAssetsService */ .w)(chainKey, {
                collectionName,
                burned: false
            }),
            (0,_services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_9__/* .collectionAssetsService */ .w)(chainKey, {
                collectionName,
                burned: true
            }),
            (0,_services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_10__/* .collectionSchemasService */ .c)(chainKey, {
                collectionName
            }),
            (0,_services_collection_collectionAccountsService__WEBPACK_IMPORTED_MODULE_11__/* .collectionAccountsService */ .O)(chainKey, {
                collectionName
            })
        ]);
        return {
            props: {
                chainKey,
                collection: collection.data,
                stats: stats.data,
                templates: templates.data,
                assets: assets.data,
                burnedAssets: burnedAssets.data,
                schemas: schemas.data,
                accounts: accounts.data
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_6__/* .withUAL */ .D)(Collection));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ collectionAccountsService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function collectionAccountsService(chainKey, { collectionName , page , offset  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/accounts?collection_name=${collectionName}`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url, {
        params: {
            page: page || 1,
            limit: 12,
            offset: offset || 12,
            order: "desc"
        }
    });
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9514:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ collectionStatsService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function collectionStatsService(chainKey, { collectionName  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/collections/${collectionName}/stats`;
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,5565,2793,3085,3649,5123], () => (__webpack_exec__(4656)));
module.exports = __webpack_exports__;

})();