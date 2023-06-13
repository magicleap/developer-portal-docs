---
id: unity-explicit-intent-example
title: Explicit Intent Example
sidebar_position: 5
date: 09/23/2022
tags: [Unity, Intents]
keywords: [Unity, Intents]
---

Explicit intents specify which application will satisfy the intent, by supplying either the target app's package name or a fully-qualified component class name. Explicit Intents can also be used to pass data to other activities.

## Select Space Example

This example demonstrates how to request localizing into a specific Space via the Spaces Application.

```csharp showLineNumbers
using System;
using System.Collections;
using UnityEngine;

public class IntentExample : MonoBehaviour
{

    [Tooltip("The ID of the space you want to localize into.")]
    public string SpaceId = "{target-space-id}";
    
    [Tooltip("0 for OnDevice | 1 for ARCloud.")]
    public string mapMode = "0";

    // Activity action: Launch the Mapping Tool activity to select a particular space
    // to be localized to.
    private string selectSpaceId  = "com.magicleap.intent.action.SELECT_SPACE";

    // Intent extra: A space ID
    private string extraSpaceID = "com.magicleap.intent.extra.SPACE_ID";

    // Intent extra: The mapping mode for the space provided by the SpaceID.
    // Pass 0 for OnDevice and 1 for ARCloud.
    private string extraMappingMode = "com.magicleap.intent.extra.MAPPING_MODE";

    private float startDelay = 3f;

    private IEnumerator Start()
    {

        yield return new WaitForSeconds(startDelay);
        try
        {
            if (!Application.isEditor)
            {
                OpenSpacesApp(SpaceId);
            }
        }
        catch (Exception e)
        {
            Debug.LogException(e);
        }
    }

    private void OpenSpacesApp(string spaceID)
    {
#if UNITY_MAGICLEAP || UNITY_ANDROID
        try
        { 
            AndroidJavaClass activityClass = new AndroidJavaClass("com.unity3d.player.UnityPlayer");
            AndroidJavaObject activity = activityClass.GetStatic<AndroidJavaObject>("currentActivity");
            AndroidJavaObject intent = new AndroidJavaObject("android.content.Intent",selectSpaceId);
            intent.Call<AndroidJavaObject>("putExtra",extraSpaceID,spaceID);
            intent.Call<AndroidJavaObject>("putExtra",extraMappingMode,mapMode);
            activity.Call("startActivityForResult",intent,0);
        }
        catch (Exception e)
        {
            Debug.LogError("Error while launching spaces app: " + e);
        }
#endif
    }
}

```

## Generic Example

This example demonstrates how to call an explicit intent and pass a string message to it.

```csharp showLineNumbers
using System;
using System.Collections;
using UnityEngine;

public class IntentExample : MonoBehaviour
{
    // ID of the Java Android App
    private string otherAppId  = "com.magicleap.relishintents";

    // Message that will appear on the Android app screen
    private string messageToSend = "Hello Android World! - Sent from Unity";

    private float startDelay = 3f;

    private IEnumerator Start()
    {

        yield return new WaitForSeconds(startDelay);
        try
        {
            if (!Application.isEditor)
            {
                ShareTextInAndroid();
            }
        }
        catch (Exception e)
        {
            Debug.LogException(e);
        }
    }

    private void ShareTextInAndroid()
    {
#if UNITY_MAGICLEAP || UNITY_ANDROID
        using (AndroidJavaClass unityPlayer = new AndroidJavaClass("com.unity3d.player.UnityPlayer"))
        using (AndroidJavaObject currentActivity = unityPlayer.GetStatic<AndroidJavaObject>("currentActivity"))
        using (AndroidJavaObject packageManager = currentActivity.Call<AndroidJavaObject>("getPackageManager")){

        AndroidJavaObject launchIntent = packageManager.Call<AndroidJavaObject>("getLaunchIntentForPackage", otherAppId);
        launchIntent.Call<AndroidJavaObject>("setAction", "android.intent.action.SEND");
        launchIntent.Call<AndroidJavaObject>("setType", "text/plain");
        launchIntent.Call<AndroidJavaObject>("putExtra", "message", messageToSend);

        currentActivity.Call("startActivity", launchIntent);
        }
#endif
    }
}

```

