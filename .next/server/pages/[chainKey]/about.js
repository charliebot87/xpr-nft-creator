"use strict";
(() => {
var exports = {};
exports.id = 1102;
exports.ids = [1102,6903];
exports.modules = {

/***/ 6903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ap": () => (/* binding */ metaIcon),
/* harmony export */   "DJ": () => (/* binding */ appName),
/* harmony export */   "FB": () => (/* binding */ appDescription),
/* harmony export */   "Gd": () => (/* binding */ appUrl),
/* harmony export */   "Ge": () => (/* binding */ ipfsEndpoint),
/* harmony export */   "Ly": () => (/* binding */ chainKeyDefault),
/* harmony export */   "bu": () => (/* binding */ ipfsJwt),
/* harmony export */   "yb": () => (/* binding */ favicon)
/* harmony export */ });
/* unused harmony export requestAccount */
const favicon = "/favicon.ico";
const appName = "XPR NFT Creator";
const ipfsJwt = "";
const ipfsEndpoint = "https://agent.mypinata.cloud/ipfs";
const appDescription = "Create, manage, and airdrop AtomicAssets NFTs on XPR Network. Powered by WebAuth wallet.";
const chainKeyDefault = "xpr";
const metaIcon = "https://nft.charliebot.dev/og-image.png";
const appUrl = "https://nft.charliebot.dev";
const requestAccount = (/* unused pure expression or super */ null && ("protonnz"));


/***/ }),

/***/ 7873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_globalsConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6903);



const features = [
    {
        emoji: "\uD83C\uDFA8",
        title: "Create NFT Collections",
        description: "Launch fully custom AtomicAssets NFT collections with schemas, templates, and on-chain metadata. No coding required."
    },
    {
        emoji: "\uD83D\uDDBC️",
        title: "Mint NFTs",
        description: "Mint individual or batch NFTs from your templates directly to any XPR Network account."
    },
    {
        emoji: "\uD83E\uDE82",
        title: "Airdrop to Holders",
        description: "Bulk-send NFTs to holders of any existing collection or template. Great for loyalty rewards and community drops."
    },
    {
        emoji: "\uD83E\uDE99",
        title: "Token Holder Airdrops",
        description: "Automatically mint and airdrop NFTs to holders of any SimpleDEX token. Connect your token launch to your NFT community."
    },
    {
        emoji: "\uD83D\uDD0D",
        title: "Collection Explorer",
        description: "Browse all public NFT collections on XPR Network. Search, discover, and inspect any collection."
    },
    {
        emoji: "\uD83D\uDD11",
        title: "WebAuth Wallet",
        description: "Sign in with WebAuth — biometrics (Face ID, fingerprint) or YubiKey. No seed phrases in your clipboard."
    }
];
const steps = [
    {
        step: "1",
        label: "Connect Wallet",
        detail: "Sign in with WebAuth or compatible XPR Network wallet."
    },
    {
        step: "2",
        label: "Create Collection",
        detail: "Define schemas, upload artwork, and set templates."
    },
    {
        step: "3",
        label: "Mint NFTs",
        detail: "Mint from your templates to any account or hold in escrow."
    },
    {
        step: "4",
        label: "Airdrop",
        detail: "Drop to token holders or collection holders in one click."
    }
];
function About() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: `About - ${_configs_globalsConfig__WEBPACK_IMPORTED_MODULE_2__/* .appName */ .DJ}`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container py-8 max-w-3xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "headline-2 mb-4",
                        children: "About XPR NFT Creator"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "body-1 mb-10 text-neutral-300",
                        children: "XPR NFT Creator is a platform for creating, managing, and airdropping AtomicAssets NFTs on XPR Network — built specifically for SimpleDEX and SimpleLaunch token creators and their communities."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "title-1 mb-6",
                        children: "Features"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12",
                        children: features.map((f)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "rounded-2xl p-5",
                                style: {
                                    background: "rgba(0,0,0,0.4)",
                                    border: "1px solid rgba(0,255,136,0.1)"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-2xl mb-3",
                                        children: f.emoji
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "font-bold text-white text-sm mb-1",
                                        children: f.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm text-neutral-400 leading-relaxed",
                                        children: f.description
                                    })
                                ]
                            }, f.title))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "title-1 mb-6",
                        children: "How It Works"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col sm:flex-row gap-4 mb-12",
                        children: steps.map((s, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-1 flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-3",
                                        style: {
                                            background: "rgba(0,255,136,0.1)",
                                            border: "1px solid rgba(0,255,136,0.3)",
                                            color: "#00ff88"
                                        },
                                        children: s.step
                                    }),
                                    i < steps.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hidden sm:block absolute",
                                        style: {
                                            width: "2rem",
                                            height: "1px",
                                            background: "rgba(0,255,136,0.2)",
                                            top: "20px",
                                            right: "-1rem"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm font-semibold text-white mb-1",
                                        children: s.label
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-xs text-neutral-500 leading-relaxed",
                                        children: s.detail
                                    })
                                ]
                            }, s.step))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border-t border-neutral-800 pt-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "title-1 mb-4",
                                children: "Ecosystem Links"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "space-y-3 body-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://dex.protonnz.com",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "text-neon hover:underline font-medium",
                                                children: "SimpleDEX"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-neutral-400",
                                                children: "— Token launch platform and DEX on XPR Network. Launch a token, then airdrop NFTs to your holders."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://xpr.atomichub.io",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "text-neon hover:underline font-medium",
                                                children: "XPR AtomicHub"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-neutral-400",
                                                children: "— The NFT marketplace for XPR Network. Collections created here are instantly tradeable there."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://xprnetwork.org",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "text-neon hover:underline font-medium",
                                                children: "XPR Network"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-neutral-400",
                                                children: "— Sub-second finality, no gas fees for users, WebAuth wallet login. The chain this runs on."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://webauth.com",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "text-neon hover:underline font-medium",
                                                children: "WebAuth Wallet"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-neutral-400",
                                                children: "— Sign in with biometrics or YubiKey. No seed phrase on your clipboard."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://github.com/charliebot87/xpr-nft-creator",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "text-neon hover:underline font-medium",
                                                children: "GitHub"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-neutral-400",
                                                children: "— Open source. Fork it, customize it, deploy your own."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "body-2 text-neutral-500 mt-8",
                                children: [
                                    "Built by",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://x.com/charliebot87",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-neon hover:underline",
                                        children: "@charliebot87"
                                    }),
                                    " ",
                                    "— an AI agent on XPR Network."
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7873));
module.exports = __webpack_exports__;

})();