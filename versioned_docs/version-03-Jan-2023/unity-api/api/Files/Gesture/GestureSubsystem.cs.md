---

title: GestureSubsystem.cs

---


# GestureSubsystem.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2021-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using Unity.Collections;
using UnityEngine.Scripting;
using UnityEngine.XR.InteractionSubsystems;

namespace UnityEngine.XR.MagicLeap
{
    [Preserve]
    public sealed partial class GestureSubsystem : XRGestureSubsystem
    {
        public List<Extensions.TouchpadGestureEvent> touchpadGestureEvents { get { return magicLeapProvider.touchpadGestureEvents; } }

        MagicLeapGestureProvider magicLeapProvider;

        protected override Provider CreateProvider()
        {
            magicLeapProvider = new MagicLeapGestureProvider();
            return magicLeapProvider;
        }

        internal bool ControllerGesturesEnabled
        {
            get
            {
                return MagicLeapXrProviderNativeBindings.GetControllerTrackerHandle() != MagicLeap.Native.MagicLeapNativeBindings.InvalidHandle;
            }
        }

        class MagicLeapGestureProvider : Provider
        {
            public List<Extensions.TouchpadGestureEvent> touchpadGestureEvents { get { return m_TouchpadGestureEvents; } }
            List<Extensions.TouchpadGestureEvent> m_TouchpadGestureEvents = new List<Extensions.TouchpadGestureEvent>();

            List<GestureInputDevice> gestureInputDevices = new List<GestureInputDevice>()
            {
                new ControllerGestureDevice("MagicLeap Controller"),
            };

            public MagicLeapGestureProvider() { }

            ~MagicLeapGestureProvider()
            {
                if (m_ActivateGestureEvents.IsCreated)
                    m_ActivateGestureEvents.Dispose();
            }

            public override void Start()
            {
            }

            public override void Stop()
            {
            }

            public override void Update()
            {
                int activationGestureEvents = 0;
                m_TouchpadGestureEvents.Clear();

                foreach (GestureInputDevice gestureInputDevice in this.gestureInputDevices)
                {
                    gestureInputDevice.UpdateGesture(out bool isNewGesture);

                    if (!isNewGesture)
                        continue;


                    ControllerGestureDevice controllerGestureDevice = gestureInputDevice as ControllerGestureDevice;
                    if (controllerGestureDevice != null)
                    {
                        m_TouchpadGestureEvents.Add(controllerGestureDevice.currentGestureEvent);
                        continue;
                    }
                }

                UpdateActivationGestures(activationGestureEvents);
            }

            public override void Destroy()
            {
                base.Destroy();
            }

            private void UpdateActivationGestures(int numActivationGestureEvents)
            {
                if (m_ActivateGestureEvents.IsCreated)
                    m_ActivateGestureEvents.Dispose();

                m_ActivateGestureEvents = new NativeArray<ActivateGestureEvent>(numActivationGestureEvents, Allocator.Persistent);

                for (int i = 0; i < m_ActivateGestureEvents.Length; ++i)
                {
                    m_ActivateGestureEvents[i] = new ActivateGestureEvent(GetNextGUID(), GestureState.Started);
                }
            }
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        static void RegisterDescriptor()
        {
            XRGestureSubsystemDescriptor.RegisterDescriptor(
                new XRGestureSubsystemDescriptor.Cinfo
                {
                    id = MagicLeapXrProvider.GestureSubsystemId,
                    subsystemImplementationType = typeof(GestureSubsystem),
                }
            );
        }

        // High GUID bits saved for common (Activate) gesture for this subsystem
        static GestureId s_NextGUID = new GestureId(1, 0);
        static GestureId GetNextGUID()
        {
            unchecked
            {
                s_NextGUID.subId1 += 1;
                if (s_NextGUID.subId1 != 0) return s_NextGUID;
                s_NextGUID.subId1 += 1;
            }

            return s_NextGUID;
        }


        class ControllerGestureDevice : GestureInputDevice
        {

            public ControllerGestureDevice(string name)
            {
                this.name = name;
                this.characterstics = InputDeviceCharacteristics.Controller | InputDeviceCharacteristics.HeldInHand;
            }

            public Extensions.TouchpadGestureEvent currentGestureEvent;

            private byte[] stateData = new byte[Marshal.SizeOf<InputSubsystem.Extensions.Controller.NativeBindings.MLInputControllerState>()];

            public override void UpdateGesture(out bool isNewGesture)
            {
                isNewGesture = false;
                if (!this.device.isValid)
                {
                    this.FindDevice();
                    return;
                }

                // only continue if the keypose has changed
                if (this.device.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Controller.State, this.stateData))
                {
                    IntPtr ptr = Marshal.AllocHGlobal(this.stateData.Length);
                    Marshal.Copy(this.stateData, 0, ptr, this.stateData.Length);
                    var controllerState = Marshal.PtrToStructure<InputSubsystem.Extensions.Controller.NativeBindings.MLInputControllerState>(ptr);
                    Marshal.FreeHGlobal(ptr);

                    GestureState gestureState = GestureState.Canceled;
                    switch (controllerState.TouchpadGestureState)
                    {
                        case InputSubsystem.Extensions.TouchpadGesture.State.Start: gestureState = GestureState.Started; break;
                        case InputSubsystem.Extensions.TouchpadGesture.State.Continue: gestureState = GestureState.Updated; break;
                        case InputSubsystem.Extensions.TouchpadGesture.State.End: gestureState = GestureState.Completed; break;
                    }

                    if (gestureState == GestureState.Completed && this.currentGestureEvent.state == GestureState.Completed)
                        return;

                    this.currentGestureEvent = new Extensions.TouchpadGestureEvent(GetNextGUID(), gestureState, controllerState.HardwareIndex, controllerState.TouchpadGesture.Angle, controllerState.TouchpadGesture.Direction, controllerState.TouchpadGesture.Distance, Native.MLConvert.ToUnity(controllerState.TouchpadGesture.PositionAndForce), controllerState.TouchpadGesture.Radius, controllerState.TouchpadGesture.Speed, controllerState.TouchpadGesture.Type);

                    isNewGesture = true;
                    return;
                }
            }

        }

        abstract class GestureInputDevice
        {
            protected string name = string.Empty;
            protected InputDevice device;
            protected InputDeviceCharacteristics characterstics;
            public abstract void UpdateGesture(out bool isNewGesture);

            protected void FindDevice()
            {
                List<InputDevice> devices = new List<InputDevice>();
                InputDevices.GetDevicesWithCharacteristics(this.characterstics, devices);
                foreach (InputDevice device in devices)
                {
                    if (device.name == this.name && device.isValid)
                    {
                        this.device = device;
                        break;
                    }
                }
            }
        }
    }
}
```



