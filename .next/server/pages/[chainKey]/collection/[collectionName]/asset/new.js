"use strict";
(() => {
var exports = {};
exports.id = 9429;
exports.ids = [9429];
exports.modules = {

/***/ 3478:
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6268);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1185);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(6903);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3007);
/* harmony import */ var _utils_isResourceError__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1295);
/* harmony import */ var _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2348);
/* harmony import */ var _services_asset_createAssetService__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(4617);
/* harmony import */ var _services_account_getAccount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8220);
/* harmony import */ var _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1689);
/* harmony import */ var _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3594);
/* harmony import */ var _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8014);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5740);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8820);
/* harmony import */ var _components_Switch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(893);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5334);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4750);
/* harmony import */ var _components_InputPreview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5755);
/* harmony import */ var _hooks_usePermission__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7534);
/* harmony import */ var _utils_handlePreview__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(6071);
/* harmony import */ var _utils_handleAttributesData__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6808);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_6__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__, _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_12__, _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_14__, _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_15__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_16__, _components_Modal__WEBPACK_IMPORTED_MODULE_18__, _components_Switch__WEBPACK_IMPORTED_MODULE_19__, _components_Header__WEBPACK_IMPORTED_MODULE_20__, _components_Carousel__WEBPACK_IMPORTED_MODULE_21__, _utils_handlePreview__WEBPACK_IMPORTED_MODULE_24__, _utils_handleAttributesData__WEBPACK_IMPORTED_MODULE_25__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_6__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__, _services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_12__, _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_14__, _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_15__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_16__, _components_Modal__WEBPACK_IMPORTED_MODULE_18__, _components_Switch__WEBPACK_IMPORTED_MODULE_19__, _components_Header__WEBPACK_IMPORTED_MODULE_20__, _components_Carousel__WEBPACK_IMPORTED_MODULE_21__, _utils_handlePreview__WEBPACK_IMPORTED_MODULE_24__, _utils_handleAttributesData__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






























function NewAsset({ ual , collection , schemas , chainKey , collectionName  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { PermissionDenied  } = (0,_hooks_usePermission__WEBPACK_IMPORTED_MODULE_23__/* .usePermission */ .g)({
        loggedAccountName: ual?.activeUser?.accountName,
        collectionAuthor: collection.author,
        collectionAuthorizedAccounts: collection.authorized_accounts
    });
    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isSaved, setIsSaved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [templates, setTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedSchema, setSelectedSchema] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [selectedTemplate, setSelectedTemplate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        message: "",
        details: "",
        isError: false
    });
    const remainingSupply = selectedTemplate && parseInt(selectedTemplate.max_supply) - parseInt(selectedTemplate.issued_supply);
    const wasFullyMinted = parseInt(selectedTemplate?.max_supply, 10) > 0 && remainingSupply === 0;
    const asset = yup__WEBPACK_IMPORTED_MODULE_10__.object().shape({
        recipients: yup__WEBPACK_IMPORTED_MODULE_10__.array().of(yup__WEBPACK_IMPORTED_MODULE_10__.object().shape({
            account: yup__WEBPACK_IMPORTED_MODULE_10__.string().eosName().label("Account").test("invalid-account", "Invalid account", async (value)=>{
                try {
                    await (0,_services_account_getAccount__WEBPACK_IMPORTED_MODULE_13__/* .getAccount */ .D)(chainKey, {
                        accountName: value
                    });
                    return true;
                } catch (error) {
                    return false;
                }
            }),
            numberOfCopies: yup__WEBPACK_IMPORTED_MODULE_10__.number().typeError("Must be a number between 1 and 50.").min(1, "Must be a number between 1 and 50.").max(50, "Must be a number between 1 and 50.")
        }))
    });
    const { register , handleSubmit , control , setValue , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
        mode: "onBlur",
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__.yupResolver)(asset)
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (schemas.length > 0) {
            setSelectedSchema(schemas[0]);
        }
    }, [
        schemas
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getAllTemplates = async ()=>{
            try {
                const allData = [];
                let currentPage = 1;
                while(true){
                    const response = await (0,_services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_14__/* .collectionTemplatesService */ .B)(chainKey, {
                        collectionName,
                        schemaName: selectedSchema?.schema_name,
                        page: currentPage,
                        limit: 1000
                    });
                    const responseData = response.data.data;
                    if (responseData.length === 0) {
                        break;
                    }
                    allData.push(...responseData);
                    currentPage++;
                }
                setTemplates(allData);
            } catch (error) {
                console.log(error);
            }
        };
        if (selectedSchema) {
            getAllTemplates();
        }
    }, [
        selectedSchema,
        chainKey,
        collectionName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSelectedTemplate(templates[0]);
    }, [
        templates
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (selectedTemplate) {
            (0,_utils_handlePreview__WEBPACK_IMPORTED_MODULE_24__/* .handlePreview */ .G)(selectedTemplate, setImages);
        }
    }, [
        selectedTemplate
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setIsSaved(false);
        }, 2000);
        return ()=>clearTimeout(timer);
    }, [
        isSaved
    ]);
    const schemaAttributes = schemas.find((item)=>item.schema_name === selectedSchema?.schema_name);
    const mutableDataList = schemaAttributes?.format.filter((attribute)=>selectedTemplate && selectedTemplate.immutable_data[attribute.name] === undefined);
    const { fields: recipientsFields , append: recipientsAppend , remove: recipientsRemove  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useFieldArray)({
        control,
        name: "recipients"
    });
    function handleAddRecipient() {
        recipientsAppend({
            account: "",
            numberOfCopies: "1"
        });
    }
    if (recipientsFields.length === 0 && ual.activeUser) {
        recipientsAppend({
            account: ual.activeUser?.accountName,
            numberOfCopies: 1
        });
    }
    function handleRemoveRecipient(index) {
        recipientsRemove(index);
    }
    async function onSubmit({ recipients , ...attributes }) {
        setIsLoading(true);
        // collect non-blank keys
        const usedKeys = Object.keys(attributes).filter((k)=>attributes[k] != "");
        // filter `attributes` to non-blank values
        const filteredAttributes = usedKeys.reduce((out, k)=>{
            out[k] = attributes[k];
            return out;
        }, {});
        try {
            const mutableData = await (0,_utils_handleAttributesData__WEBPACK_IMPORTED_MODULE_25__/* .handleAttributesData */ .K)({
                attributes: filteredAttributes,
                dataList: mutableDataList
            });
            const actions = [];
            recipients.map((recipient)=>{
                const action = {
                    account: "atomicassets",
                    name: "mintasset",
                    authorization: [
                        {
                            actor: ual.activeUser.accountName,
                            permission: ual.activeUser.requestPermission
                        }
                    ],
                    data: {
                        authorized_minter: ual.activeUser.accountName,
                        collection_name: collection.collection_name,
                        schema_name: selectedSchema.schema_name,
                        template_id: selectedTemplate.template_id,
                        new_asset_owner: recipient.account,
                        immutable_data: [],
                        mutable_data: mutableData,
                        tokens_to_back: []
                    }
                };
                let counter = 0;
                while(counter < recipient.numberOfCopies){
                    actions.push(action);
                    counter++;
                }
            });
            await (0,_services_asset_createAssetService__WEBPACK_IMPORTED_MODULE_26__/* .createAssetService */ .p)({
                activeUser: ual.activeUser,
                actions: actions
            });
            setIsSaved(true);
            modalRef.current?.openModal();
            const title = "NFT was successfully created";
            const message = "Please wait while we redirect you.";
            setModal({
                title,
                message
            });
            async function redirect() {
                const { data: assets  } = await (0,_services_collection_collectionAssetsService__WEBPACK_IMPORTED_MODULE_12__/* .collectionAssetsService */ .w)(chainKey, {
                    collectionName: collection.collection_name
                });
                setIsSaved(false);
                router.push(`/${chainKey}/collection/${collection.collection_name}/asset/${assets.data[0].asset_id}`);
            }
            setTimeout(redirect, 3000);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message1 = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to create NFT";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_27__/* .isResourceError */ ._)(message1);
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
    if (PermissionDenied) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PermissionDenied, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `New NFT - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_28__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_20__/* .Header.Root */ .h.Root, {
                border: true,
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
                        _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_11__/* .collectionTabs[3].name */ .J[3].name,
                        `/${chainKey}/collection/${collection.collection_name}?tab=${_utils_collectionTabs__WEBPACK_IMPORTED_MODULE_11__/* .collectionTabs[3].key */ .J[3].key}`
                    ],
                    [
                        "New NFT"
                    ]
                ],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_20__/* .Header.Content */ .h.Content, {
                    title: "New NFT"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container py-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit(onSubmit),
                        className: "w-full max-w-3xl flex flex-col gap-16 md:items-start items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid md:grid-cols-2 grid-col-1 gap-8 w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col gap-8",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "headline-2 block mb-4",
                                                        children: "Select schema"
                                                    }),
                                                    schemas.length > 0 && selectedSchema ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Listbox, {
                                                        value: selectedSchema,
                                                        onChange: setSelectedSchema,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Listbox.Button, {
                                                                    className: "relative w-full cursor-default border border-neutral-700 rounded body-1 bg-neutral-800 p-4 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "block truncate",
                                                                            children: selectedSchema?.schema_name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.CaretDown, {
                                                                                size: 16,
                                                                                weight: "bold",
                                                                                className: "ui-open:rotate-180"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Transition, {
                                                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                                                    leave: "transition ease-in duration-100",
                                                                    leaveFrom: "opacity-100",
                                                                    leaveTo: "opacity-0",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Listbox.Options, {
                                                                        className: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-neutral-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none body-3 z-10",
                                                                        children: schemas.map((schema, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Listbox.Option, {
                                                                                className: ({ active  })=>`relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-neutral-700 text-white" : "text-white-900"}`,
                                                                                value: schema,
                                                                                children: ({ selected  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: `block truncate ${selected ? "font-medium" : "font-normal"}`,
                                                                                                children: schema.schema_name
                                                                                            }),
                                                                                            selected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: "absolute inset-y-0 left-0 flex items-center pl-3 text-white",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.Check, {
                                                                                                    size: 16
                                                                                                })
                                                                                            }) : null
                                                                                        ]
                                                                                    })
                                                                            }, index))
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        className: "btn w-fit",
                                                        onClick: ()=>router.push(`/${chainKey}/collection/${collection.collection_name}/schema/new`),
                                                        children: "Create schema"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "headline-2 block mb-4",
                                                        children: "Select template"
                                                    }),
                                                    templates.length > 0 && selectedTemplate ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Listbox, {
                                                        value: selectedTemplate,
                                                        onChange: setSelectedTemplate,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Listbox.Button, {
                                                                    className: "relative w-full cursor-default border border-neutral-700 rounded body-1 bg-neutral-800 p-4 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "block truncate",
                                                                            children: selectedTemplate && selectedTemplate.name ? selectedTemplate.name : "No name"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.CaretDown, {
                                                                                size: 16,
                                                                                weight: "bold",
                                                                                className: "ui-open:rotate-180"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Transition, {
                                                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                                                    leave: "transition ease-in duration-100",
                                                                    leaveFrom: "opacity-100",
                                                                    leaveTo: "opacity-0",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Listbox.Options, {
                                                                        className: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-neutral-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none body-3 z-10",
                                                                        children: templates.length > 0 && templates.map((template, index)=>{
                                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Listbox.Option, {
                                                                                className: ({ active  })=>`relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-neutral-700 text-white" : "text-white-900"}`,
                                                                                value: template,
                                                                                children: ({ selected  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: `block truncate ${selected ? "font-medium" : "font-normal"}`,
                                                                                                children: template.name ?? "- No name -"
                                                                                            }),
                                                                                            selected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: "absolute inset-y-0 left-0 flex items-center pl-3 text-white",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.Check, {
                                                                                                    size: 16
                                                                                                })
                                                                                            }) : null
                                                                                        ]
                                                                                    })
                                                                            }, index);
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        className: "btn w-fit",
                                                        onClick: ()=>router.push(`/${chainKey}/collection/${collection.collection_name}/template/new`),
                                                        children: "Create template"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    selectedTemplate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_21__/* .Carousel */ .l, {
                                            images: images
                                        })
                                    })
                                ]
                            }),
                            schemas.length > 0 && !wasFullyMinted && selectedTemplate && selectedTemplate.immutable_data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col w-full gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "headline-2 block",
                                                        children: "NFT data"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "body-1 text-neutral-400 mb-4",
                                                        children: "Mint to your own account or airdrop the NFT to specific accounts."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col body-2 text-white gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex gap-4 font-bold",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "flex-1",
                                                                children: "NFT Recipient"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "pr-2",
                                                                        children: "Number of Copies"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "font-normal text-neutral-400",
                                                                        children: `(Between 1-${parseInt(selectedTemplate?.max_supply, 10) > 0 && remainingSupply && remainingSupply < 50 ? remainingSupply : 50})`
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    recipientsFields.map((field, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-col sm:flex-row gap-4 sm:border-0 border-b border-neutral-700 pb-4 sm:pb-0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flex-1",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_17__/* .Input */ .I, {
                                                                        ...register(`recipients.${index}.account`),
                                                                        error: errors.recipients?.[index]?.account?.message,
                                                                        type: "text",
                                                                        maxLength: 13
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex-1 flex gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "flex-1",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_17__/* .Input */ .I, {
                                                                                ...register(`recipients.${index}.numberOfCopies`),
                                                                                error: errors.recipients?.[index]?.numberOfCopies?.message,
                                                                                type: "number"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "flex-none",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                type: "button",
                                                                                className: "btn btn-square",
                                                                                onClick: ()=>handleRemoveRecipient(index),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.TrashSimple, {
                                                                                    size: 24
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }, field.id)),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-row gap-4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex-1",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    type: "button",
                                                                    className: "btn",
                                                                    onClick: handleAddRecipient,
                                                                    children: "Add recipient"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex-1",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: selectedTemplate ? "Remaining Supply: " + (parseInt(selectedTemplate.max_supply, 10) > 0 ? remainingSupply : "Unlimited") : ""
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col gap-8 w-full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "headline-2 block",
                                                        children: "Immutable Attributes"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "body-1 text-neutral-400",
                                                        children: "These attributes cannot be changed."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "grid grid-flow-row auto-rows-max md:gap-4 gap-8",
                                                children: schemaAttributes && schemaAttributes.format.map((item, index)=>{
                                                    if (!mutableDataList.includes(item)) {
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "grid grid-cols-12 gap-4 mt-8 pb-8 lg:pb-0 lg:mt-4 border-b border-neutral-700 lg:border-none",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-4 p-3 flex items-center justify-center border border-neutral-700 rounded",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "title-1 text-white whitespace-nowrap",
                                                                        children: item.name
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col-span-12 sm:col-span-6 lg:col-span-8 xl:col-span-8",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_17__/* .Input */ .I, {
                                                                        type: "text",
                                                                        placeholder: item.type,
                                                                        value: selectedTemplate.immutable_data[item.name],
                                                                        readOnly: true,
                                                                        disabled: true
                                                                    })
                                                                })
                                                            ]
                                                        }, index);
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col gap-8 w-full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "headline-2 block",
                                                        children: "Mutable Attributes"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "body-1 text-neutral-400",
                                                        children: "These attributes are optional and can be modified later."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "grid grid-flow-row auto-rows-max md:gap-4 gap-8",
                                                children: schemaAttributes && schemaAttributes.format.map((item, index)=>{
                                                    if (mutableDataList.includes(item)) {
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "grid grid-cols-12 gap-4 mt-8 pb-8 lg:pb-0 lg:mt-4 border-b border-neutral-700 lg:border-none",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-4 p-3 flex items-center justify-center border border-neutral-700 rounded",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "title-1 text-white whitespace-nowrap",
                                                                        children: item.name
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col-span-12 flex sm:col-span-6 lg:col-span-8 xl:col-span-8",
                                                                    children: item.type === "image" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputPreview__WEBPACK_IMPORTED_MODULE_22__/* .InputPreview */ .x, {
                                                                        ...register(item.name),
                                                                        setValue: setValue,
                                                                        title: "Add Image",
                                                                        description: "Upload or drag and drop an image",
                                                                        accept: "image/*"
                                                                    }) : item.type === "video" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputPreview__WEBPACK_IMPORTED_MODULE_22__/* .InputPreview */ .x, {
                                                                        ...register(item.name),
                                                                        setValue: setValue,
                                                                        title: "Add Video",
                                                                        description: "Upload or drag and drop a video",
                                                                        accept: "video/*"
                                                                    }) : item.type === "bool" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                                                        control: control,
                                                                        name: item.name,
                                                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Switch__WEBPACK_IMPORTED_MODULE_19__/* .Switch */ .r, {
                                                                                onChange: field.onChange,
                                                                                checked: field.value,
                                                                                label: field.value ? "Enabled" : "Disabled"
                                                                            })
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_17__/* .Input */ .I, {
                                                                        ...register(item.name),
                                                                        error: errors[item.name]?.message,
                                                                        type: "text",
                                                                        placeholder: item.type === "string" ? "text" : item.type
                                                                    })
                                                                })
                                                            ]
                                                        }, index);
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: wasFullyMinted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-col w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-neutral-800 px-8 py-24 text-center rounded-xl",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "title-1",
                                            children: "This template was fully minted."
                                        })
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-col w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-neutral-800 px-8 py-24 text-center rounded-xl",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "title-1",
                                            children: "You need a schema and a template to continue."
                                        })
                                    })
                                })
                            }),
                            isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.CircleNotch, {
                                        size: 24,
                                        weight: "bold",
                                        className: "animate-spin"
                                    }),
                                    "Loading..."
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: `btn w-fit whitespace-nowrap ${isSaved && "animate-pulse bg-emerald-600"}`,
                                disabled: !selectedSchema || !selectedTemplate || wasFullyMinted || selectedTemplate && !selectedTemplate.immutable_data,
                                children: isSaved ? "Saved" : "Create NFT"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_18__/* .Modal */ .u, {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_7__.CircleNotch, {
                                        size: 24,
                                        weight: "bold",
                                        className: "animate-spin"
                                    }),
                                    "Redirecting..."
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Disclosure, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row gap-4 items-baseline",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Disclosure.Button, {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Disclosure.Panel, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                            className: "overflow-auto p-4 rounded-lg bg-neutral-700 max-h-96 mt-4",
                                            children: modal.details
                                        })
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
const getServerSideProps = async ({ params  })=>{
    const chainKey = params.chainKey;
    const collectionName = params.collectionName;
    const [{ data: collection  }, { data: schemas  }] = await Promise.all([
        (0,_services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_16__/* .getCollectionService */ .R)(chainKey, {
            collectionName
        }),
        (0,_services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_15__/* .collectionSchemasService */ .c)(chainKey, {
            collectionName
        })
    ]);
    return {
        props: {
            chainKey,
            schemas: schemas.data,
            collection: collection.data,
            collectionName
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_5__/* .withUAL */ .D)(NewAsset));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ getAccount)
});

;// CONCATENATED MODULE: external "eosjs"
const external_eosjs_namespaceObject = require("eosjs");
// EXTERNAL MODULE: ./src/configs/chainsConfig.ts
var chainsConfig = __webpack_require__(2907);
;// CONCATENATED MODULE: ./src/services/account/getAccount.ts


async function getAccount(chainKey, { accountName  }) {
    const rpcEndpoint = `${chainsConfig[chainKey].protocol}://${chainsConfig[chainKey].host}`;
    const rpc = new external_eosjs_namespaceObject.JsonRpc(rpcEndpoint, {
        fetch
    });
    const response = await rpc.get_account(accountName);
    return response;
}


/***/ }),

/***/ 4617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ createAssetService)
/* harmony export */ });
async function createAssetService({ activeUser , actions  }) {
    const response = await activeUser.signTransaction({
        actions
    }, {
        blocksBehind: 3,
        expireSeconds: 30
    });
    return response;
}


/***/ }),

/***/ 2348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ collectionAssetsService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function collectionAssetsService(chainKey, { collectionName , page , offset , burned  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/assets`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url, {
        params: {
            collection_name: collectionName,
            burned: burned,
            page: page || 1,
            limit: 12,
            offset: offset || 12,
            order: "desc",
            sort: "asset_id"
        }
    });
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ isResourceError)
/* harmony export */ });
function isResourceError(str) {
    const message = str.toLowerCase();
    const resourceError = message.includes("cpu") || message.includes("ram") || message.includes("net");
    return resourceError;
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

/***/ 9893:
/***/ ((module) => {

module.exports = import("is-ipfs");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,8820,6840,5565,7534,6071,7208,3085,893,6808,5755], () => (__webpack_exec__(3478)));
module.exports = __webpack_exports__;

})();