"use strict";
(() => {
var exports = {};
exports.id = 1628;
exports.ids = [1628];
exports.modules = {

/***/ 762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ CardContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CardContainer({ children , style  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: style || "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6",
        children: children
    });
}


/***/ }),

/***/ 9070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ SeeMoreButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_1__);


function SeeMoreButton({ isLoading , onClick  }) {
    return isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_1__.CircleNotch, {
                size: 24,
                weight: "bold",
                className: "animate-spin"
            }),
            "Loading..."
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: "btn",
        onClick: onClick,
        children: "See more"
    });
}


/***/ }),

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

/***/ 8125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 8000
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2195:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6268);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1185);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1908);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2793);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5740);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8820);
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6942);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9507);
/* harmony import */ var _components_CardContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(762);
/* harmony import */ var _components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9070);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5334);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6903);
/* harmony import */ var _utils_isResourceError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1295);
/* harmony import */ var _services_asset_transferAssetService__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8985);
/* harmony import */ var _services_inventory_getInventoryService__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2818);
/* harmony import */ var _services_account_getAccountStatsService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_9__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__, _components_Modal__WEBPACK_IMPORTED_MODULE_13__, _components_Select__WEBPACK_IMPORTED_MODULE_14__, _components_Header__WEBPACK_IMPORTED_MODULE_18__, _services_inventory_getInventoryService__WEBPACK_IMPORTED_MODULE_20__, _services_account_getAccountStatsService__WEBPACK_IMPORTED_MODULE_21__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_9__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__, _components_Modal__WEBPACK_IMPORTED_MODULE_13__, _components_Select__WEBPACK_IMPORTED_MODULE_14__, _components_Header__WEBPACK_IMPORTED_MODULE_18__, _services_inventory_getInventoryService__WEBPACK_IMPORTED_MODULE_20__, _services_account_getAccountStatsService__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























const transferValidation = yup__WEBPACK_IMPORTED_MODULE_8__.object().shape({
    recipient: yup__WEBPACK_IMPORTED_MODULE_8__.string().eosName(),
    memo: yup__WEBPACK_IMPORTED_MODULE_8__.string()
});
function Transfer({ ual  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__.yupResolver)(transferValidation)
    });
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isSaved, setIsSaved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedAssets, setSelectedAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [ownedCollections, setOwnedCollections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [collectionsFilterOptions, setCollectionsFilterOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [filteredAssets, setFilteredAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedCollection, setSelectedCollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [match, setMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [waitToSearch, setWaitToSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        message: "",
        details: "",
        isError: false,
        resourceError: false
    });
    const chainKey = router.query.chainKey ?? _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_22__/* .chainKeyDefault */ .Ly;
    const chainIdLogged = ual?.activeUser?.chainId ?? ual?.activeUser?.chain.chainId;
    const chainId = _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_19__[chainKey].chainId;
    const limit = 12;
    const currentPage = Math.ceil(filteredAssets.length / limit);
    const offset = (currentPage - 1) * limit;
    const isEndOfList = filteredAssets.length % limit > 0;
    const accountName = ual?.activeUser?.accountName;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function getUserInfo() {
            try {
                const { data: inventory  } = await (0,_services_inventory_getInventoryService__WEBPACK_IMPORTED_MODULE_20__/* .getInventoryService */ .v)(chainKey, {
                    owner: accountName
                });
                const { data: collections  } = await (0,_services_account_getAccountStatsService__WEBPACK_IMPORTED_MODULE_21__/* .getAccountStatsService */ .e)(chainKey, accountName);
                setFilteredAssets(inventory.data);
                setOwnedCollections(collections.data["collections"]);
            } catch (e) {
                modalRef.current?.openModal();
                const jsonError = JSON.parse(JSON.stringify(e));
                const details = JSON.stringify(e, undefined, 2);
                const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to get user inventory or collections";
                const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_23__/* .isResourceError */ ._)(message);
                setModal({
                    title: "Error",
                    message,
                    details,
                    resourceError
                });
            }
        }
        if (!!chainId && !!chainIdLogged && chainId === chainIdLogged) {
            getUserInfo();
        }
    }, [
        chainKey,
        chainIdLogged,
        chainId,
        accountName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let options = [
            {
                label: `All Collections (${ownedCollections.length})`,
                value: ""
            }
        ];
        ownedCollections.forEach((item)=>options.push({
                label: item.collection.collection_name,
                value: item.collection.collection_name
            }));
        setCollectionsFilterOptions(options);
    }, [
        ownedCollections
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function getUserInventory() {
            try {
                const { data: inventory  } = await (0,_services_inventory_getInventoryService__WEBPACK_IMPORTED_MODULE_20__/* .getInventoryService */ .v)(chainKey, {
                    owner: accountName,
                    collection_name: selectedCollection
                });
                setFilteredAssets(inventory.data);
            } catch (e) {
                modalRef.current?.openModal();
                const jsonError = JSON.parse(JSON.stringify(e));
                const details = JSON.stringify(e, undefined, 2);
                const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to get user inventory";
                setModal({
                    title: "Error",
                    message,
                    details
                });
            }
        }
        if (selectedCollection) {
            getUserInventory();
        }
    }, [
        selectedCollection,
        accountName,
        chainKey
    ]);
    async function handleSeeMoreAssets() {
        setIsLoading(true);
        try {
            const { data  } = await (0,_services_inventory_getInventoryService__WEBPACK_IMPORTED_MODULE_20__/* .getInventoryService */ .v)(chainKey, {
                owner: accountName,
                match,
                collection_name: selectedCollection,
                page: currentPage + 1,
                limit,
                offset
            });
            setFilteredAssets((state)=>[
                    ...state,
                    ...data.data
                ]);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to get user inventory";
            setModal({
                title: "Error",
                message,
                details
            });
        }
        setIsLoading(false);
    }
    async function onSubmit({ recipient , memo  }) {
        setIsLoading(true);
        let assetIds = [];
        selectedAssets.map((item)=>{
            assetIds.push(item.asset_id);
        });
        try {
            const data = {
                activeUser: ual.activeUser,
                from: ual.activeUser.accountName,
                to: recipient,
                memo: memo,
                asset_ids: assetIds
            };
            await (0,_services_asset_transferAssetService__WEBPACK_IMPORTED_MODULE_24__/* .transferAssetService */ .A)(data);
            setIsSaved(true);
            modalRef.current?.openModal();
            const title = "NFT was successfully transferred";
            const message = "Please wait while we refresh the page.";
            setModal({
                title,
                message
            });
            setTimeout(()=>{
                router.reload();
                setIsSaved(false);
            }, 3000);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message1 = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to send NFTs";
            setModal({
                title: "Error",
                message: message1,
                details,
                isError: true
            });
        }
        setIsLoading(false);
    }
    function handleAssetSelection(asset) {
        const alreadySelected = selectedAssets.length > 0 && selectedAssets.find((item)=>item && item.asset_id === asset.asset_id);
        if (!alreadySelected) {
            setSelectedAssets((state)=>[
                    ...state,
                    ...[
                        asset
                    ]
                ]);
        }
        setSelectedAssets((state)=>{
            const assetIndex = selectedAssets.findIndex((item)=>item && item.asset_id === asset.asset_id);
            let newState = state.filter((item, index)=>index !== assetIndex);
            return [
                ...newState
            ];
        });
    }
    function handleLogin() {
        ual?.showModal();
    }
    async function handleSearch(event) {
        const { value  } = event.target;
        clearTimeout(waitToSearch);
        setMatch(value);
        const newWaitToSearch = setTimeout(async ()=>{
            const { data: assets  } = await (0,_services_inventory_getInventoryService__WEBPACK_IMPORTED_MODULE_20__/* .getInventoryService */ .v)(chainKey, {
                match: value || "",
                owner: accountName,
                collection_name: selectedCollection || ""
            });
            setFilteredAssets(assets.data);
        }, 500);
        setWaitToSearch(newWaitToSearch);
    }
    if (!!chainId && !!chainIdLogged && chainId === chainIdLogged) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `Transfer - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_22__/* .appName */ .DJ}`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_18__/* .Header.Root */ .h.Root, {
                    border: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_18__/* .Header.Content */ .h.Content, {
                        title: "Transfer"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "headline-2 mt-4 md:mt-8",
                            children: "Send your NFTs to another user"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_13__/* .Modal */ .u, {
                            ref: modalRef,
                            title: modal.title,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "body-2 mt-2",
                                    children: modal.message
                                }),
                                !modal.isError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "flex gap-2 items-center py-4 body-2 font-bold text-white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.CircleNotch, {
                                            size: 24,
                                            weight: "bold",
                                            className: "animate-spin"
                                        }),
                                        "Loading..."
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Disclosure, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row gap-4 items-baseline",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Disclosure.Button, {
                                                    className: "btn btn-small mt-4",
                                                    children: "Details"
                                                }),
                                                modal.resourceError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: `/${chainKey}/resources`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "btn btn-small",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Manage resources"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Disclosure.Panel, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                                className: "overflow-auto p-4 rounded-lg bg-neutral-700 max-h-96 mt-4",
                                                children: modal.details
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex md:flex-row flex-col gap-16 w-full md:my-16 my-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: handleSubmit(onSubmit),
                                    className: "flex flex-col md:w-1/2 w-full gap-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_12__/* .Input */ .I, {
                                            ...register("recipient"),
                                            error: errors.recipient?.message,
                                            type: "text",
                                            label: "Recipient account",
                                            maxLength: 12
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_12__/* .Input */ .I, {
                                            ...register("memo"),
                                            error: errors.memo?.message,
                                            type: "text",
                                            label: "Memo"
                                        }),
                                        selectedAssets.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col gap-8",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "headline-3",
                                                    children: "Selected NFTs"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CardContainer__WEBPACK_IMPORTED_MODULE_16__/* .CardContainer */ ._, {
                                                    style: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 sm:gap-8",
                                                    children: selectedAssets.map((asset, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-full flex flex-col gap-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_11__/* .Card */ .Z, {
                                                                id: asset.template_mint,
                                                                onClick: ()=>handleAssetSelection(asset),
                                                                image: asset.data["img"] ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_22__/* .ipfsEndpoint */ .Ge}/${asset.data["img"]}` : "",
                                                                video: asset.data["video"] ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_22__/* .ipfsEndpoint */ .Ge}/${asset.data["video"]}` : "",
                                                                title: asset.name,
                                                                subtitle: `by ${asset.collection.author}`,
                                                                viewLink: `/${chainKey}/collection/${asset.collection.collection_name}/asset/${asset.asset_id}`
                                                            })
                                                        }, index))
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-neutral-800 px-8 py-16 text-center rounded-xl",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "title-1",
                                                children: "Select a NFT to transfer"
                                            })
                                        }),
                                        isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.CircleNotch, {
                                                    size: 24,
                                                    weight: "bold",
                                                    className: "animate-spin"
                                                }),
                                                "Loading..."
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "submit",
                                            className: `btn w-fit whitespace-nowrap ${isSaved && "animate-pulse bg-emerald-600"}`,
                                            disabled: selectedAssets.length === 0,
                                            children: isSaved ? "Saved" : "Transfer NFT"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-col md:w-1/2 w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col gap-8",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "headline-3",
                                                children: "Select NFTs to transfer"
                                            }),
                                            collectionsFilterOptions.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "z-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_14__/* .Select */ .P, {
                                                    onChange: (option)=>setSelectedCollection(option),
                                                    label: "Filter by collection",
                                                    selectedValue: collectionsFilterOptions[0].value,
                                                    options: collectionsFilterOptions
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_12__/* .Input */ .I, {
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_5__.MagnifyingGlass, {
                                                    size: 24
                                                }),
                                                type: "search",
                                                label: "Search by name",
                                                placeholder: "Search NFT",
                                                onChange: handleSearch,
                                                value: match
                                            }),
                                            filteredAssets.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CardContainer__WEBPACK_IMPORTED_MODULE_16__/* .CardContainer */ ._, {
                                                style: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 sm:gap-8",
                                                children: filteredAssets.map((asset, index)=>{
                                                    if (asset.is_transferable) {
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-full flex flex-col gap-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `cursor-pointer ${selectedAssets.includes(asset) && "border-4 rounded-xl"}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_11__/* .Card */ .Z, {
                                                                    id: asset.template_mint,
                                                                    onClick: ()=>handleAssetSelection(asset),
                                                                    image: asset.data.img ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_22__/* .ipfsEndpoint */ .Ge}/${asset.data.img}` : "",
                                                                    video: asset.data.video ? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_22__/* .ipfsEndpoint */ .Ge}/${asset.data.video}` : "",
                                                                    title: asset.name,
                                                                    subtitle: `by ${asset.collection.author}`,
                                                                    viewLink: `/${chainKey}/collection/${asset.collection.collection_name}/asset/${asset.asset_id}`
                                                                })
                                                            })
                                                        }, index);
                                                    }
                                                })
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_15__/* .Loading */ .g, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "bg-neutral-800 px-8 py-24 text-center rounded-xl",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "title-1",
                                                        children: "NFT not found"
                                                    })
                                                })
                                            }),
                                            !isEndOfList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex justify-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_17__/* .SeeMoreButton */ .j, {
                                                    isLoading: isLoading,
                                                    onClick: handleSeeMoreAssets
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `Transfer - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_22__/* .appName */ .DJ}`
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
                        children: "You need to connect your wallet to transfer a NFT"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_6__/* .withUAL */ .D)(Transfer));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1467:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getAccountStatsService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getAccountStatsService(chainKey, accountName) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/accounts/${accountName}`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url);
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ transferAssetService)
/* harmony export */ });
async function transferAssetService({ activeUser , from , to , asset_ids , memo  }) {
    const response = await activeUser.signTransaction({
        actions: [
            {
                account: "atomicassets",
                name: "transfer",
                authorization: [
                    {
                        actor: activeUser.accountName,
                        permission: activeUser.requestPermission
                    }
                ],
                data: {
                    from,
                    to,
                    asset_ids,
                    memo
                }
            }
        ]
    }, {
        blocksBehind: 3,
        expireSeconds: 30
    });
    return response;
}


/***/ }),

/***/ 2818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ getInventoryService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getInventoryService(chainKey, options) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/assets`;
    const { page =1 , offset =0 , owner , collection_name , template_id , limit  } = options;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url, {
        params: {
            owner,
            collection_name,
            template_id,
            page,
            limit: limit || 12,
            offset,
            order: "desc",
            sort: "transferred_at_time"
        }
    });
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,8820,6840,2793,9894,7208], () => (__webpack_exec__(2195)));
module.exports = __webpack_exports__;

})();