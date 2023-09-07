import { readFileSync } from "fs";
import { open } from "../../tools";
import { IFeCliPlugin } from "../../interface";

export default (function GitPlugin(args) {

  /**
   * 打开当前项目对应 git 页面
   */
  if (args.includes("o")) {
    const packageJsonData = JSON.parse(readFileSync("package.json", "utf8"));

    const { homepage } = packageJsonData;


    homepage && open(homepage);
  }

} as IFeCliPlugin);
