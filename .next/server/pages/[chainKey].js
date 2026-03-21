"use strict";
(() => {
var exports = {};
exports.id = 8858;
exports.ids = [8858];
exports.modules = {

/***/ 8331:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ UserCollectionsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6268);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6903);
/* harmony import */ var _services_collection_listCollectionsService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2736);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2793);
/* harmony import */ var _components_CardContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(762);
/* harmony import */ var _components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9070);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5740);
/* harmony import */ var _components_collection_CreateNewItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9928);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9507);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5334);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_collection_listCollectionsService__WEBPACK_IMPORTED_MODULE_5__, _components_Header__WEBPACK_IMPORTED_MODULE_12__]);
([_services_collection_listCollectionsService__WEBPACK_IMPORTED_MODULE_5__, _components_Header__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const actionCards = [
    {
        title: "Create NFT Collection",
        description: "Set up a new collection with schemas, templates, and mint NFTs.",
        href: (chainKey)=>`/${chainKey}/collection/new`,
        icon: phosphor_react__WEBPACK_IMPORTED_MODULE_4__.Plus,
        gradient: "from-green-500/20 to-emerald-500/5"
    },
    {
        title: "Airdrop NFTs",
        description: "Bulk send NFTs to holders of a collection or specific templates.",
        href: (chainKey)=>`/${chainKey}/plugins/airdrop?type=default`,
        icon: phosphor_react__WEBPACK_IMPORTED_MODULE_4__.PaperPlaneTilt,
        gradient: "from-cyan-500/20 to-blue-500/5"
    },
    {
        title: "Token Holder Airdrop",
        description: "Mint & airdrop NFTs to SimpleDEX token holders automatically.",
        href: (chainKey)=>`/${chainKey}/plugins/token-airdrop?type=default`,
        icon: phosphor_react__WEBPACK_IMPORTED_MODULE_4__.Coins,
        gradient: "from-purple-500/20 to-pink-500/5"
    }
];
function ActionCard({ title , description , href , icon: Icon  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        className: "block group",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative rounded-2xl p-6 sm:p-8 transition-all duration-300 h-full",
            style: {
                background: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(0, 255, 136, 0.12)"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                    style: {
                        boxShadow: "0 0 40px rgba(0, 255, 136, 0.12), inset 0 0 40px rgba(0, 255, 136, 0.03)",
                        border: "1px solid rgba(0, 255, 136, 0.3)",
                        borderRadius: "inherit"
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative z-10",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110",
                            style: {
                                background: "linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,200,100,0.05))",
                                border: "1px solid rgba(0,255,136,0.2)",
                                boxShadow: "0 0 20px rgba(0,255,136,0.08)"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                size: 28,
                                style: {
                                    color: "#00ff88"
                                },
                                weight: "duotone"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-xl font-bold mb-2 transition-colors duration-300",
                            style: {
                                color: "#fff"
                            },
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-neutral-400 leading-relaxed mb-4",
                            children: description
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3",
                            style: {
                                color: "#00ff88"
                            },
                            children: [
                                "Get started",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_4__.ArrowRight, {
                                    size: 16,
                                    weight: "bold",
                                    className: "transition-transform duration-300 group-hover:translate-x-1"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function UserCollectionsListComponent({ chainKey , ual  }) {
    const [collections, setCollections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [match, setMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [waitToSearch, setWaitToSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const limit = 12;
    const currentPage = Math.ceil(collections.length / limit) || 1;
    const offset = (currentPage - 1) * limit;
    const isEndOfList = collections.length % limit > 0;
    const author = ual?.activeUser?.accountName;
    const handleLoadCollections = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (page)=>{
        setIsLoading(true);
        try {
            const { data  } = await (0,_services_collection_listCollectionsService__WEBPACK_IMPORTED_MODULE_5__/* .listCollectionsService */ .W)(chainKey, {
                match,
                page,
                offset,
                authorizedAccount: author
            });
            setCollections((state)=>[
                    ...state,
                    ...data.data
                ]);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }, [
        match,
        author,
        offset,
        chainKey
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (author && currentPage === 1 && collections.length === 0 && isLoading) {
            handleLoadCollections(currentPage);
        }
    }, [
        author,
        currentPage,
        collections,
        isLoading,
        handleLoadCollections
    ]);
    function handleLogin() {
        ual?.showModal();
    }
    async function handleSearch(event) {
        const { value  } = event.target;
        clearTimeout(waitToSearch);
        const newWaitToSearch = setTimeout(async ()=>{
            const { data: collections  } = await (0,_services_collection_listCollectionsService__WEBPACK_IMPORTED_MODULE_5__/* .listCollectionsService */ .W)(chainKey, {
                match: value || "",
                authorizedAccount: author
            });
            setMatch(value);
            setCollections(collections.data);
        });
        setWaitToSearch(newWaitToSearch);
    }
    if (author) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "container pt-8 pb-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                        children: actionCards.map((card)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActionCard, {
                                title: card.title,
                                description: card.description,
                                href: card.href(chainKey),
                                icon: card.icon
                            }, card.title))
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Header__WEBPACK_IMPORTED_MODULE_12__/* .Header.Root */ .h.Root, {
                    border: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__/* .Header.Content */ .h.Content, {
                            title: "Dashboard"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__/* .Header.Search */ .h.Search, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_9__/* .Input */ .I, {
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_4__.MagnifyingGlass, {
                                    size: 24
                                }),
                                type: "search",
                                placeholder: "Search collection",
                                onChange: handleSearch
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "container py-8",
                    children: collections.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CardContainer__WEBPACK_IMPORTED_MODULE_7__/* .CardContainer */ ._, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_CreateNewItem__WEBPACK_IMPORTED_MODULE_10__/* .CreateNewItem */ .r, {
                                        href: `/${chainKey}/collection/new`,
                                        label: "Create Collection"
                                    }),
                                    collections.map((collection, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_6__/* .Card */ .Z, {
                                            href: `/${chainKey}/collection/${collection.collection_name}`,
                                            image: collection.img ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_13__/* .ipfsEndpoint */ .Ge}/${collection.img}` : "",
                                            title: collection.name,
                                            subtitle: `by ${collection.author}`
                                        }, index))
                                ]
                            }),
                            !isEndOfList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center mt-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_8__/* .SeeMoreButton */ .j, {
                                    isLoading: isLoading,
                                    onClick: ()=>handleLoadCollections(currentPage + 1)
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_11__/* .Loading */ .g, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-center justify-center py-16 text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-20 h-20 rounded-2xl flex items-center justify-center mb-6",
                                    style: {
                                        background: "linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,200,100,0.05))",
                                        border: "1px solid rgba(0,255,136,0.2)",
                                        boxShadow: "0 0 30px rgba(0,255,136,0.1)"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                                        size: 40,
                                        style: {
                                            color: "#00ff88"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-xl font-bold text-white mb-2",
                                    children: "No collections yet"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-neutral-400 mb-8 max-w-md",
                                    children: "Create your first NFT collection to get started with minting, templates, and airdrops."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/${chainKey}/collection/new`,
                                    className: "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300",
                                    style: {
                                        background: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.1))",
                                        border: "1px solid rgba(0,255,136,0.4)",
                                        color: "#00ff88",
                                        boxShadow: "0 0 30px rgba(0,255,136,0.15)"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_4__.Plus, {
                                            size: 20,
                                            weight: "bold"
                                        }),
                                        "Create Your First Collection"
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        });
    }
    // Not connected state - show hero + action cards
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center py-16 sm:py-24 px-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-3xl text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-4xl sm:text-5xl font-bold mb-4",
                            style: {
                                color: "#00ff88",
                                textShadow: "0 0 40px rgba(0,255,136,0.3)"
                            },
                            children: "XPR NFT Creator"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg text-neutral-400 mb-10 max-w-xl mx-auto",
                            children: "Create collections, mint NFTs, and airdrop to your community — all on XPR Network."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col sm:flex-row items-center gap-4 justify-center mb-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    className: "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300",
                                    onClick: handleLogin,
                                    style: {
                                        background: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.1))",
                                        border: "1px solid rgba(0,255,136,0.4)",
                                        color: "#00ff88",
                                        boxShadow: "0 0 30px rgba(0,255,136,0.15)"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_4__.Wallet, {
                                            size: 20,
                                            weight: "bold"
                                        }),
                                        "Connect Wallet to Get Started"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/${chainKey}/explorer`,
                                    className: "inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 text-neutral-400 hover:text-white",
                                    style: {
                                        border: "1px solid rgba(255,255,255,0.1)"
                                    },
                                    children: "Explorer"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container pb-16",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-6 text-center",
                        children: "What you can do"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                        children: actionCards.map((card)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "rounded-2xl p-6 sm:p-8",
                                style: {
                                    background: "rgba(0, 0, 0, 0.5)",
                                    border: "1px solid rgba(0, 255, 136, 0.08)",
                                    opacity: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
                                        style: {
                                            background: "rgba(0,255,136,0.08)",
                                            border: "1px solid rgba(0,255,136,0.12)"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(card.icon, {
                                            size: 28,
                                            style: {
                                                color: "#00ff88"
                                            },
                                            weight: "duotone"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-xl font-bold text-white mb-2",
                                        children: card.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm text-neutral-500 leading-relaxed",
                                        children: card.description
                                    })
                                ]
                            }, card.title))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "container pb-20",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rounded-2xl p-8 sm:p-10",
                    style: {
                        background: "rgba(0,0,0,0.5)",
                        border: "1px solid rgba(0,255,136,0.12)"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-2 text-center",
                            children: "How to Airdrop"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center text-neutral-400 text-sm mb-8",
                            children: "Reward your community in 4 steps"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: [
                                {
                                    step: "01",
                                    emoji: "\uD83D\uDD11",
                                    title: "Connect Wallet",
                                    detail: "Sign in with WebAuth — fingerprint, Face ID, or YubiKey. No seed phrases."
                                },
                                {
                                    step: "02",
                                    emoji: "\uD83C\uDFA8",
                                    title: "Create Collection",
                                    detail: "Set up schemas, upload artwork, and define templates for your NFTs."
                                },
                                {
                                    step: "03",
                                    emoji: "\uD83D\uDDBC️",
                                    title: "Mint NFTs",
                                    detail: "Mint from your templates in bulk — ready to send to your community."
                                },
                                {
                                    step: "04",
                                    emoji: "\uD83E\uDE82",
                                    title: "Airdrop",
                                    detail: "Send to SimpleDEX token holders or any collection holders automatically."
                                }
                            ].map(({ step , emoji , title , detail  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col items-center text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold mb-4",
                                            style: {
                                                background: "rgba(0,255,136,0.08)",
                                                border: "1px solid rgba(0,255,136,0.25)",
                                                color: "#00ff88",
                                                fontFamily: "monospace"
                                            },
                                            children: step
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-2xl mb-2",
                                            children: emoji
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-sm font-bold text-white mb-1",
                                            children: title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-xs text-neutral-500 leading-relaxed",
                                            children: detail
                                        })
                                    ]
                                }, step))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-8 pt-6 border-t border-neutral-800 text-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-xs text-neutral-600",
                                children: [
                                    "Token holder airdrops are powered by",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://dex.protonnz.com",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-neon hover:underline",
                                        children: "SimpleDEX"
                                    }),
                                    " ",
                                    "on",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://xprnetwork.org",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-neon hover:underline",
                                        children: "XPR Network"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
const UserCollectionsList = (0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_3__/* .withUAL */ .D)(UserCollectionsListComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyCollections),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6903);
/* harmony import */ var _utils_isValidChainKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8300);
/* harmony import */ var _components_collection_UserCollectionsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8331);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collection_UserCollectionsList__WEBPACK_IMPORTED_MODULE_3__]);
_components_collection_UserCollectionsList__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function MyCollections({ chainKey  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_4__/* .appName */ .DJ
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_UserCollectionsList__WEBPACK_IMPORTED_MODULE_3__/* .UserCollectionsList */ .r, {
                chainKey: chainKey
            })
        ]
    });
}
const getServerSideProps = async ({ params  })=>{
    const chainKey = params.chainKey;
    if (!(0,_utils_isValidChainKey__WEBPACK_IMPORTED_MODULE_2__/* .isValidChainKey */ .Z)(chainKey)) {
        const destination = _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_4__/* .chainKeyDefault */ .Ly;
        return {
            redirect: {
                destination,
                permanent: false
            }
        };
    }
    return {
        props: {
            chainKey
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ isValidChainKey)
/* harmony export */ });
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_0__);

function isValidChainKey(chainKey) {
    const chainsKeys = Object.keys(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_0__);
    return chainsKeys.includes(chainKey);
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,6840,2793,7208,9701,5123], () => (__webpack_exec__(4751)));
module.exports = __webpack_exports__;

})();