---
title: MLTime
summary: represents an ml api wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. if openxr is used, mltime is synonymous with the xrtime type. 

---

# MLTime



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. If [OpenXR](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) is used, [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) is synonymous with the XrTime type.   [More...](#detailed-description)  




## Detailed Description

```csharp
public class MLTime; 
```


**Details**

API for converting between system and runtime clock timestamps. 





-----------



## Public Fields

### Value {#long-value}

```csharp

public long Value { get; set; }

```






-----------

## Public Methods

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ConvertMLTimeToSystemTime {#mlresult-convertmltimetosystemtime}

Converts timestamps from [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) to system time. System time is equivalent to the system's monotonic clock. This can be used to calculate duration between two [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) values by converting them both to a timespec and subtracting the subsequent values. 

```csharp
public static MLResult ConvertMLTimeToSystemTime(
    MLTime mlTime,
    out long timestampNs
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) |mlTime|Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. If [OpenXR](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) is used, [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) is synonymous with the XrTime type. |
| out long |timestampNs||






-----------

### [MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) ConvertSystemTimeToMLTime {#mlresult-convertsystemtimetomltime}

Converts timestamps from system time to [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md). System time is equivalent to the system's monotonic clock. 

```csharp
public static MLResult ConvertSystemTimeToMLTime(
    long timestampNs,
    out MLTime mlTime
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| long |timestampNs||
| out [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) |mlTime|Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. If [OpenXR](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) is used, [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) is synonymous with the XrTime type. |






-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

### implicit operator MLTime {#implicit-operator-mltime}

```csharp
public static implicit operator MLTime(
    long timestamp
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| long |timestamp||






-----------

### implicit operator long {#implicit-operator-long}

```csharp
public static implicit operator long(
    MLTime mltime
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) |mltime|Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. If [OpenXR](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) is used, [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) is synonymous with the XrTime type. |






-----------


