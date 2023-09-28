---
title: NativeBindings

---

# NativeBindings







Inherits from: <br></br>[MagicLeapNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/MagicLeapNativeBindings/UnityEngine.XR.MagicLeap.Native.MagicLeapNativeBindings.md)




## Public Methods

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) FreeUnmanagedMemory {#mlresultcode-freeunmanagedmemory}

Get the Media Format of a track. 

```csharp
public MLResult.Code FreeUnmanagedMemory(
    IntPtr mediaStringPtr
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| IntPtr |mediaStringPtr||






-----------

### string GetTrackLanguage {#string-gettracklanguage}

```csharp
public static string GetTrackLanguage(
    ulong mediaPlayerHandle,
    uint trackIndex
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| uint |trackIndex||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetTrackLanguage {#mlresultcode-mlmediaplayergettracklanguage}

Get the language of a track. 

```csharp
public MLResult.Code MLMediaPlayerGetTrackLanguage(
    ulong mediaPlayerHandle,
    uint trackIndex,
    ref IntPtr OutTrackLanguage
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| uint |trackIndex||
| ref IntPtr |OutTrackLanguage||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetTrackMediaFormat {#mlresultcode-mlmediaplayergettrackmediaformat}

Get the Media Format of a track. 

```csharp
public MLResult.Code MLMediaPlayerGetTrackMediaFormat(
    ulong mediaPlayerHandle,
    uint trackIndex,
    out ulong formatHandle
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| uint |trackIndex||
| out ulong |formatHandle||






-----------

### [MLResult.Code](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-code) MLMediaPlayerGetTrackType {#mlresultcode-mlmediaplayergettracktype}

Get the type of a track. 

```csharp
public MLResult.Code MLMediaPlayerGetTrackType(
    ulong mediaPlayerHandle,
    uint trackIndex,
    out Type trackType
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| ulong |mediaPlayerHandle||
| uint |trackIndex||
| out [Type](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/Track/UnityEngine.XR.MagicLeap.MLMedia.Player.Track.md#enums-type) |trackType|Media player track types. |






-----------

## Public Attributes

### MAX_KEY_STRING_SIZE {#const-uint-max-key-string-size}

```csharp

public const uint MAX_KEY_STRING_SIZE = 64;

```






-----------


