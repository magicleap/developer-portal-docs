---
title: MLMarkerTrackerSettings
summary: marker tracker settings. 

---

# MLMarkerTrackerSettings

**Module:** **[Fiducial Marker Tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md)**



Marker Tracker Settings.  [More...](#detailed-description)


`#include <ml_marker_tracking.h>`

## Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| uint32_t | **[version](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_settings.md#uint32-t-version)**  |
| bool | **[enable_marker_tracking](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_settings.md#bool-enable-marker-tracking)** <br></br>If `true`, Marker Tracker will detect and track the enabled marker types.  |
| uint32_t | **[enabled_detector_types](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_settings.md#uint32-t-enabled-detector-types)** <br></br>The detector types that are enabled.  |
| [MLMarkerTrackerArucoDictionaryName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackerarucodictionaryname) | **[dictionary](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_settings.md#mlmarkertrackerarucodictionaryname-dictionary)** <br></br>Aruco Dictionary or April Tag name from which markers shall be tracked.  |
| float | **[aruco_marker_length](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_settings.md#float-aruco-marker-length)** <br></br>The length of the Aruco markers that shall be tracked.  |
| float | **[qr_code_length](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_settings.md#float-qr-code-length)** <br></br>The length of the QR code that shall be tracked.  |
| [MLMarkerTrackerProfile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackerprofile) | **[tracker_profile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_settings.md#mlmarkertrackerprofile-tracker-profile)** <br></br>Tracker profile to be used.  |
| [MLMarkerTrackerCustomProfile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_custom_profile.md) | **[custom_tracker_profile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_settings.md#mlmarkertrackercustomprofile-custom-tracker-profile)** <br></br>Custom tracker profile to be used.  |

## Detailed Description

```cpp
struct MLMarkerTrackerSettings;
```

Marker Tracker Settings. 

When creating a Marker Tracker, this list of settings needs to be passed to configure the tracker properly. The tracker will only output detections of markers that belong to the defined dictionary and the estimated poses will only be correct if the marker length has been set correctly.




**API Level:**
  * 21




-----------
## Public Attributes Documentation

### version {#uint32-t-version}

```cpp
uint32_t version;
```


Version of this structure. 





-----------

### enable_marker_tracking {#bool-enable-marker-tracking}

```cpp
bool enable_marker_tracking;
```

If `true`, Marker Tracker will detect and track the enabled marker types. 

Marker Tracker should be disabled when app is paused and enabled when app resumes. When enabled, Marker Tracker will gain access to the camera and start analysing camera frames. When disabled Marker Tracker will release the camera and stop tracking markers. Internal state of the tracker will be maintained. 





-----------

### enabled_detector_types {#uint32-t-enabled-detector-types}

```cpp
uint32_t enabled_detector_types;
```

The detector types that are enabled. 

Enable detector types by combining any number of [MLMarkerTrackerDetectorType](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enum-mlmarkertrackerdetectortype) flags using '|' (bitwise 'or'). 





-----------

### dictionary {#mlmarkertrackerarucodictionaryname-dictionary}

```cpp
MLMarkerTrackerArucoDictionaryName dictionary;
```

Aruco Dictionary or April Tag name from which markers shall be tracked. 


| Type | Description |
|--|--|
| [MLMarkerTrackerArucoDictionaryName](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackerarucodictionaryname) | Supported pre-defined Aruco dictionary and AprilTags.  |


Unused if Aruco detector is not enabled. 





-----------

### aruco_marker_length {#float-aruco-marker-length}

```cpp
float aruco_marker_length;
```

The length of the Aruco markers that shall be tracked. 

The marker length is important to know, because once a marker is detected we can only determine its 3D position if we know how large it is in real life. The length of a marker is given in meters and represents the length of a single side of the marker square.

Unused if Aruco detector is not enabled. 





-----------

### qr_code_length {#float-qr-code-length}

```cpp
float qr_code_length;
```

The length of the QR code that shall be tracked. 

The marker length is important to know, because once a QR code is detected we can only determine its 3D position if we know how large it is in real life. The length of a QR code is given in meters and represents the length of a single side of the QR code square.

Unused if QR detector is not enabled. 





-----------

### tracker_profile {#mlmarkertrackerprofile-tracker-profile}

```cpp
MLMarkerTrackerProfile tracker_profile;
```

Tracker profile to be used. 


| Type | Description |
|--|--|
| [MLMarkerTrackerProfile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enums-mlmarkertrackerprofile) | Represents the different tracker profiles.  |


See [MLMarkerTrackerProfile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md#enum-mlmarkertrackerprofile) for details. 





-----------

### custom_tracker_profile {#mlmarkertrackercustomprofile-custom-tracker-profile}

```cpp
MLMarkerTrackerCustomProfile custom_tracker_profile;
```

Custom tracker profile to be used. 


| Type | Description |
|--|--|
| [MLMarkerTrackerCustomProfile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_custom_profile.md) | Marker Tracker Custom Profile.  |


See [MLMarkerTrackerCustomProfile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_custom_profile.md) for details. This custom profile will only be used when MLMarkerTrackerProfile is set to MLMarkerTrackerProfile_Custom and ignored for all other cases. 





-----------


