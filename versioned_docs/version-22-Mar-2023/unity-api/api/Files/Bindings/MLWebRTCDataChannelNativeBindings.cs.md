---

title: MLWebRTCDataChannelNativeBindings.cs

---


# MLWebRTCDataChannelNativeBindings.cs









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

namespace UnityEngine.XR.MagicLeap
{
    using System;
    using System.Runtime.InteropServices;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC
    {
        public partial class DataChannel
        {
            internal class NativeBindings : MagicLeapNativeBindings
            {
                public delegate void OnOpenedDelegate(IntPtr context);

                public delegate void OnClosedDelegate(IntPtr context);

                public delegate void OnMessageDelegate(in MLWebRTCDataChannelMessage message, IntPtr context);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCDataChannelCreate(ulong connectionHandle, [MarshalAs(UnmanagedType.LPStr)] string label, out ulong dataChannelHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCDataChannelGetLabel(ulong dataChannelHandle, out IntPtr label);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCDataChannelReleaseLabelMemory(ulong dataChannelHandle, IntPtr label);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCDataChannelIsOpen(ulong dataChannelHandle, [MarshalAs(UnmanagedType.I1)] out bool isOpen);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCDataChannelSetEventCallbacks(ulong dataChannelHandle, in MLWebRTCDataChannelEventCallbacks callbacks);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCDataChannelSendMessage(ulong dataChannelHandle, in MLWebRTCDataChannelMessage message);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCDataChannelDestroy(ulong connectionHandle, ulong dataChannelHandle);

                public static MLResult.Code SetCallbacks(MLWebRTC.DataChannel dataChannel)
                {
                    dataChannel.gcHandle = GCHandle.Alloc(dataChannel);
                    IntPtr gcHandlePtr = GCHandle.ToIntPtr(dataChannel.gcHandle);

                    NativeBindings.MLWebRTCDataChannelEventCallbacks callbacks = NativeBindings.MLWebRTCDataChannelEventCallbacks.Create(gcHandlePtr);
                    MLResult.Code resultCode = NativeBindings.MLWebRTCDataChannelSetEventCallbacks(dataChannel.Handle, in callbacks);
                    if (!MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCDataChannelSetEventCallbacks)))
                    {
                        dataChannel.gcHandle.Free();
                    }

                    return resultCode;
                }

                public static MLResult.Code SendMessageToDataChannel(MLWebRTC.DataChannel dataChannel, string message)
                {
                    NativeBindings.MLWebRTCDataChannelMessage messageNative = NativeBindings.MLWebRTCDataChannelMessage.Create(message);

                    MLResult.Code resultCode = NativeBindings.MLWebRTCDataChannelSendMessage(dataChannel.Handle, in messageNative);
                    MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCDataChannelSendMessage));
                    Marshal.FreeHGlobal(messageNative.Data);
                    return resultCode;
                }

                public static MLResult.Code SendMessageToDataChannel<T>(MLWebRTC.DataChannel dataChannel, T[] message)
                {
                    NativeBindings.MLWebRTCDataChannelMessage messageNative = NativeBindings.MLWebRTCDataChannelMessage.Create(message);

                    MLResult.Code resultCode = NativeBindings.MLWebRTCDataChannelSendMessage(dataChannel.Handle, in messageNative);
                    MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCDataChannelSendMessage));
                    Marshal.FreeHGlobal(messageNative.Data);

                    return resultCode;
                }

                [AOT.MonoPInvokeCallback(typeof(OnOpenedDelegate))]
                private static void OnOpened(IntPtr context)
                {
                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        DataChannel dataChannel = gcHandle.Target as DataChannel;
                        dataChannel?.OnOpened?.Invoke(dataChannel);
                    });
                }

                [AOT.MonoPInvokeCallback(typeof(OnClosedDelegate))]
                private static void OnClosed(IntPtr context)
                {
                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        DataChannel dataChannel = gcHandle.Target as DataChannel;
                        dataChannel?.OnClosed?.Invoke(dataChannel);
                    });
                }

                [AOT.MonoPInvokeCallback(typeof(OnMessageDelegate))]
                private static void OnMessage(in NativeBindings.MLWebRTCDataChannelMessage message, IntPtr context)
                {
                    object messageObject = null;
                    bool isBinary = message.IsBinary;
                    if (isBinary)
                    {
                        byte[] bytes = new byte[message.DataSize];
                        Marshal.Copy(message.Data, bytes, 0, (int)message.DataSize);
                        messageObject = bytes;
                    }
                    else
                    {
                        string chars = Marshal.PtrToStringAnsi(message.Data, (int)message.DataSize);
                        messageObject = chars;
                    }

                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        DataChannel dataChannel = gcHandle.Target as DataChannel;
                        if (isBinary)
                        {
                            dataChannel?.OnMessageBinary?.Invoke(dataChannel, messageObject as byte[]);
                        }
                        else
                        {
                            dataChannel?.OnMessageText?.Invoke(dataChannel, messageObject as string);
                        }
                    });
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCDataChannelMessage
                {
                    public uint Version;

                    public IntPtr Data;

                    public ulong DataSize;

                    [MarshalAs(UnmanagedType.I1)]
                    public bool IsBinary;

                    public static MLWebRTCDataChannelMessage Create(string message)
                    {
                        MLWebRTCDataChannelMessage channelMessage = new MLWebRTCDataChannelMessage();
                        channelMessage.Version = 1;
                        channelMessage.Data = Marshal.StringToHGlobalAnsi(message);
                        channelMessage.DataSize = (ulong)message.Length;
                        channelMessage.IsBinary = false;
                        return channelMessage;
                    }

                    public static MLWebRTCDataChannelMessage Create<T>(T[] message)
                    {
                        MLWebRTCDataChannelMessage channelMessage = new MLWebRTCDataChannelMessage();
                        channelMessage.Version = 1;
                        int typeSize = Marshal.SizeOf(typeof(T));
                        int unmanagedByteArrayLength = (typeSize * message.Length);

                        channelMessage.Data = Marshal.AllocHGlobal(unmanagedByteArrayLength);
                        IntPtr next = channelMessage.Data;
                        for (int i = 0; i < message.Length; ++i)
                        {
                            Marshal.StructureToPtr(message[i], next, false);
                            next = IntPtr.Add(next, typeSize);
                        }

                        channelMessage.DataSize = (ulong)unmanagedByteArrayLength;
                        channelMessage.IsBinary = true;
                        return channelMessage;
                    }
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCDataChannelEventCallbacks
                {
                    public uint Version;

                    public IntPtr Context;

                    public OnOpenedDelegate OnOpen;

                    public OnClosedDelegate OnClosed;

                    public OnMessageDelegate OnMessage;

                    public static MLWebRTCDataChannelEventCallbacks Create(IntPtr context)
                    {
                        MLWebRTCDataChannelEventCallbacks callbacks = new MLWebRTCDataChannelEventCallbacks();
                        callbacks.Version = 1;
                        callbacks.OnOpen = DataChannel.NativeBindings.OnOpened;
                        callbacks.OnClosed = DataChannel.NativeBindings.OnClosed;
                        callbacks.OnMessage = DataChannel.NativeBindings.OnMessage;

                        callbacks.Context = context;
                        return callbacks;
                    }
                }
            }
        }
    }
}
```




