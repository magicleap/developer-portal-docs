---
title: ResultExtras

---

# ResultExtras










## Public Attributes

### FrameNumber {#readonly-long-framenumber}

Frame number associated with this result. 

```csharp

public readonly long FrameNumber;

```






-----------

### Intrinsics {#readonly-intrinsics}

Intrinsic calibration parameters. 

```csharp

public readonly IntrinsicCalibrationParameters Intrinsics;

```

| Type | Description  | 
|--|--|
| readonly [IntrinsicCalibrationParameters](/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.IntrinsicCalibrationParameters.md) | Camera intrinsic parameters.  |





-----------

### VCamTimestamp {#readonly-vcamtimestamp}

Frame timestamp in microseconds. 

```csharp

public readonly MLTime VCamTimestamp;

```

| Type | Description  | 
|--|--|
| readonly [MLTime](/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) | Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. If [OpenXR](/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) is used, [MLTime](/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) is synonymous with the XrTime type.  |





-----------

