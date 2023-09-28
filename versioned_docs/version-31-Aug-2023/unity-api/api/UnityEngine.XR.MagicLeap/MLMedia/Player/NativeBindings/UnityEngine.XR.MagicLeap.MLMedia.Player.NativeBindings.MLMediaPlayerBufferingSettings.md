---
title: MLMediaPlayerBufferingSettings
summary: indicate the buffering settings. 

---

# MLMediaPlayerBufferingSettings




Indicate the buffering settings.   





## Public Attributes

### InitialBufferingMode {#bufferingmode-initialbufferingmode}

For prepare. 

```csharp

public BufferingMode InitialBufferingMode;

```

| Type | Description  | 
|--|--|
| [BufferingMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-bufferingmode) | Comment Needed!  |





-----------

### InitialWatermarkKb {#int-initialwatermarkkb}

Size based. 

```csharp

public int InitialWatermarkKb;

```






-----------

### InitialWatermarkMs {#int-initialwatermarkms}

Time based. 

```csharp

public int InitialWatermarkMs;

```






-----------

### RebufferingMode {#bufferingmode-rebufferingmode}

For playback. 

```csharp

public BufferingMode RebufferingMode;

```

| Type | Description  | 
|--|--|
| [BufferingMode](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-bufferingmode) | Comment Needed!  |





-----------

### RebufferingWatermarkHighKb {#int-rebufferingwatermarkhighkb}

When cached data is above this mark, buffering will be paused. 

```csharp

public int RebufferingWatermarkHighKb;

```






-----------

### RebufferingWatermarkHighMs {#int-rebufferingwatermarkhighms}

When cached data is above this mark, buffering will be paused. 

```csharp

public int RebufferingWatermarkHighMs;

```






-----------

### RebufferingWatermarkLowKb {#int-rebufferingwatermarklowkb}

When cached data is below this mark, playback will be paused for buffering until data reaches |mRebufferingWatermarkHighKB| or end of stream. 

```csharp

public int RebufferingWatermarkLowKb;

```






-----------

### RebufferingWatermarkLowMs {#int-rebufferingwatermarklowms}

When cached data is below this mark, playback will be paused for buffering until data reaches |mRebufferingWatermarkHighMs| or end of stream. 

```csharp

public int RebufferingWatermarkLowMs;

```






-----------


