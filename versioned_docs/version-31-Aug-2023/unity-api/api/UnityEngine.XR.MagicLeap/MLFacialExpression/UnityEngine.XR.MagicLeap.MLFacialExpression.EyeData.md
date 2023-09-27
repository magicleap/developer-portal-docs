---
title: EyeData
summary: a structure containing information about eye expressions. 

---

# EyeData




A structure containing information about eye expressions.   





## Public Attributes

### EyeExpressionWeights {#float-eyeexpressionweights}

The values are between 0 and 1 and ordered such that the array should be indexed using EyeExpressionType. 

```csharp

public float [] EyeExpressionWeights;

```






-----------

### Timestamp {#mltime-timestamp}

The [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) timestamp when expression data was updated. 

```csharp

public MLTime Timestamp;

```

| Type | Description  | 
|--|--|
| [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) | Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. If [OpenXR](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) is used, [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) is synonymous with the XrTime type.  |





-----------


