---
id: voice-intents-example-scripts
title: Simple Example
sidebar_position: 6
date: 06/27/2022
tags: [Unity, Input, Voice, Voice Intents]
keywords: [Unity, Input, Voice, Voice Intents]
---

This section includes code examples for developers to reference when implementing voice input in their applications.

:::caution
This feature requires the `VOICE_INPUT` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

## RequestPermission

This example demonstrates how to request permission for voice input.

```csharp
private IEnumerator Start()
{
    MLResult result = MLPermissions.RequestPermission(MLPermission.VoiceInput);
    yield return null;
    if (MLPermissions.CheckPermission(MLPermission.VoiceInput))
    {
        Debug.Log("Permission Granted");
    }
}
```

## Simple Voice Commands

This script requests Voice Input permissions from the user, then starts the Voice Commands service. When a voice command is detected, the script debugs the result in the debug console.

```csharp showLineNumbers
using System.Collections.Generic;
using System.Text;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class VoiceIntentsExample : MonoBehaviour
{
    [SerializeField, Tooltip("Configuration file that holds list of voice commands.")]
    private MLVoiceIntentsConfiguration _voiceConfiguration;

    private readonly MLPermissions.Callbacks permissionCallbacks = new MLPermissions.Callbacks();

    private void Start()
    {
         //Permission Callbacks
        permissionCallbacks.OnPermissionGranted += OnPermissionGranted;
        permissionCallbacks.OnPermissionDenied += OnPermissionDenied;
        permissionCallbacks.OnPermissionDeniedAndDontAskAgain += OnPermissionDenied;
        
        // Requests permissions from the user. 
        MLPermissions.RequestPermission(MLPermission.VoiceInput, permissionCallbacks);
    }

    private void OnPermissionDenied(string permission)
    {
        Debug.Log("Permission Denied!");
    }

    private void OnPermissionGranted(string permission)
    {
        Initialize();
    }

    // Start the voice intent service with the configured voice commands.
    private void Initialize()
    {
          MLVoice.OnVoiceEvent += VoiceEvent;

        if (MLVoice.VoiceEnabled)
        {
            MLResult result = MLVoice.SetupVoiceIntents(_voiceConfiguration);
            if (result.IsOk)
            {
                    // Subscribe to the voice command event
                    MLVoice.OnVoiceEvent += VoiceEvent;
            }
        }
    }

    // Called when a voice command is detected.
    void VoiceEvent(in bool wasSuccessful, in MLVoice.IntentEvent voiceEvent)
    {
        StringBuilder strBuilder = new StringBuilder();
        strBuilder.Append($"<b>Last Voice Event:</b>\n");
        strBuilder.Append($"Was Successful: <i>{wasSuccessful}</i>\n");
        strBuilder.Append($"State: <i>{voiceEvent.State}</i>\n");
        strBuilder.Append($"No Intent Reason\n(Expected NoReason): \n<i>{voiceEvent.NoIntentReason}</i>\n");
        strBuilder.Append($"Event Unique Name:\n<i>{voiceEvent.EventName}</i>\n");
        strBuilder.Append($"Event Unique Id: <i>{voiceEvent.EventID}</i>\n");
        
        Debug.Log(strBuilder.ToString());
    }

    // Stop the service and disable the event when the script is destroyed.
    private void OnDestroy()
    {
        MLVoice.Stop();
        MLVoice.OnVoiceEvent -= VoiceEvent;

        permissionCallbacks.OnPermissionGranted -= OnPermissionGranted;
        permissionCallbacks.OnPermissionDenied -= OnPermissionDenied;
        permissionCallbacks.OnPermissionDeniedAndDontAskAgain -= OnPermissionDenied;
    }
}

```

