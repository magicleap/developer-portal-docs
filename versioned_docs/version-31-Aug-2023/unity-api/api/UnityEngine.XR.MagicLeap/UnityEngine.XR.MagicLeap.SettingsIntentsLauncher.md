---
title: SettingsIntentsLauncher

---

# SettingsIntentsLauncher



**NameSpace:** 
[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) 








## Public Methods

### void LaunchSystemARCloudSettings {#void-launchsystemarcloudsettings}

Utility function to launch the Magic Leap System Settings application and navigate to the AR Cloud page. This uses the Android Intents API to invoke the proper application intent. 

```csharp
public static void LaunchSystemARCloudSettings()
```






-----------

### void LaunchSystemDisplaySettings {#void-launchsystemdisplaysettings}

Utility function to launch the Magic Leap System Settings application and navigate to the display page. This uses the Android Intents API to invoke the proper application intent. 

```csharp
public static void LaunchSystemDisplaySettings()
```






-----------

### void LaunchSystemSettings {#void-launchsystemsettings}

Utility function to launch the Magic Leap System Settings application and navigate to the page of the provided intent name. This uses the Android Intents API to invoke the proper application intent. 

```csharp
public static void LaunchSystemSettings(
    string intentName
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| string |intentName|Name of the intent to launch the settings page for.|






-----------

### void LaunchSystemVoiceInputSettings {#void-launchsystemvoiceinputsettings}

Utility function to launch the Magic Leap System Settings application and navigate to the voice input page. This uses the Android Intents API to invoke the proper application intent. 

```csharp
public static void LaunchSystemVoiceInputSettings()
```






-----------


