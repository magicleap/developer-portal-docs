---
title: NativeBindings

---

# NativeBindings










## Public Methods

### string GetKeyPointName {#string-getkeypointname}

```csharp
public static string GetKeyPointName(
    KeyPointLocation location,
    int keyPointIndex
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| KeyPointLocation |location||
| int |keyPointIndex||






-----------

### bool GetKeyPointStatus {#bool-getkeypointstatus}

```csharp
public static bool GetKeyPointStatus(
    InputDevice handDevice,
    KeyPointLocation location,
    int keyPointIndex
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |handDevice||
| KeyPointLocation |location||
| int |keyPointIndex||






-----------

### void SetPreRenderPoseUpdate {#void-setprerenderposeupdate}

[Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md) call for pre render Keypoints update. 

```csharp
public void SetPreRenderPoseUpdate(
    bool enable
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |enable|bool to determine if pre render pose update should happen.|






-----------

### bool TryGetKeyPointsMask {#bool-trygetkeypointsmask}

```csharp
public static bool TryGetKeyPointsMask(
    InputDevice handDevice,
    out bool [] keyPointsMask
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| InputDevice |handDevice||
| out bool [] |keyPointsMask||






-----------


