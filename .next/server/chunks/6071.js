"use strict";
exports.id = 6071;
exports.ids = [6071];
exports.modules = {

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

/***/ 6071:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ handlePreview)
/* harmony export */ });
/* harmony import */ var is_ipfs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9893);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6903);
/* harmony import */ var _utils_convertToBase64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3703);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([is_ipfs__WEBPACK_IMPORTED_MODULE_0__]);
is_ipfs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handlePreview(element, setImages) {
    const schema = element.schema.format;
    const immutableData = element.template && Object.keys(element.template.immutable_data).length > 0 ? element.template.immutable_data : element.immutable_data;
    const data = await Promise.all(schema.map(async (item)=>{
        if (is_ipfs__WEBPACK_IMPORTED_MODULE_0__.cid(immutableData[item.name]) || is_ipfs__WEBPACK_IMPORTED_MODULE_0__.cidPath(immutableData[item.name])) {
            const type = await handleIpfs(immutableData[item.name]);
            return {
                ipfs: immutableData[item.name],
                type: type
            };
        }
    }));
    const filteredIpfs = data.filter((item)=>item !== undefined);
    if (filteredIpfs.length > 0) {
        setImages(filteredIpfs);
    } else {
        setImages([
            {
                type: ""
            }
        ]);
    }
}
async function handleIpfs(ipfs) {
    try {
        const result = await fetch(`${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_1__/* .ipfsEndpoint */ .Ge}/${ipfs}`);
        const data = await result.blob();
        const preview = await (0,_utils_convertToBase64__WEBPACK_IMPORTED_MODULE_2__/* .convertToBase64 */ .Q)(data);
        const previewType = preview.replace(/^data:([^/]+).*/, "$1");
        return previewType;
    } catch (error) {
        console.log(error);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;