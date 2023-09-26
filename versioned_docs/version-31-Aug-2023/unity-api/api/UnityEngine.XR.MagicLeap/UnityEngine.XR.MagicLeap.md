---
title: MagicLeap

---

# MagicLeap



**NameSpace:** 
XR 



## Namespaces

| Name           |
| -------------- |
| **[UnityEngine::XR::MagicLeap::Native](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Native/UnityEngine.XR.MagicLeap.Native.md)**  |
| **[UnityEngine::XR::MagicLeap::Unsafe](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap.Unsafe/UnityEngine.XR.MagicLeap.Unsafe.md)**  |

## Classes

| Type               | Name           |
| -------------- | -------------- |
| class | **[AnchorSubsystem](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/AnchorSubsystem/UnityEngine.XR.MagicLeap.AnchorSubsystem.md)** <br></br>The Magic Leap implementation of the  XRAnchorSubsystem . Do not create this directly. Use  XRAnchorSubsystemDescriptor.Create()  instead.  |
| class | **[GestureSubsystem](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/GestureSubsystem/UnityEngine.XR.MagicLeap.GestureSubsystem.md)** <br></br>[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) implementation of the  XRGestureSubsystem . Do not create this directly. Use the  SubsystemManager  instead.  |
| class | **[GestureSubsystemComponent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.GestureSubsystemComponent.md)**  |
| interface | **[IMLMediaPlayer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLMediaPlayer.md)** <br></br>Interface for target classes used by [MLMediaPlayer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLMediaPlayer.md) Each function must be implemented by the child player type  |
| interface | **[IMLRequest](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.IMLRequest.md)** <br></br>ALWAYS INHERIT FROM THIS  |
| class | **[ImageTrackingSubsystem](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/ImageTrackingSubsystem/UnityEngine.XR.MagicLeap.ImageTrackingSubsystem.md)** <br></br>Subsystem for Image Tracking TODO: Implement when Image Tracking is available from the platform  |
| class | **[InputSubsystem](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/InputSubsystem/UnityEngine.XR.MagicLeap.InputSubsystem.md)**  |
| class | **[InvalidInstanceException](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.InvalidInstanceException.md)** <br></br>Simple custom exception for instance error checking.  |
| class | **[MLAPIBase](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAPIBase.md)**  |
| class | **[MLAnchors](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.md)** <br></br>Spatial [Anchor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAnchors/UnityEngine.XR.MagicLeap.MLAnchors.Anchor.md) management is closely tied to the selected mapping mode on the device. The modes are mutually exclusive and affect the functionality of these APIs. The available mapping modes are:  |
| class | **[MLAudioInput](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioInput/UnityEngine.XR.MagicLeap.MLAudioInput.md)** <br></br>Manages Audio.  |
| class | **[MLAudioOutput](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioOutput/UnityEngine.XR.MagicLeap.MLAudioOutput.md)** <br></br>Manages Audio.  |
| class | **[MLAudioOutputPluginBehavior](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAudioOutputPluginBehavior.md)**  |
| class | **[MLAudioPlayback](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLAudioPlayback/UnityEngine.XR.MagicLeap.MLAudioPlayback.md)**  |
| class | **[MLAutoAPISingleton](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md)** <br></br>[MLAutoAPISingleton](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md) class contains a template for singleton APIs  |
| class | **[MLBitMask](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLBitMask.md)** <br></br>Custom attribute to make it easy to turn enum fields into bit masks in the inspector. The enum type must be defined in order for the inspector to be able to know what the bits should be set to.  |
| class | **[MLBitMaskEditor](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLBitMaskEditor.md)**  |
| class | **[MLCVCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCVCamera/UnityEngine.XR.MagicLeap.MLCVCamera.md)** <br></br>[MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) class exposes static functions to query camera related functions. Most functions are currently a direct pass through functions to the native C-API functions and incur no overhead.  |
| class | **[MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md)** <br></br>Provides a multithreadig implementation of the camera api. Handles pause behavior automatically.  |
| class | **[MLCameraBase](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLCameraBase/UnityEngine.XR.MagicLeap.MLCameraBase.md)** <br></br>[MLCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLCamera.md) class exposes static functions to query camera related functions. Most functions are currently a direct pass through functions to the native C-API functions and incur no overhead.  |
| class | **[MLDepthCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLDepthCamera/UnityEngine.XR.MagicLeap.MLDepthCamera.md)** <br></br>APIs to access the depth camera data.  |
| class | **[MLDevice](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLDevice.md)** <br></br>[MagicLeap](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.md) device class responsible for updating all trackers when they register and are enabled.  |
| class | **[MLEyeCalibration](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCalibration/UnityEngine.XR.MagicLeap.MLEyeCalibration.md)** <br></br>[MLEyeCalibration](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCalibration/UnityEngine.XR.MagicLeap.MLEyeCalibration.md) Summary placeholder.  |
| class | **[MLEyeCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/UnityEngine.XR.MagicLeap.MLEyeCamera.md)** <br></br>[MLEyeCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLEyeCamera/UnityEngine.XR.MagicLeap.MLEyeCamera.md) class exposes static functions to query eye camera related functions. Most functions are currently a direct pass through functions to the native C-API functions and incur no overhead.  |
| class | **[MLFacialExpression](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLFacialExpression/UnityEngine.XR.MagicLeap.MLFacialExpression.md)**  |
| class | **[MLGazeRecognition](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGazeRecognition/UnityEngine.XR.MagicLeap.MLGazeRecognition.md)** <br></br>This API can be used to get info about gaze.  |
| class | **[MLGlobalDimmer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGlobalDimmer/UnityEngine.XR.MagicLeap.MLGlobalDimmer.md)**  |
| class | **[MLGraphicsHooks](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLGraphicsHooks/UnityEngine.XR.MagicLeap.MLGraphicsHooks.md)**  |
| class | **[MLHandTracking](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLHandTracking.md)**  |
| class | **[MLHeadposeCanvasBehavior](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLHeadposeCanvasBehavior.md)** <br></br>Script used to position this Canvas object directly in front of the user by using lerp functionality to give it a smooth look. Components on the canvas should function normally.  |
| class | **[MLHeadsetFit](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLHeadsetFit/UnityEngine.XR.MagicLeap.MLHeadsetFit.md)** <br></br>[MLHeadsetFit](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLHeadsetFit/UnityEngine.XR.MagicLeap.MLHeadsetFit.md) Summary placeholder.  |
| class | **[MLLazySingleton](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLLazySingleton.md)**  |
| class | **[MLMarkerTracker](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMarkerTracker/UnityEngine.XR.MagicLeap.MLMarkerTracker.md)** <br></br>This API can be used to scan markers. For QR codes it also provides 6DOF poses. The scanner supports up to 16 markers. Identical markers will be treated as seperate markers and reported individually. List of currently supported trackable markers (with pose info):  |
| class | **[MLMedia](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/UnityEngine.XR.MagicLeap.MLMedia.md)** <br></br>[MLMedia](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMedia/UnityEngine.XR.MagicLeap.MLMedia.md) APIs.  |
| class | **[MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md)** <br></br>APIs for creating and retrieving media format information.  |
| class | **[MLMediaFormatKey](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormatKey/UnityEngine.XR.MagicLeap.MLMediaFormatKey.md)** <br></br>[MLMediaFormat](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaFormat/UnityEngine.XR.MagicLeap.MLMediaFormat.md) description goes here.  |
| class | **[MLMediaPlayer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLMediaPlayer.md)** <br></br>Performance markers for [MLMediaPlayer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLMediaPlayer.md).  |
| class | **[MLMediaRecorder](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaRecorder/UnityEngine.XR.MagicLeap.MLMediaRecorder.md)** <br></br>APIs for video and audio recording.  |
| class | **[MLMediaTTML](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md)** <br></br>[MLMediaTTML](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLMediaTTML/UnityEngine.XR.MagicLeap.MLMediaTTML.md) Summary placeholder.  |
| class | **[MLMeshing](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLMeshing.md)** <br></br>Performance markers for [MLMeshing](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLMeshing.md).  |
| class | **[MLNativeSurface](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLNativeSurface/UnityEngine.XR.MagicLeap.MLNativeSurface.md)**  |
| class | **[MLNativeSurfaceYcbcrRenderer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLNativeSurfaceYcbcrRenderer.md)**  |
| class | **[MLNotifications](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLNotifications/UnityEngine.XR.MagicLeap.MLNotifications.md)** <br></br>[MLHeadsetFit](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLHeadsetFit/UnityEngine.XR.MagicLeap.MLHeadsetFit.md) description goes here.  |
| class | **[MLOcclusion](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLOcclusion/UnityEngine.XR.MagicLeap.MLOcclusion.md)**  |
| struct | **[MLPermission](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLPermission.md)**  |
| class | **[MLPermissions](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPermissions/UnityEngine.XR.MagicLeap.MLPermissions.md)**  |
| class | **[MLPlanes](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLPlanes.md)**  |
| class | **[MLPlanesQueryFlagsAndPlaneDetectionModeExtensions](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLPlanesQueryFlagsAndPlaneDetectionModeExtensions.md)**  |
| class | **[MLPluginLog](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLPluginLog.md)** <br></br>Used to print logs within the plugin.  |
| class | **[MLPowerManager](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLPowerManager/UnityEngine.XR.MagicLeap.MLPowerManager.md)**  |
| class | **[MLRequest](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLRequest.md)** <br></br>INHERIT FROM THIS IF YOUR REQUEST SHOULD BE A CLASS  |
| struct | **[MLResult](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLResult.md)** <br></br>Magic Leap API return value.  |
| class | **[MLSegmentedDimmer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLSegmentedDimmer.md)**  |
| class | **[MLSpace](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLSpace/UnityEngine.XR.MagicLeap.MLSpace.md)**  |
| class | **[MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md)** <br></br>Represents an ML API wide timestamp in nanoseconds that is not guaranteed to be synced with any system time. If [OpenXR](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.OpenXR/UnityEngine.XR.OpenXR.md) is used, [MLTime](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLTime/UnityEngine.XR.MagicLeap.MLTime.md) is synonymous with the XrTime type.  |
| class | **[MLVirtualKeyboard](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVirtualKeyboard/UnityEngine.XR.MagicLeap.MLVirtualKeyboard.md)** <br></br>This class provides callbacks and manages the state of the Virtual Keyboard.  |
| class | **[MLVoice](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLVoice/UnityEngine.XR.MagicLeap.MLVoice.md)** <br></br>APIs for the voice service system.  |
| class | **[MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md)** <br></br>[MLWebRTC](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebRTC/UnityEngine.XR.MagicLeap.MLWebRTC.md) class contains the API to interface with the WebRTC C API.  |
| class | **[MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md)** <br></br>API for [MLWebView](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWebView/UnityEngine.XR.MagicLeap.MLWebView.md) that allows an application to instantiate a hardware accelerated WebView and interact with it(via "mouse" and "keyboard" events).  |
| class | **[MLWorldCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MLWorldCamera/UnityEngine.XR.MagicLeap.MLWorldCamera.md)** <br></br>Magic Leap 2 has three world cameras which it uses for environment tracking. The three cameras area located on the left, center, and right side of the headset. This API will provide a way to query for the frames from these world cameras, at this point the app will not be able to configure the world camera parameters.  |
| class | **[MagicLeapCamera](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MagicLeapCamera.md)** <br></br>MonoBehaviour class representing the Magic Leap camera  |
| class | **[MagicLeapXrProvider](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MagicLeapXrProvider.md)**  |
| class | **[MagicLeapXrProviderNativeBindings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MagicLeapXrProviderNativeBindings/UnityEngine.XR.MagicLeap.MagicLeapXrProviderNativeBindings.md)**  |
| class | **[MagicLeapXrProviderSettings](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MagicLeapXrProviderSettings.md)**  |
| class | **[MeshingSubsystem](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/MeshingSubsystem/UnityEngine.XR.MagicLeap.MeshingSubsystem.md)**  |
| class | **[MeshingSubsystemComponent](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemComponent.md)**  |
| class | **[MeshingSubsystemLifecycle](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MeshingSubsystemLifecycle.md)**  |
| class | **[OnChangedCallAttribute](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.OnChangedCallAttribute.md)**  |
| class | **[PlanesSubsystem](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/PlanesSubsystem/UnityEngine.XR.MagicLeap.PlanesSubsystem.md)** <br></br>The Magic Leap implementation of the  XRPlaneSubsystem . Do not create this directly. Use  PlanesSubsystemDescriptor.Create()  instead.  |
| class | **[RequireXRLoader](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.RequireXRLoader.md)** <br></br>Place this attribute on a child of [MLAutoAPISingleton](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.MLAutoAPISingleton.md) to prevent its initialization until the Magic Leap XR package is loaded.  |
| class | **[SessionSubsystem](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/SessionSubsystem/UnityEngine.XR.MagicLeap.SessionSubsystem.md)** <br></br>The Magic Leap implementation of the  XRSessionSubsystem . Do not create this directly. Use  SessionSubsystemDescriptor.Create()  instead.  |
| class | **[SettingsIntentsLauncher](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.SettingsIntentsLauncher.md)**  |
| class | **[SubsystemFeatures](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.SubsystemFeatures.md)**  |
| class | **[TestExtensions](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.TestExtensions.md)**  |
| class | **[Timer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/UnityEngine.XR.MagicLeap.Timer.md)**  |
| class | **[YcbcrRenderer](/versioned_docs/version-31-Aug-2023/unity-api/api/UnityEngine.XR.MagicLeap/YcbcrRenderer/UnityEngine.XR.MagicLeap.YcbcrRenderer.md)** <br></br>Implements a renderer for android native & hardware buffers (Vulkan-only).  |








