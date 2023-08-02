---
title: MLDepthCameraData

---

# MLDepthCameraData










## Public Methods

### [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraData.md) Init {#mldepthcameradata-init}

```csharp
public static MLDepthCameraData Init()
```






-----------

### [MLDepthCameraData](/versioned_docs/version-14-Jun-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLDepthCamera.NativeBindings.MLDepthCameraData.md) Init {#mldepthcameradata-init}

```csharp
public static MLDepthCameraData Init(
    Data managed
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Data](/versioned_docs/version-14-Jun-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md) |managed|Output data for each depth camera sensor. |






-----------

## Public Attributes

### AmbientRawDepthImageFrameBufferPtr {#intptr-ambientrawdepthimageframebufferptr}

```csharp

public IntPtr AmbientRawDepthImageFrameBufferPtr;

```






-----------

### CameraPose {#mltransform-camerapose}

```csharp

public MLTransform CameraPose;

```

| Type | Description  | 
|--|--|
| [MLTransform](/versioned_docs/version-14-Jun-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) | Information used to transform from one coordinate frame to another.  |





-----------

### ConfidenceBufferFrameBufferPtr {#intptr-confidencebufferframebufferptr}

```csharp

public IntPtr ConfidenceBufferFrameBufferPtr;

```






-----------

### DepthFlagsBufferFrameBufferPtr {#intptr-depthflagsbufferframebufferptr}

```csharp

public IntPtr DepthFlagsBufferFrameBufferPtr;

```






-----------

### DepthImageFrameBufferPtr {#intptr-depthimageframebufferptr}

```csharp

public IntPtr DepthImageFrameBufferPtr;

```






-----------

### FrameNumber {#long-framenumber}

```csharp

public long FrameNumber;

```






-----------

### FrameTimestamp {#long-frametimestamp}

```csharp

public long FrameTimestamp;

```






-----------

### FrameType {#frametype-frametype}

```csharp

public FrameType FrameType;

```

| Type | Description  | 
|--|--|
| [FrameType](/versioned_docs/version-14-Jun-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-frametype) | Depth Camera frame capture types  |





-----------

### Intrinsics {#mldepthcameraintrinsics-intrinsics}

```csharp

public MLDepthCameraIntrinsics Intrinsics;

```






-----------

### RawDepthImageFrameBufferPtr {#intptr-rawdepthimageframebufferptr}

```csharp

public IntPtr RawDepthImageFrameBufferPtr;

```






-----------

### Version {#uint-version}

```csharp

public uint Version;

```






-----------

