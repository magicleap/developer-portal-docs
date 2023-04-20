---
title: MLMediaPlayerEventCallbacksEx
summary: callbacks for notifying client about 

---

# MLMediaPlayerEventCallbacksEx




Callbacks for notifying client about   





## Public Methods

### [MLMediaPlayerEventCallbacksEx](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerEventCallbacksEx.md) Create {#mlmediaplayereventcallbacksex-create}

Create and return an initialized version of this struct. 

```csharp
public static MLMediaPlayerEventCallbacksEx Create()
```






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### OnVideoSizeChanged {#onvideosizechangeddelegate-onvideosizechanged}

This callback function is invoked when the internal surface has changed size. 

```csharp

public OnVideoSizeChangedDelegate OnVideoSizeChanged;

```

| Type | Description  | 
|--|--|
| [OnVideoSizeChangedDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#delegate-void-onvideosizechangeddelegate) | Delegate for the any OnVideoSizeChanged event.  |





-----------

### OnTrackDRMInfo {#ontrackdrminfodelegate-ontrackdrminfo}

This callback function is invoked when source has DRM protected media track(s). 

```csharp

public OnTrackDRMInfoDelegate OnTrackDRMInfo;

```






-----------

### OnSeekComplete {#onseekcompletedelegate-onseekcomplete}

This callback function is invoked when a seek operation has completed. 

```csharp

public OnSeekCompleteDelegate OnSeekComplete;

```






-----------

### OnResetComplete {#onresetcompletedelegate-onresetcomplete}

This callback function is invoked when an async reset operation has completed. 

```csharp

public OnResetCompleteDelegate OnResetComplete;

```






-----------

### OnPrepared {#onprepareddelegate-onprepared}

This callback is invoked when the player has finished preparing media and is ready to playback. 

```csharp

public OnPreparedDelegate OnPrepared;

```






-----------

### OnInfo {#oninfodelegate-oninfo}

This callback function is invoked when 

```csharp

public OnInfoDelegate OnInfo;

```

| Type | Description  | 
|--|--|
| [OnInfoDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#delegate-void-oninfodelegate) | Delegate for the the OnInfo event.  |





-----------

### OnFramePacking {#onframepackingdelegate-onframepacking}

This callback function is invoked when a stereoscopic video frame packing change. 

```csharp

public OnFramePackingDelegate OnFramePacking;

```






-----------

### OnError {#onerrordelegate-onerror}

This callback function is invoked when media player encounters an error. 

```csharp

public OnErrorDelegate OnError;

```

| Type | Description  | 
|--|--|
| [OnErrorDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#delegate-void-onerrordelegate) | Delegate for the any OnError event.  |





-----------

### OnCompletion {#oncompletiondelegate-oncompletion}

This callback is invoked when media player played back until end of media and has now come to a stop. Note that this callback does not fire when 'looping = true', because 

```csharp

public OnCompletionDelegate OnCompletion;

```






-----------

### OnBufferingUpdate {#onbufferingupdatedelegate-onbufferingupdate}

This callback function is invoked when buffered contents percentage changed. 

```csharp

public OnBufferingUpdateDelegate OnBufferingUpdate;

```

| Type | Description  | 
|--|--|
| [OnBufferingUpdateDelegate](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#delegate-void-onbufferingupdatedelegate) | Delegate for the the OnBufferingUpdate event.  |





-----------

