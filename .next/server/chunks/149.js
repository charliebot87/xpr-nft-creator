"use strict";
exports.id = 149;
exports.ids = [149,264];
exports.modules = {

/***/ 264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pluginInfo": () => (/* binding */ pluginInfo)
/* harmony export */ });
const pluginInfo = {
    name: "Batch Burn",
    page: "plugins",
    description: "Burn multiple NFTs at once"
};


/***/ }),

/***/ 149:
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
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6903);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(264);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Modal__WEBPACK_IMPORTED_MODULE_7__]);
_components_Modal__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const ATOMICASSETS_API = "https://xpr.api.atomicassets.io";
const EXPLORER = "https://explorer.xprnetwork.org";
function BatchBurn({ ual  }) {
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const confirmRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { chainKey  } = router.query;
    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loadError, setLoadError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Set());
    const [collectionFilter, setCollectionFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [batchProgress, setBatchProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        current: 0,
        total: 0
    });
    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [modalState, setModalState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: ""
    });
    const accountName = ual?.activeUser?.accountName;
    async function fetchAssets() {
        if (!accountName) return;
        setLoading(true);
        setLoadError(null);
        setAssets([]);
        setSelected(new Set());
        try {
            const res = await fetch(`${ATOMICASSETS_API}/atomicassets/v1/assets?owner=${accountName}&limit=100`);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            setAssets(data.data || []);
        } catch (err) {
            setLoadError(err?.message || "Failed to fetch NFTs. Please try again.");
        }
        setLoading(false);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (accountName) {
            fetchAssets();
        }
    }, [
        accountName
    ]);
    const collections = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const names = new Set(assets.map((a)=>a.collection.collection_name));
        return Array.from(names).sort();
    }, [
        assets
    ]);
    const filteredAssets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return assets.filter((a)=>{
            const matchCollection = !collectionFilter || a.collection.collection_name === collectionFilter;
            const matchSearch = !search || a.name?.toLowerCase().includes(search.toLowerCase()) || a.asset_id.includes(search) || a.collection.collection_name.toLowerCase().includes(search.toLowerCase());
            return matchCollection && matchSearch;
        });
    }, [
        assets,
        collectionFilter,
        search
    ]);
    function toggleAsset(id) {
        setSelected((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }
    function selectAll() {
        setSelected(new Set(filteredAssets.map((a)=>a.asset_id)));
    }
    function deselectAll() {
        setSelected(new Set());
    }
    function getImageUrl(asset) {
        const img = asset.data?.img || asset.data?.image;
        if (!img) return null;
        if (img.startsWith("http")) return img;
        return `https://atomicassets.io/ipfs/${img}`;
    }
    async function executeBurn() {
        if (!ual?.activeUser || selected.size === 0) return;
        const owner = accountName;
        const toburn = Array.from(selected);
        const batchSize = 50;
        const totalBatches = Math.ceil(toburn.length / batchSize);
        const newResults = [];
        setSubmitting(true);
        setBatchProgress({
            current: 0,
            total: totalBatches
        });
        for(let i = 0; i < toburn.length; i += batchSize){
            const batch = toburn.slice(i, i + batchSize);
            const actions = batch.map((asset_id)=>({
                    account: "atomicassets",
                    name: "burnasset",
                    authorization: [
                        {
                            actor: owner,
                            permission: "active"
                        }
                    ],
                    data: {
                        asset_owner: owner,
                        asset_id
                    }
                }));
            try {
                const result = await ual.activeUser.signTransaction({
                    actions
                }, {
                    blocksBehind: 3,
                    expireSeconds: 60
                });
                const txId = result?.transactionId || "";
                newResults.push({
                    txId,
                    burned: batch,
                    failed: []
                });
            } catch (err) {
                newResults.push({
                    txId: "",
                    burned: [],
                    failed: batch
                });
            }
            setBatchProgress({
                current: Math.floor(i / batchSize) + 1,
                total: totalBatches
            });
        }
        setResults((prev)=>[
                ...prev,
                ...newResults
            ]);
        const totalBurned = newResults.reduce((s, r)=>s + r.burned.length, 0);
        const totalFailed = newResults.reduce((s, r)=>s + r.failed.length, 0);
        if (totalFailed === 0) {
            setModalState({
                title: "\uD83D\uDD25 Burn Complete",
                isSuccess: true,
                message: `Successfully burned ${totalBurned} NFT${totalBurned !== 1 ? "s" : ""}.`,
                txResults: newResults
            });
        } else {
            setModalState({
                title: totalBurned > 0 ? "Partial Burn" : "Burn Failed",
                isSuccess: totalBurned > 0,
                message: `Burned: ${totalBurned} | Failed: ${totalFailed}`,
                txResults: newResults
            });
        }
        modalRef.current?.openModal();
        setSubmitting(false);
        setBatchProgress({
            current: 0,
            total: 0
        });
        // Refresh assets after burn
        await fetchAssets();
    }
    function handleLogin() {
        ual?.showModal();
    }
    if (!accountName) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${_config__WEBPACK_IMPORTED_MODULE_8__.pluginInfo.name} - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_9__/* .appName */ .DJ}`
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
                            children: "You need to connect your wallet to burn NFTs"
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
    const selectedAssets = assets.filter((a)=>selected.has(a.asset_id));
    const batchCount = Math.ceil(selected.size / 50);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container flex flex-col gap-8 pb-16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `${_config__WEBPACK_IMPORTED_MODULE_8__.pluginInfo.name} - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_9__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p-3 rounded-xl flex items-center justify-center",
                        style: {
                            background: "linear-gradient(135deg, rgba(255,60,60,0.2), rgba(200,30,30,0.05))",
                            border: "1px solid rgba(255,60,60,0.35)",
                            boxShadow: "0 0 20px rgba(255,60,60,0.15)"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Fire, {
                            size: 32,
                            style: {
                                color: "#ff3c3c"
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "headline-1",
                                style: {
                                    color: "#ff3c3c",
                                    textShadow: "0 0 20px rgba(255,60,60,0.5)"
                                },
                                children: "Batch Burn"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "body-1 text-neutral-400",
                                children: "Permanently destroy multiple NFTs at once — this cannot be undone"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rounded-xl px-5 py-4 flex items-start gap-3",
                style: {
                    background: "rgba(255,60,60,0.08)",
                    border: "1px solid rgba(255,60,60,0.4)",
                    boxShadow: "0 0 20px rgba(255,60,60,0.08)"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.WarningOctagon, {
                        size: 22,
                        style: {
                            color: "#ff3c3c",
                            flexShrink: 0,
                            marginTop: 1
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm font-bold mb-1",
                                style: {
                                    color: "#ff3c3c"
                                },
                                children: "IRREVERSIBLE ACTION"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm text-neutral-400",
                                children: "Burning NFTs permanently destroys them from the blockchain. There is absolutely no way to recover burned assets. Double-check your selection before confirming."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rounded-2xl p-4 sm:p-6",
                style: {
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,60,60,0.12)",
                    boxShadow: "0 0 30px rgba(255,60,60,0.04)"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-wrap items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-2 flex-1 min-w-[180px] rounded-xl px-3 py-2",
                                style: {
                                    background: "rgba(0,0,0,0.5)",
                                    border: "1px solid rgba(255,255,255,0.08)"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.MagnifyingGlass, {
                                        size: 16,
                                        style: {
                                            color: "#888",
                                            flexShrink: 0
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        placeholder: "Search name, collection, ID...",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        className: "flex-1 bg-transparent outline-none text-white placeholder-neutral-600 text-sm"
                                    })
                                ]
                            }),
                            collections.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                value: collectionFilter,
                                onChange: (e)=>setCollectionFilter(e.target.value),
                                className: "rounded-xl px-3 py-2 text-sm text-white outline-none",
                                style: {
                                    background: "rgba(0,0,0,0.5)",
                                    border: "1px solid rgba(255,255,255,0.08)"
                                },
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                onClick: selectAll,
                                disabled: filteredAssets.length === 0,
                                className: "flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all",
                                style: {
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "#ccc"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CheckSquare, {
                                        size: 14
                                    }),
                                    "Select All"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                onClick: deselectAll,
                                disabled: selected.size === 0,
                                className: "flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all",
                                style: {
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "#ccc"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Square, {
                                        size: 14
                                    }),
                                    "Deselect All"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: fetchAssets,
                                disabled: loading,
                                title: "Refresh NFTs",
                                style: {
                                    color: "#666"
                                },
                                className: "hover:text-white transition-colors",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.ArrowsClockwise, {
                                    size: 20,
                                    className: loading ? "animate-spin" : ""
                                })
                            })
                        ]
                    }),
                    selected.size > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4 px-4 py-2.5 rounded-xl flex items-center justify-between",
                        style: {
                            background: "rgba(255,60,60,0.08)",
                            border: "1px solid rgba(255,60,60,0.3)"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-sm font-bold",
                                style: {
                                    color: "#ff3c3c"
                                },
                                children: [
                                    "\uD83D\uDD25 ",
                                    selected.size,
                                    " asset",
                                    selected.size !== 1 ? "s" : "",
                                    " selected for burning"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-xs text-neutral-500",
                                children: [
                                    batchCount,
                                    " transaction",
                                    batchCount !== 1 ? "s" : "",
                                    " required"
                                ]
                            })
                        ]
                    }),
                    loadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-3 rounded-xl px-4 py-3 mb-4",
                        style: {
                            background: "rgba(255,60,60,0.08)",
                            border: "1px solid rgba(255,60,60,0.3)"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.WarningCircle, {
                                size: 18,
                                style: {
                                    color: "#ff3c3c"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm",
                                style: {
                                    color: "#ff3c3c"
                                },
                                children: loadError
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: fetchAssets,
                                className: "ml-auto text-xs underline",
                                style: {
                                    color: "#ff3c3c"
                                },
                                children: "Retry"
                            })
                        ]
                    }),
                    loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-center gap-3 py-16",
                        style: {
                            color: "#ff3c3c"
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
                                children: "Fetching your NFTs..."
                            })
                        ]
                    }) : filteredAssets.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center py-16 text-neutral-500",
                        children: assets.length === 0 ? `No NFTs found for ${accountName}` : "No NFTs match your filters"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3",
                        children: filteredAssets.map((asset)=>{
                            const isSelected = selected.has(asset.asset_id);
                            const imgUrl = getImageUrl(asset);
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                onClick: ()=>toggleAsset(asset.asset_id),
                                className: "relative rounded-xl overflow-hidden text-left transition-all duration-200 group",
                                style: {
                                    background: isSelected ? "rgba(255,60,60,0.1)" : "rgba(255,255,255,0.02)",
                                    border: isSelected ? "2px solid rgba(255,60,60,0.7)" : "1px solid rgba(255,255,255,0.07)",
                                    boxShadow: isSelected ? "0 0 16px rgba(255,60,60,0.2)" : "none"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute top-2 right-2 z-10 rounded-md p-0.5",
                                        style: {
                                            background: isSelected ? "rgba(255,60,60,0.9)" : "rgba(0,0,0,0.6)",
                                            border: isSelected ? "1px solid #ff3c3c" : "1px solid rgba(255,255,255,0.2)"
                                        },
                                        children: isSelected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CheckSquare, {
                                            size: 14,
                                            style: {
                                                color: "#fff"
                                            }
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Square, {
                                            size: 14,
                                            style: {
                                                color: "#888"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full aspect-square flex items-center justify-center overflow-hidden",
                                        style: {
                                            background: "rgba(0,0,0,0.3)"
                                        },
                                        children: imgUrl ? // eslint-disable-next-line @next/next/no-img-element
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: imgUrl,
                                            alt: asset.name,
                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                                            onError: (e)=>{
                                                e.target.style.display = "none";
                                            }
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Fire, {
                                            size: 32,
                                            style: {
                                                color: "rgba(255,60,60,0.2)"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "p-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-xs font-bold truncate",
                                                style: {
                                                    color: isSelected ? "#ff7070" : "#ddd"
                                                },
                                                children: asset.name || `#${asset.asset_id}`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-xs text-neutral-500 truncate",
                                                children: asset.collection.collection_name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-xs text-neutral-600 font-mono truncate",
                                                children: [
                                                    "#",
                                                    asset.asset_id
                                                ]
                                            }),
                                            asset.template && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-xs text-neutral-700 truncate",
                                                children: [
                                                    "tmpl ",
                                                    asset.template.template_id
                                                ]
                                            })
                                        ]
                                    }),
                                    isSelected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity",
                                        style: {
                                            background: "rgba(255,60,60,0.15)"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Fire, {
                                            size: 40,
                                            style: {
                                                color: "#ff3c3c"
                                            }
                                        })
                                    })
                                ]
                            }, asset.asset_id);
                        })
                    })
                ]
            }),
            assets.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    disabled: selected.size === 0 || submitting,
                    onClick: ()=>confirmRef.current?.openModal(),
                    className: "flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200",
                    style: {
                        background: selected.size === 0 || submitting ? "rgba(255,60,60,0.06)" : "linear-gradient(135deg, rgba(255,60,60,0.25), rgba(200,20,20,0.15))",
                        border: selected.size === 0 || submitting ? "1px solid rgba(255,60,60,0.15)" : "1px solid rgba(255,60,60,0.6)",
                        color: selected.size === 0 || submitting ? "rgba(255,60,60,0.3)" : "#ff3c3c",
                        boxShadow: selected.size === 0 || submitting ? "none" : "0 0 30px rgba(255,60,60,0.2)",
                        cursor: selected.size === 0 || submitting ? "not-allowed" : "pointer"
                    },
                    children: submitting ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CircleNotch, {
                                size: 20,
                                className: "animate-spin"
                            }),
                            "Burning batch ",
                            batchProgress.current,
                            "/",
                            batchProgress.total,
                            "..."
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Fire, {
                                size: 20
                            }),
                            "Burn ",
                            selected.size,
                            " NFT",
                            selected.size !== 1 ? "s" : ""
                        ]
                    })
                })
            }),
            results.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rounded-2xl p-4 sm:p-6",
                style: {
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,60,60,0.12)"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "headline-3 mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Fire, {
                                size: 18,
                                style: {
                                    color: "#ff3c3c"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-white",
                                children: "Burn History"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col gap-2",
                        children: results.map((r, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-sm",
                                style: {
                                    background: r.failed.length === 0 ? "rgba(255,60,60,0.06)" : "rgba(255,150,0,0.06)",
                                    border: r.failed.length === 0 ? "1px solid rgba(255,60,60,0.2)" : "1px solid rgba(255,150,0,0.2)"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            color: r.failed.length === 0 ? "#ff7070" : "#ffaa44"
                                        },
                                        children: [
                                            r.burned.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    "\uD83D\uDD25 ",
                                                    r.burned.length,
                                                    " burned"
                                                ]
                                            }),
                                            r.failed.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    " \xb7 ⚠️ ",
                                                    r.failed.length,
                                                    " failed"
                                                ]
                                            })
                                        ]
                                    }),
                                    r.txId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: `${EXPLORER}/transaction/${r.txId}`,
                                        target: "_blank",
                                        className: "font-mono text-xs underline underline-offset-2",
                                        style: {
                                            color: "#ff7070"
                                        },
                                        children: [
                                            r.txId.slice(0, 20),
                                            "..."
                                        ]
                                    })
                                ]
                            }, i))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_7__/* .Modal */ .u, {
                ref: confirmRef,
                title: "⚠️ Confirm Permanent Burn",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4 rounded-xl px-5 py-4",
                        style: {
                            background: "rgba(255,60,60,0.08)",
                            border: "1px solid rgba(255,60,60,0.4)"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-base font-bold mb-2",
                                style: {
                                    color: "#ff3c3c"
                                },
                                children: "THIS CANNOT BE UNDONE"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-sm text-neutral-300",
                                children: [
                                    "You are about to",
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "font-bold",
                                        style: {
                                            color: "#ff3c3c"
                                        },
                                        children: [
                                            "PERMANENTLY BURN ",
                                            selected.size,
                                            " NFT",
                                            selected.size !== 1 ? "s" : ""
                                        ]
                                    }),
                                    ". Once burned, these assets are gone forever from the blockchain. No recovery is possible."
                                ]
                            }),
                            selected.size > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-3 text-xs text-neutral-500",
                                children: [
                                    "This will require",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-mono text-neutral-400",
                                        children: batchCount
                                    }),
                                    " ",
                                    "transaction",
                                    batchCount !== 1 ? "s" : "",
                                    " (up to 50 assets each). You will need to sign each one in your wallet."
                                ]
                            })
                        ]
                    }),
                    selectedAssets.length > 0 && selectedAssets.length <= 12 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs text-neutral-500 mb-2 uppercase tracking-wider font-semibold",
                                children: "Assets to burn:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: selectedAssets.map((a)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs px-2 py-1 rounded-lg font-mono",
                                        style: {
                                            background: "rgba(255,60,60,0.08)",
                                            border: "1px solid rgba(255,60,60,0.2)",
                                            color: "#ff7070"
                                        },
                                        children: a.name || `#${a.asset_id}`
                                    }, a.asset_id))
                            })
                        ]
                    }),
                    selectedAssets.length > 12 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-xs text-neutral-500 mb-1 uppercase tracking-wider font-semibold",
                                children: [
                                    "Assets to burn (",
                                    selectedAssets.length,
                                    " total):"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap gap-1",
                                children: [
                                    selectedAssets.slice(0, 8).map((a)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-xs px-2 py-1 rounded-lg font-mono",
                                            style: {
                                                background: "rgba(255,60,60,0.08)",
                                                border: "1px solid rgba(255,60,60,0.2)",
                                                color: "#ff7070"
                                            },
                                            children: a.name || `#${a.asset_id}`
                                        }, a.asset_id)),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-xs px-2 py-1 text-neutral-600",
                                        children: [
                                            "+",
                                            selectedAssets.length - 8,
                                            " more..."
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-3 mt-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                onClick: ()=>{
                                    confirmRef.current?.closeModal();
                                    executeBurn();
                                },
                                className: "flex-1 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2",
                                style: {
                                    background: "linear-gradient(135deg, rgba(255,60,60,0.25), rgba(200,20,20,0.15))",
                                    border: "1px solid rgba(255,60,60,0.6)",
                                    color: "#ff3c3c",
                                    boxShadow: "0 0 20px rgba(255,60,60,0.15)"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Fire, {
                                        size: 16
                                    }),
                                    "Yes, Burn Forever"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: ()=>confirmRef.current?.closeModal(),
                                className: "flex-1 py-3 rounded-xl font-bold text-sm transition-all",
                                style: {
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "#aaa"
                                },
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_7__/* .Modal */ .u, {
                ref: modalRef,
                title: modalState.title,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-neutral-300 mb-3",
                            children: modalState.message
                        }),
                        modalState.txResults && modalState.txResults.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-1",
                                    children: "Transactions"
                                }),
                                modalState.txResults.map((r, i)=>r.txId ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: `${EXPLORER}/transaction/${r.txId}`,
                                        target: "_blank",
                                        className: "flex items-center gap-2 py-2 underline underline-offset-2 text-sm font-mono break-all",
                                        style: {
                                            color: "#ff7070"
                                        },
                                        children: r.txId
                                    }, r.txId + i) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-xs text-neutral-500 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.WarningCircle, {
                                                size: 14,
                                                style: {
                                                    color: "#ffaa44"
                                                }
                                            }),
                                            r.failed.length,
                                            " asset",
                                            r.failed.length !== 1 ? "s" : "",
                                            " ",
                                            "failed to burn"
                                        ]
                                    }, i))
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_2__/* .withUAL */ .D)(BatchBurn));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;