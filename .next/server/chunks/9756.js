"use strict";
exports.id = 9756;
exports.ids = [9756,7403];
exports.modules = {

/***/ 7403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pluginInfo": () => (/* binding */ pluginInfo)
/* harmony export */ });
const pluginInfo = {
    name: "Quick Mint",
    page: "plugins",
    description: "Mint NFTs instantly — select a collection, pick a template, enter quantity, and mint to any wallet."
};


/***/ }),

/***/ 9756:
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7403);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Modal__WEBPACK_IMPORTED_MODULE_7__]);
_components_Modal__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const AA_ENDPOINT = "https://xpr.api.atomicassets.io";
function QuickMint({ ual  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { chainKey  } = router.query;
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // Step state
    const [collections, setCollections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingCollections, setLoadingCollections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedCollection, setSelectedCollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [schemas, setSchemas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingSchemas, setLoadingSchemas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedSchema, setSelectedSchema] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [templates, setTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingTemplates, setLoadingTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedTemplate, setSelectedTemplate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [recipient, setRecipient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: ""
    });
    const accountName = ual?.activeUser?.accountName;
    // Fetch user's collections on login
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!accountName) {
            setCollections([]);
            setSelectedCollection("");
            return;
        }
        setLoadingCollections(true);
        setCollections([]);
        setSelectedCollection("");
        setSchemas([]);
        setSelectedSchema("");
        setTemplates([]);
        setSelectedTemplate(null);
        setRecipient(accountName);
        fetch(`${AA_ENDPOINT}/atomicassets/v1/collections?authorized_account=${accountName}&limit=100&order=desc&sort=created`).then((r)=>r.json()).then((data)=>{
            const names = (data.data || []).map((c)=>c.collection_name);
            setCollections(names);
            if (names.length === 1) setSelectedCollection(names[0]);
        }).catch(()=>setCollections([])).finally(()=>setLoadingCollections(false));
    }, [
        accountName
    ]);
    // Fetch schemas when collection selected
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!selectedCollection) {
            setSchemas([]);
            setSelectedSchema("");
            setTemplates([]);
            setSelectedTemplate(null);
            return;
        }
        setLoadingSchemas(true);
        setSchemas([]);
        setSelectedSchema("");
        setTemplates([]);
        setSelectedTemplate(null);
        fetch(`${AA_ENDPOINT}/atomicassets/v1/schemas?collection_name=${selectedCollection}&limit=100`).then((r)=>r.json()).then((data)=>{
            const names = (data.data || []).map((s)=>s.schema_name);
            setSchemas(names);
            if (names.length === 1) setSelectedSchema(names[0]);
        }).catch(()=>setSchemas([])).finally(()=>setLoadingSchemas(false));
    }, [
        selectedCollection
    ]);
    // Fetch templates when schema selected
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!selectedCollection || !selectedSchema) {
            setTemplates([]);
            setSelectedTemplate(null);
            return;
        }
        setLoadingTemplates(true);
        setTemplates([]);
        setSelectedTemplate(null);
        fetch(`${AA_ENDPOINT}/atomicassets/v1/templates?collection_name=${selectedCollection}&schema_name=${selectedSchema}&limit=100&order=desc&sort=created`).then((r)=>r.json()).then((data)=>{
            const items = (data.data || []).map((t)=>({
                    template_id: t.template_id,
                    name: t.immutable_data?.name || `Template #${t.template_id}`,
                    issued_supply: t.issued_supply,
                    max_supply: t.max_supply,
                    schema_name: t.schema_name,
                    immutable_data: t.immutable_data
                }));
            setTemplates(items);
            if (items.length === 1) setSelectedTemplate(items[0]);
        }).catch(()=>setTemplates([])).finally(()=>setLoadingTemplates(false));
    }, [
        selectedCollection,
        selectedSchema
    ]);
    async function handleMint() {
        if (!selectedTemplate || !recipient || quantity < 1 || !ual?.activeUser) return;
        setSubmitting(true);
        try {
            const actions = Array.from({
                length: quantity
            }, ()=>({
                    account: "atomicassets",
                    name: "mintasset",
                    authorization: [
                        {
                            actor: accountName,
                            permission: "active"
                        }
                    ],
                    data: {
                        authorized_minter: accountName,
                        collection_name: selectedCollection,
                        schema_name: selectedTemplate.schema_name,
                        template_id: parseInt(selectedTemplate.template_id),
                        new_asset_owner: recipient,
                        immutable_data: [],
                        mutable_data: [],
                        tokens_to_back: []
                    }
                }));
            const result = await ual.activeUser.signTransaction({
                actions
            }, {
                blocksBehind: 3,
                expireSeconds: 60
            });
            const txId = result?.transactionId || result?.transaction_id;
            modalRef.current?.openModal();
            setModal({
                title: "Mint Successful!",
                message: `Minted ${quantity} NFT${quantity > 1 ? "s" : ""} from template #${selectedTemplate.template_id} to ${recipient}.`,
                transactionsIDs: txId ? [
                    txId
                ] : []
            });
        } catch (error) {
            modalRef.current?.openModal();
            setModal({
                title: "Mint Failed",
                message: error?.cause?.json?.error?.details?.[0]?.message || error?.message || "Transaction failed.",
                details: JSON.stringify(error, undefined, 2)
            });
        }
        setSubmitting(false);
    }
    function handleLogin() {
        ual?.showModal();
    }
    // Max mintable = max_supply - issued_supply (0 max_supply = unlimited)
    const maxMintable = selectedTemplate ? parseInt(selectedTemplate.max_supply || "0") > 0 ? parseInt(selectedTemplate.max_supply) - parseInt(selectedTemplate.issued_supply) : 500 : 500;
    const canMint = !!selectedCollection && !!selectedSchema && !!selectedTemplate && !!recipient && quantity >= 1 && quantity <= maxMintable;
    const SelectWrapper = ({ label , children , loading  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-sm font-bold text-white",
                    children: label
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        children,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none",
                            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CircleNotch, {
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
        });
    const selectStyle = (enabled)=>({
            background: "rgb(15,15,15)",
            border: `1px solid ${enabled ? "rgba(0,255,136,0.3)" : "rgba(255,255,255,0.08)"}`,
            color: enabled ? "#fff" : "#666",
            opacity: enabled ? 1 : 0.6
        });
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "inline-flex p-4 rounded-full mb-6",
                            style: {
                                background: "rgba(0,255,136,0.1)",
                                border: "1px solid rgba(0,255,136,0.3)"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Lightning, {
                                size: 40,
                                style: {
                                    color: "#00ff88"
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "headline-2",
                            children: "Quick Mint"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "body-1 mt-2 mb-6 text-neutral-400",
                            children: "Connect your wallet to mint NFTs instantly"
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container flex flex-col gap-10 pb-16 max-w-2xl mx-auto",
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
                        className: "p-3 rounded-xl",
                        style: {
                            background: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.05))",
                            border: "1px solid rgba(0,255,136,0.3)",
                            boxShadow: "0 0 20px rgba(0,255,136,0.1)"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Lightning, {
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
                                children: _config__WEBPACK_IMPORTED_MODULE_8__.pluginInfo.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "body-1 text-neutral-400",
                                children: "One-click NFT minting from your collections"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rounded-2xl p-6 sm:p-8 flex flex-col gap-6",
                style: {
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(0,255,136,0.15)",
                    boxShadow: "0 0 40px rgba(0,255,136,0.05)"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs font-bold font-mono px-2 py-0.5 rounded",
                                        style: {
                                            background: "rgba(0,255,136,0.1)",
                                            color: "#00ff88",
                                            border: "1px solid rgba(0,255,136,0.2)"
                                        },
                                        children: "01"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-bold text-neutral-300",
                                        children: "Collection"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectWrapper, {
                                label: "",
                                loading: loadingCollections,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                    value: selectedCollection,
                                    onChange: (e)=>setSelectedCollection(e.target.value),
                                    disabled: loadingCollections || collections.length === 0,
                                    className: "w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer pr-10",
                                    style: selectStyle(!loadingCollections && collections.length > 0),
                                    children: loadingCollections ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "Loading your collections..."
                                    }) : collections.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "No authorized collections found"
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                children: "Select a collection..."
                                            }),
                                            collections.map((c)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: c,
                                                    children: c
                                                }, c))
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs font-bold font-mono px-2 py-0.5 rounded",
                                        style: {
                                            background: selectedCollection ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.04)",
                                            color: selectedCollection ? "#00ff88" : "#555",
                                            border: `1px solid ${selectedCollection ? "rgba(0,255,136,0.2)" : "rgba(255,255,255,0.06)"}`
                                        },
                                        children: "02"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-bold",
                                        style: {
                                            color: selectedCollection ? "#e0e0e0" : "#555"
                                        },
                                        children: "Schema"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectWrapper, {
                                label: "",
                                loading: loadingSchemas,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                    value: selectedSchema,
                                    onChange: (e)=>setSelectedSchema(e.target.value),
                                    disabled: !selectedCollection || loadingSchemas || schemas.length === 0,
                                    className: "w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer pr-10",
                                    style: selectStyle(!!selectedCollection && !loadingSchemas && schemas.length > 0),
                                    children: !selectedCollection ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "Select a collection first"
                                    }) : loadingSchemas ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "Loading schemas..."
                                    }) : schemas.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "No schemas found"
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                children: "Select a schema..."
                                            }),
                                            schemas.map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: s,
                                                    children: s
                                                }, s))
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs font-bold font-mono px-2 py-0.5 rounded",
                                        style: {
                                            background: selectedSchema ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.04)",
                                            color: selectedSchema ? "#00ff88" : "#555",
                                            border: `1px solid ${selectedSchema ? "rgba(0,255,136,0.2)" : "rgba(255,255,255,0.06)"}`
                                        },
                                        children: "03"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-bold",
                                        style: {
                                            color: selectedSchema ? "#e0e0e0" : "#555"
                                        },
                                        children: "Template"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectWrapper, {
                                label: "",
                                loading: loadingTemplates,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                    value: selectedTemplate?.template_id || "",
                                    onChange: (e)=>{
                                        const tpl = templates.find((t)=>t.template_id === e.target.value);
                                        setSelectedTemplate(tpl || null);
                                    },
                                    disabled: !selectedSchema || loadingTemplates || templates.length === 0,
                                    className: "w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer pr-10",
                                    style: selectStyle(!!selectedSchema && !loadingTemplates && templates.length > 0),
                                    children: !selectedSchema ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "Select a schema first"
                                    }) : loadingTemplates ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "Loading templates..."
                                    }) : templates.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        children: "No templates found"
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                children: "Select a template..."
                                            }),
                                            templates.map((t)=>{
                                                const issued = parseInt(t.issued_supply);
                                                const max = parseInt(t.max_supply);
                                                const remaining = max > 0 ? ` — ${max - issued} remaining` : " — unlimited";
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                                    value: t.template_id,
                                                    children: [
                                                        t.name,
                                                        " (#",
                                                        t.template_id,
                                                        ")",
                                                        remaining
                                                    ]
                                                }, t.template_id);
                                            })
                                        ]
                                    })
                                })
                            }),
                            selectedTemplate && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-3 rounded-xl p-4 flex items-center gap-4",
                                style: {
                                    background: "rgba(0,255,136,0.04)",
                                    border: "1px solid rgba(0,255,136,0.1)"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Cube, {
                                        size: 20,
                                        style: {
                                            color: "#9945FF"
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-sm font-semibold text-white",
                                                children: selectedTemplate.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-xs text-neutral-500 font-mono mt-0.5",
                                                children: [
                                                    "Template #",
                                                    selectedTemplate.template_id,
                                                    " \xb7",
                                                    " ",
                                                    parseInt(selectedTemplate.issued_supply).toLocaleString(),
                                                    " ",
                                                    "minted",
                                                    parseInt(selectedTemplate.max_supply) > 0 ? ` / ${parseInt(selectedTemplate.max_supply).toLocaleString()} max` : " (unlimited)"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CheckCircle, {
                                        size: 20,
                                        style: {
                                            color: "#00ff88"
                                        }
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs font-bold font-mono px-2 py-0.5 rounded",
                                        style: {
                                            background: selectedTemplate ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.04)",
                                            color: selectedTemplate ? "#00ff88" : "#555",
                                            border: `1px solid ${selectedTemplate ? "rgba(0,255,136,0.2)" : "rgba(255,255,255,0.06)"}`
                                        },
                                        children: "04"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-bold",
                                        style: {
                                            color: selectedTemplate ? "#e0e0e0" : "#555"
                                        },
                                        children: "Recipient"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                value: recipient,
                                onChange: (e)=>setRecipient(e.target.value.toLowerCase()),
                                placeholder: "XPR account name",
                                className: "w-full px-4 py-3 rounded-xl text-sm font-mono",
                                style: {
                                    background: "rgb(15,15,15)",
                                    border: `1px solid ${recipient ? "rgba(0,255,136,0.3)" : "rgba(255,255,255,0.08)"}`,
                                    color: "#fff",
                                    outline: "none"
                                }
                            }),
                            recipient && recipient !== accountName && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-xs text-yellow-500 mt-1.5 ml-1",
                                children: [
                                    "⚠ Minting to a different account: ",
                                    recipient
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs font-bold font-mono px-2 py-0.5 rounded",
                                        style: {
                                            background: recipient ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.04)",
                                            color: recipient ? "#00ff88" : "#555",
                                            border: `1px solid ${recipient ? "rgba(0,255,136,0.2)" : "rgba(255,255,255,0.06)"}`
                                        },
                                        children: "05"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-bold",
                                        style: {
                                            color: recipient ? "#e0e0e0" : "#555"
                                        },
                                        children: "Quantity"
                                    }),
                                    selectedTemplate && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-xs text-neutral-600 ml-auto",
                                        children: [
                                            "max ",
                                            maxMintable > 500 ? "500" : maxMintable,
                                            " per tx"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        onClick: ()=>setQuantity((q)=>Math.max(1, q - 1)),
                                        className: "w-10 h-10 rounded-lg font-bold text-lg transition-all",
                                        style: {
                                            background: "rgba(0,255,136,0.05)",
                                            border: "1px solid rgba(0,255,136,0.2)",
                                            color: "#00ff88"
                                        },
                                        children: "−"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        value: quantity,
                                        onChange: (e)=>{
                                            const v = parseInt(e.target.value) || 1;
                                            setQuantity(Math.max(1, Math.min(v, Math.min(maxMintable, 500))));
                                        },
                                        min: 1,
                                        max: Math.min(maxMintable, 500),
                                        className: "flex-1 text-center py-2.5 rounded-xl font-mono text-lg font-bold",
                                        style: {
                                            background: "rgb(15,15,15)",
                                            border: "1px solid rgba(0,255,136,0.2)",
                                            color: "#00ff88",
                                            outline: "none"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        onClick: ()=>setQuantity((q)=>Math.min(Math.min(maxMintable, 500), q + 1)),
                                        className: "w-10 h-10 rounded-lg font-bold text-lg transition-all",
                                        style: {
                                            background: "rgba(0,255,136,0.05)",
                                            border: "1px solid rgba(0,255,136,0.2)",
                                            color: "#00ff88"
                                        },
                                        children: "+"
                                    })
                                ]
                            })
                        ]
                    }),
                    canMint && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rounded-xl p-4",
                        style: {
                            background: "rgba(0,255,136,0.04)",
                            border: "1px solid rgba(0,255,136,0.12)"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-wrap gap-5 text-sm",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-xs text-neutral-500 mb-1",
                                            children: "Collection"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "font-mono font-bold",
                                            style: {
                                                color: "#00ff88"
                                            },
                                            children: selectedCollection
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-xs text-neutral-500 mb-1",
                                            children: "Template"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "font-mono font-bold text-white",
                                            children: [
                                                "#",
                                                selectedTemplate?.template_id
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-xs text-neutral-500 mb-1",
                                            children: "Recipient"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "font-mono font-bold text-white",
                                            children: recipient
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-xs text-neutral-500 mb-1",
                                            children: "Quantity"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "font-mono font-bold",
                                            style: {
                                                color: "#00ff88"
                                            },
                                            children: quantity
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: handleMint,
                        disabled: !canMint || submitting,
                        className: "w-full py-4 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-3",
                        style: {
                            background: canMint && !submitting ? "linear-gradient(135deg, rgba(0,255,136,0.25), rgba(0,200,100,0.1))" : "rgba(0,255,136,0.03)",
                            border: `1px solid ${canMint && !submitting ? "rgba(0,255,136,0.5)" : "rgba(0,255,136,0.08)"}`,
                            color: canMint && !submitting ? "#00ff88" : "rgba(0,255,136,0.25)",
                            boxShadow: canMint && !submitting ? "0 0 30px rgba(0,255,136,0.2)" : "none",
                            cursor: canMint && !submitting ? "pointer" : "not-allowed"
                        },
                        children: submitting ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CircleNotch, {
                                    size: 20,
                                    className: "animate-spin"
                                }),
                                "Minting ",
                                quantity,
                                " NFT",
                                quantity > 1 ? "s" : "",
                                "..."
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Lightning, {
                                    size: 20
                                }),
                                "Mint ",
                                quantity,
                                " NFT",
                                quantity > 1 ? "s" : "",
                                " ",
                                recipient && recipient !== accountName ? `→ ${recipient}` : ""
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_7__/* .Modal */ .u, {
                ref: modalRef,
                title: modal.title,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "body-2 mt-2 text-neutral-300",
                        children: modal.message
                    }),
                    modal.details && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                        className: "mt-4 p-3 rounded-lg text-xs font-mono overflow-auto max-h-40 text-red-400",
                        style: {
                            background: "rgba(255,0,0,0.05)",
                            border: "1px solid rgba(255,0,0,0.1)"
                        },
                        children: modal.details
                    }),
                    modal.transactionsIDs?.map((tx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
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
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_2__/* .withUAL */ .D)(QuickMint));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;