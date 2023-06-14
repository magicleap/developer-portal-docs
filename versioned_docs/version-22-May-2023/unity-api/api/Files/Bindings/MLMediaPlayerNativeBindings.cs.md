---

title: MLMediaPlayerNativeBindings.cs

---


# MLMediaPlayerNativeBindings.cs









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

    public sealed partial class MLMedia
    {
        public partial class Player
        {
            internal partial class NativeBindings : Native.MagicLeapNativeBindings
            {
                public delegate void OnTimedTextUpdateDelegate(ulong mediaPlayerHandle, ulong timedTextHandle, IntPtr data);

                public delegate void OnMediaSubtitleUpdateDelegate(ulong mediaPlayerHandle, MLMediaPlayerSubtitleData subtitleData, IntPtr data);

                public delegate void OnFrameAvailableDelegate(ulong mediaPlayerHandle, IntPtr Data);

                public delegate void OnVideoSizeChangedDelegate(ulong mediaPlayerHandle, ref MLMediaPlayerOnVideoSizeChangedInfo videoSizeInfo);

                public delegate void OnFramePackingDelegate(ulong mediaPlayerHandle, IntPtr framePackingInfo);

                public delegate void OnInfoDelegate(ulong mediaPlayerHandle, ref MLMediaPlayerOnInfoInfo info);

                public delegate void OnPreparedDelegate(ulong mediaPlayerHandle, ref MLMediaPlayerOnPreparedInfo preparedInfo);

                public delegate void OnBufferingUpdateDelegate(ulong mediaPlayerHandle, ref MLMediaPlayerOnBufferingUpdateInfo updateInfo);

                public delegate void OnCompletionDelegate(ulong mediaPlayerHandle, ref MLMediaPlayerOnCompletionInfo completionInfo);

                public delegate void OnErrorDelegate(ulong mediaPlayerHandle, ref MLMediaPlayerOnErrorInfo errorInfo);

                public delegate void OnSeekCompleteDelegate(ulong mediaPlayerHandle, ref MLMediaPlayerOnSeekCompleteInfo seekCompleteInfo);

                public delegate void OnTrackDRMInfoDelegate(ulong mediaPlayerHandle, ref MLMediaPlayerOnTrackDRMInfo trackDrmInfo);

                public delegate void OnResetCompleteDelegate(ulong mediaPlayerHandle, ref MLMediaPlayerOnResetCompleteInfo resetCompleteInfo);


                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerOnVideoSizeChangedInfo
                {
                    public int Width;

                    public int Height;

                    public IntPtr Data;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerTrackInfo
                {
                    public uint Version;

                    public Track.Type TrackType;

                    public MLMediaPlayerTrackInfo(Track.Type type)
                    {
                        this.Version = 1;
                        this.TrackType = type;
                    }
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerTrackDRMInfo
                {
                    public ulong PsshInfoCount;

                    public IntPtr PsshInfo;

                    public ulong UuidCount;

                    public IntPtr UUIDs;

                    public Track.Type TrackType;

                    public MLMedia.Player.Track.DRM.Info Data
                    {
                        get
                        {
                            var drmTrackInfo = new MLMedia.Player.Track.DRM.Info();
                            drmTrackInfo.TrackType = this.TrackType;
                            drmTrackInfo.UUIDS = ConvertArray<MagicLeapNativeBindings.MLUUID>(this.UUIDs, this.UuidCount);
                            drmTrackInfo.PSSHEntries = ConvertArray<Player.NativeBindings.MLMediaPlayerPSSHEntry>(this.PsshInfo, this.PsshInfoCount);
                            return drmTrackInfo;
                        }
                    }
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerPSSHEntry
                {
                    public MagicLeapNativeBindings.MLUUID uuid;

                    public ulong size;

                    public IntPtr data;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerOnPreparedInfo
                {
                    public IntPtr Data;

                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerSubtitleData
                {
                    public uint TrackIndex;

                    public ulong StartTimeUs;

                    public ulong DurationUs;

                    public uint DataSize;

                    public IntPtr Data;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerBufferingSettings
                {
                    public BufferingMode InitialBufferingMode;

                    public BufferingMode RebufferingMode;

                    public int InitialWatermarkMs;

                    public int InitialWatermarkKb;

                    public int RebufferingWatermarkLowMs;

                    public int RebufferingWatermarkHighMs;

                    public int RebufferingWatermarkLowKb;

                    public int RebufferingWatermarkHighKb;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerOnBufferingUpdateInfo
                {
                    public int Percent;

                    public IntPtr Data;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerOnCompletionInfo
                {
                    public IntPtr Data;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerOnErrorInfo
                {
                    public MLResult.Code Result;

                    public IntPtr Data;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerOnInfoInfo
                {
                    public Info Info;

                    public int Extra;

                    public IntPtr Data;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerOnSeekCompleteInfo
                {
                    public IntPtr Data;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerOnTrackDRMInfo
                {
                    public IntPtr TrackInfo;

                    public IntPtr Data;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerOnResetCompleteInfo
                {
                    public IntPtr Data;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerOnFramePackingInfo
                {

                    public FramePackingMode Mode;

                    public FramePackingFlags Flags;

                    public IntPtr Data;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerEventCallbacksEx
                {
                    private uint version;

                    public OnBufferingUpdateDelegate OnBufferingUpdate;

                    public OnCompletionDelegate OnCompletion;

                    public OnErrorDelegate OnError;

                    public OnInfoDelegate OnInfo;

                    public OnPreparedDelegate OnPrepared;

                    public OnSeekCompleteDelegate OnSeekComplete;

                    public OnVideoSizeChangedDelegate OnVideoSizeChanged;

                    public OnTrackDRMInfoDelegate OnTrackDRMInfo;

                    public OnResetCompleteDelegate OnResetComplete;

                    public OnFramePackingDelegate OnFramePacking;

                    public static MLMediaPlayerEventCallbacksEx Create()
                    {
                        return new MLMediaPlayerEventCallbacksEx()
                        {
                            version = 1,
                            OnBufferingUpdate = NativeBindings.OnBufferingUpdate,
                            OnCompletion = NativeBindings.OnCompletion,
                            OnError = NativeBindings.OnError,
                            OnInfo = NativeBindings.OnInfo,
                            OnPrepared = NativeBindings.OnPrepared,
                            OnSeekComplete = NativeBindings.OnSeekComplete,
                            OnVideoSizeChanged = NativeBindings.OnVideoSizeChanged,
                            OnTrackDRMInfo = NativeBindings.OnTrackDRMInfo,
                            OnResetComplete = NativeBindings.OnResetComplete,
                            OnFramePacking = NativeBindings.OnFramePacking
                        };
                    }
                };


                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerTrackDRMSessionInfo
                {

                    internal MLMediaPlayerTrackDRMSessionInfo(Track.Type type)
                    {
                        this.Version = 1;
                        this.TrackType = type;
                        this.Uuid = IntPtr.Zero;
                        this.SessionId = IntPtr.Zero;
                    }

                    internal void AllocResources(MagicLeapNativeBindings.MLUUID uuid, Player.Track.DRM.NativeBindings.MLMediaDRMByteArray sessionId)
                    {
                        this.Uuid = Marshal.AllocHGlobal(Marshal.SizeOf<MagicLeapNativeBindings.MLUUID>());
                        Marshal.StructureToPtr(uuid, this.Uuid, true);
                        this.SessionId = Marshal.AllocHGlobal(Marshal.SizeOf<Player.Track.DRM.NativeBindings.MLMediaDRMByteArray>());
                        Marshal.StructureToPtr(sessionId, this.SessionId, true);
                    }

                    internal void FreeResources()
                    {
                        Marshal.FreeHGlobal(this.Uuid);
                        Marshal.FreeHGlobal(this.SessionId);
                    }

                    public uint Version;

                    public Track.Type TrackType;

                    public IntPtr Uuid;

                    public IntPtr SessionId;
                };

                [StructLayout(LayoutKind.Sequential)]
                public struct MLMediaPlayerMetrics
                {

                    public float AverageFramerate;

                    public int AverageVideoBitrate;

                    public int AverageAudioBitrate;
                };

                public enum TTMLLayoutAlignment : uint
                {
                    Unspecified = 0xFFFFFFFF,
                    Normal = 0,
                    Center = 1,
                    Opposite = 2
                }

                public enum TTMLLineType : uint
                {
                    Unset = 0xFFFFFFFF,
                    Fraciton = 0,
                    Number = 1
                }
                public enum TTMLAnchorType : uint
                {
                    Unset = 0xFFFFFFFF,
                    Start = 0,
                    Middle = 1,
                    End = 2
                }

                public enum TTMLTextSizeType : uint
                {
                    Unset = 0xFFFFFFFF,
                    Fractional = 0,
                    FractionalIgnorePadding = 1,
                    Absolute = 2
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct TTMLImage
                {
                    public ushort Size;

                    public IntPtr Data;
                }


                [StructLayout(LayoutKind.Sequential)]
                public struct TTMLData
                {
                    long startTimeMs;

                    long endTimeMs;

                    public string text;

                    TTMLLayoutAlignment textAlignment;

                    TTMLImage bitmap;

                    float line;

                    TTMLLineType lineType;

                    TTMLAnchorType lineAnchor;

                    float position;

                    TTMLAnchorType positionAnchor;

                    float size;

                    float bitmapHeight;

                    bool windowColorSet;

                    uint windowColor;

                    TTMLTextSizeType textSizeType;

                    float textSize;
                }

                public enum WebVTTOrientation
                {
                    Horizontal = 0,
                    Vertical
                }

                public enum WebVTTDirection
                {
                    Default = 0,
                    LeftToRight,
                    RightToLeft
                }
                public enum WebVTTAlign
                {
                    Start = 0,
                    Middle,
                    End,
                    Left,
                    Right
                }

                [StructLayout(LayoutKind.Sequential)]
                public struct WebVTTData
                {
                    public long StartTimeMS;

                    public long EndTimeMs;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string Body;

                    [MarshalAs(UnmanagedType.LPStr)]
                    public string Id;

                    [MarshalAs(UnmanagedType.I1)]
                    public bool SnapToLines;

                    public WebVTTOrientation Orientation;

                    public WebVTTDirection Direction;

                    public float RelativeLinePosition;

                    public int LineNumber;

                    public float TextPosition;

                    public float Size;

                    public WebVTTAlign align;
                };

                public static T[] ConvertArray<T>(IntPtr arrayPtr, ulong count)
                {
                    T[] convertedArray = new T[count];
                    IntPtr walkPtr = arrayPtr;
                    for (ulong i = 0; i < count; ++i)
                    {
                        convertedArray[i] = Marshal.PtrToStructure<T>(walkPtr);
                        walkPtr = new IntPtr(walkPtr.ToInt64() + Marshal.SizeOf<IntPtr>());
                    }

                    return convertedArray;
                }

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetEventCallbacksEx(ulong mediaPlayerHandle, [In] ref MLMediaPlayerEventCallbacksEx callbacks, IntPtr Data);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerCreate(out ulong handle);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerReset(ulong mediaPlayerHandle);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetNextPlayer(ulong mediaPlayerHandle, ulong NextMediaPlayer);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerStop(ulong mediaPlayerHandle);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetLooping(ulong mediaPlayerHandle, [MarshalAs(UnmanagedType.I1)] bool loop);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetCurrentPosition(ulong mediaPlayerHandle, out int ms);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetAudioHandle(ulong mediaPlayerHandle, out ulong handle);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerPrepareTrackDRM(ulong mediaPlayerHandle, [In] ref MLMediaPlayerTrackDRMSessionInfo drmSessionInfo);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerAddTimedTextSourceForURI(ulong mediaPlayerHandle, [MarshalAs(UnmanagedType.LPStr)] string Uri, [MarshalAs(UnmanagedType.LPStr)] string MimeType);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerDestroy(ulong mediaPlayerHandle);

                [DllImport(CUtilsDLL, CallingConvention = CallingConvention.Cdecl)]
                public static extern void MLUnityQueueMediaPlayerResetAndDestroy(ulong mediaPlayerHandle);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetDataSourceForFD(ulong mediaPlayerHandle, int Fd);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetOffsetDataSourceForFD(ulong mediaPlayerHandle, int Fd, long Offset, long Length);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetDataSourceForPath(ulong mediaPlayerHandle, [MarshalAs(UnmanagedType.LPStr)] string Path);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetDataSourceForURI(ulong mediaPlayerHandle, [MarshalAs(UnmanagedType.LPStr)] string Uri);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetInfo(ulong mediaPlayerHandle, IntPtr OutCode, IntPtr OutExtra);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetRemoteDataSourceForURI(ulong mediaPlayerHandle, [MarshalAs(UnmanagedType.LPStr)] string Uri, out IntPtr Headers, uint Len);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetMediaStreamSource(ulong mediaPlayerHandle, ulong MediaStreamSource);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetMediaDataSource(ulong mediaPlayerHandle, ulong MediaDataSource);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerAddTimedTextSourceForFD(ulong mediaPlayerHandle, int Fd, long Offset, long Length, [MarshalAs(UnmanagedType.LPStr)] string MimeType);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetTimedText(ulong mediaPlayerHandle, IntPtr OutText, IntPtr OutStart, IntPtr OutEnd);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerResetAsync(ulong mediaPlayerHandle);


                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerPrepare(ulong mediaPlayerHandle);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerPrepareAsync(ulong mediaPlayerHandle);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerStart(ulong mediaPlayerHandle);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerPause(ulong mediaPlayerHandle);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSeekTo(ulong mediaPlayerHandle, int Msec, SeekMode Mode);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetVideoSize(ulong mediaPlayerHandle, out int width, out int height);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetDuration(ulong mediaPlayerHandle, out int durationMS);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetBufferingUpdate(ulong mediaPlayerHandle, IntPtr OutPercentage);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetError(ulong mediaPlayerHandle, IntPtr OutResult);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetSubtitleEx(ulong mediaPlayerHandle, IntPtr OutSubtitleData);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerReleaseSubtitleEx(ulong mediaPlayerHandle);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetOnMediaSubtitleUpdateCallback(ulong mediaPlayerHandle, OnMediaSubtitleUpdateDelegate OnMediaSubtitleCallback, IntPtr Data);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetMetadata(ulong mediaPlayerHandle, IntPtr OutTime, IntPtr OutSize, IntPtr OutBuffer);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetVideoScalingMode(ulong mediaPlayerHandle, VideoScalingMode Mode);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetVolume(ulong mediaPlayerHandle, float Volume);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerPollStates(ulong mediaPlayerHandle, PollingStateFlags flags, out PollingStateFlags polledStates);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetTrackDRMInfo(ulong mediaPlayerHandle, ref MLMediaPlayerTrackInfo trackInfo, ref IntPtr drmInfo);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetWebVTTData(ulong mediaPlayerHandle, ulong TimedText, ref IntPtr webVTTData);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerReleaseDRM(ulong mediaPlayerHandle);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetDefaultBufferingSettings(ulong mediaPlayerHandle, IntPtr OutBufSettings);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetBufferingSettings(ulong mediaPlayerHandle, IntPtr OutBufSettings);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetBufferingSettings(ulong mediaPlayerHandle, NativeBindings.MLMediaPlayerBufferingSettings BufSettings);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetOnMediaTimedTextUpdateCallback(ulong mediaPlayerHandle, OnTimedTextUpdateDelegate OnMediaTimedTextCallback, IntPtr Data);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetMetrics(ulong mediaPlayerHandle, out MLMediaPlayerMetrics metrics);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSelectTrack(ulong mediaPlayerHandle, uint trackIndex);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerUnselectTrack(ulong mediaPlayerHandle, uint trackIndex);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetTrackCount(ulong mediaPlayerHandle, out uint trackCount);


                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerGetTTMLData(ulong mediaPlayerHandle, ulong timedTextHandle, ref IntPtr ttmlData);

                [DllImport(MLMediaPlayerDll, CallingConvention = CallingConvention.Cdecl)]
                public static extern MLResult.Code MLMediaPlayerSetSurface(ulong mediaPlayerHandle, ulong surface);

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnVideoSizeChangedDelegate))]
                private static void OnVideoSizeChanged(ulong mediaPlayerHandle, ref NativeBindings.MLMediaPlayerOnVideoSizeChangedInfo videoSizeInfo)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(videoSizeInfo.Data);
                    Player mediaPlayer = gcHandle.Target as Player;
                    var resultCode = NativeBindings.MLMediaPlayerGetVideoSize(mediaPlayer.handle, out int width, out int height);
                    MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaPlayerGetVideoSize));
                    MLThreadDispatch.Call(mediaPlayer, width, height, mediaPlayer.OnVideoSizeChanged);
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnFramePackingDelegate))]
                private static void OnFramePacking(ulong mediaPlayerHandle, IntPtr FramePackingInfo)
                {
                    throw new System.NotImplementedException();
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnInfoDelegate))]
                private static void OnInfo(ulong mediaPlayerHandle, ref NativeBindings.MLMediaPlayerOnInfoInfo info)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(info.Data);
                    Player mediaPlayer = gcHandle.Target as Player;
                    if (info.Info == Info.MetadataUpdate)
                    {
                        MLThreadDispatch.Call(mediaPlayer.GetTracks);
                    }

                    MLThreadDispatch.Call(mediaPlayer, info.Info, mediaPlayer.OnInfo);
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnPreparedDelegate))]
                private static void OnPrepared(ulong mediaPlayerHandle, ref NativeBindings.MLMediaPlayerOnPreparedInfo preparedInfo)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(preparedInfo.Data);
                    Player mediaPlayer = gcHandle.Target as Player;
                    mediaPlayer.IsPrepared = true;

                    MLThreadDispatch.Call(mediaPlayer.GetTracks);
                    MLThreadDispatch.Call(mediaPlayer, mediaPlayer.OnPrepared);
                    foreach (MLMedia.Player.Track.DRM.Info info in mediaPlayer.drmTrackInfos)
                        MLThreadDispatch.Call(mediaPlayer, info, mediaPlayer.OnDRMTrackInfo);
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnBufferingUpdateDelegate))]
                private static void OnBufferingUpdate(ulong mediaPlayerHandle, ref NativeBindings.MLMediaPlayerOnBufferingUpdateInfo updateInfo)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(updateInfo.Data);
                    Player mediaPlayer = gcHandle.Target as Player;
                    float percent = updateInfo.Percent;
                    MLThreadDispatch.Call(mediaPlayer, percent, mediaPlayer.OnBufferingUpdate);
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnCompletionDelegate))]
                private static void OnCompletion(ulong mediaPlayerHandle, ref NativeBindings.MLMediaPlayerOnCompletionInfo completionInfo)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(completionInfo.Data);
                    Player mediaPlayer = gcHandle.Target as Player;
                    MLThreadDispatch.Call(mediaPlayer, mediaPlayer.OnCompletion);
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnErrorDelegate))]
                private static void OnError(ulong mediaPlayerHandle, ref NativeBindings.MLMediaPlayerOnErrorInfo errorInfo)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(errorInfo.Data);
                    Player mediaPlayer = gcHandle.Target as Player;
                    MLThreadDispatch.Call(mediaPlayer, errorInfo.Result, mediaPlayer.OnError);
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnSeekCompleteDelegate))]
                private static void OnSeekComplete(ulong mediaPlayerHandle, ref NativeBindings.MLMediaPlayerOnSeekCompleteInfo seekCompleteInfo)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(seekCompleteInfo.Data);
                    Player mediaPlayer = gcHandle.Target as Player;
                    MLThreadDispatch.Call(mediaPlayer, mediaPlayer.OnSeekComplete);
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnTrackDRMInfoDelegate))]
                private static void OnTrackDRMInfo(ulong mediaPlayerHandle, ref NativeBindings.MLMediaPlayerOnTrackDRMInfo trackDrmInfo)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(trackDrmInfo.Data);
                    Player mediaPlayer = gcHandle.Target as Player;
                    MLMediaPlayerTrackDRMInfo trackInfo = Marshal.PtrToStructure<MLMediaPlayerTrackDRMInfo>(trackDrmInfo.TrackInfo);
                    mediaPlayer.drmTrackInfos.Add(trackInfo.Data);
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnResetCompleteDelegate))]
                private static void OnResetComplete(ulong mediaPlayerHandle, ref NativeBindings.MLMediaPlayerOnResetCompleteInfo resetCompleteInfo)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(resetCompleteInfo.Data);
                    Player mediaPlayer = gcHandle.Target as Player;
                    MLThreadDispatch.Call(mediaPlayer, mediaPlayer.OnResetComplete);
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnTimedTextUpdateDelegate))]
                public static void OnTimedTextUpdate(ulong mediaPlayerHandle, ulong timedTextHandle, IntPtr data)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(data);
                    Player mediaPlayer = gcHandle.Target as Player;
                    Track selectedTrack = mediaPlayer.trackContainers[Track.Type.TimedText].SelectedTrack;

                    switch (selectedTrack.MimeType)
                    {
                        case VTTMime:
                            {
                                var resultCode = NativeBindings.MLMediaPlayerGetWebVTTData(mediaPlayerHandle, timedTextHandle, ref mediaPlayer.WebVTTDataPtr);
                                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaPlayerGetWebVTTData));
                                WebVTTData webVTTData = Marshal.PtrToStructure<WebVTTData>(mediaPlayer.WebVTTDataPtr);
                                MLThreadDispatch.Call(mediaPlayer, webVTTData.Body, mediaPlayer.OnTimedText);
                                break;
                            }

                        case TTMLMime:
                            {
                                var resultCode = NativeBindings.MLMediaPlayerGetTTMLData(mediaPlayerHandle, timedTextHandle, ref mediaPlayer.TTMLDataPtr);
                                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLMediaPlayerGetTTMLData));
                                TTMLData ttmlData = Marshal.PtrToStructure<TTMLData>(mediaPlayer.TTMLDataPtr);
                                MLThreadDispatch.Call(mediaPlayer, ttmlData.text, mediaPlayer.OnTimedText);
                                break;
                            }
                    }
                }

                [AOT.MonoPInvokeCallback(typeof(NativeBindings.OnMediaSubtitleUpdateDelegate))]
                public static void OnMediaSubtitleUpdate(ulong mediaPlayerHandle, MLMediaPlayerSubtitleData subtitleData, IntPtr data)
                {
                    GCHandle gcHandle = GCHandle.FromIntPtr(data);
                    Player mediaPlayer = gcHandle.Target as Player;
                    Track selectedTrack = mediaPlayer.trackContainers[Track.Type.Subtitle].SelectedTrack;

                    // TODO : improve this. We can probably determine the available subtitle track formats once the media is prepared
                    // and we receive the respective MLMediaFormat objects and only initialize the apt parser.
                    switch (selectedTrack.MimeType)
                    {
                        case ParserCEA608.Mime:
                            {
                                mediaPlayer.parser608.ParseAsync(subtitleData.Data, subtitleData.DataSize);
                                break;
                            }
                        case ParserCEA708.Mime:
                            {
                                mediaPlayer.parser708.ParseAsync(subtitleData.Data, subtitleData.DataSize);
                                break;
                            }
                    }
                }
            }
        }

    }
}
```




