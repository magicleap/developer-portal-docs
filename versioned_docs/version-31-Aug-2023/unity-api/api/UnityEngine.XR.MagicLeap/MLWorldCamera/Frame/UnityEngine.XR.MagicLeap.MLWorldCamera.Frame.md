---
title: Frame
summary: a structure to encapsulate per plane info for each camera frame. 

---

# Frame




A structure to encapsulate per plane info for each camera frame.   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### CameraId {#readonly-cameraid}

Camera Identifier specifies which camera is associated with this frame. 

```csharp

public readonly CameraId CameraId;

```

| Type | Description  | 
|--|--|
| readonly [CameraId](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md#enums-cameraid) | Enumeration of all the available world camera sensors.  |





-----------

### CameraIntrinsics {#readonly-cameraintrinsics}

Camera intrinsics. 

```csharp

public readonly CameraIntrinsics CameraIntrinsics;

```

| Type | Description  | 
|--|--|
| readonly [CameraIntrinsics](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.CameraIntrinsics.md) | World camera intrinsic parameters.  |





-----------

### CameraPose {#readonly-pose-camerapose}

World camera pose in the world co-ordinate system. 

```csharp

public readonly Pose CameraPose;

```






-----------

### FrameBuffer {#readonly-framebuffer}

[Frame](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/Frame/UnityEngine.XR.MagicLeap.MLWorldCamera.Frame.md) buffer data. 

```csharp

public readonly Buffer FrameBuffer;

```

| Type | Description  | 
|--|--|
| readonly [Buffer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/Frame/UnityEngine.XR.MagicLeap.MLWorldCamera.Frame.Buffer.md) | A structure to encapsulate per plane info for each camera frame.  |





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

public readonly Type FrameType;

```

| Type | Description  | 
|--|--|
| readonly [Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/Frame/UnityEngine.XR.MagicLeap.MLWorldCamera.Frame.md#enums-type) | Enumeration of camera mode used when capturing a frame.  |





-----------

### TimeStamp {#readonly-timestamp}

[Frame](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/Frame/UnityEngine.XR.MagicLeap.MLWorldCamera.Frame.md) timestamp specifies the time at which the frame was captured. 

```csharp

public readonly MLTime TimeStamp;

```

| Type | Description  | 
|--|--|
| readonly [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) | Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. If [OpenXR](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) is used, [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) is synonymous with the XrTime type.  |





-----------

## Public Enums

### Type {#enums-type}

Enumeration of camera mode used when capturing a frame. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unkown | | None.   |
| LowExposure | | [Frame](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/Frame/UnityEngine.XR.MagicLeap.MLWorldCamera.Frame.md) captured using #MLWorldCameraMode&#95;LowExposure mode.   |
| NormalExposure | | [Frame](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/Frame/UnityEngine.XR.MagicLeap.MLWorldCamera.Frame.md) captured using #MLWorldCameraMode&#95;NormalEposure mode.   |








-----------


