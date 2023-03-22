---

title: MLWebRTCAppDefinedVideoSource.cs

---


# MLWebRTCAppDefinedVideoSource.cs









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
    using System.Runtime.InteropServices;
    using System.Threading;
    using System.Threading.Tasks;
    using UnityEngine.XR.MagicLeap.Native;

    public partial class MLWebRTC
    {
        public abstract partial class AppDefinedVideoSource : AppDefinedSource
        {
            protected internal AppDefinedVideoSource(string trackId)
                : base(trackId)
            {
                this.TrackType = Type.Video;
            }

            public static MLResult InitializeLocal(AppDefinedVideoSource appDefinedVideoSource)
            {
                MLWebRTC.Instance.localTracks.Add(appDefinedVideoSource);
                MLResult.Code resultCode = NativeBindings.InitializeAppDefinedVideoSource(appDefinedVideoSource);
                MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.InitializeAppDefinedVideoSource));
                return MLResult.Create(resultCode);
            }

            private AutoResetEvent pushFrameEvent = new AutoResetEvent(true);

            protected MLResult PushFrame(VideoSink.Frame frame)
            {
                if (!MagicLeapNativeBindings.MLHandleIsValid(Handle))
                {
                    return MLResult.Create(MLResult.Code.InvalidParam, "Handle is invalid.");
                }

                pushFrameEvent.Reset();

                MLResult.Code resultCode = MLResult.Code.UnspecifiedFailure;

                var frameNative = VideoSink.Frame.NativeBindings.MLWebRTCFrame.Create(frame);

                try
                {
                    resultCode = NativeBindings.MLWebRTCSourceAppDefinedVideoSourcePushFrame(Handle, in frameNative);

                    MLResult.DidNativeCallSucceed(resultCode, nameof(NativeBindings.MLWebRTCSourceAppDefinedVideoSourcePushFrame));
                }
                catch (System.Exception e)
                {
                    Debug.LogException(e);
                }
                finally
                {
                    frameNative.FreeUnmanagedMemory();
                }

                pushFrameEvent.Set();

                return MLResult.Create(resultCode);
            }

            public override MLResult DestroyLocal()
            {
                pushFrameEvent.WaitOne(250);
                MLResult result = base.DestroyLocal();
                return result;
            }
        }
    }
}
```




