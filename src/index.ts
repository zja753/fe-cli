#!/usr/bin/env node --experimental-specifier-resolution=node

import plugins from "./plugins";

const argv = process.argv;

const plugin = plugins[argv[2]];

(async () => {
  if (plugin) {
    await plugin(argv.slice(3));
    console.log("插件执行结束！");
  } else {
    console.error(`插件${argv[2]}不存在!`);
  }
})();
