---
title: MLMarkerTrackerDecodedArucoData
summary: aruco decoded data. 

---

# MLMarkerTrackerDecodedArucoData




Aruco decoded data.   





## Public Attributes

### Dictionary {#readonly-dictionary}

Dictionary used by the Aruco Marker. 

```csharp

public readonly ArucoDictionaryName Dictionary;

```

| Type | Description  | 
|--|--|
| readonly [ArucoDictionaryName](/versioned_docs/version-22-Mar-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-arucodictionaryname) | Supported pre-defined ArUco dictionary and AprilTags. Marker Tracker supports pre-defined ArUco dictionary and AprilTags. ArUco dictionaries can be looked up and markers can be generated for them here: [http://chev.me/arucogen/](http://chev.me/arucogen/) Note: Due to 4X4 dictionaries suffering from frequent false detections, we discourage their use.  |





-----------

### Id {#readonly-uint-id}

Type selector for the structure. 

```csharp

public readonly uint Id;

```






-----------

### Type {#readonly-decodeddatatype-type}

Type selector for the structure. 

```csharp

public readonly DecodedDataType Type;

```






-----------


