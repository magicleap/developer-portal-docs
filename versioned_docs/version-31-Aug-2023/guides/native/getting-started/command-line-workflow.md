---
id: command-line-workflow
title: Command Line Workflow
sidebar_position: 2
date: 06/23/2022
tags: [Android, Native, Getting Started, C-API, Magic Leap C SDK 0.52.2, Command Line]
keywords: [Android, Native, Getting Started, C-API, Magic Leap C SDK 0.52.2, Command Line]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

This section outlines the steps required to build Native applications (including sample applications) using a command line workflow for Magic Leap 2 devices and Application Simulator.

## Prerequisites

- Make sure you have properly installed everything listed in the [Setup Overview](/versioned_docs/version-31-Aug-2023/guides/native/getting-started/native-setup-overview.md), and have followed the [instructions](/versioned_docs/version-31-Aug-2023/guides/getting-started/install-the-tools.md) on downloading the ML Hub and the latest Magic Leap C SDK (MLSDK).
- Python3 is required to run the build scripts located in the Magic Leap Samples folder.
:::warning
The **MLSDK** must be installed into a path without spaces.
:::

- Additionally, make sure you have OpenJDK-11 installed. You can download it from the [Java Development Kit website](https://jdk.java.net/java-se-ri/11).
- Lastly, you must download the latest **C-API Samples** package from the **Package Manager** within **ML Hub**. On more information about the package manager, check the [Package Manager](/versioned_docs/version-31-Aug-2023/guides/developer-tools/ml-hub/ml-hub-package-manager.md) guide.

The instructions below assume that all the content has been extracted to the **{USER}** directory.

## Set up Environment Variables

After opening your preferred command line interface (CLI), you must set up the **environment variables** to point to the following folder locations. The directories in the code block below may be different for you depending on where you installed the tools.

- **ANDROID_HOME**: Points to the top level Android SDK folder.
- **MLSDK**: Points to the top level Magic Leap SDK folder.
- **JAVA_HOME**: Points to the top level Java Virtual Machine folder.

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

```shell
set ANDROID_HOME=%USERPROFILE%\AppData\Local\Android\sdk

set MLSDK=%USERPROFILE%\MagicLeap\mlsdk\<mlsdk_version>

set JAVA_HOME=%USERPROFILE%\jdk-11
```

  </TabItem>
 <TabItem value="mac" label="MacOS">

```shell
export ANDROID_HOME=~/Library/Android/sdk

export MLSDK=~/MagicLeap/mlsdk/<mlsdk_version>

export JAVA_HOME=$USER/jdk-11
```

:::note
The `JAVA_HOME` value may be different, verify its location by running

```shell
/usr/libexec/java_home
```

:::

 </TabItem>
</Tabs>

## Notes on Building

- All build.py scripts by default build for both device (aka ML2) and host (aka App Sim). If you only wish to build for host add `--build host`. If you only wish to build for device add `--build device`.
- All `build.py` scripts by default build release config only. If you only wish to build debug config use `--config debug`. If you wish to build both debug and release configs use `--config release debug`.
- For building a specific subset of applications please use the `--area/-a` parameter, e.x. for all apps use `-a allprojects`. To check all available subsets simply call `python3 build.py --help` and look for `--area` parameter explanation.
- When building apps make sure that the MLSDK environment variable is pointing to the SDK install location.
- All build.py scripts by default build both release and debug apps. If you only wish to build debug apps use `--config debug`. If you wish to build release apps `--config release`.
- Make sure that that `app_framework` and apps are built for the same config (debug vs release).

Python build scripts are available for the C-API samples as well as the application framework upon which they are built. To run a full clean build using any of the build scripts you can use the following command:

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

```shell
python build.py --clean 
```

:::info 

- By default `build.py` assumes that Visual Studio 2019 version 17 is used. To select a different compiler, Visual Studio 2017 for example, add `--msvc “Visual Studio 15 2017”` to the command line.
- Currently, the SDK supports Visual Studio up to version 17, 2019. If you are switching compilers make sure to do a full clean build by using the `--clean` parameter as shown below:

```shell
python build.py --clean --msvc "Visual Studio 17 2019"
```

:::

  </TabItem>
 <TabItem value="mac" label="MacOS">

```shell
python3 build.py --clean
```

 </TabItem>
</Tabs>

:::info
If you receive errors that the `Vulkan_LIBRARY` is missing, make sure you have the [Vulkan SDK](https://www.lunarg.com/vulkan-sdk/) installed on your machine.
:::

## Building the Application Framework

If you want to build applications that use the application framework, you must also build the **Application Framework**. In your CLI, change your working directory to the location of the app framework, usually under *{USER}/MagicLeap/samples/c_api/app_framework*. Then run the Python script found inside, *build.py*. Once compiled, the build script will collect all the build artifacts, headers, and CMake files in the output directory *build/install*.

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

```shell
cd %MLSDK%\samples\c_api\app_framework

python build.py --build device --config debug # build debug only for device
```

  </TabItem>
 <TabItem value="mac" label="MacOS">

```shell
cd $MLSDK/samples/c_api/app_framework

python3 build.py --build device --config debug # build debug only for device
```

 </TabItem>
</Tabs>

Then set the `MAGICLEAP_APP_FRAMEWORK_ROOT` **environment variable** to point to the top level App Framework install folder.

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

```shell
set MAGICLEAP_APP_FRAMEWORK_ROOT=%USERPROFILE%\MagicLeap\mlsdk\<mlsdk_folder_name>\samples\c_api\app_framework\build\install
```

  </TabItem>
 <TabItem value="mac" label="MacOS">

```shell
export MAGICLEAP_APP_FRAMEWORK_ROOT=$USER/MagicLeap/mlsdk/<mlsdk_folder_name>/samples/c_api/app_framework/build/install
```

 </TabItem>
</Tabs>

## Building the Sample Applications

You can either build all sample application APKs, or individual ones. To build all sample applications, change your working directory to the `/samples` directory, and run the `build.py` script inside.

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

```shell
cd %USERPROFILE%\MagicLeap\mlsdk\<mlsdk_folder_name>\samples\c_api\samples

python build.py --build device
```

  </TabItem>
 <TabItem value="mac" label="MacOS">

```shell
cd ${USER}/MagicLeap/mlsdk/<mlsdk_folder_name>/samples/c_api/samples

python3 build.py --build device
```

 </TabItem>
</Tabs>

## Building Individual projects

Individual projects from within the sample folder can be built using the `--project` option as shown below, using the *simple_gl_app* project as an example. Built apks can be found in *samples/out/sdk_device_samples/*.

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

```shell
cd %USERPROFILE%\MagicLeap\mlsdk\<mlsdk_folder_name>\samples\c_api\samples
python build.py --build device --project simple_gl_app #note: no trailing slash
```

  </TabItem>
 <TabItem value="mac" label="MacOS">

```shell
cd ${USER}/MagicLeap/mlsdk/<mlsdk_folder_name>/samples/c_api/samples
python3 build.py --build device --project simple_gl_app #note: no trailing slash
```

 </TabItem>
</Tabs>

Magic Leap 2 is an [AOSP](https://source.android.com/) device. Some of the sample applications have been converted and can be build individually using Gradle.

### Manually Building Individual Samples

Applications that have a file called `gradlew` in their top directory can be built using the following script. You can find the output APK in the *app/build/outputs/apk/ml2/* directory.

```shell
# For debug builds
gradlew assembleDebug
# For release builds
gradlew assembleRelease -Proot_path=<absolute path to parent directory of the samples, ending with a slash>
# For debug and release builds
gradlew build -Proot_path=<absolute path to parent directory of the samples, ending with a slash>
```

:::note
The `--Proot_path` parameter is needed for finding the certificates needed for signing release APKs.
:::

If you are experiencing problems with Gradle, you can delete your build directory:

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

```shell
./gradlew clean
./gradlew assembleDebug
```

  </TabItem>
 <TabItem value="mac" label="MacOS">

```shell
./gradlew clean
rm -rf app/.cxx
rm -rf app/build
./gradlew build
```

 </TabItem>
</Tabs>

You can find the output APK in the *app/build/outputs/apk/ml2/* directory.

:::note
**Application Simulator** is a tool that [allows you to run your apps](/versioned_docs/version-31-Aug-2023/guides/developer-tools/app-sim/using-app-sim#overview) on your Windows PC or macOS without needing to build for the device. When you build apps for Application Simulator, you must [launch them using the ZILauncher](/versioned_docs/version-31-Aug-2023/guides/developer-tools/app-sim/using-app-sim#launching-c-api-apps). To learn more about Application Simulator, check the [Application Simulator Guide](/versioned_docs/version-31-Aug-2023/guides/developer-tools/app-sim/app-simulator.md).
:::

