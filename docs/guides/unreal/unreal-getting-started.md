---
id: unreal-getting-started
title: Getting started with Unreal Engine 5
sidebar_position: 1
date: 08/30/2023
tags: [Android,Unreal Engine,Getting Started]
keywords: [Android,Unreal Engine,Getting Started]

---


The Magic Leap 2 SDK for Unreal Engine 5 (ML2 Unreal SDK) lets you create apps for Magic Leap 2 devices using Unreal Engine, the 3D graphics engine created by Epic Games.

Most functionality in the ML2 Unreal SDK is exposed through OpenXR. Some optional APIs, like extended controller and camera functionality, require the Magic Leap Native API SDK (ML2 C SDK), also called the C API. Some plugins expose their functionality through components and Blueprint function libraries.

Vulkan is the only graphics pipeline supported with the ML2 Unreal SDK. Unreal Engine has support for the Vulkan API built in.

## Prerequisites

- This preview release is supported only on Windows. For information on system requirements running Unreal Engine 5 on Windows, see [Hardware and Software Requirements](https://docs.unrealengine.com/5.1/en-US/onboarding-guide-for-unreal-engine-games-licensees/) in the Unreal Engine 5 documentation site.
- To download and use the version of Unreal Engine for this preview, you need a public GitHub account and an Epic Games account.
- Visual Studio 2022 is recommended. If you want to use a different version of Visual Studio, you can customize your Unreal Engine GenerateProjectFiles.bat file for that version. If you haven’t installed Visual Studio for use with Unreal Engine before, see  [Setting Up Visual Studio](https://docs.unrealengine.com/5.1/en-US/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine/) in the Unreal Engine 5 documentation site.
- Android dependencies. Setting up Android for this preview release is a little different than what’s described in [How to Set Up Android SDK and NDK For Your Unreal Engine Development Environment](https://docs.unrealengine.com/5.1/en-US/how-to-set-up-android-sdk-and-ndk-for-your-unreal-engine-development-environment/) in the Unreal Engine 5 documentation site. See [Install Android dependencies](#install-android-dependencies) in this guide for instructions.

:::tip

You’ll be building the Unreal Engine from source code, which can take several hours or more. So plan ahead.
:::

## Setup Unreal Engine and the ML2 Unreal SDK

The version of Unreal Engine for this preview is located in a fork of the Epic Games Unreal Engine GitHub repository. The ML2 Unreal SDK is available from the Magic Leap Hub.

### Install the Magic Leap Hub

You’ll need the Magic Leap Hub to download the ML2 Unreal SDK and examples. If you don’t already have the Magic Leap Hub installed:

1. Go to the [developer tool download page](https://ml2-developer.magicleap.com/downloads) on the Magic Leap 2 developer portal and install the Windows version of the Magic Leap Hub.
2. Run the installer and complete the setup wizard.
3. Install the redistributables from the [Microsoft Visual C++ Redistributable latest supported downloads](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist) page.

### Install the ML C SDK (optional)

If you want access functionality that isn’t exposed through OpenXR or Android Open Source Project (AOSP), download the ML C SDK from the Magic Leap Hub:

1. Launch the Magic Leap Hub. Click **Open** on the Package Manager tile.
2. Click the **Native** tile.
3. Download and install ML C SDK.
4. Set the ML C SDK environment variable to the download location. Run this command in the Windows Command Prompt: 

```bash
set MLSDK=%USERPROFILE%\MagicLeap\mlsdk\<mlsdk_version>
```

You can also set the ML C SDK environment variable to the download location through Windows Settings:

1. In the Windows Settings search field, search for "environment".
2. Choose **Edit the system environment variables**. In the System Properties dialog that appears, make sure the Advanced tab is selected.
3. Click **Environment Variables**.
4. In the Environment Variables dialog that appears, click **New** under this list of users variables.
5. Create a user variable with the variable name `MLSDK` and the variable value `set MLSDK=%USERPROFILE%\MagicLeap\mlsdk\<mlsdk_version>`.
6. Click **OK** to close each of the dialogs.

### Install  Android dependencies

If you don’t already have OpenJDK-17 installed:

1. Download the Windows binary of OpenJDK-17 from the [Java developer kit website](https://jdk.java.net/java-se-ri/17).
2. Extract the zip file and move the `jdk-17` folder to your `%USERPROFILE%` directory.
3. Set your `JAVA_HOME` environment variable to the path of the `jdk-17` folder.

:::tip

If Unity Editor is already installed on the machine that you are installing the Unreal Engine on, rename the folder where Android Studio is already installed to so that the version you install for Unreal Engine can be saved to the default location.
:::

To set up the versions of the Android SDK and Android NDK required for this preview release, you’ll need to install Android Studio Electric Eel, 2022.1.1 Patch 2. This isn’t the latest version or the version recommended in the Unreal Engine 5 documentation.

1. Go to the [Android Studio download site](https://developer.android.com/studio/archive). You might have to accept the terms and conditions to see the list of releases.
2. In the list of Android Studio downloads, find Android Studio Electric Eel, 2022.1.1 Patch 2. Download the Windows (64-bit) installer.
3. Install Android Studio Electric Eel, 2022.1.1 Patch 2. Accept the default installation location. Start Android Studio when the installation is complete.
4. In the Android Studio welcome window, click **More Actions** and select **SDK Manager**.
5. In the **SDK Platforms** tab of the Android SDK Manager, select Android SDK 10 (Q) API Level 29.
6. Select the **SDK Tools** tab of the Android SDK Manager. Select **Show Package Details**.
7. Scroll down to NDK (side by side). Select Android NDK version **25.0.8775105** and install it.
8. Scroll down to Android SDK Command-line Tools and select **Android SDK Command-line Tools (latest)**.
9. Scroll down to Cmake. Select Cmake version **3.22.1**.
10. Click **OK** to install everything you selected in the Android SDK Manager. Click **OK** to confirm the changes.
11. Click **Finish** to close the Android SDK Manager.

### Download Unreal Engine

To download the version of Unreal Engine for this preview, clone it from the Magic Leap fork of the Epic Games GitHub repository:

1. Log in to [GitHub ](https://github.com/) with the credentials for your public GitHub account.
2. In Windows Command Prompt, run this command:

```bash
git clone --single-branch -b 5.1.1-release-ml2 https://github.com/MagicLeapUnreal/UnrealEngine.git
```
  
   The `--single-branch ` argument is optional. It reduces the size of the download.

### Download the ML2 Unreal SDK

To download the ML2 Unreal SDK from the Magic Leap Hub:

1. Launch the Magic Leap Hub. Click **Open** on the Package Manager tile.
2. In the Bundles tab, select the **Unreal** tile.
3. Select **Unreal** in Change Summary to download the ML Unreal SDK, documentation, sample apps, and integration tests. Click **Apply Changes** to download.

### Set up plugins and projects

You can use the plugins in the ML Unreal SDK as Project plugins or Engine plugins. You can copy the ML Unreal SDK plugins to your preferred location or create a symbolic link.

:::tip

You might need elevated privileges to create a symbolic link. Make sure you run the Windows Command prompt from an account that has administrator privileges. If you still get a message saying you don’t have sufficient privileges to run the `mklink` command, make sure your Windows computer has the Developer Mode setting enabled.
:::

To link ML Unreal SDK plugins as project plugins:

1. Open the Windows Command Prompt.
2. Change to the `root` directory of your Unreal project.
3. Run this command:

```bash
mklink /d Plugins $UNREAL-SDK\Plugins
```

4. If you already have a `Plugins` folder in your project you can create the link as `Plugins\MagicLeap`.

To link ML Unreal SDK plugins as engine plugins:

1. Open the Windows Command Prompt.
2. Change to this folder within the `UnrealEngine` folder: `Engine\Plugins\Runtime`
3. Run this command:

```bash
mklink /d MagicLeap $UNREAL-SDK\Plugins
```

### Run the setup and project generation files

1. In the Windows Command Prompt window, go to the `UnrealEngine` folder. The setup and project generation files are in this folder.
2. Go to the `Engine\Extras\Android` folder.
3. Run `SetupAndroid.bat` to ensure that the correct version of the Android SDK is installed.
4. Go back to the `UnrealEngine` folder.
5. Run `Setup.bat`. This downloads binary content for Unreal Engine, install prerequisites, and sets up Unreal file associations.
6. If you’re prompted to register the Unreal Engine file type or install prerequisites, click **Yes**.
7. Run `GenerateProjectFiles.bat`. This creates a file called `UE5.sln` in the same directory.

    You can use the `UE5.sln` file to build Unreal Engine using Visual Studio.

### Build Unreal Engine

You can build Unreal Engine from the source file using Visual Studio or from the command line.

To build Unreal Engine using Visual Studio, follow the instructions in this article from the Unreal Engine 5 documentation site: [Building Unreal Engine from Source](https://docs.unrealengine.com/5.2/en-US/building-unreal-engine-from-source/). Use the `UE5.sln` file you created when you ran the `GenerateProjectFiles.bat` file.

To build Unreal Engine from the command line, run the `Build.bat` file, run these two commands:

```bash
Engine\Build\BatchFiles\Build.bat UnrealEditor Win64 Development

Engine\Build\BatchFiles\Build.bat ShaderCompileWorker Win64 Development
```

## Set up Remote Rendering

The Magic Leap Application Simulator is not supported for this preview.  You can use Magic Leap Remote Rendering to run the apps you create on a desktop computer and stream it to the Magic Leap 2 device.

You can find instructions for setting up Magic Leap Remote Rendering and using it with Unreal Engine 5 on the Magic Leap 2 developer portal. See [Remote Rendering service](/docs/guides/remote-rendering/remote-rendering) and [Remote Rendering with Unreal Engine 5](/docs/guides/remote-rendering/remote-render-unreal-engine-5).

## Integration testing

Find the integration test in the UnrealSDK project under `Projects/IntegrationTests` in the `unreal-sdk` folder. This is a host application for a suite of integration tests. Depending on the type of API you are implementing, you should either add a new map to this test, or create a new project, or both.

## View logcat

To view logcat for Unreal Engine logs, run this command:

```bash
adb logcat -s UE:*
```

## Limitations and work-arounds

### Mixed reality streaming and capture

If your project uses any mixed reality streaming or capture features, turn off the Mobile HDR rendering setting when packaging your app.This disables post-processing. If you don’t do this, you get a virtual reality capture with a black background instead of a mixed reality capture on a real-world background. 

This happens because Unreal Engine does not propagate the alpha channel from the base pass through the post-processing pipeline. Instead, the tonemapper sets a default alpha of 1.0 for every pixel. Unreal Engine uses inverted alpha in OpenXR, so this sets all pixels to fully opaque. 

You can leave the Mobile HDR setting on if you just want to see how your content looks on the ML2 device and don’t mind if it appears on a black background in captures.

To turn off the Mobile HDR setting when you package your app:

1. In the Unreal Editor main menu, select **Edit > Project Settings**.
2. In the project settings window, go to **Engine**. Select **Rendering**. Under VR, deselect **Mobile HDR**.

## Next steps

For step-by-step instructions on creating a simple app with the version of Unreal Engine you just built, see [Create an app using Unreal Engine](/docs/guides/unreal/unreal-create-app).