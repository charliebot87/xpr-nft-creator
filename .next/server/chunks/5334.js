"use strict";
exports.id = 5334;
exports.ids = [5334];
exports.modules = {

/***/ 4750:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6903);
/* harmony import */ var _CarouselPreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2030);
/* harmony import */ var _components_skeletons_ImageSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _CarouselPreview__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _CarouselPreview__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Carousel({ images , unique  }) {
    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (images?.length > 0) {
            setSelectedImage(images[0]);
        }
    }, [
        images
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (selectedImage && images.length > 0) {
            setIndex(images.findIndex((item)=>item === selectedImage));
        }
    }, [
        selectedImage,
        images
    ]);
    function handleSelectedImage(index) {
        setSelectedImage(images[index]);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.MotionConfig, {
                transition: {
                    x: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    },
                    opacity: {
                        duration: 0.2
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>selectedImage?.ipfs && modalRef.current?.openModal(),
                        className: `relative w-full md:max-w-[14rem] md:min-w-[14rem] lg:max-w-sm lg:min-w-sm mx-auto aspect-square ${selectedImage?.ipfs && "cursor-zoom-in"}`,
                        children: selectedImage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: selectedImage?.type === "image" && selectedImage?.ipfs ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_7__/* .ipfsEndpoint */ .Ge}/${selectedImage?.ipfs}`,
                                fill: true,
                                className: "object-contain",
                                priority: true,
                                alt: "Template image",
                                sizes: "max-w-sm"
                            }) : selectedImage?.type === "video" && selectedImage?.ipfs ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                muted: true,
                                autoPlay: true,
                                loop: true,
                                playsInline: true,
                                className: "w-full h-full object-contain",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                    src: `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_7__/* .ipfsEndpoint */ .Ge}/${selectedImage?.ipfs}`,
                                    type: "video/mp4"
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-full flex items-center justify-center bg-neutral-700 text-white rounded-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_4__.ImageSquare, {
                                    size: 96
                                })
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skeletons_ImageSkeleton__WEBPACK_IMPORTED_MODULE_6__/* .ImageSkeleton */ .F, {})
                    }),
                    !unique && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            initial: false,
                            className: "mx-auto mt-6 mb-6 flex aspect-square h-14",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
                                initial: false,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-row aspect-square w-full h-14",
                                    children: images?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: images.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {
                                                initial: {
                                                    width: "0%",
                                                    x: `${Math.max((index - 1) * -100, 15 * -100)}%`
                                                },
                                                animate: {
                                                    width: "100%",
                                                    x: `${Math.max(index * -100, 15 * -100)}%`
                                                },
                                                exit: {
                                                    width: "0%"
                                                },
                                                type: "button",
                                                onClick: ()=>handleSelectedImage(key),
                                                className: `relative rounded-md inline-block w-full shrink-0 h-full transform-gpu overflow-hidden ${key === index && "border border-white"}`,
                                                children: item.type === "image" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    fill: true,
                                                    className: "object-cover p-1 rounded-md",
                                                    src: `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_7__/* .ipfsEndpoint */ .Ge}/${item?.ipfs}`,
                                                    alt: "small images on the bottom",
                                                    sizes: "max-w-xs"
                                                }) : item.type === "video" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                    muted: true,
                                                    autoPlay: true,
                                                    loop: true,
                                                    playsInline: true,
                                                    className: "w-full h-full object-cover rounded-md p-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                        src: `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_7__/* .ipfsEndpoint */ .Ge}/${item?.ipfs}`,
                                                        type: "video/mp4"
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full h-full flex items-center justify-center bg-neutral-800 text-white rounded-xl",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_4__.ImageSquare, {
                                                        size: 96
                                                    })
                                                })
                                            }, key))
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skeletons_ImageSkeleton__WEBPACK_IMPORTED_MODULE_6__/* .ImageSkeleton */ .F, {})
                                })
                            })
                        })
                    })
                ]
            }),
            images && images.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CarouselPreview__WEBPACK_IMPORTED_MODULE_5__/* .CarouselPreview */ .D, {
                ref: modalRef,
                images: images,
                currentImage: selectedImage,
                index: index,
                handleSelectedImage: handleSelectedImage
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2030:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ CarouselPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3789);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1185);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6903);
/* harmony import */ var _components_skeletons_ImageSkeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function CarouselPreviewComponent({ index , images , handleSelectedImage , currentImage  }, ref) {
    let [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>{
        return {
            openModal,
            closeModal
        };
    });
    const handlers = (0,react_swipeable__WEBPACK_IMPORTED_MODULE_4__.useSwipeable)({
        onSwipedLeft: ()=>{
            if (index < images?.length - 1) {
                handleSelectedImage(index + 1);
            }
        },
        onSwipedRight: ()=>{
            if (index > 0) {
                handleSelectedImage(index - 1);
            }
        },
        trackMouse: true
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {
        appear: true,
        show: isOpen,
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
            as: "div",
            className: "relative z-50",
            onClose: closeModal,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Child, {
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-0 bottom-0 left-0 right-0 inset-0 bg-black bg-opacity-50"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 bg-neutral-900/70 backdrop-blur-2xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col h-screen",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog.Panel, {
                                className: "flex justify-center w-full h-screen overflow-hidden",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "btn btn-ghost btn-square hover:bg-black/75 absolute top-0 right-0 z-50",
                                        onClick: closeModal,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.X, {
                                            size: 24
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.MotionConfig, {
                                        transition: {
                                            x: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30
                                            },
                                            opacity: {
                                                duration: 0.2
                                            }
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "max-w-7xl max-h-screen w-full mx-auto",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "relative aspect-square w-full h-full",
                                                    ...handlers,
                                                    children: currentImage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: currentImage?.type === "image" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            src: `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__/* .ipfsEndpoint */ .Ge}/${currentImage?.ipfs}`,
                                                            fill: true,
                                                            className: "object-contain",
                                                            priority: true,
                                                            alt: "Template image",
                                                            sizes: "max-w-2xl"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                            muted: true,
                                                            autoPlay: true,
                                                            loop: true,
                                                            playsInline: true,
                                                            className: "w-full h-full object-contain",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                                src: `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__/* .ipfsEndpoint */ .Ge}/${currentImage?.ipfs}`,
                                                                type: "video/mp4"
                                                            })
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skeletons_ImageSkeleton__WEBPACK_IMPORTED_MODULE_7__/* .ImageSkeleton */ .F, {})
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "initial max-h-full w-full z-50",
                                                    children: [
                                                        index >= 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none",
                                                            style: {
                                                                transform: "translate3d(0, 0, 0)"
                                                            },
                                                            onClick: ()=>handleSelectedImage(index - 1),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.CaretLeft, {
                                                                size: 32
                                                            })
                                                        }),
                                                        index + 1 < images.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none",
                                                            style: {
                                                                transform: "translate3d(0, 0, 0)"
                                                            },
                                                            onClick: ()=>handleSelectedImage(index + 1),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.CaretRight, {
                                                                size: 32
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
                                                        initial: false,
                                                        className: "mx-auto mt-6 flex aspect-square h-14",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {
                                                            initial: false,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex flex-row aspect-square w-full h-14",
                                                                children: images.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.button, {
                                                                        initial: {
                                                                            width: "0%",
                                                                            x: `${Math.max((index - 1) * -100, 15 * -100)}%`
                                                                        },
                                                                        animate: {
                                                                            width: "100%",
                                                                            x: `${Math.max(index * -100, 15 * -100)}%`
                                                                        },
                                                                        exit: {
                                                                            width: "0%"
                                                                        },
                                                                        type: "button",
                                                                        onClick: ()=>handleSelectedImage(key),
                                                                        className: `relative rounded-md inline-block w-full shrink-0 h-full transform-gpu overflow-hidden ${key === index && "border border-white"}`,
                                                                        children: item.type === "image" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            fill: true,
                                                                            className: "object-cover p-1 rounded-md",
                                                                            src: `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__/* .ipfsEndpoint */ .Ge}/${item?.ipfs}`,
                                                                            alt: "small images on the bottom",
                                                                            sizes: "max-w-xs"
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                            muted: true,
                                                                            autoPlay: true,
                                                                            loop: true,
                                                                            playsInline: true,
                                                                            className: "w-full h-full object-cover rounded-md p-1",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                                                src: `${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_8__/* .ipfsEndpoint */ .Ge}/${item?.ipfs}`,
                                                                                type: "video/mp4"
                                                                            })
                                                                        })
                                                                    }, key))
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}
const CarouselPreview = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(CarouselPreviewComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5334:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4750);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Carousel__WEBPACK_IMPORTED_MODULE_3__]);
_components_Carousel__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function HeaderRoot({ border , breadcrumb , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: `${breadcrumb ? "pb-4 md:pb-8" : "py-4 md:py-8"} ${border ? "border-b border-neutral-800" : ""}`,
        style: border ? {
            borderColor: "rgba(0, 255, 136, 0.08)"
        } : {},
        children: [
            breadcrumb && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "container py-2",
                "aria-label": "Breadcrumb",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "flex flex-wrap gap-2 items-center body-2 font-bold",
                    children: breadcrumb.map(([label, href], index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "flex gap-2 items-center text-neutral-400",
                            children: [
                                index !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_2__.CaretRight, {
                                    size: 16,
                                    weight: "bold"
                                }),
                                href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: href,
                                    className: "block text-neutral-400 hover:text-white py-2",
                                    children: label
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    "aria-current": "page",
                                    className: "text-white",
                                    children: label
                                })
                            ]
                        }, index))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container flex gap-4 md:gap-8 flex-col md:flex-row md:items-center overflow-x-hidden sm:overflow-x-visible",
                children: children
            })
        ]
    });
}
function HeaderContent({ title , subtitle , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-1",
        children: [
            subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "title-1",
                children: subtitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "headline-1",
                children: title ?? "No name"
            }),
            children
        ]
    });
}
function HeaderSearch({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex-1 md:max-w-[16rem]",
        children: children
    });
}
function HeaderBanner({ images , unique  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex-1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_3__/* .Carousel */ .l, {
            images: images,
            unique: unique
        })
    });
}
const Header = {
    Root: HeaderRoot,
    Content: HeaderContent,
    Banner: HeaderBanner,
    Search: HeaderSearch
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ ImageSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ImageSkeleton() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        role: "img",
        width: "100%",
        height: "100%",
        "aria-labelledby": "loading-aria",
        viewBox: "0 0 500 500",
        preserveAspectRatio: "none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                id: "loading-aria",
                children: "Loading..."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                clipPath: "url(#clip-path)",
                style: {
                    fill: "url('#fill')"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                        id: "clip-path",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            x: "10",
                            y: "0",
                            rx: "2",
                            ry: "2",
                            width: "100%",
                            height: "100%"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "fill",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0.599964",
                                stopColor: "#262626",
                                stopOpacity: "1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                                    attributeName: "offset",
                                    values: "-2; -2; 1",
                                    keyTimes: "0; 0.25; 1",
                                    dur: "2s",
                                    repeatCount: "indefinite"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1.59996",
                                stopColor: "#525252",
                                stopOpacity: "1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                                    attributeName: "offset",
                                    values: "-1; -1; 2",
                                    keyTimes: "0; 0.25; 1",
                                    dur: "2s",
                                    repeatCount: "indefinite"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "2.59996",
                                stopColor: "#262626",
                                stopOpacity: "1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                                    attributeName: "offset",
                                    values: "0; 0; 3",
                                    keyTimes: "0; 0.25; 1",
                                    dur: "2s",
                                    repeatCount: "indefinite"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;