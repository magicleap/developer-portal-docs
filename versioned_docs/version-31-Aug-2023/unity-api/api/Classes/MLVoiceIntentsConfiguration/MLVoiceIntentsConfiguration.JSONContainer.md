---
title: JSONContainer
summary: the container for the data being changed into a json string to send to the mlvoice api. 

---

# JSONContainer




The container for the data being changed into a JSON string to send to the MLVoice API.   





## Public Attributes

### app_intents {#list-app-intents}

```csharp

public List< JSONData > app_intents;

```

| Type | Description  | 
|--|--|
| List&lt; [JSONData](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.JSONData.md) &gt; | The current structure of the JSON data that will be sent to the MLVoice API. Subject to change.  |





-----------

### app_slots {#list-app-slots}

```csharp

public List< SlotDataInternal > app_slots;

```






-----------

### sys_intent_list {#systemjsondata-sys-intent-list}

```csharp

public SystemJSONData sys_intent_list;

```

| Type | Description  | 
|--|--|
| [SystemJSONData](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.SystemJSONData.md) | The current structure of the System Intents JSON data that will be sent to the MLVoice API. Subject to change.  |





-----------


