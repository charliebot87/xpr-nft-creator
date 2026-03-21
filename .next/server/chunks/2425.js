"use strict";
exports.id = 2425;
exports.ids = [2425];
exports.modules = {

/***/ 2425:
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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1908);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5365);
/* harmony import */ var _utils_isResourceError__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1295);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8820);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5740);
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6942);
/* harmony import */ var _components_Switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(893);
/* harmony import */ var _components_Textarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4439);
/* harmony import */ var _components_WarningCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3070);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6903);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6379);
/* harmony import */ var _utils_validationSchema__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4025);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9136);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__, _components_Modal__WEBPACK_IMPORTED_MODULE_10__, _components_Select__WEBPACK_IMPORTED_MODULE_12__, _components_Switch__WEBPACK_IMPORTED_MODULE_13__, _utils_utils__WEBPACK_IMPORTED_MODULE_17__, _utils_validationSchema__WEBPACK_IMPORTED_MODULE_18__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__, _components_Modal__WEBPACK_IMPORTED_MODULE_10__, _components_Select__WEBPACK_IMPORTED_MODULE_12__, _components_Switch__WEBPACK_IMPORTED_MODULE_13__, _utils_utils__WEBPACK_IMPORTED_MODULE_17__, _utils_validationSchema__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























function Airdrop({ ual  }) {
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { chainKey , collection  } = router.query;
    const [unique, setUnique] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [collections, setCollections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [randomizing, setRandomizing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [assetsToReward, setAssetsToReward] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [actions, setActions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [templateIDsList, setTemplateIDsList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [accountsToReward, setAccountsToReward] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [queriedAssets, setQueriedAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [queriedAccounts, setQueriedAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedDropAssetOption, setSelectedDropAssetOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [selectedSearchByOption, setSelectedSearchByOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_config__WEBPACK_IMPORTED_MODULE_19__.searchByOptions[0].value);
    const [transactionBatch, setTransactionBatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.parse(localStorage.getItem("airdropTransactionBatch")) || []);
    const [selectedBatchSizeOption, setSelectedBatchSizeOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_config__WEBPACK_IMPORTED_MODULE_19__.batchOptions[0].value);
    const [hasRemainingTransactions, setHasRemainingTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [templateData, setTemplateData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        valid: false,
        template: {}
    });
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        message: "",
        details: "",
        transactionsIDs: [],
        resourceError: false
    });
    const chainIdLogged = ual?.activeUser?.chainId ?? ual?.activeUser?.chain.chainId;
    const chainId = _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_16__[chainKey].chainId;
    const validation = (0,_utils_validationSchema__WEBPACK_IMPORTED_MODULE_18__.validationSchema)({
        queriedAccounts,
        queriedAssets,
        chainKey
    });
    const { control , watch , register , setValue , setError , getValues , resetField , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__.yupResolver)(validation),
        shouldFocusError: true,
        reValidateMode: "onBlur"
    });
    const watchRecipients = watch("recipients");
    const watchQuantity = watch("quantity");
    const watchAssets = watch("assets");
    const watchMemo = watch("memo");
    const recipientsBlacklist = watch("recipientsBlacklist");
    function handleEOSAuthorityChain() {
        switch(chainKey){
            case "wax-test":
                return "waxtest";
            case "jungle4":
                return "jungle";
            default:
                return chainKey;
        }
    }
    const EOSAuthorityChain = handleEOSAuthorityChain();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (watchRecipients) {
            setAccountsToReward(watchRecipients.split(","));
        }
        if (watchAssets) {
            setAssetsToReward(watchAssets.split(","));
        }
    }, [
        watchRecipients,
        watchAssets
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (actions.length > 0) {
            setTransactions(_utils_utils__WEBPACK_IMPORTED_MODULE_17__.breakArray(actions, selectedBatchSizeOption));
        }
    }, [
        actions,
        selectedBatchSizeOption
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (transactionBatch.length > 0) {
            setHasRemainingTransactions(true);
        }
        localStorage.setItem("airdropTransactionBatch", JSON.stringify(transactionBatch));
    }, [
        transactionBatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (accountsToReward.length > 0) {
            let accounts = [];
            const blacklist = recipientsBlacklist.split(",");
            accounts = unique ? _utils_utils__WEBPACK_IMPORTED_MODULE_17__.filterRepeatedElements(accountsToReward) : accountsToReward;
            if (blacklist.length > 0) {
                accounts = accounts.filter((account)=>!blacklist.includes(account));
            }
            const assetsList = assetsToReward ?? [];
            let actionsList = [];
            if (assetsList && assetsList.length > 0 && selectedDropAssetOption === "assets") {
                actionsList = _utils_utils__WEBPACK_IMPORTED_MODULE_17__.handleAirdropByAssetID({
                    ual,
                    recipients: accounts,
                    assets: assetsList,
                    memo: watchMemo
                });
            }
            if (templateData["template"] && templateData["template"].template_id && selectedDropAssetOption === "template") {
                actionsList = _utils_utils__WEBPACK_IMPORTED_MODULE_17__.handleAirdropByTemplateID({
                    ual,
                    recipients: accounts,
                    templateID: templateData["template"].template_id,
                    collectionName: collection || templateData["template"].collection.collection_name,
                    schemaName: templateData["template"].schema?.schema_name
                });
            }
            setActions(actionsList);
        }
    }, [
        ual,
        watchMemo,
        unique,
        templateData,
        collection,
        assetsToReward,
        accountsToReward,
        recipientsBlacklist,
        selectedDropAssetOption
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCollections("");
        setTemplateIDsList("");
        resetField("templateIDs");
        resetField("collections");
    }, [
        selectedSearchByOption,
        resetField
    ]);
    async function findAccounts() {
        try {
            setLoading(true);
            const accounts = await _utils_utils__WEBPACK_IMPORTED_MODULE_17__.handleAccountsFilters({
                collections,
                search: selectedSearchByOption,
                templates: templateIDsList,
                chainKey,
                quantity: Number(watchQuantity),
                unique
            });
            if (accounts.length > 0) {
                setValue("recipients", accounts.toString());
                setAccountsToReward(accounts);
                setQueriedAccounts(accounts);
            } else {
                modalRef.current?.openModal();
                setModal({
                    title: "Unable to find accounts",
                    message: "There are no accounts to airdrop with the selected filters."
                });
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(error));
            const details = JSON.stringify(error, undefined, 2);
            const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to find accounts";
            setModal({
                title: "Find accounts error",
                message,
                details
            });
        }
    }
    async function findAssetsByTemplateId({ templateId  }) {
        try {
            setLoading(true);
            const assets = await _utils_utils__WEBPACK_IMPORTED_MODULE_17__.handleAssets({
                accountName: ual.activeUser.accountName,
                chainKey,
                templateID: templateId
            });
            setValue("assets", assets.toString());
            setQueriedAssets(assets);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(error));
            const details = JSON.stringify(error, undefined, 2);
            const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to find NFTs";
            setModal({
                title: "Find NFTs error",
                message,
                details
            });
        }
    }
    async function onSubmit() {
        try {
            if (transactions.length > 0) {
                localStorage.setItem("airdropTransactionBatch", JSON.stringify(transactions));
                let updatedBatch = [
                    ...transactions
                ];
                const transactionsIDs = [];
                for (const actions of transactions){
                    const result = await ual.activeUser.signTransaction({
                        actions
                    }, {
                        blocksBehind: 3,
                        expireSeconds: 60
                    });
                    if (result.status === "executed") {
                        updatedBatch = updatedBatch.filter((item)=>item !== actions);
                        setTransactionBatch(updatedBatch);
                        transactionsIDs.push(result.transactionId);
                    }
                }
                modalRef.current?.openModal();
                const title = "Airdrop has been broadcast successfully";
                const message = "To verify that your transaction is included in a block:";
                setModal({
                    title,
                    message,
                    transactionsIDs
                });
                localStorage.removeItem("airdropTransactionBatch");
            }
        } catch (error) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(error));
            const details = JSON.stringify(error, undefined, 2);
            const message1 = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to airdrop NFTs";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_20__/* .isResourceError */ ._)(message1);
            setModal({
                title: "Transaction error",
                message: message1,
                details,
                resourceError
            });
        }
    }
    function handleLogin() {
        ual?.showModal();
    }
    if (!!chainId && !!chainIdLogged && chainId === chainIdLogged) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container flex flex-col gap-12",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "headline-1",
                            children: _config__WEBPACK_IMPORTED_MODULE_19__.pluginInfo.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "body-1",
                            children: "Bulk send NFTs with filters."
                        })
                    ]
                }),
                !collection && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rounded-2xl p-6 sm:p-8",
                    style: {
                        background: "rgba(0,0,0,0.5)",
                        border: "1px solid rgba(0,255,136,0.12)"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-lg font-bold text-white mb-1",
                            children: "How Airdrops Work"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-neutral-500 mb-6",
                            children: "Follow these steps to airdrop NFTs to your community"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                            children: [
                                {
                                    step: "1",
                                    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_7__.Stack,
                                    title: "Create a Collection",
                                    desc: "Set up your NFT collection",
                                    href: `/${chainKey}/collection/new`
                                },
                                {
                                    step: "2",
                                    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_7__.HardDrives,
                                    title: "Create Templates",
                                    desc: "Define your NFT templates",
                                    href: null
                                },
                                {
                                    step: "3",
                                    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_7__.Cube,
                                    title: "Mint NFTs",
                                    desc: "Mint assets from templates",
                                    href: null
                                },
                                {
                                    step: "4",
                                    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_7__.Parachute,
                                    title: "Airdrop!",
                                    desc: "Send NFTs to recipients below",
                                    href: null
                                }
                            ].map((item)=>{
                                const Icon = item.icon;
                                const content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "rounded-xl p-4 transition-all duration-200 group",
                                    style: {
                                        background: "rgba(0,255,136,0.03)",
                                        border: "1px solid rgba(0,255,136,0.08)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-3 mb-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-2xl font-bold font-mono",
                                                    style: {
                                                        color: "#00ff88",
                                                        textShadow: "0 0 10px rgba(0,255,136,0.4)"
                                                    },
                                                    children: item.step
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                                    size: 20,
                                                    style: {
                                                        color: "#00ff88"
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-sm font-bold text-white mb-1",
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-xs text-neutral-500",
                                            children: item.desc
                                        }),
                                        item.href && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-1 text-xs mt-2 font-semibold",
                                            style: {
                                                color: "#00ff88"
                                            },
                                            children: [
                                                "Go ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.ArrowRight, {
                                                    size: 12
                                                })
                                            ]
                                        })
                                    ]
                                }, item.step);
                                return item.href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    href: item.href,
                                    children: content
                                }, item.step) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: content
                                }, item.step);
                            })
                        })
                    ]
                }),
                hasRemainingTransactions ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: transactionBatch?.length > 0 && actions.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col gap-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WarningCard__WEBPACK_IMPORTED_MODULE_15__/* .WarningCard */ .S, {
                            title: "Transaction Batch",
                            content: "It appears that you have a batch of transactions that weren't replicated to the chain. Select continue to review imported data or clear to start a new import.",
                            callback: ()=>_utils_utils__WEBPACK_IMPORTED_MODULE_17__.continueAirdropBatchTransactions({
                                    transactionBatch,
                                    setActions
                                }),
                            clear: ()=>{
                                localStorage.removeItem("airdropTransactionBatch"), setHasRemainingTransactions(false);
                            }
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col gap-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WarningCard__WEBPACK_IMPORTED_MODULE_15__/* .WarningCard */ .S, {
                                    title: "Transaction Batch",
                                    content: `There is ${transactionBatch.length > 1 ? `${transactionBatch.length} transactions remaining` : `${transactionBatch.length} transaction remaining`}, please proceed to Airdrop.`
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>onSubmit(),
                                className: "btn w-fit",
                                children: _config__WEBPACK_IMPORTED_MODULE_19__.pluginInfo.name
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit(onSubmit),
                    className: "flex flex-col gap-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-12",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-flow-row grid-cols-12 gap-4 gap-y-8 border border-neutral-700 rounded-md p-8 justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "md:col-span-4 col-span-12",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_12__/* .Select */ .P, {
                                                onChange: (option)=>setSelectedSearchByOption(option),
                                                label: "Include accounts",
                                                selectedValue: _config__WEBPACK_IMPORTED_MODULE_19__.searchByOptions[0].value,
                                                options: _config__WEBPACK_IMPORTED_MODULE_19__.searchByOptions
                                            })
                                        }),
                                        (selectedSearchByOption === "collection" || selectedSearchByOption === "notHoldingTemplate") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "md:col-span-4 col-span-12",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_11__/* .Input */ .I, {
                                                ...register("collections"),
                                                type: "text",
                                                label: selectedSearchByOption === "notHoldingTemplate" ? "Holding collection" : "Holding any of the following collections",
                                                placeholder: selectedSearchByOption !== "notHoldingTemplate" ? "Comma-separated" : null,
                                                onChange: (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_21__/* .debounce */ .D)(async (e)=>{
                                                    await _utils_utils__WEBPACK_IMPORTED_MODULE_17__.checkIfCollectionExists({
                                                        chainKey,
                                                        collections: e.target.value,
                                                        field: "collections",
                                                        setError
                                                    });
                                                    setCollections(e.target.value);
                                                }, 500),
                                                error: errors.collections && errors.collections.message
                                            })
                                        }),
                                        (selectedSearchByOption === "template" || selectedSearchByOption === "notHoldingTemplate") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "md:col-span-4 col-span-12",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_11__/* .Input */ .I, {
                                                ...register("templateIDs"),
                                                type: "text",
                                                label: selectedSearchByOption === "notHoldingTemplate" ? "Not holding template ID" : "Holding any of the following template IDs",
                                                placeholder: selectedSearchByOption !== "notHoldingTemplate" ? "Comma-separated" : null,
                                                onChange: (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_21__/* .debounce */ .D)(async (e)=>{
                                                    await _utils_utils__WEBPACK_IMPORTED_MODULE_17__.handleTemplates({
                                                        chainKey,
                                                        templates: e.target.value,
                                                        field: "templateIDs",
                                                        setError
                                                    });
                                                    setTemplateIDsList(e.target.value);
                                                }, 500),
                                                error: errors.templateIDs && errors.templateIDs.message
                                            })
                                        }),
                                        selectedSearchByOption !== "notHoldingTemplate" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "md:col-span-4 col-span-12",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_11__/* .Input */ .I, {
                                                ...register("quantity"),
                                                type: "number",
                                                label: "Minimum entry quantity",
                                                defaultValue: 1
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "md:col-span-5 col-span-12",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                                control: control,
                                                name: "uniqueAccounts",
                                                defaultValue: false,
                                                render: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Switch__WEBPACK_IMPORTED_MODULE_13__/* .Switch */ .r, {
                                                        label: "Limit 1 per account",
                                                        onChange: setUnique,
                                                        checked: unique
                                                    })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-span-12",
                                            children: !loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "btn w-fit",
                                                type: "button",
                                                onClick: ()=>findAccounts(),
                                                disabled: !(templateIDsList || collections) || selectedSearchByOption === "notHoldingTemplate" && (collections.length === 0 || templateIDsList.length === 0),
                                                children: "Find accounts"
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.CircleNotch, {
                                                        size: 24,
                                                        weight: "bold",
                                                        className: "animate-spin"
                                                    }),
                                                    "Loading..."
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row justify-between items-end h-8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row gap-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "body-2 font-bold",
                                                            children: "Accounts to Airdrop"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "badge-small font-bold",
                                                            children: `${accountsToReward && accountsToReward.length}`
                                                        })
                                                    ]
                                                }),
                                                accountsToReward.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    type: "button",
                                                    onClick: async ()=>{
                                                        setRandomizing(true);
                                                        await _utils_utils__WEBPACK_IMPORTED_MODULE_17__.randomizeArray({
                                                            array: accountsToReward,
                                                            field: "recipients",
                                                            setValue
                                                        });
                                                        setRandomizing(false);
                                                    },
                                                    className: "btn p-0.5 btn-ghost flex flex-row tooltip gap-2 items-center hover:last:block",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.DiceFive, {
                                                            size: 24,
                                                            className: randomizing ? "animate-spin" : null
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "tooltip-text",
                                                            children: "Randomize accounts"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                            name: "recipients",
                                            control: control,
                                            defaultValue: "",
                                            render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Textarea__WEBPACK_IMPORTED_MODULE_14__/* .Textarea */ .g, {
                                                    ...field,
                                                    error: _utils_utils__WEBPACK_IMPORTED_MODULE_17__.convertErrorToString(errors.recipients),
                                                    placeholder: "Comma-separated",
                                                    onChange: (event)=>{
                                                        field.onChange(event.target.value);
                                                    },
                                                    hint: queriedAccounts.length > 0 && "You may add additional accounts above separated by commas and no spaces. Example: nftflow,jumpnft,newgamer234"
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "body-2 font-bold",
                                                    children: "Blacklist accounts"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "badge-small font-bold",
                                                    children: `${recipientsBlacklist ? recipientsBlacklist.split(",").length : 0}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                            name: "recipientsBlacklist",
                                            control: control,
                                            defaultValue: "",
                                            render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Textarea__WEBPACK_IMPORTED_MODULE_14__/* .Textarea */ .g, {
                                                    ...field,
                                                    error: _utils_utils__WEBPACK_IMPORTED_MODULE_17__.convertErrorToString(errors.recipientsBlacklist),
                                                    placeholder: "Comma-separated",
                                                    onChange: (event)=>{
                                                        field.onChange(event.target.value);
                                                    }
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_12__/* .Select */ .P, {
                                            onChange: (option)=>setSelectedDropAssetOption(option),
                                            label: "How do you want to Airdrop",
                                            selectedValue: _config__WEBPACK_IMPORTED_MODULE_19__.dropAssetsOptions[0].value,
                                            options: _config__WEBPACK_IMPORTED_MODULE_19__.dropAssetsOptions
                                        }),
                                        selectedDropAssetOption === "template" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_11__/* .Input */ .I, {
                                            ...register("templateID"),
                                            type: "text",
                                            label: "Template ID",
                                            onChange: (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_21__/* .debounce */ .D)(async (e)=>{
                                                await _utils_utils__WEBPACK_IMPORTED_MODULE_17__.handleTemplates({
                                                    chainKey,
                                                    collectionName: collection,
                                                    templates: e.target.value,
                                                    field: "templateID",
                                                    setError,
                                                    callback: setTemplateData
                                                });
                                            }, 500),
                                            error: errors.templateID && errors.templateID.message
                                        }),
                                        selectedDropAssetOption === "assets" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col gap-8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `flex flex-col md:flex-row gap-4 gap-y-8 border border-neutral-700 rounded-md p-8 justify-between items-start ${errors.assetsByTemplateId && errors.assetsByTemplateId.message ? "md:items-center" : "md:items-end"}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_11__/* .Input */ .I, {
                                                            ...register("assetsByTemplateId"),
                                                            type: "text",
                                                            className: "w-full",
                                                            label: "Find NFTs by Template ID",
                                                            onChange: (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_21__/* .debounce */ .D)(async (e)=>{
                                                                await _utils_utils__WEBPACK_IMPORTED_MODULE_17__.handleTemplates({
                                                                    chainKey,
                                                                    collectionName: collection,
                                                                    templates: e.target.value,
                                                                    field: "assetsByTemplateId",
                                                                    setError,
                                                                    callback: setTemplateData
                                                                });
                                                            }, 500),
                                                            error: errors.assetsByTemplateId && errors.assetsByTemplateId.message
                                                        }),
                                                        !loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "btn w-fit whitespace-nowrap",
                                                            type: "button",
                                                            disabled: !!(errors.assetsByTemplateId && errors.assetsByTemplateId.message),
                                                            onClick: ()=>findAssetsByTemplateId(getValues("assetsByTemplateId")),
                                                            children: "Find NFTs"
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.CircleNotch, {
                                                                    size: 24,
                                                                    weight: "bold",
                                                                    className: "animate-spin"
                                                                }),
                                                                "Loading..."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-row justify-between items-end h-8",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex flex-row gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            className: "body-2 font-bold",
                                                                            children: "NFTs to Airdrop"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "badge-small font-bold",
                                                                            children: `${assetsToReward.length}`
                                                                        })
                                                                    ]
                                                                }),
                                                                assetsToReward.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                    type: "button",
                                                                    onClick: async ()=>{
                                                                        setRandomizing(true);
                                                                        await _utils_utils__WEBPACK_IMPORTED_MODULE_17__.randomizeArray({
                                                                            array: assetsToReward,
                                                                            field: "assets",
                                                                            setValue
                                                                        });
                                                                        setRandomizing(false);
                                                                    },
                                                                    className: "btn p-0.5 btn-ghost flex flex-row tooltip gap-2 items-center hover:last:block",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.DiceFive, {
                                                                            size: 24,
                                                                            className: randomizing && "animate-spin"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "tooltip-text",
                                                                            children: "Randomize NFTs"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                                            name: "assets",
                                                            control: control,
                                                            defaultValue: "",
                                                            render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Textarea__WEBPACK_IMPORTED_MODULE_14__/* .Textarea */ .g, {
                                                                    ...field,
                                                                    error: _utils_utils__WEBPACK_IMPORTED_MODULE_17__.convertErrorToString(errors.assets),
                                                                    placeholder: "Comma-separated",
                                                                    onChange: (event)=>{
                                                                        field.onChange(event.target.value);
                                                                    }
                                                                })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        selectedDropAssetOption && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_12__/* .Select */ .P, {
                                                    onChange: (option)=>setSelectedBatchSizeOption(option),
                                                    label: "Batch size",
                                                    selectedValue: _config__WEBPACK_IMPORTED_MODULE_19__.batchOptions[0].value,
                                                    options: _config__WEBPACK_IMPORTED_MODULE_19__.batchOptions
                                                }),
                                                selectedDropAssetOption === "assets" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_11__/* .Input */ .I, {
                                                    type: "text",
                                                    label: "Memo",
                                                    ...register("memo")
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (accountsToReward.length > assetsToReward.length || accountsToReward.length < assetsToReward.length) && assetsToReward.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WarningCard__WEBPACK_IMPORTED_MODULE_15__/* .WarningCard */ .S, {
                            title: "Airdrop reward",
                            content: accountsToReward.length > assetsToReward.length ? `There are more recipients than NFTs. Only ${assetsToReward.length} accounts will receive an NFT.` : `There are ${assetsToReward.length} NFTs and only ${accountsToReward.length} accounts. Some NFTs will not be distributed.`
                        }),
                        actions.length > Number(selectedBatchSizeOption) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WarningCard__WEBPACK_IMPORTED_MODULE_15__/* .WarningCard */ .S, {
                            title: "Transaction Batch",
                            content: `This process was batched into ${Math.ceil(actions.length / Number(selectedBatchSizeOption))} transactions, this means you will have to sign each one of them.`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn w-fit",
                            disabled: !selectedDropAssetOption || (selectedDropAssetOption === "assets" ? assetsToReward.length === 0 : templateData.template && Object.keys(templateData.template).length === 0) || loading,
                            children: _config__WEBPACK_IMPORTED_MODULE_19__.pluginInfo.name
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_10__/* .Modal */ .u, {
                    ref: modalRef,
                    title: modal.title,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "body-2 mt-2",
                            children: modal.message
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Disclosure, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row gap-4 items-baseline",
                                children: [
                                    modal.transactionsIDs && modal.transactionsIDs.map((transaction)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            className: "flex py-2 underline underline-offset-2",
                                            href: `https://explorer.xprnetwork.org/transaction/${transaction}`,
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "break-all",
                                                children: transaction
                                            })
                                        }, transaction)),
                                    modal.resourceError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        href: `/${chainKey}/resources`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "btn btn-small",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Manage Resources"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `Airdrop - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_22__/* .appName */ .DJ}`
                })
            }),
            !ual?.activeUser && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto my-14 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "headline-2",
                        children: "Connect your wallet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "body-1 mt-2 mb-6",
                        children: "You need to connect your wallet to Airdrop NFTs"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_2__/* .withUAL */ .D)(Airdrop));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(func, delay) {
    let timeoutId;
    return (...args)=>{
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
            func.apply(null, args);
        }, delay);
    };
}


/***/ })

};
;