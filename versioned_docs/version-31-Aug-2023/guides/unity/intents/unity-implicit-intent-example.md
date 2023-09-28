---
id: unity-implicit-intent-example
title: Implicit Intent Example
sidebar_position: 5
date: 07/12/2022
tags: [Unity, Intents]
keywords: [Unity, Intents]
---

Implicit Intents do not directly specify the Android components which should be called, it only specifies an action to be performed. This allows a component from another app to handle the action request. For example, you may want to prompt the user to perform eye-tracking calibration.

This example opens the Fitting Calibration application, 3 seconds after `Start()` is called.

:::tip
See the [Intents Feature Overview](/versioned_docs/version-31-Aug-2023/guides/features/android-intents-overview.md) for a list of possible system-level intents.
:::

## Using Settings Intents Launcher

This example uses Magic Leap's `SettingsIntentsLauncher` to open the fitting application.

```csharp showLineNumbers
using System;
using System.Collections;
using UnityEngine;

public class IntentExample : MonoBehaviour
{
    private string intentID = "com.magicleap.intent.action.FITTING";
    private float startDelay = 3f;

    private IEnumerator Start()
    {

        yield return new WaitForSeconds(startDelay);
        try
        {
            if (!Application.isEditor)
            {
                OpenActivity();
            }
        }
        catch (Exception e)
        {
            Debug.LogException(e);
        }
    }

    private void OpenActivity()
    {
#if UNITY_MAGICLEAP || UNITY_ANDROID
       UnityEngine.XR.MagicLeap.SettingsIntentsLauncher.LaunchSystemSettings(intentID);
#endif
    }
}

```

## Using Standard Android API

This example uses standard Android API to call an intent to launch the fitting application.

```csharp showLineNumbers
using System;
using System.Collections;
using UnityEngine;

public class IntentExample : MonoBehaviour
{
    private string intentID = "com.magicleap.intent.action.FITTING";
    private float startDelay = 3f;

    private IEnumerator Start()
    {

        yield return new WaitForSeconds(startDelay);
        try
        {
            if (!Application.isEditor)
            {
                OpenActivity();
            }
        }
        catch (Exception e)
        {
            Debug.LogException(e);
        }
    }

    private void OpenActivity()
    {
#if UNITY_MAGICLEAP || UNITY_ANDROID
        using (var unityClass = new AndroidJavaClass("com.unity3d.player.UnityPlayer"))
        using (AndroidJavaObject currentActivityObject = unityClass.GetStatic<AndroidJavaObject>("currentActivity"))
        using (var intentObject = new AndroidJavaObject("android.content.Intent", intentID))
        {
            currentActivityObject.Call("startActivity", intentObject);
        }
#endif
    }
}

```

