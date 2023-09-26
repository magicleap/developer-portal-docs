---
title: CustomProfile

---

# CustomProfile










## Public Methods

### [CustomProfile](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/TrackerSettings/UnityEngine.XR.MagicLeap.MLMarkerTracker.TrackerSettings.CustomProfile.md) Create {#customprofile-create}

```csharp
public static CustomProfile Create(
    FPSHint fpsHint =FPSHint.Medium,
    ResolutionHint resolutionHint =ResolutionHint.Low,
    CameraHint cameraHint =CameraHint.RGB,
    FullAnalysisIntervalHint fullAnalysisIntervalHint =FullAnalysisIntervalHint.Medium,
    CornerRefineMethod cornerRefineMethod =CornerRefineMethod.None,
    bool useEdgeRefinement =false
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [FPSHint](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-fpshint) |fpsHint|Used to hint to the back-end the max frames per second that should be analyzed. This is set in the MLMarkerTrackerCustomProfile structure and this setting applies to all enabled trackers. |
| [ResolutionHint](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-resolutionhint) |resolutionHint|The ResolutionHint enum values are used to hint to the back-end the resolution that should be used. This is set in the MLMarkerTracker.CustomProfile structure and this setting currently only applies to the QR, UPC and EAN detectors. |
| [CameraHint](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-camerahint) |cameraHint|The CameraHint enum values are used to hint to the camera that should be used. This is set in the MLMarkerTracker.CustomProfile structure and this setting currently only applies to the aruco detectors. |
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

### CameraHint {#readonly-camerahint}

A hint to the back-end for what cameras should be used. 

```csharp

public readonly CameraHint CameraHint;

```

| Type | Description  | 
|--|--|
| readonly [CameraHint](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-camerahint) | The CameraHint enum values are used to hint to the camera that should be used. This is set in the MLMarkerTracker.CustomProfile structure and this setting currently only applies to the aruco detectors.  |





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


