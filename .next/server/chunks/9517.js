"use strict";
exports.id = 9517;
exports.ids = [9517];
exports.modules = {

/***/ 9517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useAuthContext),
/* harmony export */   "H": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_proton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9030);



const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    currentUser: undefined,
    authError: "",
    isLoadingUser: true,
    login: ()=>Promise.resolve(),
    logout: ()=>Promise.resolve()
});
const useAuthContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
const AuthProvider = ({ children  })=>{
    const [isLoadingUser, setIsLoadingUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [authError, setAuthError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Restore session on mount (client-side only)
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (true) return;
        const restore = async ()=>{
            const { user , error  } = await _services_proton__WEBPACK_IMPORTED_MODULE_2__/* ["default"].restoreSession */ .Z.restoreSession();
            setIsLoadingUser(false);
            if (user) {
                setCurrentUser(user);
            }
        // Don't show error for restore failures - just means no cached session
        };
        restore();
    }, []);
    const login = async ()=>{
        console.log("[AuthProvider] login triggered");
        setAuthError("");
        const { user , error  } = await _services_proton__WEBPACK_IMPORTED_MODULE_2__/* ["default"].login */ .Z.login();
        if (error || !user) {
            setAuthError(error || "Login failed");
            return;
        }
        setCurrentUser(user);
    };
    const logout = async ()=>{
        await _services_proton__WEBPACK_IMPORTED_MODULE_2__/* ["default"].logout */ .Z.logout();
        setCurrentUser(undefined);
    };
    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            currentUser,
            authError,
            isLoadingUser,
            login,
            logout
        }), [
        currentUser,
        authError,
        isLoadingUser
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: value,
        children: children
    });
};


/***/ }),

/***/ 1345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _proton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2033);
/* harmony import */ var _proton_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_proton_js__WEBPACK_IMPORTED_MODULE_0__);

const endpoints = [
    "https" + "://" + "api.protonnz.com" + ":" + "443"
].filter(Boolean);
// Fallback if env not set
const defaultEndpoints = [
    "https://api.protonnz.com"
];
const rpcEndpoints = endpoints[0] && endpoints[0] !== "undefined://undefined:undefined" ? endpoints : defaultEndpoints;
const rpc = new _proton_js__WEBPACK_IMPORTED_MODULE_0__.JsonRpc(rpcEndpoints[0]);
const protonRpc = {
    rpc,
    endpoints: rpcEndpoints,
    getAccountData: async (account)=>{
        try {
            const { rows  } = await rpc.get_table_rows({
                code: "eosio.proton",
                scope: "eosio.proton",
                table: "usersinfo",
                lower_bound: account,
                upper_bound: account,
                limit: 1
            });
            if (rows.length > 0) {
                return {
                    name: rows[0].name || account,
                    avatar: rows[0].avatar || "",
                    isLightKYCVerified: rows[0].verified || false
                };
            }
            return {
                name: account,
                avatar: "",
                isLightKYCVerified: false
            };
        } catch  {
            return {
                name: account,
                avatar: "",
                isLightKYCVerified: false
            };
        }
    },
    getAccountBalance: async (account)=>{
        try {
            const { rows  } = await rpc.get_table_rows({
                code: "eosio.token",
                scope: account,
                table: "accounts",
                limit: 10
            });
            const xpr = rows.find((r)=>r.balance && r.balance.includes("XPR"));
            return xpr ? xpr.balance : "0.0000 XPR";
        } catch  {
            return "0.0000 XPR";
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (protonRpc);


/***/ }),

/***/ 9030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _proton_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1345);

// Lazy-loaded SDK — uses the IIFE bundle loaded via <Script> in _document.tsx
// which sets window.ProtonWebSDK, bypassing webpack's ESM/CJS interop issues
// with @proton/link and the dual-Svelte-runtime collision.
let ConnectWallet = null;
async function loadSDK() {
    if (!ConnectWallet) {
        console.log("[ProtonSDK] loading from window.ProtonWebSDK...");
        // Wait up to 5s for the script tag to load
        for(let i = 0; i < 50; i++){
            if (typeof window.ProtonWebSDK === "function") break;
            await new Promise((r)=>setTimeout(r, 100));
        }
        ConnectWallet = window.ProtonWebSDK;
        if (typeof ConnectWallet !== "function") {
            throw new Error("ProtonWebSDK not available — bundle script may not have loaded");
        }
        console.log("[ProtonSDK] loaded from window.ProtonWebSDK:", typeof ConnectWallet);
    }
}
class ProtonSDKService {
    auth = null;
    constructor(){
        this.appName = "XPR NFT Creator" || 0;
        this.requestAccount = "protonnz" || 0;
    }
    connect = async ({ restoreSession  })=>{
        await loadSDK();
        console.log("[ProtonSDK] calling ConnectWallet...");
        const { link , session  } = await ConnectWallet({
            linkOptions: {
                endpoints: _proton_rpc__WEBPACK_IMPORTED_MODULE_0__/* ["default"].endpoints */ .Z.endpoints,
                chainId: "384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0" || 0,
                restoreSession
            },
            transportOptions: {
                requestAccount: this.requestAccount,
                backButton: true
            },
            selectorOptions: {
                appName: this.appName,
                dialogRootNode: document.getElementById("proton-wallet-modal") || document.body
            }
        });
        console.log("[ProtonSDK] connected:", !!session);
        this.link = link;
        this.session = session;
        if (!session || !session.auth) {
            console.log("[ProtonSDK] no session or auth, skipping");
            return;
        }
        this.auth = {
            actor: session.auth.actor.toString(),
            permission: session.auth.permission.toString()
        };
        this.chainId = session.chainId;
        if (this.auth.actor) {
            this.accountData = await _proton_rpc__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getAccountData */ .Z.getAccountData(this.auth.actor);
        }
    };
    login = async ()=>{
        console.log("[ProtonSDK] login called");
        try {
            await this.connect({
                restoreSession: false
            });
            if (!this.session || !this.auth || !this.accountData) {
                throw new Error("An error has occurred while logging in");
            }
            const { avatar , isLightKYCVerified , name  } = this.accountData;
            return {
                user: {
                    actor: this.auth.actor,
                    avatar: avatar ? `data:image/jpeg;base64,${avatar}` : "/xpr-icon-white.png",
                    isLightKYCVerified,
                    name,
                    permission: this.auth.permission
                },
                error: ""
            };
        } catch (e) {
            console.error("[ProtonSDK] login error:", e);
            return {
                user: null,
                error: e.message || "An error has occurred while logging in"
            };
        }
    };
    logout = async ()=>{
        if (this.link && this.auth && this.chainId) {
            await this.link.removeSession(this.requestAccount, this.auth, this.chainId);
        }
        this.session = null;
        this.auth = null;
        this.link = null;
    };
    restoreSession = async ()=>{
        try {
            await this.connect({
                restoreSession: true
            });
            if (!this.session || !this.auth || !this.accountData) {
                throw new Error("No session to restore");
            }
            const { avatar , isLightKYCVerified , name  } = this.accountData;
            return {
                user: {
                    actor: this.auth.actor,
                    avatar: avatar ? `data:image/jpeg;base64,${avatar}` : "/xpr-icon-white.png",
                    isLightKYCVerified,
                    name,
                    permission: this.auth.permission
                },
                error: ""
            };
        } catch (e) {
            return {
                user: null,
                error: e.message || "An error has occurred while restoring session"
            };
        }
    };
    transact = async (actions)=>{
        if (!this.session) throw new Error("Not logged in");
        return this.session.transact({
            actions
        }, {
            broadcast: true
        });
    };
}
const ProtonSDK = new ProtonSDKService();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtonSDK);


/***/ })

};
;