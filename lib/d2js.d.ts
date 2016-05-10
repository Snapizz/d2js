declare module "d2js" {
  export * from "d2js/data";
}

declare module "d2js/data" {
  interface GameDataFileAccessor {
    counter: number;
    register(...entries: {key: string, path: string}[]): void;
    getClassDefinition(key: string, idx: number): any;
    getObject(key: string, idx: number): any;
    getObjects(key: string, f?: (e: any) => boolean, limit?: number, m?: (e: any) => any): Array<any>;
    map(key: string, m?: (e: any) => Array<any>): Array<any>;
  }
  interface I18nFileAccessor {
    register(...entries: {key: string, path: string}[]): void;
    overrideId(key: string, idx1: number, idx2: number): void;
    getOrderIndex(key: string, idx: number): number;
    getText(key: string, idx: number): string;
    getUnDiacriticalText(key: string, idx: number): string;
    hasText(key: string, idx: number): boolean;
    getNamedText(key: string, name: string): string;
    hasNamedText(key: string, name: string): boolean;
    useDirectBuffer(key: string, value: boolean): void;
    getTexts(key: string, f?: (e: any) => boolean, limit?: number);
  }
  export const D2P: GameDataFileAccessor;
  export const D2I: I18nFileAccessor;
}