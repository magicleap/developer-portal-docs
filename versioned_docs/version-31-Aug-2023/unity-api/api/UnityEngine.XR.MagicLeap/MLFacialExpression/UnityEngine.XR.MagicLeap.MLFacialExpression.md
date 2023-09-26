---
title: MLFacialExpression

---

# MLFacialExpression



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 





Inherits from: <br></br>[MLAutoAPISingleton< MLFacialExpression >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) GetEyeData {#mlresultcode-geteyedata}

Get the latest eye data from the Facial Expression system. 

```csharp
public static MLResult.Code GetEyeData(
    out EyeData data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out [EyeData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/UnityEngine.XR.MagicLeap.MLFacialExpression.EyeData.md) |data|A structure containing information about eye expressions. |






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) UpdateSettings {#mlresultcode-updatesettings}

Updates Facial Expression system with new settings. 

```csharp
public static MLResult.Code UpdateSettings(
    in Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [Settings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/UnityEngine.XR.MagicLeap.MLFacialExpression.Settings.md) |settings|A structure containing settings for the facial expressions. |






**Returns**: 



-----------

## Protected Methods

### StartAPI {#override-startapi}

Start the API. 

```csharp
protected virtual override MLResult.Code StartAPI()
```




**Reimplements**: [StartAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

Stop the API. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

## Public Enums

### EyeExpressionType {#enums-eyeexpressiontype}

Available facial expressions. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BlinkLeft | 0| Blinking the left eye.   |
| BlinkRight | | Blinking of the right eye.   |
| LidTightenerLeft | | Lower Lid upward movement of the left eye.   |
| LidTightenerRight | | Lower Lid upward movement of the right eye.   |
| EyeOpennessLeft | | Upper lid upward movement of the left eye.   |
| EyeOpennessRight | | Upper lid upward movement of the right eye.   |
| CheekRaiserLeft | | Upward cheek movement, left.   |
| CheekRaiserRight | | Upward cheek movement, right.   |
| BrowLowererLeft | | Downward brow movement, left.   |
| BrowLowererRight | | Downward brow movement, right.   |
| BrowRaiserLeft | | Upward brow movement, left side.   |
| BrowRaiserRight | | Upward brow movement, right side.   |








-----------


