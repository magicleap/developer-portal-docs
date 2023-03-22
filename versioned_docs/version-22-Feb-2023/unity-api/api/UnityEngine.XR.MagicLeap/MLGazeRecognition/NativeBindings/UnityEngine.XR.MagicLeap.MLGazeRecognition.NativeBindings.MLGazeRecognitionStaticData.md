---
title: MLGazeRecognitionStaticData
summary: static information about the gaze recognition system. populate with mlgazerecognitiongetstaticdata. 

---

# MLGazeRecognitionStaticData




Static information about the Gaze Recognition system. Populate with MLGazeRecognitionGetStaticData().   





## Public Methods

###  MLGazeRecognitionStaticData {#functions-mlgazerecognitionstaticdata}

```csharp
public MLGazeRecognitionStaticData(
    uint setVersion
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |setVersion||






-----------

## Public Attributes

### Vergence {#readonly-vergence}

Location of the 3D vergence point, intersection of 3D gaze vectors. 

```csharp

public readonly NativeBindings.MLCoordinateFrameUID Vergence;

```

| Type | Description  | 
|--|--|
| readonly [NativeBindings.MLCoordinateFrameUID](/versioned_docs/version-22-Feb-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) | A unique identifier which represents a coordinate frame. The unique identifier is comprised of two values.  |





-----------

### Version {#readonly-uint-version}

Version of this structure. 

```csharp

public readonly uint Version;

```






-----------


