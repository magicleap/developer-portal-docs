---
title: Cinfo
summary: information necessary to construct a reference frame 

---

# Cinfo




Information necessary to construct a reference frame   





## Public Attributes

### cfuid {#nativemagicleapnativebindingsmlcoordinateframeuid-cfuid}

The closest coordinate frame's UID. Necessary so we can update the anchor in the future. 

```csharp

public Native.MagicLeapNativeBindings.MLCoordinateFrameUID cfuid;

```

| Type | Description  | 
|--|--|
| [Native.MagicLeapNativeBindings.MLCoordinateFrameUID](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLCoordinateFrameUID.md) | A unique identifier which represents a coordinate frame. The unique identifier is comprised of two values.  |





-----------

### closetCoordinateFrame {#pose-closetcoordinateframe}

The closet coordinate frame to the requested point 

```csharp

public Pose closetCoordinateFrame;

```






-----------

### initialAnchorPose {#pose-initialanchorpose}

The initial pose of the anchor. Necessary so we can compute the transform between [closetCoordinateFrame](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/ReferenceFrame/UnityEngine.XR.MagicLeap.ReferenceFrame.Cinfo.md#pose-closetcoordinateframe) and the anchor. 

```csharp

public Pose initialAnchorPose;

```






-----------

### trackingState {#trackingstate-trackingstate}

The tracking state of the anchor. Necessary so we can report an update if the tracking state changes. 

```csharp

public TrackingState trackingState;

```






-----------


