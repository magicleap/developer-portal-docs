---
title: MLTextureUtils
summary: class containing utility functions to convert unity texture to magic leap os compatible data structures. 

---

# MLTextureUtils



**NameSpace:** 
[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) 


Class containing utility functions to convert Unity Texture to  Magic Leap  OS compatible data structures.   





## Public Methods

### byte [] ConvertToByteArray {#byte-converttobytearray}

Convert Unity Texture2D to a byte array. Texture2D should be in one of the following formats: DXT1, RGBA32, RGB24. For DXT1 and RGBA32, resulting byte array is in RGBA format. For RGB24, resulting byte array is in RGB format. The origin of the byte array will be at the top left corner. Returns null on unsupported formats. 

```csharp
public static byte [] ConvertToByteArray(
    Texture2D texture,
    out int numChannels
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Texture2D |texture|Texture to extract byte array from|
| out int |numChannels|Out parameter to determine how many bytes per pixel|






**Returns**: Returns an array of bytes that holds the converted texture



-----------


