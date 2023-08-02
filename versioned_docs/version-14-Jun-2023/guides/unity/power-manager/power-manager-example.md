---
title: Power Manager Example
sidebar_position: 2
date: 6/8/2023
tags: [Unity, Power Manager, Overview]
keywords: [Unity, Power Manager, Power, Controller, Battery]
---

This example demonstrates how to manage power states and properties on a device using the Magic Leap platform's Power Manager API. It includes initialization and setup of available power states and properties, reading current power state and properties, and setting a new power state. The code also handles different events that could occur during these operations, such as changes in power state or properties, and potential errors. The detailed logging provides real-time insight into the power management process.

## Example

```csharp
using System;
using System.Collections;
using System.Linq;
using UnityEngine;
using UnityEngine.XR.MagicLeap;
using static UnityEngine.XR.MagicLeap.MLPowerManager;

public class MLPowerManagerTest : MonoBehaviour
{
    private List<MLPowerManager.PowerState> AvailablePowerStatesList = null;
    private List<MLPowerManager.PropertyType> AvailablePropertiesList = null;

    IEnumerator  Start()
    {
        MLPowerManager.OnErrorOccurred += OnErrorOccurred;
        MLPowerManager.OnPowerStateChanged += OnPowerStateChanged;
        MLPowerManager.OnPropertiesChanged += OnPropertiesChanged;
        GetAvailablePowerStates();
        GetAvailableProperties();
        GetControllerProperties();

        // Log the current power state
        GetPowerState();
        yield return null;
        // Change the power state
        SetPowerState();
        yield return null;
        // Log the new power state
        GetPowerState();

    }

    void OnErrorOccurred(in Error state)
    {
      Debug.LogError($"Error Occurred: {state}");
    }

    void OnPropertiesChanged(in PropertyData data)
    {
        Debug.Log($"Properties Changed: {data}");
    }

    void OnPowerStateChanged(in PowerState state)
    {
        Debug.Log($"Power State Changed: {state}");
    }

    void SetPowerState()
    {
       if (AvailablePowerStatesList != null)
        {
            var settings = new MLPowerManager.Settings();
            var stateIndex = AvailablePowerStates.value;
            settings.State = AvailablePowerStatesList[stateIndex];
            var result = MLPowerManager.SetPowerState(settings);
        }

    }

    void GetPowerState()
    {
        MLPowerManager.PowerStateData data;
        var result = MLPowerManager.GetPowerState(out data);

        if (result == MLResult.Code.Ok && data.PowerStates.Length > 0)
        {
            Debug.Log($"Current Power State: {data.PowerStates[0]}");
        }

    }

    void GetAvailablePowerStates()
    {
        MLPowerManager.PowerStateData data;
        var result = MLPowerManager.GetAvailablePowerStates(out data);

        if (result == MLResult.Code.Ok && data.PowerStates.Length > 0)
        {
            AvailablePowerStatesList = data.PowerStates.ToList();
            Debug.Log($"Available Power States: {string.Join(", ", AvailablePowerStatesList)}");
        }

    }

    void GetAvailableProperties()
    {
        MLPowerManager.PropertyTypeData propertyTypeData;
        var result = MLPowerManager.GetAvailableProperties(out propertyTypeData);

        if (result == MLResult.Code.Ok)
        {
            AvailablePropertiesList = propertyTypeData.PropertyTypes.ToList();
            Debug.Log($"Available Properties: {string.Join(", ", AvailablePropertiesList)}");
        }

    }

    void GetControllerProperties()
    {
        MLPowerManager.PropertyData data;
        var result = MLPowerManager.GetComponentProperties(out data);

        if (result == MLResult.Code.Ok)
        {
            Debug.Log($"Controller Properties: {data}");
        }

    }
}
```
