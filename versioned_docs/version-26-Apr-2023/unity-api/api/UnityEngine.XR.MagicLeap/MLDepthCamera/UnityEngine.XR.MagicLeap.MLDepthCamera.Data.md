---
title: Data
summary: output data for each depth camera sensor. 

---

# Data




Output data for each depth camera sensor.   





## Public Fields

### AmbientRawDepthImage {#framebuffer-ambientrawdepthimage}

This is the raw depth camera sensor data captured without the depth camera illumination and corresponds to the amount of ambient light incident on the sensor. 

```csharp

public FrameBuffer AmbientRawDepthImage { get; set; }

```

| Type | Description  | 
|--|--|
| [FrameBuffer](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.FrameBuffer.md) | Per-plane info for each depth camera frame.  |





-----------

### ConfidenceBuffer {#framebuffer-confidencebuffer}

```csharp

public FrameBuffer ConfidenceBuffer { get; set; }

```

| Type | Description  | 
|--|--|
| [FrameBuffer](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.FrameBuffer.md) | Per-plane info for each depth camera frame.  |

**Details**

Confidence map stores the confidence values for each pixel in the [DepthImage](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#framebuffer-depthimage) buffer. The confidence score is derived from the sensor noise and it is not normalized. The higher the value the higher the confidence. Applications can determine what confidence threshold to use based on their use case.

Cast the [FrameBuffer.Data](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.FrameBuffer.md#byte-data) to float data type. 





-----------

### DepthFlagsBuffer {#framebuffer-depthflagsbuffer}

Each pixel in the [DepthImage](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#framebuffer-depthimage) frame buffer will have an associated set of flags. 

```csharp

public FrameBuffer DepthFlagsBuffer { get; set; }

```

| Type | Description  | 
|--|--|
| [FrameBuffer](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.FrameBuffer.md) | Per-plane info for each depth camera frame.  |





-----------

### DepthImage {#framebuffer-depthimage}

```csharp

public FrameBuffer DepthImage { get; set; }

```

| Type | Description  | 
|--|--|
| [FrameBuffer](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.FrameBuffer.md) | Per-plane info for each depth camera frame.  |

**Details**

Depth map stores the depth data from the depth camera. Depth is represented in meters and gives the radial distance of the real world location from the depth camera coordinate frame. See [Intrinsics](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Intrinsics.md), [Position](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#vector3-position), and [Rotation](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Data.md#quaternion-rotation) for more details.

Cast the [FrameBuffer.Data](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.FrameBuffer.md#byte-data) to float data type. 





-----------

### FrameNumber {#long-framenumber}

A 64bit integer to index the frame number associated with this frame. 

```csharp

public long FrameNumber { get; set; }

```






-----------

### FrameTimestamp {#mltime-frametimestamp}

Frame timestamp specifies the time at which the frame was captured. 

```csharp

public MLTime FrameTimestamp { get; set; }

```

| Type | Description  | 
|--|--|
| [MLTime](/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) | Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time.  |





-----------

### FrameType {#frametype-frametype}

Depth camera mode used for capturing this frame. 

```csharp

public FrameType FrameType { get; set; }

```

| Type | Description  | 
|--|--|
| [FrameType](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md#enums-frametype) | Depth Camera frame capture types  |





-----------

### Intrinsics {#intrinsics-intrinsics}

Camera intrinsic parameters 

```csharp

public Intrinsics Intrinsics { get; set; }

```

| Type | Description  | 
|--|--|
| [Intrinsics](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.Intrinsics.md) | Depth camera intrinsic parameters.  |





-----------

### Position {#vector3-position}

World position of the depth camera pose 

```csharp

public Vector3 Position { get; set; }

```






-----------

### Rotation {#quaternion-rotation}

World rotation of the depth camera pose 

```csharp

public Quaternion Rotation { get; set; }

```






-----------

