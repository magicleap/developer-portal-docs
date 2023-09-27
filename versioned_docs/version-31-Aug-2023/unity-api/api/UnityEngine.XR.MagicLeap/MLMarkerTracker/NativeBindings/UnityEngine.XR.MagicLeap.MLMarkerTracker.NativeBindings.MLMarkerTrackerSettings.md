---
title: MLMarkerTrackerSettings
summary: when creating the marker scanner, this list of settings needs to be passed to configure the scanner properly.the estimated poses will only be correct if the marker length has been set correctly. 

---

# MLMarkerTrackerSettings




When creating the Marker Scanner, this list of settings needs to be passed to configure the scanner properly.The estimated poses will only be correct if the marker length has been set correctly.   





## Public Methods

###  MLMarkerTrackerSettings {#functions-mlmarkertrackersettings}

Sets the native structures from the user facing properties. 

```csharp
public MLMarkerTrackerSettings(
    TrackerSettings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [TrackerSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/TrackerSettings/UnityEngine.XR.MagicLeap.MLMarkerTracker.TrackerSettings.md) |settings||






-----------

###  MLMarkerTrackerSettings {#functions-mlmarkertrackersettings}

Sets the native structures from the user facing properties. 

```csharp
public MLMarkerTrackerSettings(
    Settings settings
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Settings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.Settings.md) |settings||






-----------

## Public Attributes

### ArucoDicitonary {#readonly-arucodicitonary}

Aruco Dictionary or April Tag name from which markers shall be tracked. 

```csharp

public readonly ArucoDictionaryName ArucoDicitonary;

```

| Type | Description  | 
|--|--|
| readonly [ArucoDictionaryName](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-arucodictionaryname) | Supported pre-defined ArUco dictionary and AprilTags. Marker Tracker supports pre-defined ArUco dictionary and AprilTags. ArUco dictionaries can be looked up and markers can be generated for them here: [http://chev.me/arucogen/](http://chev.me/arucogen/) Note: Due to 4X4 dictionaries suffering from frequent false detections, we discourage their use.  |





-----------

### ArucoMarkerSize {#readonly-float-arucomarkersize}

The physical size of the Aruco marker that shall be tracked. 

```csharp

public readonly float ArucoMarkerSize;

```


**Details**

The physical size is important to know, because once a Aruco marker is detected we can only determine its 3D position when we know its correct size. The size of the Aruco marker is given in meters and represents the length of one side of the square marker(without the outer margin).

Min size: As a rule of thumb the size of a Aruco marker should be at least a 10th of the distance you intend to scan it with a camera device. Higher version markers with higher information density might need to be larger than that to be detected reliably.

Max size: Our camera needs to see the whole marker at once. If it's too large, we won't detect it. 





-----------

### CustomTrackerProfile {#readonly-customtrackerprofile}

Custom tracker profile to be used if the TrackerProfile member is the Custom value (see [MLMarkerTracker.Profile](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-profile) enum). 

```csharp

public readonly MLMarkerTrackerCustomProfile CustomTrackerProfile;

```

| Type | Description  | 
|--|--|
| readonly [MLMarkerTrackerCustomProfile](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/NativeBindings/UnityEngine.XR.MagicLeap.MLMarkerTracker.NativeBindings.MLMarkerTrackerCustomProfile.md) | Marker Tracker system provides a set of standard tracking profiles (see [MLMarkerTracker.Profile](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-profile) enum) to configure the tracker settings. This is the structure that defines a custom tracker profile.  |





-----------

### EnableMarkerScanning {#readonly-bool-enablemarkerscanning}

If true, Marker Tracker will detect and track the enabled marker types. Marker Tracker should be disabled when app is paused and enabled when app resumes. When enabled, Marker Tracker will gain access to the camera and start analysing camera frames. When disabled Marker Tracker will release the camera and stop tracking markers. Internal state of the tracker will be maintained. 

```csharp

public readonly bool EnableMarkerScanning;

```






-----------

### EnabledDetectorTypes {#readonly-uint-enableddetectortypes}

The marker types that are enabled for this scanner. Enable markers by combining any number of MLMarkerType flags using '|' (bitwise 'or'). 

```csharp

public readonly uint EnabledDetectorTypes;

```






-----------

### QRCodeSize {#readonly-float-qrcodesize}

The physical size of the QR code that shall be tracked. 

```csharp

public readonly float QRCodeSize;

```


**Details**

The physical size is important to know, because once a QR code is detected we can only determine its 3D position when we know its correct size. The size of the QR code is given in meters and represents the length of one side of the square code(without the outer margin).

Min size: As a rule of thumb the size of a QR code should be at least a 10th of the distance you intend to scan it with a camera device. Higher version markers with higher information density might need to be larger than that to be detected reliably.

Max size: Our camera needs to see the whole marker at once. If it's too large, we won't detect it. 





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

### Version {#readonly-uint-version}

Version of the struct. 

```csharp

public readonly uint Version;

```






-----------


