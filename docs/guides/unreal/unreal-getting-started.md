---
id: unreal-getting-started
title: Getting Started
sidebar_position: 1
date: 08/31/2023
tags: [Android,Unreal Engine,Getting Started]
keywords: [Android,Unreal Engine,Getting Started]

---

This preview version of the Magic Leap 2 SDK for Unreal Engine 5 (Magic Leap 2 Unreal SDK) lets you create apps for Magic Leap 2 devices using Unreal Engine, the game engine created by Epic Games.

Most functionality in the Magic Leap 2 Unreal SDK is exposed through OpenXR rather than requiring the Magic Leap Native API SDK (Magic Leap 2 C SDK), also called the C API. Some optional APIs, like extended controller and camera functionality, require the Magic Leap 2 C SDK. Some plugins expose their functionality through components and Blueprint function libraries.

Vulkan is the only graphics API supported by the Magic Leap 2 Unreal SDK. Unreal Engine has support for the Vulkan API built in.

:::note
If you're new to developing apps for the Magic Leap 2 devices, see our [Developer Tools](/docs/guides/developer-tools) guides for more information on getting started.
:::

## Prerequisites

- This preview release is supported only on Windows. For information on system requirements for running Unreal Engine 5 on Windows, see [Hardware and Software Requirements](https://docs.unrealengine.com/5.1/en-US/onboarding-guide-for-unreal-engine-games-licensees/) in the Unreal Engine 5 documentation site.
- To clone the Magic Leap fork of the Unreal Engine source code for this preview, you need a public GitHub account and an Epic Games account.
- Visual Studio 2022 is recommended. Visual Studio 2019 is also supported. If you want to use Visual Studio 2019, customize your Unreal Engine GenerateProjectFiles.bat file for that version. If you haven’t installed Visual Studio for use with Unreal Engine before, see  [Setting Up Visual Studio](https://docs.unrealengine.com/5.1/en-US/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine/) in the Unreal Engine 5 documentation site.
- Android dependencies. Setting up Android for this preview release required different versions of Android Studio and Android SDK and NDK than what’s described in [How to Set Up Android SDK and NDK For Your Unreal Engine Development Environment](https://docs.unrealengine.com/5.1/en-US/how-to-set-up-android-sdk-and-ndk-for-your-unreal-engine-development-environment/) in the Unreal Engine 5 documentation site. See [Install Android dependencies](#install-android-dependencies) in this guide for instructions.

:::tip
You’ll be building the Unreal Engine from source code, which can take several hours or more.
:::

## Setup Unreal Engine and the Magic Leap 2 Unreal SDK

The version of Unreal Engine for this preview is located in a fork of the Epic Games Unreal Engine GitHub repository. The Magic Leap 2 Unreal SDK is available from the Magic Leap Hub.

### Get access to the Unreal Engine repository

To get access to the Epic Games Unreal Engine GitHub repository, follow the instructions on this page on the Unreal Engine website: [Accessing Unreal Engine source code on GitHub](https://www.unrealengine.com/en-US/ue-on-github).

### Install the Magic Leap Hub

You’ll need the Magic Leap Hub to download the Magic Leap 2 Unreal SDK and examples. If you don’t already have the Magic Leap Hub installed:

1. Go to the [developer tools download page](https://ml2-developer.magicleap.com/downloads) on the Magic Leap 2 developer portal and install the Windows version of the Magic Leap Hub.
2. Run the installer and complete the setup wizard.
3. Go to the [Microsoft Visual C++ Redistributable latest supported downloads](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist) page. Install the X64 redistributables for Visual Studio 2015, 2017, 2019, and 2022.

### Install the ML C SDK

1. Launch the Magic Leap Hub. Click **Open** on the Package Manager tile.
2. Click the **Native** tile.
3. Download and install ML C SDK.
4. Set the ML C SDK environment variable to the download location. You can do this through Windows Settings:

    a. In the Windows Settings search field, search for "environment".
    b. Choose **Edit the system environment variables**. In the System Properties dialog that appears, make sure the **Advanced** tab is selected.
    c. Click **Environment Variables**.
   <Image url= {require("/img/unreal-5/previewdocs/set-window-environment-variables.png")} >The Windows System Properties window with Environment Variables selected</Image>
    d. In the Environment Variables dialog that appears, click **New** under this list of users variables.
   <Image url= {require("/img/unreal-5/previewdocs/set-new-window-environment-variable.png")} >New User Variable window in Environment Variables setting</Image>
    e. Create a user variable with the variable name `MLSDK` and the variable value `MLSDK=%USERPROFILE%\MagicLeap\mlsdk\MLSDK_VERSION>`.
    f. Click **OK** to close each of the dialogs.

### Install  Android dependencies

If you don’t already have OpenJDK-11 installed:

1. Download the Windows binary of OpenJDK-11 from the [Java developer kit website](https://jdk.java.net/java-se-ri/11).
2. Extract the zip file and move the `jdk-11` folder to your `%USERPROFILE%` directory.
3. Set your `JAVA_HOME` environment variable to the path of the `jdk-11` folder. You can do this through Windows Settings.

When you install Android Studio, you'll need to install it in the default location. If you already have a version of Android Studio installed, this might prevent the version you need for Unreal Engine from being installed in the default location. For example, if you have Unity Editor installed, then you already have Android Studio installed. We recommended uninstalling any version of Android Studio you arleady have install or renaming the directory where it is install to a name that is diffent from the default install location. Note that this means you won't be able to use Unreal Engine at the same time as Unity Editor or other software that requires a different version of Android Studio than the one Unreal Engine uses.

To set up the versions of the Android SDK and Android NDK required for this preview release, you’ll need to install Android Studio Electric Eel, 2022.1.1 Patch 2. This isn’t the latest version or the version recommended in the Unreal Engine 5 documentation.

1. Go to the [Android Studio download site](https://developer.android.com/studio/archive). You might have to accept the terms and conditions to see the list of releases.
2. In the list of Android Studio downloads, find Android Studio Electric Eel, 2022.1.1 Patch 2. Download the Windows (64-bit) installer.
3. Install Android Studio Electric Eel, 2022.1.1 Patch 2. Accept the default installation location. Start Android Studio when the installation is complete.
4. In the Android Studio welcome window, click **More Actions** and select **SDK Manager**.
5. In the **SDK Platforms** tab of the Android SDK Manager, select Android SDK 10 (Q) API Level 29.
6. Select the **SDK Tools** tab of the Android SDK Manager. Select **Show Package Details**.
7. Scroll down to NDK (side by side). Select Android NDK version **25.0.8775105** and install it.
8. Scroll down to Android SDK Command-line Tools and select *9.0**.
9. Scroll down to Cmake. Select Cmake version **3.22.1**.
10. Click **OK** to install everything you selected in the Android SDK Manager. Click **OK** to confirm the changes.
11. Click **Finish** to close the Android SDK Manager.

### Download the Unreal Engine source code

To download the version of the Unreal Engine source code for this preview, clone it from the Magic Leap fork of the Epic Games GitHub repository:

1. Log in to [GitHub](https://github.com/) with the credentials for your public GitHub account.
2. In Windows Command Prompt, run this command:

```bash
git clone --single-branch -b 5.1.1-release-ml2 https://github.com/MagicLeapUnreal/UnrealEngine.git
```
  
   The `--single-branch` argument is optional. It reduces the size of the download.

### Download the Magic Leap 2 Unreal SDK

To download the Magic Leap 2 Unreal SDK from the Magic Leap Hub:

1. Launch the Magic Leap Hub. Click **Open** on the Package Manager tile.
2. In the Bundles tab, select the **Unreal** tile.
3. Select **Unreal** in Change Summary to download the ML Unreal SDK, documentation, sample apps, and integration tests. Click **Apply Changes** to download.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-download-from-ml-hub.png")} >The Package Manager with Unreal selected</Image>

### Set up plugins

Set up the plugins in the ML Unreal SDK as Engine plugins. You can copy the ML Unreal SDK plugins to your preferred location or create a symbolic link.


To copy the ML Unreal SDK plugins to the Unreal Engine folder as engine plugins:

1. In the `unreal-sdk` folder, copy the `Plugins` folder and move it to this folder within the `UnrealEngine` folder: `Engine\Plugins\Runtime`.
2. Rename the copied folder in the `UnrealEngine` folder to `MagicLeap`.

To link ML Unreal SDK plugins as engine plugins:

1. Open the Windows Command Prompt.
2. Change to this folder within the `UnrealEngine` folder: `Engine\Plugins\Runtime`
3. Run this command:

```bash
mklink /d MagicLeap $UNREAL-SDK\Plugins
```

:::tip
You might need elevated privileges to create a symbolic link. Make sure you run the Windows Command prompt from an account that has administrator privileges. If you still get a message saying you don’t have sufficient privileges to run the `mklink` command, make sure your Windows computer has the Developer Mode setting enabled.
:::

### Run the setup and project generation files

1. In the Windows Command Prompt window, go to the `UnrealEngine` folder. The setup and project generation files are in this folder.
2. Go to the `Engine\Extras\Android` folder. Run `SetupAndroid.bat` to ensure that the correct version of the Android SDK is installed.
3. Go back to the `UnrealEngine` folder. Run `Setup.bat`. This downloads binary content for Unreal Engine, install prerequisites, and sets up Unreal file associations. It might take a few minutes to run.
4. If you’re prompted to register the Unreal Engine file type or install prerequisites, click **Yes**.
5. Run `GenerateProjectFiles.bat`. This creates a file called `UE5.sln` in the same directory.

    You can use the `UE5.sln` file to build Unreal Engine using Visual Studio.

### Build Unreal Engine

You can build Unreal Engine from the source file using Visual Studio or from the command line. Either way, this step can take several hours to complete.

If you have never built Unreal Engine from source code before, we recommend using Visual Studio.

To build Unreal Engine using Visual Studio, follow the instructions in this article from the Unreal Engine 5 documentation site: [Building Unreal Engine from Source](https://docs.unrealengine.com/5.2/en-US/building-unreal-engine-from-source/). Use the `UE5.sln` file you created when you ran the `GenerateProjectFiles.bat` file.

To build Unreal Engine from the command line, run the `Build.bat` file. Run these two commands:

```bash
Engine\Build\BatchFiles\Build.bat UnrealEditor Win64 Development

Engine\Build\BatchFiles\Build.bat ShaderCompileWorker Win64 Development
```

The executable file created is located in the `UnrealEngine` folder at `\Engine\Binaries\Win64\UE5Editor.exe`.

:::tip
To view logcat for Unreal Engine logs, run this command:

```bash
adb logcat -s UE:*
```

:::

## Set up Remote Rendering

The Magic Leap Application Simulator is not supported for this preview.  You can use Magic Leap Remote Rendering to run the apps you create on a desktop computer and stream it to the Magic Leap 2 device.

You can find instructions for setting up Magic Leap Remote Rendering and using it with Unreal Engine 5 on the Magic Leap 2 developer portal. See [Remote Rendering service](/docs/guides/remote-rendering/remote-rendering) and [Remote Rendering with Unreal Engine 5](/docs/guides/remote-rendering/remote-render-unreal-engine-5).

## Limitations and work-arounds

### Mixed reality streaming and capture

If your project uses any mixed reality streaming or capture features, turn off the Mobile HDR rendering setting when packaging your app.This disables post-processing. If you don’t do this, you get a virtual reality capture with a black background instead of a mixed reality capture on a real-world background. 

This happens because Unreal Engine does not propagate the alpha channel from the base pass through the post-processing pipeline. Instead, the tonemapper sets a default alpha of 1.0 for every pixel. Unreal Engine uses inverted alpha in OpenXR, so this sets all pixels to fully opaque. 

You can leave the Mobile HDR setting on if you just want to see how your content looks on the Magic Leap 2 device and don’t mind if it appears on a black background in captures.

To turn off the Mobile HDR setting when you package your app:

1. In the Unreal Editor main menu, select **Edit > Project Settings**.
2. In the project settings window, go to **Engine**. Select **Rendering**. Under VR, deselect **Mobile HDR**.

## Next steps

For step-by-step instructions on creating a simple app with the version of Unreal Engine you just built, see [Create an app using Unreal Engine](/docs/guides/unreal/unreal-create-app).