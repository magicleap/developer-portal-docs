---

title: MLPowerManagerNativeBindings.cs

---


# MLPowerManagerNativeBindings.cs









## Source code

```csharp
// %BANNER_BEGIN%
// ---------------------------------------------------------------------
// %COPYRIGHT_BEGIN%
// Copyright (c) 2023 Magic Leap, Inc. All Rights Reserved.
// Use of this file is governed by the Software License Agreement, located here: https://www.magicleap.com/software-license-agreement-ml2
// Terms and conditions applicable to third-party materials accompanying this distribution may also be found in the top-level NOTICE file appearing herein.
// %COPYRIGHT_END%
// ---------------------------------------------------------------------
// %BANNER_END%

namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLPowerManager
    {
        internal class NativeBindings : Native.MagicLeapNativeBindings
        {
            #region Delegates
            private delegate void OnPowerStateChangedInternalDelegate(PowerState state, in IntPtr user_data);

            private delegate void OnPropertiesChangedInternalDelegate(in MLPowerManagerPropertyData properties, in IntPtr user_data);

            private delegate void OnErrorOccurredInternalDelegate(Error error, in IntPtr user_data);
            #endregion

            #region CallbackMethods
            [AOT.MonoPInvokeCallback(typeof(OnPowerStateChangedInternalDelegate))]
            public static void HandleOnPowerChanged(PowerState state, in IntPtr user_data)
            {
                PowerState newState = state;
                MLThreadDispatch.ScheduleMain(() =>
                {
                    OnPowerStateChangedEvent?.Invoke(newState);
                });
            }

            [AOT.MonoPInvokeCallback(typeof(OnPropertiesChangedInternalDelegate))]
            public static void HandleOnPropertiesChanged(in MLPowerManagerPropertyData properties, in IntPtr user_data)
            {
                PropertyData newProperties;
                newProperties.Properties = MLConvert.MarshalUnmanagedArray<ComponentProperty>(properties.Properties, (int)properties.Size);

                MLThreadDispatch.ScheduleMain(() =>
                {
                    OnPropertiesChangedEvent?.Invoke(newProperties);
                });
            }

            [AOT.MonoPInvokeCallback(typeof(OnErrorOccurredInternalDelegate))]
            public static void HandleOnErrorOccurred(Error error, in IntPtr user_data)
            {
                var newError = error;
                MLThreadDispatch.ScheduleMain(() =>
                {
                    OnErrorOccurredEvent?.Invoke(newError);
                });
            }
            #endregion

            #region Structs
            [StructLayout(LayoutKind.Sequential)]
            public struct MLPowerManagerComponentProperty
            {
                public PropertyType Type;

                public ComponentPropertyData Data;
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLPowerManagerPropertyData
            {
                public byte Size;

                public IntPtr Properties;
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLPowerManagerPropertyTypeData
            {
                public byte Size;

                public IntPtr PropertyTypes;
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLPowerManagerPropertyTypeInfo
            {
                public uint Version;

                public static MLPowerManagerPropertyTypeInfo Init(uint version = 1)
                {
                    return new MLPowerManagerPropertyTypeInfo
                    {
                        Version = version,
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLPowerManagerPropertyInfo
            {
                public uint Version;

                public static MLPowerManagerPropertyInfo Init(uint version = 1)
                {
                    return new MLPowerManagerPropertyInfo
                    {
                        Version = version,
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLPowerManagerPowerStateSettings
            {
                public uint Version;

                public PowerState State;

                public static MLPowerManagerPowerStateSettings Init(uint version = 1)
                {
                    return new MLPowerManagerPowerStateSettings
                    {
                        Version = version,
                        State = PowerState.None,
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLPowerManagerPowerStateInfo
            {
                public uint Version;

                public static MLPowerManagerPowerStateInfo Init(uint version = 1)
                {
                    return new MLPowerManagerPowerStateInfo
                    {
                        Version = version,
                    };
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLPowerManagerPowerStateData
            {
                public byte Size;

                public IntPtr PowerState;
            }

            [StructLayout(LayoutKind.Sequential)]
            public struct MLPowerManagerCallbacks
            {
                public uint Version;

                private OnPowerStateChangedInternalDelegate OnPowerChanged;

                private OnPropertiesChangedInternalDelegate OnPropertiesChanged;

                private OnErrorOccurredInternalDelegate OnErrorOccurred;

                public static MLPowerManagerCallbacks Init(uint version = 1)
                {
                    return new MLPowerManagerCallbacks
                    {
                        Version = version,
                        OnPowerChanged = NativeBindings.HandleOnPowerChanged,
                        OnPropertiesChanged = NativeBindings.HandleOnPropertiesChanged,
                        OnErrorOccurred = NativeBindings.HandleOnErrorOccurred
                    };
                }
            }
            #endregion


            #region DLL
            [DllImport(MLPowerManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public extern static MLResult.Code MLPowerManagerCreate(Component component, out ulong handle);

            [DllImport(MLPowerManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public extern static MLResult.Code MLPowerManagerDestroy(ulong handle);

            [DllImport(MLPowerManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public extern static MLResult.Code MLPowerManagerSetCallbacks(ulong handle, in MLPowerManagerCallbacks callbacks , in IntPtr user_data);

            [DllImport(MLPowerManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public extern static MLResult.Code MLPowerManagerSetPowerState(ulong handle, in MLPowerManagerPowerStateSettings settings);

            [DllImport(MLPowerManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public extern static MLResult.Code MLPowerManagerGetComponentProperties(ulong handle, in MLPowerManagerPropertyInfo in_info, out MLPowerManagerPropertyData out_properties);

            [DllImport(MLPowerManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public extern static MLResult.Code MLPowerManagerReleasePropertyData(ulong handle, in MLPowerManagerPropertyData properties);

            [DllImport(MLPowerManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public extern static MLResult.Code MLPowerManagerGetAvailablePowerStates(ulong handle, in MLPowerManagerPowerStateInfo in_info, out MLPowerManagerPowerStateData out_states);

            [DllImport(MLPowerManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public extern static MLResult.Code MLPowerManagerGetPowerState(ulong handle, in MLPowerManagerPowerStateInfo in_info, out MLPowerManagerPowerStateData out_state);

            [DllImport(MLPowerManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public extern static MLResult.Code MLPowerManagerReleasePowerStateData(ulong handle, in MLPowerManagerPowerStateData power_states);

            [DllImport(MLPowerManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public extern static MLResult.Code MLPowerManagerGetAvailableProperties(ulong handle, in MLPowerManagerPropertyTypeInfo in_info, out MLPowerManagerPropertyTypeData out_properties);

            [DllImport(MLPowerManagerDll, CallingConvention = CallingConvention.Cdecl)]
            public extern static MLResult.Code MLPowerManagerReleasePropertyTypeData(ulong handle, in MLPowerManagerPropertyTypeData properties);
            #endregion
        }
    }
}
```




