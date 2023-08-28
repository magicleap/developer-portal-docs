---

title: GestureSubsystemComponent.cs

---


# GestureSubsystemComponent.cs









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
using UnityEngine.XR.Management;
using UnityEngine.XR.InteractionSubsystems;

namespace UnityEngine.XR.MagicLeap
{
    [DisallowMultipleComponent]
    public sealed class GestureSubsystemComponent : MonoBehaviour
    {
        public GestureSubsystem gestureSubsystem { get; private set; }

        public event Action<GestureSubsystem.Extensions.TouchpadGestureEvent> onTouchpadGestureChanged;

        public event Action<ActivateGestureEvent> onActivate;

        [SerializeField]
        bool m_ControllerGesturesEnabled;

        public bool controllerGesturesEnabled
        {
            get => m_ControllerGesturesEnabled;
        }

        void OnEnable()
        {
            gestureSubsystem = XRGeneralSettings.Instance?.Manager?.activeLoader?.GetLoadedSubsystem<XRGestureSubsystem>() as GestureSubsystem;
        }

        void OnDisable()
        {
            gestureSubsystem = null;
        }

        void Update()
        {
            if (gestureSubsystem == null || !gestureSubsystem.running)
                return;

            gestureSubsystem.Update();

            if (onTouchpadGestureChanged != null)
            {
                foreach (var touchpadGestureEvent in gestureSubsystem.touchpadGestureEvents)
                    onTouchpadGestureChanged(touchpadGestureEvent);
            }

            if (onActivate != null)
            {
                foreach (var activateGestureEvent in gestureSubsystem.activateGestureEvents)
                    onActivate(activateGestureEvent);
            }
        }
    }
}
```




