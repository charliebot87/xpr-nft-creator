"use strict";
(() => {
var exports = {};
exports.id = 5364;
exports.ids = [5364];
exports.modules = {

/***/ 2816:
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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6268);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6903);
/* harmony import */ var _services_asset_getAssetService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5045);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2793);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5334);
/* harmony import */ var _components_Attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6199);
/* harmony import */ var _utils_isAuthorizedAccount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9080);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3007);
/* harmony import */ var _utils_handlePreview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6071);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _services_asset_getAssetService__WEBPACK_IMPORTED_MODULE_6__, _components_Header__WEBPACK_IMPORTED_MODULE_8__, _components_Attributes__WEBPACK_IMPORTED_MODULE_9__, _utils_handlePreview__WEBPACK_IMPORTED_MODULE_11__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _services_asset_getAssetService__WEBPACK_IMPORTED_MODULE_6__, _components_Header__WEBPACK_IMPORTED_MODULE_8__, _components_Attributes__WEBPACK_IMPORTED_MODULE_9__, _utils_handlePreview__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














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
function rawPriceToAsset(rawPrice, symbol, precision) {
    const amount = parseInt(rawPrice, 10);
    const divisor = Math.pow(10, precision);
    return (amount / divisor).toFixed(precision) + " " + symbol;
}
function Asset({ ual , chainKey , asset  }) {
    const collection = asset.collection;
    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const accountName = ual?.activeUser?.accountName || "";
    // Marketplace state
    const [activeSale, setActiveSale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [salesHistory, setSalesHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingSale, setLoadingSale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [txLoading, setTxLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [txResult, setTxResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [showListModal, setShowListModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [listPrice, setListPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils_handlePreview__WEBPACK_IMPORTED_MODULE_11__/* .handlePreview */ .G)(asset, setImages);
    }, [
        asset
    ]);
    const fetchSaleData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        setLoadingSale(true);
        try {
            const [activeRes, historyRes] = await Promise.all([
                fetch(`${API_BASE}/atomicmarket/v1/sales?state=1&asset_id=${asset.asset_id}`),
                fetch(`${API_BASE}/atomicmarket/v1/sales?state=3&asset_id=${asset.asset_id}&sort=updated&order=desc&limit=20`)
            ]);
            const activeJson = await activeRes.json();
            const historyJson = await historyRes.json();
            if (activeJson.success && activeJson.data?.length > 0) {
                setActiveSale(activeJson.data[0]);
            } else {
                setActiveSale(null);
            }
            if (historyJson.success) {
                setSalesHistory(historyJson.data || []);
            }
        } catch  {
        // silently fail
        } finally{
            setLoadingSale(false);
        }
    }, [
        asset.asset_id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchSaleData();
    }, [
        fetchSaleData
    ]);
    const signTransaction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (actions)=>{
        if (!ual?.activeUser) throw new Error("Not logged in");
        const result = await ual.activeUser.signTransaction({
            actions
        }, {
            broadcast: true,
            blocksBehind: 3,
            expireSeconds: 120
        });
        return result;
    }, [
        ual
    ]);
    const handleBuy = async ()=>{
        if (!activeSale || !accountName) return;
        setTxLoading(true);
        setTxResult(null);
        try {
            const formattedPrice = rawPriceToAsset(activeSale.listing_price, activeSale.listing_symbol || "XPR", activeSale.price?.token_precision || 4);
            const actions = [
                {
                    account: "eosio.token",
                    name: "transfer",
                    authorization: [
                        {
                            actor: accountName,
                            permission: "active"
                        }
                    ],
                    data: {
                        from: accountName,
                        to: "atomicmarket",
                        quantity: formattedPrice,
                        memo: "deposit"
                    }
                },
                {
                    account: "atomicmarket",
                    name: "purchasesale",
                    authorization: [
                        {
                            actor: accountName,
                            permission: "active"
                        }
                    ],
                    data: {
                        sale_id: parseInt(activeSale.sale_id, 10),
                        buyer: accountName,
                        intended_delphi_median: 0,
                        taker_marketplace: "charliebot"
                    }
                }
            ];
            const result = await signTransaction(actions);
            const txId = result?.transactionId || result?.transaction?.transaction_id || result?.processed?.id || "";
            setTxResult({
                success: true,
                txId
            });
            setTimeout(()=>fetchSaleData(), 2000);
        } catch (e) {
            setTxResult({
                success: false,
                error: e.message || "Transaction failed"
            });
        } finally{
            setTxLoading(false);
        }
    };
    const handleCancel = async ()=>{
        if (!activeSale || !accountName) return;
        setTxLoading(true);
        setTxResult(null);
        try {
            const actions = [
                {
                    account: "atomicmarket",
                    name: "cancelsale",
                    authorization: [
                        {
                            actor: accountName,
                            permission: "active"
                        }
                    ],
                    data: {
                        sale_id: parseInt(activeSale.sale_id, 10)
                    }
                }
            ];
            const result = await signTransaction(actions);
            const txId = result?.transactionId || result?.transaction?.transaction_id || result?.processed?.id || "";
            setTxResult({
                success: true,
                txId
            });
            setTimeout(()=>fetchSaleData(), 2000);
        } catch (e) {
            setTxResult({
                success: false,
                error: e.message || "Cancel failed"
            });
        } finally{
            setTxLoading(false);
        }
    };
    const handleListForSale = async ()=>{
        if (!accountName || !listPrice) return;
        const priceNum = parseFloat(listPrice);
        if (isNaN(priceNum) || priceNum < 0.0001) return;
        setTxLoading(true);
        setTxResult(null);
        try {
            const actions = [
                {
                    account: "atomicmarket",
                    name: "announcesale",
                    authorization: [
                        {
                            actor: accountName,
                            permission: "active"
                        }
                    ],
                    data: {
                        seller: accountName,
                        asset_ids: [
                            parseInt(asset.asset_id, 10)
                        ],
                        listing_price: `${priceNum.toFixed(4)} XPR`,
                        settlement_symbol: "4,XPR",
                        maker_marketplace: "charliebot"
                    }
                },
                {
                    account: "atomicassets",
                    name: "createoffer",
                    authorization: [
                        {
                            actor: accountName,
                            permission: "active"
                        }
                    ],
                    data: {
                        sender: accountName,
                        recipient: "atomicmarket",
                        sender_asset_ids: [
                            parseInt(asset.asset_id, 10)
                        ],
                        recipient_asset_ids: [],
                        memo: "sale"
                    }
                }
            ];
            const result = await signTransaction(actions);
            const txId = result?.transactionId || result?.transaction?.transaction_id || result?.processed?.id || "";
            setTxResult({
                success: true,
                txId
            });
            setShowListModal(false);
            setListPrice("");
            setTimeout(()=>fetchSaleData(), 2000);
        } catch (e) {
            setTxResult({
                success: false,
                error: e.message || "Listing failed"
            });
        } finally{
            setTxLoading(false);
        }
    };
    const hasAuthorization = (0,_utils_isAuthorizedAccount__WEBPACK_IMPORTED_MODULE_12__/* .isAuthorizedAccount */ .n)(ual, collection);
    const isOwner = accountName && asset.owner === accountName;
    const isSeller = activeSale && activeSale.seller === accountName;
    // OG meta data
    const immData = asset.template?.immutable_data || {};
    const ogTitle = immData.name || `NFT #${asset.asset_id}`;
    const ogDescription = immData.description || `NFT on XPR Network`;
    const ogImage = immData.img ? `https://ipfs.io/ipfs/${immData.img}` : "";
    const ogUrl = `https://nft.charliebot.dev/xpr/collection/${collection.collection_name}/asset/${asset.asset_id}`;
    // Share handlers
    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleCopyLink = async ()=>{
        try {
            await navigator.clipboard.writeText(ogUrl);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch  {
            const el = document.createElement("textarea");
            el.value = ogUrl;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        }
    };
    const handleShareX = ()=>{
        const text = encodeURIComponent(`Check out my ${ogTitle} NFT on XPR Network!`);
        const url = encodeURIComponent(ogUrl);
        window.open(`https://x.com/intent/tweet?text=${text}&url=${url}`, "_blank");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${ogTitle} - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_13__/* .appName */ .DJ}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: ogTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: ogDescription
                    }),
                    ogImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: ogImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: ogUrl
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: ogTitle
                    }),
                    ogImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: ogImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: ogDescription
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Header__WEBPACK_IMPORTED_MODULE_8__/* .Header.Root */ .h.Root, {
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
                        _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_10__/* .collectionTabs[3].name */ .J[3].name,
                        `/${chainKey}/collection/${collection.collection_name}?tab=${_utils_collectionTabs__WEBPACK_IMPORTED_MODULE_10__/* .collectionTabs[3].key */ .J[3].key}`
                    ],
                    [
                        asset.name
                    ]
                ],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__/* .Header.Content */ .h.Content, {
                        title: asset.name,
                        subtitle: `NFT #${asset.asset_id}`,
                        children: hasAuthorization && !asset.burned_by_account && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `/${chainKey}/collection/${collection.collection_name}/asset/${asset.asset_id}/edit`,
                            className: "btn mt-4",
                            children: "Update NFT"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__/* .Header.Banner */ .h.Banner, {
                        images: images
                    })
                ]
            }),
            !loadingSale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "container py-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-2xl mx-auto",
                    children: [
                        activeSale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "rounded-xl border border-[#00ff88]/30 bg-neutral-900/90 p-4 md:p-6 mb-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "inline-block bg-[#00ff88] text-neutral-900 text-xs font-bold px-3 py-1 rounded-full mb-2",
                                                children: "FOR SALE"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-[#00ff88] text-2xl md:text-3xl font-bold",
                                                children: formatXprPrice(activeSale.listing_price, activeSale.price?.token_precision || 4)
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-neutral-500 text-sm mt-1",
                                                children: [
                                                    "Seller: ",
                                                    activeSale.seller
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full sm:w-auto",
                                        children: isSeller ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: handleCancel,
                                            disabled: txLoading,
                                            className: "w-full sm:w-auto px-8 py-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-all disabled:opacity-50 cursor-pointer text-lg",
                                            children: txLoading ? "Cancelling..." : "Cancel Listing"
                                        }) : accountName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: handleBuy,
                                            disabled: txLoading,
                                            className: "w-full sm:w-auto px-8 py-3 rounded-lg bg-[#9966ff] text-white font-bold hover:bg-[#7b4fe0] transition-all disabled:opacity-50 cursor-pointer text-lg shadow-[0_0_20px_rgba(153,102,255,0.3)]",
                                            children: txLoading ? "Processing..." : "Buy Now"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>ual?.showModal?.(),
                                            className: "w-full sm:w-auto px-8 py-3 rounded-lg bg-[#9966ff] text-white font-bold hover:bg-[#7b4fe0] transition-all cursor-pointer text-lg",
                                            children: "Connect to Buy"
                                        })
                                    })
                                ]
                            })
                        }),
                        !activeSale && isOwner && !asset.burned_by_account && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "rounded-xl border border-neutral-700 bg-neutral-900/90 p-4 md:p-6 mb-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-white font-semibold",
                                                children: "You own this NFT"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-neutral-500 text-sm",
                                                children: "List it on the marketplace to sell"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>{
                                            setShowListModal(true);
                                            setTxResult(null);
                                        },
                                        className: "w-full sm:w-auto px-8 py-3 rounded-lg bg-[#00ff88] text-neutral-900 font-bold hover:bg-[#00cc6a] transition-all cursor-pointer text-lg",
                                        children: "List for Sale"
                                    })
                                ]
                            })
                        }),
                        txResult && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `rounded-lg p-4 mb-4 ${txResult.success ? "bg-green-900/30 border border-green-700" : "bg-red-900/30 border border-red-700"}`,
                            children: txResult.success ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-[#00ff88] text-xl",
                                        children: "✓"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-green-400",
                                        children: "Transaction successful!"
                                    }),
                                    txResult.txId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: `https://explorer.xprnetwork.org/transaction/${txResult.txId}`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-[#9966ff] underline text-sm ml-auto",
                                        children: "View TX"
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-red-400",
                                children: txResult.error
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "container py-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-2xl mx-auto flex gap-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleCopyLink,
                            className: "px-5 py-2.5 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] font-semibold hover:bg-[#00ff88]/20 transition-all text-sm",
                            children: copied ? "✓ Copied!" : "\uD83D\uDD17 Copy Link"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleShareX,
                            className: "px-5 py-2.5 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] font-semibold hover:bg-[#00ff88]/20 transition-all text-sm",
                            children: "\uD835\uDD4F Share on X"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Group, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.List, {
                        className: "tab-list mb-4 md:mb-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                className: "tab",
                                children: "Information"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                className: "tab",
                                children: "Immutable data"
                            }),
                            Object.keys(asset.mutable_data).length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                className: "tab",
                                children: "Mutable data"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panels, {
                        className: "container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panel, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col md:flex-row gap-8 lg:gap-0 justify-center pb-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "grid grid-cols-1 h-fit",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_7__/* .Card */ .Z, {
                                                href: `/${chainKey}/collection/${collection.collection_name}`,
                                                image: collection.img ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_13__/* .ipfsEndpoint */ .Ge}/${collection.img}` : "",
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
                                                                children: "Owner"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "font-bold",
                                                                children: asset.owner
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between py-3 body-2 text-white border-b border-neutral-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Mint Number"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "font-bold pr-2",
                                                                        children: Number(asset.template_mint) > 0 ? asset.template_mint : "Minting..."
                                                                    }),
                                                                    asset.template && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "",
                                                                        children: [
                                                                            "(max:",
                                                                            " ",
                                                                            parseInt(asset.template.max_supply, 10) || "Infinite",
                                                                            ")"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    asset.template && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between py-3 body-2 text-white border-b border-neutral-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Template ID"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: `/${chainKey}/collection/${collection.collection_name}/template/${asset.template.template_id}`,
                                                                className: "font-bold underline",
                                                                children: asset.template.template_id
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between py-3 body-2 text-white border-b border-neutral-700",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Schema"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: `/${chainKey}/collection/${collection.collection_name}/schema/${asset.schema.schema_name}`,
                                                                className: "font-bold underline",
                                                                children: asset.schema.schema_name
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
                                                                children: asset.is_burnable ? "Yes" : "No"
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
                                                                children: asset.is_transferable ? "Yes" : "No"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Attributes__WEBPACK_IMPORTED_MODULE_9__/* .Attributes.List */ .z.List, {
                                    children: asset.schema.format.map((schema)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Attributes__WEBPACK_IMPORTED_MODULE_9__/* .Attributes.Item */ .z.Item, {
                                            name: schema.name,
                                            type: schema.type,
                                            value: asset.template ? asset.template.immutable_data[schema.name] : asset.immutable_data[schema.name]
                                        }, schema.name))
                                })
                            }),
                            Object.keys(asset.mutable_data).length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Attributes__WEBPACK_IMPORTED_MODULE_9__/* .Attributes.List */ .z.List, {
                                    children: asset.schema.format.map((schema)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Attributes__WEBPACK_IMPORTED_MODULE_9__/* .Attributes.Item */ .z.Item, {
                                            name: schema.name,
                                            type: schema.type,
                                            value: asset.mutable_data[schema.name]
                                        }, schema.name))
                                })
                            })
                        ]
                    })
                ]
            }),
            salesHistory.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container py-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-xl font-bold text-white mb-4",
                        children: "\uD83D\uDCDC Sales History"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "text-neutral-500 border-b border-neutral-800",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "text-left py-3 px-4",
                                                children: "Date"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "text-left py-3 px-4",
                                                children: "Price"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "text-left py-3 px-4",
                                                children: "Buyer"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "text-left py-3 px-4",
                                                children: "Seller"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    children: salesHistory.map((sale)=>{
                                        const date = new Date(parseInt(sale.updated_at_time, 10));
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            className: "border-b border-neutral-800/50 hover:bg-neutral-800/30",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "py-3 px-4 text-neutral-400",
                                                    children: date.toLocaleDateString()
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "py-3 px-4 text-[#00ff88] font-semibold",
                                                    children: formatXprPrice(sale.listing_price, sale.price?.token_precision || 4)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "py-3 px-4 text-neutral-400",
                                                    children: sale.buyer || "—"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "py-3 px-4 text-neutral-400",
                                                    children: sale.seller
                                                })
                                            ]
                                        }, sale.sale_id);
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            showListModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-neutral-900 border border-neutral-700 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md p-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-white text-xl font-bold",
                                    children: "List for Sale"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>{
                                        setShowListModal(false);
                                        setTxResult(null);
                                    },
                                    className: "text-neutral-500 hover:text-white text-2xl cursor-pointer",
                                    children: "\xd7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "block text-neutral-400 text-sm mb-2",
                                    children: "Price in XPR"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    step: "0.0001",
                                    min: "0.0001",
                                    value: listPrice,
                                    onChange: (e)=>setListPrice(e.target.value),
                                    placeholder: "0.0000",
                                    className: "w-full bg-neutral-800 text-white border border-neutral-700 rounded-lg px-4 py-4 text-xl focus:border-[#00ff88] focus:outline-none"
                                }),
                                listPrice && parseFloat(listPrice) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-neutral-500 text-sm mt-2",
                                    children: [
                                        "Listing for:",
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-[#00ff88] font-bold",
                                            children: [
                                                parseFloat(listPrice).toFixed(4),
                                                " XPR"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        txResult?.error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm",
                            children: txResult.error
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>{
                                        setShowListModal(false);
                                        setTxResult(null);
                                    },
                                    className: "flex-1 py-3 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all cursor-pointer",
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: handleListForSale,
                                    disabled: txLoading || !listPrice || parseFloat(listPrice) < 0.0001,
                                    className: "flex-1 py-3 rounded-lg bg-[#00ff88] text-neutral-900 font-bold hover:bg-[#00cc6a] transition-all disabled:opacity-50 cursor-pointer",
                                    children: txLoading ? "Processing..." : "List Now"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
const getServerSideProps = async ({ params  })=>{
    const chainKey = params.chainKey;
    const assetId = params.assetId;
    try {
        const { data: asset  } = await (0,_services_asset_getAssetService__WEBPACK_IMPORTED_MODULE_6__/* .getAssetService */ .g)(chainKey, {
            assetId
        });
        return {
            props: {
                asset: asset.data,
                chainKey
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_5__/* .withUAL */ .D)(Asset));

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

/***/ }),

/***/ 9080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ isAuthorizedAccount)
/* harmony export */ });
function isAuthorizedAccount(ual, collection) {
    if (!ual || !collection) return false;
    const isAuthorized = ual && collection && ual?.activeUser?.accountName === collection.author || collection.authorized_accounts.includes(ual?.activeUser?.accountName);
    return isAuthorized;
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
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,5565,2793,6071,6199], () => (__webpack_exec__(2816)));
module.exports = __webpack_exports__;

})();