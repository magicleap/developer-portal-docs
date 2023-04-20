---
title: MagicLeapSDKUtil

---

# MagicLeapSDKUtil



**NameSpace:** 
[MagicLeap](/unity-api/api/UnityEditor.XR.MagicLeap/UnityEditor.XR.MagicLeap.md) 








## Public Fields

### SdkPath {#string-sdkpath}

MLSDK path for the relish target. 

```csharp

public static string SdkPath { get; set; }

```






-----------

### SdkAvailable {#bool-sdkavailable}

If the MLSDK path is set in the editor preferences and points to a valid sdk. 

```csharp

public static bool SdkAvailable { get; set; }

```






-----------

### OnZeroIterationPathChanged {#action-string-onzeroiterationpathchanged}

```csharp

public static Action< string > OnZeroIterationPathChanged { get; set; }

```






-----------

## Public Methods

### void DeleteSDKPathFromEditorPrefs {#void-deletesdkpathfromeditorprefs}

```csharp
public static void DeleteSDKPathFromEditorPrefs(
    BuildTarget target
)
```


**Parameters**

| Type | Name  | Description  | 
|--|--|--|
| BuildTarget |target||






-----------

## Public Attributes

### SearchingForZI {#bool-searchingforzi}

```csharp

public static bool SearchingForZI => MagicLeapEditorPreferences.RunningLabdriver;

```






-----------

### SdkVersion {#version-sdkversion}

MLSDK version 

```csharp

public static Version SdkVersion => new Version(JsonUtility.FromJson<SDKManifest>(File.ReadAllText(Path.Combine(SdkPath, kManifestPath))).version);

```






-----------

### MinimumApiLevel {#uint-minimumapilevel}

```csharp

public static uint MinimumApiLevel => minApiLevel;

```






-----------

### AppSimRuntimePath {#string-appsimruntimepath}

```csharp

public static string AppSimRuntimePath => MagicLeapEditorPreferences.ZeroIterationRuntimePath;

```






-----------

