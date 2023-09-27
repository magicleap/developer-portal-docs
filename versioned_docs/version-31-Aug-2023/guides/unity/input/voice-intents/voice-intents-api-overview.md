---
id: voice-intents-api-overview
title: API Overview
sidebar_position: 1
date: 04/29/2022
tags: [Unity, Input, Voice, Voice Intents]
keywords: [Unity, Input, Voice, Voice Intents]
---

## Namespace

The MLVoice API is defined under the `UnityEngine.XR.MagicLeap` namespace.

``` csharp
using UnityEngine;
using UnityEngine.XR.MagicLeap;
```

## Components

- `MLVoice.VoiceEnabled`
  - A boolean to indicate if the system supports Voice Intents.
- `MLVoice.SetupVoiceIntents(MLVoiceIntentsConfiguration voiceConfiguration)`
  - Returns an MLResult. Configures Settings sent, Sets the callbacks for voice intent events, and starts processing.
- `MLVoice.OnVoiceEvent`
  - An event to subscribe to that triggers when a Voice Intents event happens. Will give a Boolean to indicate if the event was successful and a MLVoice.IntentEvent.
- `MLVoice.Stop`
  - Stop unsets callbacks and stops processing.
  - This is optional, it is not necessary for shutdown. This is only needed if a user wants to stop processing at runtime after call MLVoice.SetupVoiceIntents. MLVoice can be restarted by calling MLVoice.SetupVoiceIntents.
  - Currently used in the example as a workaround for the issue with system notifications stopping Voice Processing to stop and restart Voice Processing.

## API Structures, Events, and Enums

``` csharp
/// <summary>
/// Voice state in voice event.
/// </summary>
public enum State
{
    /// <summary>
    ///  Intent hotword detected, Automatic Speech Recognition (ASR) session is going to start.
    /// </summary>
    HotwordDetected,
 
    /// <summary>
    ///  Voice UI is stopped, ASR session is going to stop.
    /// </summary>
    SessionEnded,
 
    /// <summary>
    ///  ASR session is stopped due to abort.
    /// </summary>
    ISessionEndedAborted,
 
    /// <summary>
    ///  ASR session is stopped without detecting an intent.
    /// </summary>
    SessionEndedNoIntent,
 
    /// <summary>
    ///  ASR session is stopped due to timeout.
    /// </summary>
    SessionEndedTimeout,
 
    /// <summary>
    ///  ASR session is stopped due to error.
    /// </summary>
    SessionEndedError,
 
    /// <summary>
    ///  Intent mode is started and ready.
    /// </summary>
    Ready,
 
    /// <summary>
    ///  Intent mode is stopped and not available.
    /// </summary>
    NotAvailable
};
 
/// <summary>
/// No intent reason code in voice event.
/// </summary>
public enum NoIntentReason
{
    /// <summary>
    ///  In case of success
    /// </summary>
    NoReason,
    /// <summary>
    ///  When the State in IntentEvent is either MLVoice.State.SessionEndedTimeout or MLVoice.State.SessionEndedError.
    /// </summary>
    Silence,
    /// <summary>
    ///  When the State in IntentEvent is MLVoice.State.SessionEndedNoIntent.
    /// </summary>
    NoMatch
};
 
 
/// <summary>
/// A structure containing voice intent event information.
/// </summary>
public struct IntentEvent
{
    /// <summary>
    /// Voice state when generating the voice intent event.
    /// </summary>
    public State State;
 
    /// <summary>
    /// If intent is not detected, it contains the reason,
    /// otherwise the value is MLVoiceIntentNoIntentReason.NoReason.
    /// </summary>
    public NoIntentReason NoIntentReason;
 
    /// <summary>
    /// The Event Name
    /// </summary>
    public string EventName;
 
    /// <summary>
    /// User defined intent index which is detected.
    /// </summary>
    public uint EventID;
};
 
 
/// <summary>
/// This callback will be invoked whenever a voice intent event is detected.
/// </summary>
/// /// <param name="wasSuccessful">Voice event handling result. In case of false, voiceEvent member variables should be ignored. (voiceEvent.EventName will be NULL)</param>
/// <param name="voiceEvent">Voice intent event.</param>
public delegate void OnVoiceEventDelegate(in bool wasSuccessful, in IntentEvent voiceEvent);
```

### Setting up Voice Intents Configuration

To add Voice Intents to your scene, you must use an asset called "Voice Intents Configuration" located under `Assets/Create/MagicLeap`:

<Image url= {require("/img/unity/input/voice-intents/voice-intents-configuration-asset.png")} >Voice Intents configuration asset</Image>

### Asset Configuration Data

- Id
  - Must be a Unique integer.
- Value
  - This is the voice command that will be spoken. There are no limitations on the length of this phrase currently. It should be specific enough to accomplish what is needed, but it is recommended that it is not so long that it is cumbersome to say.
  - The value may contain an or operator, " | ", to indicate multiple phrases that will trigger the same event. For example, in the image below, both `Hello Friend | Hello Buddy` phrases will trigger unity_test_3.

<Image url= {require("/img/unity/input/voice-intents/voice-intents-configuration-data.png")} >Voice Intents configuration data</Image>

