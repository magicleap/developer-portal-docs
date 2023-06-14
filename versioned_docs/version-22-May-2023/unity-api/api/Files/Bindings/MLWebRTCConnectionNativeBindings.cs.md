---

title: MLWebRTCConnectionNativeBindings.cs

---


# MLWebRTCConnectionNativeBindings.cs









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
    using System.Collections.Generic;
    using System.Runtime.InteropServices;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC
    {
        public partial class PeerConnection
        {
            internal class NativeBindings : MagicLeapNativeBindings
            {
                public delegate void OnErrorDelegate([MarshalAs(UnmanagedType.LPStr)] string message, IntPtr context);

                public delegate void OnConnectedDelegate(IntPtr context);

                public delegate void OnDisconnectedDelegate(IntPtr context);

                public delegate void OnTrackAddedDelegate(in MLWebRTC.Source.NativeBindings.MLWebRTCSource sourceNative, uint numStreamIds, IntPtr streamIdsPtr, IntPtr context);

                public delegate void OnTrackRemovedDelegate(ulong remoteSourceHandle, IntPtr context);

                public delegate void OnDataChannelReceivedDelegate(ulong remoteDataChanelHandle, IntPtr context);

                public delegate void OnLocalOfferCreatedDelegate([MarshalAs(UnmanagedType.LPStr)] string offer, IntPtr context);

                public delegate void OnLocalAnswerCreatedDelegate([MarshalAs(UnmanagedType.LPStr)] string answer, IntPtr context);

                public delegate void OnLocalIceCandidateFoundDelegate(in MLWebRTCConnectionIceCandidate iceCandidate, IntPtr context);

                public delegate void OnIceGatheringCompletedDelegate(IntPtr context);

                private static MLResult.Code CreateRemoteConnection(MLWebRTC.IceServer[] iceServers, IntPtr proxyConfig, out PeerConnection connection)
                {
                    connection = new PeerConnection();

                    // Converts into native ice server structs
                    MLWebRTCConnectionIceServer[] nativeIceServers = new MLWebRTCConnectionIceServer[iceServers.Length];
                    for (int i = 0; i < iceServers.Length; ++i)
                    {
                        nativeIceServers[i].Data = iceServers[i];
                    }

                    IntPtr arrayPtr = Marshal.AllocHGlobal(Marshal.SizeOf<MLWebRTCConnectionIceServer>() * nativeIceServers.Length);
                    IntPtr walkPtr = arrayPtr;

                    for (int i = 0; i < nativeIceServers.Length; ++i)
                    {
                        Marshal.StructureToPtr(nativeIceServers[i], walkPtr, false);
                        walkPtr = new IntPtr(walkPtr.ToInt64() + Marshal.SizeOf<MLWebRTCConnectionIceServer>());
                    }

                    NativeBindings.MLWebRTCConnectionConfig config = new NativeBindings.MLWebRTCConnectionConfig();
                    config.IceServers = arrayPtr;
                    config.NumIceServers = (uint)nativeIceServers.Length;
                    config.ProxyConfig = proxyConfig;

                    NativeBindings.MLWebRTCConnectionEventCallbacks callbacks = new NativeBindings.MLWebRTCConnectionEventCallbacks();
                    callbacks.OnError = NativeBindings.OnError;
                    callbacks.OnConnected = NativeBindings.OnConnected;
                    callbacks.OnDisconnected = NativeBindings.OnDisconnected;
                    callbacks.OnLocalOfferCreated = NativeBindings.OnLocalOfferCreated;
                    callbacks.OnLocalAnswerCreated = NativeBindings.OnLocalAnswerCreated;
                    callbacks.OnLocalIceCandidateFound = NativeBindings.OnLocalIceCandidateFound;
                    callbacks.OnIceGatheringCompleted = NativeBindings.OnIceGatheringCompleted;
                    callbacks.OnTrackRemoved = NativeBindings.OnTrackRemoved;
                    callbacks.OnTrackAdded = NativeBindings.OnTrackAdded;
                    callbacks.OnDataChannelReceived = NativeBindings.OnDataChannelReceived;

                    connection.gcHandle = GCHandle.Alloc(connection);
                    IntPtr gcHandlePtr = GCHandle.ToIntPtr(connection.gcHandle);
                    callbacks.Context = gcHandlePtr;

                    ulong connectionHandle = MagicLeapNativeBindings.InvalidHandle;

                    MLResult.Code resultCode = NativeBindings.MLWebRTCConnectionCreate(in config, in callbacks, out connectionHandle);
                    Marshal.FreeHGlobal(arrayPtr);

                    if (!MLResult.IsOK(resultCode))
                    {
                        connection.gcHandle.Free();
                        return resultCode;
                    }

                    connection.Handle = connectionHandle;
                    return resultCode;
                }

                public static MLResult.Code CreateRemoteConnection(MLWebRTC.IceServer[] iceServers, out PeerConnection connection)
                {
                    return CreateRemoteConnection(iceServers, IntPtr.Zero, out connection);
                }

                public static MLResult.Code CreateRemoteConnection(MLWebRTC.IceServer[] iceServers, MLWebRTC.ProxyConfig proxyConfig, out PeerConnection connection)
                {
                    NativeBindings.MLWebRTCConnectionProxyConfig nativeProxyConfig = new MLWebRTCConnectionProxyConfig
                    {
                        Type = proxyConfig.Type,
                        HostAddress = proxyConfig.HostAddress,
                        HostPort = proxyConfig.HostPort,
                        Username = proxyConfig.Username,
                        Password = proxyConfig.Password,
                        AutoDetect = proxyConfig.AutoDetect,
                        AutoConfigUrl = proxyConfig.AutoConfigUrl,
                        BypassList = proxyConfig.BypassList
                    };

                    IntPtr proxyConfigPtr = Marshal.AllocHGlobal(Marshal.SizeOf<MLWebRTCConnectionProxyConfig>());
                    Marshal.StructureToPtr(nativeProxyConfig, proxyConfigPtr, false);

                    MLResult.Code result = CreateRemoteConnection(iceServers, proxyConfigPtr, out connection);

                    Marshal.FreeHGlobal(proxyConfigPtr);
                    return result;
                }

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCConnectionCreate(in MLWebRTCConnectionConfig config, in MLWebRTCConnectionEventCallbacks callbacks, out ulong connectionHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCConnectionProcessEvents(ulong connectionHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCConnectionCreateOffer(ulong connectionHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCConnectionSetRemoteOffer(ulong connectionHandle, [MarshalAs(UnmanagedType.LPStr)] string offer);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCConnectionSetRemoteAnswer(ulong connectionHandle, [MarshalAs(UnmanagedType.LPStr)] string answer);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCConnectionAddRemoteIceCandidate(ulong connectionHandle, in MLWebRTCConnectionIceCandidate candidate);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCConnectionIsConnected(ulong connectionHandle, [MarshalAs(UnmanagedType.I1)] out bool isConnected);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCConnectionHasFailed(ulong connectionHandle, [MarshalAs(UnmanagedType.I1)] out bool hasFailed);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCConnectionAddLocalSourceTrackEx(ulong connectionHandle, ulong localSourceHandle, [In] ref MLWebRTCTrackInfo trackInfo);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCConnectionRemoveLocalSourceTrack(ulong connectionHandle, ulong localSourceHandle);

                [DllImport(MLWebRTCDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLWebRTCConnectionDestroy(ulong connectionHandle);

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnErrorDelegate))]
                private static void OnError([MarshalAs(UnmanagedType.LPStr)] string message, IntPtr context)
                {
                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        PeerConnection connection = gcHandle.Target as PeerConnection;
                        connection?.OnError?.Invoke(connection, message);
                    });
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnConnectedDelegate))]
                private static void OnConnected(IntPtr context)
                {
                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        PeerConnection connection = gcHandle.Target as PeerConnection;
                        connection?.OnConnected?.Invoke(connection);
                    });
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnDisconnectedDelegate))]
                private static void OnDisconnected(IntPtr context)
                {
                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        PeerConnection connection = gcHandle.Target as PeerConnection;
                        connection?.OnDisconnected?.Invoke(connection);
                    });
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnTrackAddedDelegate))]
                private static void OnTrackAdded(in MLWebRTC.Source.NativeBindings.MLWebRTCSource sourceNative, uint numStreamIds, IntPtr streamIdsPtr, IntPtr context)
                {
                    if (sourceNative.Handle == MagicLeapNativeBindings.InvalidHandle)
                    {
                        Debug.LogError("Received invalid source handle in NativeBindings.OnTrackAdded() callback");
                        return;
                    }

                    MLWebRTC.MediaStream.Track addedTrack = sourceNative.Data;

                    const string defaultStreamId = "unknown_remote";

                    int ptrSize = Marshal.SizeOf(typeof(IntPtr));
                    // TODO : marshal directly as a string array instead of IntPtr.
                    string[] streamIds = new string[numStreamIds];
                    for (int i = 0; i < numStreamIds; ++i)
                    {
                        IntPtr ptr = Marshal.ReadIntPtr(streamIdsPtr, i * ptrSize);
                        streamIds[i] = (ptr != IntPtr.Zero) ? Marshal.PtrToStringAnsi(ptr) : defaultStreamId;
                    }

                    if (streamIds.Length == 0)
                    {
                        streamIds = new string[1];
                        streamIds[0] = defaultStreamId;
                    }

                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        PeerConnection connection = gcHandle.Target as PeerConnection;
                        addedTrack.ParentConnection = connection;
                        List<MediaStream> mediaStreams = new List<MediaStream>();

                        foreach (string streamId in streamIds)
                        {
                            MLWebRTC.MediaStream mediaStream = null;
                            if (!connection.remoteMediaStreams.ContainsKey(streamId))
                            {
                                mediaStream = MLWebRTC.MediaStream.Create(connection, streamId);
                                connection.remoteMediaStreams.Add(mediaStream.Id, mediaStream);
                            }
                            else
                            {
                                mediaStream = connection.remoteMediaStreams[streamId];
                            }

                            mediaStream.Tracks.Add(addedTrack);
                            // Mark this track as "selected" if this is the first track of its type in this stream.
                            if (addedTrack.TrackType == MediaStream.Track.Type.Audio && mediaStream.ActiveAudioTrack == null)
                            {
                                mediaStream.SelectTrack(addedTrack);
                            }
                            else if (addedTrack.TrackType == MediaStream.Track.Type.Video && mediaStream.ActiveVideoTrack == null)
                            {
                                mediaStream.SelectTrack(addedTrack);
                            }

                            mediaStreams.Add(mediaStream);
                        }

                        connection.OnTrackAddedMultipleStreams?.Invoke(mediaStreams, addedTrack);
                    });
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnTrackRemovedDelegate))]
                private static void OnTrackRemoved(ulong remoteSourceHandle, IntPtr context)
                {
                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        PeerConnection connection = gcHandle.Target as PeerConnection;

                        if (!MagicLeapNativeBindings.MLHandleIsValid(remoteSourceHandle) || connection == null)
                        {
                            return;
                        }

                        List<MLWebRTC.MediaStream> mediaStreams = new List<MediaStream>();
                        MLWebRTC.MediaStream.Track removedTrack = null;

                        foreach (MLWebRTC.MediaStream remoteMediaStream in connection.remoteMediaStreams.Values)
                        {
                            foreach (MLWebRTC.MediaStream.Track track in remoteMediaStream.Tracks)
                            {
                                if (track.Handle == remoteSourceHandle)
                                {
                                    removedTrack = track;
                                    remoteMediaStream.UnSelectTrack(removedTrack);
                                    remoteMediaStream.Tracks.Remove(removedTrack);
                                    mediaStreams.Add(remoteMediaStream);
                                    break;
                                }
                            }
                        }
                        removedTrack.Cleanup();

                        connection.OnTrackRemovedMultipleStreams?.Invoke(mediaStreams, removedTrack);
                    });
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnDataChannelReceivedDelegate))]
                private static void OnDataChannelReceived(ulong dataChannelHandle, IntPtr context)
                {
                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        PeerConnection connection = gcHandle.Target as PeerConnection;
                        if (connection == null)
                        {
                            return;
                        }

                        if (!MagicLeapNativeBindings.MLHandleIsValid(dataChannelHandle))
                        {
                            return;
                        }

                        MLWebRTC.DataChannel dataChannel = new MLWebRTC.DataChannel(dataChannelHandle)
                        {
                            ParentConnection = connection
                        };

                        MLResult.Code resultCode = MLWebRTC.DataChannel.NativeBindings.SetCallbacks(dataChannel);
                        if (!MLResult.IsOK(resultCode))
                        {
                            return;
                        }

                        IntPtr labelPtr = IntPtr.Zero;
                        resultCode = MLWebRTC.DataChannel.NativeBindings.MLWebRTCDataChannelGetLabel(dataChannelHandle, out labelPtr);
                        if (!MLResult.IsOK(resultCode))
                        {
                            return;
                        }

                        if (labelPtr != IntPtr.Zero)
                        {
                            dataChannel.Label = Marshal.PtrToStringAnsi(labelPtr);
                        }

                        resultCode = MLWebRTC.DataChannel.NativeBindings.MLWebRTCDataChannelReleaseLabelMemory(dataChannelHandle, labelPtr);

                        connection.remoteDataChannels.Add(dataChannel);
                        connection.OnDataChannelReceived?.Invoke(connection, dataChannel);
                    });
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnLocalOfferCreatedDelegate))]
                private static void OnLocalOfferCreated([MarshalAs(UnmanagedType.LPStr)] string sendSdp, IntPtr context)
                {
                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        PeerConnection connection = gcHandle.Target as PeerConnection;
                        connection?.OnLocalOfferCreated?.Invoke(connection, sendSdp);
                    });
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnLocalAnswerCreatedDelegate))]
                private static void OnLocalAnswerCreated([MarshalAs(UnmanagedType.LPStr)] string sendAnswer, IntPtr context)
                {
                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        PeerConnection connection = gcHandle.Target as PeerConnection;
                        connection?.OnLocalAnswerCreated?.Invoke(connection, sendAnswer);
                    });
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnLocalIceCandidateFoundDelegate))]
                private static void OnLocalIceCandidateFound(in NativeBindings.MLWebRTCConnectionIceCandidate nativeIceCandidate, IntPtr context)
                {
                    MLWebRTC.IceCandidate iceCandidate = nativeIceCandidate.Data;

                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        PeerConnection connection = gcHandle.Target as PeerConnection;
                        connection?.OnLocalIceCandidateFound?.Invoke(connection, iceCandidate);
                    });
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnIceGatheringCompletedDelegate))]
                private static void OnIceGatheringCompleted(IntPtr context)
                {
                    MLThreadDispatch.ScheduleMain(() =>
                    {
                        GCHandle gcHandle = GCHandle.FromIntPtr(context);
                        PeerConnection connection = gcHandle.Target as PeerConnection;
                        connection?.OnIceGatheringCompleted?.Invoke(connection);
                    });
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCConnectionConfig
                {
                    public uint Version;

                    public IntPtr IceServers;

                    public uint NumIceServers;

                    public IntPtr ProxyConfig;
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCConnectionEventCallbacks
                {
                    public uint Version;

                    public IntPtr Context;

                    public OnErrorDelegate OnError;

                    public OnConnectedDelegate OnConnected;

                    public OnDisconnectedDelegate OnDisconnected;

                    public OnTrackAddedDelegate OnTrackAdded;

                    public OnTrackRemovedDelegate OnTrackRemoved;

                    public OnDataChannelReceivedDelegate OnDataChannelReceived;

                    public OnLocalOfferCreatedDelegate OnLocalOfferCreated;

                    public OnLocalAnswerCreatedDelegate OnLocalAnswerCreated;

                    public OnLocalIceCandidateFoundDelegate OnLocalIceCandidateFound;

                    public OnIceGatheringCompletedDelegate OnIceGatheringCompleted;
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCConnectionIceServer
                {
                    public uint Version;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string Uri;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string UserName;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string Password;

                    public MLWebRTC.IceServer Data
                    {
                        set
                        {
                            this.Uri = value.Uri;
                            this.UserName = value.UserName;
                            this.Password = value.Password;
                        }
                    }
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCConnectionIceCandidate
                {
                    public uint Version;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string Candidate;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string SdpMid;

                    public int SdpMlineIndex;

                    public MLWebRTC.IceCandidate Data
                    {
                        get
                        {
                            return MLWebRTC.IceCandidate.Create(this.Candidate, this.SdpMid, this.SdpMlineIndex);
                        }

                        set
                        {
                            this.Candidate = value.Candidate;
                            this.SdpMid = value.SdpMid;
                            this.SdpMlineIndex = value.SdpMLineIndex;
                        }
                    }
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCConnectionProxyConfig
                {
                    public MLWebRTC.ProxyType Type;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string HostAddress;

                    public int HostPort;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string Username;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string Password;

                    [MarshalAs(UnmanagedType.I1)]
                    public bool AutoDetect;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string AutoConfigUrl;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string BypassList;
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct MLWebRTCTrackInfo
                {
                    private readonly uint version;

                    private readonly uint streamCount;

                    [MarshalAs(UnmanagedType.LPArray, ArraySubType = UnmanagedType.LPStr)]
                    private IntPtr[] streams;

                    [MarshalAs(UnmanagedType.LPStr)]
                    private readonly string trackId;

                    public MLWebRTCTrackInfo(string[] streams, string trackId)
                    {
                        this.version = 1;
                        this.streamCount = (streams != null) ? (uint)streams.Length : 0;
                        this.trackId = trackId ?? string.Empty;

                        // [MarshalAs(UnmanagedType.LPArray, ArraySubType=UnmanagedType.LPStr)] doesnt work when char** is in a struct instead of a func param.
                        this.streams = (streams != null) ? new IntPtr[streams.Length] : null;
                        for (int i = 0; i < streamCount; ++i)
                        {
                            this.streams[i] = Marshal.StringToHGlobalAnsi(streams[i]);
                        }
                    }

                    public void FreeUnmanagedMemory()
                    {
                        foreach (IntPtr ptr in streams)
                        {
                            Marshal.FreeHGlobal(ptr);
                        }
                        streams = null;
                    }
                }
            }
        }
    }
}
```




