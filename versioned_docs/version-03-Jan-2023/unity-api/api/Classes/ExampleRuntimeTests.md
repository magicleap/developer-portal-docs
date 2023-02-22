---
title: ExampleRuntimeTests
summary: runtime tests a.k.a. playmode tests are tests which require the game to be running either on device or in playmode. these will tend to be more involved than simple edit-mode tests as they might have dependencies on subsystems or other libraries being loaded. these can be thought of more like integration tests as opposed to unit tests, although unity doesn't use that terminology or make that distinction anywhere. 

---

# ExampleRuntimeTests




Runtime Tests (a.k.a. PlayMode Tests) are tests which require the game to be running either on device or in PlayMode. These will tend to be more involved than simple Edit-Mode tests as they might have dependencies on subsystems or other libraries being loaded. These can be thought of more like integration tests as opposed to unit tests, although Unity doesn't use that terminology or make that distinction anywhere.   [More...](#detailed-description)  




## Detailed Description

```csharp
public class ExampleRuntimeTests; 
```


**Details**

For us, running these tests in PlayMode will usually require first connecting to a Magic Leap App Simulator session. Which modes (Simulator vs Device) are suitable might take some experimenting. 





-----------



## Public Methods

### IEnumerator InputSubsystem_Can_Acquire_Head_Device {#ienumerator-inputsubsystem-can-acquire-head-device}

```csharp
public IEnumerator InputSubsystem_Can_Acquire_Head_Device()
```






-----------

### void MLDeviceSetup {#void-mldevicesetup}

A [Setup] method will execute BEFORE each and every test in this class. They're useful for preparing a scene state with certain components that will be needed by the tests. 

```csharp
public void MLDeviceSetup()
```






-----------

### void MLDeviceTearDown {#void-mldeviceteardown}

A [TearDown] method will execute AFTER each and every test in this class. They're useful for cleanup, where you don't want something leftover from one test to possibly affect the next. May be unnecessary if you only have one test. 

```csharp
public void MLDeviceTearDown()
```






-----------

### void MLDevice_has_Gesture_Subsystem_Component {#void-mldevice-has-gesture-subsystem-component}

```csharp
public void MLDevice_has_Gesture_Subsystem_Component()
```






-----------

