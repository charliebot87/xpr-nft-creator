"use strict";
exports.id = 6808;
exports.ids = [6808];
exports.modules = {

/***/ 9247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ uploadImageToIpfsService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const uploadImageToIpfsService = async (image)=>{
    if (!image) return null;
    try {
        let data = new FormData();
        data.append("file", image);
        const { data: uploadedImage  } = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "POST",
            url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data,
            headers: {
                Authorization: `Bearer ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_1__/* .ipfsJwt */ .bu}`,
                "Content-Type": `multipart/form-data boundary=${data["_boundary"]}`
            }
        });
        return uploadedImage;
    } catch (e) {
        console.error("uploadImageToIpfsService error:", e);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6808:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ handleAttributesData)
/* harmony export */ });
/* harmony import */ var _services_collection_uploadImageToIpfsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9247);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_collection_uploadImageToIpfsService__WEBPACK_IMPORTED_MODULE_0__]);
_services_collection_uploadImageToIpfsService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handleAttributesData({ attributes , dataList  }) {
    const filesAttributes = Object.keys(attributes).reduce((accumulatorAttributes, keyAttribute)=>{
        const attributeValue = attributes[`${keyAttribute}`];
        const shouldMakeUpload = attributeValue && typeof attributeValue === "object" && attributeValue.length > 0;
        if (shouldMakeUpload) {
            return [
                ...accumulatorAttributes,
                {
                    name: keyAttribute,
                    value: attributeValue[0]
                }
            ];
        }
        return accumulatorAttributes;
    }, []);
    const pinataFiles = await Promise.all(filesAttributes.map((fileAttribute)=>(0,_services_collection_uploadImageToIpfsService__WEBPACK_IMPORTED_MODULE_0__/* .uploadImageToIpfsService */ .E)(fileAttribute.value)));
    filesAttributes.forEach((fileAttribute, fileAttributeIndex)=>{
        attributes[fileAttribute.name] = pinataFiles[fileAttributeIndex]["IpfsHash"];
    });
    const data = [];
    const numericDataAttributes = [
        "int8",
        "int16",
        "int32",
        "int64",
        "uint8",
        "uint16",
        "uint32",
        "uint64"
    ];
    dataList.map(({ name , type , isImmutable  })=>{
        const attributeValue = attributes[`${name}`];
        if (attributeValue === undefined) {
            return;
        }
        const isMutable = isImmutable !== undefined && !isImmutable;
        if (isMutable) {
            return;
        }
        if (type === "image" || type === "ipfs" || type === "video") {
            data.push({
                key: name,
                value: [
                    "string",
                    attributeValue
                ]
            });
        } else if (type === "bool") {
            data.push({
                key: name,
                value: [
                    "uint8",
                    attributeValue ? 1 : 0
                ]
            });
        } else if (type === "double") {
            data.push({
                key: name,
                value: [
                    "float64",
                    parseFloat(attributeValue)
                ]
            });
        } else if (type === "string") {
            data.push({
                key: name,
                value: [
                    type,
                    attributeValue || ""
                ]
            });
        } else if (type === "float") {
            data.push({
                key: name,
                value: [
                    "float32",
                    parseFloat(attributeValue)
                ]
            });
        } else if (numericDataAttributes.includes(type)) {
            data.push({
                key: name,
                value: [
                    type,
                    attributeValue
                ]
            });
        }
    });
    return data;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;