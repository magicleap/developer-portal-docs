---
title: MLCameraDeviceStatusCallbacks
summary: device status callbacks to be implemented by client to receive device status if callback mechanism is used. 

---

# MLCameraDeviceStatusCallbacks




Device status callbacks to be implemented by client to receive device status if callback mechanism is used.   





## Public Methods

### [MLCameraDeviceStatusCallbacks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/NativeBindings/UnityEngine.XR.MagicLeap.MLCameraBase.NativeBindings.MLCameraDeviceStatusCallbacks.md) Create {#mlcameradevicestatuscallbacks-create}

Create and return an initialized version of this struct. 

```csharp
public static MLCameraDeviceStatusCallbacks Create()
```






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### OnDeviceDisconnected {#ondevicedisconnecteddelegate-ondevicedisconnected}

Callback is invoked when the camera is disconnected. 

```csharp

public OnDeviceDisconnectedDelegate OnDeviceDisconnected;

```

| Type | Description  | 
|--|--|
| [OnDeviceDisconnectedDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#delegate-void-ondevicedisconnecteddelegate) | Delegate to notify the app when the camera device disconnects.  |





-----------

### OnDeviceError {#ondeviceerrordelegate-ondeviceerror}

Callback is invoked when the camera encountered errors. Invalid: The camera device is not available. Disabled: The camera device can't be opened due to a device policy. Device error: The camera device encountered a fatal error such as the Lightwear device has lost connection or the hardware comm bus is busy and not be able to response and caused a timeout. Service error: The camera service has encountered a fatal error and could not provide service. Capture failed: The capure request has failed. on&#95;capture&#95;failed or on&#95;capture&#95;buffer&#95;lost callbacks will be invoked when this error happens. 

```csharp

public OnDeviceErrorDelegate OnDeviceError;

```

| Type | Description  | 
|--|--|
| [OnDeviceErrorDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md#delegate-void-ondeviceerrordelegate) | Delegate to notify the app about camera device error  |





-----------

### OnDeviceIdle {#ondeviceidledelegate-ondeviceidle}

Callback is invoked when the camera stops streaming. 

```csharp

public OnDeviceIdleDelegate OnDeviceIdle;

```






-----------

### OnDeviceStreaming {#ondevicestreamingdelegate-ondevicestreaming}

Callback is invoked when the camera is streaming. 

```csharp

public OnDeviceStreamingDelegate OnDeviceStreaming;

```






-----------

### Version {#uint-version}

Version contains the version number for this structure. 

```csharp

public uint Version;

```






-----------


