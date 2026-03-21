"use strict";
(() => {
var exports = {};
exports.id = 760;
exports.ids = [760];
exports.modules = {

/***/ 6419:
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6268);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1185);
/* harmony import */ var _services_collection_createCollectionService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(982);
/* harmony import */ var _services_collection_uploadImageToIpfsService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9247);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5740);
/* harmony import */ var _components_Textarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4439);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8820);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5334);
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6942);
/* harmony import */ var _utils_countriesList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7199);
/* harmony import */ var _utils_isResourceError__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1295);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_7__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__, _headlessui_react__WEBPACK_IMPORTED_MODULE_11__, _services_collection_uploadImageToIpfsService__WEBPACK_IMPORTED_MODULE_12__, _components_Modal__WEBPACK_IMPORTED_MODULE_15__, _components_Header__WEBPACK_IMPORTED_MODULE_16__, _components_Select__WEBPACK_IMPORTED_MODULE_17__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_7__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__, _headlessui_react__WEBPACK_IMPORTED_MODULE_11__, _services_collection_uploadImageToIpfsService__WEBPACK_IMPORTED_MODULE_12__, _components_Modal__WEBPACK_IMPORTED_MODULE_15__, _components_Header__WEBPACK_IMPORTED_MODULE_16__, _components_Select__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const schema = yup__WEBPACK_IMPORTED_MODULE_9__.object().shape({
    image: yup__WEBPACK_IMPORTED_MODULE_9__.mixed().test("image", "Image is required", (value)=>{
        return value.length > 0;
    }),
    collectionName: yup__WEBPACK_IMPORTED_MODULE_9__.string().matches(/^[a-z1-5.]+$/, {
        message: "Only lowercase letters (a-z) and numbers 1-5 are allowed.",
        excludeEmptyString: false
    }),
    displayName: yup__WEBPACK_IMPORTED_MODULE_9__.string().required().label("Display name"),
    website: yup__WEBPACK_IMPORTED_MODULE_9__.string().required().url().label("Website"),
    marketFee: yup__WEBPACK_IMPORTED_MODULE_9__.number().typeError("Must be between 0% and 15%. Only numbers.").min(0, "Must be between 0% and 15%.").max(15, "Must be between 0% and 15%.").label("Market fee"),
    description: yup__WEBPACK_IMPORTED_MODULE_9__.string()
});
function CreateNewCollection({ ual  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const chainKey = router.query.chainKey;
    const [previewImageSrc, setPreviewImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isSaved, setIsSaved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [collectionNameError, setCollectionNameError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        message: "",
        details: "",
        isError: false,
        resourceError: false
    });
    const { register , handleSubmit , watch , control , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__.yupResolver)(schema)
    });
    const image = watch("image");
    const collectionName = watch("collectionName");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (image && image.length > 0) {
            const [img] = image;
            const fileReader = new FileReader();
            fileReader.onload = ()=>{
                setPreviewImageSrc(fileReader.result);
            };
            fileReader.readAsDataURL(img);
        } else {
            setPreviewImageSrc(null);
        }
    }, [
        image
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setIsSaved(false);
        }, 2000);
        return ()=>clearTimeout(timer);
    }, [
        isSaved
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (collectionName && ual.activeUser.accountName) {
            if (!isValidCollectionName(collectionName, ual.activeUser?.accountName)) {
                setCollectionNameError("Must be up to 12 characters (a-z, 1-5) with no spaces.");
                setIsLoading(false);
                return;
            } else {
                setCollectionNameError("");
            }
        }
    }, [
        collectionName,
        ual
    ]);
    function isValidCollectionName(collectionName, userAccount) {
        if (collectionName.length > 12) {
            return false;
        }
        console.log(collectionName.startsWith(`.`));
        if (collectionName.length <= 12 && (collectionName === userAccount || collectionName.endsWith(`.${userAccount}`) && !collectionName.startsWith(".")) || collectionName.length === 12 && !collectionName.includes(".")) {
            return true;
        }
        return false;
    }
    async function onSubmit({ image , collectionName , displayName , website , marketFee , description , twitter , medium , facebook , github , discord , youtube , telegram , company , registrationNumber , name , address , city , zipCode , country  }) {
        setIsLoading(true);
        try {
            const data = await (0,_services_collection_uploadImageToIpfsService__WEBPACK_IMPORTED_MODULE_12__/* .uploadImageToIpfsService */ .E)(image[0]);
            if (collectionNameError) {
                setIsLoading(false);
                return;
            }
            await (0,_services_collection_createCollectionService__WEBPACK_IMPORTED_MODULE_19__/* .createCollectionService */ ._)({
                activeUser: ual.activeUser,
                author: ual.activeUser.accountName,
                collectionName,
                notify: true,
                authorizedAccounts: [
                    ual.activeUser.accountName
                ],
                notifyAccounts: [],
                marketFee: marketFee / 100.0,
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
                            data["IpfsHash"]
                        ]
                    },
                    {
                        key: "socials",
                        value: [
                            "string",
                            JSON.stringify({
                                twitter,
                                medium,
                                facebook,
                                github,
                                discord,
                                youtube,
                                telegram
                            })
                        ]
                    },
                    {
                        key: "creator_info",
                        value: [
                            "string",
                            JSON.stringify({
                                company,
                                registration_number: registrationNumber,
                                name,
                                address,
                                city,
                                zipCode,
                                country
                            })
                        ]
                    }
                ]
            });
            setIsSaved(true);
            router.push(`/${router.query.chainKey}/collection/${collectionName}`);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to create collection";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_20__/* .isResourceError */ ._)(message);
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
    function handleLogin() {
        ual.showModal();
    }
    if (!ual?.activeUser) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mx-auto my-14 text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "headline-2",
                    children: "Connect your wallet"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "body-1 mt-2 mb-6",
                    children: "You need to connect your wallet to create a new collection"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: "btn",
                    onClick: handleLogin,
                    children: "Connect Wallet"
                })
            ]
        });
    }
    function handlePrependHttps(event) {
        const { value  } = event.target;
        if (!value.startsWith("https://") && event.nativeEvent.inputType !== "deleteContentBackward") {
            return "https://" + value;
        }
        return value;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `New Collection - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_21__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_16__/* .Header.Root */ .h.Root, {
                border: true,
                breadcrumb: [
                    [
                        "My Collections",
                        `/${router.query.chainKey}`
                    ],
                    [
                        "New Collection"
                    ]
                ],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_16__/* .Header.Content */ .h.Content, {
                    title: "New Collection"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_15__/* .Modal */ .u, {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_10__.CircleNotch, {
                                size: 24,
                                weight: "bold",
                                className: "animate-spin"
                            }),
                            "Redirecting..."
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Disclosure, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row gap-4 items-baseline",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Disclosure.Button, {
                                        className: "btn btn-small mt-4",
                                        children: "Details"
                                    }),
                                    modal.resourceError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Disclosure.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                    className: "overflow-auto p-4 rounded-lg bg-neutral-700 max-h-96 mt-4",
                                    children: modal.details
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleSubmit(onSubmit),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container py-8 md:py-12 lg:py-16 grid grid-cols-4 gap-8 md:grid-cols-6 lg:grid-cols-12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-4 md:col-span-3 lg:col-span-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                className: `block aspect-square bg-neutral-800 rounded-xl cursor-pointer p-md border ${errors.image?.message ? "border-red-600" : "border-neutral-700"}`,
                                children: [
                                    previewImageSrc ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full h-full relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            src: previewImageSrc,
                                            fill: true,
                                            className: "object-contain",
                                            alt: ""
                                        })
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `w-full h-full flex flex-col justify-center items-center gap-2 ${errors.image?.message ? "text-red-600" : "text-center"}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_10__.UploadSimple, {
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
                                        ...register("image"),
                                        type: "file",
                                        accept: "image/png, image/gif, image/jpeg",
                                        className: "hidden"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-span-4 md:col-span-3 lg:col-start-7 lg:col-span-6 flex flex-col gap-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                                    ...register("collectionName"),
                                    error: errors.collectionName?.message || collectionNameError,
                                    label: "Collection name",
                                    hint: "Must be up to 12 characters (a-z, 1-5) with no spaces.",
                                    type: "text",
                                    maxLength: 12
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                                    ...register("displayName"),
                                    error: errors.displayName?.message,
                                    type: "text",
                                    label: "Display Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.Controller, {
                                    control: control,
                                    name: "website",
                                    defaultValue: "",
                                    render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                                            error: errors.website?.message,
                                            label: "Website",
                                            value: field.value,
                                            onChange: (event)=>{
                                                const value = handlePrependHttps(event);
                                                field.onChange(value);
                                            },
                                            type: "text"
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                                    ...register("marketFee"),
                                    error: errors.marketFee?.message,
                                    label: "Market fee",
                                    hint: "Must be between 0% and 15%. Only numbers.",
                                    type: "number",
                                    min: "0",
                                    max: "15",
                                    step: "0.1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Textarea__WEBPACK_IMPORTED_MODULE_14__/* .Textarea */ .g, {
                                    ...register("description"),
                                    error: errors.description?.message,
                                    label: "Description"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-4 my-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Disclosure, {
                                            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Disclosure.Button, {
                                                            className: "flex flex-row justify-between items-center py-4 border-y border-neutral-700",
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
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_10__.CaretDown, {
                                                                    size: 32,
                                                                    className: `${open ? "rotate-180 transform" : ""} h-5 w-5`
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Disclosure.Panel, {
                                                            className: "flex flex-col gap-8",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.Controller, {
                                                                    control: control,
                                                                    name: "twitter",
                                                                    defaultValue: "",
                                                                    render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
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
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.Controller, {
                                                                    control: control,
                                                                    name: "medium",
                                                                    defaultValue: "",
                                                                    render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
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
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.Controller, {
                                                                    control: control,
                                                                    name: "facebook",
                                                                    defaultValue: "",
                                                                    render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
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
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.Controller, {
                                                                    control: control,
                                                                    name: "github",
                                                                    defaultValue: "",
                                                                    render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
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
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.Controller, {
                                                                    control: control,
                                                                    name: "discord",
                                                                    defaultValue: "",
                                                                    render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
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
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.Controller, {
                                                                    control: control,
                                                                    name: "youtube",
                                                                    defaultValue: "",
                                                                    render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
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
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.Controller, {
                                                                    control: control,
                                                                    name: "telegram",
                                                                    defaultValue: "",
                                                                    render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
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
                                                        })
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Disclosure, {
                                            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Disclosure.Button, {
                                                            className: "flex flex-row justify-between items-center pb-4 border-b border-neutral-700",
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
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_10__.CaretDown, {
                                                                    size: 32,
                                                                    className: `${open ? "rotate-180 transform" : ""} h-5 w-5`
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Disclosure.Panel, {
                                                            className: "flex flex-col gap-8",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                                                                    ...register("company"),
                                                                    label: "Company",
                                                                    type: "text",
                                                                    placeholder: "e.g: Facings"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                                                                    ...register("registrationNumber"),
                                                                    label: "Registration number",
                                                                    type: "number",
                                                                    placeholder: "e.g: 123456"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                                                                    ...register("name"),
                                                                    label: "Name of Owner / Managing Director",
                                                                    type: "text",
                                                                    placeholder: "e.g: John Doe"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.Controller, {
                                                                    control: control,
                                                                    name: "country",
                                                                    render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_17__/* .Select */ .P, {
                                                                            label: "Country",
                                                                            onChange: field.onChange,
                                                                            selectedValue: field.value,
                                                                            options: _utils_countriesList__WEBPACK_IMPORTED_MODULE_18__/* .countriesList */ .T,
                                                                            placeholder: "Select a country"
                                                                        })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                                                                    ...register("address"),
                                                                    label: "Address",
                                                                    type: "text",
                                                                    placeholder: "e.g: Gluthstrasse 8"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                                                                    ...register("city"),
                                                                    label: "City",
                                                                    type: "text",
                                                                    placeholder: "e.g: Munich"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_13__/* .Input */ .I, {
                                                                    ...register("zipCode"),
                                                                    label: "Zip code / Postal Code",
                                                                    type: "number",
                                                                    placeholder: "e.g: 80803"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                        })
                                    ]
                                }),
                                isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_10__.CircleNotch, {
                                            size: 24,
                                            weight: "bold",
                                            className: "animate-spin"
                                        }),
                                        "Loading..."
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: `btn w-fit whitespace-nowrap ${isSaved && "animate-pulse bg-emerald-600"}`,
                                    children: isSaved ? "Saved" : "Create Collection"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_6__/* .withUAL */ .D)(CreateNewCollection));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ createCollectionService)
/* harmony export */ });
async function createCollectionService({ activeUser , author , collectionName , notify , authorizedAccounts , notifyAccounts , marketFee , data  }) {
    const response = await activeUser.signTransaction({
        actions: [
            {
                account: "atomicassets",
                name: "createcol",
                authorization: [
                    {
                        actor: activeUser.accountName,
                        permission: activeUser.requestPermission
                    }
                ],
                data: {
                    author,
                    collection_name: collectionName,
                    allow_notify: notify,
                    authorized_accounts: authorizedAccounts,
                    notify_accounts: notifyAccounts,
                    market_fee: marketFee,
                    data
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,8820,6840,9894,837,3268], () => (__webpack_exec__(6419)));
module.exports = __webpack_exports__;

})();