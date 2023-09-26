---
title: TrackerSettings

---

# TrackerSettings










## Public Methods

### [TrackerSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/TrackerSettings/UnityEngine.XR.MagicLeap.MLMarkerTracker.TrackerSettings.md) Create {#trackersettings-create}

```csharp
public static TrackerSettings Create(
    bool enableMarkerScanning =true,
    MarkerType markerTypes =MarkerType.All,
    float qRCodeSize =0.1f,
    ArucoDictionaryName arucoDicitonary =ArucoDictionaryName.DICT_5X5_100,
    float arucoMarkerSize =0.1f,
    Profile profile =Profile.Default,
    CustomProfile customProfile =default
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
| [Profile](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-profile) |profile|Represents the different tracker profiles used to optimize marker tracking in difference use cases. |
| [CustomProfile](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/TrackerSettings/UnityEngine.XR.MagicLeap.MLMarkerTracker.TrackerSettings.CustomProfile.md) |customProfile||






-----------

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

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

### CustomTrackerProfile {#readonly-customtrackerprofile}

The custom tracker profile to be used if the TrackerProfile member is set to Custom. 

```csharp

public readonly CustomProfile CustomTrackerProfile;

```






-----------

### EnableMarkerScanning {#readonly-bool-enablemarkerscanning}

If   true  , Marker Scanner will detect markers and track QR codes. Marker Scanner should be disabled when app is paused and enabled when app resumes. When enabled, Marker Scanner will gain access to the camera and start scanning markers. When disabled Marker Scanner will release the camera and stop scanning markers. Internal state of the scanner will be maintained. 

```csharp

public readonly bool EnableMarkerScanning;

```






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

### TrackerProfile {#readonly-trackerprofile}

Tracker profile to be used. 

```csharp

public readonly Profile TrackerProfile;

```

| Type | Description  | 
|--|--|
| readonly [Profile](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-profile) | Represents the different tracker profiles used to optimize marker tracking in difference use cases.  |





-----------


