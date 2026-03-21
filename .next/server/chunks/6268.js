"use strict";
exports.id = 6268;
exports.ids = [6268];
exports.modules = {

/***/ 6268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ withUAL)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Provider_AuthProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9517);
/* harmony import */ var _services_proton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9030);
// UAL compatibility layer - wraps our AuthProvider to look like UAL
// So existing pages using `withUAL` and `ual.activeUser` still work




// Create a fake UAL activeUser that wraps our ProtonSDK session
function createActiveUser(actor, permission) {
    return {
        accountName: actor,
        requestPermission: permission,
        chainId: "384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0" || 0,
        chain: {
            chainId: "384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0" || 0
        },
        signTransaction: async (transaction, options)=>{
            return _services_proton__WEBPACK_IMPORTED_MODULE_3__/* ["default"].transact */ .Z.transact(transaction.actions || [
                transaction
            ]);
        }
    };
}
// HOC that replaces withUAL - injects ual prop from AuthContext
function withUAL(Component) {
    const WrappedComponent = (props)=>{
        const { currentUser , login , logout  } = (0,_components_Provider_AuthProvider__WEBPACK_IMPORTED_MODULE_2__/* .useAuthContext */ .E)();
        const ual = {
            activeUser: currentUser ? createActiveUser(currentUser.actor, currentUser.permission) : null,
            showModal: ()=>{
                console.log("[UAL-compat] showModal called");
                login();
            },
            logout: logout
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...props,
            ual: ual
        });
    };
    WrappedComponent.displayName = `withUAL(${Component.displayName || Component.name || "Component"})`;
    return WrappedComponent;
}


/***/ })

};
;