---
title: MLMeshingExtents
summary: axis aligned bounding box for querying updated mesh info. 

---

# MLMeshingExtents




Axis aligned bounding box for querying updated mesh info.   





## Public Attributes

### center {#magicleapnativebindingsmlvec3f-center}

The center of the bounding box. 

```csharp

public MagicLeapNativeBindings.MLVec3f center;

```






-----------

### extents {#magicleapnativebindingsmlvec3f-extents}

The size of the bounding box. When a mesh request is complete all mesh blocks within 10 meters of the device that intersect with the extents provided here will be returned in [MLMeshingMeshInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/Extensions/MLMeshing/NativeBindings/UnityEngine.XR.MagicLeap.MeshingSubsystem.Extensions.MLMeshing.NativeBindings.MLMeshingMeshInfo.md). 

```csharp

public MagicLeapNativeBindings.MLVec3f extents;

```






-----------

### rotation {#magicleapnativebindingsmlquaternionf-rotation}

The rotation of the bounding box. 

```csharp

public MagicLeapNativeBindings.MLQuaternionf rotation;

```






-----------


