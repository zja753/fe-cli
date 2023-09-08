export interface IFeCliPlugin {
  (args: string[]): Promise<void>;
}
