---
id: unity-tracking-loss
title: Handling Tracking Loss Events
sidebar_position: 2
date: 1/28/2022
tags: [UnityHMD, Input]
keywords: [UnityHMD, Input, HeadPose, Reset, Recenter, Tracking, Origin]
---

# Handling Tracking Loss

If the Magic Leap can't locate its position in an environment, it experiences "tracking loss". The Magic Leap 2 lets developers manage their own tracking loss behavior -- some developers may want to pause the update loop and display a splash image, while others may want the app to continue playing.

The positional tracking events are separated into two categories. `TrackingState` and `MapEvents`. If tracking is lost and cannot be recovered for 15 seconds, Magic Leap 2 will reset its tracking origin the next time tracking is recovered. The origin is reset to avoid virtual content from appearing in the incorrect location.

## Head Pose / Origin Reset

This example uses the `OnTrackingOriginChanged` event to reset the meshes created by the `MeshingSubsystemComponent`.

```csharp
    private void Start()
    {
        XRInputSubsystem inputSubsystem = XRGeneralSettings.Instance?.Manager?.activeLoader
            ?.GetLoadedSubsystem<XRInputSubsystem>();
        if(inputSubsystem !=null )
            inputSubsystem.trackingOriginUpdated += OnTrackingOriginChanged;
    }

    private void OnDestroy()
    {
        XRInputSubsystem inputSubsystem = XRGeneralSettings.Instance?.Manager?.activeLoader
            ?.GetLoadedSubsystem<XRInputSubsystem>();
        if (inputSubsystem != null)
            inputSubsystem.trackingOriginUpdated -= OnTrackingOriginChanged;
    }

    /// Use event to detect if a new session occurs
    /// <param name="inputSubsystem"> The inputSubsystem that invoked this event.</param>
    private void OnTrackingOriginChanged(XRInputSubsystem inputSubsystem)
    {
        MeshingSubsystemComponent meshingSubsystemComponent = FindObjectOfType<MeshingSubsystemComponent>();
        if (meshingSubsystemComponent)
        {
            meshingSubsystemComponent.DestroyAllMeshes();
            meshingSubsystemComponent.RefreshAllMeshes();
        }
    }
```

## Polling Tracking Mode

Most developers consider `MLHeadTracking.TrackingMode.Mode6DO` as the preferred state, this state means tracking is fully functional. Any other state means that the headset cannot track the environment.

```csharp
...
var headDevice = InputSubsystem.Utils.FindMagicLeapDevice(
    InputDeviceCharacteristics.HeadMounted | InputDeviceCharacteristics.TrackedDevice);

  if (InputSubsystem.Extensions.MLHeadTracking.TryGetState(
    headDevice, out InputSubsystem.Extensions.MLHeadTracking.State state);
    {
        switch (state.Mode)
        {
            case InputSubsystem.Extensions.MLHeadTracking.TrackingMode.Mode6DO:
                // Rotational and positional data is available
                break;
            case InputSubsystem.Extensions.MLHeadTracking.TrackingMode.ModeUnavailable:
                // Only rotational information is available
                break;
        }
    }
...
```

## Polling Map Events

Developers may also want to create a custom prompt if the user loses localization, meaning that the device can no longer recognize the environment. If tracking is lost, it is considered a best practice to pause the experience until the headset re-localizes or starts a new session.

```csharp
...
var headDevice = InputSubsystem.Utils.FindMagicLeapDevice(
    InputDeviceCharacteristics.HeadMounted | InputDeviceCharacteristics.TrackedDevice);

    if (InputSubsystem.Extensions.MLHeadTracking.TryGetMapEvents(headDevice,
        out InputSubsystem.Extensions.MLHeadTracking.MapEvents mapEvents))
    {
        switch (mapEvents)
        {
            case InputSubsystem.Extensions.MLHeadTracking.MapEvents.Lost:
                //Tracking lost
                break;
            case InputSubsystem.Extensions.MLHeadTracking.MapEvents.Recovered:
                //Previous session restored
                break;
            case InputSubsystem.Extensions.MLHeadTracking.MapEvents.RecoveryFailed:
                //New Session is about to start
                break;
            case InputSubsystem.Extensions.MLHeadTracking.MapEvents.NewSession:
                //New Session is starting
                break;
            }
    }
...
```

## Mapping and Tracking Events Example

In this section, we have included an example of creating a script that triggers events when the headsets `MappingEvent` or `TrackingMode` change.

```csharp
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.XR;
using UnityEngine.XR.MagicLeap;

// Unity Events that are visible in the inspector for Tracking Mode and MapEvents
[System.Serializable]
public class TrackingModeEvent : UnityEvent<InputSubsystem.Extensions.MLHeadTracking.TrackingMode> { }
[System.Serializable]
public class MapStateEvent:UnityEvent<InputSubsystem.Extensions.MLHeadTracking.MapEvents>{}

/// <summary>
/// Contains Unity Events that are triggered when the Headset's Tracking Mode or Mapping State have changed.
/// </summary>
public class TrackingEvents : MonoBehaviour
{
    //Called when the headset tracking changes from 6Dof to 3Dof
    public TrackingModeEvent OnTrackingModeChanged;
    //Called when the user loses localization in their environment
    public MapStateEvent OnMapStateChanged;
    //Cached version of the headset device
    private InputDevice _headsetDevice;
    //The previously polled TrackingMode
    private InputSubsystem.Extensions.MLHeadTracking.TrackingMode _currentTrackingState;
    //The previously polled mapping event, stored as an int due to a limitation in SDK v0.51.0.
    private int _currentMapEvent;

    void Update()
    {
        //Finds the headset and stores it to be used in the polling methods.
        if (_headsetDevice.isValid == false)
        {
            _headsetDevice = InputSubsystem.Utils.FindMagicLeapDevice(InputDeviceCharacteristics.HeadMounted | InputDeviceCharacteristics.TrackedDevice);
            return;
        }

        PollMappingEvents();
        PollTrackingState();
    }

    /// <summary>
    /// Triggers the OnTrackingModeChanged event when the polled mapping event is not the same as the one that was previously polled.
    /// </summary>
    private void PollTrackingState()
    {
        if (InputSubsystem.Extensions.MLHeadTracking.TryGetState(_headsetDevice,
            out InputSubsystem.Extensions.MLHeadTracking.State state))
        {
            if (_currentTrackingState != state.Mode)
            {
                _currentTrackingState = state.Mode;
                OnTrackingModeChanged.Invoke(_currentTrackingState);
            }
        }
    }

    /// <summary>
    /// Triggers the OnMapStateChanged event when the polled mapping event is not the same as the one that was previously polled.
    /// </summary>
    private void PollMappingEvents()
    {
        if (InputSubsystem.Extensions.MLHeadTracking.TryGetMapEvents(_headsetDevice,
            out InputSubsystem.Extensions.MLHeadTracking.MapEvents mapEvents))
        {
            int eventType = (int) mapEvents;
            if (_currentMapEvent != eventType)
            {
                _currentMapEvent = eventType;
                OnMapStateChanged.Invoke(mapEvents);
            }
        }
    }

}

```
