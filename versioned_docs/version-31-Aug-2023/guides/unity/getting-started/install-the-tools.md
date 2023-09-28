---
id: install-the-tools
title: Install the Tools
sidebar_position: 0
date: 08/29/2022
tags: [Unity, Getting Started, Walkthroughs, Android]
keywords: [Unity, Getting Started, Walkthroughs, Android]
---


This section provides information on how to install and configure the Unity Editor required to develop for Magic Leap 2.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

- Installed the [ML Hub](/versioned_docs/version-31-Aug-2023/guides/getting-started/install-the-tools.md)
- Installed [Unity Hub](https://unity3d.com/get-unity/download)

## Install Magic Leap SDK & Tools

We'll use the [ML Hub](/versioned_docs/version-31-Aug-2023/guides/getting-started/install-the-tools.md) to install and manage the Magic Leap Unity Package, the Unity SDK Examples Project, and other tools.

### Open the ML Hub Package Manager

To access the Package Manager in the ML Hub:

1. Open the **ML Hub**.
2. Select **Package Manager** from the home screen.

### Downloading the Unity Bundle

To download the Unity Magic Leap Examples Project from the bundle section:

1. Select the **Unity - 3D Creation Bundle**.
2. Next, select any additional package. We recommend that you include all the additional packages listed in the Change Summary section.
3. Click **Apply Changes**.

<Image url= {require("/img/ml-hub/unity_bundle.png")} >ML Hub Package Manager with the Unity packages highlighted</Image>

## Install Unity Editor

This section describes the process of installing the Magic Leap 2 compatible Unity Editor. Developers are able to develop Magic Leap 2 applications with any Unity Editor version **2022.2.0f1 or higher**.

1. Open the Unity Hub application
2. Select the Installs
3. Then click the Install Editor button.
4. With the Install Unity Editor window open.
5. Select a Unity Editor version **2022.2.0f1 or higher**.
6. In the modules screen select  **Android Build Support**, then **Android SDK & NDK Tools**, and **OpenJDK**.
7. Select the **Continue** button.

<Image url= {require("/img/unity/Unity_Install_Modules.png")} >Unity Hub - Install Window</Image>

## Magic Leap Hub Interaction

The following instructions only need to be performed if you are experiencing issues connecting and deploying to your device. Device communication can be incorrectly terminated when conflicting versions of ADB are being used. To correct this, you can set the Magic Leap Hub's ADB installation path to the one used by the Unity Editor.

1. Open the Magic Leap Hub.
2. Open the  Magic Leap Hub's Developer Settings ( **Home > Settings > Magic Leap Hub > Developer**)
3. Select **Use custom adb** and set the path to the Android Tools used by Unity.

If you are unsure which SDK path is used by your Unity installation, you can view the Android SDK path used by the Unity Editor inside Unity's Preferences Window.

1. In Unity, select **Edit > Preferences** (macOS: **Unity > Preferences**).
2. In the left navigation column, select **External Tools**. The Android section of the External Tools panel contains entries for **JDK**, **SDK**, **NDK**, **Gradle**.
3. Copy the **SDK** path, then set the custom **adb** path inside the Magic Leap Hub to this location. Note, the **adb** service will be located in the SDK's `platform-tools` directory

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">

```bash
C:\Program Files\Unity\Hub\Editor\[EditorVersion]\Editor\Data\PlaybackEngines\AndroidPlayer\SDK
```

</TabItem>
  <TabItem value="mac" label="MacOS">

```bash
/Applications/Unity/Hub/Editor/[EditorVersion]/Editor/Data/PlaybackEngines/AndroidPlayer/
```

</TabItem>
</Tabs>

4. Finally, disable the **Kill ADB server on exit**, unless you need this behavior. By default, the preference is active, which can cause disruptions when using the Magic Leap Simulator.

## Next Steps

import Link from '@docusaurus/Link';

<h3><Link to="/docs/guides/unity/getting-started/create-a-project"> Create a Unity Project</Link> </h3>

Learn which version of Unity and the project template to use when creating a new Magic Leap 2 application.

<h3><Link to="/docs/guides/unity/sdk-example-scenes/sdk-install-setup"> Unity Examples Project</Link> </h3>

After successfully creating a new application, check out the pre-configured Magic Leap Unity Examples Project to see some of Magic Leap's unique platform features.

<h3><Link to="/docs/guides/unity/app-simulator/unity-app-simulator"> Magic Leap App Simulator</Link> </h3>

The Magic Leap App Simulator can be used to test applications much faster, without deploying them to the physical device. See our Magic Leap App Simulator for Unity section to learn how to configure your unity settings to run applications in the Simulator.

