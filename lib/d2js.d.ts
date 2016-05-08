declare module "d2js" {
  export * from "d2js/data";
}

declare module "d2js/data" {
  interface GameDataFileAccessor {
    counter: number;
    init(filename: string): void;
    getClassDefinition(idx: number): any;
    getObject(idx: number): any;
    getObjects(f?: (e: any) => boolean, limit?: number, m?: (e: any) => any): Array<any>;
    map(m?: (e: any) => Array<any>): Array<any>;
  }
  interface I18nFileAccessor {
    init(filename: string): void;
    overrideId(idx1: number, idx2: number): void;
    getOrderIndex(idx: number): number;
    getText(idx: number): string;
    getUnDiacriticalText(idx: number): string;
    hasText(idx: number): boolean;
    getNamedText(key: string): string;
    hasNamedText(key: string): boolean;
    useDirectBuffer(value: boolean): void;
    getTexts(f?: (e: any) => boolean, limit?: number);
  }
  export const D2P: GameDataFileAccessor;
  export const D2I: I18nFileAccessor;
}