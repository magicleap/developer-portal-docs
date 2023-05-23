---
id: native-openxr-setup
title: OpenXR Setup
sidebar_position: 6
date: 08/29/2022
tags: [Native, C-API, APK, AR, Android Studio, OpenXR]
keywords: [Native, C-API, APK, AR, Android Studio, OpenXR]
---

# OpenXR instructions for Magic Leap 2

Using [OpenXR](https://registry.khronos.org/OpenXR/specs/1.0/html/xrspec.html) on the Magic Leap 2 is similar to using OpenXR on any other Android device. Since not all Magic Leap 2 features are supported as extensions in OpenXR, you can mix functionality from the Magic Leap C-API with OpenXR functionality. For example, you can use `ml_audio.h` in OpenXR applications. **Just make sure you install the MLSDK when doing so.**

OpenXR sample source code is available in the Magic Leap Hub.

:::info
The Magic Leap 2 has been certified as conformant as of the 1.1.0 release.
:::

## Prerequisites

- Native SDK Version `1.0.0` (Only needed when building when using [Magic Leap Native API](/docs/api-ref/api/indexpage.md), like the Magic Leap samples)
- OpenXR SDK Version `1.0.27` or higher
- Completed [Magic Leap Native SDK instructions.](/docs/guides/native/getting-started/native-getting-started)

## Limitations

- One [XrCompositionLayerProjection](https://registry.khronos.org/OpenXR/specs/1.0/html/xrspec.html#XrCompositionLayerProjection) is supported.
- A maximum of 16 composition layers at one time.
- Each layer imposes a performance penalty, if you are seeing performance issues consider refraining from using more than one layer.
- Currently running the OpenXR samples using the Magic Leap Application Simulator is **not supported**.
- On Windows, long filenames can cause trouble while building the OpenXR samples. Please install the samples in a directory as short as possible. Alternatively, enable long file name support in Windows.

## Currently Supported Extensions

As of this writing the following extensions are supported. As always, the runtime will provide the latest list of supported extensions.

- `XR_EXT_view_configuration_depth_range`
- `XR_KHR_android_create_instance`
- `XR_KHR_composition_layer_depth`
- `XR_KHR_opengl_es_enable`
- `XR_KHR_vulkan_enable`
- `XR_EXT_hand_tracking`
- `XR_EXT_eye_gaze_interaction`
- `XR_MND_headless`
- `XR_ML_global_dimmer`
- `XR_ML_frame_end_info`
- `XR_KHR_convert_timespec_time`
- `XR_KHR_vulkan_enable2`
- `XR_MSFT_unbounded_reference_space`
- `XR_ML_compat`
- `XR_ML_ml2_controller_interaction`

## Using the Runtime

We recommend you use the [standard OpenXR loader](https://github.com/KhronosGroup/OpenXR-SDK).

If you cannot use the standard loader, the runtime binary name can be found using the [Android Content Provider mechanism](https://registry.khronos.org/OpenXR/specs/1.0/loader.html#active-runtime-information) described in the OpenXR loader specification. **Do not hardcode the path as the name might change.**

## Android Manifest Details

A few entries must be added to the standard Android Manifest file to make OpenXR work on the Magic Leap 2.

### Permissions

When using hand tracking make sure to add:

```xml
com.magicleap.permission.HAND_TRACKING

<uses-permission android:name="com.magicleap.permission.HAND_TRACKING" />
```

When using the eye gaze extension add:

```xml
com.magicleap.permission.EYE_TRACKING

<uses-permission android:name="com.magicleap.permission.EYE_TRACKING" />
```

:::note
Please note that `EYE_TRACKING` is a dangerous/runtime permission, meaning that it must also be requested at runtime.
:::

## Switching to AR mode

As with regular C-API based applications we need to tell the OS that the application is an AR application. This is done using the [OpenXR standard HMD category tag](https://registry.khronos.org/OpenXR/specs/1.0/html/xrspec.html#android-runtime-category).

`<category android:name="org.khronos.openxr.intent.category.IMMERSIVE_HMD" />`

## Android Manifest Example

```xml
<?xml version="1.0" encoding="utf-8"?>

<manifest xmlns:android="http://schemas.android.com/apk/res/android"
 android:versionCode="1" android:versionName="1.0">
  <application
   android:allowBackup="false"
   android:fullBackupContent="false"
   android:icon="@mipmap/ic_launcher"
   android:label="@string/app_name"
   android:hasCode="false">

 <!-- Our activity is the built-in NativeActivity framework class.
     	This will take care of integrating with our NDK code. -->
 <activity android:name="android.app.NativeActivity"
           android:label="@string/app_name"
           android:configChanges="orientation|keyboardHidden"
           android:launchMode="singleTask">

   <!-- Tell NativeActivity the name of our .so -->
   <meta-data android:name="android.app.lib_name"
              android:value="hand_tracking" />
   <intent-filter>
     <action android:name="android.intent.action.MAIN" />
     <category android:name="android.intent.category.DEFAULT" />
     <category android:name="android.intent.category.LAUNCHER" />
     <category android:name="org.khronos.openxr.intent.category.IMMERSIVE_HMD" />
   </intent-filter>
 </activity>
  </application>

  <uses-permission android:name="com.magicleap.permission.HAND_TRACKING" />
  <uses-permission android:name="org.khronos.openxr.permission.OPENXR_SYSTEM" />
  <uses-feature android:name="com.magicleap.api_level" android:version="20" />
</manifest>

```

## Magic Leap 2 Interaction Profile

The Magic Leap 2 Controller interaction profile is available [here](https://registry.khronos.org/OpenXR/specs/1.0/html/xrspec.html#XR_ML_ml2_controller_interaction).


## Running hello_xr

The OpenXR working group releases a sample program called [hello_xr](https://github.com/KhronosGroup/OpenXR-SDK-Source/tree/main/src/tests/hello_xr) together with their SDK package. Open this in Android Studio, attach your Magic Leap 2 device and hit **“Run”**.

:::tip
Make sure to use OpenXR 1.0.27 or higher.
:::

## Download OpenXR Samples

To access the Package manager in ML Hub

1. Inside the **ML Hub** select **Package Manager**.

<Image url= {require("/img/ml-hub/ml_hub_package_manager_all.png")} >The ML Hub with the Package Manger option selected.</Image>

2. In the Bundles section select **Native** , then select Open XR in the additional packages section.

<Image url= {require("/img/ml-hub/ml_hub_package_manager_native_openxr.png")} >The Package Manager with the OpenXR Samples option selected.</Image>

<details> 

<summary> You can also download the OpenXR Samples separately </summary>

1. Inside the **Package Manager** select **All**.

<Image url= {require("/img/ml-hub/ml_hub_package_manager.png")} >The the Package Manger with the **All** tab selected.</Image>

2. Then find and select the download icon for the OpenXR Samples . Located under the **Common Packages** section.

<Image url= {require("/img/ml-hub/ml_hub_package_manager_native_openxr.png")} >The Package Manager with the OpenXR Samples option selected.</Image>

</details>

## Building the Magic Leap OpenXR samples

To build the Magic Leap OpenXR samples please follow the normal [Magic Leap Native SDK instructions.](/docs/guides/native/getting-started/native-getting-started).

These samples can be built using Android Studio or command line via Gradle.
