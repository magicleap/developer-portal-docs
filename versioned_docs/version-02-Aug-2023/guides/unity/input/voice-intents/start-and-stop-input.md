---
title: Start/Stop Input
sidebar_position: 4
date: 07/27/2022
tags: [Unity, Input, Voice, Voice Intents]
keywords: [Unity, Input, Voice, Voice Intents]
---

This section provides details on how developers can start and stop tracking voice intents inside their applications.

:::caution
This feature requires the `VOICE_INPUT` permission to be **requested** at runtime and enabled in your project's Manifest Settings (**Edit > Project Settings > Magic Leap > Manifest Settings**).
:::

## Example

This script allows the user to toggle the voice intent service by pressing the Bumper on the controller.
 
``` csharp
using System.Collections.Generic;
using System.Text;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.XR.MagicLeap;

public class VoiceIntentsExample : MonoBehaviour
{
    [SerializeField, Tooltip("Configuration file that holds list of voice commands.")]
    private MLVoiceIntentsConfiguration _voiceConfiguration;

    private MagicLeapInputs _mlInputs;
    private MagicLeapInputs.ControllerActions _controllerActions;

    private readonly MLPermissions.Callbacks permissionCallbacks = new MLPermissions.Callbacks();

    private void Start()
    {
        // Input Events
        _mlInputs = new MagicLeapInputs();
        _mlInputs.Enable();
        _controllerActions = new MagicLeapInputs.ControllerActions(_mlInputs);

        //Permission Callbacks
        permissionCallbacks.OnPermissionGranted += OnPermissionGranted;
        permissionCallbacks.OnPermissionDenied += OnPermissionDenied;
        permissionCallbacks.OnPermissionDeniedAndDontAskAgain += OnPermissionDenied;

        //Request Permission
        MLPermissions.RequestPermission(MLPermission.VoiceInput, permissionCallbacks);
        var permissionRequest = MLPermissions.RequestPermission(MLPermission.VoiceInput);

    }

    private void OnPermissionDenied(string permission)
    {
        Debug.Log("Permission Denied!");
    }

    private void OnPermissionGranted(string permission)
    {
        Initialize();
    }

    private void Initialize()
    {
        MLVoice.OnVoiceEvent += VoiceEvent;
        _controllerActions.Bumper.performed += HandleOnBumper;
    }

    // Called when a voice command is detected.
    void VoiceEvent(in bool wasSuccessful, in MLVoice.IntentEvent voiceEvent)
    {
        Debug.Log("Voice Intent Triggered: " + voiceEvent.EventName);
    }

    private void HandleOnBumper(InputAction.CallbackContext obj)
    {
        bool bumperDown = obj.ReadValueAsButton();

        if (bumperDown)
        {
            if (MLVoice.IsStarted)
            {
                MLResult result = MLVoice.Stop();
                if (!result.IsOk)
                { 
                    Debug.LogError("Failed to Stop Processing Voice Intents with result: " + result);
                }
            }
            else
            {
                MLResult result = MLVoice.SetupVoiceIntents(_voiceConfiguration);
                if (!result.IsOk)
                {
                    Debug.LogError("Failed to Re-Setup Voice Intents with result: " + result);
                }
            }
        }
    }

    // Stop the service and disable the event when the script is destroyed.
    private void OnDestroy()
    {
        _controllerActions.Bumper.performed -= HandleOnBumper;
        MLVoice.Stop();
        MLVoice.OnVoiceEvent -= VoiceEvent;

        permissionCallbacks.OnPermissionGranted -= OnPermissionGranted;
        permissionCallbacks.OnPermissionDenied -= OnPermissionDenied;
        permissionCallbacks.OnPermissionDeniedAndDontAskAgain -= OnPermissionDenied;
    }
}
```

