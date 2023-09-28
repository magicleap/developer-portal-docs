---
title: MLVoiceIntentsConfiguration
summary: a class that will maintain the proper json structure needed by the mlvoice api. 

---

# MLVoiceIntentsConfiguration




A Class that will maintain the proper JSON structure needed by the MLVoice API.   


Inherits from: <br></br>ScriptableObject




## Public Methods

### string GetJSONString {#string-getjsonstring}

Return a string of the proper JSON format needed by the Voice Intents API. 

```csharp
public string GetJSONString()
```






-----------

### List&lt; string &gt; GetValues {#list-string-getvalues}

Retrieve a list of the current list of voice commands as a string. 

```csharp
public List< string > GetValues()
```






-----------

## Public Attributes

### AllVoiceIntents {#list-allvoiceintents}

The final data properly laid out to be assigned to the container that will be sent to the MLVoice API. VoiceCommandsToAdd will automatically be added to this in the proper format. Can also manually add to this list if it is not desired to do this through the editor inspector. This list follows the current structure of the [JSONData](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.JSONData.md) and is subject to change. 

```csharp

public List< JSONData > AllVoiceIntents;

```

| Type | Description  | 
|--|--|
| List&lt; [JSONData](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.JSONData.md) &gt; | The current structure of the JSON data that will be sent to the MLVoice API. Subject to change.  |





-----------

### AutoAllowAllSystemIntents {#bool-autoallowallsystemintents}

```csharp

public bool AutoAllowAllSystemIntents;

```






-----------

### SlotsForVoiceCommands {#list-slotsforvoicecommands}

```csharp

public List< SlotData > SlotsForVoiceCommands;

```

| Type | Description  | 
|--|--|
| List&lt; [SlotData](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.SlotData.md) &gt; | The Slot Data to be used in the [CustomVoiceIntents](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.CustomVoiceIntents.md)' value. To use a slot, put the [SlotData](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.SlotData.md) name between { } inside of the [CustomVoiceIntents](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.CustomVoiceIntents.md)' value.  |





-----------

### SystemCommands {#systemintentflags-systemcommands}

```csharp

public SystemIntentFlags SystemCommands;

```

| Type | Description  | 
|--|--|
| [SystemIntentFlags](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.md#enums-systemintentflags) | The verbal System Intents currently supported.  |





-----------

### VoiceCommandsToAdd {#list-voicecommandstoadd}

The simplified list of Voice Command data to be filled out in the inspector or manually added to. A unique name field will be created based on the Unique Id provided. 

```csharp

public List< CustomVoiceIntents > VoiceCommandsToAdd;

```

| Type | Description  | 
|--|--|
| List&lt; [CustomVoiceIntents](/versioned_docs/version-31-Aug-2023/unity-api/api/Classes/MLVoiceIntentsConfiguration/MLVoiceIntentsConfiguration.CustomVoiceIntents.md) &gt; | The Simplified Voice Command data needed to add commands from the inspector. The unique name field required in the final JSON will be auto generated based on the unique Id.  |

**Details**

If GetJSONString or GetValues is called, this data will be altered to fit the current proper layout the API needs to function correctly and will be added to AllVoiceIntents, then this list will be cleared as these commands will no longer need to be added. 





-----------

## Public Enums

### SystemIntentFlags {#enums-systemintentflags}

The verbal System Intents currently supported. 

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TakeAPhoto | 1 << 0|   |
| TakeAVideo | 1 << 1|   |
| StopRecording | 1 << 2|   |
| CloseAPPNAME | 1 << 3|   |
| OpenHome | 1 << 4|   |
| OpenAPPNAME | 1 << 5|   |
| Mute | 1 << 6|   |
| Unmute | 1 << 7|   |
| TurnTheVolumeDown | 1 << 8|   |
| SetTheVolumeToNUMBERPercent | 1 << 9|   |
| TurnTheVolumeUp | 1 << 10|   |
| Help | 1 << 11|   |








-----------


