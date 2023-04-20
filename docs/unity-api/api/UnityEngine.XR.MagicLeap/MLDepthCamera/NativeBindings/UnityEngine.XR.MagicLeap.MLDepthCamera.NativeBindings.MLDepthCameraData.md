---
title: MLDepthCameraData

---

# MLDepthCameraData










## Public Methods

### [MLDepthCameraData](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraData.md) Init {#mldepthcameradata-init}

```csharp
public static MLDepthCameraData Init()
```






-----------

### [MLDepthCameraData](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraData.md) Init {#mldepthcameradata-init}

```csharp
public static MLDepthCameraData Init(
    Data managed
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Data](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md) |managed|Output data for each depth camera sensor. |






-----------

## Public Attributes

### Version {#uint-version}

```csharp

public uint Version;

```






-----------

### Intrinsics {#mldepthcameraintrinsics-intrinsics}

```csharp

public MLDepthCameraIntrinsics Intrinsics;

```






-----------

### FrameType {#frametype-frametype}

```csharp

public FrameType FrameType;

```

| Type | Description  | 
|--|--|
| [FrameType](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-frametype) | Depth Camera frame capture types  |





-----------

### FrameTimestamp {#long-frametimestamp}

```csharp

public long FrameTimestamp;

```






-----------

### FrameNumber {#long-framenumber}

```csharp

public long FrameNumber;

```






-----------

### DepthImageFrameBufferPtr {#intptr-depthimageframebufferptr}

```csharp

public IntPtr DepthImageFrameBufferPtr;

```






-----------

### DepthFlagsBufferFrameBufferPtr {#intptr-depthflagsbufferframebufferptr}

```csharp

public IntPtr DepthFlagsBufferFrameBufferPtr;

```






-----------

### ConfidenceBufferFrameBufferPtr {#intptr-confidencebufferframebufferptr}

```csharp

public IntPtr ConfidenceBufferFrameBufferPtr;

```






-----------

### CameraPose {#mltransform-camerapose}

```csharp

public MLTransform CameraPose;

```

| Type | Description  | 
|--|--|
| [MLTransform](/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) | Information used to transform from one coordinate frame to another.  |





-----------

### AmbientRawDepthImageFrameBufferPtr {#intptr-ambientrawdepthimageframebufferptr}

```csharp

public IntPtr AmbientRawDepthImageFrameBufferPtr;

```






-----------

