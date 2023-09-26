---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLInputGetConnectedDevices {#mlresultcode-mlinputgetconnecteddevices}

Gets the device IDs of all connected devices. 

```csharp
public MLResult.Code MLInputGetConnectedDevices(
    ulong Handle,
    IntPtr InoutDevices
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| IntPtr |InoutDevices||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLInputReleaseConnectedDevicesList {#mlresultcode-mlinputreleaseconnecteddeviceslist}

Releases the contents of #MLInputConnectedDevicesList populated by #MLInputGetConnectedDevices. 

```csharp
public MLResult.Code MLInputReleaseConnectedDevicesList(
    ulong Handle,
    IntPtr Devices
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| IntPtr |Devices||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLInputSetControllerCallbacksEx {#mlresultcode-mlinputsetcontrollercallbacksex}

Sets the callbacks for controller input events. 

```csharp
public MLResult.Code MLInputSetControllerCallbacksEx(
    ulong Handle,
    ref MLInputControllerCallbacksEx Callbacks,
    IntPtr UserData
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |Handle||
| ref [MLInputControllerCallbacksEx](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Controller/NativeBindings/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Controller.NativeBindings.MLInputControllerCallbacksEx.md) |Callbacks|A structure containing callbacks for input controller events. The final parameter to all the callbacks is a void &#42;, which will point to whatever payload data the user provides in MLInputSetControllerCallbacksEx. Individual callbacks which are not required by the client can be NULL. This structure must be initialized by calling MLInputControllerCallbacksExInit() before use. |
| IntPtr |UserData||






-----------

### delegate void OnButtonClickDelegate {#delegate-void-onbuttonclickdelegate}

Callback structure for NativeBindings.OnButtonClick. 

```csharp
public delegate void OnButtonClickDelegate(
    ushort controllerId,
    MLInputControllerButton button,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ushort |controllerId||
| MLInputControllerButton |button||
| IntPtr |data||






-----------

### delegate void OnButtonDownDelegate {#delegate-void-onbuttondowndelegate}

Callback structure for NativeBindings.OnButtonDown. 

```csharp
public delegate void OnButtonDownDelegate(
    ushort controllerId,
    MLInputControllerButton button,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ushort |controllerId||
| MLInputControllerButton |button||
| IntPtr |data||






-----------

### delegate void OnButtonUpDelegate {#delegate-void-onbuttonupdelegate}

Callback structure for NativeBindings.OnButtonUp. 

```csharp
public delegate void OnButtonUpDelegate(
    ushort controllerId,
    MLInputControllerButton button,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ushort |controllerId||
| MLInputControllerButton |button||
| IntPtr |data||






-----------

### delegate void OnConnectDelegate {#delegate-void-onconnectdelegate}

Callback structure for NativeBindings.OnConnect. 

```csharp
public delegate void OnConnectDelegate(
    ushort controllerId,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ushort |controllerId||
| IntPtr |data||






-----------

### delegate void OnDisconnectDelegate {#delegate-void-ondisconnectdelegate}

Callback structure for NativeBindings.OnDisconnect. 

```csharp
public delegate void OnDisconnectDelegate(
    ushort controllerId,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ushort |controllerId||
| IntPtr |data||






-----------

### delegate void OnTouchpadGestureContinueDelegate {#delegate-void-ontouchpadgesturecontinuedelegate}

Callback structure for NativeBindings.OnTouchpadGestureContinue. 

```csharp
public delegate void OnTouchpadGestureContinueDelegate(
    ushort controllerId,
    IntPtr touchpadGesture,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ushort |controllerId||
| IntPtr |touchpadGesture||
| IntPtr |data||






-----------

### delegate void OnTouchpadGestureDelegate {#delegate-void-ontouchpadgesturedelegate}

Callback structure for NativeBindings.OnTouchpadGesture. 

```csharp
public delegate void OnTouchpadGestureDelegate(
    ushort controllerId,
    IntPtr touchpadGesture,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ushort |controllerId||
| IntPtr |touchpadGesture||
| IntPtr |data||






-----------

### delegate void OnTouchpadGestureEndDelegate {#delegate-void-ontouchpadgestureenddelegate}

Callback structure for NativeBindings.OnTouchpadGestureEnd. 

```csharp
public delegate void OnTouchpadGestureEndDelegate(
    ushort controllerId,
    IntPtr touchpadGesture,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ushort |controllerId||
| IntPtr |touchpadGesture||
| IntPtr |data||






-----------

### delegate void OnTriggerDelegate {#delegate-void-ontriggerdelegate}

Callback structure for NativeBindings.OnTrigger. 

```csharp
public delegate void OnTriggerDelegate(
    ushort controllerId,
    MLInputControllerTriggerEvent @ event,
    float depth,
    IntPtr data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ushort |controllerId||
| [MLInputControllerTriggerEvent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/Extensions/Controller/UnityEngine.XR.MagicLeap.InputSubsystem.Extensions.Controller.md#enums-mlinputcontrollertriggerevent) @ |event|Trigger events types. |
| float |depth||
| IntPtr |data||






-----------


