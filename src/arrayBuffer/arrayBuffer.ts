let buffer: ArrayBuffer = new ArrayBuffer(16);

let view0: DataView = new DataView(buffer);
view0.setFloat32(8, 99.99);
view0.setUint16(8+4, 2048);

console.log(view0.getFloat32(8));
console.log(view0.getUint16(8 + 4));

let view1: DataView = new DataView(buffer, 8, 8);
console.log(view1.getFloat32(0));
console.log(view1.getUint16(4));

