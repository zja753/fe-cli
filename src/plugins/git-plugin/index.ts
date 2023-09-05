import { readFileSync } from 'fs';
import { open } from '../../tools/index'

export default function GitPlugin(args: string[]) {

    console.log(`args JD>>> `, args);

    /**
     * 打开当前项目对应 git 页面
     */
    if (args.includes('o')) {

        const packageJsonData = JSON.parse(readFileSync('package.json', 'utf8'))

        const { homepage } = packageJsonData;

        console.log(`packageJsonData JD>>> `, packageJsonData);

        homepage && open(homepage)
    }

    console.log(`JD>>> GitPlugin`);
}