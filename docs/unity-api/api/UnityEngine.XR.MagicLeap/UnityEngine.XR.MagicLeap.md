---
title: MagicLeap

---

# MagicLeap



**NameSpace:** 
[XR](/unity-api/api/Namespaces/UnityEngine.XR.md) 



## Namespaces

| Name           |
| -------------- |
| **[UnityEngine::XR::MagicLeap::Native](/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md)**  |

## Classes

| Type               | Name           |
| -------------- | -------------- |
| class | **[YcbcrRenderer](/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.md)** <br></br>Implements a renderer for android native & hardware buffers (Vulkan-only).  |
| class | **[Timer](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.Timer.md)**  |
| class | **[SubsystemFeatures](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.SubsystemFeatures.md)**  |
| class | **[SettingsIntentsLauncher](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.SettingsIntentsLauncher.md)**  |
| class | **[SessionSubsystem](/unity-api/api/UnityEngine.XR.MagicLeap/SessionSubsystem/UnityEngine.XR.MagicLeap.SessionSubsystem.md)** <br></br>The Magic Leap implementation of the  XRSessionSubsystem . Do not create this directly. Use  SessionSubsystemDescriptor.Create()  instead.  |
| class | **[RequireXRLoader](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.RequireXRLoader.md)** <br></br>Place this attribute on a child of [MLAutoAPISingleton](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md) to prevent its initialization until the Magic Leap [XR](/unity-api/api/Namespaces/UnityEngine.XR.md) package is loaded.  |
| class | **[PlanesSubsystem](/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.md)** <br></br>The Magic Leap implementation of the  XRPlaneSubsystem . Do not create this directly. Use  PlanesSubsystemDescriptor.Create()  instead.  |
| class | **[OnChangedCallAttribute](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.OnChangedCallAttribute.md)**  |
| class | **[MeshingSubsystemComponent](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemComponent.md)**  |
| class | **[MeshingSubsystem](/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/UnityEngine.XR.MagicLeap.MeshingSubsystem.md)**  |
| class | **[MagicLeapXrProviderSettings](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MagicLeapXrProviderSettings.md)**  |
| class | **[MagicLeapXrProviderNativeBindings](/unity-api/api/UnityEngine.XR.MagicLeap/MagicLeapXrProviderNativeBindings/UnityEngine.XR.MagicLeap.MagicLeapXrProviderNativeBindings.md)**  |
| class | **[MagicLeapXrProvider](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MagicLeapXrProvider.md)**  |
| class | **[MagicLeapCamera](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MagicLeapCamera.md)** <br></br>MonoBehaviour class representing the Magic Leap camera  |
| class | **[MLWorldCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md)** <br></br>Magic Leap 2 has three world cameras which it uses for environment tracking. The three cameras area located on the left, center, and right side of the headset. This API will provide a way to query for the frames from these world cameras, at this point the app will not be able to configure the world camera parameters.  |
| class | **[MLWebView](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md)** <br></br>API for [MLWebView](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) that allows an application to instantiate a hardware accelerated WebView and interact with it(via "mouse" and "keyboard" events).  |
| class | **[MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md)** <br></br>[MLWebRTC](/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) class contains the API to interface with the WebRTC C API.  |
| class | **[MLVoice](/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md)** <br></br>APIs for the voice service system.  |
| class | **[MLVirtualKeyboard](/unity-api/api/UnityEngine.XR.MagicLeap/MLVirtualKeyboard/UnityEngine.XR.MagicLeap.MLVirtualKeyboard.md)** <br></br>This class provides callbacks and manages the state of the Virtual Keyboard.  |
| class | **[MLTime](/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md)** <br></br>Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time.  |
| class | **[MLSegmentedDimmer](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLSegmentedDimmer.md)**  |
| struct | **[MLResult](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md)** <br></br>Magic Leap API return value.  |
| class | **[MLRequest](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLRequest.md)** <br></br>INHERIT FROM THIS IF YOUR REQUEST SHOULD BE A CLASS  |
| class | **[MLPluginLog](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLPluginLog.md)** <br></br>Used to print logs within the plugin.  |
| class | **[MLPlanesQueryFlagsAndPlaneDetectionModeExtensions](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLPlanesQueryFlagsAndPlaneDetectionModeExtensions.md)**  |
| class | **[MLPlanes](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLPlanes.md)**  |
| class | **[MLPermissions](/unity-api/api/UnityEngine.XR.MagicLeap/MLPermissions/UnityEngine.XR.MagicLeap.MLPermissions.md)**  |
| struct | **[MLPermission](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLPermission.md)**  |
| class | **[MLNativeSurfaceYcbcrRenderer](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLNativeSurfaceYcbcrRenderer.md)**  |
| class | **[MLNativeSurface](/unity-api/api/UnityEngine.XR.MagicLeap/MLNativeSurface/UnityEngine.XR.MagicLeap.MLNativeSurface.md)**  |
| class | **[MLMeshing](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLMeshing.md)** <br></br>Performance markers for [MLMeshing](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLMeshing.md).  |
| class | **[MLMediaTTML](/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md)** <br></br>[MLMediaTTML](/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md) Summary placeholder.  |
| class | **[MLMediaRecorder](/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md)** <br></br>APIs for video and audio recording.  |
| class | **[MLMediaPlayer](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLMediaPlayer.md)** <br></br>Performance markers for [MLMediaPlayer](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLMediaPlayer.md).  |
| class | **[MLMediaFormatKey](/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md)** <br></br>[MLMediaFormat](/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) description goes here.  |
| class | **[MLMediaFormat](/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md)** <br></br>APIs for creating and retrieving media format information.  |
| class | **[MLMedia](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/UnityEngine.XR.MagicLeap.MLMedia.md)** <br></br>[MLMedia](/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/UnityEngine.XR.MagicLeap.MLMedia.md) APIs.  |
| class | **[MLMarkerTracker](/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md)** <br></br>This API can be used to scan markers. For QR codes it also provides 6DOF poses. The scanner supports up to 16 markers. Identical markers will be treated as seperate markers and reported individually. List of currently supported trackable markers (with pose info):  |
| class | **[MLLazySingleton](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)**  |
| class | **[MLHeadsetFit](/unity-api/api/UnityEngine.XR.MagicLeap/MLHeadsetFit/UnityEngine.XR.MagicLeap.MLHeadsetFit.md)** <br></br>[MLHeadsetFit](/unity-api/api/UnityEngine.XR.MagicLeap/MLHeadsetFit/UnityEngine.XR.MagicLeap.MLHeadsetFit.md) Summary placeholder.  |
| class | **[MLHeadposeCanvasBehavior](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLHeadposeCanvasBehavior.md)** <br></br>Script used to position this Canvas object directly in front of the user by using lerp functionality to give it a smooth look. Components on the canvas should function normally.  |
| class | **[MLHandTracking](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLHandTracking.md)**  |
| class | **[MLGraphicsHooks](/unity-api/api/UnityEngine.XR.MagicLeap/MLGraphicsHooks/UnityEngine.XR.MagicLeap.MLGraphicsHooks.md)**  |
| class | **[MLGlobalDimmer](/unity-api/api/UnityEngine.XR.MagicLeap/MLGlobalDimmer/UnityEngine.XR.MagicLeap.MLGlobalDimmer.md)**  |
| class | **[MLGazeRecognition](/unity-api/api/UnityEngine.XR.MagicLeap/MLGazeRecognition/UnityEngine.XR.MagicLeap.MLGazeRecognition.md)** <br></br>This API can be used to get info about gaze.  |
| class | **[MLEyeCalibration](/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCalibration/UnityEngine.XR.MagicLeap.MLEyeCalibration.md)** <br></br>[MLEyeCalibration](/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCalibration/UnityEngine.XR.MagicLeap.MLEyeCalibration.md) Summary placeholder.  |
| class | **[MLDevice](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md)** <br></br>[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) device class responsible for updating all trackers when they register and are enabled.  |
| class | **[MLDepthCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md)** <br></br>APIs to access the depth camera data.  |
| class | **[MLCameraBase](/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md)** <br></br>[MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) class exposes static functions to query camera related functions. Most functions are currently a direct pass through functions to the native C-API functions and incur no overhead.  |
| class | **[MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md)** <br></br>Provides a multithreadig implementation of the camera api. Handles pause behavior automatically.  |
| class | **[MLCVCamera](/unity-api/api/UnityEngine.XR.MagicLeap/MLCVCamera/UnityEngine.XR.MagicLeap.MLCVCamera.md)** <br></br>[MLCamera](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) class exposes static functions to query camera related functions. Most functions are currently a direct pass through functions to the native C-API functions and incur no overhead.  |
| class | **[MLBitMaskEditor](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLBitMaskEditor.md)**  |
| class | **[MLBitMask](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLBitMask.md)** <br></br>Custom attribute to make it easy to turn enum fields into bit masks in the inspector. The enum type must be defined in order for the inspector to be able to know what the bits should be set to.  |
| class | **[MLAutoAPISingleton](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md)** <br></br>[MLAutoAPISingleton](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md) class contains a template for singleton APIs  |
| class | **[MLAudioPlayback](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioPlayback/UnityEngine.XR.MagicLeap.MLAudioPlayback.md)**  |
| class | **[MLAudioOutputPluginBehavior](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAudioOutputPluginBehavior.md)**  |
| class | **[MLAudioOutput](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md)** <br></br>Manages Audio.  |
| class | **[MLAudioInput](/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md)** <br></br>Manages Audio.  |
| class | **[MLAnchors](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.md)** <br></br>Spatial [Anchor](/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) management is closely tied to the selected mapping mode on the device. The modes are mutually exclusive and affect the functionality of these APIs. The available mapping modes are:  |
| class | **[MLAPIBase](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAPIBase.md)**  |
| class | **[InvalidInstanceException](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.InvalidInstanceException.md)** <br></br>Simple custom exception for instance error checking.  |
| class | **[InputSubsystem](/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/UnityEngine.XR.MagicLeap.InputSubsystem.md)**  |
| class | **[ImageTrackingSubsystem](/unity-api/api/UnityEngine.XR.MagicLeap/ImageTrackingSubsystem/UnityEngine.XR.MagicLeap.ImageTrackingSubsystem.md)** <br></br>Subsystem for Image Tracking TODO: Implement when Image Tracking is available from the platform  |
| interface | **[IMLRequest](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLRequest.md)** <br></br>ALWAYS INHERIT FROM THIS  |
| interface | **[IMLMediaPlayer](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md)** <br></br>Interface for target classes used by [MLMediaPlayer](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLMediaPlayer.md) Each function must be implemented by the child player type  |
| class | **[GestureSubsystemComponent](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.GestureSubsystemComponent.md)**  |
| class | **[GestureSubsystem](/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/UnityEngine.XR.MagicLeap.GestureSubsystem.md)** <br></br>[MagicLeap](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) implementation of the  XRGestureSubsystem . Do not create this directly. Use the  SubsystemManager  instead.  |
| class | **[AnchorSubsystem](/unity-api/api/UnityEngine.XR.MagicLeap/AnchorSubsystem/UnityEngine.XR.MagicLeap.AnchorSubsystem.md)** <br></br>The Magic Leap implementation of the  XRAnchorSubsystem . Do not create this directly. Use  XRAnchorSubsystemDescriptor.Create()  instead.  |

## Types

|                | Name           |
| -------------- | -------------- |
| using UnityEngine.XR.MagicLeap.MagicLeapLogger | **[MLLog](/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md#unityenginexrmagicleapmagicleaplogger-mllog)**  |


## Types Documentation

### MLLog {#unityenginexrmagicleapmagicleaplogger-mllog}

```csharp
using UnityEngine::XR::MagicLeap.MLLog = typedef UnityEngine.XR.MagicLeap.MagicLeapLogger;
```






-----------






