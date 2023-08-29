---
title: MLSnapshotStaticData
summary: static information about the snapshot system. initalize this structure with mlsnapshotstaticdatainit and populate with mlsnapshotgetstaticdata

---

# MLSnapshotStaticData




Static information about the snapshot system. Initalize this structure with MLSnapshotStaticDataInit() and populate with [MLSnapshotGetStaticData()](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md#mlresultcode-mlsnapshotgetstaticdata)  





## Public Methods

### [MLSnapshotStaticData](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLSnapshotStaticData.md) Init {#mlsnapshotstaticdata-init}

```csharp
public static MLSnapshotStaticData Init()
```






-----------

## Public Attributes

### CoordWorldOrigin {#mlcoordinateframeuid-coordworldorigin}

Coordinate frame ID. 

```csharp

public MLCoordinateFrameUID CoordWorldOrigin;

```

| Type | Description  | 
|--|--|
| [MLCoordinateFrameUID](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) | A unique identifier which represents a coordinate frame. The unique identifier is comprised of two values.  |





-----------

### version {#uint32-version}

Version of this structure. 

```csharp

public UInt32 version;

```






-----------

