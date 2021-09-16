#include <stdio.h>
#include <string.h>
#include <arrayBuffer.cc>

typedef unsigned short uint16;
typedef float float32;

class CDataView
{
public:
    CArrayBuffer* buffer;
    int byteOffset;
    int byteLength;
    CDataView(CArrayBuffer* pBuffer, int byteOffset, int byteLength);

    void setFloat32(int offset, float32 value);
    float32 getFloat32(int offset);
    void setUint16(int offset, uint16 value);
    uint16 getUint16(int offset);
};

CDataView::CDataView(CArrayBuffer* pBuffer, int byteOffset, int byteLength)
{
    this->buffer = pBuffer;
    this->byteOffset = byteOffset;
    this->byteLength = byteLength;
};

void CDataView::setFloat32(int offset, float32 value) {
    memcpy(this->buffer->pData + (this->byteOffset + offset), &value, sizeof(float32));
};

float32 CDataView::getFloat32(int offset) {
    return *((float32*) (this->buffer->pData + (this->byteOffset + offset)));
};

void CDataView::setUint16(int offset, uint16 value) {
    memcpy(this->buffer->pData + (this->byteOffset + offset), &value, sizeof(uint16));
};

uint16 CDataView::getUint16(int offset) {
    return *((uint16*) (this->buffer->pData + (this->byteOffset + offset)));
};