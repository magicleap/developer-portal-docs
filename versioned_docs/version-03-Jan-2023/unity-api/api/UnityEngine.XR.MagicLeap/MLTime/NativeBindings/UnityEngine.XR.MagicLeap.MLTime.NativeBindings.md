---
title: NativeBindings
summary: see ml-time.h for additional comments. 

---

# NativeBindings




See ml&#95;time.h for additional comments.   


Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLTimeConvertMLTimeToSystemTime {#mlresultcode-mltimeconvertmltimetosystemtime}

```csharp
public MLResult.Code MLTimeConvertMLTimeToSystemTime(
    long mlTime,
    IntPtr timeSpec
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| long |mlTime||
| IntPtr |timeSpec||






-----------

### [MLResult.Code](/versioned_docs/version-03-Jan-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLTimeConvertSystemTimeToMLTime {#mlresultcode-mltimeconvertsystemtimetomltime}

```csharp
public MLResult.Code MLTimeConvertSystemTimeToMLTime(
    IntPtr timeSpec,
    out long mlTime
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |timeSpec||
| out long |mlTime||






-----------

