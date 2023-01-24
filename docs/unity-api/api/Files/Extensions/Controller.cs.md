---

title: Controller.cs

---


# Controller.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) (2019-2022) Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

using System;
using System.Runtime.InteropServices;
using UnityEngine.InputSystem.LowLevel;
using UnityEngine.InputSystem.Utilities;
using UnityEngine.InputSystem.XR;
using UnityEngine.XR.MagicLeap.Native;


namespace UnityEngine.XR.MagicLeap
{
    public static partial class InputSubsystem
    {
        public static partial class Extensions
        {
            public static partial class Controller
            {
                public static bool AttachTriggerListener(Action<ushort, MLInputControllerTriggerEvent, float> triggerCallback)
                {
                    if (!_callbacksSet)
                    {
                        var result = SetCallbacks();

                        if (result != MLResult.Code.Ok)
                            return false;

                        _callbacksSet = true;
                    }

                    _onTriggerEvent += triggerCallback;
                    return _callbacksSet;
                }

                public static void RemoveTriggerListener(Action<ushort, MLInputControllerTriggerEvent, float> triggerCallback)
                {
                    _onTriggerEvent -= triggerCallback;
                }

                private static event Action<ushort, MLInputControllerTriggerEvent, float> _onTriggerEvent;

                private static MLResult SetCallbacks()
                {
                    var callbacks = NativeBindings.MLInputControllerCallbacksEx.Create();
                    var result = NativeBindings.MLInputSetControllerCallbacksEx(MagicLeapXrProviderNativeBindings.GetInputHandle(), ref callbacks,
                        IntPtr.Zero);
                    MLResult.DidNativeCallSucceed(result, nameof(NativeBindings.MLInputSetControllerCallbacksEx));

                    return MLResult.Create(result);
                }

                public const uint MaxControllerTouchpadTouches = 2;

                private static bool _callbacksSet;

                public enum CalibrationAccuracy : uint
                {
                    Bad = 0,

                    Low = 1,

                    Medium = 2,

                    High = 3,
                }


                public enum MLInputControllerType
                {
                    None,
                    Device
                }

                public enum MLInputControllerButton
                {
                    None,
                    Bumper,
                    Menu,
                    Count
                }

        public enum MLInputControllerTriggerEvent
                {

                    Pull,

                    Release,

                    Click,

                    Hold
                }

                internal class NativeBindings : MagicLeapNativeBindings
                {
                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLInputControllerState
                    {
                        [MarshalAs(UnmanagedType.ByValArray, SizeConst = (int)MaxControllerTouchpadTouches)]
                        public MagicLeapNativeBindings.MLVec3f[] TouchesPositionAndForce;

                        public float TriggerNormalized;

                        [MarshalAs(UnmanagedType.ByValArray, SizeConst = (int)MLInputControllerButton.Count)]
                        public byte[] ButtonStates;

                        [MarshalAs(UnmanagedType.ByValArray, SizeConst = (int)MaxControllerTouchpadTouches)]
                        public byte[] IsTouchesActive;

                        public byte IsConnected;

                        public TouchpadGesture.MLInputControllerTouchpadGesture TouchpadGesture;

                        public TouchpadGesture.State TouchpadGestureState;

                        public MLInputControllerType Type;

                        public byte HardwareIndex;
                    }

                    public delegate void OnTouchpadGestureEndDelegate(ushort controllerId, IntPtr touchpadGesture, IntPtr data);

                    public delegate void OnTouchpadGestureDelegate(ushort controllerId, IntPtr touchpadGesture, IntPtr data);

                    public delegate void OnTouchpadGestureContinueDelegate(ushort controllerId, IntPtr touchpadGesture, IntPtr data);

                    public delegate void OnButtonDownDelegate(ushort controllerId, MLInputControllerButton button, IntPtr data);

                    public delegate void OnButtonUpDelegate(ushort controllerId, MLInputControllerButton button, IntPtr data);

                    public delegate void OnButtonClickDelegate(ushort controllerId, MLInputControllerButton button, IntPtr data);

                    public delegate void OnTriggerDelegate(ushort controllerId, MLInputControllerTriggerEvent @event, float depth, IntPtr data);

                    public delegate void OnConnectDelegate(ushort controllerId, IntPtr data);

                    public delegate void OnDisconnectDelegate(ushort controllerId, IntPtr data);


                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLInputConnectedDevicesList
                    {
                        public uint Version;

                        public uint ConnectedControllerCount;

                        public IntPtr ConnectedControllerIds;

                    };

                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLInputControllerCallbacksEx
                    {
                        public uint Version;

                        public OnTouchpadGestureDelegate OnTouchpadGesture;

                        public OnTouchpadGestureContinueDelegate OnTouchpadGestureContinue;

                        public OnTouchpadGestureEndDelegate OnTouchpadGestureEnd;

                        public OnButtonDownDelegate OnButtonDown;

                        public OnButtonUpDelegate OnButtonUp;

                        public OnButtonClickDelegate OnButtonClick;

                        public OnTriggerDelegate OnTrigger;

                        public OnConnectDelegate OnConnect;

                        public OnDisconnectDelegate OnDisconnect;

                        public static MLInputControllerCallbacksEx Create()
                        {
                            return new MLInputControllerCallbacksEx
                            {
                                Version = 3,
                                OnTrigger = NativeBindings.OnTrigger
                            };
                        }
                    };

                    [DllImport(MLInputDll, CallingConvention = CallingConvention.Cdecl)]
                    public static extern MLResult.Code MLInputSetControllerCallbacksEx(ulong Handle, ref MLInputControllerCallbacksEx Callbacks,
                        IntPtr UserData);

                    [DllImport(MLInputDll, CallingConvention = CallingConvention.Cdecl)]
                    public static extern MLResult.Code MLInputGetConnectedDevices(ulong Handle, IntPtr InoutDevices);

                    [DllImport(MLInputDll, CallingConvention = CallingConvention.Cdecl)]
                    public static extern MLResult.Code MLInputReleaseConnectedDevicesList(ulong Handle, IntPtr Devices);


                    [AOT.MonoPInvokeCallback(typeof(OnTriggerDelegate))]
                    private static void OnTrigger(ushort controllerId, MLInputControllerTriggerEvent triggerEvent, float depth, IntPtr data)
                    {
                        _onTriggerEvent?.Invoke(controllerId, triggerEvent, depth);
                    }
                }
            }
        }
    }
}
```



