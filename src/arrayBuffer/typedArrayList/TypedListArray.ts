export class TypedArrayList<T extends Uint16Array | Float32Array | Uint8Array> {
    private _array: T;
    private _typedArrayConstructor: ( new ( lengtn: number ) => T);
    private _length: number;
    private _capacity: number;

    public constructor( typedArrayConstructor: new (capacity: number) => T, capacity: number = 8) {
        this._typedArrayConstructor = typedArrayConstructor;
        this._capacity = capacity;

        if(this._capacity === 0)    this._capacity = 8;

        this._array = new this._typedArrayConstructor(this._capacity);
        this._length = 0;
    }
}