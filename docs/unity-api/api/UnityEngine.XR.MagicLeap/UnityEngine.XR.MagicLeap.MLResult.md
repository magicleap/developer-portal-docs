---
title: MLResult
summary: magic leap api return value. 

---

# MLResult



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Magic Leap API return value.   





## Public Fields

### IsOk {#bool-isok}

Gets a value indicating whether the result code is [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) Note that in some cases the result can be different than [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) and still valid (e.g. [MLResult.Code.Pending](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending), [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)) 

```csharp

public bool IsOk { get; set; }

```






-----------

## Public Methods

### string CodeToString {#string-codetostring}

Provides the string value for any [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code). 

```csharp
public static string CodeToString(
    MLResult.Code resultCode
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) |resultCode|The code to convert into a string value.|






**Returns**: The string value of the given [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code).



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Create {#mlresult-create}

Create a new [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) or retrieve an already initialized [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) with the result needed. 

```csharp
public static MLResult Create(
    Code result,
    string msg =null
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) |result|The code to use for the created [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md).|
| string |msg|The message to use for the created [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md).|






**Returns**: A new or cached [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) with the provided code and message.



-----------

### bool DidNativeCallSucceed {#bool-didnativecallsucceed}

```csharp
public static bool DidNativeCallSucceed(
    Code resultCode,
    string functionName ="A native function",
    Predicate< Code > successCase =null,
    bool showError =true
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) |resultCode|Identifier of Magic Leap API results |
| string |functionName||
| Predicate&lt; [Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) &gt; |successCase|Identifier of Magic Leap API results |
| bool |showError||






-----------

### override bool Equals {#override-bool-equals}

The equality check to be used for comparing another object to this one. 

```csharp
public override bool Equals(
    object obj
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| object |obj|The object to compare to this one with. |






**Returns**: True if the the provided object is of the [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) type and has the same Result values.



-----------

### override int GetHashCode {#override-int-gethashcode}

Gets the hash code to use from this.Result. 

```csharp
public override int GetHashCode()
```






**Returns**: The hash code returned by the this.Result field.



-----------

### bool IsOK {#bool-isok}

Indicates whether the result code is [Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) Note that in some cases the result can be different than [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok) and still be valid (e.g. [MLResult.Code.Pending](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending), [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)) 

```csharp
public static bool IsOK(
    Code result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) |result|The code to determine if it is Ok.|






**Returns**: True if the provided code is equivalent [Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok).



-----------

### bool IsPending {#bool-ispending}

Indicates whether the result code is one of the Pending results. 

```csharp
public static bool IsPending(
    Code result
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) |result|The code to determine if it is pending.|






**Returns**: True if the provided code is equivalent [Code.Pending](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-pending).



-----------

### override string ToString {#override-string-tostring}

Provides the string value of this.Result or the default message given to this [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md). 

```csharp
public override string ToString()
```






**Returns**: the string value of this.Result or the default message given to this [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md).



-----------

### implicit operator Task< MLResult > {#implicit-operator-task-mlresult-}

Enables asynchronous native calls to use the same interface as synchronous ones 

```csharp
public static implicit operator Task< MLResult >(
    MLResult r
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |r|Magic Leap API return value. |






-----------

### bool operator!= {#bool-operator}

The inequality check to be used for comparing two [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) structs. 

```csharp
public static bool operator!=(
    MLResult one,
    MLResult.Code two
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |one|The first struct to compare with the second struct. |
| [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) |two|The second struct to compare with the first struct. |






**Returns**: True if the two provided structs do not have the same Result value.



-----------

### bool operator== {#bool-operator}

The equality check to be used for comparing two [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) structs. 

```csharp
public static bool operator==(
    MLResult one,
    MLResult.Code two
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) |one|The first struct to compare with the second struct. |
| [MLResult.Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) |two|The second struct to compare with the first struct. |






**Returns**: True if the two provided structs have the same Result value.



-----------

## Public Attributes

### Result {#readonly-result}

The code of this [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md). Indicates the result status. 

```csharp

public readonly Code Result;

```

| Type | Description  | 
|--|--|
| readonly [Code](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) | Identifier of Magic Leap API results  |





-----------

## Public Enums

### Code {#enums-code}

Identifier of Magic Leap API results 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Ok | (CodePrefix.MLResultGlobal << 16)| Operation completed successfully.   |
| Pending | | Asynchronous operation has not completed   |
| Timeout | | Operation has timed out.   |
| Locked | | Request to lock a shared resource that is already locked.   |
| UnspecifiedFailure | | Operation failed due to an unspecified internal error.   |
| InvalidParam | | Operation failed due to an invalid parameter being supplied.   |
| AllocFailed | | Operation failed because memory failed to be allocated.   |
| PermissionDenied | | Operation failed because a required permission has not been granted.   |
| NotImplemented | | Operation failed because it is not currently implemented.   |
| ClientLimitExceeded | | Operation failed because the client count exceeded the number of clients available.   |
| PoseNotFound | | Operation failed because the requested pose is not available.   |
| IncompatibleSKU | | Operation failed because feature isn't supported on current device version.   |
| PerceptionSystemNotStarted | | Operation failed because the Perception System was not started.   |
| IllegalState | | Operation failed because it has been invoked at the wrong time.   |
| LicenseError | | Operation failed because of missing/incompatible license.   |
| InvalidTimestamp | | Operation failed because the timestamp parameter was outside the expected range.   |
| AudioNotImplemented | (CodePrefix.MLAudioResult << 16)| Audio function not implemented.   |
| AudioHandleNotFound | | Not a valid MLHandle for a sound or input.   |
| AudioInvalidSampleRate | | Sample rate not supported.   |
| AudioInvalidBitsPerSample | | Bits per sample not supported.   |
| AudioInvalidValidBits | | Valid bits per sample not supported.   |
| AudioInvalidSampleFormat | | Sample format not supported.   |
| AudioInvalidChannelCount | | Channel count not supported.   |
| AudioInvalidBufferSize | | Buffer size too small.   |
| AudioBufferNotReady | | Buffer not ready for read or write.   |
| AudioFileNotFound | | Specified file not found.   |
| AudioFileNotRecognized | | Specified file has unsupported format.   |
| AudioResourceNotFound | | Specified resource is not on the list.   |
| AudioResourceDiscarded | | Data was unloaded or file was closed.   |
| AudioOperationUnavailable | | Requested operation not possible for given item.   |
| AudioInternalOperationNotReady | | Requested operation has not yet been processed.   |
| AudioInternalConfigError | | Internal configuration problem was detected.   |
| InputServiceNotAvailable | (CodePrefix.MLInputResult << 16)| Operation failed because input service is not available.   |
| InputPermissionDenied | | Operation failed because a required permission has not been granted.   |
| InputDeviceNotFound | | Operation failed because a required device was not found.   |
| InputIllegalState | | Operation failed because the service was in an illegal state.   |
| InputInternalError | | Operation failed because of an internal error.   |
| InputSpeechDisabled | | Operation failed because a required speech feature is disabled in system settings.   |
| MediaPlayerServerDied | (CodePrefix.MLMediaPlayerResult << 16)| Media errors (example: Codec not supported).   |
| MediaPlayerNotValidForProgressivePlayback | | Runtime errors.   |
| MediaAlreadyConnected | (CodePrefix.MLMediaResult << 16)| Media already connected.   |
| MediaNotConnected | | Media not connected.   |
| MediaUnknownHost | | Media had unknown host.   |
| MediaCannotConnect | | Media cannot connect.   |
| MediaIO | | Media IO.   |
| MediaConnectionLost | | Media connection was lost.   |
| MediaLegacy1 | | Deprecated error.   |
| MediaMalformed | | Media was malformed.   |
| MediaOutOfRange | | Media was out of range.   |
| MediaBufferTooSmall | | Media buffer was too small.   |
| MediaUnsupported | | Media not supported.   |
| MediaEndOfStream | | Media end of stream.   |
| MediaFormatChanged | | Media format changed.   |
| MediaDiscontinuity | | Media discontinuity.   |
| MediaOutputBuffersChanged | | Media output buffers changed.   |
| MediaPermissionRevoked | | Media permission revoked.   |
| MediaUnsupportedAudioFormat | | Media had an unsupported audio format.   |
| MediaHeartbeatTerminateRequested | | Media heartbeat requested to be terminated.   |
| MediaUnknownResource | | Unknown Media Codec Resource Request Error.   |
| MediaInvalidResourceRequest | | Invalid Request on Media Codec Resources.   |
| MediaOnlyHWResourceAvailable | | Only Hardware Media Codec Resources are available. This error code is a result of requesting for Software Media Codec Resource that is not available.   |
| MediaOnlySWResourceAvailable | | Only Software Media Codec Resources are available. This error code is a result of requesting for Hardware Media Codec Resource that is not available.   |
| MediaNoMoreResources | | No more (Hardware or Software) Media Codec Resources available.   |
| MediaNoMoreHWResources | | No more Hardware Media Codec Resources available   |
| MediaNoMoreSWResources | | No more Software Media Codec Resources available.   |
| MediaInvalidCodecParam | | Media Codec Resource request made with Invalid Codec parameters. This error code could be a result of one of these cases (not limited to) 1) Requested video frame width or height is beyond the maximum resolution (width or height) supported. 2) Requested Framerate/Sample rate/Bitratre/Channel count is not supported.   |
| MediaDRMUnknown | (CodePrefix.MLMediaDRMResult << 16)| Error code for undefined type.   |
| MediaDRMNoLicense | | Error code for no DRM license.   |
| MediaDRMLicenseExpired | | Error code for DRM license expired.   |
| MediaDRMSessionNotOpened | | Error code for DRM session not expired.   |
| MediaDRMDecryptUnitNotInitialized | | Error code for DRM when decrypt unit is not initialized.   |
| MediaDRMDecrypt | | Error code for DRM when failed to decrypt data.   |
| MediaDRMCannotHandle | | Error code for DRM can not handle the operation.   |
| MediaDRMTamperDetect | | Error code for DRM when data is tampered.   |
| MediaDRMNotProvisioned | | Error Code when an operation on a MLMediaDRM handle is attempted and the device does not have a certificate. The app should obtain and install a certificate using the MLMediaDRM provisioning methods then retry the operation.   |
| MediaDRMDeviceRevoked | | Error code for Device License Revoked.   |
| MediaDRMResourceBusy | | Error code if the MLMediaDRM operation fails when the required resources are in use.   |
| MediaDRMInsufficientOutputProtection | | Error code for insufficient output protection.   |
| MediaDRMLastUsedErrorCode | MediaDRMInsufficientOutputProtection| Error code for insufficient output protection.   |
| MediaDRMVendorMin | (CodePrefix.MLMediaDRMResult << 16) + 500| Range for vendor specific DRM errors.   |
| MediaDRMVendorMax | (CodePrefix.MLMediaDRMResult << 16) + 999| Range for vendor specific DRM errors.   |
| MediaGenericInvalidOperation | (CodePrefix.MLMediaGenericResult << 16)| Media invalid operation.   |
| MediaGenericBadType | | Media bad type.   |
| MediaGenericNameNotFound | | Media name not found.   |
| MediaGenericHandleNotFound | | Media handle not found.   |
| MediaGenericNoInit | | Media  NoInit .   |
| MediaGenericAlreadyExists | | Media already exists.   |
| MediaGenericDeadObject | | Media dead object.   |
| MediaGenericFailedTransaction | | Media had a failed transaction.   |
| MediaGenericBadIndex | | Media had a bad index.   |
| MediaGenericNotEnoughData | | Media not enough data.   |
| MediaGenericWouldBlock | | Media would block.   |
| MediaGenericUnknownTransaction | | Media had an unknown transaction.   |
| MediaGenericFDSNotAllowed | | Media FDS not allowed.   |
| MediaGenericUnexpectedNull | | Media unexpected null.   |
| MediaGenericNotAvailable | | Media not available.   |
| SnapshotDerivativesNotCalculated | (CodePrefix.MLSnapshotResult << 16)| Derivatives not calculated for requested coordinate frame.   |
| WebRTCInstanceNotCreated | (CodePrefix.MLWebRTCResult << 16)| Instance not created.   |
| WebRTCMismatchingHandle | | Mismatching handle.   |
| WebRTCInvalidFrameFormat | | Invalid frame format.   |
| WebRTCInvalidFramePlaneCount | | Invalid frame plane count.   |
| WebRTCSendNativeFrameError | | [Native](/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) Frame failed to be sent   |
| WebRTCDataChannelIsClosed | | Data channel is closed.   |
| AnchorsMaxAnchorLimitReached | (CodePrefix.MLAnchorsResult << 16)| The maximum number of anchors for the current space has been reached.   |
| AnchorsMinDistanceThresholdExceeded | | The minimum distance between anchors was not met   |
| AnchorsInsufficientMapping | | The space has not been sufficiently mapped to allow this operation.   |
| AnchorsInvalidId | | The provided anchor id was not valid.   |
| AnchorsInvalidExpirationTimestamp | | The provided expiration suggestion was not valid.   |
| AnchorsNotLocalized | | The operation cannot be completed because the device has not yet localized.   |
| AnchorsServerError | | There was an error communicating with the server.   |
| AnchorsServiceUnavailable | | The operation failed because the underlying service is not yet available.   |
| VoiceIntentDisabled | (CodePrefix.MLVoiceResult << 16)| Operation failed because a required voice intent feature is disabled in system settings.   |
| WebViewZoomLimitReached | (CodePrefix.MLWebViewResult << 16)| Operation failed because zoom limit was reached.   |
| SpacesServerError | (CodePrefix.MLSpaceResult << 16)| There was an error communicating with the server.   |
| SpacesServiceUnavailable | | The operation failed because the underlying service is not yet available, retry later.   |
| UnavailableSpace | | Space is not available.   |
| IncompatibleSpace | | Space is not compatible with the current OS version.   |
| SpaceAlreadyExists | | The operation failed because the Space being imported already exists in the device.   |
| HeadsetFitIssue | (CodePrefix.MLFacialExpressionResult << 16)| Unable to detect the eyes, check MLHeadsetFitStatus.   |
| EyeExpressionDisabled | | Operation failed because enable&#95;eye&#95;expression in MLFacialExpressionSettings is disabled.   |
| PowerManagerNotConnect | (CodePrefix.MLPowerManager << 16)| Indicates the component is not connected.   |
| PowerManagerInvalidStateTransition | | Indicates the component does not currently support transitioning to requested state.   |
| PowerManagerStateTransitionsDisabled | | Indicates the component does not currently support transitioning to a different state.   |
| PowerManagerUnsupportedState | | Indicates the component does not support the requested power state.   |
| APIDLLNotFound | int.MaxValue - 0| APIDLLNotFound.   |
| APISymbolsNotFound | int.MaxValue - 1| APIDLLSymbolsNotFound.   |








-----------

