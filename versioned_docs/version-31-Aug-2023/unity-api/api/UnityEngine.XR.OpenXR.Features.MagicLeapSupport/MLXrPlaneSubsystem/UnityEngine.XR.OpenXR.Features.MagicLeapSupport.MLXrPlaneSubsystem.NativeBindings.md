---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLBeginPlaneDetection {#mlresultcode-mlbeginplanedetection}

```csharp
public MLResult.Code MLBeginPlaneDetection(
    ulong planesTracker,
    in XrTypes.MLXrPlaneDetectorBeginInfo beginInfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |planesTracker||
| in XrTypes.MLXrPlaneDetectorBeginInfo |beginInfo||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLGetPlaneDetectionState {#mlresultcode-mlgetplanedetectionstate}

```csharp
public MLResult.Code MLGetPlaneDetectionState(
    ulong planesTracker,
    out XrTypes.MLXrPlaneDetectionState state
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |planesTracker||
| out XrTypes.MLXrPlaneDetectionState |state||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLGetPlaneDetections {#mlresultcode-mlgetplanedetections}

```csharp
public MLResult.Code MLGetPlaneDetections(
    ulong planesDetector,
    out XrTypes.MLXrPlaneDetectorLocations planeLocations
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |planesDetector||
| out XrTypes.MLXrPlaneDetectorLocations |planeLocations||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLGetPlanePolygonBuffer {#mlresultcode-mlgetplanepolygonbuffer}

```csharp
public MLResult.Code MLGetPlanePolygonBuffer(
    ulong planeDetector,
    ulong planeId,
    uint polygonBufferIndex,
    out XrTypes.MLXrPlaneDetectorPolygonBuffer polygonBuffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |planeDetector||
| ulong |planeId||
| uint |polygonBufferIndex||
| out XrTypes.MLXrPlaneDetectorPolygonBuffer |polygonBuffer||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLOpenXRCreatePlaneTracker {#mlresultcode-mlopenxrcreateplanetracker}

```csharp
public MLResult.Code MLOpenXRCreatePlaneTracker(
    out ulong planesTracker
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| out ulong |planesTracker||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLOpenXRDestroyPlaneTracker {#mlresultcode-mlopenxrdestroyplanetracker}

```csharp
public MLResult.Code MLOpenXRDestroyPlaneTracker(
    ulong planesTracker
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |planesTracker||






-----------


