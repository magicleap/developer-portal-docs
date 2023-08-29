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

| Type | Description  | 
|--|--|
| [MagicLeapNativeBindings.MLVec3f](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec3f.md) | 3D vector in native format.  |





-----------

### extents {#magicleapnativebindingsmlvec3f-extents}

The size of the bounding box. When a mesh request is complete all mesh blocks within 10 meters of the device that intersect with the extents provided here will be returned in MLMeshingMeshInfo. 

```csharp

public MagicLeapNativeBindings.MLVec3f extents;

```

| Type | Description  | 
|--|--|
| [MagicLeapNativeBindings.MLVec3f](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLVec3f.md) | 3D vector in native format.  |





-----------

### rotation {#magicleapnativebindingsmlquaternionf-rotation}

The rotation of the bounding box. 

```csharp

public MagicLeapNativeBindings.MLQuaternionf rotation;

```

| Type | Description  | 
|--|--|
| [MagicLeapNativeBindings.MLQuaternionf](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.MLQuaternionf.md) | Quaternion in native format.  |





-----------


