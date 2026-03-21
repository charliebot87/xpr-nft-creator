"use strict";
exports.id = 2793;
exports.ids = [2793];
exports.modules = {

/***/ 2793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Card)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "phosphor-react"
var external_phosphor_react_ = __webpack_require__(9628);
;// CONCATENATED MODULE: ./src/components/Card/components/CardContent.tsx




function CardContent({ id , image , video , title , subtitle , viewLink , withThumbnail  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            id && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-2 text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    className: "title-1",
                    children: [
                        "#",
                        id
                    ]
                })
            }),
            withThumbnail && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "aspect-square bg-neutral-700 relative",
                children: [
                    video && /*#__PURE__*/ jsx_runtime_.jsx("video", {
                        muted: true,
                        autoPlay: true,
                        loop: true,
                        playsInline: true,
                        className: "w-full h-full object-cover",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            src: video,
                            type: "video/mp4"
                        })
                    }),
                    image && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: title,
                        src: image,
                        fill: true,
                        className: "object-cover pointer-events-none",
                        sizes: "max-w-lg"
                    }),
                    !video && !image && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full h-full flex items-center justify-center text-white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_phosphor_react_.ImageSquare, {
                            size: 64
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "title-1 truncate",
                        children: title ?? "No name"
                    }),
                    subtitle && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "body-2 text-neutral-200 truncate",
                        children: subtitle
                    }),
                    viewLink && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: viewLink,
                        className: "btn btn-small mt-4 whitespace-nowrap w-full text-center truncate",
                        target: "_blank",
                        onClick: (event)=>event.stopPropagation(),
                        children: "View NFT"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Card/index.tsx



function Card({ href , id , image , video , title , subtitle , viewLink , withThumbnail =true , ...props }) {
    if (href) {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            prefetch: false,
            className: `conspiracy-card cursor-pointer ${!id && "flex flex-col justify-end"}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx(CardContent, {
                id: id,
                image: image,
                video: video,
                title: title,
                subtitle: subtitle,
                withThumbnail: withThumbnail
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "conspiracy-card",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(CardContent, {
            id: id,
            image: image,
            video: video,
            title: title,
            subtitle: subtitle,
            viewLink: viewLink,
            withThumbnail: withThumbnail
        })
    });
}


/***/ })

};
;