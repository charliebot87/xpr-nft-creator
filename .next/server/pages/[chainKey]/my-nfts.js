"use strict";
(() => {
var exports = {};
exports.id = 850;
exports.ids = [850];
exports.modules = {

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

/***/ 8908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6268);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6903);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_5__);







const API_BASE = "https://xpr.api.atomicassets.io";
function getIpfsImage(data) {
    const hash = data?.img || data?.image || data?.video || "";
    if (!hash) return "";
    if (hash.startsWith("http")) return hash;
    return `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_6__/* .ipfsEndpoint */ .Ge}/${hash}`;
}
// --- Modals ---
function ListForSaleModal({ asset , onClose , onConfirm  }) {
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const name = asset.template?.immutable_data?.name || asset.name || `#${asset.asset_id}`;
    const handleConfirm = ()=>{
        const p = parseFloat(price);
        if (isNaN(p) || p <= 0) {
            setError("Enter a valid price greater than 0");
            return;
        }
        onConfirm(p);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-neutral-900 border border-neutral-700 rounded-xl w-full max-w-md p-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-xl font-bold text-white mb-1",
                    children: "List for Sale"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-neutral-400 text-sm mb-4",
                    children: name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "block text-sm text-neutral-300 mb-1",
                    children: "Price (XPR)"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "number",
                    step: "0.0001",
                    min: "0",
                    value: price,
                    onChange: (e)=>{
                        setPrice(e.target.value);
                        setError("");
                    },
                    placeholder: "0.0000",
                    className: "w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none mb-1"
                }),
                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-red-400 text-xs mb-2",
                    children: error
                }),
                price && parseFloat(price) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "text-neon text-sm mb-4",
                    children: [
                        "Listing at ",
                        parseFloat(price).toFixed(4),
                        " XPR"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex gap-3 mt-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: onClose,
                            className: "flex-1 px-4 py-2 rounded-lg border border-neutral-600 text-neutral-300 hover:bg-neutral-800",
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleConfirm,
                            className: "flex-1 px-4 py-2 rounded-lg bg-neon/20 border border-neon text-neon font-semibold hover:bg-neon/30",
                            children: "Confirm Listing"
                        })
                    ]
                })
            ]
        })
    });
}
function TransferModal({ asset , onClose , onConfirm  }) {
    const [recipient, setRecipient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [memo, setMemo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const name = asset.template?.immutable_data?.name || asset.name || `#${asset.asset_id}`;
    const handleConfirm = ()=>{
        if (!recipient.trim()) {
            setError("Enter a recipient account");
            return;
        }
        onConfirm(recipient.trim(), memo.trim());
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-neutral-900 border border-neutral-700 rounded-xl w-full max-w-md p-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-xl font-bold text-white mb-1",
                    children: "Transfer NFT"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-neutral-400 text-sm mb-4",
                    children: name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "block text-sm text-neutral-300 mb-1",
                    children: "Recipient Account"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    value: recipient,
                    onChange: (e)=>{
                        setRecipient(e.target.value);
                        setError("");
                    },
                    placeholder: "accountname",
                    className: "w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none mb-3"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "block text-sm text-neutral-300 mb-1",
                    children: "Memo (optional)"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    value: memo,
                    onChange: (e)=>setMemo(e.target.value),
                    placeholder: "Optional memo",
                    className: "w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none"
                }),
                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-red-400 text-xs mt-2",
                    children: error
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex gap-3 mt-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: onClose,
                            className: "flex-1 px-4 py-2 rounded-lg border border-neutral-600 text-neutral-300 hover:bg-neutral-800",
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleConfirm,
                            className: "flex-1 px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500 text-purple-300 font-semibold hover:bg-purple-600/30",
                            children: "Confirm Transfer"
                        })
                    ]
                })
            ]
        })
    });
}
function BurnModal({ asset , onClose , onConfirm  }) {
    const [typed, setTyped] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const name = asset.template?.immutable_data?.name || asset.name || `#${asset.asset_id}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-neutral-900 border border-red-500/50 rounded-xl w-full max-w-md p-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-xl font-bold text-red-400 mb-2",
                    children: "⚠️ Burn NFT"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-red-300 font-semibold text-sm",
                            children: "This is permanent and cannot be undone."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-red-400/80 text-xs mt-1",
                            children: "The NFT will be destroyed forever. There is no way to recover it."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "text-neutral-300 text-sm mb-2",
                    children: [
                        "Type ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-white font-mono",
                            children: name
                        }),
                        " to confirm:"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    value: typed,
                    onChange: (e)=>setTyped(e.target.value),
                    placeholder: name,
                    className: "w-full bg-neutral-800 border border-red-500/30 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex gap-3 mt-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: onClose,
                            className: "flex-1 px-4 py-2 rounded-lg border border-neutral-600 text-neutral-300 hover:bg-neutral-800",
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: onConfirm,
                            disabled: typed !== name,
                            className: "flex-1 px-4 py-2 rounded-lg bg-red-900/20 border border-red-500 text-red-400 font-semibold hover:bg-red-900/40 disabled:opacity-30 disabled:cursor-not-allowed",
                            children: "Burn Forever"
                        })
                    ]
                })
            ]
        })
    });
}
function MyNFTs({ chainKey , ual  }) {
    const accountName = ual?.activeUser?.accountName;
    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [sales, setSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [filterCollection, setFilterCollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all");
    // Modal state
    const [listModal, setListModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [transferModal, setTransferModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [burnModal, setBurnModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [txPending, setTxPending] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [txResult, setTxResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const signTransaction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (actions)=>{
        return ual.activeUser.signTransaction({
            actions
        }, {
            broadcast: true,
            blocksBehind: 3,
            expireSeconds: 120
        });
    }, [
        ual
    ]);
    // Fetch assets
    const fetchAssets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!accountName) return;
        setLoading(true);
        setError("");
        try {
            const res = await fetch(`${API_BASE}/atomicassets/v1/assets?owner=${accountName}&limit=100&order=desc&sort=asset_id`);
            const json = await res.json();
            if (!json.success) throw new Error("Failed to fetch assets");
            setAssets(json.data || []);
            // Fetch sales in parallel
            const salesMap = {};
            const assetIds = (json.data || []).map((a)=>a.asset_id);
            if (assetIds.length > 0) {
                // Batch check — up to 100 at a time using comma-separated IDs
                const salesRes = await fetch(`${API_BASE}/atomicmarket/v1/sales?state=1&seller=${accountName}&limit=100&order=desc&sort=created`);
                const salesJson = await salesRes.json();
                if (salesJson.success && salesJson.data) {
                    for (const sale of salesJson.data){
                        for (const saleAsset of sale.assets || []){
                            salesMap[saleAsset.asset_id] = {
                                sale_id: sale.sale_id,
                                listing_price: sale.listing_price,
                                listing_symbol: sale.listing_symbol,
                                price: sale.price
                            };
                        }
                    }
                }
            }
            setSales(salesMap);
        } catch (e) {
            setError(e.message || "Failed to load NFTs");
        } finally{
            setLoading(false);
        }
    }, [
        accountName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchAssets();
    }, [
        fetchAssets
    ]);
    // Collections for filter
    const collections = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const set = new Map();
        for (const a of assets){
            set.set(a.collection.collection_name, a.collection.name || a.collection.collection_name);
        }
        return Array.from(set.entries());
    }, [
        assets
    ]);
    const filteredAssets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (filterCollection === "all") return assets;
        return assets.filter((a)=>a.collection.collection_name === filterCollection);
    }, [
        assets,
        filterCollection
    ]);
    // --- Transaction handlers ---
    const handleListForSale = async (price)=>{
        if (!listModal || !accountName) return;
        setTxPending(true);
        try {
            const assetId = listModal.asset_id;
            await signTransaction([
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
                            parseInt(assetId, 10)
                        ],
                        listing_price: `${price.toFixed(4)} XPR`,
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
                            parseInt(assetId, 10)
                        ],
                        recipient_asset_ids: [],
                        memo: "sale"
                    }
                }
            ]);
            setTxResult({
                ok: true,
                msg: "NFT listed for sale!"
            });
            setListModal(null);
            fetchAssets();
        } catch (e) {
            setTxResult({
                ok: false,
                msg: e.message || "Transaction failed"
            });
        } finally{
            setTxPending(false);
        }
    };
    const handleCancelListing = async (assetId)=>{
        const sale = sales[assetId];
        if (!sale || !accountName) return;
        setTxPending(true);
        try {
            await signTransaction([
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
                        sale_id: parseInt(sale.sale_id, 10)
                    }
                }
            ]);
            setTxResult({
                ok: true,
                msg: "Listing cancelled!"
            });
            fetchAssets();
        } catch (e) {
            setTxResult({
                ok: false,
                msg: e.message || "Transaction failed"
            });
        } finally{
            setTxPending(false);
        }
    };
    const handleTransfer = async (recipient, memo)=>{
        if (!transferModal || !accountName) return;
        setTxPending(true);
        try {
            await signTransaction([
                {
                    account: "atomicassets",
                    name: "transfer",
                    authorization: [
                        {
                            actor: accountName,
                            permission: "active"
                        }
                    ],
                    data: {
                        from: accountName,
                        to: recipient,
                        asset_ids: [
                            parseInt(transferModal.asset_id, 10)
                        ],
                        memo: memo || ""
                    }
                }
            ]);
            setTxResult({
                ok: true,
                msg: "NFT transferred!"
            });
            setTransferModal(null);
            fetchAssets();
        } catch (e) {
            setTxResult({
                ok: false,
                msg: e.message || "Transaction failed"
            });
        } finally{
            setTxPending(false);
        }
    };
    const handleBurn = async ()=>{
        if (!burnModal || !accountName) return;
        setTxPending(true);
        try {
            await signTransaction([
                {
                    account: "atomicassets",
                    name: "burnasset",
                    authorization: [
                        {
                            actor: accountName,
                            permission: "active"
                        }
                    ],
                    data: {
                        asset_owner: accountName,
                        asset_id: parseInt(burnModal.asset_id, 10)
                    }
                }
            ]);
            setTxResult({
                ok: true,
                msg: "NFT burned!"
            });
            setBurnModal(null);
            fetchAssets();
        } catch (e) {
            setTxResult({
                ok: false,
                msg: e.message || "Transaction failed"
            });
        } finally{
            setTxPending(false);
        }
    };
    // Format sale price
    const formatPrice = (sale)=>{
        if (sale.price) {
            const raw = parseInt(sale.price.amount, 10);
            const prec = sale.price.token_precision || 4;
            const val = raw / Math.pow(10, prec);
            return `${val.toLocaleString(undefined, {
                minimumFractionDigits: 4,
                maximumFractionDigits: 4
            })} ${sale.price.token_symbol || "XPR"}`;
        }
        return sale.listing_price || "? XPR";
    };
    // --- Not connected ---
    if (!accountName) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "My NFTs - ",
                            _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_6__/* .appName */ .DJ
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-6xl",
                            children: "\uD83C\uDFA8"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-2xl font-bold text-white",
                            children: "My NFTs"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-neutral-400 text-center max-w-md",
                            children: "Connect your wallet to view your NFT inventory, list for sale, transfer, or burn assets."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>ual?.showModal?.(),
                            className: "px-6 py-3 rounded-lg bg-neon/20 border border-neon text-neon font-semibold hover:bg-neon/30 transition-colors",
                            children: "Connect Wallet"
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        "My NFTs - ",
                        _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_6__/* .appName */ .DJ
                    ]
                })
            }),
            txResult && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `fixed top-20 right-4 z-[200] px-4 py-3 rounded-lg border text-sm font-medium ${txResult.ok ? "bg-green-900/80 border-green-500 text-green-300" : "bg-red-900/80 border-red-500 text-red-300"}`,
                children: [
                    txResult.msg,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setTxResult(null),
                        className: "ml-3 text-white/60 hover:text-white",
                        children: "✕"
                    })
                ]
            }),
            txPending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 z-[150] flex items-center justify-center bg-black/60",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-neutral-900 border border-neon/30 rounded-xl p-8 text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "animate-spin w-8 h-8 border-2 border-neon border-t-transparent rounded-full mx-auto mb-4"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-white",
                            children: "Signing transaction..."
                        })
                    ]
                })
            }),
            listModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListForSaleModal, {
                asset: listModal,
                onClose: ()=>setListModal(null),
                onConfirm: handleListForSale
            }),
            transferModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TransferModal, {
                asset: transferModal,
                onClose: ()=>setTransferModal(null),
                onConfirm: handleTransfer
            }),
            burnModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BurnModal, {
                asset: burnModal,
                onClose: ()=>setBurnModal(null),
                onConfirm: handleBurn
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-7xl mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-2xl font-bold text-white",
                                        children: "My NFTs"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-neutral-400 text-sm mt-1",
                                        children: [
                                            accountName,
                                            " \xb7 ",
                                            assets.length,
                                            " asset",
                                            assets.length !== 1 ? "s" : ""
                                        ]
                                    })
                                ]
                            }),
                            collections.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                value: filterCollection,
                                onChange: (e)=>setFilterCollection(e.target.value),
                                className: "bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-2 text-white text-sm focus:border-neon focus:outline-none",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "all",
                                        children: "All Collections"
                                    }),
                                    collections.map(([key, label])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: key,
                                            children: label
                                        }, key))
                                ]
                            })
                        ]
                    }),
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center py-20",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "animate-spin w-8 h-8 border-2 border-neon border-t-transparent rounded-full"
                        })
                    }),
                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-red-300 text-sm mb-6",
                        children: error
                    }),
                    !loading && !error && filteredAssets.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center py-20",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-5xl mb-4",
                                children: "\uD83D\uDCE6"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-neutral-400",
                                children: assets.length === 0 ? "No NFTs found in this wallet" : "No NFTs match this filter"
                            })
                        ]
                    }),
                    !loading && filteredAssets.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                        children: filteredAssets.map((asset)=>{
                            const immData = asset.template?.immutable_data || asset.data || {};
                            const imgUrl = getIpfsImage(immData);
                            const name = immData.name || asset.name || `#${asset.asset_id}`;
                            const rarity = immData.rarity;
                            const sale = sales[asset.asset_id];
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden hover:border-neon/30 transition-colors group relative",
                                children: [
                                    sale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute top-3 right-3 z-10 bg-green-900/80 border border-green-500/50 rounded-full px-3 py-1 text-xs font-semibold text-green-300",
                                        children: "FOR SALE"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: `/${chainKey}/collection/${asset.collection.collection_name}/asset/${asset.asset_id}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "aspect-square bg-neutral-900 flex items-center justify-center overflow-hidden cursor-pointer",
                                            children: imgUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: imgUrl,
                                                alt: name,
                                                className: "w-full h-full object-cover",
                                                loading: "lazy"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-neutral-600 text-4xl",
                                                children: "\uD83D\uDDBC"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-white font-semibold truncate",
                                                children: name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-neutral-400 text-xs mt-1 truncate",
                                                children: asset.collection.name || asset.collection.collection_name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center gap-2 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-neutral-500 text-xs",
                                                        children: [
                                                            "Mint #",
                                                            asset.template_mint
                                                        ]
                                                    }),
                                                    rarity && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-purple-400 text-xs bg-purple-900/20 px-2 py-0.5 rounded-full",
                                                        children: rarity
                                                    })
                                                ]
                                            }),
                                            sale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-neon font-mono text-sm mt-2",
                                                children: formatPrice(sale)
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-wrap gap-2 mt-3",
                                                children: [
                                                    sale ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>handleCancelListing(asset.asset_id),
                                                        className: "flex-1 min-w-0 px-3 py-1.5 rounded-lg bg-neutral-700/50 border border-neutral-600 text-neutral-300 text-xs font-medium hover:bg-neutral-700 transition-colors",
                                                        children: "Cancel Listing"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>setListModal(asset),
                                                        className: "flex-1 min-w-0 px-3 py-1.5 rounded-lg bg-neon/10 border border-neon/30 text-neon text-xs font-medium hover:bg-neon/20 transition-colors",
                                                        children: "List for Sale"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>setTransferModal(asset),
                                                        className: "px-3 py-1.5 rounded-lg bg-purple-900/10 border border-purple-500/30 text-purple-300 text-xs font-medium hover:bg-purple-900/20 transition-colors",
                                                        children: "Transfer"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>setBurnModal(asset),
                                                        className: "px-3 py-1.5 rounded-lg bg-red-900/10 border border-red-500/30 text-red-400 text-xs font-medium hover:bg-red-900/20 transition-colors",
                                                        children: "Burn"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, asset.asset_id);
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_4__/* .withUAL */ .D)(MyNFTs));
const getStaticPaths = async ()=>{
    const chainsKeys = Object.keys(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_5__);
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
    const chainKey = params?.chainKey;
    return {
        props: {
            chainKey
        }
    };
};


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

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2963:
/***/ ((module) => {

module.exports = require("ual-anchor");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,6903,9517,6268], () => (__webpack_exec__(8908)));
module.exports = __webpack_exports__;

})();