---
title: ReferenceFrame
summary: contains information necessary to report on xranchors. 

---

# ReferenceFrame



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Contains information necessary to report on  XRAnchor s.   





## Public Fields

### anchor {#xranchor-anchor}

Get the reference frame as a refernce point 

```csharp

public XRAnchor anchor { get; set; }

```






-----------

### anchorPose {#pose-anchorpose}

Compute the pose of the anchor. 

```csharp

public Pose anchorPose { get; set; }

```






-----------

### cfuid {#nativemagicleapnativebindingsmlcoordinateframeuid-cfuid}

The UID of the closest coordinate frame 

```csharp

public Native.MagicLeapNativeBindings.MLCoordinateFrameUID cfuid { get; set; }

```

| Type | Description  | 
|--|--|
| [Native.MagicLeapNativeBindings.MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) | A unique identifier which represents a coordinate frame. The unique identifier is comprised of two values.  |





-----------

### coordinateFrame {#pose-coordinateframe}

The pose of the coordinate frame used as the origin when calculating the anchorPose. 

```csharp

public Pose coordinateFrame { get; set; }

```






-----------

### trackableId {#trackableid-trackableid}

The anchor's trackable id. 

```csharp

public TrackableId trackableId { get; set; }

```






-----------

### trackingState {#trackingstate-trackingstate}

The tracking state associated with the anchor 

```csharp

public TrackingState trackingState { get; set; }

```






-----------

## Public Methods

### void ComputeDelta {#void-computedelta}

```csharp
public void ComputeDelta(
    Pose pose
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Pose |pose||






-----------

### unsafe TrackableId GenerateTrackableId {#unsafe-trackableid-generatetrackableid}

```csharp
public static unsafe TrackableId GenerateTrackableId()
```






-----------

###  ReferenceFrame {#functions-referenceframe}

```csharp
public ReferenceFrame(
    Cinfo cinfo
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Cinfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/ReferenceFrame/UnityEngine.XR.MagicLeap.ReferenceFrame.Cinfo.md) |cinfo|Information necessary to construct a reference frame |






-----------

### void SetCoordinateFrame {#void-setcoordinateframe}

Sets a new coordinate frame. This is different from simply setting the coordinateFrame. This method causes the anchor to be computed relative to a different coordinate frame entirely. 

```csharp
public void SetCoordinateFrame(
    Native.MagicLeapNativeBindings.MLCoordinateFrameUID cfuid,
    Pose coordinateFrame
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Native.MagicLeapNativeBindings.MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) |cfuid|The UID of the new coordinate frame|
| Pose |coordinateFrame|The pose of the new coordinate frame|






-----------

### bool SetTrackingState {#bool-settrackingstate}

Sets the tracking state and returns true if the state changed. 

```csharp
public bool SetTrackingState(
    TrackingState trackingState
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| TrackingState |trackingState|The new tracking state|






**Returns**: true if the tracking state changed.



-----------

## Public Attributes

### m_AnchorFromCoordinateFrame {#pose-m-anchorfromcoordinateframe}

A pose which describes the delta beteen the anchor and the closest MLCoordinateFrame. 

```csharp

public Pose m_AnchorFromCoordinateFrame;

```






-----------


