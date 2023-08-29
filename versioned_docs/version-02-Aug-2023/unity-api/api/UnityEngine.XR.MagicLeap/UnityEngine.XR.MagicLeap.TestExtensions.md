---
title: TestExtensions

---

# TestExtensions



**NameSpace:** 
[MagicLeap](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 








## Public Methods

### void AssertOk {#void-assertok}

```csharp
public static void AssertOk(
    this MLResult mlResult,
    string methodName ="The API",
    params MLResult.Code[] validResultCodes
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| this [MLResult](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |mlResult|Magic Leap API return value. |
| string |methodName||
| params [MLResult.Code](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#int-code)[] |validResultCodes|Identifier of Magic Leap API results. |






-----------


