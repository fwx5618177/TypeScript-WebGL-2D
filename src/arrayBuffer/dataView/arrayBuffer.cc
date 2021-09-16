#include <stdio.h>

typedef unsigned char Byte;

using namespace std;

class CArrayBuffer {
    public:
    CArrayBuffer(int byteLength = 8) {
        this->_byteLength = byteLength;
        this->pData = new Byte[byteLength];
    }

    ~CArrayBuffer() {
        if(this->pData != NULL) {
            delete[] this->pData;
            this->pData = NULL;
        }
    }

    int byteLength() {
        return this->_byteLength;
    }

    public:
        Byte *pData;
    private:
        int _byteLength;
};