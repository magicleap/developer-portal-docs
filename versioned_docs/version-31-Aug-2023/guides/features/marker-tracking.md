---
title: Marker Tracking
sidebar_position: 6
date: 12/14/2022
tags: [Features,Marker, Barcode, ArUco]
keywords: [Features, Marker, Barcode, ArUco]
---

The Magic Leap allows you to detect two-dimensional icons from a marker dataset and then continuously track the targets' locations and orientations as you or the markers move through the environment. You can also place and anchor digital content based on the presence and dimensions of a physical marker.

The Marker Tracking API can be used to track fiducial markers like QR codes, April tags and ArUco markers. For fiducial markers, Magic Leap provides 6DOF poses, and the encoded information. The scanner supports up to 16 markers. Identical QR codes will be treated as separate targets and reported individually, identical ArUco markers or April tags will lead to a collision and won't be reported separately.

Supported trackable markers (with pose info):

- ArUco markers
- AprilTag v2
- QR codes (model 1 & 2)
  
List of supported, detectable markers (no pose info):

- EAN-13 (experimental)
- UPC-A (experimental)

:::caution

Due to the 4X4 and the 'Aruco Original' dictionaries suffering from frequent false detections, we discourage their use.

:::

## Marker Tracker Profiles

The Marker Tracker API allows developers to select pre-defined Marker Tracker profiles as well define custom ones. The pre-defined  profiles are optimized for specific use cases, developers can select from the following:

|Marker Tracker Profile|Description                               |
|----------------------|------------------------------------------|
|Default| A Generic tracker profile. Covers standard use cases.|
|Custom| Application can define a custom tracker profiler. See [MLMarkerTrackerCustomProfile](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/struct_m_l_marker_tracker_custom_profile.md) for more details.|
|Speed| Optimized for speed. Use this profile to reduce the compute load and increase detection/tracker speed. This can result poor poses.|
|Accuracy| Optimized for accuracy. Use this profile to optimize for accurate marker poses. This can cause  increased load on the compute.|
|Small Targets| Optimized for small targets. Use this profile to optimize for markers that are small or for larger markers that need to detected from far.|
|Large FoV| Optimized for felid of view.Use this profile to be able to detect markers across a larger FoV. Marker Tracker system will attempt to use multiple cameras to detect the markers.|

## Learn More

- [Unity Marker Tracking Overview](/versioned_docs/version-31-Aug-2023/guides/unity/marker-tracking/marker-tracker-overview.md)
  - Learn how to implement Marker Tracking inside your Unity Application.
- [C++ Marker Tracking API](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___marker_tracking/group___marker_tracking.md)
  - Reference the API documentation to implement Marker Tracking using Magic Leap's Native API.

