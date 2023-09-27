---
title: MLMediaPlayerEventCallbacksEx
summary: callbacks for notifying client about 

---

# MLMediaPlayerEventCallbacksEx




Callbacks for notifying client about   





## Public Methods

### [MLMediaPlayerEventCallbacksEx](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/NativeBindings/UnityEngine.XR.MagicLeap.MLMedia.Player.NativeBindings.MLMediaPlayerEventCallbacksEx.md) Create {#mlmediaplayereventcallbacksex-create}

Create and return an initialized version of this struct. 

```csharp
public static MLMediaPlayerEventCallbacksEx Create()
```






**Returns**: A new instance of this struct.



-----------

## Public Attributes

### OnBufferingUpdate {#onbufferingupdatedelegate-onbufferingupdate}

This callback function is invoked when buffered contents percentage changed. 

```csharp

public OnBufferingUpdateDelegate OnBufferingUpdate;

```

| Type | Description  | 
|--|--|
| [OnBufferingUpdateDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#delegate-void-onbufferingupdatedelegate) | Delegate for the the OnBufferingUpdate event.  |





-----------

### OnCompletion {#oncompletiondelegate-oncompletion}

This callback is invoked when media player played back until end of media and has now come to a stop. Note that this callback does not fire when 'looping = true', because 

```csharp

public OnCompletionDelegate OnCompletion;

```






-----------

### OnError {#onerrordelegate-onerror}

This callback function is invoked when media player encounters an error. 

```csharp

public OnErrorDelegate OnError;

```

| Type | Description  | 
|--|--|
| [OnErrorDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#delegate-void-onerrordelegate) | Delegate for the any OnError event.  |





-----------

### OnFramePacking {#onframepackingdelegate-onframepacking}

This callback function is invoked when a stereoscopic video frame packing change. 

```csharp

public OnFramePackingDelegate OnFramePacking;

```






-----------

### OnInfo {#oninfodelegate-oninfo}

This callback function is invoked when 

```csharp

public OnInfoDelegate OnInfo;

```

| Type | Description  | 
|--|--|
| [OnInfoDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#delegate-void-oninfodelegate) | Delegate for the the OnInfo event.  |





-----------

### OnPrepared {#onprepareddelegate-onprepared}

This callback is invoked when the player has finished preparing media and is ready to playback. 

```csharp

public OnPreparedDelegate OnPrepared;

```






-----------

### OnResetComplete {#onresetcompletedelegate-onresetcomplete}

This callback function is invoked when an async reset operation has completed. 

```csharp

public OnResetCompleteDelegate OnResetComplete;

```






-----------

### OnSeekComplete {#onseekcompletedelegate-onseekcomplete}

This callback function is invoked when a seek operation has completed. 

```csharp

public OnSeekCompleteDelegate OnSeekComplete;

```






-----------

### OnTrackDRMInfo {#ontrackdrminfodelegate-ontrackdrminfo}

This callback function is invoked when source has DRM protected media track(s). 

```csharp

public OnTrackDRMInfoDelegate OnTrackDRMInfo;

```






-----------

### OnVideoSizeChanged {#onvideosizechangeddelegate-onvideosizechanged}

This callback function is invoked when the internal surface has changed size. 

```csharp

public OnVideoSizeChangedDelegate OnVideoSizeChanged;

```

| Type | Description  | 
|--|--|
| [OnVideoSizeChangedDelegate](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#delegate-void-onvideosizechangeddelegate) | Delegate for the any OnVideoSizeChanged event.  |





-----------


