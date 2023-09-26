---
title: Voice Input System Settings
sidebar_position: 5
date: 09/23/2022
tags: [Unity, Input, Voice, Voice Intents]
keywords: [Unity, Input, Voice, Voice Intents]
---

The Voice Intent API will only register voice commands if Voice Input is enabled inside the Magic Leap 2's System Settings (**Settings > Magic Leap Inputs > Voice**). This section demonstrates how to check if a user has enabled Voice Input.

## Check Voice Input Settings

Returns true if Voice Input is enabled

``` csharp
public bool IsVoiceInputEnabled()
{
    // Get context
    using (var actClass = new AndroidJavaClass("com.unity3d.player.UnityPlayer"))
    {
        var context = actClass.GetStatic<AndroidJavaObject>("currentActivity");
        AndroidJavaClass systemGlobal = new AndroidJavaClass("android.provider.Settings$System");

        var voiceInput = systemGlobal.CallStatic<int>("getInt", context.Call<AndroidJavaObject>("getContentResolver"), "enable_voice_cmds");

        Debug.Log("Voice Input Enabled = " + voiceInput );
        return voiceInput > 0;
    }
}
```

