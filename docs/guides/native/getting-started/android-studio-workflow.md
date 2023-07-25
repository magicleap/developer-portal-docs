---
id: android-studio-workflow
title: Android Studio Workflow
sidebar_position: 3
date: 08/29/2022
tags: [Android, Native, Getting Started, C-API, Magic Leap C SDK 0.52.2, Android Studio]
keywords: [Android, Native, Getting Started, C-API, Magic Leap C SDK 0.52.2, Android Studio]
---


## Overview

This section outlines the steps required to build Native applications (including sample applications) using an Android Studio workflow for Magic Leap 2 devices and App Simulator.

## Prerequisites

- Make sure you have properly installed everything listed in the [Setup Overview](/docs/guides/native/getting-started/native-setup-overview.md) and have followed the [instructions](/docs/guides/getting-started/install-the-tools.md) on downloading the ML Hub and the latest Magic Leap C SDK (MLSDK).
  - :::warning
The **MLSDK** must be installed into a path without spaces.
:::

- Additionally, make sure you have OpenJDK-11 installed. You can download it from the [Java Development Kit website](https://jdk.java.net/java-se-ri/11).
- Lastly, you must download the latest **C-API Samples** package from the **Package Manager** within the **ML Hub**. On more information about the package manager, check the [Package Manager](/docs/guides/developer-tools/ml-hub/ml-hub-package-manager.md) guide.

The instructions below assume that all the content has been extracted to the **{USER}** directory.

## Setup

1. Open the Android Studio SDK Manager by going to **Tools > SDK Manager**
2. Under the **SDK Update Sites** tab, create a new entry pointing at **ml-addon.xml** by inserting `https://thelab.magicleap.cloud/packages_mlhub/artifacts/ml-addon.xml` in the URL field

<Image url= {require("/img/migration-images/e_showXML.png")} >SDK Update Sites XML Link Entry</Image>

4. Under the **SDK Tools** tab, select and install both the **Magic Leap SDK (Tools)** and the **Magic Leap SDK**.

<Image url= {require("/img/migration-images/g_MLSDK.png")} >MLSDK options at the bottom of the SDK Tools tab</Image>

:::tip
If you are having issues with the steps above taking effect, restart Android Studio.
:::

## Building Signed Release APKs in Android Studio

If you would like faster and easier rebuilds and don't mind a little setup beforehand, follow these steps:

1. Go to **Settings > Build, Execution, Deployment > Compiler > Command-line Options** and add:

```
-Proot_path=<your path to parent directory of samples/directories>
```

:::caution
The path must be an absolute path, with no environment variables like `${REPO_ROOT}` and have a slash at the end. For example:

`/home/user/Downloads/sdk_native_samples_src/`
:::

1. Go to **Build > Select Build Variant...** and change the **Active Build Variant** table cell to **ml2Release** for release builds or **ml2Debug** for debug builds.

Alternatively, you can build both signed releases and debug APKs following these steps:

1. Go to **Build > Generate Signed Bundle / APK...**
2. Choose **APK**.
3. (Optional) If you do not have a certificate, generate a new one using **Key store path > Create new...**
4. Fill out fields with data from the certificate and click **Next**.
5. Choose the **build variants** that you want to build (“ml2Release”, “ml2Debug”, or both).
6. Click **Finish** to build.

## Generating Certificates for Signed Release APKs

For building signed release APKs, you need the following files in your *scripts/* directory:

- `keystore.properties`
- `mlsdk.keystore`

Your scripts directory won’t have these files, so you need to create them yourself.

1. `keystore.properties` has the following structure:

```
storePassword=<mlsdk.keystore password>
keyPassword=<key password>
keyAlias=<key alias>
storeFile=<path to mlsdk.keystore>
```

:::note
The `<path to mlsdk.keystore>` will be appended to the parent directory of `samples/` directories like so:
`/home/user/Downloads/sdk_native_samples_src/<path to mlsdk.keystore>`
:::

2. `mlsdk.keystore` file can be generated using either:

- **keytool command**, supplied by Java JDK installation
- Android Studio in **Build > Generate Signed Bundle / APK... > APK > Key store path > Create new...**

## Installing and Launching Apps via Command Line

```shell
adb install <path_to_apk>
adb shell am start -a android.intent.action.MAIN -n <app_package_name>/android.app.NativeActivity
```

To uninstall use this command:

```shell
adb uninstall <app_package_name>
```

For more ADB commands, reference the [ADB Commands Guide](/docs/guides/developer-tools/android-debug-bridge/adb-commands.md).

:::note
**App Simulator** is a tool that allows you to test your apps on your Windows PC or macOS without needing to build to the device. When you build apps for App Simulator, you must build them using the **App Simulator Launcher**. To learn more about App Simulator, check the [App Simulator Guide](/docs/guides/developer-tools/app-sim/app-simulator.md).
:::
