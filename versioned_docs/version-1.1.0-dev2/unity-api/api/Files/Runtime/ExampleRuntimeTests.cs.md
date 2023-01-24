---

title: ExampleRuntimeTests.cs

---


# ExampleRuntimeTests.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2018-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System.Collections;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;
using UnityEngine.XR;
using UnityEngine.XR.MagicLeap;


public class ExampleRuntimeTests
{
    private InputDevice headDevice;

    [SetUp]
    public void MLDeviceSetup()
    {
        Debug.Log("setup: MLDevice.RegisterGestureSubsystem");

        // Note that this method requires a reference to the UnityEngine.SpatialTracking assembly
        // You'll this on the LuminUnity-Tests.asmdef asset. 
        // It might be useful in the future to further subdivide our tests into smaller ASMDEFs according
        // to which extra Unity or 3rd party assemblies are required.
        MLDevice.RegisterGestureSubsystem();
    }

    [TearDown]
    public void MLDeviceTearDown()
    {
        Debug.Log("teardown: MLDevice.UnregisterGestureSubsystem");

        MLDevice.UnregisterGestureSubsystem();
    }

    [Test]
    public void MLDevice_has_Gesture_Subsystem_Component()
    {
        Assert.IsNotNull(MLDevice.GestureSubsystemComponent);
    }

    // A [UnityTest] behaves like a coroutine (Notice the IEnumerator return type). Use yield statements
    // to test something over time. Here, we wait an arbitrary 1 second before attempting to acquire the
    // headtracking device. 
    [UnityTest]
    public IEnumerator InputSubsystem_Can_Acquire_Head_Device()
    {
        if (!headDevice.isValid)
        {
            yield return new WaitForSeconds(1.0f);
            headDevice = InputSubsystem.Utils.FindMagicLeapDevice(InputDeviceCharacteristics.HeadMounted | InputDeviceCharacteristics.TrackedDevice);
        }

        Assert.IsTrue(headDevice.isValid);
    }
}
```



