"use strict";
exports.id = 9163;
exports.ids = [9163,7670];
exports.modules = {

/***/ 7670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pluginInfo": () => (/* binding */ pluginInfo)
/* harmony export */ });
const pluginInfo = {
    name: "Analytics",
    page: "plugins",
    description: "View collection analytics including holder distribution, mint stats, and template performance."
};


/***/ }),

/***/ 9163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6903);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7670);








const AA_ENDPOINT = "https://xpr.api.atomicassets.io";
function Analytics({ ual  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { chainKey  } = router.query;
    const [collections, setCollections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingCollections, setLoadingCollections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [collectionStats, setCollectionStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [loadingStats, setLoadingStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedCollection, setSelectedCollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [topHolders, setTopHolders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingHolders, setLoadingHolders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [templates, setTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingTemplates, setLoadingTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const accountName = ual?.activeUser?.accountName;
    // Fetch user collections on login
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!accountName) {
            setCollections([]);
            setCollectionStats({});
            setSelectedCollection(null);
            return;
        }
        fetchUserCollections(accountName);
    }, [
        accountName
    ]);
    async function fetchUserCollections(author) {
        setLoadingCollections(true);
        setError("");
        try {
            const res = await fetch(`${AA_ENDPOINT}/atomicassets/v1/collections?author=${author}&limit=100&order=desc&sort=created`);
            const data = await res.json();
            const cols = (data.data || []).map((c)=>({
                    collection_name: c.collection_name,
                    name: c.data?.name || c.collection_name,
                    author: c.author,
                    img: c.data?.img
                }));
            setCollections(cols);
            if (cols.length > 0) {
                fetchAllStats(cols);
            }
        } catch  {
            setError("Failed to load collections.");
        }
        setLoadingCollections(false);
    }
    async function fetchAllStats(cols) {
        setLoadingStats(true);
        const results = {};
        await Promise.all(cols.map(async (col)=>{
            try {
                const [assetsRes, holdersRes] = await Promise.all([
                    fetch(`${AA_ENDPOINT}/atomicassets/v1/collections/${col.collection_name}/stats`),
                    fetch(`${AA_ENDPOINT}/atomicassets/v1/accounts?collection_name=${col.collection_name}&limit=1`)
                ]);
                const assetsData = await assetsRes.json();
                const holdersData = await holdersRes.json();
                results[col.collection_name] = {
                    collection_name: col.collection_name,
                    assets: parseInt(assetsData.data?.assets || "0"),
                    templates: parseInt(assetsData.data?.templates || "0"),
                    holders: holdersData.data?.length ?? 0
                };
            } catch  {
                results[col.collection_name] = {
                    collection_name: col.collection_name,
                    assets: 0,
                    templates: 0,
                    holders: 0
                };
            }
        }));
        setCollectionStats(results);
        setLoadingStats(false);
    }
    async function selectCollection(col) {
        setSelectedCollection(col);
        setTopHolders([]);
        setTemplates([]);
        fetchTopHolders(col.collection_name);
        fetchTemplates(col.collection_name);
    }
    async function fetchTopHolders(collectionName) {
        setLoadingHolders(true);
        try {
            const res = await fetch(`${AA_ENDPOINT}/atomicassets/v1/accounts?collection_name=${collectionName}&limit=20&order=desc&sort=assets`);
            const data = await res.json();
            setTopHolders(data.data || []);
        } catch  {
            setTopHolders([]);
        }
        setLoadingHolders(false);
    }
    async function fetchTemplates(collectionName) {
        setLoadingTemplates(true);
        try {
            const res = await fetch(`${AA_ENDPOINT}/atomicassets/v1/templates?collection_name=${collectionName}&limit=50&order=desc&sort=created`);
            const data = await res.json();
            setTemplates(data.data || []);
        } catch  {
            setTemplates([]);
        }
        setLoadingTemplates(false);
    }
    function handleLogin() {
        ual?.showModal();
    }
    if (!accountName) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${_config__WEBPACK_IMPORTED_MODULE_6__.pluginInfo.name} - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_7__/* .appName */ .DJ}`
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mx-auto my-14 text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "inline-flex p-4 rounded-full mb-6",
                            style: {
                                background: "rgba(0,255,136,0.1)",
                                border: "1px solid rgba(0,255,136,0.3)"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.ChartLine, {
                                size: 40,
                                style: {
                                    color: "#00ff88"
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "headline-2 neon-text",
                            children: "Collection Analytics"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "body-1 mt-2 mb-6 text-neutral-400",
                            children: "Connect your wallet to view your collection analytics"
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
    const selectedStats = selectedCollection ? collectionStats[selectedCollection.collection_name] : null;
    const maxHolderAssets = topHolders.length > 0 ? parseInt(topHolders[0]?.assets || "1") : 1;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container flex flex-col gap-10 pb-16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `${_config__WEBPACK_IMPORTED_MODULE_6__.pluginInfo.name} - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_7__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p-3 rounded-xl",
                        style: {
                            background: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.05))",
                            border: "1px solid rgba(0,255,136,0.3)",
                            boxShadow: "0 0 20px rgba(0,255,136,0.1)"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.ChartLine, {
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
                                children: _config__WEBPACK_IMPORTED_MODULE_6__.pluginInfo.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "body-1 text-neutral-400",
                                children: "Your collection performance and holder distribution"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: ()=>fetchUserCollections(accountName),
                        disabled: loadingCollections,
                        className: "ml-auto p-2 rounded-lg transition-opacity hover:opacity-100",
                        style: {
                            color: "#00ff88",
                            opacity: 0.7
                        },
                        title: "Refresh",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.ArrowsClockwise, {
                            size: 20,
                            className: loadingCollections ? "animate-spin" : ""
                        })
                    })
                ]
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-4 rounded-xl text-red-400",
                style: {
                    background: "rgba(255,0,0,0.05)",
                    border: "1px solid rgba(255,0,0,0.2)"
                },
                children: error
            }),
            loadingCollections ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-center gap-3 py-16",
                style: {
                    color: "#00ff88"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.CircleNotch, {
                        size: 28,
                        className: "animate-spin"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Loading your collections..."
                    })
                ]
            }) : collections.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rounded-2xl p-12 text-center",
                style: {
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(0,255,136,0.1)"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.Cube, {
                        size: 48,
                        className: "mx-auto mb-4 text-neutral-600"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-neutral-400",
                        children: [
                            "No collections found for",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                style: {
                                    color: "#00ff88"
                                },
                                children: accountName
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "headline-3 mb-4 flex items-center gap-2",
                                style: {
                                    color: "#00ff88"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Your Collections"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-normal px-2 py-0.5 rounded-lg font-mono",
                                        style: {
                                            background: "rgba(0,255,136,0.1)",
                                            border: "1px solid rgba(0,255,136,0.2)"
                                        },
                                        children: collections.length
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                children: collections.map((col)=>{
                                    const stats = collectionStats[col.collection_name];
                                    const isSelected = selectedCollection?.collection_name === col.collection_name;
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        onClick: ()=>selectCollection(col),
                                        className: "text-left rounded-2xl p-5 transition-all duration-200",
                                        style: {
                                            background: isSelected ? "rgba(0,255,136,0.08)" : "rgba(0,0,0,0.4)",
                                            border: isSelected ? "1px solid rgba(0,255,136,0.5)" : "1px solid rgba(0,255,136,0.1)",
                                            boxShadow: isSelected ? "0 0 30px rgba(0,255,136,0.1)" : "none"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-start gap-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm",
                                                        style: {
                                                            background: isSelected ? "rgba(0,255,136,0.15)" : "rgba(255,255,255,0.05)",
                                                            border: isSelected ? "1px solid rgba(0,255,136,0.3)" : "1px solid rgba(255,255,255,0.08)",
                                                            color: isSelected ? "#00ff88" : "#aaa"
                                                        },
                                                        children: col.collection_name.slice(0, 3).toUpperCase()
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "font-bold text-sm truncate",
                                                                style: {
                                                                    color: isSelected ? "#00ff88" : "#fff"
                                                                },
                                                                children: col.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-xs text-neutral-500 font-mono",
                                                                children: col.collection_name
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            loadingStats && !stats ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center gap-2 text-xs text-neutral-600",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.CircleNotch, {
                                                        size: 12,
                                                        className: "animate-spin"
                                                    }),
                                                    "Loading stats..."
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "grid grid-cols-3 gap-2",
                                                children: [
                                                    {
                                                        label: "NFTs",
                                                        value: stats?.assets ?? 0,
                                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.Cube, {
                                                            size: 14
                                                        }),
                                                        color: "#00ff88"
                                                    },
                                                    {
                                                        label: "Templates",
                                                        value: stats?.templates ?? 0,
                                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.ChartLine, {
                                                            size: 14
                                                        }),
                                                        color: "#9945FF"
                                                    },
                                                    {
                                                        label: "Holders",
                                                        value: stats?.holders ?? 0,
                                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.Users, {
                                                            size: 14
                                                        }),
                                                        color: "#00aaff"
                                                    }
                                                ].map((s)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "rounded-lg p-2 text-center",
                                                        style: {
                                                            background: "rgba(0,0,0,0.3)",
                                                            border: "1px solid rgba(255,255,255,0.04)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex justify-center mb-1",
                                                                style: {
                                                                    color: s.color
                                                                },
                                                                children: s.icon
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-sm font-bold font-mono",
                                                                style: {
                                                                    color: s.color
                                                                },
                                                                children: s.value.toLocaleString()
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-xs text-neutral-600",
                                                                children: s.label
                                                            })
                                                        ]
                                                    }, s.label))
                                            })
                                        ]
                                    }, col.collection_name);
                                })
                            })
                        ]
                    }),
                    selectedCollection && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded-2xl p-6",
                        style: {
                            background: "rgba(0,0,0,0.6)",
                            border: "1px solid rgba(0,255,136,0.15)",
                            boxShadow: "0 0 30px rgba(0,255,136,0.05)"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "headline-3 mb-1",
                                style: {
                                    color: "#00ff88",
                                    textShadow: "0 0 10px rgba(0,255,136,0.4)"
                                },
                                children: selectedCollection.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-neutral-500 font-mono text-sm mb-6",
                                children: selectedCollection.collection_name
                            }),
                            selectedStats && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-3 gap-4 mb-8",
                                children: [
                                    {
                                        label: "Total NFTs Minted",
                                        value: selectedStats.assets,
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.Cube, {
                                            size: 20
                                        }),
                                        color: "#00ff88"
                                    },
                                    {
                                        label: "Total Templates",
                                        value: selectedStats.templates,
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.ChartLine, {
                                            size: 20
                                        }),
                                        color: "#9945FF"
                                    },
                                    {
                                        label: "Unique Holders",
                                        value: selectedStats.holders,
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.Users, {
                                            size: 20
                                        }),
                                        color: "#00aaff"
                                    }
                                ].map((s)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "rounded-xl p-5 text-center",
                                        style: {
                                            background: "rgba(0,0,0,0.4)",
                                            border: `1px solid ${s.color}22`
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex justify-center mb-2",
                                                style: {
                                                    color: s.color
                                                },
                                                children: s.icon
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-2xl font-bold font-mono",
                                                style: {
                                                    color: s.color
                                                },
                                                children: s.value.toLocaleString()
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-xs text-neutral-500 mt-1",
                                                children: s.label
                                            })
                                        ]
                                    }, s.label))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "font-bold text-lg mb-4 flex items-center gap-2",
                                                style: {
                                                    color: "#00ff88"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.Users, {
                                                        size: 20
                                                    }),
                                                    "Top Holders"
                                                ]
                                            }),
                                            loadingHolders ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center gap-2 py-8 justify-center",
                                                style: {
                                                    color: "#00ff88"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.CircleNotch, {
                                                        size: 20,
                                                        className: "animate-spin"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm",
                                                        children: "Loading holders..."
                                                    })
                                                ]
                                            }) : topHolders.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-neutral-600 text-sm",
                                                children: "No holders found."
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "space-y-2",
                                                children: topHolders.map((holder, i)=>{
                                                    const pct = parseInt(holder.assets) / maxHolderAssets * 100;
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-xs text-neutral-600 w-5 text-right font-mono",
                                                                children: i + 1
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-xs font-mono w-32 truncate",
                                                                style: {
                                                                    color: i === 0 ? "#00ff88" : "#ccc"
                                                                },
                                                                children: holder.account
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex-1 h-5 rounded-full overflow-hidden",
                                                                style: {
                                                                    background: "rgba(0,0,0,0.4)"
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "h-full rounded-full transition-all duration-700",
                                                                    style: {
                                                                        width: `${Math.max(pct, 2)}%`,
                                                                        background: i === 0 ? "linear-gradient(90deg, #00ff88, #00cc6a)" : i < 3 ? "linear-gradient(90deg, #9945FF, #7733cc)" : "linear-gradient(90deg, #00aaff, #0088cc)",
                                                                        boxShadow: i === 0 ? "0 0 8px rgba(0,255,136,0.4)" : "none"
                                                                    }
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-xs font-mono w-10 text-right",
                                                                style: {
                                                                    color: "#00ff88"
                                                                },
                                                                children: parseInt(holder.assets).toLocaleString()
                                                            })
                                                        ]
                                                    }, holder.account);
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "font-bold text-lg mb-4 flex items-center gap-2",
                                                style: {
                                                    color: "#9945FF"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.Cube, {
                                                        size: 20
                                                    }),
                                                    "Template Performance"
                                                ]
                                            }),
                                            loadingTemplates ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center gap-2 py-8 justify-center",
                                                style: {
                                                    color: "#9945FF"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.CircleNotch, {
                                                        size: 20,
                                                        className: "animate-spin"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm",
                                                        children: "Loading templates..."
                                                    })
                                                ]
                                            }) : templates.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-neutral-600 text-sm",
                                                children: "No templates found."
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "space-y-3",
                                                children: templates.slice(0, 10).map((tpl)=>{
                                                    const issued = parseInt(tpl.issued_supply || "0");
                                                    const max = parseInt(tpl.max_supply || "0");
                                                    const pct = max > 0 ? issued / max * 100 : 100;
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "rounded-xl p-3",
                                                        style: {
                                                            background: "rgba(0,0,0,0.3)",
                                                            border: "1px solid rgba(153,69,255,0.1)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex justify-between items-start mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "text-sm font-medium text-white truncate max-w-[180px]",
                                                                                children: tpl.immutable_data?.name || `Template #${tpl.template_id}`
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "text-xs text-neutral-600 font-mono",
                                                                                children: [
                                                                                    "#",
                                                                                    tpl.template_id
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "text-xs font-mono px-2 py-0.5 rounded-lg",
                                                                        style: {
                                                                            background: "rgba(153,69,255,0.1)",
                                                                            color: "#9945FF",
                                                                            border: "1px solid rgba(153,69,255,0.2)"
                                                                        },
                                                                        children: [
                                                                            issued,
                                                                            "/",
                                                                            max > 0 ? max : "∞"
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "h-1.5 rounded-full overflow-hidden",
                                                                style: {
                                                                    background: "rgba(0,0,0,0.4)"
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "h-full rounded-full",
                                                                    style: {
                                                                        width: `${Math.min(pct, 100)}%`,
                                                                        background: pct > 80 ? "linear-gradient(90deg, #ff4444, #ff6666)" : pct > 50 ? "linear-gradient(90deg, #ffaa00, #ffcc00)" : "linear-gradient(90deg, #9945FF, #7733cc)"
                                                                    }
                                                                })
                                                            })
                                                        ]
                                                    }, tpl.template_id);
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_2__/* .withUAL */ .D)(Analytics));


/***/ })

};
;