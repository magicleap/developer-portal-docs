---
title: MLFacialExpressionSettings
summary: a structure containing settings for the facial expressions. this structure must be initialized by calling #mlfacialexpressionsettingsinit before use. and calling zerostruct on our side. 

---

# MLFacialExpressionSettings




A structure containing settings for the facial expressions. This structure must be initialized by calling #MLFacialExpressionSettingsInit before use. (And calling ZeroStruct on our side.)   





## Public Methods

### [MLFacialExpressionSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/NativeBindings/UnityEngine.XR.MagicLeap.MLFacialExpression.NativeBindings.MLFacialExpressionSettings.md) Init {#mlfacialexpressionsettings-init}

```csharp
public static MLFacialExpressionSettings Init(
    uint version =1
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |version||






-----------

## Public Attributes

### EnableEyeExpression {#bool-enableeyeexpression}

Enable [MLFacialExpressionEyeData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/NativeBindings/UnityEngine.XR.MagicLeap.MLFacialExpression.NativeBindings.MLFacialExpressionEyeData.md). If true, facial expressions will detect #MLFacialExpressionEyeData and the same can queried using MLFacialExpressionGetEyeData. This should be disabled when app does not need facial expression data. 

```csharp

public bool EnableEyeExpression;

```






-----------

### Version {#uint-version}

Version of this settings 

```csharp

public uint Version;

```






-----------


