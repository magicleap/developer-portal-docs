---
title: MLFacialExpressionEyeData
summary: a structure containing information about eye expressions. this structure must be initialized by calling mlfacialexpressioneyedatainit before use. 

---

# MLFacialExpressionEyeData




A structure containing information about eye expressions. This structure must be initialized by calling MLFacialExpressionEyeDataInit before use.   





## Public Methods

### [MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/NativeBindings/UnityEngine.XR.MagicLeap.MLFacialExpression.NativeBindings.MLFacialExpressionEyeData.md) Init {#mlfacialexpressioneyedata-init}

```csharp
public static MLFacialExpressionEyeData Init(
    uint version =1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |version||






-----------

## Public Attributes

### EyeExpressionWeights {#float-eyeexpressionweights}

An array of floats of size eye&#95;expression&#95;count. The values are between 0 and 1 and ordered such that the array can be indexed using MLFacialExpressionEyeExpressionType. 

```csharp

public float [] EyeExpressionWeights;

```






-----------

### Timestamp {#long-timestamp}

The [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) timestamp when expression data was updated. 

```csharp

public long Timestamp;

```






-----------

### Version {#uint-version}

Version of the structure. 

```csharp

public uint Version;

```






-----------


