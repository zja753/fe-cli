"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var index_1 = require("../../tools/index");
function GitPlugin(args) {
    console.log("args JD>>> ", args);
    /**
     * 打开当前项目对应 git 页面
     */
    if (args.includes('o')) {
        var packageJsonData = JSON.parse((0, fs_1.readFileSync)('package.json', 'utf8'));
        var homepage = packageJsonData.homepage;
        console.log("packageJsonData JD>>> ", packageJsonData);
        homepage && (0, index_1.open)(homepage);
    }
    console.log("JD>>> GitPlugin");
}
exports.default = GitPlugin;
