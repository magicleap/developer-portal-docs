---
title: MagicLeapSDKUtil

---

# MagicLeapSDKUtil



**NameSpace:** 
[MagicLeap](/versioned_docs/version-02-Aug-2023/unity-api/api/UnityEditor.XR.MagicLeap/UnityEditor.XR.MagicLeap.md) 








## Public Fields

### AppSimRuntimePath {#string-appsimruntimepath}

```csharp

public static string AppSimRuntimePath { get; set; }

```






-----------

### MinimumApiLevel {#uint-minimumapilevel}

```csharp

public static uint MinimumApiLevel { get; set; }

```






-----------

### OnZeroIterationPathChanged {#action-string-onzeroiterationpathchanged}

```csharp

public static Action< string > OnZeroIterationPathChanged { get; set; }

```






-----------

### SdkAvailable {#bool-sdkavailable}

If the MLSDK path is set in the editor preferences and points to a valid sdk. 

```csharp

public static bool SdkAvailable { get; set; }

```






-----------

### SdkPath {#string-sdkpath}

MLSDK path for the relish target. 

```csharp

public static string SdkPath { get; set; }

```






-----------

### SdkVersion {#version-sdkversion}

MLSDK version. 

```csharp

public static Version SdkVersion { get; set; }

```






-----------

### SearchingForZI {#bool-searchingforzi}

```csharp

public static bool SearchingForZI { get; set; }

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


