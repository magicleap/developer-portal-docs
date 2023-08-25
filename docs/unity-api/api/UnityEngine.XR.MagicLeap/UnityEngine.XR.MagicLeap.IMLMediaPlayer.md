---
title: IMLMediaPlayer
summary: interface for target classes used by mlmediaplayer each function must be implemented by the child player type 

---

# IMLMediaPlayer



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 


Interface for target classes used by [MLMediaPlayer](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLMediaPlayer.md) Each function must be implemented by the child player type   


Inherited by: <br></br>[UnityEngine.XR.MagicLeap.MLMedia.Player](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md)




## Public Fields

### IsPlaying {#bool-isplaying}

Gets a bool indicating if the media player is currently playing or not. 

```csharp

public bool IsPlaying { get; set; }

```






-----------

## Public Methods

### int GetDurationMilliseconds {#int-getdurationmilliseconds}

Gets the duration of the video in milliseconds 

```csharp
public int GetDurationMilliseconds()
```






**Returns**: Duration of the video, -1 on failure. 

**Reimplemented by**: [GetDurationMilliseconds](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#int-getdurationmilliseconds)



-----------

### int GetHeight {#int-getheight}

Get the height of the video in pixels 

```csharp
public int GetHeight()
```






**Returns**: The height of the video, -1 on failure. 

**Reimplemented by**: [GetHeight](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#int-getheight)



-----------

### int GetPositionMilliseconds {#int-getpositionmilliseconds}

Gets the current position of the video in milliseconds 

```csharp
public int GetPositionMilliseconds()
```






**Returns**: Position of the playback of the video, -1 on failure. 

**Reimplemented by**: [GetPositionMilliseconds](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#int-getpositionmilliseconds)



-----------

### int GetWidth {#int-getwidth}

Get the width of the video in pixels 

```csharp
public int GetWidth()
```






**Returns**: The width of the video, -1 on failure. 

**Reimplemented by**: [GetWidth](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#int-getwidth)



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Pause {#mlresult-pause}

Pauses the video. 

```csharp
public MLResult Pause()
```






**Returns**:  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplemented by**: [Pause](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#mlresult-pause)



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Play {#mlresult-play}

Plays the video. 

```csharp
public MLResult Play()
```






**Returns**:  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplemented by**: [Play](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#mlresult-play)



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Resume {#mlresult-resume}

Resume the video. 

```csharp
public MLResult Resume()
```






**Returns**:  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplemented by**: [Resume](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#mlresult-resume)



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Seek {#mlresult-seek}

Seeks the specified time in the video. 

```csharp
public MLResult Seek(
    int positionSeconds,
    MLMedia.Player.SeekMode seekMode
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| int |positionSeconds|Absolute time to seek to.|
| [MLMedia.Player.SeekMode](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-seekmode) |seekMode|Mode indicating where exactly to seek to. |






**Returns**:  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplemented by**: [Seek](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#mlresult-seek)



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetLooping {#mlresult-setlooping}

Sets the loop flag for the video. 

```csharp
public MLResult SetLooping(
    bool loop
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| bool |loop|Flag to loop|






**Returns**:  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplemented by**: [SetLooping](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#mlresult-setlooping)



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetSourcePath {#mlresult-setsourcepath}

Sets the source path that the media player will play content from. 

```csharp
public MLResult SetSourcePath(
    string source
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |source|Path of the media that's on the device.|






**Returns**:  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded.  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed due to an invalid input parameter.  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error.  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.MediaGenericNoInit](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-mediagenericnoinit)  if media player was not properly built or initialized.  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if attempting to access web content without appropriate network permissions 

**Reimplemented by**: [SetSourcePath](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#mlresult-setsourcepath)



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetSourceURI {#mlresult-setsourceuri}

Sets the source path that the media player will play content from. 

```csharp
public MLResult SetSourceURI(
    string source
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |source|URI of the media.|






**Returns**:  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded.  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.InvalidParam](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-invalidparam)  if failed due to an invalid input parameter.  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.UnspecifiedFailure](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-unspecifiedfailure)  if failed due to internal error.  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.MediaGenericNoInit](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-mediagenericnoinit)  if media player was not properly built or initialized.  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.PermissionDenied](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-permissiondenied)  if attempting to access web content without appropriate network permissions 

**Reimplemented by**: [SetSourceURI](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#mlresult-setsourceuri)



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) SetVolume {#mlresult-setvolume}

Sets the volume of the video. 

```csharp
public MLResult SetVolume(
    float vol
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| float |vol|Volume between 0 and 1.|






**Returns**:  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplemented by**: [SetVolume](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#mlresult-setvolume)



-----------

### [MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md) Stop {#mlresult-stop}

Stops the video in the editor. 

```csharp
public MLResult Stop()
```






**Returns**:  [MLResult.Result](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#readonly-result)  will be  [MLResult.Code.Ok](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md#enums-ok)  if operation succeeded. 

**Reimplemented by**: [Stop](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#mlresult-stop)



-----------

