---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMarkerTrackerCreate {#mlresultcode-mlmarkertrackercreate}

Create a Marker Scanner. Requires CameraCapture, LowLatencyLightwear priveledges. 

```csharp
public MLResult.Code MLMarkerTrackerCreate(
    in MLMarkerTrackerSettings settings,
    out ulong handle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| in [MLMarkerTrackerSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/NativeBindings/UnityEngine.XR.MagicLeap.MLMarkerTracker.NativeBindings.MLMarkerTrackerSettings.md) |settings|List of settings of type  [MLMarkerTrackerSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/NativeBindings/UnityEngine.XR.MagicLeap.MLMarkerTracker.NativeBindings.MLMarkerTrackerSettings.md)  that configure the scanner. |
| out ulong |handle|A pointer to an   MLHandle   to the newly created Marker Scanner. If this operation fails, handle will be   ML&#95;INVALID&#95;HANDLE  . |






**Returns**:   MLResult&#95;InvalidParam  : Failed to create Marker Scanner due to invalid out&#95;handle.   MLResult&#95;Ok Successfully  : created Marker Scanner.   MLResult&#95;PermissionDenied Failed  : to create scanner due to lack of permission(s).   MLResult&#95;UnspecifiedFailure  : Failed to create the Marker Scanner due to an internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMarkerTrackerDestroy {#mlresultcode-mlmarkertrackerdestroy}

Destroy a Marker Scanner. Requires CameraCapture, LowLatencyLightwear priveleges. 

```csharp
public MLResult.Code MLMarkerTrackerDestroy(
    ulong scannerHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |scannerHandle|MLHandle to the Marker Scanner created by MLMarkerTrackerCreate(). |






**Returns**:   MLResult&#95;Ok  : Successfully destroyed the Marker Scanner.
  MLResult&#95;UnspecifiedFailure  : Failed to destroy the scanner due to an internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMarkerTrackerGetResult {#mlresultcode-mlmarkertrackergetresult}

brief Get the results for Marker Scanning.= This function can be used to poll results from the scanner. This will allocate memory for the results array that will have to be freed later. 

```csharp
public MLResult.Code MLMarkerTrackerGetResult(
    ulong scanner&#95;handle,
    ref MLMarkerTrackerResultArray data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |scanner&#95;handle|  MLHandle   to the Marker Scanner created by MLMarkerTrackerCreate(). |
| ref [MLMarkerTrackerResultArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/NativeBindings/UnityEngine.XR.MagicLeap.MLMarkerTracker.NativeBindings.MLMarkerTrackerResultArray.md) |data|out&#95;data Pointer to an array of pointers to [MLMarkerTrackerResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/NativeBindings/UnityEngine.XR.MagicLeap.MLMarkerTracker.NativeBindings.MLMarkerTrackerResult.md). The content will be freed by the MLMarkerTrackerReleaseResult. |



**Returns**

| Type | Name | Description | 
|--|--|--|
| [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) |MLResult&#95;UnspecifiedFailure|Failed to return detections due to an internal error. |




**Returns**: MLResult&#95;InvalidParam Failed to return detection data due to invalid out&#95;data. 

MLResult&#95;Ok Successfully fetched and returned all detections. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMarkerTrackerReleaseResult {#mlresultcode-mlmarkertrackerreleaseresult}

Release the resources for the results array. 

```csharp
public MLResult.Code MLMarkerTrackerReleaseResult(
    ref MLMarkerTrackerResultArray data
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ref [MLMarkerTrackerResultArray](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/NativeBindings/UnityEngine.XR.MagicLeap.MLMarkerTracker.NativeBindings.MLMarkerTrackerResultArray.md) |data|The list of detections to be freed.|






**Returns**: MLResult&#95;InvaldParam Failed to free structure due to invalid data. MLResult&#95;Ok Successfully freed data structure. MLResult&#95;UnspecifiedFailure Failed to free data due to an internal error. 



-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMarkerTrackerUpdateSettings {#mlresultcode-mlmarkertrackerupdatesettings}

Update the Marker Scanner with new settings. Requires CameraCapture, LowLatencyLightwear priveledges. 

```csharp
public MLResult.Code MLMarkerTrackerUpdateSettings(
    ulong scanner&#95;handle,
    in MLMarkerTrackerSettings scanner&#95;settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |scanner&#95;handle|MLHandle to the Marker Scanner created by MLArucoScannerCreate(). |
| in [MLMarkerTrackerSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/NativeBindings/UnityEngine.XR.MagicLeap.MLMarkerTracker.NativeBindings.MLMarkerTrackerSettings.md) |scanner&#95;settings|List of new Marker Scanner settings. |






**Returns**:   MLResult&#95;InvalidParam  : Failed to update the settings due to invalid scanner&#95;settings.   MLResult&#95;Ok Successfully  : updated the Marker Scanner settings.   MLResult&#95;PermissionDenied  : Failed to update the settings due to lack of permission(s).   MLResult&#95;UnspecifiedFailure  : Failed to update the settings due to an internal error. 



-----------

## Public Enums

### DecodedDataType {#enums-decodeddatatype}

Data type of the decoded marker data. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | |   |
| Aruco | | This covers Aruco and AprilTag   |
| QR | |   |
| EAN_13 | |   |
| UPC_A | |   |








-----------


