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
using System.Linq;
using System.Text;
using System.Runtime.InteropServices;
using UnityEngine.XR.MagicLeap.Native;


namespace UnityEngine.XR.MagicLeap
{
    public static partial class InputSubsystem
    {
        public static partial class Extensions
        {
            public static partial class Controller
            {

                public static State GetState()
                {
                    var device = InputSubsystem.Utils.FindMagicLeapDevice(InputDeviceCharacteristics.Controller | InputDeviceCharacteristics.TrackedDevice);
                    byte[] stateData = new byte[Marshal.SizeOf<InputSubsystem.Extensions.Controller.NativeBindings.MLInputControllerStateEx>()];

                    if (device.TryGetFeatureValue(InputSubsystem.Extensions.DeviceFeatureUsages.Controller.State, stateData))
                    {
                        IntPtr ptr = Marshal.AllocHGlobal(stateData.Length);
                        Marshal.Copy(stateData, 0, ptr, stateData.Length);
                        var nativeState = Marshal.PtrToStructure<InputSubsystem.Extensions.Controller.NativeBindings.MLInputControllerStateEx>(ptr);
                        Marshal.FreeHGlobal(ptr);
                        return new State(nativeState);
                    }

                    return default;
                }

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

                public enum MLInputControllerHand
                {
                    None,
                    Left,
                    Right,
                    Both
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

                public struct State
                {
                    internal State(NativeBindings.MLInputControllerStateEx nativeStruct)
                    {
                        Hand = nativeStruct.Hand;
                        TouchesPositionAndForce = new Vector3[nativeStruct.TouchesPositionAndForce.Length];
                        TriggerNormalized = nativeStruct.TriggerNormalized;
                        ButtonStates = nativeStruct.ButtonStates.Select(b => b > 0).ToArray();
                        IsTouchesActive = nativeStruct.IsTouchesActive.Select(b => b > 0).ToArray();
                        IsConnected = nativeStruct.IsConnected;
                        TouchpadGestureData = nativeStruct.TouchpadGestureData;
                        TouchpadGestureState = nativeStruct.TouchpadGestureState;
                        HardwareIndex = nativeStruct.HardwareIndex;
                    }

                    public MLInputControllerHand Hand;

                    public Vector3[] TouchesPositionAndForce;

                    public float TriggerNormalized;

                    public bool[] ButtonStates;

                    public bool[] IsTouchesActive;

                    public bool IsConnected;

                    public TouchpadGesture.Data TouchpadGestureData;

                    public TouchpadGesture.State TouchpadGestureState;

                    public byte HardwareIndex;

                    public override string ToString() => $"Hand: {Hand}, TouchesPositionAndForce:\n{string.Join(',',TouchesPositionAndForce)}, TriggerNormalized: { TriggerNormalized}, " +
                            $"ButtonStates:\n{string.Join(',', ButtonStates)}, IsTouchesActive:\n{string.Join(',',IsTouchesActive)}, IsConnected: {IsConnected}, " +
                        $"TouchpadGestureData: {TouchpadGestureData}, TouchpadGestureState: {TouchpadGestureState}, HardwareIndex: {HardwareIndex}";
                }

                internal class NativeBindings : MagicLeapNativeBindings
                {
                    [StructLayout(LayoutKind.Sequential)]
                    public struct MLInputControllerStateEx
                    {
                        public uint Version;

                        public MLInputControllerType Type;

                        public MLInputControllerHand Hand;

                        [MarshalAs(UnmanagedType.ByValArray, SizeConst = (int)MaxControllerTouchpadTouches)]
                        public Vector3[] TouchesPositionAndForce;

                        public float TriggerNormalized;

                        [MarshalAs(UnmanagedType.ByValArray, ArraySubType = UnmanagedType.I1, SizeConst = (int)MLInputControllerButton.Count)]
                        public byte[] ButtonStates;

                        [MarshalAs(UnmanagedType.ByValArray, ArraySubType = UnmanagedType.I1, SizeConst = (int)MaxControllerTouchpadTouches)]
                        public byte[] IsTouchesActive;

                        [MarshalAs(UnmanagedType.I1)]
                        public bool IsConnected;

                        public TouchpadGesture.Data TouchpadGestureData;

                        public TouchpadGesture.State TouchpadGestureState;

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



