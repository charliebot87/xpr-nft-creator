"use strict";
exports.id = 1391;
exports.ids = [1391];
exports.modules = {

/***/ 1391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakArray": () => (/* binding */ breakArray),
/* harmony export */   "checkIfSchemaExists": () => (/* binding */ checkIfSchemaExists),
/* harmony export */   "clearBatch": () => (/* binding */ clearBatch),
/* harmony export */   "continueImportBatchTransactions": () => (/* binding */ continueImportBatchTransactions),
/* harmony export */   "suggestionDataTypes": () => (/* binding */ suggestionDataTypes),
/* harmony export */   "validateDataType": () => (/* binding */ validateDataType)
/* harmony export */ });
/* harmony import */ var is_ipfs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9893);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_schema_getSchemaService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9094);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([is_ipfs__WEBPACK_IMPORTED_MODULE_0__, _services_schema_getSchemaService__WEBPACK_IMPORTED_MODULE_2__]);
([is_ipfs__WEBPACK_IMPORTED_MODULE_0__, _services_schema_getSchemaService__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function isInRange(min, max) {
    return yup__WEBPACK_IMPORTED_MODULE_1__.mixed().test("is-in-range", "${path} must be a valid number between ${min} and ${max}", function(value) {
        const stringValue = value && value.toString().replace(/,/g, "");
        const numValue = parseInt(stringValue, 10);
        return !isNaN(numValue) && Number.isInteger(numValue) && numValue >= min && numValue <= max;
    });
}
const isUint8 = isInRange(0, 255);
const isUint16 = isInRange(0, 65535);
const isUint32 = isInRange(0, 4294967295);
const isUint64 = isInRange(0, 18446744073709551615);
const isInt8 = isInRange(-128, 127);
const isInt16 = isInRange(-32768, 32767);
const isInt32 = isInRange(-2147483648, 2147483647);
const isInt64 = isInRange(-9223372036854775808, 9223372036854775807);
function validateDataType({ data , attribute , index , headersLength  }) {
    const { value , type  } = data;
    const invalidAttribute = {
        index: index + 1,
        title: "Invalid attribute",
        property: attribute,
        type: "attribute",
        message: ""
    };
    switch(type){
        case "image":
            if (!(is_ipfs__WEBPACK_IMPORTED_MODULE_0__.cid(value) || is_ipfs__WEBPACK_IMPORTED_MODULE_0__.cidPath(value))) {
                invalidAttribute.message = `The IPFS value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        case "ipfs":
            if (!(is_ipfs__WEBPACK_IMPORTED_MODULE_0__.cid(value) || is_ipfs__WEBPACK_IMPORTED_MODULE_0__.cidPath(value))) {
                invalidAttribute.message = `The IPFS value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        case "bool":
            if (!(value === true || value === false)) {
                invalidAttribute.message = `The boolean value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        case "double":
            if (Math.abs(value) > 1.7e308 || Math.abs(value) > 0 && Math.abs(value) < 1.7e-308) {
                invalidAttribute.message = `The double value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        case "float":
            if (Math.abs(value) > 3.4e38 || Math.abs(value) > 0 && Math.abs(value) < 1.7e-38) {
                invalidAttribute.message = `The float value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        case "uint8":
            if (!isUint8.isValidSync(value)) {
                invalidAttribute.message = `The uint8 value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        case "uint16":
            if (!isUint16.isValidSync(value)) {
                invalidAttribute.message = `The uint16 value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        case "uint32":
            if (!isUint32.isValidSync(value)) {
                invalidAttribute.message = `The uint32 value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        case "uint64":
            if (!isUint64.isValidSync(value)) {
                invalidAttribute.message = `The uint64 value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        case "int8":
            if (!isInt8.isValidSync(value)) {
                invalidAttribute.message = `The int8 value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        case "int16":
            if (!isInt16.isValidSync(value)) {
                invalidAttribute.message = `The int16 value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        case "int32":
            if (!isInt32.isValidSync(value)) {
                invalidAttribute.message = `The int32 value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        case "int64":
            if (!isInt64.isValidSync(value)) {
                invalidAttribute.message = `The int64 value provided for the "${attribute}" attribute at row "${index + 1 + headersLength}" of the CSV is invalid.`;
            }
            break;
        default:
            break;
    }
    if (invalidAttribute.message.length > 0) {
        return invalidAttribute;
    }
}
const uints = [
    "uint16",
    "uint32",
    "uint64"
];
const ints = [
    "int16",
    "int32",
    "int64"
];
function handleDataTypeHintMessage({ dataTypeValues , attribute , dataType  }) {
    const dataTypes = [
        {
            type: "uint8",
            validator: isUint8
        },
        {
            type: "uint16",
            validator: isUint16
        },
        {
            type: "uint32",
            validator: isUint32
        },
        {
            type: "int8",
            validator: isInt8
        },
        {
            type: "int16",
            validator: isInt16
        },
        {
            type: "int32",
            validator: isInt32
        }
    ];
    for (const { type , validator  } of dataTypes){
        if (dataTypeValues.every((item)=>validator.isValidSync(item))) {
            return `The CSV has an attribute "${attribute}" with data type "${dataType}" but since all values are in a smaller range we suggest you use "${type}" instead.`;
        }
    }
}
function suggestionDataTypes({ dataTypes , templates  }) {
    const suggestions = [];
    for(const key in dataTypes){
        const values = [];
        const suggestion = {
            title: "Suggestion",
            message: ""
        };
        if (uints.includes(String(dataTypes[key])) || ints.includes(String(dataTypes[key]))) {
            templates.map((item)=>{
                values.push(item[key]);
            });
            suggestion.message = handleDataTypeHintMessage({
                dataTypeValues: values,
                attribute: key,
                dataType: dataTypes[key]
            });
            if (suggestion.message && suggestion.message.length > 0) {
                suggestions.push(suggestion);
            }
        }
    }
    if (suggestions.length > 0) {
        return suggestions;
    }
}
function breakArray(array, size) {
    const length = array.length;
    const segmentLength = Number(size);
    const segments = [];
    for(let i = 0; i < length; i += segmentLength){
        segments.push(array.slice(i, i + segmentLength));
    }
    return segments;
}
function continueImportBatchTransactions({ transactionBatch , setActions  }) {
    const newActions = [];
    for (const transaction of transactionBatch){
        for (const action of transaction){
            newActions.push(action);
        }
    }
    setActions(newActions);
}
function clearBatch(setHasRemainingTransactions) {
    localStorage.removeItem("transactionBatch");
    setHasRemainingTransactions(false);
}
async function checkIfSchemaExists({ chainKey , collectionName , schemaName  }) {
    try {
        const { data: schema  } = await (0,_services_schema_getSchemaService__WEBPACK_IMPORTED_MODULE_2__/* .getSchemaService */ .h)(chainKey, {
            collectionName,
            schemaName
        });
        return {
            status: true,
            schema: schema.data
        };
    } catch (error) {
        return {
            status: false
        };
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9094:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ getSchemaService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getSchemaService(chainKey, { collectionName , schemaName  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/schemas/${collectionName}/${schemaName}`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url);
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;