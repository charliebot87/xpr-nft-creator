"use strict";
exports.id = 1979;
exports.ids = [1979,3182];
exports.modules = {

/***/ 3182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "batchOptions": () => (/* binding */ batchOptions),
/* harmony export */   "pluginInfo": () => (/* binding */ pluginInfo)
/* harmony export */ });
const pluginInfo = {
    name: "Import",
    page: "collection",
    description: "Import a CSV to create schema and templates."
};
const batchOptions = [
    {
        label: "25 actions",
        value: "25"
    },
    {
        label: "50 actions",
        value: "50"
    },
    {
        label: "100 actions",
        value: "100"
    },
    {
        label: "150 actions",
        value: "150"
    },
    {
        label: "200 actions",
        value: "200"
    }
];


/***/ }),

/***/ 1979:
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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _libs_ual_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6268);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7153);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8820);
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6942);
/* harmony import */ var _components_WarningCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3070);
/* harmony import */ var _utils_handleAttributesData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6808);
/* harmony import */ var _utils_isResourceError__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1295);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3182);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1391);
/* harmony import */ var _components_review__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__, _components_Modal__WEBPACK_IMPORTED_MODULE_10__, _components_Select__WEBPACK_IMPORTED_MODULE_11__, _utils_handleAttributesData__WEBPACK_IMPORTED_MODULE_13__, _utils_utils__WEBPACK_IMPORTED_MODULE_15__, _components_review__WEBPACK_IMPORTED_MODULE_16__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__, _components_Modal__WEBPACK_IMPORTED_MODULE_10__, _components_Select__WEBPACK_IMPORTED_MODULE_11__, _utils_handleAttributesData__WEBPACK_IMPORTED_MODULE_13__, _utils_utils__WEBPACK_IMPORTED_MODULE_15__, _components_review__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const csv = yup__WEBPACK_IMPORTED_MODULE_9__.object().shape({
    csvFile: yup__WEBPACK_IMPORTED_MODULE_9__.mixed().required()
});
function Import({ ual  }) {
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const chainKey = router.query.chainKey;
    const collection = router.query.collection;
    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [attributes, setAttributes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [actions, setActions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [templates, setTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [importErrors, setImportErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [dataTypes, setDataTypes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [required, setRequired] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [uniques, setUniques] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [hints, setHints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [headersLength, setHeadersLength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [schemaAttributes, setSchemaAttributes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        message: "",
        details: "",
        resourceError: false
    });
    const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [transactionBatch, setTransactionBatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.parse(localStorage.getItem("transactionBatch")) || []);
    const [hasRemainingTransactions, setHasRemainingTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedBatchSizeOption, setSelectedBatchSizeOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("25");
    const [existentSchemaInfo, setExistentSchemaInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__.yupResolver)(csv)
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (actions.length > 0) {
            setTransactions(_utils_utils__WEBPACK_IMPORTED_MODULE_15__.breakArray(actions, selectedBatchSizeOption));
        }
    }, [
        actions,
        selectedBatchSizeOption
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (transactions.length > 0 && importErrors.length === 0) {
            localStorage.setItem("transactionBatch", JSON.stringify(transactions));
        }
    }, [
        transactions,
        importErrors
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (transactionBatch.length > 0) {
            setHasRemainingTransactions(true);
        }
        localStorage.setItem("transactionBatch", JSON.stringify(transactionBatch));
    }, [
        transactionBatch
    ]);
    async function onSubmit() {
        try {
            if (transactions.length > 0) {
                let updatedBatch = [
                    ...transactions
                ];
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
                    }
                }
                modalRef.current?.openModal();
                const title = "Import was successful";
                const message = "Please wait while we redirect you.";
                setModal({
                    title,
                    message
                });
                localStorage.removeItem("transactionBatch");
                async function redirect() {
                    router.push(`/${chainKey}/collection/${collection}`);
                }
                setTimeout(redirect, 8000);
            }
        } catch (error) {
            modalRef.current?.openModal();
            const jsonError = JSON.parse(JSON.stringify(error));
            const details = JSON.stringify(error, undefined, 2);
            const message1 = jsonError?.cause?.json?.error?.details[0]?.message ?? "Unable to import schema";
            const resourceError = (0,_utils_isResourceError__WEBPACK_IMPORTED_MODULE_17__/* .isResourceError */ ._)(message1);
            setModal({
                title: "Transaction error",
                message: message1,
                details,
                resourceError
            });
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (fileName && !fileName.match(/(^[a-z1-5.]{1,11}[a-z1-5]$)|(^[a-z1-5.]{12}[a-j1-5]$)/)) {
            setImportErrors((state)=>[
                    ...state,
                    ...[
                        {
                            index: 0,
                            title: "Invalid schema",
                            message: 'The file name is used to define the name of the schema and it must be up to 12 characters (a-z, 1-5, .) and cannot end with a "."'
                        }
                    ]
                ]);
        }
    }, [
        fileName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Checks if schema has at least one attribute img or video.
        if (attributes.length > 0 && !attributes.includes("img" || 0)) {
            setImportErrors((state)=>[
                    ...state,
                    ...[
                        {
                            index: 0,
                            title: "Invalid schema",
                            message: 'Your schema must contain at least one "img" or "video" attribute.'
                        }
                    ]
                ]);
        }
        const attributesData = [];
        const defaultHeaders = [
            "max_supply",
            "burnable",
            "transferable",
            "sysflag"
        ];
        const attributeTypeOptions = [
            "bool",
            "ipfs",
            "float",
            "image",
            "string",
            "double",
            "int8",
            "int16",
            "int32",
            "int64",
            "uint8",
            "uint16",
            "uint32",
            "uint64"
        ];
        // Checks if any of the schema attributes are invalid.
        if (dataTypes) {
            for(const element in dataTypes){
                if (!attributeTypeOptions.includes(dataTypes[element])) {
                    if (dataTypes[element] && element !== "sysflag") {
                        setImportErrors((state)=>[
                                ...state,
                                ...[
                                    {
                                        index: 0,
                                        title: "Invalid datatype",
                                        message: `Property "${element}" has an invalid datatype "${dataTypes[element]}"`
                                    }
                                ]
                            ]);
                    }
                }
            }
        }
        attributes.map((attribute)=>{
            attributesData.push({
                name: attribute,
                type: dataTypes[`${attribute}`]
            });
        });
        setSchemaAttributes(attributesData);
        const templateRows = rows.filter((row)=>{
            const keys = Object.keys(rows[0]);
            if (keys.every((key)=>row[key] === null)) {
                return false;
            }
            for(const key in row){
                if (key === null || !attributes.includes(key) && !defaultHeaders.includes(key) || key === "sysflag") {
                    delete row[key];
                }
            }
            const values = Object.values(row).filter((val)=>val !== null);
            if (values.length === 0) {
                return false;
            }
            return true;
        }).splice(headersLength);
        const suggestions = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.suggestionDataTypes({
            dataTypes: dataTypes,
            templates: templateRows
        });
        if (suggestions) {
            setHints(suggestions);
        }
        // Checks if there is a missing property at the CSV.
        templateRows.map((row, index)=>{
            for(const key in row){
                if (key === "" && row[key]) {
                    console.log(row[key]);
                    setImportErrors((state)=>[
                            ...state,
                            ...[
                                {
                                    index: index,
                                    title: "Missing property",
                                    message: `There is an empty property with a value at row "${index + headersLength + 1}" of the CSV.`
                                }
                            ]
                        ]);
                }
            }
        });
        // Checks if a unique attribute is duplicated.
        if (uniques) {
            Object.keys(uniques).filter((item)=>{
                if (uniques[item] && item !== "sysflag") {
                    const duplicates = [];
                    const seenValues = {};
                    const rowsWithDuplicates = [];
                    templateRows.forEach((element)=>{
                        const value = element[item];
                        if (seenValues[value]) {
                            if (duplicates.indexOf(value) === -1) {
                                duplicates.push(value);
                            }
                        } else {
                            seenValues[value] = true;
                        }
                    });
                    templateRows.filter((element, index)=>{
                        const value = element[item];
                        const templateRowIndex = index + 1;
                        if (duplicates.indexOf(value) !== -1) {
                            rowsWithDuplicates.push(templateRowIndex + headersLength + 1);
                        }
                    });
                    if (duplicates.length > 0 && rowsWithDuplicates.length > 0) {
                        function formatRowsWithDuplicates(numbers) {
                            if (numbers.length === 1) return numbers[0].toString();
                            return numbers.slice(0, -1).join(", ") + (numbers.length > 2 ? "," : "") + " and " + numbers[numbers.length - 1];
                        }
                        rowsWithDuplicates.forEach((rowIndex)=>{
                            setImportErrors((state)=>[
                                    ...state,
                                    ...[
                                        {
                                            index: rowIndex - headersLength - 1,
                                            title: "Unique property",
                                            message: `Property "${item}" has the value "${duplicates[0]}" repeated at rows "${formatRowsWithDuplicates(rowsWithDuplicates)}" of the CSV.`
                                        }
                                    ]
                                ]);
                        });
                    }
                }
            });
        }
        templateRows.map((template, index)=>{
            let newTemplate = {};
            const templateRowIndex = index + 1;
            // Checks if a required attribute is empty.
            Object.keys(template).map((item)=>{
                if (required[item] && !template[item]) {
                    setImportErrors((state)=>[
                            ...state,
                            ...[
                                {
                                    index: templateRowIndex,
                                    type: "required",
                                    property: item,
                                    title: "Required property",
                                    message: `Missing required attribute "${item}" at row "${templateRowIndex + headersLength + 1}" of the CSV.`
                                }
                            ]
                        ]);
                }
                if (!defaultHeaders.includes(item) && attributesData.length > 0) {
                    const { type  } = attributesData.filter((element)=>element.name === item)[0];
                    newTemplate = {
                        ...newTemplate,
                        ...{
                            [item]: {
                                value: template[item],
                                type: type
                            }
                        }
                    };
                } else {
                    newTemplate = {
                        ...newTemplate,
                        ...{
                            [item]: template[item]
                        }
                    };
                }
            });
            setTemplates((state)=>[
                    ...state,
                    ...[
                        newTemplate
                    ]
                ]);
        });
    }, [
        rows,
        attributes,
        dataTypes,
        required,
        uniques,
        headersLength
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function handleActions() {
            if (fileName && collection && ual && templates.length > 0 && schemaAttributes.length > 0) {
                const newActions = [];
                const schemaInfo = await _utils_utils__WEBPACK_IMPORTED_MODULE_15__.checkIfSchemaExists({
                    chainKey,
                    collectionName: collection,
                    schemaName: fileName
                });
                if (!schemaInfo.schema) {
                    const createSchema = {
                        account: "atomicassets",
                        name: "createschema",
                        authorization: [
                            {
                                actor: ual.activeUser.accountName,
                                permission: ual.activeUser.requestPermission
                            }
                        ],
                        data: {
                            authorized_creator: ual.activeUser.accountName,
                            collection_name: collection,
                            schema_name: fileName,
                            schema_format: schemaAttributes
                        }
                    };
                    newActions.push(createSchema);
                } else {
                    setExistentSchemaInfo(schemaInfo);
                }
                await templates.map(async (template, index)=>{
                    const immutableDataList = [];
                    const immutableAttributes = {};
                    for(const key in template){
                        if (key !== "burnable" && key !== "max_supply" && key !== "transferable") {
                            const attributeError = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.validateDataType({
                                data: template[key],
                                attribute: key,
                                index: index,
                                headersLength: headersLength + 1
                            });
                            if (attributeError) {
                                setImportErrors((state)=>[
                                        ...state,
                                        ...[
                                            attributeError
                                        ]
                                    ]);
                            }
                            immutableDataList.push({
                                name: key,
                                type: template[key].type
                            });
                            immutableAttributes[key] = template[key].value;
                        }
                    }
                    const immutableData = await (0,_utils_handleAttributesData__WEBPACK_IMPORTED_MODULE_13__/* .handleAttributesData */ .K)({
                        attributes: immutableAttributes,
                        dataList: immutableDataList
                    });
                    if (immutableData.length > 0) {
                        const createTemplate = {
                            account: "atomicassets",
                            name: "createtempl",
                            authorization: [
                                {
                                    actor: ual.activeUser.accountName,
                                    permission: ual.activeUser.requestPermission
                                }
                            ],
                            data: {
                                authorized_creator: ual.activeUser.accountName,
                                collection_name: collection,
                                schema_name: fileName,
                                transferable: template.transferable,
                                burnable: template.burnable,
                                max_supply: template.max_supply,
                                immutable_data: immutableData
                            }
                        };
                        newActions.push(createTemplate);
                    }
                });
                setActions(newActions);
            }
        }
        handleActions();
    }, [
        schemaAttributes,
        collection,
        fileName,
        templates,
        attributes,
        headersLength,
        chainKey,
        ual
    ]);
    const handleOnChange = (event)=>{
        event.preventDefault();
        setRows([]);
        setHints([]);
        setActions([]);
        setUniques({});
        setRequired({});
        setFileName("");
        setDataTypes({});
        setTemplates([]);
        setAttributes([]);
        setImportErrors([]);
        setHeadersLength(0);
        setSchemaAttributes([]);
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        const index = file.name.lastIndexOf(".csv");
        setFileName(file.name.substring(0, index));
        reader.onload = ()=>{
            try {
                const parsed = papaparse__WEBPACK_IMPORTED_MODULE_5___default().parse(reader.result, {
                    header: true,
                    dynamicTyping: true,
                    skipEmptyLines: true
                });
                const defaultHeaders = [
                    "max_supply",
                    "burnable",
                    "transferable",
                    "sysflag"
                ];
                const fields = parsed.meta.fields;
                const sysflagIndex = fields.indexOf("sysflag");
                const newFields = fields.slice(0, sysflagIndex + 1);
                newFields.forEach((field)=>{
                    if (!defaultHeaders.includes(field)) {
                        setAttributes((state)=>[
                                ...state,
                                field
                            ]);
                    }
                });
                const rows = parsed.data.filter((row)=>{
                    const isRowNull = Object.values(row).every((value)=>value === null);
                    return !isRowNull;
                }).map((row)=>{
                    const newRow = {};
                    fields.forEach((field)=>{
                        newRow[field] = row[field];
                    });
                    if (row["sysflag"] === "datatype") {
                        setDataTypes(row);
                        setHeadersLength((prevLength)=>prevLength + 1);
                    }
                    if (row["sysflag"] === "required") {
                        setRequired(row);
                        setHeadersLength((prevLength)=>prevLength + 1);
                    }
                    if (row["sysflag"] === "unique") {
                        setUniques(row);
                        setHeadersLength((prevLength)=>prevLength + 1);
                    }
                    return newRow;
                });
                setRows(rows);
            } catch (error) {
                console.error(error);
            }
        };
        reader.onerror = (error)=>{
            console.error(error);
        };
        reader.readAsText(file);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col pb-8 gap-16",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "headline-1",
                                    children: _config__WEBPACK_IMPORTED_MODULE_14__.pluginInfo.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "body-1",
                                    children: _config__WEBPACK_IMPORTED_MODULE_14__.pluginInfo.description
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "body-1",
                                    children: [
                                        "For file specification, see",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://github.com/charliebot87/xpr-nft-creator/blob/main/docs/plugin-import.md",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "font-bold",
                                            children: "Import Plugin Documentation"
                                        }),
                                        "."
                                    ]
                                })
                            ]
                        }),
                        hasRemainingTransactions ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: transactionBatch?.length > 0 && actions.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col gap-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WarningCard__WEBPACK_IMPORTED_MODULE_12__/* .WarningCard */ .S, {
                                    title: "Transaction Batch",
                                    content: "It appears that you have a batch of transactions that weren't replicated to the chain. Select continue to review imported data or clear to start a new import.",
                                    callback: ()=>_utils_utils__WEBPACK_IMPORTED_MODULE_15__.continueImportBatchTransactions({
                                            transactionBatch,
                                            setActions
                                        }),
                                    clear: ()=>_utils_utils__WEBPACK_IMPORTED_MODULE_15__.clearBatch(setHasRemainingTransactions)
                                })
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    actions.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_review__WEBPACK_IMPORTED_MODULE_16__.Review, {
                                        actions: actions,
                                        errors: importErrors,
                                        schema: existentSchemaInfo["schema"]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>onSubmit(),
                                        className: "btn w-fit",
                                        children: _config__WEBPACK_IMPORTED_MODULE_14__.pluginInfo.name
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit(onSubmit),
                            className: "flex flex-col gap-16",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex gap-4 border-b pb-4 my-4 border-neutral-700 w-fit max-w-sm",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "flex flex-row items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                ...register("csvFile"),
                                                type: "file",
                                                accept: ".csv",
                                                onChange: handleOnChange,
                                                className: "w-full file:hidden"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "btn btn-small",
                                                children: "Select\xa0File"
                                            })
                                        ]
                                    })
                                }),
                                hints.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-col gap-4",
                                    children: hints.map((item, index)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WarningCard__WEBPACK_IMPORTED_MODULE_12__/* .WarningCard */ .S, {
                                                title: item?.title,
                                                content: item?.message
                                            })
                                        }, index);
                                    })
                                }),
                                actions.length > 25 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WarningCard__WEBPACK_IMPORTED_MODULE_12__/* .WarningCard */ .S, {
                                            title: "Transaction Batch",
                                            content: `This process was batched into ${transactions.length} transactions because of the amount of actions, this means that you will have to sign each transaction. You can also change the amount of actions per batch using the batch size selection.`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_11__/* .Select */ .P, {
                                            onChange: (option)=>setSelectedBatchSizeOption(option),
                                            label: "Batch size",
                                            selectedValue: _config__WEBPACK_IMPORTED_MODULE_14__.batchOptions[0].value,
                                            options: _config__WEBPACK_IMPORTED_MODULE_14__.batchOptions
                                        })
                                    ]
                                }),
                                actions.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_review__WEBPACK_IMPORTED_MODULE_16__.Review, {
                                    actions: actions,
                                    errors: importErrors,
                                    schema: existentSchemaInfo["schema"]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "btn w-fit",
                                    disabled: !fileName || importErrors.length > 0,
                                    children: _config__WEBPACK_IMPORTED_MODULE_14__.pluginInfo.name
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Modal__WEBPACK_IMPORTED_MODULE_10__/* .Modal */ .u, {
                ref: modalRef,
                title: modal.title,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "body-2 mt-2",
                        children: modal.message
                    }),
                    modal.details && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Disclosure, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row gap-4 items-baseline",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Disclosure.Button, {
                                        className: "btn btn-small mt-4",
                                        children: "Details"
                                    }),
                                    modal.resourceError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Disclosure.Panel, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                    className: "overflow-auto p-4 rounded-lg bg-neutral-700 max-h-96 mt-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: modal.details
                                        }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_ual_compat__WEBPACK_IMPORTED_MODULE_3__/* .withUAL */ .D)(Import));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;