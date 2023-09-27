---
title: MLMarkerTrackerCustomProfile
summary: marker tracker custom profile. 

---

# MLMarkerTrackerCustomProfile

**Module:** **[Fiducial Marker Tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md)**



Marker Tracker Custom Profile.  [More...](#detailed-description)


`#include <ml_marker_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMarkerTrackingFpsHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackingfpshint) | **[fps_hint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_custom_profile.md#mlmarkertrackingfpshint-fps-hint)** <br></br>Framerate hint used for all detectors. See [MLMarkerTrackingFpsHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enum-mlmarkertrackingfpshint) for details.  |
| [MLMarkerTrackingResolutionHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackingresolutionhint) | **[resolution_hint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_custom_profile.md#mlmarkertrackingresolutionhint-resolution-hint)** <br></br>The resolution hint. See [MLMarkerTrackingResolutionHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enum-mlmarkertrackingresolutionhint) for details.  |
| [MLMarkerTrackerCameraHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackercamerahint) | **[camera_hint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_custom_profile.md#mlmarkertrackercamerahint-camera-hint)** <br></br>Camera hint used for all detectors. See [MLMarkerTrackerCameraHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enum-mlmarkertrackercamerahint) for details.  |
| [MLMarkerTrackerCornerRefineMethod](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackercornerrefinemethod) | **[corner_refine_method](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_custom_profile.md#mlmarkertrackercornerrefinemethod-corner-refine-method)** <br></br>Corner refinement method for Aruco/April tag detector.  |
| bool | **[use_edge_refinement](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_custom_profile.md#bool-use-edge-refinement)** <br></br>Activate Edge Refinement. Run refinement step that uses marker edges to generate even more accurate corners, but slow down tracking rate overall by consuming more compute. Aruco/April tags only.  |
| [MLMarkerTrackerFullAnalysisIntervalHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackerfullanalysisintervalhint) | **[full_analysis_interval_hint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_custom_profile.md#mlmarkertrackerfullanalysisintervalhint-full-analysis-interval-hint)** <br></br>Time interval between fully analyzed frames.  |

## Detailed Description

```cpp
struct MLMarkerTrackerCustomProfile;
```

Marker Tracker Custom Profile. 

Marker Tracker system provides a set of standard tracking profiles (see [MLMarkerTrackerProfile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enum-mlmarkertrackerprofile)) to configure the tracker settings. If this does not meet the application's needs then the application can choose to define a custom tracker profile using [MLMarkerTrackerCustomProfile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_custom_profile.md). 





-----------
## Public Attributes Documentation

### fps_hint {#mlmarkertrackingfpshint-fps-hint}

```cpp
MLMarkerTrackingFpsHint fps_hint;
```

Framerate hint used for all detectors. See [MLMarkerTrackingFpsHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enum-mlmarkertrackingfpshint) for details. 


| Type | Description |
|--|--|
| [MLMarkerTrackingFpsHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackingfpshint) | Marker tracker FPS hint.  |






-----------

### resolution_hint {#mlmarkertrackingresolutionhint-resolution-hint}

```cpp
MLMarkerTrackingResolutionHint resolution_hint;
```

The resolution hint. See [MLMarkerTrackingResolutionHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enum-mlmarkertrackingresolutionhint) for details. 


| Type | Description |
|--|--|
| [MLMarkerTrackingResolutionHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackingresolutionhint) | Marker tracker resolution hint.  |






-----------

### camera_hint {#mlmarkertrackercamerahint-camera-hint}

```cpp
MLMarkerTrackerCameraHint camera_hint;
```

Camera hint used for all detectors. See [MLMarkerTrackerCameraHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enum-mlmarkertrackercamerahint) for details. 


| Type | Description |
|--|--|
| [MLMarkerTrackerCameraHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackercamerahint) | Marker tracker camera hint.  |






-----------

### corner_refine_method {#mlmarkertrackercornerrefinemethod-corner-refine-method}

```cpp
MLMarkerTrackerCornerRefineMethod corner_refine_method;
```

Corner refinement method for Aruco/April tag detector. 


| Type | Description |
|--|--|
| [MLMarkerTrackerCornerRefineMethod](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackercornerrefinemethod) | Corner Refinement Method.  |


This option provides control over corner refinement methods and a way to balance detection rate, speed and pose accuracy. Always available and applicable for Aruco and April tags.

See [MLMarkerTrackerCornerRefineMethod](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enum-mlmarkertrackercornerrefinemethod) for details. 





-----------

### use_edge_refinement {#bool-use-edge-refinement}

```cpp
bool use_edge_refinement;
```

Activate Edge Refinement. Run refinement step that uses marker edges to generate even more accurate corners, but slow down tracking rate overall by consuming more compute. Aruco/April tags only. 



:::note
Recommended in combination with Contour Corner Refine method for best balance between performance and accuracy. 
:::



-----------

### full_analysis_interval_hint {#mlmarkertrackerfullanalysisintervalhint-full-analysis-interval-hint}

```cpp
MLMarkerTrackerFullAnalysisIntervalHint full_analysis_interval_hint;
```

Time interval between fully analyzed frames. 


| Type | Description |
|--|--|
| [MLMarkerTrackerFullAnalysisIntervalHint](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackerfullanalysisintervalhint) | Full Frame Analysis Time Interval.  |


For faster tracking not every single frame is fully analyzed. Increasing this time will improve tracking speed but negatively impact detection latency of new markers. 





-----------


