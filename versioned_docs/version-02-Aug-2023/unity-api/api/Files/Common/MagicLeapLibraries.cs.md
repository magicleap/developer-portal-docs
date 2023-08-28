---

title: MagicLeapLibraries.cs

---


# MagicLeapLibraries.cs









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


namespace UnityEngine.XR.MagicLeap.Native
{
    public partial class MagicLeapNativeBindings
    {
        // Use SDK loader lib for features that will work in ML App Sim
        public const string MLSdkLoaderDll = "ml_sdk_loader";

#if UNITY_EDITOR
        public const string MLPerceptionClientDll = MLSdkLoaderDll;

        public const string MLPlatformDll = MLSdkLoaderDll;

        protected const string AudioPlayerDLL = MLSdkLoaderDll;

        protected const string MLGazeRecognitionDll = MLSdkLoaderDll;

        protected const string MLZIPermissionsDll = MLSdkLoaderDll;

        protected const string MLWebRTCDLL = MLSdkLoaderDll;

        protected const string MLCameraDll = MLSdkLoaderDll;

        protected const string MLCameraMetadataDll = MLSdkLoaderDll;

        protected const string MLInputDll = MLSdkLoaderDll;

        protected const string MLNotificationsManagerDll = MLSdkLoaderDll;

        protected const string MLVoiceDll = MLSdkLoaderDll;

        protected const string MLSpaceDll = MLSdkLoaderDll;

        protected const string MLPowerManagerDll = MLSdkLoaderDll;
#else
        public const string MLPerceptionClientDll = "perception.magicleap";

        public const string MLPlatformDll = "platform.magicleap";

        protected const string AudioPlayerDLL = "audio.magicleap";

        protected const string MLGazeRecognitionDll = "perception.magicleap";

        protected const string MLZIPermissionsDll = "zi.magicleap";

        protected const string MLWebRTCDLL = "webrtc.magicleap";

        protected const string MLCameraDll = "camera.magicleap";

        protected const string MLCameraMetadataDll = "camera_metadata.magicleap";

        protected const string MLInputDll = "input.magicleap";

        protected const string MLNotificationsManagerDll = "system_notification_manager.magicleap";
        
        protected const string MLVoiceDll = "input.magicleap";
        
        protected const string MLSpaceDll = "space.magicleap";

        protected const string MLPowerManagerDll = "power_manager.magicleap";
#endif
        public const string UnityMagicLeapDll = "UnityMagicLeap";

        protected const string MLMediaFormatDll = "media_format.magicleap";

        protected const string MediaMuxerDll = "media_muxer.magicleap";

        protected const string MLMediaDRMDll = "media_drm.magicleap";

        protected const string MLMediaErrorDLL = "media_error.magicleap";

        protected const string MLMediaCEA608DLL = "media_ccparser.magicleap";

        protected const string MLMediaCEA708DLL = "media_cea708parser.magicleap";

        protected const string MLMediaPlayerDll = "media_player.magicleap";

        protected const string MLMediaRecorderDll = "media_recorder.magicleap";

        protected const string MLNativeSurfaceDll = "native_surface.magicleap";

        protected const string MLWebViewDll = "webview.magicleap";

        protected const string CUtilsDLL = "ml_c_utils";

        protected const string AudioOutputPluginDLL = "MLAudioOutput";
    }
}
```




