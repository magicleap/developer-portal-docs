---
title: LocalizationResult
summary: a structure containing information about the device's localization state. 

---

# LocalizationResult




A structure containing information about the device's localization state.   





## Public Attributes

### LocalizationStatus {#status-localizationstatus}

The localization status at the time this structure was returned. 

```csharp

public Status LocalizationStatus;

```

| Type | Description  | 
|--|--|
| [Status](/versioned_docs/version-14-Jun-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.md#enums-status) | The current localization status.  |





-----------

### Space {#space-space}

[Space](/versioned_docs/version-14-Jun-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) information. If localized(#MLSpaceLocalizationStatus&#95;Localized) this will contain valid [Space](/versioned_docs/version-14-Jun-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) information. If not localized this field should be ignored. 

```csharp

public Space Space;

```

| Type | Description  | 
|--|--|
| [Space](/versioned_docs/version-14-Jun-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md) | A structure containing information about a Magic Leap [Space](/versioned_docs/version-14-Jun-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.Space.md). This structure must be initialized by calling #MLSpaceInit before use.  |





-----------

