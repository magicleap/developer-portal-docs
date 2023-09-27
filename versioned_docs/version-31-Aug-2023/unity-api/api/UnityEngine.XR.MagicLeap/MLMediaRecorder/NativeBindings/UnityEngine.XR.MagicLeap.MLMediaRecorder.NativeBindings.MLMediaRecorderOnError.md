---
title: MLMediaRecorderOnError
summary: when the error or info type is track specific, it has the following layout the left-most 16-bit is meant for error or info type and the right-most 4-bit is meant for track id. 

---

# MLMediaRecorderOnError




When the error or info type is track specific, it has the following layout: The left-most 16-bit is meant for error or info type and the right-most 4-bit is meant for track id.   





## Public Methods

### [MLMediaRecorderOnError](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/NativeBindings/UnityEngine.XR.MagicLeap.MLMediaRecorder.NativeBindings.MLMediaRecorderOnError.md) Create {#mlmediarecorderonerror-create}

Create and return an initialized version of this struct. 

```csharp
public static MLMediaRecorderOnError Create()
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

### Error {#error-error}

The error of MLMediaRecorderError 

```csharp

public Error Error;

```

| Type | Description  | 
|--|--|
| [Error](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md#enums-error) | Video recorder error types  |





-----------

### Extra {#int-extra}

The extra info 

```csharp

public int Extra;

```






-----------

### TrackId {#uint-trackid}

Holds valid track id only for track specific info (returned via on&#95;track&#95;info callback.). Holds 0 for the generic info (returned via on&#95;info callback). 

```csharp

public uint TrackId;

```






-----------


