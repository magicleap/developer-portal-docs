---
title: IntentEventInternal
summary: a structure containing voice intent event data. 

---

# IntentEventInternal




A structure containing voice intent event data.   





## Public Attributes

### AppIntentSlotCount {#uint-appintentslotcount}

Count of an array AppIntentSlots. 

```csharp

public uint AppIntentSlotCount;

```






-----------

### AppIntentSlots {#intptr-appintentslots}

Array of app-intent slot, array count is set in app&#95;intent&#95;slot&#95;count. Count of an array app&#95;intent&#95;slots. 

```csharp

public IntPtr AppIntentSlots;

```






-----------

### IntentID {#uint-intentid}

User defined intent index which is detected. 

```csharp

public uint IntentID;

```






-----------

### IsSuccess {#bool-issuccess}

Voice event handling result in the voice intent event. In case of false, other member variables should be ignored. (text will be NULL) 

```csharp

public bool IsSuccess;

```






-----------

### NoIntentReason {#nointentreason-nointentreason}

If intent is not detected, it contains the reason, otherwise the value is MLVoiceIntentNoIntentReason.NoReason. 

```csharp

public NoIntentReason NoIntentReason;

```

| Type | Description  | 
|--|--|
| [NoIntentReason](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md#enums-nointentreason) | No intent reason code in voice event.  |





-----------

### State {#state-state}

Voice state when generating the voice intent event. 

```csharp

public State State;

```

| Type | Description  | 
|--|--|
| [State](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md#enums-state) | Voice state in voice event.  |





-----------

### Text {#string-text}

The string carrying identifier data which is UTF-8 and null terminated. And the memory of this variable is managed by system. 

```csharp

public string Text;

```






-----------


