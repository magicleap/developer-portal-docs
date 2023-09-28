---
title: MLMarkerTracker
summary: this api can be used to scan markers. for qr codes it also provides 6dof poses. the scanner supports up to 16 markers. identical markers will be treated as seperate markers and reported individually. list of currently supported trackable markers with pose info 

---

# MLMarkerTracker



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


This API can be used to scan markers. For QR codes it also provides 6DOF poses. The scanner supports up to 16 markers. Identical markers will be treated as seperate markers and reported individually. List of currently supported trackable markers (with pose info):   [More...](#detailed-description)  


Inherits from: <br></br>[MLAutoAPISingleton< MLMarkerTracker >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md),<br></br>[MLLazySingleton< T >](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)



## Detailed Description

```csharp
public class MLMarkerTracker : MLAutoAPISingleton< MLMarkerTracker > 
```


**Details**



* QR codes of Model 1 and Model 2
* ArUco markers List of currently supported detectable markers (without pose info):
* EAN-13 (experimental)
* UPC-A (experimental) 





-----------



## Public Methods

### async Task SetSettingsAsync {#async-task-setsettingsasync}

Instance.settings setter. If called with the same value while a settings update operation is in progress, nothing will happen. 

```csharp
public static async Task SetSettingsAsync(
    TrackerSettings value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [TrackerSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/TrackerSettings/UnityEngine.XR.MagicLeap.MLMarkerTracker.TrackerSettings.md) |value||






-----------

### async Task SetSettingsAsync {#async-task-setsettingsasync}

Instance.settings setter. If called with the same value while a settings update operation is in progress, nothing will happen. 

```csharp
public static async Task SetSettingsAsync(
    Settings value
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Settings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.Settings.md) |value||






-----------

### async Task StartScanningAsync {#async-task-startscanningasync}

Asynchronous utility method to enable marker scanning using the current   ScannerSettings  . Does nothing if scanning is already enabled. Note that enabling scanning has a performance cost until scanning is disabled using   StopScanning   or by setting   ScannerSettings.enabled   to  false . 

```csharp
public static async Task StartScanningAsync(
    TrackerSettings? settings =null
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [TrackerSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/TrackerSettings/UnityEngine.XR.MagicLeap.MLMarkerTracker.TrackerSettings.md)? |settings||






-----------

### async Task StartScanningAsync {#async-task-startscanningasync}

Asynchronous utility method to enable marker scanning using the current   ScannerSettings  . Does nothing if scanning is already enabled. Note that enabling scanning has a performance cost until scanning is disabled using   StopScanning   or by setting   ScannerSettings.enabled   to  false . 

```csharp
public static async Task StartScanningAsync(
    Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Settings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.Settings.md) |settings||






-----------

### async Task StopScanningAsync {#async-task-stopscanningasync}

Asynchronous method to disable marker scanning if previously activated. Otherwise, this does nothing. 

```csharp
public static async Task StopScanningAsync()
```






-----------

## Protected Methods

### OnApplicationPause {#override-void-onapplicationpause}

Callback sent to all [MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) APIs on application pause. 

```csharp
protected virtual override void OnApplicationPause(
    bool pauseStatus
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |pauseStatus|True if the application is paused, else False. |




**Reimplements**: [OnApplicationPause](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#void-onapplicationpause)



-----------

### StartAPI {#override-startapi}

Do API-specific creation/initialization of ML resources for this API, such as creating trackers, etc. Called automatically the first time  Instance  is accessed. Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StartAPI()
```




**Reimplements**: [StartAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-startapi)



-----------

### StopAPI {#override-stopapi}

API-specific cleanup. Will be called whenever [MLDevice](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md) is destroyed (at the latest, when the application is shutting down). Error checking on the return value is performed in the base class. 

```csharp
protected virtual override MLResult.Code StopAPI()
```




**Reimplements**: [StopAPI](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#abstract-stopapi)



-----------

### Update {#override-void-update}

Runs once per Unity Update loop. 

```csharp
protected virtual override void Update()
```




**Reimplements**: [Update](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md#void-update)



-----------

## Public Events

### OnMLMarkerTrackerResultsFound {#action-onmlmarkertrackerresultsfound}

When any results are found from marker scanning, this event will be raised. 

```csharp
public static Action< MarkerData > OnMLMarkerTrackerResultsFound()
```






-----------

### OnMLMarkerTrackerResultsFoundArray {#action-onmlmarkertrackerresultsfoundarray}

When any results are found from marker scanning, this event will be raised with an array of all markers found. 

```csharp
public static Action< MarkerData[]> OnMLMarkerTrackerResultsFoundArray()
```






-----------

## Public Enums

### ArucoDictionaryName {#enums-arucodictionaryname}

Supported pre-defined ArUco dictionary and AprilTags. Marker Tracker supports pre-defined ArUco dictionary and AprilTags. ArUco dictionaries can be looked up and markers can be generated for them here: [http://chev.me/arucogen/](http://chev.me/arucogen/) Note: Due to 4X4 dictionaries suffering from frequent false detections, we discourage their use. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NotInitialized | -1| Default value. Nothing will be detected.   |
| DICT_4X4_50 | 0| 4 by 4 pixel  ArUco  marker dictionary with 50 IDs.   |
| DICT_4X4_100 | | 4 by 4 pixel  ArUco  marker dictionary with 100 IDs.   |
| DICT_4X4_250 | | 4 by 4 pixel  ArUco  marker dictionary with 250 IDs.   |
| DICT_4X4_1000 | | 4 by 4 pixel  ArUco  marker dictionary with 1000 IDs.   |
| DICT_5X5_50 | | 5 by 5 pixel  ArUco  marker dictionary with 50 IDs.   |
| DICT_5X5_100 | | 5 by 5 pixel  ArUco  marker dictionary with 100 IDs.   |
| DICT_5X5_250 | | 5 by 5 pixel  ArUco  marker dictionary with 250 IDs.   |
| DICT_5X5_1000 | | 5 by 5 pixel  ArUco  marker dictionary with 1000 IDs.   |
| DICT_6X6_50 | | 6 by 6 pixel  ArUco  marker dictionary with 50 IDs.   |
| DICT_6X6_100 | | 6 by 6 pixel  ArUco  marker dictionary with 100 IDs.   |
| DICT_6X6_250 | | 6 by 6 pixel  ArUco  marker dictionary with 250 IDs.   |
| DICT_6X6_1000 | | 6 by 6 pixel  ArUco  marker dictionary with 1000 IDs.   |
| DICT_7X7_50 | | 7 by 7 pixel  ArUco  marker dictionary with 50 IDs.   |
| DICT_7X7_100 | | 7 by 7 pixel  ArUco  marker dictionary with 100 IDs.   |
| DICT_7X7_250 | | 7 by 7 pixel  ArUco  marker dictionary with 250 IDs.   |
| DICT_7X7_1000 | | 7 by 7 pixel  ArUco  marker dictionary with 1000 IDs.   |
| DICT_ARUCO_ORIGINAL | | 5 by 5 pixel ArUco marker dictionary with 1024 IDs   |
| DICT_APRILTAG_16h5 | | 4x4 bits, minimum hamming distance between any two codes = 5, 30 codes   |
| DICT_APRILTAG_25h9 | | 5x5 bits, minimum hamming distance between any two codes = 9, 35 codes   |
| DICT_APRILTAG_36h10 | | 6x6 bits, minimum hamming distance between any two codes = 10, 2320 codes   |
| DICT_APRILTAG_36h11 | | 6x6 bits, minimum hamming distance between any two codes = 11, 587 codes   |








-----------

### CameraHint {#enums-camerahint}

The CameraHint enum values are used to hint to the camera that should be used. This is set in the MLMarkerTracker.CustomProfile structure and this setting currently only applies to the aruco detectors. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| RGB | | Single RGB Camera.   |
| World | | One or more world cameras.   |




**Details**

RGB camera has higher resolution than world cameras and are better suited for use cases where the target to be tracked is small or needs to be detected from far.

World cameras make use of multiple world cameras to improve accuracy and increase the FoV for detection. from far. 





-----------

### CornerRefineMethod {#enums-cornerrefinemethod}

The Aruco/April tag detector comes with several corner refinement methods. Choosing the right corner refinement method has an impact on the accuracy and speed trade-off that comes with each detection pipeline. Corner refinement only applies to Aruco and April tags, not QR codes. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | | No refinement, may have inaccurate corners.   |
| Subpix | | Corners have subpixel coordinates. High detection rate, very fast, reasonable accuracy.   |
| Contour | | High detection rate, fast, reasonable accuracy.   |
| AprilTag | | Reasonable detection rate, slowest, but very accurate.   |








-----------

### FPSHint {#enums-fpshint}

Used to hint to the back-end the max frames per second that should be analyzed. This is set in the MLMarkerTrackerCustomProfile structure and this setting applies to all enabled trackers. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Low | |   |
| Medium | |   |
| High | |   |
| Max | |   |




**Details**

CPU load is a combination of enabled detector types, FpsHint and ResolutionHint. More detectors with a higher FPS and resolution hints will result in a higher CPU load. High CPU load can affect the performance of your system. 





-----------

### FullAnalysisIntervalHint {#enums-fullanalysisintervalhint}

In order to improve performance, the detectors don't always run on the full frame. Full frame analysis is however necessary to detect new markers that weren't detected before. Use this option to control how often the detector may detect new markers and its impact on tracking performance. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Max | | Detector analyzes every frame fully.   |
| Fast | | Detector analyzes frame fully very often.   |
| Medium | | Detector analyzes frame fully a few times per second.   |
| Slow | | Detector analyzes frame fully about every second.   |








-----------

### MarkerType {#enums-markertype}

Represents the different marker types supported by the API 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| None | 0| Represents no marker   |
| QR | 1| QR code of Model 1 or 2   |
| Aruco_April | 2| Aruco marker and AprilTag   |
| EAN_13 | 4| EAN-13 (experimental)   |
| UPC_A | 8| UPC-A (experimental)   |
| All | 0x3FFFFFFF| All supported markers   |








-----------

### Profile {#enums-profile}

Represents the different tracker profiles used to optimize marker tracking in difference use cases. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Default | | Generic tracker profile. Tracker profile that covers standard use cases. If this does not fit the needs of the application try the other profiles listed below.   |
| Custom | | Application can define a custom tracker profiler.   |
| Speed | | Use this profile to reduce the compute load and increase detection/tracker speed. This can result poor poses.   |
| Accuracy | | Use this profile to optimize for accurate marker poses. This can cause increased load on the compute.   |
| SmallTargets | | Use this profile to optimize for markers that are small or for larger markers that need to detected from far.   |
| Large_FOV | 6| Use this profile to be able to detect markers across a larger Field Of View. Marker Tracker system will attempt to use multiple cameras to detect the markers.   |








-----------

### ResolutionHint {#enums-resolutionhint}

The ResolutionHint enum values are used to hint to the back-end the resolution that should be used. This is set in the MLMarkerTracker.CustomProfile structure and this setting currently only applies to the QR, UPC and EAN detectors. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Low | |   |
| Medium | |   |
| High | |   |




**Details**

CPU load is a combination of enabled detector types, FpsHint and ResolutionHint. More detectors and a higher fps and resolution hints will result in a higher CPU load. High CPU load can affect the performance of your system. 





-----------


