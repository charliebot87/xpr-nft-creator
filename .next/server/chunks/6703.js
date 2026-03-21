"use strict";
exports.id = 6703;
exports.ids = [6703];
exports.modules = {

/***/ 6703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6268);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6903);





const API_BASE = "https://xpr.api.atomicassets.io";
const INDEXER_BASE = "https://indexer.protonnz.com";
const INDEXER_HEADERS = {
    "User-Agent": "xpr-nft-creator/1.0"
};
async function getSimpleDexAccounts() {
    try {
        const [tokensRes, lbRes] = await Promise.all([
            fetch(`${INDEXER_BASE}/api/tokens?fields=compact&limit=500`, {
                headers: INDEXER_HEADERS
            }),
            fetch(`${INDEXER_BASE}/api/leaderboard?limit=100`, {
                headers: INDEXER_HEADERS
            })
        ]);
        const tokensJson = await tokensRes.json();
        const lbJson = await lbRes.json();
        const creators = (tokensJson.tokens || []).map((t)=>t.creator);
        const topCreators = (lbJson.topCreators || []).map((t)=>t.account);
        const topTraders = (lbJson.topTraders || []).map((t)=>t.account);
        return new Set([
            ...creators,
            ...topCreators,
            ...topTraders,
            "charliebot"
        ]);
    } catch  {
        return new Set([
            "charliebot"
        ]);
    }
}
async function getSimpleDexCollections() {
    const accounts = await getSimpleDexAccounts();
    try {
        const res = await fetch(`${API_BASE}/atomicassets/v1/collections?limit=500&order=desc&sort=created`);
        const json = await res.json();
        const collections = (json.data || []).filter((c)=>accounts.has(c.author)).map((c)=>c.collection_name);
        return new Set(collections);
    } catch  {
        return new Set();
    }
}
function getIpfsImage(data) {
    const hash = data?.img || data?.image || data?.video || "";
    if (!hash) return "";
    if (hash.startsWith("http")) return hash;
    if (hash.startsWith("Qm") || hash.startsWith("bafy")) {
        return `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_4__/* .ipfsEndpoint */ .Ge}/${hash}`;
    }
    return `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_4__/* .ipfsEndpoint */ .Ge}/${hash}`;
}
function formatPrice(amount, symbol = "XPR") {
    const num = typeof amount === "string" ? parseFloat(amount) : amount;
    if (isNaN(num)) return `0.0000 ${symbol}`;
    const parts = num.toFixed(4).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${parts.join(".")} ${symbol}`;
}
function parsePriceFromListing(listing_price, precision = 4) {
    const raw = parseInt(listing_price, 10);
    if (isNaN(raw)) return 0;
    return raw / Math.pow(10, precision);
}
function rawPriceToAsset(rawPrice, symbol, precision) {
    const amount = parseInt(rawPrice, 10);
    const divisor = Math.pow(10, precision);
    return (amount / divisor).toFixed(precision) + " " + symbol;
}
function Marketplace({ ual  }) {
    const accountName = ual?.activeUser?.accountName || "";
    const [tab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("browse");
    const [sales, setSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [mySales, setMySales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Browse filters
    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("newest");
    const [collectionFilter, setCollectionFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [collections, setCollections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // Buy modal
    const [buyModal, setBuyModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [txLoading, setTxLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [txResult, setTxResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // Listing flow
    const [showListingFlow, setShowListingFlow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [listingStep, setListingStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("select");
    const [ownedAssets, setOwnedAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedAsset, setSelectedAsset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [listingPrice, setListingPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [listingError, setListingError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [sdxCollections, setSdxCollections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Set());
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getSimpleDexCollections().then(setSdxCollections);
    }, []);
    const [listingTxId, setListingTxId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loadingAssets, setLoadingAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Cancel
    const [cancelLoading, setCancelLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
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
    const fetchSales = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        setLoading(true);
        setError("");
        try {
            let sort = "created";
            let order = "desc";
            if (sortBy === "price-asc") {
                sort = "price";
                order = "asc";
            } else if (sortBy === "price-desc") {
                sort = "price";
                order = "desc";
            }
            let url = `${API_BASE}/atomicmarket/v1/sales?state=1&order=${order}&sort=${sort}&limit=50`;
            if (collectionFilter) {
                url += `&collection_name=${collectionFilter}`;
            }
            const res = await fetch(url);
            const json = await res.json();
            if (json.success) {
                const allSales = json.data || [];
                const filtered = sdxCollections.size > 0 ? allSales.filter((s)=>sdxCollections.has(s.collection_name)) : allSales;
                setSales(filtered);
                // Extract unique collections from filtered sales
                const cols = new Set();
                filtered.forEach((s)=>{
                    if (s.collection_name) cols.add(s.collection_name);
                });
                if (!collectionFilter) {
                    setCollections((prev)=>{
                        const merged = new Set([
                            ...prev,
                            ...cols
                        ]);
                        return Array.from(merged).sort();
                    });
                }
            } else {
                setError("Failed to load sales");
            }
        } catch (e) {
            setError(e.message || "Failed to fetch sales");
        } finally{
            setLoading(false);
        }
    }, [
        sortBy,
        collectionFilter,
        sdxCollections
    ]);
    const fetchMySales = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!accountName) return;
        setLoading(true);
        setError("");
        try {
            const url = `${API_BASE}/atomicmarket/v1/sales?state=1&seller=${accountName}&limit=50`;
            const res = await fetch(url);
            const json = await res.json();
            if (json.success) {
                setMySales(json.data || []);
            }
        } catch (e) {
            setError(e.message || "Failed to fetch your listings");
        } finally{
            setLoading(false);
        }
    }, [
        accountName
    ]);
    const fetchHistory = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        setLoading(true);
        setError("");
        try {
            const url = `${API_BASE}/atomicmarket/v1/sales?state=3&sort=updated&order=desc&limit=20`;
            const res = await fetch(url);
            const json = await res.json();
            if (json.success) {
                const allHistory = json.data || [];
                const filteredHistory = sdxCollections.size > 0 ? allHistory.filter((s)=>sdxCollections.has(s.collection_name)) : allHistory;
                setHistory(filteredHistory);
            }
        } catch (e) {
            setError(e.message || "Failed to fetch sales history");
        } finally{
            setLoading(false);
        }
    }, [
        sdxCollections
    ]);
    const fetchOwnedAssets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!accountName) return;
        setLoadingAssets(true);
        try {
            const url = `${API_BASE}/atomicassets/v1/assets?owner=${accountName}&limit=100&order=desc&sort=asset_id`;
            const res = await fetch(url);
            const json = await res.json();
            if (json.success) {
                setOwnedAssets(json.data || []);
            }
        } catch  {
        // silently fail
        } finally{
            setLoadingAssets(false);
        }
    }, [
        accountName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (tab === "browse") fetchSales();
        else if (tab === "my-listings") fetchMySales();
        else if (tab === "history") fetchHistory();
    }, [
        tab,
        fetchSales,
        fetchMySales,
        fetchHistory,
        sdxCollections
    ]);
    // Populate collection filter dropdown from SimpleDEX-filtered sales
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (sdxCollections.size === 0) return;
        (async ()=>{
            try {
                const url = `${API_BASE}/atomicmarket/v1/sales?state=1&order=desc&sort=created&limit=100`;
                const res = await fetch(url);
                const json = await res.json();
                if (json.success) {
                    const cols = new Set();
                    (json.data || []).forEach((s)=>{
                        if (s.collection_name && sdxCollections.has(s.collection_name)) {
                            cols.add(s.collection_name);
                        }
                    });
                    setCollections(Array.from(cols).sort());
                }
            } catch  {
            // ignore
            }
        })();
    }, [
        sdxCollections
    ]);
    const handleBuy = async (sale)=>{
        if (!accountName) {
            ual?.showModal?.();
            return;
        }
        setTxLoading(true);
        setTxResult(null);
        try {
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
                        quantity: rawPriceToAsset(sale.listing_price, sale.listing_symbol || "XPR", sale.price?.token_precision || 4),
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
                        sale_id: parseInt(sale.sale_id, 10),
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
            // Refresh sales after buy
            setTimeout(()=>fetchSales(), 2000);
        } catch (e) {
            setTxResult({
                success: false,
                error: e.message || "Transaction failed"
            });
        } finally{
            setTxLoading(false);
        }
    };
    const handleCancel = async (saleId)=>{
        if (!accountName) return;
        setCancelLoading(saleId);
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
                        sale_id: parseInt(saleId, 10)
                    }
                }
            ];
            await signTransaction(actions);
            // Refresh my sales
            setTimeout(()=>fetchMySales(), 2000);
        } catch (e) {
            alert(`Cancel failed: ${e.message || "Unknown error"}`);
        } finally{
            setCancelLoading(null);
        }
    };
    const handleListNFT = async ()=>{
        if (!accountName || !selectedAsset || !listingPrice) return;
        setListingError("");
        setTxLoading(true);
        try {
            const priceNum = parseFloat(listingPrice);
            if (isNaN(priceNum) || priceNum < 0.0001) {
                setListingError("Price must be at least 0.0001 XPR");
                setTxLoading(false);
                return;
            }
            const formattedPrice = `${priceNum.toFixed(4)} XPR`;
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
                            parseInt(selectedAsset.asset_id, 10)
                        ],
                        listing_price: formattedPrice,
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
                            parseInt(selectedAsset.asset_id, 10)
                        ],
                        recipient_asset_ids: [],
                        memo: "sale"
                    }
                }
            ];
            const result = await signTransaction(actions);
            const txId = result?.transactionId || result?.transaction?.transaction_id || result?.processed?.id || "";
            setListingTxId(txId);
            setListingStep("success");
        } catch (e) {
            setListingError(e.message || "Failed to list NFT");
        } finally{
            setTxLoading(false);
        }
    };
    const openListingFlow = ()=>{
        setShowListingFlow(true);
        setListingStep("select");
        setSelectedAsset(null);
        setListingPrice("");
        setListingError("");
        setListingTxId("");
        fetchOwnedAssets();
    };
    const closeListingFlow = ()=>{
        setShowListingFlow(false);
        setSelectedAsset(null);
        setListingPrice("");
        setListingError("");
        if (listingStep === "success") {
            fetchMySales();
        }
    };
    const getAssetImage = (asset)=>{
        const immData = asset?.template?.immutable_data || asset?.data || {};
        return getIpfsImage(immData);
    };
    const getAssetName = (asset)=>{
        return asset?.name || asset?.data?.name || asset?.template?.immutable_data?.name || `#${asset?.asset_id}`;
    };
    const renderSaleCard = (sale, showBuy = true)=>{
        const asset = sale.assets?.[0];
        if (!asset) return null;
        const imgUrl = getAssetImage(asset);
        const name = getAssetName(asset);
        const price = sale.listing_price;
        const isSeller = sale.seller === accountName;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/80 hover:border-[#00ff88]/40 transition-all duration-200 flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `/xpr/collection/${sale.collection_name}/asset/${asset.asset_id}`,
                    className: "aspect-square bg-neutral-800 relative overflow-hidden block cursor-pointer",
                    children: imgUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: imgUrl,
                        alt: name,
                        className: "w-full h-full object-cover",
                        loading: "lazy"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-full flex items-center justify-center text-neutral-600 text-sm",
                        children: "No Image"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-4 flex flex-col gap-2 flex-1",
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
                            className: "text-[#00ff88] font-bold text-lg mt-auto",
                            children: formatPrice(parsePriceFromListing(price, sale.price?.token_precision || 4), sale.listing_symbol || "XPR")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-neutral-500 text-xs truncate",
                            children: [
                                "Seller: ",
                                sale.seller
                            ]
                        }),
                        showBuy && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                if (isSeller) return;
                                setBuyModal(sale);
                                setTxResult(null);
                            },
                            disabled: isSeller,
                            className: `mt-2 w-full py-2 rounded-lg font-semibold text-sm transition-all ${isSeller ? "bg-neutral-700 text-neutral-500 cursor-not-allowed" : "bg-[#00ff88] text-neutral-900 hover:bg-[#00cc6a] cursor-pointer"}`,
                            children: isSeller ? "Your Listing" : "Buy Now"
                        })
                    ]
                })
            ]
        }, sale.sale_id);
    };
    const tabClasses = (t)=>`px-6 py-3 rounded-lg font-semibold text-sm transition-all cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${tab === t ? "bg-[#00ff88] text-neutral-900" : "bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700"}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen bg-neutral-900 pb-16",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto px-4 pt-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-3xl font-bold text-white mb-2",
                                children: "NFT Marketplace"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-neutral-400",
                                children: "Buy and sell NFTs on XPR Network"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-3 mb-8 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:flex-wrap",
                        style: {
                            WebkitOverflowScrolling: "touch"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: tabClasses("browse"),
                                onClick: ()=>setTab("browse"),
                                children: "Browse"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: tabClasses("my-listings"),
                                onClick: ()=>{
                                    if (!accountName) {
                                        ual?.showModal?.();
                                        return;
                                    }
                                    setTab("my-listings");
                                },
                                children: "My Listings"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: tabClasses("history"),
                                onClick: ()=>setTab("history"),
                                children: "Sales History"
                            })
                        ]
                    }),
                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-400",
                        children: error
                    }),
                    tab === "browse" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        value: collectionFilter,
                                        onChange: (e)=>setCollectionFilter(e.target.value),
                                        className: "bg-neutral-800 text-white border border-neutral-700 rounded-lg px-4 py-2 text-sm focus:border-[#00ff88] focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                children: "All Collections"
                                            }),
                                            collections.map((c)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: c,
                                                    children: c
                                                }, c))
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        value: sortBy,
                                        onChange: (e)=>setSortBy(e.target.value),
                                        className: "bg-neutral-800 text-white border border-neutral-700 rounded-lg px-4 py-2 text-sm focus:border-[#00ff88] focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "newest",
                                                children: "Newest"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "price-asc",
                                                children: "Price: Low → High"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "price-desc",
                                                children: "Price: High → Low"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: fetchSales,
                                        className: "bg-neutral-800 text-neutral-400 hover:text-white px-4 py-2 rounded-lg text-sm transition-all cursor-pointer",
                                        children: "Refresh"
                                    })
                                ]
                            }),
                            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center py-20",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "animate-spin rounded-full h-8 w-8 border-2 border-[#00ff88] border-t-transparent"
                                })
                            }) : sales.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-center py-20 text-neutral-500",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-lg mb-2",
                                        children: "No listings yet"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm",
                                        children: "Be the first to list an NFT for sale!"
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                                children: sales.map((sale)=>renderSaleCard(sale))
                            })
                        ]
                    }),
                    tab === "my-listings" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: !accountName ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center py-20 text-neutral-500",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-lg mb-4",
                                    children: "Connect your wallet to view listings"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>ual?.showModal?.(),
                                    className: "bg-[#00ff88] text-neutral-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#00cc6a] transition-all cursor-pointer",
                                    children: "Connect Wallet"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: openListingFlow,
                                        className: "bg-[#9966ff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7b4fe0] transition-all cursor-pointer",
                                        children: "+ List an NFT for Sale"
                                    })
                                }),
                                loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center justify-center py-20",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "animate-spin rounded-full h-8 w-8 border-2 border-[#00ff88] border-t-transparent"
                                    })
                                }) : mySales.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-center py-20 text-neutral-500",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-lg",
                                        children: "You don't have any active listings"
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                                    children: mySales.map((sale)=>{
                                        const asset = sale.assets?.[0];
                                        if (!asset) return null;
                                        const imgUrl = getAssetImage(asset);
                                        const name = getAssetName(asset);
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/80 flex flex-col",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: `/xpr/collection/${sale.collection_name}/asset/${asset.asset_id}`,
                                                    className: "aspect-square bg-neutral-800 relative overflow-hidden block cursor-pointer",
                                                    children: imgUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: imgUrl,
                                                        alt: name,
                                                        className: "w-full h-full object-cover",
                                                        loading: "lazy"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-full h-full flex items-center justify-center text-neutral-600 text-sm",
                                                        children: "No Image"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-4 flex flex-col gap-2 flex-1",
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
                                                            className: "text-[#00ff88] font-bold text-lg mt-auto",
                                                            children: formatPrice(parsePriceFromListing(sale.listing_price, sale.price?.token_precision || 4), sale.listing_symbol || "XPR")
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>handleCancel(sale.sale_id),
                                                            disabled: cancelLoading === sale.sale_id,
                                                            className: "mt-2 w-full py-2 rounded-lg font-semibold text-sm bg-red-600 text-white hover:bg-red-700 transition-all cursor-pointer disabled:opacity-50",
                                                            children: cancelLoading === sale.sale_id ? "Cancelling..." : "Cancel Listing"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, sale.sale_id);
                                    })
                                })
                            ]
                        })
                    }),
                    tab === "history" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center justify-center py-20",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-2 border-[#00ff88] border-t-transparent"
                            })
                        }) : history.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center py-20 text-neutral-500",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-lg",
                                children: "No completed sales yet"
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                                    children: "NFT"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    className: "text-left py-3 px-4",
                                                    children: "Price"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    className: "text-left py-3 px-4",
                                                    children: "Seller"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    className: "text-left py-3 px-4",
                                                    children: "Buyer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    className: "text-left py-3 px-4",
                                                    children: "Date"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                        children: history.map((sale)=>{
                                            const asset = sale.assets?.[0];
                                            const name = asset ? getAssetName(asset) : "Unknown";
                                            const imgUrl = asset ? getAssetImage(asset) : "";
                                            const date = new Date(parseInt(sale.updated_at_time, 10));
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: "border-b border-neutral-800/50 hover:bg-neutral-800/30",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "py-3 px-4",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                imgUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: imgUrl,
                                                                    alt: name,
                                                                    className: "w-10 h-10 rounded object-cover",
                                                                    loading: "lazy"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-white font-medium truncate max-w-[150px]",
                                                                            children: name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-neutral-500 text-xs",
                                                                            children: sale.collection_name
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "py-3 px-4 text-[#00ff88] font-semibold",
                                                        children: formatPrice(parsePriceFromListing(sale.listing_price, sale.price?.token_precision || 4), sale.listing_symbol || "XPR")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "py-3 px-4 text-neutral-400",
                                                        children: sale.seller
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "py-3 px-4 text-neutral-400",
                                                        children: sale.buyer || "—"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "py-3 px-4 text-neutral-500",
                                                        children: date.toLocaleDateString()
                                                    })
                                                ]
                                            }, sale.sale_id);
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            buyModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-neutral-900 border border-neutral-700 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md p-6 pb-10 max-h-[90vh] overflow-y-auto",
                    children: txResult?.success ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[#00ff88] text-5xl mb-4",
                                children: "✓"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-white text-xl font-bold mb-2",
                                children: "Purchase Successful!"
                            }),
                            txResult.txId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: `https://explorer.xprnetwork.org/transaction/${txResult.txId}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-[#9966ff] underline text-sm",
                                children: "View Transaction"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>{
                                    setBuyModal(null);
                                    setTxResult(null);
                                },
                                className: "mt-6 w-full py-3 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all cursor-pointer",
                                children: "Close"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-white text-xl font-bold mb-4",
                                children: "Confirm Purchase"
                            }),
                            buyModal.assets?.[0] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-4 mb-4",
                                children: [
                                    getAssetImage(buyModal.assets[0]) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: getAssetImage(buyModal.assets[0]),
                                        alt: "",
                                        className: "w-20 h-20 rounded-lg object-cover"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-white font-semibold",
                                                children: getAssetName(buyModal.assets[0])
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-neutral-500 text-sm",
                                                children: buyModal.collection_name
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-neutral-800 rounded-lg p-4 mb-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-neutral-400 text-sm mb-1",
                                        children: "Total Price"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-[#00ff88] text-2xl font-bold",
                                        children: formatPrice(parsePriceFromListing(buyModal.listing_price, buyModal.price?.token_precision || 4), buyModal.listing_symbol || "XPR")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-neutral-500 text-sm mb-4",
                                children: [
                                    "Seller: ",
                                    buyModal.seller
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
                                            setBuyModal(null);
                                            setTxResult(null);
                                        },
                                        className: "flex-1 py-3 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all cursor-pointer",
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>handleBuy(buyModal),
                                        disabled: txLoading,
                                        className: "flex-1 py-3 rounded-lg bg-[#00ff88] text-neutral-900 font-semibold hover:bg-[#00cc6a] transition-all disabled:opacity-50 cursor-pointer",
                                        children: txLoading ? "Processing..." : "Confirm Buy"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            showListingFlow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-neutral-900 border border-neutral-700 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl p-6 pb-10 max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "text-white text-xl font-bold",
                                    children: [
                                        listingStep === "select" && "Select an NFT to List",
                                        listingStep === "price" && "Set Your Price",
                                        listingStep === "preview" && "Preview Listing",
                                        listingStep === "success" && "Listed Successfully!"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: closeListingFlow,
                                    className: "text-neutral-500 hover:text-white text-2xl cursor-pointer",
                                    children: "\xd7"
                                })
                            ]
                        }),
                        listingStep === "select" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                loadingAssets ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center justify-center py-16",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "animate-spin rounded-full h-8 w-8 border-2 border-[#00ff88] border-t-transparent"
                                    })
                                }) : ownedAssets.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-neutral-500 text-center py-16",
                                    children: "You don't own any NFTs to list"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto",
                                    children: ownedAssets.map((asset)=>{
                                        const imgUrl = getAssetImage(asset);
                                        const name = getAssetName(asset);
                                        const isSelected = selectedAsset?.asset_id === asset.asset_id;
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>setSelectedAsset(asset),
                                            className: `rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${isSelected ? "border-[#00ff88] shadow-[0_0_12px_rgba(0,255,136,0.3)]" : "border-neutral-800 hover:border-neutral-600"}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "aspect-square bg-neutral-800 overflow-hidden",
                                                    children: imgUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: imgUrl,
                                                        alt: name,
                                                        className: "w-full h-full object-cover",
                                                        loading: "lazy"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-full h-full flex items-center justify-center text-neutral-600 text-xs",
                                                        children: "No Img"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-white text-xs font-medium truncate",
                                                            children: name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-neutral-500 text-[10px] truncate",
                                                            children: asset.collection?.collection_name
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, asset.asset_id);
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-6 flex justify-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>{
                                            if (selectedAsset) setListingStep("price");
                                        },
                                        disabled: !selectedAsset,
                                        className: "px-6 py-3 rounded-lg bg-[#00ff88] text-neutral-900 font-semibold hover:bg-[#00cc6a] transition-all disabled:opacity-30 cursor-pointer",
                                        children: "Next"
                                    })
                                })
                            ]
                        }),
                        listingStep === "price" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
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
                                            value: listingPrice,
                                            onChange: (e)=>{
                                                setListingPrice(e.target.value);
                                                setListingError("");
                                            },
                                            placeholder: "0.0000",
                                            className: "w-full bg-neutral-800 text-white border border-neutral-700 rounded-lg px-4 py-3 text-lg focus:border-[#00ff88] focus:outline-none"
                                        }),
                                        listingPrice && parseFloat(listingPrice) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-neutral-500 text-sm mt-2",
                                            children: [
                                                "Listing for:",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[#00ff88]",
                                                    children: formatPrice(parseFloat(listingPrice))
                                                })
                                            ]
                                        }),
                                        listingError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-red-400 text-sm mt-2",
                                            children: listingError
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-3 justify-end",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>setListingStep("select"),
                                            className: "px-6 py-3 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all cursor-pointer",
                                            children: "Back"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>{
                                                const p = parseFloat(listingPrice);
                                                if (isNaN(p) || p < 0.0001) {
                                                    setListingError("Price must be a number >= 0.0001 XPR");
                                                    return;
                                                }
                                                setListingStep("preview");
                                            },
                                            className: "px-6 py-3 rounded-lg bg-[#00ff88] text-neutral-900 font-semibold hover:bg-[#00cc6a] transition-all cursor-pointer",
                                            children: "Preview"
                                        })
                                    ]
                                })
                            ]
                        }),
                        listingStep === "preview" && selectedAsset && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-6 mb-6",
                                    children: [
                                        getAssetImage(selectedAsset) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: getAssetImage(selectedAsset),
                                            alt: "",
                                            className: "w-32 h-32 rounded-xl object-cover"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-white text-lg font-bold",
                                                    children: getAssetName(selectedAsset)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-neutral-500 text-sm",
                                                    children: selectedAsset.collection?.collection_name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-[#00ff88] text-2xl font-bold mt-2",
                                                    children: formatPrice(parseFloat(listingPrice))
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                listingError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm",
                                    children: listingError
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-3 justify-end",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>setListingStep("price"),
                                            className: "px-6 py-3 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all cursor-pointer",
                                            children: "Back"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: handleListNFT,
                                            disabled: txLoading,
                                            className: "px-6 py-3 rounded-lg bg-[#9966ff] text-white font-semibold hover:bg-[#7b4fe0] transition-all disabled:opacity-50 cursor-pointer",
                                            children: txLoading ? "Processing..." : "Confirm & List"
                                        })
                                    ]
                                })
                            ]
                        }),
                        listingStep === "success" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center py-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-[#00ff88] text-5xl mb-4",
                                    children: "✓"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-white text-xl font-bold mb-2",
                                    children: "NFT Listed for Sale!"
                                }),
                                listingTxId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: `https://explorer.xprnetwork.org/transaction/${listingTxId}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-[#9966ff] underline text-sm",
                                    children: "View Transaction"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: closeListingFlow,
                                    className: "mt-6 w-full py-3 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all cursor-pointer",
                                    children: "Done"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_3__/* .withUAL */ .D)(Marketplace));


/***/ })

};
;