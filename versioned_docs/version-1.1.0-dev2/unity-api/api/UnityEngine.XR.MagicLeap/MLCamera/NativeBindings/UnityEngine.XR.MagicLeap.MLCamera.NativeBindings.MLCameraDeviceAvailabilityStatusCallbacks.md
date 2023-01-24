---
title: MLCameraDeviceAvailabilityStatusCallbacks
summary: device availability status callbacks to be implemented by client to receive device availability status. 

---

# MLCameraDeviceAvailabilityStatusCallbacks




Device availability status callbacks to be implemented by client to receive device availability status.   





## Public Methods

### [MLCameraDeviceAvailabilityStatusCallbacks](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLCamera.NativeBindings.MLCameraDeviceAvailabilityStatusCallbacks.md) Create {#mlcameradeviceavailabilitystatuscallbacks-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraDeviceAvailabilityStatusCallbacks Create()
```






**Returns**: A new instance of this struct.



-----------

### [MLCameraDeviceAvailabilityStatusCallbacks](/unity-api/api/UnityEngine.XR.MagicLeap/MLCamera/NativeBindings/UnityEngine.XR.MagicLeap.MLCamera.NativeBindings.MLCameraDeviceAvailabilityStatusCallbacks.md) CreateUninitialized {#mlcameradeviceavailabilitystatuscallbacks-createuninitialized}

```csharp
public static MLCameraDeviceAvailabilityStatusCallbacks CreateUninitialized()
```






-----------

## Public Attributes

### OnDeviceAvailable {#deviceavailabilitystatusdelegate-ondeviceavailable}

Callback is invoked when the camera becomes available. 

```csharp

public DeviceAvailabilityStatusDelegate OnDeviceAvailable;

```






-----------

### OnDeviceUnavailable {#deviceavailabilitystatusdelegate-ondeviceunavailable}

Callback is invoked when the camera becomes unavailable. 

```csharp

public DeviceAvailabilityStatusDelegate OnDeviceUnavailable;

```






-----------

### Version {#uint-version}

Version contains the version number for this structure. 

```csharp

public uint Version;

```






-----------

