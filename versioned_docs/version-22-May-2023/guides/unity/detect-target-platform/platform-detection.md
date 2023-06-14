---
title: Platform Detection
sidebar_position: 5
date: 09/07/2022
tags: [Unity, Getting Started, Walkthroughs, Platform, Defines, Define]
keywords: [Unity, Getting Started, Walkthroughs, Platform, Defines, Define]
---


This section includes details on detecting if an application is running on a Magic Leap 2 and if a developer is targeting Magic Leap in Unity's XR Manager.

## Runtime Detection

### Check Active Loader

The following script returns true at runtime if the application is running on a Magic Leap 2. It does this by querying Unity's active XR loader and checking if it belongs to the Magic Leap platform.  

```csharp showLineNumbers
using System.Collections;
using UnityEngine;
using UnityEngine.XR.MagicLeap;
using UnityEngine.XR.Management;

public class RuntimeDetectionExample : MonoBehaviour
{
    IEnumerator Start()
    {
        while (IsMagicLeapLoaderActive() == null)
        {
            yield return null;
        }
        Debug.Log("Magic Leap Loader Active = " + IsMagicLeapLoaderActive());
    }
    public static bool? IsMagicLeapLoaderActive()
    {
        if (XRGeneralSettings.Instance != null
            && XRGeneralSettings.Instance.Manager != null
            && XRGeneralSettings.Instance.Manager.activeLoader != null)
        {
            return XRGeneralSettings.Instance.Manager.activeLoader is MagicLeapLoader;
        }

        return null;
    }
}
```

### Check System Information

The following script checks if the application is being run on a Magic Leap by checking the device's architecture and device's name.

```csharp showLineNumbers
using UnityEngine;

public class RuntimeDetectionExample : MonoBehaviour
{
    void Start()
    {
        if (GetArchitecture() == "x86_64 &&" && SystemInfo.deviceName == "Magic Leap 2")
        {
            Debug.Log("Device is most likely a Magic Leap 2");
        }
    }

    public static string GetArchitecture()
    {
        using var system = new AndroidJavaClass("java.lang.System");
        return system.CallStatic<string>("getProperty", "os.arch");
    }
}

```

## In-Editor Detection

The sample script below checks if the user is building for Android and if the Magic Leap loader is enabled in the project's XR Manager settings.

```csharp showLineNumbers
using UnityEngine;
using UnityEngine.XR.Management;
using System.Linq;
#if UNITY_EDITOR
using UnityEditor;
using UnityEditor.XR.Management;
[ExecuteInEditMode]
#endif
public class EditorDetectionExample : MonoBehaviour
{
    private const string MAGIC_LEAP_LOADER_ID = "MagicLeapLoader";

    void Update()
    {
#if UNITY_EDITOR
        if (EditorUserBuildSettings.activeBuildTarget == BuildTarget.Android && IsMagicLeapXREnabled())
        {
            Debug.Log("Developer is most likely developing for Magic Leap 2");
        }
#endif
    }
    
    public static bool IsMagicLeapXREnabled()
    {
        bool hasMagicLeapLoader = false;
#if UNITY_EDITOR
        EditorBuildSettings.TryGetConfigObject(XRGeneralSettings.k_SettingsKey, out XRGeneralSettingsPerBuildTarget androidBuildSetting);
        if (androidBuildSetting != null)
        {
            var androidSettings = androidBuildSetting.SettingsForBuildTarget(BuildTargetGroup.Android);
            if (androidSettings != null 
                && androidSettings.Manager != null 
                && androidSettings.Manager.activeLoaders !=null)
            {
                hasMagicLeapLoader = androidSettings.Manager.activeLoaders.Any(e =>
                {
                    var fullName = e.GetType().FullName;
                    return fullName != null && fullName.Contains(MAGIC_LEAP_LOADER_ID);
                });
            }
        }
#endif
        return hasMagicLeapLoader;
    }
}

```
