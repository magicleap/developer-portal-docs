---
title: Voice Commands
sidebar_position: 5
date: 12/14/2022
tags: [Voice, Commands, Android, Intents]
keywords: [Voice, Commands, Android, Intents]
---

The Magic Leap 2 offers Speech Commands, which allow applications to perform custom and system actions. When enabled, users can use their voice to interact with applications on the device. The can also be used to perform system tasks, such as changing the volume of audio, exiting an application or taking a camera capture, in place of using other input methods. Notably, these speech commands work offline which means they can be used even when there is no network connection.

## System Voice Intents

Voice Intents are short, spoken phrases that can tell your Magic Leap 2 to carry out specific actions, such as reducing the volume by saying, "Hey Magic Leap, turn the volume down."

Magic Leap 2 OS has built-in system-level Voice Intents and will have the capability to create your own at the application level in the future.

All system intents must be initiated with, "**Hey Magic Leap,**..."

:::note These can be enabled in the Device's Settings:
Settings > Magic Leap Inputs > Voice > Voice Commands
:::

| Intent         | Spoken Command                                           | Action                             |
| -------------- | -------------------------------------------------------- | ---------------------------------- |
| Capture        | "take a (photo\|picture)"                                | Take a photo                       |
| Capture        | "(take a video\|start recording)"                        | Start a video recording            |
| Capture        | "(stop\|end) recording"                                  | Stop a video recording             |
| App Management | "(open\|launch\|go [back] to) **App Name**"              | Opens app                          |
| App Management | "(close\|quit\|exit) **App Name**"                       | Closes app                         |
| Volume         | "turn the volume (up\|down)"                             | Increases/decreases volume by 10%  |
| Volume         | "(set\|keep\|change) the volume (to\|at) (**0 to 100**)" | Changes volume to specified figure |
| Volume         | "mute"                                                   | Mute audio playback                |
| Volume         | "unmute"                                                 | Unmute audio playback              |
| Core OS        | "(open\|show\|go [to]) home"                             | Opens the home menu                |
| Core OS        | "(help\|what can I say?\|what commands can I use?)"      | Displays list of top commands      |

## Custom Voice Intents

Unlike system-wide voice commands that are initiated by saying "Hey Magic Leap", you do not need to say "Hey Magic Leap" for voice input to work in your Unity app. To avoid conflicts between system and app voice intents, the API automatically stops voice processing when the application is paused and resumes it when resuming the app.

To learn how to integrate voice intents in your application see the following documents

[Voice Intents Unity](/versioned_docs/version-22-Mar-2023/guides/unity/input/voice-intents/voice-intents-overview.md) - Learn how to quickly add voice commands to your Unity Application.
[Voice Intent Native Sample](/versioned_docs/version-22-Mar-2023/guides/native/capi-samples.md#voice-intents) - See how to integrate Magic Leap's native APIs to add support for custom voice commands into you C++ application.

