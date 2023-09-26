---
title: IntentSettings
summary: a structure containing settings for voice app intent. this structure must be initialized by calling intentsettings.create before use. 

---

# IntentSettings




A structure containing settings for voice app intent. This structure must be initialized by calling [IntentSettings.Create()](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.IntentSettings.md#intentsettings-create) before use.   





## Public Methods

### [IntentSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.IntentSettings.md) Create {#intentsettings-create}

Creates an initialized [IntentSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.IntentSettings.md) object. 

```csharp
public static IntentSettings Create()
```






**Returns**: An initialized [IntentSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/NativeBindings/UnityEngine.XR.MagicLeap.MLVoice.NativeBindings.IntentSettings.md) object.



-----------

## Public Attributes

### AppIntent {#string-appintent}

The C string carrying app intent made by JSON format, which is UTF-8 and null terminated. The app intent should contain pre-defined fields, names, and values. Memory of this variable is managed by user. 

```csharp

public string AppIntent;

```






-----------

### Version {#uint-version}

Version of the struct. 

```csharp

public uint Version;

```






-----------


