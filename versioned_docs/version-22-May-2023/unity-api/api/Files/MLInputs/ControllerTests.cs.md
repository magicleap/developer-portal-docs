---

title: ControllerTests.cs

---


# ControllerTests.cs









## Source code

```csharp
using System;
using System.Numerics;
using NUnit.Framework;
using UnityEngine.InputSystem;

namespace UnitySDKPlayTests
{
    public partial class MLInputs
    {
        public partial class ControllerTests
        {
            private MagicLeapInputs mlInputs;
            private MagicLeapInputs.ControllerActions controllerActions;

            [SetUp]
            public void MLControlSetup()
            {
                mlInputs = new MagicLeapInputs();
                mlInputs.Enable();
                controllerActions = new MagicLeapInputs.ControllerActions(mlInputs);
            }

            [TearDown]
            public void MLControlTearDown()
            {
                mlInputs.Dispose();
            }

            [Test]
            public void MLInput_ControllerActions()
            {
                try
                {
                    controllerActions.Position.ReadValue<Vector3>();
                    controllerActions.Velocity.ReadValue<Vector3>();
                    controllerActions.AngularVelocity.ReadValue<Vector3>();
                    controllerActions.Acceleration.ReadValue<Vector3>();
                    controllerActions.AngularAcceleration.ReadValue<Vector3>();
                    controllerActions.Rotation.ReadValue<Quaternion>();
                    controllerActions.Menu.IsPressed();
                    controllerActions.Trigger.ReadValue<float>();
                    InputActionPhase phase = controllerActions.TriggerHold.phase;
                    controllerActions.Bumper.IsPressed();
                    controllerActions.TouchpadPosition.ReadValue<Vector2>();
                    controllerActions.TouchpadForce.ReadValue<float>();
                }
                catch (Exception e)
                {
                    Assert.Fail(e.Message);
                }
            }
        }
    }
}
```




