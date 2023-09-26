---
title: Buffer
summary: an audio buffer for passing data from input streams or to output streams. 

---

# Buffer




An audio buffer for passing data from input streams or to output streams.   





## Public Methods

###  Buffer {#functions-buffer}

```csharp
public Buffer(
    BufferFormat format,
    float [] samples
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| [BufferFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.BufferFormat.md) |format|[Buffer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.Buffer.md) format settings for input and output streams. |
| float [] |samples||






-----------

### float [] ConvertToManagedFloatSamples {#float-converttomanagedfloatsamples}

Copy the provided unmanaged audio buffer to managed memory and convert the samples to float. 

```csharp
public static float [] ConvertToManagedFloatSamples(
    uint size,
    IntPtr bufferPtr,
    BufferFormat format
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| uint |size|Number of bytes allocated for the unmanaged buffer|
| IntPtr |bufferPtr|Pointer to the unmanaged buffer|
| [BufferFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.BufferFormat.md) |format|Audio format for the unmanaged buffer|






**Returns**: Array of managed memory containing float samples



-----------

## Public Attributes

### Format {#bufferformat-format}

Audio buffer format. 

```csharp

public BufferFormat Format;

```

| Type | Description  | 
|--|--|
| [BufferFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.BufferFormat.md) | [Buffer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.Buffer.md) format settings for input and output streams.  |





-----------

### NativeDataPtr {#intptr-nativedataptr}

Pointer to audio data. Only valid when received on native callback threads. 

```csharp

public IntPtr NativeDataPtr;

```






-----------

### Samples {#float-samples}

Audio samples in this buffer. 

```csharp

public float [] Samples;

```






-----------

### Size {#uint-size}

Size of audio data in bytes. Only valid when received on native callback threads. 

```csharp

public uint Size;

```






-----------


