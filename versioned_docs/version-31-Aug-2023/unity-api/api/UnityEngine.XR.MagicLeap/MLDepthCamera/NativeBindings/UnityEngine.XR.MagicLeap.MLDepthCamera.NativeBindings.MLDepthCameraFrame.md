---
title: MLDepthCameraFrame
summary: structure to encapsulate output data for each camera sensor. 

---

# MLDepthCameraFrame




Structure to encapsulate output data for each camera sensor.   





## Public Methods

### [MLDepthCameraFrame](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraFrame.md) Init {#mldepthcameraframe-init}

```csharp
public static MLDepthCameraFrame Init(
    Data managed
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Data](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md) |managed|Output data for each depth camera sensor. |






-----------

## Public Attributes

### AmbientRawDepthImageFrameBufferPtr {#intptr-ambientrawdepthimageframebufferptr}

Ambient raw depth image. The illuminator in the sensor is modulated with a system determined frequency. This is the raw sensor data captured when the illuminator is off. 

```csharp

public IntPtr AmbientRawDepthImageFrameBufferPtr;

```






-----------

### CameraPose {#mltransform-camerapose}

Depth camera pose in the world co-ordinate system. 

```csharp

public MLTransform CameraPose;

```

| Type | Description  | 
|--|--|
| [MLTransform](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) | Information used to transform from one coordinate frame to another.  |





-----------

### ConfidenceBufferFrameBufferPtr {#intptr-confidencebufferframebufferptr}

Confidence score. 

```csharp

public IntPtr ConfidenceBufferFrameBufferPtr;

```






-----------

### DepthFlagsBufferFrameBufferPtr {#intptr-depthflagsbufferframebufferptr}

Depth flags. 

```csharp

public IntPtr DepthFlagsBufferFrameBufferPtr;

```






-----------

### DepthImageFrameBufferPtr {#intptr-depthimageframebufferptr}

Depth image. 

```csharp

public IntPtr DepthImageFrameBufferPtr;

```






-----------

### FrameNumber {#long-framenumber}

A 64bit integer to index the frame number associated with this frame. 

```csharp

public long FrameNumber;

```






-----------

### FrameTimestamp {#long-frametimestamp}

Frame timestamp specifies the time at which the frame was captured. 

```csharp

public long FrameTimestamp;

```






-----------

### FrameType {#frametype-frametype}

Depth camera stream used for capturing this frame. 

```csharp

public FrameType FrameType;

```

| Type | Description  | 
|--|--|
| [FrameType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-frametype) | Depth Camera frame capture types  |





-----------

### Intrinsics {#mldepthcameraintrinsics-intrinsics}

Camera intrinsic parameters. 

```csharp

public MLDepthCameraIntrinsics Intrinsics;

```






-----------

### RawDepthImageFrameBufferPtr {#intptr-rawdepthimageframebufferptr}

Raw depth image. The illuminator in the sensor is modulated with a system determined frequency. This is the raw sensor data captured when the illuminator is on. 

```csharp

public IntPtr RawDepthImageFrameBufferPtr;

```






-----------


