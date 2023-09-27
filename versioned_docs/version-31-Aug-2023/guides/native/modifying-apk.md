---
id: modifying-apk
title: Modifying APK for AR
sidebar_position: 3
date: 08/29/2022
tags: [Native, C-API, APK, AR, Android Studio]
keywords: [Native, C-API, APK, AR, Android Studio]
---

In most cases, you can simply create a new Native C++ project in Android Studio and build it for the Magic Leap 2 platform. However, if you need the output to be in AR space, there are a few modifications necessary:

## Modify the Android Manifest

Add the **AR tag** to the Android Manifest inside the activity tag:

```xml
<meta-data android:name="com.magicleap.augmented_reality_only" android:value="true" />
```

If you want to modify any graphics calls to build on the `MLGraphics` routines, refer to **simple_gl_app** as an example.

## API Level Enforcement for APKs

When writing applications, it is important to know that the target OS supports all the features that are used in the application. On the Magic Leap 2 platform whenever new functionality is released the API Level is raised. For the 1.0.0 launch the API level is 20. The developer documentation will list which API level is required for each function call. Once the minimum level has been determined it can be enforced via the “uses-feature” tag of the Android Manifest.

`<uses-feature android:name="com.magicleap.api_level" android:version="20">`

The line above indicates that the APK uses features marked with Magic Leap API Level 20 and below, this means it will not install on an OS with a lower Magic Leap API level than 20 (not to be confused with the Android API Level). It is strongly recommended that developers include this tag in their AndroidManifest to ensure the best possible experience for end-users.

The `<uses-feature>` tag is nested directly inside the `<manifest>` tag.

## Other Notes

- Native code is built as a shared object, loaded from the JVM.
- Magic Leap 2's AOSP lifecycle is different from Magic Leap 1's lifecycle:
  - In Magic Leap 1 when the main function exited the process would terminate and everything would be unloaded. Restarting the application would start from a clean slate.
  - In Magic Leap 2, exiting android_main does NOT mean that the process will end and that the shared object is unloaded. A second activity can start in the same process, calling android_main a second time. This may overlap in time with the previous activity.
  - This can be prevented by setting `launchMode=”singleTask”` in the application manifest (`AndroidManifest.hml`)

``` xml {4}
    <activity android:name="android.app.NativeActivity"
           android:label="@string/app_name"
           android:configChanges="orientation|keyboardHidden"
           android:launchMode="singleTask">
```

:::caution
`MLGraphicsClient` can only have one active session at any given time. When building, make sure all the files are local, not using a remote file system.
:::

