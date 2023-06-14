---
id: spaces-api-overview
title: API Overview
sidebar_position: 1
date: 6/08/2023
tags: [Unity, Eye Tracking, Input, Overview]
keywords: [Unity, Eye Tracking, Input, Overview]
---

# Power Management API Overview

This guide provides detailed instructions and examples on how to use the MagicLeap's `MLPowerManager` API for managing power states and properties of components in Unity. The guide first explains the concept of power states, showing how to get all available states and retrieve a specific state for a device. It then delves into the process of setting a power state with thorough examples. The guide proceeds to explain how to get and update the properties of a component, focusing on different aspects like battery info, battery level, charging state, and connection state. Lastly, it touches on how to handle power management events such as errors, state changes, and property changes through callbacks. By following this guide, developers can efficiently control and manage Magic Leap 2's power states and properties inside their Unity Application.

## Power Management Callbacks

Add event handlers to power management events to receive notifications about changes in power state, errors, and component properties.

```csharp
void Start()
{
    // Add event handlers to power management events
    MLPowerManager.OnErrorOccurred += OnErrorOccurred;
    MLPowerManager.OnPowerStateChanged += UpdatePowerState;
    MLPowerManager.OnPropertiesChanged += UpdateControllerProperties;
}

public void OnErrorOccurred(MLPowerManager.Error state)
{
    // This method will be called when an error occurs
    Debug.LogError($"Error Occurred: {state}");
}

void UpdatePowerState(MLPowerManager.PowerState state)
{
    // This method will be called when the power state changes
    // You can handle the new power state here
}

void UpdateControllerProperties(MLPowerManager.PropertyData data)
{
    // This method will be called when the properties of the controller changes
    // You can handle the new property data here
}
```

The `OnErrorOccurred` event triggers when an error occurs in the power management. The `OnPowerStateChanged` event triggers when the power state of a component changes. The `OnPropertiesChanged` event triggers when the properties of a component change. Each of these events gives a specific type of data that you can use in your application.



## MLPowerManager.PowerState

`MLPowerManager.PowerState` is an enum that represents power states for a device:

- `None`: Invalid or no power state.
- `Normal`: Normal mode, this is the default or active state of the component.
- `DisabledWhileCharging`: Charging only mode. When charging component it cannot be used.
- `Standby`: Standby mode.
- `Sleep`: Sleep mode.

### Get Available Power States

Use `MLPowerManager.GetAvailablePowerStates(out PowerStateData data)` method to retrieve all available power states for a device.

```csharp
void GetAvailablePowerStates()
{
    // Declare a PowerStateData variable to store the result
    MLPowerManager.PowerStateData powerStateData;
    
    // Call GetAvailablePowerStates and store the result
    MLResult result = MLPowerManager.GetAvailablePowerStates(out powerStateData);

    // If the call is successful and powerStateData contains power states
    if (result == MLResult.Code.Ok && powerStateData.PowerStates.Length > 0)
    {
        // Convert the array of power states to a List
        AvaiablePowerStatesList = new List<MLPowerManager.PowerState>(powerStateData.PowerStates);
        
        // Now you can use AvaiablePowerStatesList for your specific needs
        // e.g., populate a dropdown list
    }
}
```

### Get a Specific Power State

Use `MLPowerManager.GetPowerState(out PowerStateData data)` method to retrieve the current power state for a device.

```csharp
void GetPowerState()
{
    // Declare a PowerStateData variable to store the result
    MLPowerManager.PowerStateData powerStateData;

    // Call GetPowerState and store the result
    MLResult result = MLPowerManager.GetPowerState(out powerStateData);

    // If the call is successful and powerStateData contains power states
    if (result == MLResult.Code.Ok && powerStateData.PowerStates.Length > 0)
    {
        // Retrieve the first power state
        MLPowerManager.PowerState currentPowerState = powerStateData.PowerStates[0];

        // Now you can use currentPowerState for your specific needs
    }
}
```

## MLPowerManager.Settings

The MLPowerManager.Settings is struct that encapsulates settings used by the Power Manager
when requesting the power state to be changed.

- `PowerState`: New power state to request.

### Set Power State

Use `MLPowerManager.SetPowerState(Settings settings)` method to set a power state for a device.

```csharp
public void SetPowerState()
{
    if (AvaiablePowerStatesList != null)
    {
        // Instantiate Settings struct and set the power state to be one from the available power states
        MLPowerManager.Settings settings = new MLPowerManager.Settings();
        MLPowerManager.PowerState desiredState = AvaiablePowerStatesList[stateIndex];
        settings.State = desiredState;

        // Set the power state and store the result
        MLResult result = MLPowerManager.SetPowerState(settings);

        // Now you can handle the result of the SetPowerState call
    }
}
```

::: info SetPowerState Result Values

Calling `SetPowerState()` may return the following results:

MLResult.IllegalState: The component does not support the requested power state.
MLResult.InvalidParam: Failed due to an invalid parameter.
MLPowerManagerResult.InvalidStateTransition: The component does not support transitioning to the requested state.
MLPowerManagerResult.NotConnected: The component is not connected.
MLResult.Ok: The power state of the controller was set successfully.
MLPowerManagerResult.StateTransitionsDisabled: The component currently does not support transitioning to a different state.
MLResult.UnspecifiedFailure: The operation failed with an unspecified error.
MLPowerManagerResult.UnsupportedState: The component does not support the requested power state.

:::

## MLPowerManager.PropertyTypeData

`MLPowerManager.PropertyTypeData` is a structure to encapsulate output data when getting a component's available property types. It contains an array of `PropertyType` enum elements.

`PropertyType` is used to identify each of the properties.

- `BatteryInfo`: Extra info about battery, as represented by MLPowerManager.BatteryInfo.
- `BatteryLevel`: Battery level. Range is between 0 and 100.
- `ChargingState`: Charging state.
- `ConnectionState`: Connection state.

### Get All Available Properties Types

Use `MLPowerManager.GetAvailableProperties(out PropertyTypeData data)` method to retrieve all available properties.

```csharp
void GetAvailableProperties()
{
    // Declare a PropertyTypeData variable to store the result
    MLPowerManager.PropertyTypeData propertyTypeData;

    // Call GetAvailableProperties and store the result
    MLResult result = MLPowerManager.GetAvailableProperties(out propertyTypeData);

    // If the call is successful
    if (result == MLResult.Code.Ok)
    {
        // Convert the array of property types to a List
        AvaiablePropertiesList = new List<MLPowerManager.PropertyType>(propertyTypeData.PropertyTypes);

        // Now you can use AvaiablePropertiesList for your specific needs
        // e.g., display available properties
    }
}
```

## MLPowerManager.PropertyData


The `MLPowerManager.PropertyData` is a struct holds the property data of a specific component. It contains an array of `ComponentProperty` structs which represents the property of a component:


`MLPowerManager.ComponentProperty` is a struct that is used to encapsulate the data for each `PropertyType` .

- `Type`: The `PropertyType` enum that represents the type of the property. This includes: 
  - `BatteryInfo`
  - `BatteryLevel`
  - `ChargingState`
  - `ConnectionState`.
- `Data`: The `PropertyUnion` struct that holds the data of the property. The type of the data depends on the `Type`.

### Get Controller Properties

Use `MLPowerManager.GetComponentProperties(out PropertyData data)` method to retrieve the controller properties.


```csharp
void GetControllerProperties()
{
    // Call GetComponentProperties for the controller and store the result
    MLResult result = MLPowerManager.GetComponentProperties(out MLPowerManager.PropertyData propertyData);

    // If the call is successful
    if (result == MLResult.Code.Ok)
    {
        // Now you can handle the propertyData for your specific needs
    }
}
```

### Accessing Property Data

This example shows how to iterate through through all of the properties.


```csharp
void UpdateControllerProperties(MLPowerManager.PropertyData data)
{
    // Loop through the properties
    for (int i = 0; i < data.Properties.Length; ++i)
    {
        // Use a switch statement to handle each property type
        switch (data.Properties[i].Type)
        {
            case MLPowerManager.PropertyType.BatteryInfo:
                // Convert the property data to the appropriate type
                MLPowerManager.BatteryInfo batteryInfo = (MLPowerManager.BatteryInfo)data.Properties[i].Data.BatteryInfo;
                // Now you can use batteryInfo for your specific needs
                // e.g., display the battery info
                break;

            case MLPowerManager.PropertyType.BatteryLevel:
                UInt16 batteryLevel = (UInt16)data.Properties[i].Data.BatteryLevel;
                // Now you can use batteryLevel for your specific needs
                break;

            case MLPowerManager.PropertyType.ChargingState:
                MLPowerManager.ChargingState chargingState = (MLPowerManager.ChargingState)data.Properties[i].Data.ChargingState;
                // Now you can use chargingState for your specific needs
                break;

            case MLPowerManager.PropertyType.ConnectionState:
                MLPowerManager.ConnectionState connectionState = (MLPowerManager.ConnectionState)data.Properties[i].Data.ConnectionState;
                // Now you can use connectionState for your specific needs
                break;

            default:
                Debug.LogWarning($"Unknown property type: {data.Properties[i].Type}");
                break;
        }
    }
}
```
