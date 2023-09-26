---
title: Debugging via Android Studio
slug: unity-native-debugging-via-android-studio
id: debugging-via-android-studio
sidebar_position: 3
date: 12/21/2021
---


This guide will show you how to perform native and Live Debugging when using the Magic Leap 2. Live Debugging is the scenario of attaching a debugger to a process that is running normally, or to a process where an exception that has been caught.

## Debugger Setup Steps

On the AOSP-based Magic Leap 2 OS we can use Android Studio to debug the unity engine source, xr package source, and any other native library that you might have written for your project.

1. Open your project in the Unity Editor, go to **File > Build Settings > Android**. Enable **Export Project**, select **Debugging** for **Create symbols.zip** and then hit **Export**.

<Image url= {require("/img/unity/native-debugging/build-settings.png")} >Unity Build Settings</Image>

2. If you are trying to debug the XR package or other native libs, copy the symbol files for your libraries into `EXPORTED\_FOLDER/unityLibrary/symbols/x86\_64`.

3. Now open Android Studio and click the **Open** button and select the folder exported from the Editor. If Android Studio asks to take the project’s SDK or the one from Android Studio, take the SDK from the project. If Gradle asks to be upgraded, ignore it.

<Image url= {require("/img/unity/native-debugging/open-project-android-studio.png")} >Open Project - Android Studio</Image>

4. Go to **Run > Edit Configurations > Debugger > Symbol Directories**, select **Debug Type** as **Native Only** and then add the`EXPORTED\_FOLDER/unityLibrary/symbols/x86\_64` path to the list.

<Image url= {require("/img/unity/native-debugging/debugging-android-studio.png")} >Debugging Symbols - Android Studio</Image>

5. Switch to the **LLDB Post Attach Commands** tab and add the following:

```shell
process handle SIGXCPU -n true -p true -s false

process handle SIGPWR -n true -p true -s false
```

<Image url= {require("/img/unity/native-debugging/lldb-post-attach-commands.png")} >LLDB Post Attach Commands - Android Studio</Image>

6. The source files for the lib you are debugging (be it the engine, the XR package or any other lib) will not show up in the Android Studio project view on its own. Drop in those files into the editor, set the breakpoints and then hit the **Debug** button (or go to **Run > Debug**). Make sure to select "Magic Leap Demophon" in the device menu, if not selected automatically.

<Image url= {require("/img/unity/native-debugging/run-debug.png")} >Debug Button - Android Studio</Image>

7. Android Studio will build, install and launch the app on the device and the pause on breakpoints and crashes, like any other debugger.

## Additional Info

- This has only been tested with the Unity build type set to **Debug**.

