---
title: MagicLeapXrProviderNativeBindings

---

# MagicLeapXrProviderNativeBindings



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 





Inherits from: <br></br>[MagicLeapNativeBindings](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### ulong GetControllerTrackerHandle {#ulong-getcontrollertrackerhandle}

```csharp
public ulong GetControllerTrackerHandle()
```






-----------

### ulong GetEyeTrackerHandle {#ulong-geteyetrackerhandle}

```csharp
public ulong GetEyeTrackerHandle()
```






-----------

### ulong GetHandTrackerHandle {#ulong-gethandtrackerhandle}

```csharp
public ulong GetHandTrackerHandle()
```






-----------

### ulong GetHeadTrackerHandle {#ulong-getheadtrackerhandle}

```csharp
public ulong GetHeadTrackerHandle()
```






-----------

### ulong GetInputHandle {#ulong-getinputhandle}

```csharp
public ulong GetInputHandle()
```






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) GetUnityPose {#mlresultcode-getunitypose}

```csharp
public MLResult.Code GetUnityPose(
    MLCoordinateFrameUID cfuid,
    out Pose pose
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLCoordinateFrameUID](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) |cfuid|A unique identifier which represents a coordinate frame. The unique identifier is comprised of two values. |
| out Pose |pose||






-----------

### delegate void OnDebugMessageDelegate {#delegate-void-ondebugmessagedelegate}

Delegate describing the callback necessary to monitor when an debug message is received. 

```csharp
public delegate void OnDebugMessageDelegate(
    LogLevel logLevel,
    string message,
    IntPtr context
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| LogLevel |logLevel|The log level of the debug utils.|
| string |message|The debug message.|
| IntPtr |context|Pointer to a context object.|






-----------

### void PredictSnapshot {#void-predictsnapshot}

```csharp
public void PredictSnapshot(
    long predictionTimestamp,
    bool enableSnapshotPrediction
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| long |predictionTimestamp||
| bool |enableSnapshotPrediction||






-----------

### void ResetSnapshotPrediction {#void-resetsnapshotprediction}

```csharp
public void ResetSnapshotPrediction()
```






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) StartHapticsPattern {#mlresultcode-starthapticspattern}

```csharp
public MLResult.Code StartHapticsPattern(
    uint eventType,
    IntPtr buffer
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |eventType||
| IntPtr |buffer||






-----------

### [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) StopHaptics {#mlresultcode-stophaptics}

```csharp
public MLResult.Code StopHaptics()
```






-----------

## Public Attributes

### SettingsKey {#const-string-settingskey}

```csharp

public const string SettingsKey = "com.magicleap.unitysdk.settings";

```






-----------

## Public Enums

### LogLevel {#enums-loglevel}

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Fatal | |   |
| Error | |   |
| Warning | |   |
| Info | |   |
| Debug | |   |
| Verbose | |   |








-----------

