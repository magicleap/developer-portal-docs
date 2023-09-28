---
title: EyeCameraFrame

---

# EyeCameraFrame










## Public Attributes

### CameraID {#readonly-cameraid}

Camera Identifier specifies which camera is associated with this frame. 

```csharp

public readonly MLEyeCameraIdentifier CameraID;

```

| Type | Description  | 
|--|--|
| readonly [MLEyeCameraIdentifier](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/UnityEngine.XR.MagicLeap.MLEyeCamera.md#enums-mleyecameraidentifier) | Enumeration of all the available eye camera sensors.  |





-----------

### FrameBuffer {#readonly-framebuffer}

Frame buffer data. 

```csharp

public readonly EyeCameraFrameBuffer FrameBuffer;

```






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


