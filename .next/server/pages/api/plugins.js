"use strict";
(() => {
var exports = {};
exports.id = 9487;
exports.ids = [9487];
exports.modules = {

/***/ 8208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: ./src/pages/api/plugins.ts

async function handler(req, res) {
    try {
        const { path  } = req.query;
        const dirPath = `src/plugins/${path}`;
        const files = await external_fs_namespaceObject.promises.readdir(dirPath, {
            withFileTypes: true
        });
        const pluginInfo = [];
        for (const file of files){
            if (file.isDirectory()) {
                const configPath = `${dirPath}/${file.name}/config.ts`;
                try {
                    const configContent = await external_fs_namespaceObject.promises.readFile(configPath, "utf-8");
                    const name = configContent.match(/name: '(.+?)'/)?.[1];
                    const page = configContent.match(/page: '(.+?)'/)?.[1];
                    const description = configContent.match(/description: '([^']+)'/s)?.[1];
                    if (name) {
                        pluginInfo.push({
                            plugin: file.name,
                            label: name,
                            page,
                            description
                        });
                    }
                } catch (error) {
                    console.error(`Error reading ${configPath}`, error);
                }
            }
        }
        res.status(200).json(pluginInfo);
    } catch (error1) {
        console.error(error1);
        res.status(500).send("Internal Server Error");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8208));
module.exports = __webpack_exports__;

})();