---
id: migration-guide-c
title: Magic Leap 1 Migration Guide
sidebar_position: 3
date: 08/29/2022
tags: [Magic Leap 1, Migration, Gradle, CMake, mabu]
keywords: [Magic Leap 1, Migration, Gradle, CMake, mabu]
---

The Magic Leap 2 no longer uses [mabu](https://developer.magicleap.com/en-us/learn/guides/magic-leap-builder-overview) as the build system. Instead, [Gradle](https://gradle.org/) and [CMake](https://cmake.org/) are now the tools used to build apps when using the Magic Leap C-API.

:::info
This changes the source code entry point and lifecycle of apps.
:::

:::tip
For more information on C-API feature differences between Magic Leap 1 and 2, reference the [C-API Changes page](/versioned_docs/version-31-Aug-2023/guides/native/ml2-capi-changes.md).
:::

## Example

Let’s convert the following application:

Name: “AR World”  
Id: “com.arcompany.arworld”

### Magic Leap 2 project using a sample file

First we will set up an Magic Leap 2 project using a sample file.

1. Copy the `simple_gl_app` template from the C-API sample directory and rename it to `arworld_app`.

2. Adjust the following files in your new project. In `app/build.gradle` change:

```diff
+ applicationId = ‘com.company.arworld’
- applicationId = ‘com.magicleap.simple_gl_app’
```

3. In `AndroidManifest.xml` change:

```diff
+ <meta-data android:name=”android.app.lib_name”android:value=”arworld_app”/>
- <meta-data android:name=“android.app.lib_name”android:value = “simple_gl_app”/>
...
+ package="com.arcompany.arworld
- package="com.magicleap.capi.simple_gl_app"
```

4. In `app/src/main/res/values/strings.xml` change

```diff
+ <string name="app_name" >AR World</string>
- <string name="app_name" >simple_gl_app</string>
```

5. In `app/src/main/cpp/src/CMakeLists.txt` change any occurrence of “simple_gl_app” with “arworld_app”.
6. Adjust the target_link_libraries to match your use of shared libraries.
7. Add all the source code files you need to compile to “add_library”
8. Copy all your source code files to `app/src/main/cpp`.

### Convert source code to match Magic Leap 2 API

Now that the files are in place, we will modify the source code to match the new Magic Leap 2 API.

1. Change the code entry point changes: `int main(int argc, char * argv[])` becomes `void android_main(struct android_app *state)`

2. Any references to `ml_lifecycle` like `MLLifecycleInit` have been removed in favor of the Android lifecycle handling. In a native_app_glue project this is handled through the `android_app * state` and the event mechanism therein. See the `simple_gl_app` on how to do this.

3. Any references to `ML_LOG` should be replaced with [`android logging`](https://developer.android.com/ndk/reference/group/logging).

`Privileges` have been replaced with `Permissions` (exact conversion t.b.d.)

After connecting the headset to your machine, you can either use Android Studio or the command line to build and run your app on the device.

## Android Studio

Open the project in Android Studio and build and run the project. (**Run** > **Run App** or **Run** > **Debug App**)

## Command Line

Run the following set of commands to build, install, and run the application:

```shell
./gradlew build

adb install app/build/outputs/apk/ml2/debug/com.arcompany.arworld-debug.apk

adb shell am start -a android.intent.action.MAIN -n com.arcompany.arworld/android.app.NativeActivity
```

To uninstall the application run the following command:

```shell
adb uninstall com.magicleap.capi.sample.lifecycle 
```

