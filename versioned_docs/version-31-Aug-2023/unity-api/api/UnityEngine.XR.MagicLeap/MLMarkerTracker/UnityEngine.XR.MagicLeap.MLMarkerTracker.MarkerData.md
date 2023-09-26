---
title: MarkerData
summary: marker data as returned by the magic leap sdk 

---

# MarkerData




Marker data as returned by the Magic Leap SDK   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### ArucoData {#readonly-arucodata}

Aruco decoded data (if any exists). 

```csharp

public readonly ArucoData ArucoData;

```






-----------

### BinaryData {#readonly-binarydata}

Binary decoded data (if any exists). 

```csharp

public readonly BinaryData BinaryData;

```






-----------

### Pose {#readonly-pose-pose}

The world-space position and rotation of the marker. 

```csharp

public readonly Pose Pose;

```






-----------

### ReprojectionError {#readonly-float-reprojectionerror}

The reprojection error of this QR code detection in degrees. 

```csharp

public readonly float ReprojectionError;

```


**Details**

The reprojection error is only useful when tracking QR codes. A high reprojection error means that the estimated pose of the QR code doesn't match well with the 2D detection on the processed video frame and thus the pose might be inaccurate. The error is given in degrees, signifying by how much either camera or QR code would have to be moved or rotated to create a perfect reprojection. The further away your QR code is, the smaller this reprojection error will be for the same displacement error of the code. 





-----------

### Type {#readonly-type}

The type of marker that was detected. 

```csharp

public readonly MarkerType Type;

```

| Type | Description  | 
|--|--|
| readonly [MarkerType](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md#enums-markertype) | Represents the different marker types supported by the API  |





-----------


