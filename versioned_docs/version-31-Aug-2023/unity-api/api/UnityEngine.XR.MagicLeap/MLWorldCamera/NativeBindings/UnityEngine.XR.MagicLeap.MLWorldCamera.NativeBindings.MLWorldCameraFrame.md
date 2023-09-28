---
title: MLWorldCameraFrame
summary: a structure to encapsulate output data for each camera sensor. 

---

# MLWorldCameraFrame




A structure to encapsulate output data for each camera sensor.   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### CameraPose {#readonly-camerapose}

World camera pose in the world co-ordinate system. 

```csharp

public readonly MLTransform CameraPose;

```

| Type | Description  | 
|--|--|
| readonly [MLTransform](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLTransform.md) | Information used to transform from one coordinate frame to another.  |





-----------

### FrameBuffer {#readonly-framebuffer}

[Frame](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/Frame/UnityEngine.XR.MagicLeap.MLWorldCamera.Frame.md) buffer data. 

```csharp

public readonly MLWorldCameraFrameBuffer FrameBuffer;

```

| Type | Description  | 
|--|--|
| readonly [MLWorldCameraFrameBuffer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLWorldCamera.NativeBindings.MLWorldCameraFrameBuffer.md) | A structure to encapsulate per plane info for each camera frame.  |





-----------

### FrameNumber {#readonly-long-framenumber}

A 64bit integer to index the frame number associated with this frame. 

```csharp

public readonly long FrameNumber;

```






-----------

### FrameType {#readonly-frametype}

Maps to the world camera mode used for capturing the camera frames. 

```csharp

public readonly Frame.Type FrameType;

```

| Type | Description  | 
|--|--|
| readonly [Frame.Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/Frame/UnityEngine.XR.MagicLeap.MLWorldCamera.Frame.md#enums-type) | Enumeration of camera mode used when capturing a frame.  |





-----------

### Id {#readonly-id}

Camera Identifier specifies which camera is associated with this frame. 

```csharp

public readonly MLWorldCamera.CameraId Id;

```

| Type | Description  | 
|--|--|
| readonly [MLWorldCamera.CameraId](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md#enums-cameraid) | Enumeration of all the available world camera sensors.  |





-----------

### Intrinsics {#readonly-intrinsics}

Camera intrinsic parameters. 

```csharp

public readonly NativeBindings.MLWorldCameraIntrinsics Intrinsics;

```

| Type | Description  | 
|--|--|
| readonly [NativeBindings.MLWorldCameraIntrinsics](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLWorldCamera.NativeBindings.MLWorldCameraIntrinsics.md) | World camera intrinsic parameters.  |





-----------

### TimeStamp {#readonly-long-timestamp}

[Frame](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/Frame/UnityEngine.XR.MagicLeap.MLWorldCamera.Frame.md) timestamp specifies the time at which the frame was captured. 

```csharp

public readonly long TimeStamp;

```






-----------


