---
title: MLCameraCaptureStreamCaps
summary: the capabilities for each stream supported by logical camera device  can be queried with mlcameragetdevicecaps 

---

# MLCameraCaptureStreamCaps




The capabilities for each stream supported by logical camera device &#42; can be queried with MLCameraGetDeviceCaps   





## Public Methods

### [MLCameraCaptureStreamCaps](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLCamera.NativeBindings.MLCameraCaptureStreamCaps.md) Create {#mlcameracapturestreamcaps-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraCaptureStreamCaps Create()
```






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### CaptureType {#capturetype-capturetype}

capture&#95;type Video, Image ,Preview 

```csharp

public CaptureType CaptureType;

```

| Type | Description  | 
|--|--|
| [CaptureType](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/UnityEngine.XR.MagicLeap.MLCamera.md#enums-capturetype) | Capture operation type  |





-----------

### Height {#int-height}

Resolution height 

```csharp

public int Height;

```






-----------

### Width {#int-width}

Capture Resolution 

```csharp

public int Width;

```






-----------

