---
title: CopyPlaneResultsJob

---

# CopyPlaneResultsJob







Inherits from: <br></br>IJobParallelFor




## Public Methods

### void Execute {#void-execute}

```csharp
public void Execute(
    int index
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |index||






-----------

### PlaneAlignment ToUnityAlignment {#planealignment-tounityalignment}

```csharp
public PlaneAlignment ToUnityAlignment(
    Extensions.MLPlanesQueryFlags flags,
    Quaternion rotation
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Extensions.MLPlanesQueryFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/Extensions/UnityEngine.XR.MagicLeap.PlanesSubsystem.Extensions.md#enums-mlplanesqueryflags) |flags||
| Quaternion |rotation||






-----------

### PlaneClassification ToUnityClassification {#planeclassification-tounityclassification}

```csharp
public PlaneClassification ToUnityClassification(
    Extensions.MLPlanesQueryFlags flags
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [Extensions.MLPlanesQueryFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/Extensions/UnityEngine.XR.MagicLeap.PlanesSubsystem.Extensions.md#enums-mlplanesqueryflags) |flags||






-----------

### Quaternion TransformMLRotationToUnity {#quaternion-transformmlrotationtounity}

```csharp
public static Quaternion TransformMLRotationToUnity(
    Quaternion rotation
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Quaternion |rotation||






-----------

### Quaternion TransformUnityRotationToML {#quaternion-transformunityrotationtoml}

```csharp
public static Quaternion TransformUnityRotationToML(
    Quaternion rotation
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| Quaternion |rotation||






-----------

## Public Attributes

### k_MagicLeapToUnityRotation {#readonly-quaternion-k-magicleaptounityrotation}

```csharp

public static readonly Quaternion k_MagicLeapToUnityRotation = Quaternion.AngleAxis(-90f, Vector3.right);

```






-----------

### k_UnityToMagicLeapRotation {#readonly-quaternion-k-unitytomagicleaprotation}

```csharp

public static readonly Quaternion k_UnityToMagicLeapRotation = Quaternion.Inverse(k_MagicLeapToUnityRotation);

```






-----------

### planeTrackableIds {#nativearray-trackableid-planetrackableids}

```csharp

public NativeArray< TrackableId > planeTrackableIds;

```






-----------

### planesIn {#nativearray-extensionsmlplane-planesin}

```csharp

public NativeArray< Extensions.MLPlane > planesIn;

```






-----------

### planesOut {#nativearray-boundedplane-planesout}

```csharp

public NativeArray< BoundedPlane > planesOut;

```






-----------


