import { readFileSync } from "fs";
import { open } from "../../tools";
import { IFeCliPlugin } from "../../interface";

/**
 * 关于 git 的各种命令行工具
 * fe git o: 打开当前项目对应的 git 地址
 * fe git stat: TODO 统计用户的 git commit 数据 
 */
export default (async function GitPlugin(args) {

  /**
   * 打开当前项目对应 git 页面
   */
  if (args.includes("o")) {
    const packageJsonData = JSON.parse(readFileSync("package.json", "utf8"));

    const { homepage } = packageJsonData;


    homepage && open(homepage);
  }

} as IFeCliPlugin);
