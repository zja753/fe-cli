#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var plugins_1 = require("./plugins");
var argv = process.argv;
var plugin = plugins_1.default[argv[2]];
if (plugin) {
    plugin(argv.slice(3));
}
else {
    console.error("\u63D2\u4EF6".concat(argv[2], "\u4E0D\u5B58\u5728!"));
}
