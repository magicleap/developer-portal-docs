---
title: Runtime Configuration
sidebar_position: 2
date: 09/23/2022
tags: [Unity, Input, Voice, Voice Intents]
keywords: [Unity, Input, Voice, Voice Intents]
---

# Runtime Configuration

This section provides details on how developers can create and register voice commands dynamically at runtime. This feature can be helpful when loading content dynamically.

:::caution
This feature requires the `VOICE_INPUT` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

## Pre-Build Configuration

- Id
  - Must be a Unique integer.
- Value
  - This is the voice command that will be spoken. There are no limitations on the length of this phrase currently. It should be specific enough to accomplish what is needed, but it is recommended that it is not so long that it is cumbersome to say.
  - The value may contain an or operator, `|`, to indicate multiple phrases that will trigger the same event. For example, in the image below, both `Hello Friend | Hello Buddy` phrases will trigger the 3rd command.

<Image url= {require("/img/unity/input/voice-intents/voice-intents-configuration-data.png")} >Voice Intents configuration data</Image>

:::tip
You can choose to directly add voice commands through code instead of in the inspector.
:::


### Example

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
