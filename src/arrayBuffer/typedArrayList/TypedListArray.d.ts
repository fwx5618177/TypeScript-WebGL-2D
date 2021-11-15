export declare class TypedArrayList<T extends Uint16Array | Float32Array | Uint8Array> {
    private _array;
    private _typedArrayConstructor;
    private _length;
    private _capacity;
    constructor(typedArrayConstructor: new (capacity: number) => T, capacity?: number);
}
