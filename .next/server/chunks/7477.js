"use strict";
exports.id = 7477;
exports.ids = [7477,6478];
exports.modules = {

/***/ 6478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pluginInfo": () => (/* binding */ pluginInfo)
/* harmony export */ });
const pluginInfo = {
    name: "Token Airdrop",
    page: "plugins",
    description: "Airdrop NFTs to holders of SimpleDEX tokens. Select a token, fetch holders, and distribute NFTs to the entire community."
};


/***/ }),

/***/ 7477:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6268);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8820);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6903);
/* harmony import */ var _services_simpledex_getCreatorsService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6924);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6478);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Modal__WEBPACK_IMPORTED_MODULE_7__]);
_components_Modal__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const PAGE_SIZE = 50;
function formatMcap(mcap) {
    if (mcap >= 1000000) return `$${(mcap / 1000000).toFixed(2)}M`;
    if (mcap >= 1000) return `$${(mcap / 1000).toFixed(1)}K`;
    return `$${mcap.toFixed(2)}`;
}
function formatPrice(price) {
    if (price === 0) return "$0";
    if (price < 0.000001) return `$${price.toExponential(2)}`;
    if (price < 0.01) return `$${price.toFixed(7)}`;
    return `$${price.toFixed(4)}`;
}
function formatAmount(amount) {
    if (amount >= 1000000000) return `${(amount / 1000000000).toFixed(2)}B`;
    if (amount >= 1000000) return `${(amount / 1000000).toFixed(2)}M`;
    if (amount >= 1000) return `${(amount / 1000).toFixed(1)}K`;
    return amount.toFixed(2);
}
function TokenAirdrop({ ual  }) {
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { chainKey  } = router.query;
    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedToken, setSelectedToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [selectedTokenImage, setSelectedTokenImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [holders, setHolders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedAccounts, setSelectedAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Set());
    const [loadingTokens, setLoadingTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loadingHolders, setLoadingHolders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [tokenSearch, setTokenSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [holderSearch, setHolderSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: ""
    });
    const [tokenFetchError, setTokenFetchError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [holderFetchError, setHolderFetchError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [copiedHolders, setCopiedHolders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [sortMode, setSortMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("balance-desc");
    const [holderPage, setHolderPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    // Dropdown states for collection/schema/template
    const [collections, setCollections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingCollections, setLoadingCollections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedCollection, setSelectedCollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [schemas, setSchemas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingSchemas, setLoadingSchemas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedSchema, setSelectedSchema] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [templates, setTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingTemplates, setLoadingTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedTemplateId, setSelectedTemplateId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const chainIdLogged = ual?.activeUser?.chainId ?? ual?.activeUser?.chain?.chainId;
    const chainId = _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_8__[chainKey]?.chainId;
    async function fetchTokens() {
        setLoadingTokens(true);
        setTokenFetchError(null);
        try {
            const data = await (0,_services_simpledex_getCreatorsService__WEBPACK_IMPORTED_MODULE_10__/* .getSimpleDexTokens */ .Ui)();
            setTokens(data);
        } catch (err) {
            console.error("Token fetch error:", err);
            setTokens([]);
            setTokenFetchError("Unable to load tokens from SimpleDEX. Please check your connection and try again.");
        }
        setLoadingTokens(false);
    }
    async function fetchHolders(token) {
        setLoadingHolders(true);
        setHolders([]);
        setSelectedAccounts(new Set());
        setSelectedTokenImage(null);
        setHolderFetchError(null);
        setHolderPage(1);
        try {
            const fullRes = await fetch(`https://indexer.protonnz.com/api/tokens?symbol=${token.symbol}`, {
                headers: {
                    "User-Agent": "XPR-NFT-Creator/1.0"
                }
            });
            if (fullRes.ok) {
                const fullData = await fullRes.json();
                const fullToken = (fullData.tokens || [])[0];
                if (fullToken?.imageUrl) {
                    setSelectedTokenImage(fullToken.imageUrl);
                }
            }
        } catch  {
        // image is optional, continue
        }
        try {
            const data = await (0,_services_simpledex_getCreatorsService__WEBPACK_IMPORTED_MODULE_10__/* .getTokenHolders */ .gb)(token.tokenId);
            setHolders(data);
            setSelectedAccounts(new Set(data.map((h)=>h.account)));
        } catch (err) {
            console.error("Holder fetch error:", err);
            setHolders([]);
            setHolderFetchError(`Could not load holders for ${token.symbol}. The indexer may be temporarily unavailable.`);
        }
        setLoadingHolders(false);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (chainId && chainIdLogged && chainId === chainIdLogged) {
            fetchTokens();
        }
    }, [
        chainId,
        chainIdLogged
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!ual?.activeUser?.accountName) return;
        const accountName = ual.activeUser.accountName;
        const aaEndpoint = _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_8__[chainKey]?.aaEndpoint;
        if (!aaEndpoint) return;
        setLoadingCollections(true);
        setCollections([]);
        setSelectedCollection("");
        setSchemas([]);
        setSelectedSchema("");
        setTemplates([]);
        setSelectedTemplateId("");
        fetch(`${aaEndpoint}/atomicassets/v1/collections?author=${accountName}&limit=100`).then((res)=>res.json()).then((data)=>{
            const names = (data.data || []).map((c)=>c.collection_name);
            setCollections(names);
            if (names.length === 1) setSelectedCollection(names[0]);
        }).catch(()=>setCollections([])).finally(()=>setLoadingCollections(false));
    }, [
        ual?.activeUser?.accountName,
        chainKey
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!selectedCollection) {
            setSchemas([]);
            setSelectedSchema("");
            setTemplates([]);
            setSelectedTemplateId("");
            return;
        }
        const aaEndpoint = _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_8__[chainKey]?.aaEndpoint;
        if (!aaEndpoint) return;
        setLoadingSchemas(true);
        setSchemas([]);
        setSelectedSchema("");
        setTemplates([]);
        setSelectedTemplateId("");
        fetch(`${aaEndpoint}/atomicassets/v1/schemas?collection_name=${selectedCollection}&limit=100`).then((res)=>res.json()).then((data)=>{
            const names = (data.data || []).map((s)=>s.schema_name);
            setSchemas(names);
            if (names.length === 1) setSelectedSchema(names[0]);
        }).catch(()=>setSchemas([])).finally(()=>setLoadingSchemas(false));
    }, [
        selectedCollection,
        chainKey
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!selectedCollection || !selectedSchema) {
            setTemplates([]);
            setSelectedTemplateId("");
            return;
        }
        const aaEndpoint = _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_8__[chainKey]?.aaEndpoint;
        if (!aaEndpoint) return;
        setLoadingTemplates(true);
        setTemplates([]);
        setSelectedTemplateId("");
        fetch(`${aaEndpoint}/atomicassets/v1/templates?collection_name=${selectedCollection}&schema_name=${selectedSchema}&limit=100`).then((res)=>res.json()).then((data)=>{
            const items = (data.data || []).map((t)=>({
                    template_id: t.template_id,
                    name: t.immutable_data?.name || t.name || `Template`
                }));
            setTemplates(items);
            if (items.length === 1) setSelectedTemplateId(items[0].template_id);
        }).catch(()=>setTemplates([])).finally(()=>setLoadingTemplates(false));
    }, [
        selectedCollection,
        selectedSchema,
        chainKey
    ]);
    const filteredTokens = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>tokens.filter((t)=>t.name?.toLowerCase().includes(tokenSearch.toLowerCase()) || t.symbol?.toLowerCase().includes(tokenSearch.toLowerCase())), [
        tokens,
        tokenSearch
    ]);
    const sortedFilteredHolders = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const filtered = holders.filter((h)=>h.account?.toLowerCase().includes(holderSearch.toLowerCase()));
        if (sortMode === "balance-desc") {
            return [
                ...filtered
            ].sort((a, b)=>b.amount - a.amount);
        }
        return [
            ...filtered
        ].sort((a, b)=>a.account.localeCompare(b.account));
    }, [
        holders,
        holderSearch,
        sortMode
    ]);
    const paginatedHolders = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>sortedFilteredHolders.slice(0, holderPage * PAGE_SIZE), [
        sortedFilteredHolders,
        holderPage
    ]);
    const hasMoreHolders = paginatedHolders.length < sortedFilteredHolders.length;
    function toggleHolder(account) {
        setSelectedAccounts((prev)=>{
            const next = new Set(prev);
            if (next.has(account)) next.delete(account);
            else next.add(account);
            return next;
        });
    }
    function selectAll() {
        setSelectedAccounts(new Set(sortedFilteredHolders.map((h)=>h.account)));
    }
    function deselectAll() {
        setSelectedAccounts(new Set());
    }
    function copyHolderList() {
        const list = Array.from(selectedAccounts).join("\n");
        navigator.clipboard.writeText(list).then(()=>{
            setCopiedHolders(true);
            setTimeout(()=>setCopiedHolders(false), 2000);
        });
    }
    async function handleAirdrop() {
        if (!selectedTemplateId || selectedAccounts.size === 0 || !ual?.activeUser) return;
        setSubmitting(true);
        try {
            const holderAccounts = Array.from(selectedAccounts);
            const actions = holderAccounts.map((account)=>({
                    account: "atomicassets",
                    name: "mintasset",
                    authorization: [
                        {
                            actor: ual.activeUser.accountName,
                            permission: "active"
                        }
                    ],
                    data: {
                        authorized_minter: ual.activeUser.accountName,
                        collection_name: selectedCollection,
                        schema_name: selectedSchema,
                        template_id: parseInt(selectedTemplateId),
                        new_asset_owner: account,
                        immutable_data: [],
                        mutable_data: [],
                        tokens_to_back: []
                    }
                }));
            const batchSize = 50;
            const transactionsIDs = [];
            for(let i = 0; i < actions.length; i += batchSize){
                const batch = actions.slice(i, i + batchSize);
                const result = await ual.activeUser.signTransaction({
                    actions: batch
                }, {
                    blocksBehind: 3,
                    expireSeconds: 60
                });
                if (result.transactionId) transactionsIDs.push(result.transactionId);
            }
            modalRef.current?.openModal();
            setModal({
                title: "Airdrop Successful!",
                message: `Minted NFTs to ${holderAccounts.length} token holders across ${transactionsIDs.length} transaction(s).`,
                transactionsIDs,
                isSuccess: true
            });
        } catch (error) {
            modalRef.current?.openModal();
            setModal({
                title: "Airdrop Failed",
                message: error?.cause?.json?.error?.details?.[0]?.message || error?.message || "Something went wrong. Please try again.",
                details: undefined,
                isSuccess: false
            });
        }
        setSubmitting(false);
    }
    function handleLogin() {
        ual?.showModal();
    }
    if (chainId && chainIdLogged && chainId === chainIdLogged) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container flex flex-col gap-10 pb-16",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${_config__WEBPACK_IMPORTED_MODULE_9__.pluginInfo.name} - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_11__/* .appName */ .DJ}`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col gap-2",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-3 rounded-xl flex items-center justify-center",
                                style: {
                                    background: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.05))",
                                    border: "1px solid rgba(0,255,136,0.3)",
                                    boxShadow: "0 0 20px rgba(0,255,136,0.1)"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Coins, {
                                    size: 32,
                                    style: {
                                        color: "#00ff88"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "headline-1",
                                        style: {
                                            color: "#00ff88",
                                            textShadow: "0 0 20px rgba(0,255,136,0.5)"
                                        },
                                        children: _config__WEBPACK_IMPORTED_MODULE_9__.pluginInfo.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "body-1 text-neutral-400",
                                        children: "Airdrop NFTs to SimpleDEX / SimpleLaunch token holders"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rounded-2xl p-4 sm:p-6",
                    style: {
                        background: "rgba(0,0,0,0.6)",
                        border: "1px solid rgba(0,255,136,0.15)",
                        boxShadow: "0 0 30px rgba(0,255,136,0.05)"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "headline-3 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "#00ff88",
                                                textShadow: "0 0 10px rgba(0,255,136,0.6)"
                                            },
                                            children: "01"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-white",
                                            children: "Select Token"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-sm font-normal text-neutral-500",
                                            children: [
                                                "(",
                                                tokens.length,
                                                " tokens loaded)"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: fetchTokens,
                                    disabled: loadingTokens,
                                    title: "Refresh tokens",
                                    style: {
                                        color: "#00ff88",
                                        opacity: 0.7
                                    },
                                    className: "hover:opacity-100 transition-opacity",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.ArrowsClockwise, {
                                        size: 20,
                                        className: loadingTokens ? "animate-spin" : ""
                                    })
                                })
                            ]
                        }),
                        tokenFetchError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-3 rounded-xl px-4 py-3 mb-5",
                            style: {
                                background: "rgba(255,77,77,0.08)",
                                border: "1px solid rgba(255,77,77,0.25)"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.WarningCircle, {
                                    size: 18,
                                    style: {
                                        color: "#ff4d4d",
                                        flexShrink: 0
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm",
                                    style: {
                                        color: "#ff4d4d"
                                    },
                                    children: tokenFetchError
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: fetchTokens,
                                    className: "ml-auto text-xs underline",
                                    style: {
                                        color: "#ff4d4d"
                                    },
                                    children: "Retry"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-3 rounded-xl px-4 py-3",
                                style: {
                                    background: "rgba(0,0,0,0.5)",
                                    border: "1px solid rgba(0,255,136,0.2)"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.MagnifyingGlass, {
                                        size: 18,
                                        style: {
                                            color: "#00ff88",
                                            opacity: 0.7
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        placeholder: "Search by name or symbol...",
                                        value: tokenSearch,
                                        onChange: (e)=>setTokenSearch(e.target.value),
                                        className: "flex-1 bg-transparent outline-none text-white placeholder-neutral-600",
                                        style: {
                                            fontSize: "0.95rem"
                                        }
                                    }),
                                    tokenSearch && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        onClick: ()=>setTokenSearch(""),
                                        className: "text-neutral-600 hover:text-neutral-400 transition-colors text-xs",
                                        children: "✕"
                                    })
                                ]
                            })
                        }),
                        loadingTokens ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center gap-3 py-16",
                            style: {
                                color: "#00ff88"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "matrix-spinner",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "matrix-spinner-outer"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "matrix-spinner-inner"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "matrix-spinner-dot"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm",
                                    children: "Loading tokens from SimpleDEX..."
                                })
                            ]
                        }) : filteredTokens.length === 0 && !tokenFetchError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center py-12 text-neutral-500",
                            children: tokenSearch ? `No tokens found matching "${tokenSearch}"` : "No tokens available"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 overflow-y-auto pr-1",
                            style: {
                                maxHeight: "420px"
                            },
                            children: filteredTokens.map((token)=>{
                                const isSelected = selectedToken?.tokenId === token.tokenId;
                                const change = token.change24h ?? 0;
                                const isUp = change >= 0;
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setSelectedToken(token);
                                        fetchHolders(token);
                                    },
                                    className: "text-left rounded-xl p-4 transition-all duration-200",
                                    style: {
                                        background: isSelected ? "rgba(0,255,136,0.08)" : "rgba(255,255,255,0.02)",
                                        border: isSelected ? "1px solid rgba(0,255,136,0.5)" : "1px solid rgba(255,255,255,0.06)",
                                        boxShadow: isSelected ? "0 0 20px rgba(0,255,136,0.1), inset 0 0 20px rgba(0,255,136,0.03)" : "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                token.imageUrl ? // eslint-disable-next-line @next/next/no-img-element
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: token.imageUrl,
                                                    alt: token.symbol,
                                                    className: "w-10 h-10 rounded-lg object-cover flex-shrink-0",
                                                    style: {
                                                        border: isSelected ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(255,255,255,0.08)"
                                                    },
                                                    onError: (e)=>{
                                                        const el = e.target;
                                                        el.style.display = "none";
                                                    }
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0",
                                                    style: {
                                                        background: isSelected ? "rgba(0,255,136,0.15)" : "rgba(255,255,255,0.05)",
                                                        border: isSelected ? "1px solid rgba(0,255,136,0.3)" : "1px solid rgba(255,255,255,0.08)",
                                                        color: isSelected ? "#00ff88" : "#aaa"
                                                    },
                                                    children: token.symbol.slice(0, 3)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "font-bold text-sm truncate",
                                                                    style: {
                                                                        color: isSelected ? "#00ff88" : "#fff"
                                                                    },
                                                                    children: token.symbol
                                                                }),
                                                                token.graduated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-xs px-1.5 py-0.5 rounded-md font-medium",
                                                                    style: {
                                                                        background: "rgba(0,255,136,0.1)",
                                                                        color: "#00ff88",
                                                                        border: "1px solid rgba(0,255,136,0.2)",
                                                                        fontSize: "0.65rem"
                                                                    },
                                                                    children: "DEX"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-xs text-neutral-500 truncate mt-0.5",
                                                            children: token.name
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-3 flex items-end justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-xs font-mono font-semibold",
                                                            style: {
                                                                color: isSelected ? "#00ff88" : "#e0e0e0"
                                                            },
                                                            children: formatPrice(token.price)
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-xs text-neutral-600 mt-0.5",
                                                            children: [
                                                                "MCap: ",
                                                                formatMcap(token.mcap)
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                change !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-1 text-xs font-medium",
                                                    style: {
                                                        color: isUp ? "#00ff88" : "#ff4d4d"
                                                    },
                                                    children: [
                                                        isUp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.TrendUp, {
                                                            size: 12
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.TrendDown, {
                                                            size: 12
                                                        }),
                                                        isUp ? "+" : "",
                                                        change.toFixed(2),
                                                        "%"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, token.tokenId);
                            })
                        })
                    ]
                }),
                selectedToken && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rounded-2xl p-4 sm:p-6",
                    style: {
                        background: "rgba(0,0,0,0.6)",
                        border: "1px solid rgba(0,255,136,0.15)",
                        boxShadow: "0 0 30px rgba(0,255,136,0.05)"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-3 flex-1 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: "headline-3 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        color: "#00ff88",
                                                        textShadow: "0 0 10px rgba(0,255,136,0.6)"
                                                    },
                                                    children: "02"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-white",
                                                    children: "Holders"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                selectedTokenImage && // eslint-disable-next-line @next/next/no-img-element
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: selectedTokenImage,
                                                    alt: selectedToken.symbol,
                                                    className: "w-8 h-8 rounded-lg object-cover",
                                                    style: {
                                                        border: "1px solid rgba(0,255,136,0.3)"
                                                    },
                                                    onError: (e)=>{
                                                        e.target.style.display = "none";
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-bold",
                                                    style: {
                                                        color: "#00ff88"
                                                    },
                                                    children: selectedToken.symbol
                                                })
                                            ]
                                        }),
                                        !loadingHolders && holders.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-sm px-2.5 py-1 rounded-lg font-mono",
                                            style: {
                                                background: "rgba(0,255,136,0.1)",
                                                color: "#00ff88",
                                                border: "1px solid rgba(0,255,136,0.2)"
                                            },
                                            children: [
                                                holders.length,
                                                " holders"
                                            ]
                                        })
                                    ]
                                }),
                                !loadingHolders && holders.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-2 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            onClick: ()=>setSortMode((prev)=>prev === "balance-desc" ? "alpha-asc" : "balance-desc"),
                                            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all",
                                            title: sortMode === "balance-desc" ? "Sort by balance (high to low)" : "Sort A-Z",
                                            style: {
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                color: "#aaa"
                                            },
                                            children: [
                                                sortMode === "balance-desc" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.SortDescending, {
                                                    size: 14
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.SortAscending, {
                                                    size: 14
                                                }),
                                                sortMode === "balance-desc" ? "Balance" : "A–Z"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            onClick: selectAll,
                                            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all",
                                            style: {
                                                background: "rgba(0,255,136,0.1)",
                                                border: "1px solid rgba(0,255,136,0.25)",
                                                color: "#00ff88"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CheckSquare, {
                                                    size: 14
                                                }),
                                                "All"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            onClick: deselectAll,
                                            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all",
                                            style: {
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                color: "#aaa"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Square, {
                                                    size: 14
                                                }),
                                                "None"
                                            ]
                                        }),
                                        selectedAccounts.size > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            onClick: copyHolderList,
                                            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all",
                                            style: {
                                                background: copiedHolders ? "rgba(0,255,136,0.15)" : "rgba(255,255,255,0.04)",
                                                border: copiedHolders ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(255,255,255,0.1)",
                                                color: copiedHolders ? "#00ff88" : "#aaa"
                                            },
                                            children: [
                                                copiedHolders ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Check, {
                                                    size: 14
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Copy, {
                                                    size: 14
                                                }),
                                                copiedHolders ? "Copied!" : `Copy (${selectedAccounts.size})`
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-xs text-neutral-500",
                                            children: [
                                                selectedAccounts.size,
                                                " selected"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        holderFetchError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-3 rounded-xl px-4 py-3 mb-4",
                            style: {
                                background: "rgba(255,77,77,0.08)",
                                border: "1px solid rgba(255,77,77,0.25)"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.WarningCircle, {
                                    size: 18,
                                    style: {
                                        color: "#ff4d4d",
                                        flexShrink: 0
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm",
                                    style: {
                                        color: "#ff4d4d"
                                    },
                                    children: holderFetchError
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>fetchHolders(selectedToken),
                                    className: "ml-auto text-xs underline",
                                    style: {
                                        color: "#ff4d4d"
                                    },
                                    children: "Retry"
                                })
                            ]
                        }),
                        loadingHolders ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center gap-3 py-16",
                            style: {
                                color: "#00ff88"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "matrix-spinner",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "matrix-spinner-outer"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "matrix-spinner-inner"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "matrix-spinner-dot"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm",
                                    children: "Fetching holder list..."
                                })
                            ]
                        }) : holders.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center gap-3 rounded-xl px-4 py-2.5",
                                        style: {
                                            background: "rgba(0,0,0,0.4)",
                                            border: "1px solid rgba(0,255,136,0.1)"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.MagnifyingGlass, {
                                                size: 16,
                                                style: {
                                                    color: "#00ff88",
                                                    opacity: 0.5
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                placeholder: "Search holders...",
                                                value: holderSearch,
                                                onChange: (e)=>{
                                                    setHolderSearch(e.target.value);
                                                    setHolderPage(1);
                                                },
                                                className: "flex-1 bg-transparent outline-none text-white placeholder-neutral-700 text-sm"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "rounded-xl overflow-x-auto",
                                    style: {
                                        background: "rgba(0,0,0,0.3)",
                                        border: "1px solid rgba(0,255,136,0.08)"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            minWidth: "480px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center px-3 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider sticky top-0",
                                                style: {
                                                    background: "rgba(0,0,0,0.8)",
                                                    borderBottom: "1px solid rgba(0,255,136,0.1)",
                                                    color: "rgba(0,255,136,0.5)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-5 sm:w-7"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-8",
                                                        children: "#"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex-1",
                                                        children: "Account"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-right w-20 sm:w-24",
                                                        children: "Balance"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-right w-20 sm:w-24",
                                                        children: "Wallet"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-right w-16 sm:w-20",
                                                        children: "LP"
                                                    })
                                                ]
                                            }),
                                            paginatedHolders.map((holder, i)=>{
                                                const isChecked = selectedAccounts.has(holder.account);
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    type: "button",
                                                    onClick: ()=>toggleHolder(holder.account),
                                                    className: "w-full flex items-center px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm transition-all",
                                                    style: {
                                                        background: isChecked ? "rgba(0,255,136,0.04)" : "transparent",
                                                        borderBottom: "1px solid rgba(255,255,255,0.03)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-5 sm:w-7 flex-shrink-0",
                                                            children: isChecked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CheckSquare, {
                                                                size: 15,
                                                                style: {
                                                                    color: "#00ff88"
                                                                }
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Square, {
                                                                size: 15,
                                                                className: "text-neutral-700"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-8 text-left text-neutral-500 font-mono text-xs",
                                                            children: i + 1
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex-1 text-left font-mono font-medium truncate text-xs sm:text-sm",
                                                            style: {
                                                                color: isChecked ? "#00ff88" : "#ccc"
                                                            },
                                                            children: holder.account
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-20 sm:w-24 text-right font-mono text-xs",
                                                            style: {
                                                                color: isChecked ? "#00ff88" : "#888"
                                                            },
                                                            children: formatAmount(holder.amount)
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-20 sm:w-24 text-right font-mono text-xs text-neutral-600",
                                                            children: holder.walletAmount != null ? formatAmount(holder.walletAmount) : "—"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-16 sm:w-20 text-right font-mono text-xs text-neutral-600",
                                                            children: holder.lpAmount != null && holder.lpAmount > 0 ? formatAmount(holder.lpAmount) : "—"
                                                        })
                                                    ]
                                                }, holder.account);
                                            })
                                        ]
                                    })
                                }),
                                sortedFilteredHolders.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-center py-8 text-neutral-600 text-sm",
                                    children: [
                                        'No holders match "',
                                        holderSearch,
                                        '"'
                                    ]
                                }),
                                hasMoreHolders && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center mt-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        onClick: ()=>setHolderPage((p)=>p + 1),
                                        className: "px-6 py-2 rounded-xl text-sm font-medium transition-all",
                                        style: {
                                            background: "rgba(0,255,136,0.08)",
                                            border: "1px solid rgba(0,255,136,0.25)",
                                            color: "#00ff88"
                                        },
                                        children: [
                                            "Load More (",
                                            sortedFilteredHolders.length - paginatedHolders.length,
                                            " ",
                                            "remaining)"
                                        ]
                                    })
                                }),
                                !hasMoreHolders && sortedFilteredHolders.length > PAGE_SIZE && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-center mt-3 text-xs text-neutral-600",
                                    children: [
                                        "Showing all ",
                                        sortedFilteredHolders.length,
                                        " holders"
                                    ]
                                })
                            ]
                        }) : !holderFetchError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center py-12 text-neutral-500",
                            children: [
                                "No holders found for ",
                                selectedToken.symbol,
                                "."
                            ]
                        }) : null
                    ]
                }),
                selectedToken && selectedAccounts.size > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rounded-2xl p-4 sm:p-6",
                    style: {
                        background: "rgba(0,0,0,0.6)",
                        border: "1px solid rgba(0,255,136,0.15)",
                        boxShadow: "0 0 30px rgba(0,255,136,0.05)"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "headline-3 mb-6 flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        color: "#00ff88",
                                        textShadow: "0 0 10px rgba(0,255,136,0.6)"
                                    },
                                    children: "03"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-white",
                                    children: "Configure Airdrop"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-sm font-normal px-2.5 py-1 rounded-lg font-mono",
                                    style: {
                                        background: "rgba(0,255,136,0.1)",
                                        color: "#00ff88",
                                        border: "1px solid rgba(0,255,136,0.2)"
                                    },
                                    children: [
                                        selectedAccounts.size,
                                        " recipients"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "body-2 font-bold text-white",
                                            children: "Collection Name"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                    value: selectedCollection,
                                                    onChange: (e)=>setSelectedCollection(e.target.value),
                                                    disabled: loadingCollections || collections.length === 0,
                                                    className: "w-full px-4 py-3 rounded-xl text-white text-sm appearance-none cursor-pointer pr-10",
                                                    style: {
                                                        background: "rgb(23,23,23)",
                                                        border: "1px solid rgba(0,255,136,0.25)",
                                                        opacity: loadingCollections || collections.length === 0 ? 0.5 : 1
                                                    },
                                                    children: loadingCollections ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "Loading collections..."
                                                    }) : collections.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "No collections found"
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "",
                                                                children: "Select collection..."
                                                            }),
                                                            collections.map((c)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: c,
                                                                    children: c
                                                                }, c))
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none",
                                                    children: loadingCollections ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CircleNotch, {
                                                        size: 16,
                                                        className: "animate-spin",
                                                        style: {
                                                            color: "#00ff88"
                                                        }
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-neutral-500 text-xs",
                                                        children: "▼"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "body-2 font-bold text-white",
                                            children: "Schema Name"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                    value: selectedSchema,
                                                    onChange: (e)=>setSelectedSchema(e.target.value),
                                                    disabled: !selectedCollection || loadingSchemas || schemas.length === 0,
                                                    className: "w-full px-4 py-3 rounded-xl text-white text-sm appearance-none cursor-pointer pr-10",
                                                    style: {
                                                        background: "rgb(23,23,23)",
                                                        border: "1px solid rgba(0,255,136,0.25)",
                                                        opacity: !selectedCollection || loadingSchemas || schemas.length === 0 ? 0.5 : 1
                                                    },
                                                    children: !selectedCollection ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "Select collection first"
                                                    }) : loadingSchemas ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "Loading schemas..."
                                                    }) : schemas.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "No schemas found"
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "",
                                                                children: "Select schema..."
                                                            }),
                                                            schemas.map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: s,
                                                                    children: s
                                                                }, s))
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none",
                                                    children: loadingSchemas ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CircleNotch, {
                                                        size: 16,
                                                        className: "animate-spin",
                                                        style: {
                                                            color: "#00ff88"
                                                        }
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-neutral-500 text-xs",
                                                        children: "▼"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "body-2 font-bold text-white",
                                            children: "Template ID"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                    value: selectedTemplateId,
                                                    onChange: (e)=>setSelectedTemplateId(e.target.value),
                                                    disabled: !selectedSchema || loadingTemplates || templates.length === 0,
                                                    className: "w-full px-4 py-3 rounded-xl text-white text-sm appearance-none cursor-pointer pr-10",
                                                    style: {
                                                        background: "rgb(23,23,23)",
                                                        border: "1px solid rgba(0,255,136,0.25)",
                                                        opacity: !selectedSchema || loadingTemplates || templates.length === 0 ? 0.5 : 1
                                                    },
                                                    children: !selectedSchema ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "Select schema first"
                                                    }) : loadingTemplates ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "Loading templates..."
                                                    }) : templates.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "No templates found"
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "",
                                                                children: "Select template..."
                                                            }),
                                                            templates.map((t)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                                                    value: t.template_id,
                                                                    children: [
                                                                        t.name,
                                                                        " (#",
                                                                        t.template_id,
                                                                        ")"
                                                                    ]
                                                                }, t.template_id))
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none",
                                                    children: loadingTemplates ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CircleNotch, {
                                                        size: 16,
                                                        className: "animate-spin",
                                                        style: {
                                                            color: "#00ff88"
                                                        }
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-neutral-500 text-xs",
                                                        children: "▼"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "rounded-xl p-4 mb-6",
                            style: {
                                background: "rgba(0,255,136,0.04)",
                                border: "1px solid rgba(0,255,136,0.12)"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap gap-6 text-sm",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-neutral-500 text-xs mb-1",
                                                children: "Token"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "font-semibold",
                                                style: {
                                                    color: "#00ff88"
                                                },
                                                children: selectedToken.symbol
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-neutral-500 text-xs mb-1",
                                                children: "Recipients"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "font-semibold text-white",
                                                children: selectedAccounts.size
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-neutral-500 text-xs mb-1",
                                                children: "Collection"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "font-semibold text-white font-mono",
                                                children: selectedCollection || "—"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-neutral-500 text-xs mb-1",
                                                children: "Schema"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "font-semibold text-white font-mono",
                                                children: selectedSchema || "—"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-neutral-500 text-xs mb-1",
                                                children: "Template ID"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "font-semibold text-white font-mono",
                                                children: [
                                                    "#",
                                                    selectedTemplateId || "—"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-neutral-500 text-xs mb-1",
                                                children: "Transactions"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "font-semibold text-white",
                                                children: [
                                                    Math.ceil(selectedAccounts.size / 50),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-neutral-500 font-normal",
                                                        children: [
                                                            " ",
                                                            "(50/batch)"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200",
                            disabled: !selectedCollection || !selectedSchema || !selectedTemplateId || submitting,
                            onClick: handleAirdrop,
                            style: {
                                background: !selectedTemplateId || submitting ? "rgba(0,255,136,0.05)" : "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.1))",
                                border: !selectedTemplateId || submitting ? "1px solid rgba(0,255,136,0.1)" : "1px solid rgba(0,255,136,0.4)",
                                color: !selectedTemplateId || submitting ? "rgba(0,255,136,0.3)" : "#00ff88",
                                boxShadow: !selectedTemplateId || submitting ? "none" : "0 0 20px rgba(0,255,136,0.15)",
                                cursor: !selectedTemplateId || submitting ? "not-allowed" : "pointer"
                            },
                            children: submitting ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CircleNotch, {
                                        size: 18,
                                        className: "animate-spin"
                                    }),
                                    "Airdropping to ",
                                    selectedAccounts.size,
                                    " holders..."
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Coins, {
                                        size: 18
                                    }),
                                    "Airdrop NFT to ",
                                    selectedAccounts.size,
                                    " holders"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_7__/* .Modal */ .u, {
                    ref: modalRef,
                    title: modal.title,
                    children: [
                        modal.isSuccess && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2 mt-2 mb-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Check, {
                                    size: 20,
                                    style: {
                                        color: "#00ff88"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm font-medium",
                                    style: {
                                        color: "#00ff88"
                                    },
                                    children: "Success"
                                })
                            ]
                        }),
                        !modal.isSuccess && modal.message && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2 mt-2 mb-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.WarningCircle, {
                                    size: 20,
                                    style: {
                                        color: "#ff4d4d"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm font-medium",
                                    style: {
                                        color: "#ff4d4d"
                                    },
                                    children: "Error"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "body-2 text-neutral-300",
                            children: modal.message
                        }),
                        modal.transactionsIDs && modal.transactionsIDs.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xs text-neutral-500 mb-2 font-semibold uppercase tracking-wider",
                                    children: "Transaction IDs"
                                }),
                                modal.transactionsIDs.map((tx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: "flex py-2 underline underline-offset-2",
                                        href: `https://explorer.xprnetwork.org/transaction/${tx}`,
                                        target: "_blank",
                                        style: {
                                            color: "#00ff88"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "break-all font-mono text-sm",
                                            children: tx
                                        })
                                    }, tx))
                            ]
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `${_config__WEBPACK_IMPORTED_MODULE_9__.pluginInfo.name} - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_11__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto my-14 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "headline-2",
                        children: "Connect your wallet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "body-1 mt-2 mb-6 text-neutral-400",
                        children: "You need to connect your wallet to use Token Airdrop"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "btn",
                        onClick: handleLogin,
                        children: "Connect Wallet"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_2__/* .withUAL */ .D)(TokenAirdrop));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ui": () => (/* binding */ getSimpleDexTokens),
/* harmony export */   "gb": () => (/* binding */ getTokenHolders)
/* harmony export */ });
/* unused harmony export getSimpleDexCreators */
const INDEXER_URL = "https://indexer.protonnz.com";
async function getSimpleDexCreators() {
    try {
        const res = await fetch(`${INDEXER_URL}/api/tokens?fields=compact`, {});
        const data = await res.json();
        const creators = new Set();
        for (const token of data.tokens || []){
            creators.add(token.creator);
        }
        return Array.from(creators);
    } catch  {
        return [];
    }
}
async function getSimpleDexTokens() {
    try {
        const res = await fetch(`${INDEXER_URL}/api/tokens?fields=compact`, {});
        const data = await res.json();
        return data.tokens || [];
    } catch  {
        return [];
    }
}
async function getTokenHolders(tokenId) {
    try {
        const res = await fetch(`${INDEXER_URL}/api/tokens/${tokenId}/holders?limit=500`, {});
        const data = await res.json();
        return data.holders || [];
    } catch  {
        return [];
    }
}


/***/ })

};
;