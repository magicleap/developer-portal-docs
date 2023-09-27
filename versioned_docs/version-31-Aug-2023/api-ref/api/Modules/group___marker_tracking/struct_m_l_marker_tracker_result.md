---
title: MLMarkerTrackerResult
summary: represents the result for a single marker. 

---

# MLMarkerTrackerResult

**Module:** **[Fiducial Marker Tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md)**



Represents the result for a single marker.  [More...](#detailed-description)


`#include <ml_marker_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| [MLMarkerTrackerDecodedData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_data.md) | **[decoded_data](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result.md#mlmarkertrackerdecodeddata-decoded-data)** <br></br>The data which was encoded in the marker.  |
| [MLMarkerTrackerDetectorType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackerdetectortype) | **[detector_type](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result.md#mlmarkertrackerdetectortype-detector-type)** <br></br>The detector type that created this result.  |
| bool | **[valid_pose](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result.md#bool-valid-pose)** <br></br>This indicates if coord_frame_marker holds a valid pose.  |
| [MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) | **[coord_frame_marker](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result.md#mlcoordinateframeuid-coord-frame-marker)** <br></br>[MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) of the marker.  |
| float | **[reprojection_err](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_result.md#float-reprojection-err)** <br></br>The reprojection error of this marker detection in meters.  |

## Detailed Description

```cpp
struct MLMarkerTrackerResult;
```

Represents the result for a single marker. 

A list of these detections will be returned by the Marker Tracker, after processing a camera frame succesfully.




**API Level:**
  * 20




-----------
## Public Attributes Documentation

### decoded_data {#mlmarkertrackerdecodeddata-decoded-data}

```cpp
MLMarkerTrackerDecodedData decoded_data;
```

The data which was encoded in the marker. 


| Type | Description |
|--|--|
| [MLMarkerTrackerDecodedData](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_decoded_data.md) | Represents the decoded data.  |






-----------

### detector_type {#mlmarkertrackerdetectortype-detector-type}

```cpp
MLMarkerTrackerDetectorType detector_type;
```

The detector type that created this result. 


| Type | Description |
|--|--|
| [MLMarkerTrackerDetectorType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackerdetectortype) | Represents the different detector types supported by the API.  |






-----------

### valid_pose {#bool-valid-pose}

```cpp
bool valid_pose;
```

This indicates if coord_frame_marker holds a valid pose. 

If false do not use coord_frame_marker. 





-----------

### coord_frame_marker {#mlcoordinateframeuid-coord-frame-marker}

```cpp
MLCoordinateFrameUID coord_frame_marker;
```

[MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/struct_m_l_coordinate_frame_u_i_d.md) of the marker. 

When valid_pose is true, this can be passed to the [MLSnapshotGetTransform()](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___perception/group___perception.md#mlresult-mlsnapshotgettransform) function to get the 6 DOF pose of the marker. 





-----------

### reprojection_err {#float-reprojection-err}

```cpp
float reprojection_err;
```

The reprojection error of this marker detection in meters. 

A high reprojection error means that the estimated pose of the marker doesn't match well with the 2D detection on the processed video frame and thus the pose might be inaccurate. The error is given in meters, representing the displacement between real marker and its estimated pose. This means this is a normalized number, independent of marker distance or length. 





-----------


