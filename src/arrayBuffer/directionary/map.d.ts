/**
 *  向下兼容的map list
 * */
export declare class Dictionary<T> {
    private _items;
    private _count;
    constructor(useES6Map?: boolean);
    set(key: string, value: T): void;
    get length(): number;
    contains(key: string): boolean;
    find(key: string): T | undefined;
    insert(key: string, value: T): void;
    remove(key: string): boolean;
    get keys(): string[];
    get values(): T[];
    toString(): string;
}
