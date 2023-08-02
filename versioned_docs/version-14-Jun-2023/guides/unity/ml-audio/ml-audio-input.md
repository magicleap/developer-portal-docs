---
title: Audio Input
sidebar_position: 5
date: 07/12/2022
tags: [Unity, Audio]
keywords: [Unity, Audio]
---

This section provides examples of how to use Magic Leap's APIs to record audio.

:::caution
This features requires the `RecordAudio` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::


## Raw Audio Samples

This example shows how to obtain the raw audio buffer samples from the microphone as soon as they are received

```csharp showLineNumbers
using System;
using UnityEngine.XR.MagicLeap;

public class ML2BufferClip : MLAudioInput.BufferClip
{
    public ML2BufferClip(MLAudioInput.MicCaptureType captureType, int lengthSec, int frequency) : this(captureType, (uint)lengthSec, (uint)frequency, (uint)MLAudioInput.GetChannels(captureType)) { }

    public ML2BufferClip(MLAudioInput.MicCaptureType captureType, uint samplesLengthInSeconds, uint sampleRate, uint channels)
        : base(captureType, samplesLengthInSeconds, sampleRate, channels) { }

    public event Action<float[]> OnReceiveSampleCallback;

    protected override void OnReceiveSamples(float[] samples)
    {
        base.OnReceiveSamples(samples);
        if (OnReceiveSampleCallback != null)
        {
            OnReceiveSampleCallback(samples);
        }
    }
}
```

## Simple Audio Input Example

This example demonstrates how to record audio on Magic Leap 2 and play it back instantly.

```csharp showLineNumbers
using UnityEngine;
using UnityEngine.XR.MagicLeap;
public class AudioEventExample : MonoBehaviour
{
    [SerializeField, Tooltip("The audio source that should replay the captured audio.")]
    private AudioSource _playbackAudioSource = null;

    private readonly MLPermissions.Callbacks permissionCallbacks = new MLPermissions.Callbacks();
    private MLAudioInput.StreamingClip mlAudioStreamingClip;
    private MLAudioInput.BufferClip mlAudioBufferClip;

    void Awake()
    {
        if (_playbackAudioSource == null)
        {
            Debug.LogError("PlaybackAudioSource is not set, adding component to " + gameObject.name);
            _playbackAudioSource = gameObject.AddComponent<AudioSource>();
        }
        permissionCallbacks.OnPermissionGranted += OnPermissionGranted;
        MLPermissions.RequestPermission(MLPermission.RecordAudio, permissionCallbacks);
    }

    void OnDestroy()
    {
        StopCapture();
        permissionCallbacks.OnPermissionGranted -= OnPermissionGranted;
    }

    private void StartMicrophone()
    {
        _playbackAudioSource.Stop();
        var captureType = MLAudioInput.MicCaptureType.VoiceCapture;
        mlAudioStreamingClip = new MLAudioInput.StreamingClip(MLAudioInput.MicCaptureType.VoiceCapture, 3, MLAudioInput.GetSampleRate(captureType));

        _playbackAudioSource.pitch = 1;
        _playbackAudioSource.clip = mlAudioStreamingClip.UnityAudioClip;
        _playbackAudioSource.loop = true;
        _playbackAudioSource.Play();
    }

    private void StopCapture()
    {
        mlAudioStreamingClip?.Dispose();
        mlAudioStreamingClip = null;
        mlAudioBufferClip?.Dispose();
        mlAudioBufferClip = null;
        // Stop audio playback source and reset settings.
        _playbackAudioSource.Stop();
        _playbackAudioSource.time = 0;
        _playbackAudioSource.pitch = 1;
        _playbackAudioSource.loop = false;
        _playbackAudioSource.clip = null;
    }
    
    private void OnPermissionGranted(string permission)
    {
        StartMicrophone();
        Debug.Log($"Succeeded in requesting {permission}.");
    }
}
```

## Delayed Audio Playback

This example demonstrates how to record audio on Magic Leap 2 when a certain volume threshold is reached, and play back the recording at a lower pitch than it was captured.


```csharp showLineNumbers
using System.Collections;
using System.Linq;
using UnityEngine;
using UnityEngine.XR.MagicLeap;
public class AudioEventExample : MonoBehaviour
{
    [SerializeField, Tooltip("The audio source that should replay the captured audio.")]
    private AudioSource _playbackAudioSource = null;
    [Header("Delayed Playback")]
    [SerializeField, Range(1, 2), Tooltip("The pitch used for delayed audio playback.")]
    private float _pitch = 1.5f;

    private bool isAudioDetected = false;
    private float audioLastDetectionTime = 0;
    private float audioDetectionStart = 0;

    private const int AUDIO_CLIP_LENGTH_SECONDS = 60;
    private const float AUDIO_SENSITVITY = 0.02f;
    private const float AUDIO_CLIP_TIMEOUT_SECONDS = 2;

    private readonly MLPermissions.Callbacks permissionCallbacks = new MLPermissions.Callbacks();
    private MLAudioInput.BufferClip mlAudioBufferClip;

    void Awake()
    {
        if (_playbackAudioSource == null)
        {
            Debug.LogError("PlaybackAudioSource is not set, adding component to " + gameObject.name);
            _playbackAudioSource = gameObject.AddComponent<AudioSource>();
        }
        permissionCallbacks.OnPermissionGranted += OnPermissionGranted;
        MLPermissions.RequestPermission(MLPermission.RecordAudio, permissionCallbacks);
    }

    void OnDestroy()
    {
        StopCapture();
        permissionCallbacks.OnPermissionGranted -= OnPermissionGranted;
    }

    private void StartMicrophone()
    {
        _playbackAudioSource.Stop();
        var captureType = MLAudioInput.MicCaptureType.VoiceCapture;
        mlAudioBufferClip = new MLAudioInput.BufferClip(MLAudioInput.MicCaptureType.VoiceCapture, AUDIO_CLIP_LENGTH_SECONDS, MLAudioInput.GetSampleRate(captureType));
        mlAudioBufferClip.OnReceivedSamples += DetectAudio;
        _playbackAudioSource.pitch = _pitch;
        _playbackAudioSource.clip = null;
        _playbackAudioSource.loop = false;
        isAudioDetected = false;
        audioDetectionStart = 0;
        audioLastDetectionTime = 0;
    }

    private void StopCapture()
    {
        mlAudioBufferClip?.Dispose();
        mlAudioBufferClip = null;

        // Stop audio playback source and reset settings.
        _playbackAudioSource.Stop();
        _playbackAudioSource.time = 0;
        _playbackAudioSource.pitch = 1;
        _playbackAudioSource.loop = false;
        _playbackAudioSource.clip = null;
    }
    
    private void DetectAudio(float[] samples)
    {
        // Analyze the input spectrum data, to determine when someone is speaking.
        float maxAudioSample = 0f;

        //Audio samples can also be read directly instead of via callback using the mlAudioBufferClip.GetData()

        maxAudioSample = samples.Append(maxAudioSample).Max();
        if (maxAudioSample > AUDIO_SENSITVITY)
        {
            audioLastDetectionTime = Time.time;
            if (isAudioDetected == false)
            {
                isAudioDetected = true;
                audioDetectionStart = Time.time;
            }
        }
        else if (isAudioDetected && (Time.time > audioLastDetectionTime + AUDIO_CLIP_TIMEOUT_SECONDS))
        {
            var audioDetectionDuration = Time.time - audioDetectionStart;

            _playbackAudioSource.clip = mlAudioBufferClip.FlushToClip();
            _playbackAudioSource.time = _playbackAudioSource.clip.length - audioDetectionDuration;
            _playbackAudioSource.Play();
            // Reset and allow for new captured speech.
            isAudioDetected = false;
            audioDetectionStart = 0;
            audioLastDetectionTime = 0;
        }
    }

    private void OnPermissionGranted(string permission)
    {
        StartMicrophone();
        Debug.Log($"Succeeded in requesting {permission}.");
    }
}
```

# Read Audio Buffer Data
You can read the audio buffer data directly using the MLAudioInput.BufferClip.GetData() function. Here is a simple script that shows how to read buffer data. It doesn't play the audio back, but you can use it as a reference on how to obtain Audio Samples using the GetData function.

```csharp showLineNumbers
using System.Linq;
using UnityEngine;
using UnityEngine.XR.MagicLeap;
public class AudioEventExample : MonoBehaviour
{
    //Magic Leap Audio Capture Settings
    private MLAudioInput.MicCaptureType captureType = MLAudioInput.MicCaptureType.VoiceCapture;
    private MLAudioInput.BufferClip mlAudioBufferClip;
    private const int AUDIO_CLIP_LENGTH_SECONDS = 60; 

    //Used to read the buffer data directly
    private int detectionAudioPosition = 0; 
    private readonly float[] detectionAudioSamples = new float[128];

    //Magic Leap permissions
    private readonly MLPermissions.Callbacks permissionCallbacks = new MLPermissions.Callbacks();

    //True if permissions were granted and the microphone is initialized
    private bool _microphoneStarted = false;

    void Awake()
    {
        permissionCallbacks.OnPermissionGranted += OnPermissionGranted;
        MLPermissions.RequestPermission(MLPermission.RecordAudio, permissionCallbacks);
    }

    void OnDestroy()
    {
        StopCapture();
        permissionCallbacks.OnPermissionGranted -= OnPermissionGranted;
    }
    private void StopCapture()
    {
        mlAudioBufferClip?.Dispose();
        mlAudioBufferClip = null;
    }
    private void OnPermissionGranted(string permission)
    {
        StartMicrophone();
        Debug.Log($"Succeeded in requesting {permission}.");
    }

    private void StartMicrophone()
    {
        mlAudioBufferClip = new MLAudioInput.BufferClip(MLAudioInput.MicCaptureType.VoiceCapture, AUDIO_CLIP_LENGTH_SECONDS, MLAudioInput.GetSampleRate(captureType));
        detectionAudioPosition = 0;
        _microphoneStarted = true;
    }

    private void Update()
    {
        if (_microphoneStarted)
        {
            DetectAudio();
        }
    }

    private void DetectAudio()
    {
        // Analyze the input spectrum data, to determine when someone is speaking. 
        float maxAudioSample = 0f;
        while (true)
        {
            int readSampleCount = mlAudioBufferClip.GetData(detectionAudioSamples, detectionAudioPosition, out int nextPosition);
            if (readSampleCount == 0)
            {
                break;
            }
            detectionAudioPosition = nextPosition;
            maxAudioSample = detectionAudioSamples.Take(readSampleCount).Append(maxAudioSample).Max();
        }
    }
}
```