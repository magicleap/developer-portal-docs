---
title: MLCameraResultExtras
summary: resultextras is a structure to encapsulate various indices for a capture result. 

---

# MLCameraResultExtras




[ResultExtras](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.ResultExtras.md) is a structure to encapsulate various indices for a capture result.   





## Public Attributes

### FrameNumber {#readonly-long-framenumber}

A 64bit integer to index the frame number associated with this result 

```csharp

public readonly long FrameNumber;

```






-----------

### Intrinsics {#readonly-intptr-intrinsics}

Camera intrinsic parameter. Only valid within callback scope. The Library allocates and maintains the lifetime of intrinsics. Only valid for on&#95;image&#95;buffer&#95;available, on&#95;video&#95;buffer&#95;available, on&#95;preview&#95;buffer&#95;available callbacks. NULL for on&#95;capture&#95;completed, on&#95;capture&#95;failed callbacks 

```csharp

public readonly IntPtr Intrinsics;

```






-----------

### VcamTimestamp {#readonly-long-vcamtimestamp}

VCam exposure timestamp in microseconds (us) 

```csharp

public readonly long VcamTimestamp;

```






-----------

### Version {#readonly-uint-version}

version contains the version number for this structure. 

```csharp

public readonly uint Version;

```






-----------


