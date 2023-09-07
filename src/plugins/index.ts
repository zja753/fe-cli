import { IFeCliPlugin } from "../interface";
import GitPlugin from "./git-plugin";

export default {
  git: GitPlugin,
} as Partial<Record<string, IFeCliPlugin>>;
