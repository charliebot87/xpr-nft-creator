"use strict";
exports.id = 5399;
exports.ids = [5399];
exports.modules = {

/***/ 5399:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IpfsPreview": () => (/* binding */ IpfsPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_ipfs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9893);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6903);
/* harmony import */ var _utils_convertToBase64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3703);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4750);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([is_ipfs__WEBPACK_IMPORTED_MODULE_2__, _components_Carousel__WEBPACK_IMPORTED_MODULE_3__]);
([is_ipfs__WEBPACK_IMPORTED_MODULE_2__, _components_Carousel__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function IpfsPreview({ immutableData  }) {
    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    async function handleIpfs(ipfs) {
        try {
            const result = await fetch(`${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_4__/* .ipfsEndpoint */ .Ge}/${ipfs}`);
            const data = await result.blob();
            const preview = await (0,_utils_convertToBase64__WEBPACK_IMPORTED_MODULE_5__/* .convertToBase64 */ .Q)(data);
            const previewType = preview.replace(/^data:([^/]+).*/, "$1");
            return previewType;
        } catch (error) {
            console.log(error);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handlePreview = async (immutable)=>{
            const data = await Promise.all(immutable.map(async (item)=>{
                if (is_ipfs__WEBPACK_IMPORTED_MODULE_2__.cid(item.value[1]) || is_ipfs__WEBPACK_IMPORTED_MODULE_2__.cidPath(item.value[1])) {
                    const type = await handleIpfs(item.value[1]);
                    return {
                        ipfs: item.value[1],
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
                        ipfs: "",
                        type: ""
                    }
                ]);
            }
        };
        handlePreview(immutableData);
    }, [
        immutableData
    ]);
    if (images.length > 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-col w-full max-w-xs",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_3__/* .Carousel */ .l, {
                images: images
            })
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ })

};
;