"use strict";
exports.id = 5755;
exports.ids = [5755];
exports.modules = {

/***/ 5755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ InputPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6903);
/* harmony import */ var _utils_convertToBase64__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3703);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9507);







function InputPreviewComponent({ onChange , setValue , title , description , ipfsHash , error , accept , clear , ...props }, ref) {
    const [isIpfs, setIsIpfs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [previewSrc, setPreviewSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [waitToSearch, setWaitToSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [messageError, setMessageError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(error);
    const [previewFileName, setPreviewFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (clear) {
            setPreviewSrc(null);
            setMessageError("");
        }
    }, [
        clear
    ]);
    async function handleOnChangeFile(event) {
        event.stopPropagation();
        event.preventDefault();
        onChange(event);
        setPreviewSrc("");
        const files = event.target.files ?? event.dataTransfer.files;
        if (files.length > 0) {
            const [file] = files;
            const preview = await getPreviewSrc(file);
            setPreviewSrc(preview);
            if (event.dataTransfer) {
                setValue(props.name, files);
                document.getElementById(props.name)["value"] = files[0].name;
            }
            if (event.target.files) {
                setPreviewFileName(files[0].name);
            }
        } else {
            setPreviewSrc(null);
        }
    }
    function getPreviewSrc(file) {
        return new Promise((resolve)=>{
            const fileReader = new FileReader();
            fileReader.onload = ()=>{
                resolve(fileReader.result);
            };
            fileReader.readAsDataURL(file);
        });
    }
    function handleOnChangeIpfs(event) {
        event.stopPropagation();
        event.preventDefault();
        onChange(event);
        setPreviewSrc("");
        setMessageError("");
        const { value  } = event.target;
        if (!value) {
            setPreviewSrc(null);
            return;
        }
        clearTimeout(waitToSearch);
        const newWaitToSearch = setTimeout(()=>{
            handleIpfsPreview(value);
        }, 500);
        setWaitToSearch(newWaitToSearch);
    }
    function handleToggleIpfs() {
        setIsIpfs((state)=>!state);
        setPreviewSrc(null);
    }
    const handleIpfsPreview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (ipfs)=>{
        setMessageError("");
        const result = await fetch(`${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_5__/* .ipfsEndpoint */ .Ge}/${ipfs}`);
        const data = await result.blob();
        const preview = await (0,_utils_convertToBase64__WEBPACK_IMPORTED_MODULE_6__/* .convertToBase64 */ .Q)(data);
        if (accept) {
            const [acceptType] = accept.split("/");
            const previewType = preview.replace(/^data:([^/]+).*/, "$1");
            if (acceptType !== previewType) {
                setMessageError("Invalid IPFS hash");
                setPreviewSrc(null);
                return;
            }
        }
        setPreviewSrc(preview);
    }, [
        accept
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!!ipfsHash) {
            handleIpfsPreview(ipfsHash);
        }
    }, [
        handleIpfsPreview,
        ipfsHash
    ]);
    function handleDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            className: `block aspect-video rounded cursor-pointer p-4 bg-neutral-800 border ${messageError ? "border-red-600" : "border-neutral-700"}`,
            children: [
                /image/.test(previewSrc) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-full h-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: previewSrc,
                        fill: true,
                        className: "object-contain",
                        alt: ""
                    })
                }) : /video\/mp4/.test(previewSrc) || /video\/webm/.test(previewSrc) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                    muted: true,
                    autoPlay: true,
                    loop: true,
                    playsInline: true,
                    className: "w-full h-full object-contain",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                        src: previewSrc,
                        type: "video/mp4"
                    })
                }) : /text\/csv/.test(previewSrc) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-full flex justify-center items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.FileCsv, {
                        size: 56
                    })
                }) : /application\/pdf/.test(previewSrc) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-full flex justify-center items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.FilePdf, {
                        size: 56
                    })
                }) : previewSrc ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-full flex justify-center items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.File, {
                        size: 56
                    })
                }) : previewSrc === "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex h-full items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_4__/* .Loading */ .g, {})
                }) : messageError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full flex flex-col justify-center items-center gap-2 text-center text-red-600",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.FileX, {
                            size: 56
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "title-1",
                            children: messageError
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full flex flex-col justify-center items-center gap-2 text-center",
                    onClick: handleToggleIpfs,
                    id: "dropZone",
                    onDragOver: (event)=>handleDragOver(event),
                    onDrop: (event)=>handleOnChangeFile(event),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.UploadSimple, {
                            size: 56
                        }),
                        title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "title-1",
                            children: title
                        }),
                        description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "body-3",
                            children: description
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `flex gap-4 items-center border-t pt-4 ${messageError ? "border-red-600" : "border-neutral-700"}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1",
                            children: isIpfs ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ...props,
                                ref: ref,
                                type: "text",
                                placeholder: "IPFS hash",
                                onChange: handleOnChangeIpfs,
                                id: props.name,
                                className: "w-full body-1 text-white bg-transparent focus:outline-none placeholder:text-neutral-500"
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ...props,
                                        ref: ref,
                                        type: "file",
                                        accept: accept,
                                        id: props.name,
                                        onChange: handleOnChangeFile,
                                        className: "w-full hidden"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: previewFileName ? previewFileName : "No file chosen"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "btn btn-small",
                                onClick: handleToggleIpfs,
                                children: isIpfs ? "Upload" : "IPFS hash"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
const InputPreview = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(InputPreviewComponent);


/***/ })

};
;