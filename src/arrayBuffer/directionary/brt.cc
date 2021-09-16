#include <stdio.h>
#include <map>
#include <unordered_map>

using namespace std;
typedef map<string, string> StringMap;
typedef StringMap::iterator StringMapIter;
typedef unordered_map<string, string> StringHashMap;
typedef StringHashMap::iterator StringHashMapIter;

int main() {
    printf("Red Black Tree:");

    StringMap strmap;

    strmap["a"] = "a";
    
}