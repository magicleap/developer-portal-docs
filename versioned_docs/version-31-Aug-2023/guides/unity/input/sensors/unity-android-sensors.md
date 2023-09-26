---
title: Unity Sensor Input
date: 08/29/2023
tags: [Magic Leap, Android, Unity]
keywords: [Magic Leap, Android, Generic, Sensor, Input]
---

# Sensors Input

Sensors are devices that measure environmental characteristics of the device that the content is running on, such as light, pressure, temperature, orientation, and motion. Unity’s Input System allows you to access sensors on Android devices using the standard Android Sensor API. In this guide, we will show you how to enable, disable, and read data from sensors on Android using the Input System.

:::caution Android Sensor API
Developers will need to use the standard Android Sensor API by creating a custom plugin to access additional sensors. Using the Android Sensor API directly allows for greater flexibility and lets developers choose specific sensors. For example, they can use the Gyro sensor on the compute pack instead of the one on the headset.
:::

:::caution Additional Sensors
While generic sensors, such as the Light Sensor, can be accessed using the Android Sensor API and Unity Input System, platform-specific sensors, like World Cameras, can only be obtained through APIs provided in the Magic Leap SDK.
:::

## Prerequisites

- Unity 2020.1 or later with the [Input System package](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.7/manual/index.html) installed

## Available sensors

The following table lists the sensors that are available on Android devices and their corresponding sensor types and controls in the Input System.

|Sensor Name|Sensor Type|Control Type|Description|
|---|---|---|---|
|Accelerometer|Accelerometer|`Vector3Control`|Measures the acceleration of the device in meters per second squared|
|Gyroscope|Gyroscope|`Vector3Control`|Measures the angular velocity of the device in radians per second|
|Light Sensor| LightSensor |`AxisControl`|Measures the ambient light level of the device in lux|
|Pressure Sensor| PressureSensor |`AxisControl` |Measures the atmospheric pressure of the device in hectopascals|



## Enabling and disabling sensors

Unlike other input devices, sensors are disabled by default in the Input System. To enable a sensor, you need to call `InputSystem.EnableDevice()` with the sensor device as an argument. For example, to enable the gyroscope sensor, you can write:

```csharp
using UnityEngine.InputSystem;
...
InputSystem.EnableDevice(UnityEngine.InputSystem.Gyroscope.current);
```

To disable a sensor, you need to call `InputSystem.DisableDevice()` with the sensor device as an argument. For example, to disable the gyroscope sensor, you can write:

```csharp
InputSystem.DisableDevice(UnityEngine.InputSystem.Gyroscope.current);
```

To check whether a sensor is currently enabled, you can use the `InputDevice.enabled` property. For example, to check if the gyroscope sensor is enabled, you can write:

```csharp
if  (UnityEngine.InputSystem.Gyroscope.current.enabled)
{
	Debug.Log("Gyroscope  is  enabled");
}
```

## Reading sensor data

The simplest way to read the sensor data, like the Gyroscope, is to read the value directly. In the following example we will access the `angularVelocity` control from the `Gyroscope` device and print the value to the console. The `angularVelocity`  returns a `Vector3` value that represents the angular velocity of the device in radians per second.

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class GyroTest : MonoBehaviour
{
    void Update()
    {
        // Get the gyroscope device
        Gyroscope gyro = UnityEngine.InputSystem.Gyroscope.current;
        // Check if the device is available and enabled
        if (gyro != null && gyro.enabled)
        {
            // Read the angular velocity
            Vector3 angularVelocity = gyro.angularVelocity.ReadValue();
            // Print the value to the console
            Debug.Log("Gyroscope angular velocity: " + angularVelocity);
        }
    }
}

```

Make sure to enable the gyroscope device before you can read its data, as sensors are disabled by default. You can do this by calling `InputSystem.EnableDevice(UnityEngine.InputSystem.Gyroscope.current)`. You can also disable the device by calling `InputSystem.DisableDevice(UnityEngine.InputSystem.Gyroscope.current)`.

## Reading the data using Input Actions

Another way to read the gyroscope data is to use Input Actions. Input Actions are a way to abstract input devices and controls, and map them to logical actions in your game. For example, you can create an Input Action called “Rotate” and map it to the gyroscope’s `angularVelocity` control. Then, you can subscribe to the action’s events and perform some logic based on the input value. For example, you can rotate an object in your scene according to the gyroscope input.

## Input Action Asset

To create an Input Action, you need to use the [Input Action Asset Editor](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.4/api/UnityEngine.InputSystem.Android.AndroidGyroscope.html), which is a graphical tool that lets you create and edit Input Action Assets. An Input Action Asset is a ScriptableObject that contains a set of Input Actions and Input Action Maps. An Input Action Map is a collection of Input Actions that belong to a specific context or mode in your game, such as “Menu” or “Gameplay”.

To create an Input Action that references the gyroscope do the following:

1. Create an Input Action Asset, go to **Assets > Create > Input Actions**. This will create a new asset in your project and open the editor window.
2. Create an Input Action Map, click on the **+** button next to **Action Maps** and give it a name, such as "Gameplay".
3. Create an Input Action, click on the **+** button next to **Actions** and give it a name, such as “Rotate”
4. Set its **Action Type** to **Value** and **Control Type** to **Vector3**.
5. Map the action to the gyroscope’s `angularVelocity` control, click on the **+** button next to **Bindings** and select **Gyroscope > angularVelocity** from the dropdown menu.

To use the Input Action in your script, you need to reference the Input Action Asset and enable it. You also need to register a callback function for the action’s events, such as `started`, `performed`, and `canceled`. For example, you can do something like this:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class GyroActionTest : MonoBehaviour
{
    // Reference to the Input Action Asset
    public InputActionAsset inputActions;
    // Reference to the Rotate action
    private InputAction rotateAction;
    // Reference to an object in the scene
    public Transform target;

    void Awake()
    {
        // Get the Rotate action from the Gameplay action map
        rotateAction = inputActions.FindActionMap("Gameplay").FindAction("Rotate");
        // Register a callback for the performed event
        rotateAction.performed += OnRotatePerformed;
    }

    void OnEnable()
    {
        // Enable the action
        rotateAction.Enable();
    }

    void OnDisable()
    {
        // Disable the action
        rotateAction.Disable();
    }

    void OnRotatePerformed(InputAction.CallbackContext context)
    {
        // Read the angular velocity value from the context
        Vector3 angularVelocity = context.ReadValue<Vector3>();
        // Rotate the target object according to the input value
        target.Rotate(angularVelocity * Time.deltaTime);
    }
}

```

## Create Input Actions at runtime

You can also create input actions at runtime using code, without using the editor tool or an asset. This gives you more flexibility and control over how you define and use input actions. For example, you can create an input action for reading gyroscope data like this:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class GyroRuntimeTest : MonoBehaviour
{
    // Reference to the Rotate action
    private InputAction rotateAction;
    // Reference to an object in the scene
    public Transform target;

    void Start()
    {
        // Create a new input action with the gyroscope's angularVelocity control
        rotateAction = new InputAction("GyroRuntime", InputActionType.Value, "<Gyroscope>/angularVelocity");
        
        rotateAction.Enable();
        // Register a callback for the performed event
        rotateAction.performed += OnRotatePerformed;
    }

    void OnEnable()
    {
        // Enable the action
        rotateAction.Enable();
    }

    void OnDisable()
    {
        // Disable the action
        rotateAction.Disable();
    }

    void OnRotatePerformed(InputAction.CallbackContext context)
    {
        // Read the angular velocity value from the context
        Vector3 angularVelocity = context.ReadValue<Vector3>();
        // Rotate the target object according to the input value
        target.Rotate(angularVelocity * Time.deltaTime);
    }
}
```

Note that you can also use [InputActionMap](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.4/manual/Sensors.html), which is a class that represents a collection of input actions. You can create and add input actions to an input action map at runtime, and enable and disable the whole map or individual actions.


## Simple Example

Below is a very simple example of how to log sensor data to the unity console at runtime:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;
public class SensorLogger : MonoBehaviour
{
    // Declare the sensors you want to enable and log
    private Gyroscope gyroscope;
    private Accelerometer accelerometer;
    private LightSensor lightSensor;
    // Use this for initialization
    void Start()
    {
        // Enable the sensors using InputSystem.EnableDevice()
        gyroscope = Gyroscope.current;
        accelerometer = Accelerometer.current;
        lightSensor = LightSensor.current;
        InputSystem.EnableDevice(gyroscope);
        InputSystem.EnableDevice(accelerometer);
        InputSystem.EnableDevice(lightSensor);
    }
    // Update is called once per frame
    void Update()
    {
        // Read the sensor values using ReadValue()
        Vector3 angularVelocity = gyroscope.angularVelocity.ReadValue();
        Vector3 acceleration = accelerometer.acceleration.ReadValue();
        float lightLevel = lightSensor.lightLevel.ReadValue();
        // Log the sensor values using Debug.Log()
        Debug.Log("Gyroscope: " + angularVelocity);
        Debug.Log("Accelerometer: " + acceleration);
        Debug.Log("Light Sensor: " + lightLevel);
    }
}
```

## References

For more information and examples on how to use Android’s Sensor API or how to obtain sensor data in Unity’s Input System, please refer to the following resources:

- [Sensors Overview | Android](https://developer.android.com/guide/topics/sensors/sensors_overview)
- [Sensor Support | Input System](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.7/manual/Sensors.html)
- [Sensor API | Input System](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.7/api/UnityEngine.InputSystem.Sensor.html)

