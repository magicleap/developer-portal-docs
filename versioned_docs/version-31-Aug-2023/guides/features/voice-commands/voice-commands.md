---
id: voice-commands
title: Voice Commands
sidebar_position: 5
date: 12/14/2022
tags: [Voice, Commands, Android,]
keywords: [Voice, Commands, Android,]
---

The Magic Leap 2 offers Speech Commands, which allow applications to perform custom and system actions. When enabled, users can use their voice to interact with applications on the device. The can also be used to perform system tasks, such as changing the volume of audio, exiting an application or taking a camera capture, in place of using other input methods. Notably, these speech commands work offline which means they can be used even when there is no network connection.

## System Voice Commands

Voice Commands are short, spoken phrases that can tell your Magic Leap 2 to carry out specific actions, such as reducing the volume by saying, "Hey Magic Leap, turn the volume down."

Magic Leap 2 OS has built-in system-level Voice Commands and will have the capability to create your own at the application level in the future.

See the [Customer Care Portal](https://www.magicleap.care/hc/en-us/articles/9472998365197-Voice-Commands) to view the complete list of system voice commands.

## Custom Voice Commands

Unlike system-wide voice commands that are initiated by saying "Hey Magic Leap", you do not need to say "Hey Magic Leap" for voice input to work in your Unity app. To avoid conflicts between system and app voice commands, the API automatically stops voice processing when the application is paused and resumes it when resuming the app.

To learn how to integrate voice commands in your application see the following documents:

[Voice Intents Unity](/versioned_docs/version-31-Aug-2023/guides/unity/input/voice-intents/voice-intents-overview.md) - Learn how to quickly add voice commands to your Unity Application.
[Voice Intent Native Sample](/versioned_docs/version-31-Aug-2023/guides/native/capi-samples.md#voice-intents) - See how to integrate Magic Leap's native APIs to add support for custom voice commands into you C++ application.

