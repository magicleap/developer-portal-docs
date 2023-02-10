---
id: native-openxr-setup
title: Native OpenXR Setup
sidebar_position: 6
date: 08/29/2022
tags: [Native, C-API, APK, AR, Android Studio, OpenXR]
keywords: [Native, C-API, APK, AR, Android Studio, OpenXR]
---

# Preliminary OpenXR instructions for Magic Leap 2

Using [OpenXR](https://registry.khronos.org/OpenXR/specs/1.0/html/xrspec.html) on the Magic Leap 2 is similar to using OpenXR on any other Android device. Since not all of our API has been exposed to OpenXR, you can mix functionality from the Magic Leap C-API with OpenXR functionality. For example, you can use `ml_audio.h` in OpenXR applications. **Just make sure you install the MLSDK when doing so.**

OpenXR samples source code is available in the Magic Leap Hub.

:::note
 The Magic Leap 2 OpenXR runtime is progressing quickly towards conformance but has not yet reached this. Magic Leap is strongly committed to reaching conformance as soon as possible!
:::

## Prerequisites

- Native SDK Version `1.0.0`
- OpenXR SDK Version `1.0.25` or higher
- Completed [Magic Leap Native SDK instructions.](/versioned_docs/version-1.1.0-dev2/guides/native/getting-started/native-getting-started.md)

## Limitations

- One [XrCompositionLayerProjection](https://registry.khronos.org/OpenXR/specs/1.0/html/xrspec.html#XrCompositionLayerProjection) is supported.
- A maximum of 16 composition layers at one time.
- Each layer imposes a performance penalty, if you are seeing performance issues consider refraining from using more than one layer.
- Currently running the OpenXR samples using the Magic Leap Application Simulator is **not supported**.
- When the OS dimmer is enabled and Vulkan is used as the graphics system the dimmer is flipped in the “Y” direction.
- When the OS dimmer is enabled the blend mode is not honored, it is always treated as `XR_ENVIRONMENT_BLEND_MODE_ALPHA_BLEND`.
- On Windows, long filenames can cause trouble while building the OpenXR samples. Please install the samples in a directory as short as possible. Alternatively enable long file name support in Windows.

## Currently Supported Extensions

As of this writing the following extensions are supported. As always, the runtime will provide the latest list of supported extensions.

- `XR_EXT_view_configuration_depth_range`
- `XR_KHR_android_create_instance`
- `XR_KHR_composition_layer_depth`
- `XR_KHR_opengl_es_enable`
- `XR_KHR_vulkan_enabled`
- `XR_EXT_hand_tracking`
- `XR_EXT_eye_gaze_interaction`

## Using the Runtime

We recommend you use the standard OpenXR loader, available [here](https://github.com/KhronosGroup/OpenXR-SDK).

If you cannot use the standard loader, the runtime binary name can be found using the [Android Content Provider mechanism](https://registry.khronos.org/OpenXR/specs/1.0/loader.html#active-runtime-information) described in the OpenXR loader specification. **Do not hardcode the path as the name might change.**

## Android Manifest Details

A few entries must be added to the standard Android Manifest file to make OpenXR work on the Magic Leap 2.

### Permissions

When using hand tracking make sure to also add:

```xml
com.magicleap.permission.HAND_TRACKING

<uses-permission android:name="com.magicleap.permission.HAND_TRACKING" />
```

When the using eye gaze extension add:

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

:::note
Currently, regardless of what hand you are holding the Controller in, it should be bound using the **/user/hand/right** path. Future runtime releases might support left-vs-right detection.
:::

## Running hello_xr

The OpenXR working group releases a sample program called [hello_xr](https://github.com/KhronosGroup/OpenXR-SDK-Source/tree/main/src/tests/hello_xr) together with their SDK package. Open this in Android Studio, attach your Magic Leap 2 device and hit **“Run”**.

Product is based on a published Khronos Specification and is expected to pass the Khronos Conformance Process. Current conformance status can be found at www.khronos.org/conformance.

:::tip
Make sure to use OpenXR 1.0.25 or higher.
:::

## Building the Magic Leap OpenXR samples

To build the Magic Leap OpenXR samples please follow the normal [Magic Leap Native SDK instructions.](/versioned_docs/version-1.1.0-dev2/guides/native/getting-started/native-getting-started.md).

These samples can be built using Android Studio or command line via Gradle.
