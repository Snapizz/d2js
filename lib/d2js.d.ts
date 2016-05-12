declare module "d2js" {
  export * from "d2js/data";
}

declare module "d2js/data" {
  interface GameDataFileAccessor {
    register(...entries: {key: string, path: string}[]): void;
    getClassDefinition(key: string, idx: number): any;
    getObject<T>(key: string, idx: number): T;
    getObjects<T>(key: string, f?: (e: T) => boolean, limit?: number): T[];
    map<T>(key: string, m: (e: any) => T): T[];
  }
  interface I18nFileAccessor {
    register(...entries: IEntry[]): void;
    overrideId(key: string, idx1: number, idx2: number): void;
    getOrderIndex(key: string, idx: number): number;
    getText(key: string, idx: number): string;
    getUnDiacriticalText(key: string, idx: number): string;
    hasText(key: string, idx: number): boolean;
    getNamedText(key: string, name: string): string;
    hasNamedText(key: string, name: string): boolean;
    useDirectBuffer(key: string, value: boolean): void;
    getTexts(key: string, f?: (e: IText) => boolean, limit?: number): IText[];
  }
  interface IText {
    id: number;
    text: string;
  }
  interface IEntry {
    key: string;
    path: string;
  }
  export const D2P: GameDataFileAccessor;
  export const D2I: I18nFileAccessor;
}