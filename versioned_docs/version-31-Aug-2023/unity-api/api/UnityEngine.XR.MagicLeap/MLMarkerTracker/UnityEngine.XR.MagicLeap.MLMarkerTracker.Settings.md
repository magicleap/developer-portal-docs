---
title: Settings

---

# Settings










## Public Methods

### [Settings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.Settings.md) Create {#settings-create}

```csharp
public static Settings Create(
    bool enableMarkerScanning =true,
    MarkerType markerTypes =MarkerType.All,
    float qRCodeSize =0.1f,
    ArucoDictionaryName arucoDicitonary =ArucoDictionaryName.DICT_5X5_100,
    float arucoMarkerSize =0.1f,
    int arucoCamera =0,
    FPSHint fpsHint =FPSHint.Medium,
    ResolutionHint resolutionHint =ResolutionHint.Low,
    FullAnalysisIntervalHint fullAnalysisIntervalHint =FullAnalysisIntervalHint.Medium,
    CornerRefineMethod cornerRefineMethod =CornerRefineMethod.None,
    bool useEdgeRefinement =false
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |enableMarkerScanning||
| [MarkerType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-markertype) |markerTypes|Represents the different marker types supported by the API |
| float |qRCodeSize||
| [ArucoDictionaryName](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-arucodictionaryname) |arucoDicitonary|Supported pre-defined ArUco dictionary and AprilTags. Marker Tracker supports pre-defined ArUco dictionary and AprilTags. ArUco dictionaries can be looked up and markers can be generated for them here: [http://chev.me/arucogen/](http://chev.me/arucogen/) Note: Due to 4X4 dictionaries suffering from frequent false detections, we discourage their use. |
| float |arucoMarkerSize||
| int |arucoCamera||
| [FPSHint](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-fpshint) |fpsHint|Used to hint to the back-end the max frames per second that should be analyzed. This is set in the MLMarkerTrackerCustomProfile structure and this setting applies to all enabled trackers. |
| [ResolutionHint](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-resolutionhint) |resolutionHint|The ResolutionHint enum values are used to hint to the back-end the resolution that should be used. This is set in the MLMarkerTracker.CustomProfile structure and this setting currently only applies to the QR, UPC and EAN detectors. |
| [FullAnalysisIntervalHint](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-fullanalysisintervalhint) |fullAnalysisIntervalHint|In order to improve performance, the detectors don't always run on the full frame. Full frame analysis is however necessary to detect new markers that weren't detected before. Use this option to control how often the detector may detect new markers and its impact on tracking performance. |
| [CornerRefineMethod](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-cornerrefinemethod) |cornerRefineMethod|The Aruco/April tag detector comes with several corner refinement methods. Choosing the right corner refinement method has an impact on the accuracy and speed trade-off that comes with each detection pipeline. Corner refinement only applies to Aruco and April tags, not QR codes. |
| bool |useEdgeRefinement||






-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### ArucoCamera {#readonly-int-arucocamera}

Determines which camera to use for aruco marker tracking. 0 uses the world cameras and 1 uses the RGB camera. 

```csharp

public readonly int ArucoCamera;

```






-----------

### ArucoDicitonary {#readonly-arucodicitonary}

Aruco dictionary to use. 

```csharp

public readonly ArucoDictionaryName ArucoDicitonary;

```

| Type | Description  | 
|--|--|
| readonly [ArucoDictionaryName](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-arucodictionaryname) | Supported pre-defined ArUco dictionary and AprilTags. Marker Tracker supports pre-defined ArUco dictionary and AprilTags. ArUco dictionaries can be looked up and markers can be generated for them here: [http://chev.me/arucogen/](http://chev.me/arucogen/) Note: Due to 4X4 dictionaries suffering from frequent false detections, we discourage their use.  |





-----------

### ArucoMarkerSize {#readonly-float-arucomarkersize}

Aruco marker size to use (in meters). 

```csharp

public readonly float ArucoMarkerSize;

```






-----------

### CornerRefineMethod {#readonly-cornerrefinemethod}

This option provides control over corner refinement methods and a way to balance detection rate, speed and pose accuracy. Always available and applicable for Aruco and April tags. 

```csharp

public readonly CornerRefineMethod CornerRefineMethod;

```

| Type | Description  | 
|--|--|
| readonly [CornerRefineMethod](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-cornerrefinemethod) | The Aruco/April tag detector comes with several corner refinement methods. Choosing the right corner refinement method has an impact on the accuracy and speed trade-off that comes with each detection pipeline. Corner refinement only applies to Aruco and April tags, not QR codes.  |





-----------

### EnableMarkerScanning {#readonly-bool-enablemarkerscanning}

If   true  , Marker Scanner will detect markers and track QR codes. Marker Scanner should be disabled when app is paused and enabled when app resumes. When enabled, Marker Scanner will gain access to the camera and start scanning markers. When disabled Marker Scanner will release the camera and stop scanning markers. Internal state of the scanner will be maintained. 

```csharp

public readonly bool EnableMarkerScanning;

```






-----------

### FPSHint {#readonly-fpshint}

A hint to the back-end the max frames per second hat should be analyzed. 

```csharp

public readonly FPSHint FPSHint;

```

| Type | Description  | 
|--|--|
| readonly [FPSHint](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-fpshint) | Used to hint to the back-end the max frames per second that should be analyzed. This is set in the MLMarkerTrackerCustomProfile structure and this setting applies to all enabled trackers.  |





-----------

### FullAnalysisIntervalHint {#readonly-fullanalysisintervalhint}

In order to improve performance, the detectors don't always run on the full frame.Full frame analysis is however necessary to detect new markers that weren't detected before. Use this option to control how often the detector may detect new markers and its impact on tracking performance. 

```csharp

public readonly FullAnalysisIntervalHint FullAnalysisIntervalHint;

```

| Type | Description  | 
|--|--|
| readonly [FullAnalysisIntervalHint](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-fullanalysisintervalhint) | In order to improve performance, the detectors don't always run on the full frame. Full frame analysis is however necessary to detect new markers that weren't detected before. Use this option to control how often the detector may detect new markers and its impact on tracking performance.  |





-----------

### MarkerTypes {#readonly-markertypes}

The marker types that are enabled for this scanner. Enable markers by combining any number of   MarkerType   flags using '|' (bitwise 'or'). 

```csharp

public readonly MarkerType MarkerTypes;

```

| Type | Description  | 
|--|--|
| readonly [MarkerType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-markertype) | Represents the different marker types supported by the API  |





-----------

### QRCodeSize {#readonly-float-qrcodesize}

The physical size of the QR code that shall be tracked (in meters). The physical size is important to know, because once a QR code is detected we can only determine its 3D position when we know its correct size. The size of the QR code is given in meters and represents the length of one side of the square code(without the outer margin). Min size: As a rule of thumb the size of a QR code should be at least a 10th of the distance you intend to scan it with a camera device. Higher version markers with higher information density might need to be larger than that to be detected reliably. Max size: Our camera needs to see the whole marker at once. If it's too large, we won't detect it. 

```csharp

public readonly float QRCodeSize;

```






-----------

### ResolutionHint {#readonly-resolutionhint}

A hint to the back-end the resolution that should be used. 

```csharp

public readonly ResolutionHint ResolutionHint;

```

| Type | Description  | 
|--|--|
| readonly [ResolutionHint](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-resolutionhint) | The ResolutionHint enum values are used to hint to the back-end the resolution that should be used. This is set in the MLMarkerTracker.CustomProfile structure and this setting currently only applies to the QR, UPC and EAN detectors.  |





-----------

### UseEdgeRefinement {#readonly-bool-useedgerefinement}

Run refinement step that uses marker edges to generate even more accurate corners, but slow down tracking rate overall by consuming more compute. Aruco/April tags only. 

```csharp

public readonly bool UseEdgeRefinement;

```






-----------


