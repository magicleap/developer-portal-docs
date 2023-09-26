---
title: MLMediaRecorderOnInfo
summary: when the error or info type is track specific, it has the following layout the left-most 16-bit is meant for error or info type and the right-most 4-bit is meant for track id. 

---

# MLMediaRecorderOnInfo




When the error or info type is track specific, it has the following layout: The left-most 16-bit is meant for error or info type and the right-most 4-bit is meant for track id.   





## Public Methods

### [MLMediaRecorderOnInfo](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/NativeBindings/UnityEngine.XR.MagicLeap.MLMediaRecorder.NativeBindings.MLMediaRecorderOnInfo.md) Create {#mlmediarecorderoninfo-create}

Create and return an initialized version of this struct. 

```csharp
public static MLMediaRecorderOnInfo Create()
```






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### Data {#intptr-data}

User data as passed to MLMediaRecorderSetEventCallbacks. 

```csharp

public IntPtr Data;

```






-----------

### Extra {#int-extra}

The extra info 

```csharp

public int Extra;

```






-----------

### Info {#info-info}

The info of MLMediaRecorderInfo 

```csharp

public Info Info;

```






-----------

### TrackId {#uint-trackid}

Holds valid track id only for track specific info (returned via on&#95;track&#95;info callback.). Holds 0 for the generic info (returned via on&#95;info callback). 

```csharp

public uint TrackId;

```






-----------


