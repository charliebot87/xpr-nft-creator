"use strict";
exports.id = 1665;
exports.ids = [1665];
exports.modules = {

/***/ 1665:
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
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6903);
/* harmony import */ var _services_simpledex_getCreatorsService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Modal__WEBPACK_IMPORTED_MODULE_7__]);
_components_Modal__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const RPC_URL = "https://api.protonnz.com";
function SendTokens({ ual  }) {
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const confirmRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { chainKey  } = router.query;
    // User token balances
    const [userTokens, setUserTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingBalances, setLoadingBalances] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [balanceError, setBalanceError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [selectedToken, setSelectedToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // Recipient mode
    const [recipientMode, setRecipientMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("manual");
    // Send mode
    const [sendMode, setSendMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("equal");
    // Manual recipients
    const [manualInput, setManualInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // SimpleDEX recipients
    const [dexTokens, setDexTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingDexTokens, setLoadingDexTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [dexTokenError, setDexTokenError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [selectedDexToken, setSelectedDexToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [dexHolders, setDexHolders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingHolders, setLoadingHolders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [holderError, setHolderError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [selectedAccounts, setSelectedAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Set());
    const [holderSearch, setHolderSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dexTokenSearch, setDexTokenSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Amount & sending
    const [amountPerRecipient, setAmountPerRecipient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [totalAirdropAmount, setTotalAirdropAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [memo, setMemo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [batchProgress, setBatchProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        current: 0,
        total: 0
    });
    // Transaction history
    const [txHistory, setTxHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // Result state for modal
    const [modalState, setModalState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: ""
    });
    const chainIdLogged = ual?.activeUser?.chainId ?? ual?.activeUser?.chain?.chainId;
    const chainId = _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_8__[chainKey]?.chainId;
    const accountName = ual?.activeUser?.accountName;
    // Set default memo with sender name
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (accountName && !memo) {
            setMemo(`Airdrop from ${accountName} via nft.charliebot.dev`);
        }
    }, [
        accountName
    ]);
    async function fetchUserBalances() {
        if (!accountName) return;
        setLoadingBalances(true);
        setBalanceError(null);
        try {
            const res = await fetch(`${RPC_URL}/v1/chain/get_table_rows`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: "simpletoken",
                    scope: accountName,
                    table: "accounts",
                    json: true,
                    limit: 100
                })
            });
            const data = await res.json();
            const tokens = (data.rows || []).map((row)=>{
                const parts = row.balance.split(" ");
                const amountStr = parts[0];
                const symbol = parts[1];
                const precision = amountStr.includes(".") ? amountStr.split(".")[1].length : 0;
                return {
                    symbol,
                    precision,
                    balance: row.balance,
                    amount: parseFloat(amountStr)
                };
            });
            setUserTokens(tokens.filter((t)=>t.amount > 0));
        } catch (err) {
            console.error("Failed to fetch balances:", err);
            setUserTokens([]);
            setBalanceError("Could not load your token balances. Please check your connection and retry.");
        }
        setLoadingBalances(false);
    }
    async function fetchDexTokens() {
        setLoadingDexTokens(true);
        setDexTokenError(null);
        try {
            const data = await (0,_services_simpledex_getCreatorsService__WEBPACK_IMPORTED_MODULE_9__/* .getSimpleDexTokens */ .Ui)();
            setDexTokens(data);
        } catch  {
            setDexTokens([]);
            setDexTokenError("Unable to load SimpleDEX token list. Please try again.");
        }
        setLoadingDexTokens(false);
    }
    async function fetchHolders(token) {
        setLoadingHolders(true);
        setDexHolders([]);
        setSelectedAccounts(new Set());
        setHolderError(null);
        try {
            const data = await (0,_services_simpledex_getCreatorsService__WEBPACK_IMPORTED_MODULE_9__/* .getTokenHolders */ .gb)(token.tokenId);
            const filtered = data.filter((h)=>h.account !== accountName);
            setDexHolders(filtered);
            setSelectedAccounts(new Set(filtered.map((h)=>h.account)));
        } catch  {
            setDexHolders([]);
            setHolderError(`Could not load holders for ${token.symbol}. Please try again.`);
        }
        setLoadingHolders(false);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (chainId && chainIdLogged && chainId === chainIdLogged && accountName) {
            fetchUserBalances();
        }
    }, [
        chainId,
        chainIdLogged,
        accountName
    ]);
    const manualRecipients = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!manualInput.trim()) return [];
        return manualInput.split(/[\n,]+/).map((s)=>s.trim().toLowerCase()).filter((s)=>s.length > 0 && s.length <= 12);
    }, [
        manualInput
    ]);
    const activeRecipients = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (recipientMode === "manual") return manualRecipients;
        return Array.from(selectedAccounts);
    }, [
        recipientMode,
        manualRecipients,
        selectedAccounts
    ]);
    // For proportional mode: map account -> their holder amount
    const holderAmountMap = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const map = new Map();
        dexHolders.forEach((h)=>map.set(h.account, h.amount));
        return map;
    }, [
        dexHolders
    ]);
    const filteredHolders = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>dexHolders.filter((h)=>h.account.toLowerCase().includes(holderSearch.toLowerCase())), [
        dexHolders,
        holderSearch
    ]);
    const filteredDexTokens = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>dexTokens.filter((t)=>t.name?.toLowerCase().includes(dexTokenSearch.toLowerCase()) || t.symbol?.toLowerCase().includes(dexTokenSearch.toLowerCase())), [
        dexTokens,
        dexTokenSearch
    ]);
    function formatRawQuantity(amount, token) {
        return `${amount.toFixed(token.precision)} ${token.symbol}`;
    }
    function formatQuantity(amount, token) {
        const fixed = amount.toFixed(token.precision);
        const [whole, decimals] = fixed.split(".");
        const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return `${withCommas}${decimals ? "." + decimals : ""} ${token.symbol}`;
    }
    // Calculate amounts per account
    const amountMap = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const result = new Map();
        if (!selectedToken || activeRecipients.length === 0) return result;
        if (sendMode === "equal") {
            const amt = parseFloat(amountPerRecipient) || 0;
            activeRecipients.forEach((acc)=>result.set(acc, amt));
        } else {
            // Proportional: distribute totalAirdropAmount based on holder balances
            const total = parseFloat(totalAirdropAmount) || 0;
            const totalHoldings = activeRecipients.reduce((sum, acc)=>sum + (holderAmountMap.get(acc) || 1), 0);
            activeRecipients.forEach((acc)=>{
                const share = (holderAmountMap.get(acc) || 1) / totalHoldings;
                const amt = parseFloat((total * share).toFixed(selectedToken.precision));
                result.set(acc, amt);
            });
        }
        return result;
    }, [
        sendMode,
        activeRecipients,
        amountPerRecipient,
        totalAirdropAmount,
        holderAmountMap,
        selectedToken
    ]);
    const totalAmount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        let sum = 0;
        amountMap.forEach((v)=>sum += v);
        return sum;
    }, [
        amountMap
    ]);
    const hasEnoughBalance = selectedToken ? totalAmount <= selectedToken.amount : false;
    const batchCount = Math.ceil(activeRecipients.length / 50);
    function toggleHolder(account) {
        setSelectedAccounts((prev)=>{
            const next = new Set(prev);
            if (next.has(account)) next.delete(account);
            else next.add(account);
            return next;
        });
    }
    function exportCSV(records) {
        const rows = [
            "account,amount,txId"
        ];
        records.forEach((rec)=>{
            rec.accounts.forEach((acc, i)=>{
                rows.push(`${acc},${rec.amounts[i] ?? ""},${rec.txId}`);
            });
        });
        const blob = new Blob([
            rows.join("\n")
        ], {
            type: "text/csv"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `airdrop-${selectedToken?.symbol ?? "tokens"}-${Date.now()}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    }
    async function handleSend() {
        if (!selectedToken || activeRecipients.length === 0 || !ual?.activeUser) return;
        setSubmitting(true);
        const newTxRecords = [];
        const batchSize = 50;
        const totalBatches = Math.ceil(activeRecipients.length / batchSize);
        setBatchProgress({
            current: 0,
            total: totalBatches
        });
        try {
            for(let i = 0; i < activeRecipients.length; i += batchSize){
                const batchAccounts = activeRecipients.slice(i, i + batchSize);
                const batchAmounts = batchAccounts.map((acc)=>amountMap.get(acc) ?? 0);
                const actions = batchAccounts.map((account, idx)=>({
                        account: "simpletoken",
                        name: "transfer",
                        authorization: [
                            {
                                actor: accountName,
                                permission: "active"
                            }
                        ],
                        data: {
                            from: accountName,
                            to: account,
                            quantity: formatRawQuantity(batchAmounts[idx], selectedToken),
                            memo
                        }
                    }));
                const result = await ual.activeUser.signTransaction({
                    actions
                }, {
                    blocksBehind: 3,
                    expireSeconds: 60
                });
                const txId = result.transactionId || "";
                newTxRecords.push({
                    accounts: batchAccounts,
                    amounts: batchAmounts,
                    txId
                });
                setBatchProgress({
                    current: Math.floor(i / batchSize) + 1,
                    total: totalBatches
                });
            }
            setTxHistory((prev)=>[
                    ...prev,
                    ...newTxRecords
                ]);
            setModalState({
                title: "Airdrop Successful!",
                message: `Sent ${selectedToken.symbol} to ${activeRecipients.length} accounts across ${newTxRecords.length} transaction(s). Total: ${formatQuantity(totalAmount, selectedToken)}`,
                isSuccess: true,
                txRecords: newTxRecords
            });
            modalRef.current?.openModal();
            fetchUserBalances();
        } catch (error) {
            setModalState({
                title: "Airdrop Failed",
                message: error?.cause?.json?.error?.details?.[0]?.message || error?.message || "Something went wrong. Please try again.",
                isSuccess: false,
                txRecords: newTxRecords.length > 0 ? newTxRecords : undefined
            });
            modalRef.current?.openModal();
            if (newTxRecords.length > 0) {
                setTxHistory((prev)=>[
                        ...prev,
                        ...newTxRecords
                    ]);
            }
        }
        setSubmitting(false);
        setBatchProgress({
            current: 0,
            total: 0
        });
    }
    function handleLogin() {
        ual?.showModal();
    }
    // Confirmation dialog content
    const confirmMessage = selectedToken ? `You are about to send ${sendMode === "equal" ? `${amountPerRecipient} ${selectedToken.symbol} each` : `${formatQuantity(totalAmount, selectedToken)} proportionally`} to ${activeRecipients.length} account${activeRecipients.length !== 1 ? "s" : ""}. Total: ${formatQuantity(totalAmount, selectedToken)}. Continue?` : "";
    if (chainId && chainIdLogged && chainId === chainIdLogged) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container flex flex-col gap-8 pb-16",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `Send Tokens - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_10__/* .appName */ .DJ}`
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-3 rounded-xl flex items-center justify-center",
                            style: {
                                background: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.05))",
                                border: "1px solid rgba(0,255,136,0.3)",
                                boxShadow: "0 0 20px rgba(0,255,136,0.1)"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.PaperPlaneTilt, {
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
                                    children: "Send Tokens"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "body-1 text-neutral-400",
                                    children: "Send fungible tokens to multiple accounts at once"
                                })
                            ]
                        })
                    ]
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
                            className: "flex items-center justify-between mb-4",
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
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: fetchUserBalances,
                                    disabled: loadingBalances,
                                    title: "Refresh balances",
                                    style: {
                                        color: "#00ff88",
                                        opacity: 0.7
                                    },
                                    className: "hover:opacity-100 transition-opacity",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.ArrowsClockwise, {
                                        size: 20,
                                        className: loadingBalances ? "animate-spin" : ""
                                    })
                                })
                            ]
                        }),
                        balanceError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                    children: balanceError
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: fetchUserBalances,
                                    className: "ml-auto text-xs underline",
                                    style: {
                                        color: "#ff4d4d"
                                    },
                                    children: "Retry"
                                })
                            ]
                        }),
                        loadingBalances ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center gap-3 py-12",
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
                                    children: "Loading your token balances..."
                                })
                            ]
                        }) : userTokens.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center py-12 text-neutral-500",
                            children: [
                                "No simpletoken balances found for ",
                                accountName
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
                            children: userTokens.map((token)=>{
                                const isSelected = selectedToken?.symbol === token.symbol;
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    onClick: ()=>setSelectedToken(token),
                                    className: "text-left rounded-xl p-4 transition-all duration-200",
                                    style: {
                                        background: isSelected ? "rgba(0,255,136,0.08)" : "rgba(255,255,255,0.02)",
                                        border: isSelected ? "1px solid rgba(0,255,136,0.5)" : "1px solid rgba(255,255,255,0.06)",
                                        boxShadow: isSelected ? "0 0 20px rgba(0,255,136,0.1), inset 0 0 20px rgba(0,255,136,0.03)" : "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold mb-2",
                                            style: {
                                                background: isSelected ? "rgba(0,255,136,0.15)" : "rgba(255,255,255,0.05)",
                                                border: isSelected ? "1px solid rgba(0,255,136,0.3)" : "1px solid rgba(255,255,255,0.08)",
                                                color: isSelected ? "#00ff88" : "#aaa"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Coins, {
                                                size: 18
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "font-bold text-sm truncate",
                                            style: {
                                                color: isSelected ? "#00ff88" : "#fff"
                                            },
                                            children: token.symbol
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-xs text-neutral-500 font-mono mt-1",
                                            children: token.balance
                                        })
                                    ]
                                }, token.symbol);
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "headline-3 flex items-center gap-3 mb-4",
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
                                    children: "Choose Recipients"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    onClick: ()=>setRecipientMode("manual"),
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                                    style: {
                                        background: recipientMode === "manual" ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.03)",
                                        border: recipientMode === "manual" ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(255,255,255,0.08)",
                                        color: recipientMode === "manual" ? "#00ff88" : "#888"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.ListBullets, {
                                            size: 18
                                        }),
                                        "Manual List"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setRecipientMode("simpledex");
                                        if (dexTokens.length === 0) fetchDexTokens();
                                    },
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                                    style: {
                                        background: recipientMode === "simpledex" ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.03)",
                                        border: recipientMode === "simpledex" ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(255,255,255,0.08)",
                                        color: recipientMode === "simpledex" ? "#00ff88" : "#888"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.UsersFour, {
                                            size: 18
                                        }),
                                        "From SimpleDEX Holders"
                                    ]
                                })
                            ]
                        }),
                        recipientMode === "manual" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "text-sm font-bold text-white mb-2 block",
                                    children: "Paste account names (one per line or comma-separated)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    value: manualInput,
                                    onChange: (e)=>setManualInput(e.target.value),
                                    rows: 6,
                                    placeholder: "account1\naccount2\naccount3\n\nor: account1, account2, account3",
                                    className: "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none resize-y font-mono",
                                    style: {
                                        background: "rgba(0,0,0,0.5)",
                                        border: "1px solid rgba(0,255,136,0.2)"
                                    }
                                }),
                                manualRecipients.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 text-xs text-neutral-400",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "#00ff88"
                                            },
                                            className: "font-mono font-bold",
                                            children: manualRecipients.length
                                        }),
                                        " ",
                                        "recipient",
                                        manualRecipients.length !== 1 ? "s" : "",
                                        " parsed"
                                    ]
                                })
                            ]
                        }),
                        recipientMode === "simpledex" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                            placeholder: "Search SimpleDEX token to use its holders...",
                                            value: dexTokenSearch,
                                            onChange: (e)=>setDexTokenSearch(e.target.value),
                                            className: "flex-1 bg-transparent outline-none text-white placeholder-neutral-600 text-sm"
                                        })
                                    ]
                                }),
                                dexTokenError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-3 rounded-xl px-4 py-3",
                                    style: {
                                        background: "rgba(255,77,77,0.08)",
                                        border: "1px solid rgba(255,77,77,0.25)"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.WarningCircle, {
                                            size: 16,
                                            style: {
                                                color: "#ff4d4d"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm",
                                            style: {
                                                color: "#ff4d4d"
                                            },
                                            children: dexTokenError
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            onClick: fetchDexTokens,
                                            className: "ml-auto text-xs underline",
                                            style: {
                                                color: "#ff4d4d"
                                            },
                                            children: "Retry"
                                        })
                                    ]
                                }),
                                loadingDexTokens ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-center gap-3 py-8",
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
                                            children: "Loading SimpleDEX tokens..."
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 overflow-y-auto",
                                    style: {
                                        maxHeight: "240px"
                                    },
                                    children: filteredDexTokens.map((token)=>{
                                        const isSelected = selectedDexToken?.tokenId === token.tokenId;
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setSelectedDexToken(token);
                                                fetchHolders(token);
                                            },
                                            className: "text-left rounded-lg p-3 transition-all text-xs",
                                            style: {
                                                background: isSelected ? "rgba(0,255,136,0.08)" : "rgba(255,255,255,0.02)",
                                                border: isSelected ? "1px solid rgba(0,255,136,0.5)" : "1px solid rgba(255,255,255,0.06)"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "font-bold truncate",
                                                    style: {
                                                        color: isSelected ? "#00ff88" : "#fff"
                                                    },
                                                    children: token.symbol
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-neutral-500 truncate",
                                                    children: token.name
                                                })
                                            ]
                                        }, token.tokenId);
                                    })
                                }),
                                selectedDexToken && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "text-sm font-bold text-white",
                                                            children: [
                                                                selectedDexToken.symbol,
                                                                " Holders"
                                                            ]
                                                        }),
                                                        !loadingHolders && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "text-xs px-2 py-0.5 rounded-md font-mono",
                                                            style: {
                                                                background: "rgba(0,255,136,0.1)",
                                                                color: "#00ff88",
                                                                border: "1px solid rgba(0,255,136,0.2)"
                                                            },
                                                            children: [
                                                                selectedAccounts.size,
                                                                "/",
                                                                dexHolders.length
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                !loadingHolders && dexHolders.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            type: "button",
                                                            onClick: ()=>setSelectedAccounts(new Set(filteredHolders.map((h)=>h.account))),
                                                            className: "flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs",
                                                            style: {
                                                                background: "rgba(0,255,136,0.1)",
                                                                border: "1px solid rgba(0,255,136,0.25)",
                                                                color: "#00ff88"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CheckSquare, {
                                                                    size: 12
                                                                }),
                                                                " All"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            type: "button",
                                                            onClick: ()=>setSelectedAccounts(new Set()),
                                                            className: "flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs",
                                                            style: {
                                                                background: "rgba(255,255,255,0.04)",
                                                                border: "1px solid rgba(255,255,255,0.1)",
                                                                color: "#aaa"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Square, {
                                                                    size: 12
                                                                }),
                                                                " None"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        holderError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-3 rounded-xl px-4 py-3 mb-3",
                                            style: {
                                                background: "rgba(255,77,77,0.08)",
                                                border: "1px solid rgba(255,77,77,0.25)"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.WarningCircle, {
                                                    size: 16,
                                                    style: {
                                                        color: "#ff4d4d"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm",
                                                    style: {
                                                        color: "#ff4d4d"
                                                    },
                                                    children: holderError
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    onClick: ()=>fetchHolders(selectedDexToken),
                                                    className: "ml-auto text-xs underline",
                                                    style: {
                                                        color: "#ff4d4d"
                                                    },
                                                    children: "Retry"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-3 rounded-lg px-3 py-2 mb-3",
                                            style: {
                                                background: "rgba(0,0,0,0.4)",
                                                border: "1px solid rgba(0,255,136,0.1)"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.MagnifyingGlass, {
                                                    size: 14,
                                                    style: {
                                                        color: "#00ff88",
                                                        opacity: 0.5
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    placeholder: "Filter holders...",
                                                    value: holderSearch,
                                                    onChange: (e)=>setHolderSearch(e.target.value),
                                                    className: "flex-1 bg-transparent outline-none text-white placeholder-neutral-700 text-xs"
                                                })
                                            ]
                                        }),
                                        loadingHolders ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-center gap-3 py-8",
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
                                                    children: "Fetching holders..."
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "rounded-xl overflow-y-auto",
                                            style: {
                                                maxHeight: "280px",
                                                background: "rgba(0,0,0,0.3)",
                                                border: "1px solid rgba(0,255,136,0.08)"
                                            },
                                            children: filteredHolders.map((holder, i)=>{
                                                const isChecked = selectedAccounts.has(holder.account);
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    type: "button",
                                                    onClick: ()=>toggleHolder(holder.account),
                                                    className: "w-full flex items-center px-3 py-2 text-xs transition-all",
                                                    style: {
                                                        background: isChecked ? "rgba(0,255,136,0.04)" : "transparent",
                                                        borderBottom: "1px solid rgba(255,255,255,0.03)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-5 flex-shrink-0",
                                                            children: isChecked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CheckSquare, {
                                                                size: 14,
                                                                style: {
                                                                    color: "#00ff88"
                                                                }
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Square, {
                                                                size: 14,
                                                                className: "text-neutral-700"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-6 text-neutral-600 font-mono",
                                                            children: i + 1
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex-1 text-left font-mono truncate",
                                                            style: {
                                                                color: isChecked ? "#00ff88" : "#ccc"
                                                            },
                                                            children: holder.account
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-neutral-500 font-mono",
                                                            children: holder.amount.toLocaleString()
                                                        })
                                                    ]
                                                }, holder.account);
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                selectedToken && activeRecipients.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rounded-2xl p-4 sm:p-6",
                    style: {
                        background: "rgba(0,0,0,0.6)",
                        border: "1px solid rgba(0,255,136,0.15)",
                        boxShadow: "0 0 30px rgba(0,255,136,0.05)"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "headline-3 flex items-center gap-3 mb-6",
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
                                    children: "Amount & Send"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    onClick: ()=>setSendMode("equal"),
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                                    style: {
                                        background: sendMode === "equal" ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.03)",
                                        border: sendMode === "equal" ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(255,255,255,0.08)",
                                        color: sendMode === "equal" ? "#00ff88" : "#888"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Equals, {
                                            size: 18
                                        }),
                                        "Send Equal"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    onClick: ()=>setSendMode("proportional"),
                                    disabled: recipientMode !== "simpledex" || dexHolders.length === 0,
                                    className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                                    title: recipientMode !== "simpledex" ? "Switch to SimpleDEX Holders mode to use proportional sending" : undefined,
                                    style: {
                                        background: sendMode === "proportional" ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.03)",
                                        border: sendMode === "proportional" ? "1px solid rgba(0,255,136,0.4)" : "1px solid rgba(255,255,255,0.08)",
                                        color: sendMode === "proportional" ? "#00ff88" : recipientMode !== "simpledex" || dexHolders.length === 0 ? "#444" : "#888",
                                        cursor: recipientMode !== "simpledex" || dexHolders.length === 0 ? "not-allowed" : "pointer"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Scales, {
                                            size: 18
                                        }),
                                        "Send Proportional"
                                    ]
                                }),
                                sendMode === "proportional" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xs text-neutral-500 self-center",
                                    children: "Distributes based on each holder's token balance share"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                            children: [
                                sendMode === "equal" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "text-sm font-bold text-white",
                                            children: "Amount per recipient"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            step: "any",
                                            min: "0",
                                            value: amountPerRecipient,
                                            onChange: (e)=>setAmountPerRecipient(e.target.value),
                                            placeholder: "e.g. 1000",
                                            className: "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none font-mono",
                                            style: {
                                                background: "rgba(0,0,0,0.5)",
                                                border: "1px solid rgba(0,255,136,0.2)"
                                            }
                                        }),
                                        parseFloat(amountPerRecipient) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-xs text-neutral-500",
                                            children: [
                                                "Will send",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-mono",
                                                    style: {
                                                        color: "#00ff88"
                                                    },
                                                    children: formatQuantity(parseFloat(amountPerRecipient), selectedToken)
                                                }),
                                                " ",
                                                "per account"
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "text-sm font-bold text-white",
                                            children: "Total amount to distribute"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            step: "any",
                                            min: "0",
                                            value: totalAirdropAmount,
                                            onChange: (e)=>setTotalAirdropAmount(e.target.value),
                                            placeholder: "e.g. 100000",
                                            className: "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none font-mono",
                                            style: {
                                                background: "rgba(0,0,0,0.5)",
                                                border: "1px solid rgba(0,255,136,0.2)"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-xs text-neutral-500",
                                            children: "Split proportionally by holder balance ratio"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "text-sm font-bold text-white",
                                            children: "Memo"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            value: memo,
                                            onChange: (e)=>setMemo(e.target.value),
                                            placeholder: "Transfer memo",
                                            className: "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none",
                                            style: {
                                                background: "rgba(0,0,0,0.5)",
                                                border: "1px solid rgba(0,255,136,0.2)"
                                            }
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "rounded-xl p-4 mb-6",
                            style: {
                                background: "rgba(0,255,136,0.04)",
                                border: "1px solid rgba(0,255,136,0.12)"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                                    children: "Mode"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "font-semibold text-white capitalize",
                                                    children: sendMode
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
                                                    children: activeRecipients.length
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-neutral-500 text-xs mb-1",
                                                    children: "Total Amount"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "font-semibold font-mono",
                                                    style: {
                                                        color: hasEnoughBalance ? "#00ff88" : "#ff4d4d"
                                                    },
                                                    children: totalAmount > 0 ? formatQuantity(totalAmount, selectedToken) : "—"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-neutral-500 text-xs mb-1",
                                                    children: "Your Balance"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "font-semibold text-white font-mono",
                                                    children: (()=>{
                                                        const parts = selectedToken.balance.split(" ");
                                                        if (parts.length === 2) {
                                                            const [num, sym] = parts;
                                                            const [whole, dec] = num.split(".");
                                                            return whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (dec ? "." + dec : "") + " " + sym;
                                                        }
                                                        return selectedToken.balance;
                                                    })()
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-neutral-500 text-xs mb-1",
                                                    children: "Batches"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "font-semibold text-white",
                                                    children: [
                                                        batchCount,
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
                                }),
                                totalAmount > 0 && !hasEnoughBalance && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-3 text-xs font-medium px-3 py-2 rounded-lg",
                                    style: {
                                        background: "rgba(255,77,77,0.08)",
                                        border: "1px solid rgba(255,77,77,0.2)",
                                        color: "#ff4d4d"
                                    },
                                    children: [
                                        "Insufficient balance. You need",
                                        " ",
                                        formatQuantity(totalAmount, selectedToken),
                                        " but have",
                                        " ",
                                        selectedToken.balance
                                    ]
                                })
                            ]
                        }),
                        sendMode === "proportional" && recipientMode === "simpledex" && totalAmount > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "text-sm font-bold text-white",
                                            children: "Distribution Breakdown"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-xs text-neutral-500",
                                            children: [
                                                activeRecipients.length,
                                                " recipients"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "rounded-xl overflow-hidden",
                                    style: {
                                        border: "1px solid rgba(0,255,136,0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "grid grid-cols-12 gap-0 px-4 py-2 text-xs font-mono text-neutral-500",
                                            style: {
                                                background: "rgba(0,0,0,0.3)"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-span-4",
                                                    children: "Account"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-span-3 text-right",
                                                    children: "Holdings"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-span-3 text-right",
                                                    children: "Share %"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-span-2 text-right",
                                                    children: "Receives"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "max-h-64 overflow-y-auto",
                                            children: activeRecipients.map((acc)=>{
                                                const holdings = holderAmountMap.get(acc) || 0;
                                                const totalHoldings = Array.from(holderAmountMap.values()).reduce((a, b)=>a + b, 0) || 1;
                                                const sharePercent = holdings / totalHoldings * 100;
                                                const receives = amountMap.get(acc) || 0;
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "grid grid-cols-12 gap-0 px-4 py-2 text-xs font-mono hover:bg-neutral-800/50 transition-colors",
                                                    style: {
                                                        borderTop: "1px solid rgba(255,255,255,0.03)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-span-4 text-neutral-300 truncate",
                                                            children: acc
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-span-3 text-right text-neutral-400",
                                                            children: holdings >= 1000000 ? (holdings / 1000000).toFixed(1) + "M" : holdings >= 1000 ? (holdings / 1000).toFixed(1) + "K" : holdings.toFixed(0)
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-span-3 text-right",
                                                            style: {
                                                                color: "#9966ff"
                                                            },
                                                            children: [
                                                                sharePercent.toFixed(2),
                                                                "%"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-span-2 text-right",
                                                            style: {
                                                                color: "#00ff88"
                                                            },
                                                            children: receives >= 1000000 ? (receives / 1000000).toFixed(1) + "M" : receives >= 1000 ? (receives / 1000).toFixed(1) + "K" : receives.toFixed(selectedToken?.precision || 4)
                                                        })
                                                    ]
                                                }, acc);
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200",
                            disabled: totalAmount <= 0 || !hasEnoughBalance || submitting,
                            onClick: ()=>confirmRef.current?.openModal(),
                            style: {
                                background: totalAmount <= 0 || !hasEnoughBalance || submitting ? "rgba(0,255,136,0.05)" : "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.1))",
                                border: totalAmount <= 0 || !hasEnoughBalance || submitting ? "1px solid rgba(0,255,136,0.1)" : "1px solid rgba(0,255,136,0.4)",
                                color: totalAmount <= 0 || !hasEnoughBalance || submitting ? "rgba(0,255,136,0.3)" : "#00ff88",
                                boxShadow: totalAmount <= 0 || !hasEnoughBalance || submitting ? "none" : "0 0 20px rgba(0,255,136,0.15)",
                                cursor: totalAmount <= 0 || !hasEnoughBalance || submitting ? "not-allowed" : "pointer"
                            },
                            children: submitting ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CircleNotch, {
                                        size: 18,
                                        className: "animate-spin"
                                    }),
                                    "Sending batch ",
                                    batchProgress.current,
                                    "/",
                                    batchProgress.total,
                                    "..."
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.PaperPlaneTilt, {
                                        size: 18
                                    }),
                                    "Send ",
                                    selectedToken.symbol,
                                    " to ",
                                    activeRecipients.length,
                                    " ",
                                    "accounts"
                                ]
                            })
                        })
                    ]
                }),
                txHistory.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rounded-2xl p-4 sm:p-6",
                    style: {
                        background: "rgba(0,0,0,0.6)",
                        border: "1px solid rgba(0,255,136,0.15)",
                        boxShadow: "0 0 30px rgba(0,255,136,0.05)"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "headline-3 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "#00ff88",
                                                textShadow: "0 0 10px rgba(0,255,136,0.6)"
                                            },
                                            children: "✓"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-white",
                                            children: "Transaction History"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    onClick: ()=>exportCSV(txHistory),
                                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                                    style: {
                                        background: "rgba(0,255,136,0.08)",
                                        border: "1px solid rgba(0,255,136,0.25)",
                                        color: "#00ff88"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.DownloadSimple, {
                                            size: 16
                                        }),
                                        "Export CSV"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "rounded-xl overflow-hidden",
                            style: {
                                background: "rgba(0,0,0,0.3)",
                                border: "1px solid rgba(0,255,136,0.08)"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-3 px-4 py-2 text-xs font-semibold uppercase tracking-wider",
                                    style: {
                                        background: "rgba(0,0,0,0.6)",
                                        borderBottom: "1px solid rgba(0,255,136,0.1)",
                                        color: "rgba(0,255,136,0.5)"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "Accounts"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-center",
                                            children: "Amounts"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-right",
                                            children: "Transaction"
                                        })
                                    ]
                                }),
                                txHistory.map((rec, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid grid-cols-3 px-4 py-3 text-xs",
                                        style: {
                                            borderBottom: "1px solid rgba(255,255,255,0.03)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "font-mono text-neutral-400",
                                                children: [
                                                    rec.accounts.length,
                                                    " accounts"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center font-mono",
                                                style: {
                                                    color: "#00ff88"
                                                },
                                                children: [
                                                    rec.amounts.reduce((a, b)=>a + b, 0).toFixed(2),
                                                    " ",
                                                    selectedToken?.symbol
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-right",
                                                children: rec.txId ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: `https://explorer.xprnetwork.org/transaction/${rec.txId}`,
                                                    target: "_blank",
                                                    className: "underline underline-offset-2 font-mono",
                                                    style: {
                                                        color: "#00ff88",
                                                        fontSize: "0.7rem"
                                                    },
                                                    children: [
                                                        rec.txId.slice(0, 16),
                                                        "..."
                                                    ]
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-neutral-600",
                                                    children: "—"
                                                })
                                            })
                                        ]
                                    }, rec.txId + i))
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_7__/* .Modal */ .u, {
                    ref: confirmRef,
                    title: "Confirm Airdrop",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "body-2 mt-3 text-neutral-300",
                            children: confirmMessage
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex gap-3 mt-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        confirmRef.current?.closeModal();
                                        handleSend();
                                    },
                                    className: "flex-1 py-3 rounded-xl font-bold text-sm transition-all",
                                    style: {
                                        background: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.1))",
                                        border: "1px solid rgba(0,255,136,0.4)",
                                        color: "#00ff88"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Check, {
                                                size: 16
                                            }),
                                            "Yes, Send"
                                        ]
                                    })
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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_7__/* .Modal */ .u, {
                    ref: modalRef,
                    title: modalState.title,
                    children: [
                        modalState.isSuccess ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                            children: modalState.message
                        }),
                        modalState.txRecords && modalState.txRecords.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-xs text-neutral-500 font-semibold uppercase tracking-wider",
                                            children: [
                                                "Transactions (",
                                                modalState.txRecords.length,
                                                ")"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            onClick: ()=>exportCSV(modalState.txRecords),
                                            className: "flex items-center gap-1 px-3 py-1 rounded-lg text-xs",
                                            style: {
                                                background: "rgba(0,255,136,0.08)",
                                                border: "1px solid rgba(0,255,136,0.2)",
                                                color: "#00ff88"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.DownloadSimple, {
                                                    size: 12
                                                }),
                                                "Export CSV"
                                            ]
                                        })
                                    ]
                                }),
                                modalState.txRecords.map((rec)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: "flex py-2 underline underline-offset-2",
                                        href: `https://explorer.xprnetwork.org/transaction/${rec.txId}`,
                                        target: "_blank",
                                        style: {
                                            color: "#00ff88"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "break-all font-mono text-sm",
                                            children: rec.txId
                                        })
                                    }, rec.txId))
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
                    children: `Send Tokens - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_10__/* .appName */ .DJ}`
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
                        children: "You need to connect your wallet to send tokens"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_2__/* .withUAL */ .D)(SendTokens));

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