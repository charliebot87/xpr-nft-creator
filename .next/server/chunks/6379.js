"use strict";
exports.id = 6379;
exports.ids = [6379,9635,3267,6138];
exports.modules = {

/***/ 9635:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAccountsService": () => (/* binding */ getAccountsService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getAccountsService(chainKey, { collectionName , schemaName , templateID , page , limit , owner  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/accounts`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url, {
        params: {
            collection_name: collectionName,
            schema_name: schemaName,
            template_id: templateID,
            owner,
            page: page || 1,
            limit: limit || 1000,
            order: "desc",
            sort: "asset_id"
        }
    });
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomSeedService": () => (/* binding */ getRandomSeedService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getRandomSeedService() {
    try {
        const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get("https://www.random.org/strings/", {
            params: {
                num: 1,
                len: 8,
                digits: "on",
                upperalpha: "on",
                loweralpha: "on",
                unique: "on",
                format: "plain",
                rnd: "new"
            }
        });
        return response.data.trim();
    } catch (error) {
        console.error("Error fetching random seed:", error.message);
        return null;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6379:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakArray": () => (/* binding */ breakArray),
/* harmony export */   "checkIfCollectionExists": () => (/* binding */ checkIfCollectionExists),
/* harmony export */   "continueAirdropBatchTransactions": () => (/* binding */ continueAirdropBatchTransactions),
/* harmony export */   "convertErrorToString": () => (/* binding */ convertErrorToString),
/* harmony export */   "filterRepeatedElements": () => (/* binding */ filterRepeatedElements),
/* harmony export */   "handleAccounts": () => (/* binding */ handleAccounts),
/* harmony export */   "handleAccountsFilters": () => (/* binding */ handleAccountsFilters),
/* harmony export */   "handleAirdropByAssetID": () => (/* binding */ handleAirdropByAssetID),
/* harmony export */   "handleAirdropByTemplateID": () => (/* binding */ handleAirdropByTemplateID),
/* harmony export */   "handleAssets": () => (/* binding */ handleAssets),
/* harmony export */   "handleTemplates": () => (/* binding */ handleTemplates),
/* harmony export */   "randomizeArray": () => (/* binding */ randomizeArray)
/* harmony export */ });
/* harmony import */ var seed_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9237);
/* harmony import */ var seed_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(seed_random__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_getAccountsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9635);
/* harmony import */ var _services_getRandomSeedService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3267);
/* harmony import */ var _services_inventory_getInventoryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2818);
/* harmony import */ var _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8014);
/* harmony import */ var _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1689);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_getAccountsService__WEBPACK_IMPORTED_MODULE_1__, _services_getRandomSeedService__WEBPACK_IMPORTED_MODULE_2__, _services_inventory_getInventoryService__WEBPACK_IMPORTED_MODULE_3__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_4__, _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_5__]);
([_services_getAccountsService__WEBPACK_IMPORTED_MODULE_1__, _services_getRandomSeedService__WEBPACK_IMPORTED_MODULE_2__, _services_inventory_getInventoryService__WEBPACK_IMPORTED_MODULE_3__, _services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_4__, _services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function handleTemplates({ chainKey , templates , collectionName , callback , setError , field  }) {
    setError(field, {
        type: "manual",
        message: ""
    });
    if (templates.length > 0) {
        const invalidTemplates = [];
        const validTemplates = [];
        const templatesArray = templates.split(",");
        for (const template of templatesArray){
            try {
                const { data: templatesList  } = await (0,_services_collection_collectionTemplatesService__WEBPACK_IMPORTED_MODULE_5__/* .collectionTemplatesService */ .B)(chainKey, {
                    templateId: template,
                    collectionName
                });
                if (templatesList.data.length > 0) {
                    validTemplates.push(templatesList.data[0]);
                } else {
                    invalidTemplates.push(template);
                }
            } catch (error) {
                invalidTemplates.push(template);
            }
        }
        if (invalidTemplates.length > 0) {
            setError(field, {
                type: "manual",
                message: `Template ID #${invalidTemplates.toString()} is invalid.`
            });
        }
        if (callback) {
            callback({
                valid: !!validTemplates,
                template: validTemplates ? validTemplates[0] : {}
            });
        }
    }
    return;
}
function shuffleArrayWithSeed(array, seedValue) {
    const random = seed_random__WEBPACK_IMPORTED_MODULE_0___default()(seedValue, {
        global: true
    });
    for(let i = array.length - 1; i > 0; i--){
        const randomIndex = Math.floor(random() * (i + 1));
        [array[i], array[randomIndex]] = [
            array[randomIndex],
            array[i]
        ];
    }
    return array;
}
async function randomizeArray({ array , setValue , field  }) {
    try {
        const seed = await (0,_services_getRandomSeedService__WEBPACK_IMPORTED_MODULE_2__.getRandomSeedService)();
        if (!seed) return;
        const shuffledArray = shuffleArrayWithSeed(array, seed);
        setValue(field, shuffledArray.toString());
    } catch (error) {
        console.error("Error:", error.message);
    }
}
function handleAirdropByAssetID({ ual , recipients , assets , memo  }) {
    const newActions = [];
    recipients.forEach((account, index)=>{
        if (assets[index]) {
            newActions.push({
                account: "atomicassets",
                name: "transfer",
                authorization: [
                    {
                        actor: ual.activeUser.accountName,
                        permission: ual.activeUser.requestPermission
                    }
                ],
                data: {
                    from: ual.activeUser.accountName,
                    to: account,
                    asset_ids: [
                        assets[index]
                    ],
                    memo
                }
            });
        }
    });
    return newActions;
}
function handleAirdropByTemplateID({ ual , recipients , templateID , schemaName , collectionName  }) {
    const newActions = [];
    recipients.forEach((account)=>{
        newActions.push({
            account: "atomicassets",
            name: "mintasset",
            authorization: [
                {
                    actor: ual.activeUser.accountName,
                    permission: ual.activeUser.requestPermission
                }
            ],
            data: {
                authorized_minter: ual.activeUser.accountName,
                collection_name: collectionName,
                schema_name: schemaName,
                template_id: templateID,
                new_asset_owner: account,
                immutable_data: [],
                mutable_data: [],
                tokens_to_back: []
            }
        });
    });
    return newActions;
}
function breakArray(array, size) {
    const length = array.length;
    const segmentLength = Number(size);
    const segments = [];
    for(let i = 0; i < length; i += segmentLength){
        segments.push(array.slice(i, i + segmentLength));
    }
    return segments;
}
function continueAirdropBatchTransactions({ transactionBatch , setActions  }) {
    const newActions = [];
    for (const transaction of transactionBatch){
        for (const action of transaction){
            newActions.push(action);
        }
    }
    setActions(newActions);
}
function filterRepeatedElements(array) {
    const uniqueArray = [
        ...new Set(array)
    ];
    return uniqueArray;
}
async function checkIfCollectionExists({ chainKey , collections , setError , field  }) {
    setError(field, {
        type: "manual",
        message: ""
    });
    const invalidCollections = [];
    for (const collection of collections.split(",")){
        try {
            await (0,_services_collection_getCollectionService__WEBPACK_IMPORTED_MODULE_4__/* .getCollectionService */ .R)(chainKey, {
                collectionName: collection
            });
        } catch (error) {
            invalidCollections.push(collection);
        }
        if (invalidCollections.length > 0) {
            setError(field, {
                type: "manual",
                message: `Invalid collections: ${invalidCollections}`
            });
        }
    }
}
async function handleAccounts({ collection , template , chainKey  }) {
    const accounts = [];
    let currentPage = 1;
    while(true){
        const { data: accountsList  } = await (0,_services_getAccountsService__WEBPACK_IMPORTED_MODULE_1__.getAccountsService)(chainKey, {
            collectionName: collection,
            page: currentPage,
            templateID: template
        });
        if (accountsList.data.length === 0) {
            break;
        }
        accounts.push(...accountsList.data);
        currentPage++;
    }
    return accounts;
}
function convertErrorToString(error) {
    return typeof error === "object" ? error.message : error;
}
async function handleAccountsFilters({ collections , templates , chainKey , quantity , search , unique  }) {
    const accounts = [];
    const newAccounts = [];
    const collectionsList = collections ? collections.split(",") : null;
    const templatesList = templates ? templates.split(",") : null;
    if (search !== "notHoldingTemplate") {
        if (unique) {
            const result = await handleAccounts({
                collection: collections,
                template: templates,
                chainKey
            });
            accounts.push(...result);
        } else {
            await Promise.all((templatesList || collectionsList).map(async (element)=>{
                const result = await handleAccounts({
                    collection: collectionsList?.length > 0 ? element : "",
                    template: templatesList?.length > 0 ? element : "",
                    chainKey
                });
                result.forEach((account)=>{
                    for(let i = 0; i < Number(account.assets); i++){
                        accounts.push(account);
                    }
                });
            }));
        }
    } else {
        const collectionAccounts = [];
        const templateAccounts = [];
        const accountsByCollection = await handleAccounts({
            collection: collections,
            chainKey
        });
        collectionAccounts.push(...accountsByCollection);
        const accountsByTemplate = await handleAccounts({
            template: templates,
            collection: collections,
            chainKey
        });
        templateAccounts.push(...accountsByTemplate);
        const filteredAccounts = collectionAccounts.filter((item)=>!templateAccounts.some((element)=>item.account === element.account));
        if (unique) {
            const uniqueAccounts = [
                ...new Set(filteredAccounts)
            ];
            accounts.push(...uniqueAccounts);
        } else {
            filteredAccounts.forEach((account)=>{
                for(let i = 0; i < Number(account.assets); i++){
                    accounts.push(account);
                }
            });
        }
    }
    accounts.map((item)=>{
        if (Number(item.assets) >= quantity) {
            newAccounts.push(item.account);
        }
    });
    return newAccounts;
}
async function handleAssets({ accountName , chainKey , templateID  }) {
    const assets = [];
    let currentPage = 1;
    while(true){
        const { data: inventory  } = await (0,_services_inventory_getInventoryService__WEBPACK_IMPORTED_MODULE_3__/* .getInventoryService */ .v)(chainKey, {
            owner: accountName,
            template_id: templateID,
            page: currentPage,
            limit: 1000
        });
        if (inventory.data.length === 0) {
            break;
        }
        inventory.data.map((asset)=>{
            assets.push(asset.asset_id);
        });
        currentPage++;
    }
    return assets;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ collectionTemplatesService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function collectionTemplatesService(chainKey, { collectionName , page , offset , templateId  }) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/templates`;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url, {
        params: {
            collection_name: collectionName || "",
            template_id: templateId || "",
            page: page || 1,
            limit: 12,
            offset: offset || 12,
            order: "desc",
            sort: "created"
        }
    });
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ getInventoryService)
/* harmony export */ });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8125);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api__WEBPACK_IMPORTED_MODULE_0__]);
_libs_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getInventoryService(chainKey, options) {
    const url = `${_configs_chainsConfig__WEBPACK_IMPORTED_MODULE_1__[chainKey].aaEndpoint}/atomicassets/v1/assets`;
    const { page =1 , offset =0 , owner , collection_name , template_id , limit  } = options;
    const response = await _libs_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(url, {
        params: {
            owner,
            collection_name,
            template_id,
            page,
            limit: limit || 12,
            offset,
            order: "desc",
            sort: "transferred_at_time"
        }
    });
    return response;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;