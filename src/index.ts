#!/usr/bin/env node --experimental-specifier-resolution=node

import plugins from "./plugins";

const argv = process.argv;

const plugin = plugins[argv[2]];

if (plugin) {
    plugin(argv.slice(3))
}
else {
    console.error(`插件${argv[2]}不存在!`)
} 




