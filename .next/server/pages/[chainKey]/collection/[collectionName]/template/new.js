"use strict";
(() => {
var exports = {};
exports.id = 5061;
exports.ids = [5061];
exports.modules = {

/***/ 9469:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6268);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1185);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8014);
/* harmony import */ var _services_template_createTemplateService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9112);
/* harmony import */ var _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3594);
/* harmony import */ var _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1689);
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6942);
/* harmony import */ var _components_Switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(893);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5740);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8820);
/* harmony import */ var _components_InputPreview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5755);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5334);
/* harmony import */ var _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3007);
/* harmony import */ var _utils_isResourceError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1295);
/* harmony import */ var _utils_handleAttributesData__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6808);
/* harmony import */ var _hooks_usePermission__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7534);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_9__, _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_10__, _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_11__, _components_Select__WEBPACK_IMPORTED_MODULE_12__, _components_Switch__WEBPACK_IMPORTED_MODULE_13__, _components_Modal__WEBPACK_IMPORTED_MODULE_15__, _components_Header__WEBPACK_IMPORTED_MODULE_17__, _utils_handleAttributesData__WEBPACK_IMPORTED_MODULE_19__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_9__, _services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_10__, _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_11__, _components_Select__WEBPACK_IMPORTED_MODULE_12__, _components_Switch__WEBPACK_IMPORTED_MODULE_13__, _components_Modal__WEBPACK_IMPORTED_MODULE_15__, _components_Header__WEBPACK_IMPORTED_MODULE_17__, _utils_handleAttributesData__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























function NewTemplate({ ual , collection , schemas , schemasOptions , chainKey  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { PermissionDenied  } = (0,_hooks_usePermission__WEBPACK_IMPORTED_MODULE_20__/* .usePermission */ .g)({
        loggedAccountName: ual?.activeUser?.accountName,
        collectionAuthor: collection.author,
        collectionAuthorizedAccounts: collection.authorized_accounts
    });
    const [schemasAttributes, setSchemasAttributes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        const selectedSchema = schemas.find((schema)=>schema.schema_name === schemasOptions[0].value);
        const schemasAttributes = selectedSchema?.format ?? [];
        return schemasAttributes.map((schemaAttributes)=>({
                ...schemaAttributes,
                isImmutable: false
            }));
    });
    const [isSaved, setIsSaved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [clearElement, setClearElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        message: "",
        details: "",
        isError: false,
        resourceError: false
    });
    const hasImmutableAttributes = schemasAttributes.some((schemaAttribute)=>schemaAttribute.isImmutable);
    const { register , handleSubmit , control , reset , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
        defaultValues: {
            schemaName: schemasOptions[0]?.value,
            transferable: true,
            burnable: true,
            maxSupply: 100
        }
    });
    function handleSetSchemasAttributes(schemaName) {
        reset();
        const selectedSchema = schemas.find((schema)=>schema.schema_name === schemaName);
        let schemasAttributes = selectedSchema?.format ?? [];
        schemasAttributes = schemasAttributes.map((schemaAttributes)=>({
                ...schemaAttributes,
                isImmutable: false
            }));
        setSchemasAttributes(schemasAttributes);
    }
    function handleSetImmutableAttributes({ schemaAttributeIndex , isImmutable  }) {
        if (!isImmutable) {
            const input = schemasAttributes[schemaAttributeIndex].name;
            const targetElement = document.getElementsByName(input)[0];
            targetElement.value = "";
            setClearElement(input);
        }
        setSchemasAttributes((state)=>{
            state[schemaAttributeIndex].isImmutable = isImmutable;
            return [
                ...state
            ];
        });
    }
    async function onSubmit({ schemaName , transferable , burnable , maxSupply , ...attributes }) {
        setIsLoading(true);
        try {
            const immutableData = await (0,_utils_handleAttributesData__WEBPACK_IMPORTED_MODULE_19__/* .handleAttributesData */ .K)({
                attributes: attributes,
                dataList: schemasAttributes
            });
            await (0,_services_template_createTemplateService__WEBPACK_IMPORTED_MODULE_21__/* .createTemplateService */ .O)({
                activeUser: ual.activeUser,
                authorized_creator: ual.activeUser.accountName,
                collectionName: collection.collection_name,
                schemaName,
                transferable,
                burnable,
                maxSupply: Number(maxSupply),
                immutableData
            });
            setIsSaved(true);
            modalRef.current?.openModal();
            const title = "Template was successfully created";
            const message = "Please wait while we redirect you.";
            setModal({
                title,
                message
            });
            async function redirect() {
                const { data: templates  } = await (0,_services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_11__/* .collectionTemplatesService */ .B)(chainKey, {
                    collectionName: collection.collection_name
                });
                setIsSaved(false);
                router.push(`/${chainKey}/collection/${collection.collection_name}/template/${templates.data[0].template_id}`);
            }
            setTimeout(redirect, 3000);
        } catch (e) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(e));
            const details = JSON.stringify(e, undefined, 2);
            const message1 = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to create template";
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
    if (PermissionDenied) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PermissionDenied, {});
    }
    if (schemas.length === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `New Template - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_23__/* .appName */ .DJ}`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_17__/* .Header.Root */ .h.Root, {
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
                            _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_18__/* .collectionTabs[2].name */ .J[2].name,
                            `/${chainKey}/collection/${collection.collection_name}?tab=${_utils_collectionTabs__WEBPACK_IMPORTED_MODULE_18__/* .collectionTabs[2].key */ .J[2].key}`
                        ],
                        [
                            "New Template"
                        ]
                    ],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_17__/* .Header.Content */ .h.Content, {
                        title: "New Template"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container py-8",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-4 justify-center items-center bg-neutral-800 rounded-xl py-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "title-1",
                                children: "There is no schema, please create one to continue."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/${chainKey}/collection/${collection.collection_name}/schema/new`,
                                className: "btn",
                                children: "Create schema"
                            })
                        ]
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `New Template - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_23__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_17__/* .Header.Root */ .h.Root, {
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
                        _utils_collectionTabs__WEBPACK_IMPORTED_MODULE_18__/* .collectionTabs[2].name */ .J[2].name,
                        `/${chainKey}/collection/${collection.collection_name}?tab=${_utils_collectionTabs__WEBPACK_IMPORTED_MODULE_18__/* .collectionTabs[2].key */ .J[2].key}`
                    ],
                    [
                        "New Template"
                    ]
                ],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_17__/* .Header.Content */ .h.Content, {
                    title: "New Template"
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CircleNotch, {
                                size: 24,
                                weight: "bold",
                                className: "animate-spin"
                            }),
                            "Redirecting..."
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: modal.details && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Disclosure, {
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
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container py-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col gap-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex max-w-3xl flex-col gap-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                        control: control,
                                        name: "schemaName",
                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_12__/* .Select */ .P, {
                                                label: "Select schema",
                                                hint: hasImmutableAttributes ? "Changing the schema will clear the rest of the form" : "",
                                                onChange: (schemaName)=>{
                                                    field.onChange(schemaName);
                                                    handleSetSchemasAttributes(schemaName);
                                                },
                                                selectedValue: field.value,
                                                options: schemasOptions
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                        control: control,
                                        name: "transferable",
                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Switch__WEBPACK_IMPORTED_MODULE_13__/* .Switch */ .r, {
                                                label: "NFTs can be transferred",
                                                onChange: field.onChange,
                                                checked: field.value
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                        control: control,
                                        name: "burnable",
                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Switch__WEBPACK_IMPORTED_MODULE_13__/* .Switch */ .r, {
                                                label: "NFTs can be burned",
                                                onChange: field.onChange,
                                                checked: field.value
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_14__/* .Input */ .I, {
                                        ...register("maxSupply"),
                                        type: "text",
                                        label: "Max supply"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "headline-2",
                                        children: "Set Immutable Attributes"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "body-1 text-neutral-400 max-w-3xl mb-8",
                                        children: "Every attribute that is filled in here will be immutable. If you leave the attribute blank, you will be able to set that data during NFT creation and it will be mutable."
                                    }),
                                    schemasAttributes.map((schemaAttribute, schemaAttributeIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "grid grid-cols-12 gap-4 mt-8 pb-8 lg:pb-0 lg:mt-4 border-b border-neutral-700 lg:border-none",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `col-span-12 sm:col-span-6 lg:col-span-3 xl:col-span-3 p-3 flex items-center justify-center border border-neutral-700 rounded ${schemaAttribute.isImmutable ? "" : "opacity-50"}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "title-1 text-white whitespace-nowrap",
                                                        children: schemaAttribute.name
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-span-12 sm:col-span-6 lg:col-span-6 xl:col-span-6",
                                                    children: schemaAttribute.type === "image" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputPreview__WEBPACK_IMPORTED_MODULE_16__/* .InputPreview */ .x, {
                                                        ...register(schemaAttribute.name),
                                                        onChange: ()=>{
                                                            handleSetImmutableAttributes({
                                                                schemaAttributeIndex,
                                                                isImmutable: true
                                                            });
                                                        },
                                                        setValue: setValue,
                                                        title: "Add Image",
                                                        description: "Upload or drag and drop an image",
                                                        accept: "image/*",
                                                        clear: clearElement === schemaAttribute.name
                                                    }) : schemaAttribute.name === "video" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputPreview__WEBPACK_IMPORTED_MODULE_16__/* .InputPreview */ .x, {
                                                        ...register(schemaAttribute.name),
                                                        onChange: ()=>{
                                                            handleSetImmutableAttributes({
                                                                schemaAttributeIndex,
                                                                isImmutable: true
                                                            });
                                                        },
                                                        setValue: setValue,
                                                        title: "Add Video",
                                                        description: "Upload or drag and drop a video",
                                                        accept: "video/*",
                                                        clear: clearElement === schemaAttribute.name
                                                    }) : schemaAttribute.type === "bool" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "p-3 bg-neutral-800 border border-neutral-700 rounded",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                                            control: control,
                                                            name: schemaAttribute.name,
                                                            defaultValue: false,
                                                            render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Switch__WEBPACK_IMPORTED_MODULE_13__/* .Switch */ .r, {
                                                                    onChange: (value)=>{
                                                                        handleSetImmutableAttributes({
                                                                            schemaAttributeIndex,
                                                                            isImmutable: true
                                                                        });
                                                                        field.onChange(value);
                                                                    },
                                                                    checked: Boolean(field.value),
                                                                    label: field.value ? "Enabled" : "Disabled"
                                                                })
                                                        })
                                                    }) : schemaAttribute.type === "uint64" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_14__/* .Input */ .I, {
                                                        ...register(schemaAttribute.name, {
                                                            onChange: ()=>{
                                                                handleSetImmutableAttributes({
                                                                    schemaAttributeIndex,
                                                                    isImmutable: true
                                                                });
                                                            }
                                                        }),
                                                        type: "number",
                                                        name: schemaAttribute.name,
                                                        placeholder: "whole number"
                                                    }) : schemaAttribute.type === "double" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_14__/* .Input */ .I, {
                                                        ...register(schemaAttribute.name, {
                                                            onChange: ()=>{
                                                                handleSetImmutableAttributes({
                                                                    schemaAttributeIndex,
                                                                    isImmutable: true
                                                                });
                                                            }
                                                        }),
                                                        type: "text",
                                                        name: schemaAttribute.name,
                                                        placeholder: "decimal number",
                                                        pattern: "-?\\d+(\\.\\d+)?([eE][+-]?\\d+)?"
                                                    }) : schemaAttribute.type === "ipfs" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputPreview__WEBPACK_IMPORTED_MODULE_16__/* .InputPreview */ .x, {
                                                        ...register(schemaAttribute.name, {
                                                            onChange: ()=>{
                                                                handleSetImmutableAttributes({
                                                                    schemaAttributeIndex,
                                                                    isImmutable: true
                                                                });
                                                            }
                                                        }),
                                                        title: "Add Image",
                                                        clear: clearElement === schemaAttribute.name
                                                    }) : schemaAttribute.type === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_14__/* .Input */ .I, {
                                                        ...register(schemaAttribute.name, {
                                                            onChange: ()=>{
                                                                handleSetImmutableAttributes({
                                                                    schemaAttributeIndex,
                                                                    isImmutable: true
                                                                });
                                                            }
                                                        }),
                                                        type: "text",
                                                        name: schemaAttribute.name,
                                                        placeholder: "text"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_14__/* .Input */ .I, {
                                                        ...register(schemaAttribute.name, {
                                                            onChange: ()=>{
                                                                handleSetImmutableAttributes({
                                                                    schemaAttributeIndex,
                                                                    isImmutable: true
                                                                });
                                                            }
                                                        }),
                                                        type: "text",
                                                        name: schemaAttribute.name,
                                                        placeholder: schemaAttribute.type
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-span-12 lg:col-span-3 xl:col-span-3 py-[calc(0.5rem-1px)] pr-[calc(0.5rem-1px)] pl-4 border border-neutral-700 rounded",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `flex-1 ${schemaAttribute.isImmutable ? "" : "opacity-50"}`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Switch__WEBPACK_IMPORTED_MODULE_13__/* .Switch */ .r, {
                                                                    label: schemaAttribute.isImmutable ? "Immutable" : "Mutable",
                                                                    onChange: ()=>handleSetImmutableAttributes({
                                                                            schemaAttributeIndex,
                                                                            isImmutable: !schemaAttribute.isImmutable
                                                                        }),
                                                                    checked: schemaAttribute.isImmutable
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex-none",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Popover, {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Popover.Button, {
                                                                            className: `btn btn-square btn-small btn-ghost ${schemaAttribute.isImmutable ? "" : "opacity-50"}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.Info, {
                                                                                size: 24
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Popover.Panel, {
                                                                            className: "w-64 p-4 absolute z-10 bg-neutral-700 top-12 right-0 rounded",
                                                                            children: schemaAttribute.isImmutable ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                className: "body-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                                        className: "text-white",
                                                                                        children: "Immutable:"
                                                                                    }),
                                                                                    " ",
                                                                                    "This attribute will be set on the template. This attribute (even if left blank) will not be editable later."
                                                                                ]
                                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                className: "body-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                                        className: "text-white",
                                                                                        children: "Mutable:"
                                                                                    }),
                                                                                    " ",
                                                                                    "This attribute will not be set on the template. You will have the option to set a custom value on each NFT you mint."
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, schemaAttribute.name))
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "flex gap-2 items-center p-4 body-2 font-bold text-white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_6__.CircleNotch, {
                                            size: 24,
                                            weight: "bold",
                                            className: "animate-spin"
                                        }),
                                        "Loading..."
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: `btn ${isSaved ? "animate-pulse bg-emerald-600" : ""}`,
                                    children: isSaved ? "Saved" : "Create template"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}
const getServerSideProps = async ({ params  })=>{
    const chainKey = params.chainKey;
    const collectionName = params.collectionName;
    const [{ data: collection  }, { data: schemas  }] = await Promise.all([
        (0,_services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_9__/* .getCollectionService */ .R)(chainKey, {
            collectionName
        }),
        (0,_services_collection_collectionSchemasService__WEBPACK_IMPORTED_MODULE_10__/* .collectionSchemasService */ .c)(chainKey, {
            collectionName
        })
    ]);
    const schemasOptions = schemas.data.map((schema)=>({
            label: schema.schema_name,
            value: schema.schema_name
        }));
    return {
        props: {
            chainKey,
            collection: collection.data,
            schemas: schemas.data,
            schemasOptions
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_5__/* .withUAL */ .D)(NewTemplate));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ createTemplateService)
/* harmony export */ });
async function createTemplateService({ activeUser , authorized_creator , collectionName , schemaName , transferable , burnable , maxSupply , immutableData  }) {
    const response = await activeUser.signTransaction({
        actions: [
            {
                account: "atomicassets",
                name: "createtempl",
                authorization: [
                    {
                        actor: activeUser.accountName,
                        permission: activeUser.requestPermission
                    }
                ],
                data: {
                    authorized_creator,
                    collection_name: collectionName,
                    schema_name: schemaName,
                    transferable,
                    burnable,
                    max_supply: maxSupply,
                    immutable_data: immutableData
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

/***/ 3703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ convertToBase64)
/* harmony export */ });
function convertToBase64(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>resolve(reader.result);
        reader.onerror = (error)=>reject(error);
    });
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
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,5675,6903,5334,9517,6268,8820,6840,5565,9894,7534,7208,3085,893,6808,5755], () => (__webpack_exec__(9469)));
module.exports = __webpack_exports__;

})();