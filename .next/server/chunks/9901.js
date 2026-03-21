"use strict";
exports.id = 9901;
exports.ids = [9901];
exports.modules = {

/***/ 5740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BaseField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6840);



function InputComponent({ icon , label , hint , error , ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BaseField__WEBPACK_IMPORTED_MODULE_2__/* .BaseField */ .n, {
        icon: icon,
        label: label,
        hint: hint,
        error: error,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            ...props,
            ref: ref,
            className: "w-full block py-[0.875rem] bg-transparent body-1 text-white placeholder:text-neutral-500 focus:outline-none"
        })
    });
}
const Input = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(InputComponent);


/***/ }),

/***/ 9901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Attributes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9191);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5740);
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6942);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _components_Select__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _components_Select__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







yup__WEBPACK_IMPORTED_MODULE_3__.addMethod(yup__WEBPACK_IMPORTED_MODULE_3__.array, "unique", function(field, message) {
    return this.test("unique", message, function(array) {
        const uniqueData = Array.from(new Set(array.map((row)=>row[field]?.toLowerCase())));
        const isUnique = array.length === uniqueData.length;
        if (isUnique) {
            return true;
        }
        const index = array.findIndex((row, i)=>row[field]?.toLowerCase() !== uniqueData[i]);
        if (array[index][field] === "") {
            return true;
        }
        return this.createError({
            path: `${this.path}.${index}.${field}`,
            message
        });
    });
});
const attributeOptions = [
    {
        label: "Text",
        value: "string"
    },
    {
        label: "Integer Number",
        value: "uint64"
    },
    {
        label: "Floating Point Number",
        value: "double"
    },
    {
        label: "Image",
        value: "image"
    },
    {
        label: "IPFS Hash",
        value: "ipfs"
    },
    {
        label: "Boolean",
        value: "bool"
    }
];
function Attributes({ attributes  }) {
    const { register , control , formState: { errors  } , watch  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
    const { move , fields: attributesFields , append: attributesAppend , prepend: attributesPrepend , remove: attributesRemove  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFieldArray)({
        control,
        name: "attributes"
    });
    const attributesWatched = watch("attributes");
    const attributesToValid = [
        ...attributes,
        ...attributesWatched
    ];
    const hasImageAttribute = attributesToValid.some((attribute)=>attribute.name === "img" && attribute.type === "image");
    const hasVideoAttribute = attributesToValid.some((attribute)=>attribute.name === "video" && attribute.type === "string");
    function handleAppendAttribute() {
        attributesAppend({
            name: "",
            type: attributeOptions[0].value
        });
    }
    function handlePrependAttribute(name, type) {
        attributesPrepend({
            name,
            type
        });
    }
    function handleRemoveAttribute(index) {
        attributesRemove(index);
    }
    const handleDrag = ({ source , destination  })=>{
        if (destination) {
            move(source.index, destination.index);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "body-2 text-white",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-4 mb-4 font-bold",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "flex-1",
                                children: "Attribute"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "flex-1",
                                children: "Type"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-neutral-800 border border-neutral-700 rounded",
                        children: attributes.map((attribute)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-4 p-4 border-b border-neutral-700 last:border-b-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "flex-1",
                                        children: attribute.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "flex-1",
                                        children: attribute.type === "string" ? "text" : attribute.type
                                    })
                                ]
                            }, attribute.name))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.DragDropContext, {
                onDragEnd: handleDrag,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.Droppable, {
                    droppableId: "attributes",
                    children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            ref: provided.innerRef,
                            ...provided.droppableProps,
                            children: [
                                attributesFields.map((field, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.Draggable, {
                                        draggableId: `field-${index}`,
                                        index: index,
                                        children: (provided)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                ref: provided.innerRef,
                                                ...provided.draggableProps,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex w-full flex-col sm:flex-row gap-4 sm:border-0 border-b border-neutral-700 pb-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex-1",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .I, {
                                                                ...register(`attributes.${index}.name`),
                                                                error: errors.attributes?.[index]?.name?.message,
                                                                placeholder: "Attribute name",
                                                                type: "text"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex-1 flex gap-4",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flex-1",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                                                        control: control,
                                                                        name: `attributes.${index}.type`,
                                                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Select__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .P, {
                                                                                onChange: field.onChange,
                                                                                selectedValue: field.value,
                                                                                options: attributeOptions
                                                                            })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flex-none",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        type: "button",
                                                                        className: "btn btn-square",
                                                                        onClick: ()=>handleRemoveAttribute(index),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_1__.TrashSimple, {
                                                                            size: 24
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            ...provided.dragHandleProps,
                                                            className: "btn btn-ghost btn-square",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_1__.HandGrabbing, {
                                                                size: 24
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, field.id)
                                    }, index);
                                }),
                                provided.placeholder
                            ]
                        })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "btn",
                        onClick: handleAppendAttribute,
                        children: "Add attribute"
                    }),
                    !hasImageAttribute && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "btn btn-ghost",
                        onClick: ()=>handlePrependAttribute("img", "image"),
                        children: "Add img"
                    }),
                    !hasVideoAttribute && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "btn btn-ghost",
                        onClick: ()=>handlePrependAttribute("video", "string"),
                        children: "Add video"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;