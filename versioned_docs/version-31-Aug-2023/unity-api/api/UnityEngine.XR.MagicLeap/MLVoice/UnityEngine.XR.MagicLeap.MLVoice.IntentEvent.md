---
title: IntentEvent
summary: a structure containing voice intent event information. 

---

# IntentEvent




A structure containing voice intent event information.   





## Public Attributes

### EventID {#uint-eventid}

User defined intent index which is detected. 

```csharp

public uint EventID;

```






-----------

### EventName {#string-eventname}

The Event Name 

```csharp

public string EventName;

```






-----------

### EventSlotsUsed {#list-eventslotsused}

```csharp

public List< EventSlot > EventSlotsUsed;

```

| Type | Description  | 
|--|--|
| List&lt; [EventSlot](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.EventSlot.md) &gt; | Slot Data in voice event.  |

**Details**

List of Slot Data used in this specific event. 





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


