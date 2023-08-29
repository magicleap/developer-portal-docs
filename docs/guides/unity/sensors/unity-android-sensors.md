---
title: Generic Sensor API
date: 08/29/2023
tags: [Magic Leap, Android, Unity]
keywords: [Magic Leap, Android, Generic, Sensor, Input]
---

# Unity - Magic Leap 2 Sensors Access

Sensors are devices that measure environmental characteristics of the device that the content is running on, such as light, pressure, temperature, orientation, and motion. Unity’s Input System allows you to access sensors on Android devices using the standard Android Sensor API. In this guide, we will show you how to enable, disable, and read data from sensors on Android using the Input System.


:::caution
While the generic sensors such as the Light Sensor can be accessed using the generic Android API and Unity Input System, platform specific sensors like World Cameras can only be obtained via the Magic Leap SDK.
:::


## Prerequisites

- Unity 2020.1 or later with the [Input System package](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.7/manual/index.html) installed

  

## Available sensors

The following table lists the sensors that are available on Android devices and their corresponding sensor types and controls in the Input System.

See the [Android Sensor API Guide](/docs/guides/features/generic-sensors.md) for a complete list of Magic Leap 2 sensors compatable with the Android Sensor API.


|Sensor Name|Sensor Type|Control Type|Description|
|---|---|---|---|
|Accelerometer|Accelerometer|`Vector3Control`|Measures the acceleration of the device in meters per second squared|
|Gyroscope|Gyroscope|`Vector3Control`|Measures the angular velocity of the device in radians per second|
|Attitude Sensor|AttitudeSensor|`QuaternionControl`|Measures the orientation of the device|
|Magnetic Field Sensor|MagneticFieldSensor|`Vector3Control`|Measures the magnetic field strength of the device in microteslas|
|Light Sensor| LightSensor |`AxisControl`|Measures the ambient light level of the device in lux|
|Pressure Sensor| PressureSensor |`AxisControl` |Measures the atmospheric pressure of the device in hectopascals|

## Enabling and disabling sensors

Unlike other input devices, sensors are disabled by default in the Input System. To enable a sensor, you need to call `InputSystem.EnableDevice()` with the sensor device as an argument. For example, to enable the gyroscope sensor, you can write:
```
InputSystem.EnableDevice(Gyroscope.current);
```
  

To disable a sensor, you need to call `InputSystem.DisableDevice()` with the sensor device as an argument. For example, to disable the gyroscope sensor, you can write:
```
InputSystem.DisableDevice(Gyroscope.current);
```
  

To check whether a sensor is currently enabled, you can use the `InputDevice.enabled` property. For example, to check if the gyroscope sensor is enabled, you can write:
```
if  (Gyroscope.current.enabled)
{
	Debug.Log("Gyroscope  is  enabled");
}
```
  

## Reading sensor data

When a new sensor event is available, the `Sensor.onSensorChanged` event is triggered. You can subscribe to this event with a callback function that takes a Sensor parameter. The Sensor object contains information about the sensor device and the sensor data. For example, to print the angular velocity of the gyroscope sensor, you can write:

:::info

The names in the sensor overview table can be used in conjunction with [Sensor.displayName](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/api/UnityEngine.InputSystem.InputControl.html#UnityEngine_InputSystem_InputControl_displayName) to identify which sensor was updated.

:::

  
```
void  OnEnable()
{
	Sensor.onSensorChanged  +=  OnSensorChanged;
}

void  OnDisable()
{
	Sensor.onSensorChanged  -=  OnSensorChanged;
}

void  OnSensorChanged(Sensor  sensor)
{
	if  (sensor  is  Gyroscope)
	{
		//  Get  the  angular  velocity  in  radians  per  second
		Vector3  angularVelocity  =  ((Gyroscope)sensor).angularVelocity.ReadValue();
		//  Print  the  angular  velocity
		Debug.Log($"Gyroscope:  x:  {angularVelocity.x},  y:  {angularVelocity.y},  z:  {angularVelocity.z}");
	}
}
```

Alternatively, you can also read sensor data directly from the sensor device’s control. Each sensor device implements a single control that represents the data read by the sensor. The type and meaning of the control depend on the sensor type. For example, to get the ambient light level from the light sensor, you can write:
```
//  Get  the  light  level  in  lux
float  lightLevel  =  LightSensor.current.lightLevel.ReadValue();
//  Print  the  light  level
Debug.Log($"Light  Sensor:  {lightLevel}  lx");
```
  
Identifying the correct sensor

To obtain the sensor data, you can use the ReadValue() method of the sensor device. For example, to read the acceleration vector from the accelerometer sensor, you can write:

If the device has multiple instances of the same sensor type, such as three gyroscopes with different names, you can use the InputSystem.FindDevices() method to find all the devices that match a given layout name or device description. For example, to find all the gyroscopes on the device, you can write:
```
using  UnityEngine.InputSystem;
...

var  gyroscopes  =  InputSystem.FindDevices<Gyroscope>();
foreach  (var  gyroscope  in  gyroscopes)
{
	//  prints  the  name  of  each  gyroscope
	Debug.Log(gyroscope.name);  
}
```
  

To access a specific gyroscope by name, you can use the `InputSystem.GetDevice()` method and pass the name as an argument. For example, to access the gyroscope named “Headset Left Gyroscope Sensor”, you can write:
```
using  UnityEngine.InputSystem;
...

var  leftGyroscope  =  InputSystem.GetDevice<Gyroscope>("Headset  Left  Gyroscope  Sensor");
if  (leftGyroscope  !=  null)
{
	Quaternion  rotation  =  leftGyroscope.angularVelocity.ReadValue();
}
```


## Sampling frequency

Sensors sample continuously at a set interval. You can set or query the sampling frequency for each sensor using the Sensor.samplingFrequency property. The frequency is expressed in Hertz (number of samples per second). For example, to get and set the sampling frequency of the gyroscope sensor, you can write:
```
//  Get  the  sampling  frequency  of  the  gyroscope  sensor
float  frequency  =  Gyroscope.current.samplingFrequency;
//  Set  the  sampling  frequency  of  the  gyroscope  sensor  to  16  Hz
Gyroscope.current.samplingFrequency  =  16f;
```
  

## References

For more information and examples on how to use Android’s Sensor API or how to obtain sensor data in Unity’s Input System, please refer to the following resources:

-   [Sensors Overview | Android](https://developer.android.com/guide/topics/sensors/sensors_overview)
    
-   [Sensor Suppor | Input Systemt](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.7/manual/Sensors.html)
    
-   [Sensor API | Input System](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.7/api/UnityEngine.InputSystem.Sensor.html)
