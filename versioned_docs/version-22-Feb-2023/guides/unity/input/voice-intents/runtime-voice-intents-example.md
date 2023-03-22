---
title: Runtime Voice Intents Example
sidebar_position: 3
date: 07/27/2022
tags: [Unity, Input, Voice, Voice Intents]
keywords: [Unity, Input, Voice, Voice Intents]
---

This section provides details on how developers can create voice commands at runtime. This feature can be helpful when loading content dynamically.

:::caution
This feature requires the `VOICE_INPUT` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::



## Example

Creates a custom MLVoiceIntentsConfiguration on Start. Then subscribes to the voice event and logs a message when a command was detected.
 

``` csharp
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class Example : MonoBehaviour
{
    //The commands that will be added to the voice configuration
    public string[] VoiceCommands = new string[] {"Select,Change Color,Undo"};
    
    // Voice Configuration that will be created at runtime.
    private MLVoiceIntentsConfiguration _voiceConfiguration;

    // Start is called before the first frame update
    void Start()
    {
        // Create a new instance of the Voice Intents Configuration.
        _voiceConfiguration = ScriptableObject.CreateInstance<MLVoiceIntentsConfiguration>();
        // Initialize the list that will be manipulated when adding voice commands.
        _voiceConfiguration.VoiceCommandsToAdd = new List<MLVoiceIntentsConfiguration.CustomVoiceIntents>();
        // Initialize the list that stores the complete json data.
        _voiceConfiguration.AllVoiceIntents = new List<MLVoiceIntentsConfiguration.JSONData>();

        for (int i = 0; i < VoiceCommands.Length; i++)
        {
            MLVoiceIntentsConfiguration.CustomVoiceIntents newIntent;
            //Assign the command to the intent value
            newIntent.Value = VoiceCommands[i];
            //Then assign a unique ID
            newIntent.Id = (uint)i;
            //Finally add it to the voice commands to add list.
            _voiceConfiguration.VoiceCommandsToAdd.Add(newIntent);
        }

        // Configure the voice intents based on the new configuration.
        MLResult result = MLVoice.SetupVoiceIntents(_voiceConfiguration);

        if (result.IsOk)
        {
            MLVoice.OnVoiceEvent += OnVoiceEvent;
        }
        else
        {
            Debug.LogError("Failed to Setup Voice Intents with result: " + result);
        }

    }

    // Write a message to the log when a command was detected.
    private void OnVoiceEvent(in bool wasSuccessful, in MLVoice.IntentEvent voiceEvent)
    {
        Debug.Log("Detected Voice Command : " + voiceEvent.EventName);
    }
}
```

