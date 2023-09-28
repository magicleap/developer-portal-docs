---
title: MLMediaPlayerOnInfoInfo
summary: mediaplayer information callback info. 

---

# MLMediaPlayerOnInfoInfo




MediaPlayer Information callback Info.   





## Public Attributes

### Data {#intptr-data}

User data as passed to MLMediaPlayerSetEventCallbacksEx(). 

```csharp

public IntPtr Data;

```






-----------

### Extra {#int-extra}

MLMediaPlayerInfo type specific extra information. When info is MLMediaPlayerInfo&#95;NetworkBandwidth, this holds bandwidth in kbps. It is 0 for others. 

```csharp

public int Extra;

```






-----------

### Info {#info-info}

Type of informational event. 

```csharp

public Info Info;

```

| Type | Description  | 
|--|--|
| [Info](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/Player/UnityEngine.XR.MagicLeap.MLMedia.Player.md#enums-info) | Indicates various trigger various media player actions.  MLMediaPlayerInfo  from  ml&#95;media&#95;player.h .  |





-----------


