#include <stdio.h>
#include <arrayBuffer.cc>
typedef float float32;

class CFloat32Array
{
public:
    CArrayBuffer* buffer;
    int byteOffset;
    int byteLength;

private:
    int _length;
    bool _deleteBuffer;

public:
    CFloat32Array(int length) {
        this->buffer = new CArrayBuffer(length* sizeof(float32));
        this->_length = length;
        this->_deleteBuffer = true;
    }

    CFloat32Array(CArrayBuffer* buffer, int byteOffset, int length) {
        this->buffer = buffer;
        this->byteOffset = byteOffset;
        this->_length = length;
        this->byteLength = length;
    }

    ~CFloat32Array();
};