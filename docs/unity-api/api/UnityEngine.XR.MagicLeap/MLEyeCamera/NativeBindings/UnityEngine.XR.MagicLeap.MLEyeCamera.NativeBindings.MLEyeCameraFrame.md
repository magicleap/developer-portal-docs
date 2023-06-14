---
title: MLEyeCameraFrame
summary: a structure to encapsulate output data for each camera sensor. 

---

# MLEyeCameraFrame




A structure to encapsulate output data for each camera sensor.   





## Public Attributes

### CameraID {#readonly-cameraid}

Camera Identifier specifies which camera is associated with this frame. 

```csharp

public readonly MLEyeCameraIdentifier CameraID;

```

| Type | Description  | 
|--|--|
| readonly [MLEyeCameraIdentifier](/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/UnityEngine.XR.MagicLeap.MLEyeCamera.md#enums-mleyecameraidentifier) | Enumeration of all the available eye camera sensors.  |





-----------

### FrameBuffer {#readonly-framebuffer}

Frame buffer data. 

```csharp

public readonly MLEyeCameraFrameBuffer FrameBuffer;

```

| Type | Description  | 
|--|--|
| readonly [MLEyeCameraFrameBuffer](/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLEyeCamera.NativeBindings.MLEyeCameraFrameBuffer.md) | A structure to encapsulate per plane info for each camera frame.  |





-----------

### FrameNumber {#readonly-long-framenumber}

A 64bit integer to index the frame number associated with this frame. 

```csharp

public readonly long FrameNumber;

```






-----------

### TimeStamp {#readonly-long-timestamp}

Frame timestamp specifies the time at which the frame was captured. 

```csharp

public readonly long TimeStamp;

```






-----------

