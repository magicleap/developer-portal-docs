---
title: MLMarkerTrackerResult
summary: a list of these results will be returned by the marker scanner, after processing a video frame succesfully. 

---

# MLMarkerTrackerResult




A list of these results will be returned by the Marker Scanner, after processing a video frame succesfully.   





## Public Methods

### override string ToString {#override-string-tostring}

```csharp
public override string ToString()
```






-----------

## Public Attributes

### CoordinateFrameUID {#readonly-mlcoordinateframeuid-coordinateframeuid}

MLCoordinateFrameUID of the QR code. This FrameUID is only useful if the marker is of type #MLMarkerTypeQR This should be passed to the MLSnapshotGetTransform() function to get the 6 DOF pose of the QR code. Any marker that isn't a QR code will have an invalid FrameUID here. 

```csharp

public readonly MLCoordinateFrameUID CoordinateFrameUID;

```






-----------

### DecodedData {#readonly-decodeddata}

The data which was encoded in the marker. 

```csharp

public readonly MLMarkerTrackerDecodedData DecodedData;

```

| Type | Description  | 
|--|--|
| readonly [MLMarkerTrackerDecodedData](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/NativeBindings/UnityEngine.XR.MagicLeap.MLMarkerTracker.NativeBindings.MLMarkerTrackerDecodedData.md) | Represents the decoded data encoded in the marker. Markers can encode binary data, strings, URLs and more. This struct represents the decoded data read from a marker.  |





-----------

### IsValidPose {#readonly-bool-isvalidpose}

This indicates if coord&#95;frame&#95;marker holds a valid pose. If false do not use the CoordinateFrameUID. 

```csharp

public readonly bool IsValidPose;

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


