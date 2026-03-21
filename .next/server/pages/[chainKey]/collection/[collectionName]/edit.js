"use strict";
(() => {
var exports = {};
exports.id = 2365;
exports.ids = [2365];
exports.modules = {

/***/ 2643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_1__);


function Table({ list , action , exception  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
        className: "w-full bg-neutral-800 border border-neutral-700 text-neutral-500 rounded overflow-hidden focus-within:text-white",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
            children: list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    className: "flex flex-1 flex-row justify-between odd:bg-neutral-800 even:bg-neutral-700 border border-neutral-700 text-neutral-400 w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            className: "p-4",
                            children: item
                        }),
                        item !== exception && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "hover:text-white p-4",
                                onClick: ()=>action(item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_1__.TrashSimple, {
                                    size: 24
                                })
                            })
                        })
                    ]
                }, index))
        })
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

/***/ 5076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6268);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6903);
/* harmony import */ var _services_collection_editCollectionService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5903);
/* harmony import */ var _services_collection_uploadImageToIpfsService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9247);
/* harmony import */ var _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8014);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2643);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5740);
/* harmony import */ var _components_Textarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4439);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5334);
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6942);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8820);
/* harmony import */ var _utils_countriesList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7199);
/* harmony import */ var _utils_isResourceError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1295);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_9__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__, _services_collection_uploadImageToIpfsService__WEBPACK_IMPORTED_MODULE_12__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_13__, _components_Header__WEBPACK_IMPORTED_MODULE_17__, _components_Select__WEBPACK_IMPORTED_MODULE_18__, _components_Modal__WEBPACK_IMPORTED_MODULE_19__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_9__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__, _services_collection_uploadImageToIpfsService__WEBPACK_IMPORTED_MODULE_12__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_13__, _components_Header__WEBPACK_IMPORTED_MODULE_17__, _components_Select__WEBPACK_IMPORTED_MODULE_18__, _components_Modal__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























const informationValidations = yup__WEBPACK_IMPORTED_MODULE_11__.object().shape({
    displayName: yup__WEBPACK_IMPORTED_MODULE_11__.string().required().label("Display name"),
    website: yup__WEBPACK_IMPORTED_MODULE_11__.string().url().label("Website"),
    description: yup__WEBPACK_IMPORTED_MODULE_11__.string()
});
const marketFeeValidations = yup__WEBPACK_IMPORTED_MODULE_11__.object().shape({
    marketFee: yup__WEBPACK_IMPORTED_MODULE_11__.number().typeError("Must be between 0% and 15%. Only numbers.").min(0, "Must be between 0% and 15%.").max(15, "Must be between 0% and 15%.").label("Market fee")
});
const authorizationValidations = yup__WEBPACK_IMPORTED_MODULE_11__.object().shape({
    account: yup__WEBPACK_IMPORTED_MODULE_11__.string().eosName()
});
const notificationValidations = yup__WEBPACK_IMPORTED_MODULE_11__.object().shape({
    account: yup__WEBPACK_IMPORTED_MODULE_11__.string().eosName()
});
function EditCollection({ ual , initialCollection , chainKey  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isSaved, setIsSaved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialCollection);
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        message: "",
        details: "",
        isError: false,
        resourceError: false
    });
    const creatorInfo = collection.data.creator_info && JSON.parse(collection.data.creator_info);
    const socials = collection.data.socials && JSON.parse(collection.data.socials);
    const { register , handleSubmit , watch , control , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__.yupResolver)(informationValidations)
    });
    const { register: registerMarketFee , formState: { errors: marketFeeErrors  } , handleSubmit: handleSubmitMarketFee  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__.yupResolver)(marketFeeValidations)
    });
    const { register: registerAuthorization , formState: { errors: authorizationErrors  } , handleSubmit: handleSubmitAuthorization  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__.yupResolver)(authorizationValidations)
    });
    const { register: registerNotification , formState: { errors: notificationErrors  } , handleSubmit: handleSubmitNotifications  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__.yupResolver)(notificationValidations)
    });
    const image = watch("image");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (typeof image !== "string" && image && image.length > 0) {
            handleImageSource(image[0]);
        }
    }, [
        image
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setIsSaved(false);
        }, 3000);
        return ()=>clearTimeout(timer);
    }, [
        isSaved
    ]);
    const handleImageSource = (img)=>{
        if (img) {
            const fileReader = new FileReader();
            fileReader.onload = ()=>{
                setImageSrc(fileReader.result);
            };
            fileReader.readAsDataURL(img);
        }
    };
    if (!ual?.activeUser || ual?.activeUser?.accountName !== collection?.author) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: collection ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mx-auto px-8 py-24 text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "headline-3",
                    children: "You don't have authorization to edit this collection."
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mx-auto flex justify-center py-32",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_2__.CircleNotch, {
                            size: 24,
                            weight: "bold",
                            className: "animate-spin"
                        }),
                        "Loading..."
                    ]
                })
            })
        });
    }
    async function onSubmitInformation({ image , displayName , website , description  }) {
        setIsLoading(true);
        try {
            let pinataImage;
            if (image && image.length > 0) {
                pinataImage = await (0,_services_collection_uploadImageToIpfsService__WEBPACK_IMPORTED_MODULE_12__/* .uploadImageToIpfsService */ .E)(image[0]);
            }
            await (0,_services_collection_editCollectionService__WEBPACK_IMPORTED_MODULE_21__/* .editCollectionService */ .i)({
                action: "setcoldata",
                activeUser: ual.activeUser,
                data: {
                    collection_name: collection.collection_name,
                    data: [
                        {
                            key: "name",
                            value: [
                                "string",
                                displayName
                            ]
                        },
                        {
                            key: "description",
                            value: [
                                "string",
                                description
                            ]
                        },
                        {
                            key: "url",
                            value: [
                                "string",
                                website
                            ]
                        },
                        {
                            key: "img",
                            value: [
                                "string",
                                pinataImage ? pinataImage["IpfsHash"] : collection.img
                            ]
                        }
                    ]
                }
            });
            setIsSaved(true);
            setTimeout(()=>{
                setIsSaved(false);
            }, 3000);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to edit collection";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_22__/* .isResourceError */ ._)(message);
            setModal({
                title: "Error",
                message,
                details,
                isError: true,
                resourceError
            });
        }
        setIsLoading(false);
    }
    async function onSubmitMarketFee({ marketFee  }) {
        setIsLoading(true);
        try {
            await (0,_services_collection_editCollectionService__WEBPACK_IMPORTED_MODULE_21__/* .editCollectionService */ .i)({
                action: "setmarketfee",
                activeUser: ual.activeUser,
                data: {
                    collection_name: collection.collection_name,
                    market_fee: marketFee / 100.0
                }
            });
            setIsSaved(true);
            setTimeout(()=>{
                setIsSaved(false);
            }, 3000);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to edit collection market fee";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_22__/* .isResourceError */ ._)(message);
            setModal({
                title: "Error",
                message,
                details,
                isError: true,
                resourceError
            });
        }
        setIsLoading(false);
    }
    async function onSubmitAddAccountAuthorization({ account  }) {
        setIsLoading(true);
        try {
            await (0,_services_collection_editCollectionService__WEBPACK_IMPORTED_MODULE_21__/* .editCollectionService */ .i)({
                action: "addcolauth",
                activeUser: ual.activeUser,
                data: {
                    collection_name: collection.collection_name,
                    account_to_add: account
                }
            });
            setIsSaved(true);
            setCollection((state)=>{
                state.authorized_accounts = [
                    ...state.authorized_accounts,
                    account
                ];
                return {
                    ...state
                };
            });
            setTimeout(()=>{
                setIsSaved(false);
            }, 3000);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to add account to authorization list";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_22__/* .isResourceError */ ._)(message);
            setModal({
                title: "Error",
                message,
                details,
                isError: true,
                resourceError
            });
        }
        setIsLoading(false);
    }
    async function onSubmitRemoveAccountAuthorization(account) {
        setIsLoading(true);
        try {
            await (0,_services_collection_editCollectionService__WEBPACK_IMPORTED_MODULE_21__/* .editCollectionService */ .i)({
                action: "remcolauth",
                activeUser: ual.activeUser,
                data: {
                    collection_name: collection.collection_name,
                    account_to_remove: account
                }
            });
            setIsSaved(true);
            setCollection((state)=>{
                const accountIndex = state.authorized_accounts.findIndex((item)=>item === account);
                state.authorized_accounts.splice(accountIndex, 1);
                return {
                    ...state
                };
            });
            setTimeout(()=>{
                setIsSaved(false);
            }, 3000);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to remove account from authorization list";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_22__/* .isResourceError */ ._)(message);
            setModal({
                title: "Error",
                message,
                details,
                isError: true,
                resourceError
            });
        }
        setIsLoading(false);
    }
    async function onSubmitNotificationAccount({ account  }) {
        setIsLoading(true);
        try {
            await (0,_services_collection_editCollectionService__WEBPACK_IMPORTED_MODULE_21__/* .editCollectionService */ .i)({
                action: "addnotifyacc",
                activeUser: ual.activeUser,
                data: {
                    collection_name: collection.collection_name,
                    account_to_add: account
                }
            });
            setIsSaved(true);
            setCollection((state)=>{
                state.notify_accounts = [
                    ...state.notify_accounts,
                    account
                ];
                return {
                    ...state
                };
            });
            setTimeout(()=>{
                setIsSaved(false);
            }, 3000);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to add account to notification list";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_22__/* .isResourceError */ ._)(message);
            setModal({
                title: "Error",
                message,
                details,
                isError: true,
                resourceError
            });
        }
        setIsLoading(false);
    }
    async function onSubmitRemoveNotificationAccount(account) {
        setIsLoading(true);
        try {
            await (0,_services_collection_editCollectionService__WEBPACK_IMPORTED_MODULE_21__/* .editCollectionService */ .i)({
                action: "remnotifyacc",
                activeUser: ual.activeUser,
                data: {
                    collection_name: collection.collection_name,
                    account_to_remove: account
                }
            });
            setIsSaved(true);
            setCollection((state)=>{
                const accountIndex = state.notify_accounts.findIndex((item)=>item === account);
                delete state.notify_accounts[accountIndex];
                return {
                    ...state
                };
            });
            setTimeout(()=>{
                setIsSaved(false);
            }, 3000);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to remove account from notification list";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_22__/* .isResourceError */ ._)(message);
            setModal({
                title: "Error",
                message,
                details,
                isError: true,
                resourceError
            });
        }
        setIsLoading(false);
    }
    async function onSubmitNotify(event) {
        event.preventDefault();
        try {
            await (0,_services_collection_editCollectionService__WEBPACK_IMPORTED_MODULE_21__/* .editCollectionService */ .i)({
                action: "forbidnotify",
                activeUser: ual.activeUser,
                data: {
                    collection_name: collection.collection_name
                }
            });
            setIsSaved(true);
            modalRef.current?.openModal();
            const title = "Notifications were forbidden";
            const message = "Please wait while we reload the page.";
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
            const message1 = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to forbid notifications";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_22__/* .isResourceError */ ._)(message1);
            setModal({
                title: "Error",
                message: message1,
                details,
                isError: true,
                resourceError
            });
        }
        setIsLoading(false);
    }
    function handlePrependHttps(event) {
        const { value  } = event.target;
        if (!value.startsWith("https://") && event.nativeEvent.inputType !== "deleteContentBackward") {
            return "https://" + value;
        }
        return value;
    }
    if (collection) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `Update ${collection.collection_name} - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_23__/* .appName */ .DJ}`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_17__/* .Header.Root */ .h.Root, {
                    breadcrumb: [
                        [
                            "My Collections",
                            `/${chainKey}`
                        ],
                        [
                            collection.collection_name,
                            `/${chainKey}/collection/${collection.collection_name}`
                        ],
                        [
                            "Update Collection"
                        ]
                    ],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_17__/* .Header.Content */ .h.Content, {
                        title: collection.collection_name
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_19__/* .Modal */ .u, {
                    ref: modalRef,
                    title: modal.title,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "body-2 mt-2",
                            children: modal.message
                        }),
                        modal.details && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-row gap-4 items-baseline",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Button, {
                                            className: "btn btn-small mt-4",
                                            children: "Details"
                                        }),
                                        modal.resourceError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Panel, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                        className: "overflow-auto p-4 rounded-lg bg-neutral-700 max-h-96 mt-4",
                                        children: modal.details
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Group, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.List, {
                            className: "tab-list mb-4 md:mb-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {
                                    className: "tab",
                                    children: "Information"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {
                                    className: "tab",
                                    children: "Market Fee"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {
                                    className: "tab",
                                    children: "Authorization"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {
                                    className: "tab",
                                    children: "Notifications"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {
                                    className: "tab",
                                    children: "Advanced"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Panels, {
                            className: "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Panel, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        onSubmit: handleSubmit(onSubmitInformation),
                                        className: "flex md:flex-row flex-col gap-8 w-full md:items-start items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    htmlFor: "file",
                                                    className: "w-80 h-80 flex flex-col justify-center items-center gap-md bg-neutral-800 rounded-xl overflow-hidden cursor-pointer p-4",
                                                    children: [
                                                        imageSrc || collection.img ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-full h-full relative",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                src: imageSrc ?? `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_23__/* .ipfsEndpoint */ .Ge}/${collection.img}`,
                                                                fill: true,
                                                                className: "object-contain",
                                                                alt: ""
                                                            })
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-col justify-center items-center text-center p-4 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_2__.UploadSimple, {
                                                                    size: 56,
                                                                    weight: "bold"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "title-1",
                                                                    children: "Add Collection Image"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "body-3",
                                                                    children: "Transparent backgrounds are recommended"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            id: "file",
                                                            ...register("image"),
                                                            type: "file",
                                                            accept: "image/*",
                                                            className: "hidden"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col w-full gap-8",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                        type: "text",
                                                        defaultValue: collection.collection_name,
                                                        label: "collection Name",
                                                        readOnly: true,
                                                        disabled: true,
                                                        hint: "Collection name cannot be edited."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                        ...register("displayName"),
                                                        error: errors.displayName?.message,
                                                        type: "text",
                                                        defaultValue: collection.data.name,
                                                        label: "Display Name"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                        ...register("website"),
                                                        error: errors.website?.message,
                                                        type: "text",
                                                        defaultValue: collection.data.url,
                                                        label: "Website"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Textarea__WEBPACK_IMPORTED_MODULE_16__/* .Textarea */ .g, {
                                                        ...register("description"),
                                                        error: errors.description?.message,
                                                        defaultValue: collection.data.description,
                                                        label: "Description"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col gap-8 mt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex flex-row gap-2 items-baseline",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "title-1",
                                                                        children: "Social Media"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "body-1",
                                                                        children: "(optional)"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.Controller, {
                                                                control: control,
                                                                name: "twitter",
                                                                defaultValue: socials?.twitter,
                                                                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                        label: "Twitter",
                                                                        value: field.value,
                                                                        onChange: (event)=>{
                                                                            const value = handlePrependHttps(event);
                                                                            field.onChange(value);
                                                                        },
                                                                        type: "text",
                                                                        placeholder: "https://twitter.com/@handle"
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.Controller, {
                                                                control: control,
                                                                name: "medium",
                                                                defaultValue: socials?.medium,
                                                                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                        label: "medium",
                                                                        value: field.value,
                                                                        onChange: (event)=>{
                                                                            const value = handlePrependHttps(event);
                                                                            field.onChange(value);
                                                                        },
                                                                        type: "text",
                                                                        placeholder: "https://medium.com/@username"
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.Controller, {
                                                                control: control,
                                                                name: "facebook",
                                                                defaultValue: socials?.facebook,
                                                                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                        label: "Facebook",
                                                                        value: field.value,
                                                                        onChange: (event)=>{
                                                                            const value = handlePrependHttps(event);
                                                                            field.onChange(value);
                                                                        },
                                                                        type: "text",
                                                                        placeholder: "https://facebook.com/pageurl"
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.Controller, {
                                                                control: control,
                                                                name: "github",
                                                                defaultValue: socials?.github,
                                                                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                        label: "GitHub",
                                                                        value: field.value,
                                                                        onChange: (event)=>{
                                                                            const value = handlePrependHttps(event);
                                                                            field.onChange(value);
                                                                        },
                                                                        type: "text",
                                                                        placeholder: "https://github.com/username"
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.Controller, {
                                                                control: control,
                                                                name: "discord",
                                                                defaultValue: socials?.discord,
                                                                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                        label: "Discord",
                                                                        value: field.value,
                                                                        onChange: (event)=>{
                                                                            const value = handlePrependHttps(event);
                                                                            field.onChange(value);
                                                                        },
                                                                        type: "text",
                                                                        placeholder: "https://discord.gg/invite/channel"
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.Controller, {
                                                                control: control,
                                                                name: "youtube",
                                                                defaultValue: socials?.youtube,
                                                                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                        label: "Youtube",
                                                                        value: field.value,
                                                                        onChange: (event)=>{
                                                                            const value = handlePrependHttps(event);
                                                                            field.onChange(value);
                                                                        },
                                                                        type: "text",
                                                                        placeholder: "https://youtube.com/channel/channelurl"
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.Controller, {
                                                                control: control,
                                                                name: "telegram",
                                                                defaultValue: socials?.telegram,
                                                                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                        label: "Telegram",
                                                                        value: field.value,
                                                                        onChange: (event)=>{
                                                                            const value = handlePrependHttps(event);
                                                                            field.onChange(value);
                                                                        },
                                                                        type: "text",
                                                                        placeholder: "https://t.me/username"
                                                                    })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col gap-8 mt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex flex-row gap-2 items-baseline",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "title-1",
                                                                        children: "Company Details"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "body-1",
                                                                        children: "(optional)"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                ...register("company"),
                                                                label: "Company",
                                                                type: "text",
                                                                defaultValue: creatorInfo?.company,
                                                                placeholder: "e.g: Facings"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                ...register("registrationNumber"),
                                                                label: "Registration number",
                                                                type: "number",
                                                                defaultValue: creatorInfo?.registration_number,
                                                                placeholder: "e.g: 123456"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                ...register("name"),
                                                                label: "Name of Owner / Managing Director",
                                                                type: "text",
                                                                defaultValue: creatorInfo?.name,
                                                                placeholder: "e.g: John Doe"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.Controller, {
                                                                control: control,
                                                                name: "country",
                                                                defaultValue: creatorInfo?.country,
                                                                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_18__/* .Select */ .P, {
                                                                        label: "Country",
                                                                        onChange: field.onChange,
                                                                        selectedValue: field.value,
                                                                        options: _utils_countriesList__WEBPACK_IMPORTED_MODULE_20__/* .countriesList */ .T,
                                                                        placeholder: "Select a country"
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                ...register("address"),
                                                                label: "Address",
                                                                type: "text",
                                                                defaultValue: creatorInfo?.address,
                                                                placeholder: "e.g: Gluthstrasse 8"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                ...register("city"),
                                                                label: "City",
                                                                type: "text",
                                                                defaultValue: creatorInfo?.city,
                                                                placeholder: "e.g: Munich"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                                ...register("zipCode"),
                                                                label: "Zip code / Postal Code",
                                                                type: "number",
                                                                defaultValue: creatorInfo?.zipCode,
                                                                placeholder: "e.g: 80803"
                                                            })
                                                        ]
                                                    }),
                                                    isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_2__.CircleNotch, {
                                                                size: 24,
                                                                weight: "bold",
                                                                className: "animate-spin"
                                                            }),
                                                            "Loading..."
                                                        ]
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "submit",
                                                        className: `btn w-fit ${isSaved && "animate-pulse bg-emerald-600"}`,
                                                        children: isSaved ? "Saved" : "Update collection"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Panel, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        onSubmit: handleSubmitMarketFee(onSubmitMarketFee),
                                        className: "flex flex-col gap-8 w-full",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                ...registerMarketFee("marketFee"),
                                                error: marketFeeErrors.marketFee?.message,
                                                type: "number",
                                                defaultValue: (collection.market_fee * 100.0).toFixed(2),
                                                label: "Market fee",
                                                hint: "Must be between 0% and 15%.",
                                                min: "0",
                                                max: "15",
                                                step: "0.1"
                                            }),
                                            isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_2__.CircleNotch, {
                                                        size: 24,
                                                        weight: "bold",
                                                        className: "animate-spin"
                                                    }),
                                                    "Loading..."
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "submit",
                                                className: `btn w-fit ${isSaved && "animate-pulse bg-emerald-600"}`,
                                                children: isSaved ? "Saved" : "Update Market Fee"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Panel, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col gap-8 w-full md:items-start items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "headline-3",
                                                        children: "Authorized Accounts"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "body-2 text-gray-300",
                                                        children: "only the accounts within this list will be able to create and edit assets."
                                                    })
                                                ]
                                            }),
                                            collection.authorized_accounts.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Table__WEBPACK_IMPORTED_MODULE_14__/* .Table */ .i, {
                                                list: collection.authorized_accounts,
                                                exception: collection.author,
                                                action: onSubmitRemoveAccountAuthorization
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-neutral-800 px-8 py-16 text-center rounded-xl w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "title-1",
                                                    children: "There are no authorized accounts."
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                onSubmit: handleSubmitAuthorization(onSubmitAddAccountAuthorization),
                                                className: "flex md:flex-row gap-4 w-full md:items-start items-center",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col w-full gap-4 justify-center mb-8",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                            ...registerAuthorization("account"),
                                                            error: authorizationErrors.account?.message,
                                                            type: "text",
                                                            label: "Account name",
                                                            maxLength: 13
                                                        }),
                                                        isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_2__.CircleNotch, {
                                                                    size: 24,
                                                                    weight: "bold",
                                                                    className: "animate-spin"
                                                                }),
                                                                "Loading..."
                                                            ]
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            type: "submit",
                                                            className: `btn w-fit whitespace-nowrap ${isSaved && "animate-pulse bg-emerald-600"}`,
                                                            children: isSaved ? "Saved" : "Add account"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Panel, {
                                    children: collection.allow_notify ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col gap-8 w-full md:items-start items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "headline-3",
                                                children: "Notified Accounts"
                                            }),
                                            collection.notify_accounts.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Table__WEBPACK_IMPORTED_MODULE_14__/* .Table */ .i, {
                                                list: collection.notify_accounts,
                                                action: onSubmitRemoveNotificationAccount
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-neutral-800 px-8 py-16 text-center rounded-xl w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "title-1",
                                                    children: "There is no accounts to notify."
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                onSubmit: handleSubmitNotifications(onSubmitNotificationAccount),
                                                className: "flex md:flex-row gap-4 w-full md:items-start items-center",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col w-full gap-4 justify-center mb-8",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_15__/* .Input */ .I, {
                                                            ...registerNotification("account"),
                                                            error: notificationErrors.account?.message,
                                                            type: "text",
                                                            label: "Account name"
                                                        }),
                                                        isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_2__.CircleNotch, {
                                                                    size: 24,
                                                                    weight: "bold",
                                                                    className: "animate-spin"
                                                                }),
                                                                "Loading..."
                                                            ]
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            type: "submit",
                                                            className: `btn w-fit whitespace-nowrap ${isSaved && "animate-pulse bg-emerald-600"}`,
                                                            children: isSaved ? "Saved" : "Add account"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-neutral-800 px-8 py-24 text-center rounded-xl",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "title-1",
                                            children: "Notifications were forbidden."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Tab.Panel, {
                                    children: collection.allow_notify ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-col gap-4 w-full md:items-start items-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            onSubmit: onSubmitNotify,
                                            className: "flex flex-col gap-8 w-full md:items-start items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col gap-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "headline-3 whitespace-nowrap",
                                                            children: "Forbid Notify"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "body-2 text-gray-300",
                                                            children: 'Only possible if the "Notified Accounts" list is empty. Notify is enabled by default.'
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "body-2 text-gray-300",
                                                            children: "Notifications are required by certain Dapps to work properly. However, the same system could also be abused; for example, to block transfers, against the user's will."
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "body-2 text-amber-400",
                                                            children: "This action can not be undone, please be sure you want to forbid notify."
                                                        })
                                                    ]
                                                }),
                                                isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_2__.CircleNotch, {
                                                            size: 24,
                                                            weight: "bold",
                                                            className: "animate-spin"
                                                        }),
                                                        "Loading..."
                                                    ]
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "submit",
                                                    className: `btn w-fit whitespace-nowrap ${isSaved && "animate-pulse bg-emerald-600"}`,
                                                    disabled: collection.notify_accounts.length > 0,
                                                    children: isSaved ? "Saved" : "Forbid Notify"
                                                })
                                            ]
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-neutral-800 px-8 py-24 text-center rounded-xl",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "title-1",
                                            children: "Notifications were forbidden."
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}
const getServerSideProps = async (context)=>{
    const chainKey = context.params.chainKey;
    const collectionName = context.params.collectionName;
    const { data: collection  } = await (0,_services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_13__/* .getCollectionService */ .R)(chainKey, {
        collectionName
    });
    return {
        props: {
            initialCollection: collection.data,
            chainKey
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_3__/* .withUAL */ .D)(EditCollection));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ editCollectionService)
/* harmony export */ });
async function editCollectionService({ action , activeUser , data  }) {
    const response = await activeUser.signTransaction({
        actions: [
            {
                account: "atomicassets",
                name: action,
                authorization: [
                    {
                        actor: activeUser.accountName,
                        permission: activeUser.requestPermission
                    }
                ],
                data
            }
        ]
    }, {
        blocksBehind: 3,
        expireSeconds: 30
    });
    return response;
}


/***/ }),

/***/ 8014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getCollectionService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getCollectionService(chainKey, { collectionName  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/collections/${collectionName}`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url);
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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,8820,6840,9894,837,3268], () => (__webpack_exec__(5076)));
module.exports = __webpack_exports__;

})();