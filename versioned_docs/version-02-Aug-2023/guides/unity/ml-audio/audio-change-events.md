---
title: Audio Change Events
sidebar_position: 5
date: 07/12/2022
tags: [Unity, Audio]
keywords: [Unity, Audio]
---

This section provides an example script that demonstrates how to subscribe to Magic Leap's Audio change events.

## Example

```csharp showLineNumbers
using UnityEngine;
using UnityEngine.XR.MagicLeap;
public class AudioEventExample : MonoBehaviour
{
    void Start()
    {
        MLAudioOutput.OnMasterVolumeChanged += HandleOnVolumeChangeCallback;
        MLAudioInput.OnMicrophoneMuteChanged += HandleOnMicrophoneMuteCallback;
        MLAudioOutput.OnAudioOutputDeviceChanged += HandleOnAudioOutputDeviceChanged;
    }
    private void HandleOnAudioOutputDeviceChanged(MLAudioOutput.Device device)
    {
        Debug.Log("Output device was changed to" + device);
    }
    private void HandleOnMicrophoneMuteCallback(bool muted)
    {
        Debug.Log("Mute was changed to | Is Muted =" + muted);
    }
    private void HandleOnVolumeChangeCallback(float volume)
    {
       Debug.Log("Volume was changed to " + volume);
    }
    void OnDestroy()
    {
        MLAudioOutput.OnMasterVolumeChanged -= HandleOnVolumeChangeCallback;
        MLAudioInput.OnMicrophoneMuteChanged -= HandleOnMicrophoneMuteCallback;
        MLAudioOutput.OnAudioOutputDeviceChanged -= HandleOnAudioOutputDeviceChanged;
    }
}
```

