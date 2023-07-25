---
title: Install the Tools 
sidebar_position: 1
date: 9/9/2022
---

Get the tools you need to build applications for the Magic Leap 2 headset. The Magic Leap is built on top of the [Android Open Source Project](https://source.android.com/) (AOSP), Android 10 (Q) API level 29, whereas ML1 was built on top of a Linux-derived in-house OS.

## Install Magic Leap Hub

The Magic Leap Hub lets you install and manage Magic Leap tools including, the Magic Leap SDK for Native and Unity, example projects, and tools like MRTK for Magic Leap.

1. Navigate to the [download section](https://developer.magicleap.cloud/downloads) of the developer portal.
2. Download the Hub installer that is compatible with your operating system.
3. Run the installer and complete the setup wizard.

:::caution Windows users
Windows users should install redistributables from the [Microsoft Visual C++ Redistributable latest supported downloads page](https://docs.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170).

Download and install the relevant redistributable package for "Visual Studio 2015, 2017, 2019, and 2022." **The x64 version** is most-likely the version you need.

Failure to install this could cause unexpected failures with the ML Hub and/or the Application Simulator.
:::

4. Launch ML Hub and click **Package Manager**, located in the top right corner.

<Image url= {require("/img/ml-hub/ml_hub.png")} >The ML Hub Home Screen</Image>

5. On the left pane of Package Manager, select the package bundle you want to install. A list of packages is displayed in the right pane. Select any optional packages on the list.

:::tip

We recommend installing the Magic Leap Application Simulator (known in shorthand as "App Sim") and the sample packages.

:::

<Image url= {require("/img/ml-hub/ml_hub_packages_all.png")} >The ML Hub Package Manager "All" view</Image>

6. Click **Apply Changes** to begin installing.
7. After installation is complete, proceed to the next section.

## Next Steps

After installing the ML Hub, you are ready to set up your [preferred development environment](/docs/guides/getting-started/developer-environment.md).
