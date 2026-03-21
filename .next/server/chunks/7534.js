"use strict";
exports.id = 7534;
exports.ids = [7534];
exports.modules = {

/***/ 7534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ usePermission)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/libs/ual-compat.tsx
var ual_compat = __webpack_require__(6268);
;// CONCATENATED MODULE: ./src/components/ConnectWallet.tsx


function ConnectWalletComponent({ ual  }) {
    function handleLogin() {
        ual.showModal();
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container py-8",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-8 justify-center items-center bg-neutral-800 rounded-xl h-[calc(100vh-14rem)]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "headline-3",
                    children: "You need to connect your wallet to continue."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    className: "btn btn-connect-wallet",
                    onClick: handleLogin,
                    children: "Connect Wallet"
                })
            ]
        })
    });
}
const ConnectWallet = (0,ual_compat/* withUAL */.D)(ConnectWalletComponent);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/configs/globalsConfig.ts
var globalsConfig = __webpack_require__(6903);
;// CONCATENATED MODULE: ./src/components/NotAllowed.tsx




function NotAllowed() {
    const router = (0,router_.useRouter)();
    const chainKey = router.query.chainKey ?? globalsConfig/* chainKeyDefault */.Ly;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container py-8",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-8 justify-center items-center bg-neutral-800 rounded-xl h-[calc(100vh-14rem)]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "headline-3",
                    children: "You don't have authorization."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/${chainKey}`,
                    className: "btn",
                    children: "My Collections"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/hooks/usePermission.tsx


function usePermission({ loggedAccountName , collectionAuthor , collectionAuthorizedAccounts  }) {
    const isAuthorized = loggedAccountName === collectionAuthor || collectionAuthorizedAccounts.includes(loggedAccountName);
    return {
        PermissionDenied: !loggedAccountName ? ConnectWallet : !isAuthorized ? NotAllowed : null
    };
}


/***/ })

};
;