---
id: configure-unity-settings
title: Configure Project Settings
sidebar_position: 3
date: 06/27/2022
tags: [Unity, Getting Started, Walkthroughs]
keywords: [Unity, Getting Started, Walkthroughs]
---

This topic describes how to configure the Unity Build Settings to utilize Magic Leap features.

## Prerequisites

- [Download Magic Leap Unity SDK](/versioned_docs/version-22-Feb-2023/guides/unity/getting-started/install-the-tools.md)
- [Unity project using Editor version 2022.2.0b7 or higher](/versioned_docs/version-22-Feb-2023/guides/unity/getting-started/create-a-project.md)

## Import Magic Leap Unity SDK

The Magic Leap SDK provides access to Magic Leap's perception and input API. The Magic Leap Unity SDK can be imported using Unity's Package Manager.

1. Open the Package Manager window ( **Window > Package Manager**).

2. Select the "**+**" (plus) button in the top-left corner, then **Add package from tarball**.

![Unity Editor Package From Disk Dialogue](/img/unity/unity_add_tarball.png)

1. Navigate to the location of the following folders and select the .tgz file within to add the package from `com.magicleap.unitysdk.tgz` (downloaded via [ML Hub](/versioned_docs/version-22-Feb-2023/guides/getting-started/install-the-tools.md)). For example:

- Mac : `$HOME/MagicLeap/tools/unity/<Version>/com.magicleap.unitysdk.tgz`
- Windows : `%USERPROFILE%/MagicLeap/tools/unity/<Version>/com.magicleap.unitysdk.tgz`

![Unity tarball file in a folder](/img/unity/unitysdk_package.png)

<details> 

<summary> You may see the following pop-ups appear:</summary>

- "This project is using the new input system package, but the native platform backends for the new input system are not enabled in the player settings. This means that no input from native devices will come through. Do you want to enable the backends? Doing so will *RESTART* the editor and will *DISABLE* the old UnityEngine.Input APIs."
  - Select **Yes**

- "This project may contain an obsolete method to validate interactions between XR Interactors and Interactables. This Update is only required for older projects updating the XR Interaction Toolkit package. If this package was newly installed, please cancel this operation. If you choose 'Go Ahead', Unity will update all Interactors and Interactables in Prefabs and scenes to use the new Interaction Layer instead of the Unity physics Layer.  You can always manually run the XR InteractionLayerMask Updater fro... (For the full error message, see the editor log file located at ...)"
  - Click **I Made a Backup, Go Ahead!**

</details>

## XR Plugin Management

The Magic Leap XR Provider needs to be enabled before using Magic Leap's platform features. To do this:  

1. Go to **File > Build Settings > Player Settings > XR Plug-in Management** and enable **Magic Leap** as a Plug-in Provider on the **Android** platform.

## Custom Manifest

 This section provides instructions on how to create a custom manifest file and declare Magic Leap 2 specific permissions for your application. For more information, see the [Permissions Overview](/versioned_docs/version-22-Feb-2023/guides/unity/permissions/declaring-permissions.md) guide.

1. Enable a custom manifest in your project's settings by going to **Edit > Project Settings > Player**, then under **Publishing Settings** select **Custom Main Manifest**.
2. Go to **Edit > Project Settings > Magic Leap > Permissions** to enable permissions on various features. It is generally recommended to include any additional features based on your application's requirements.

## Player Settings

Under the **Edit > Project Settings > Player** section, make sure the Android tab is selected, then configure the following settings:

1. At the top, set the following identifiers:
      1. **Company Name** - the name of your company.
      2. **Product Name** - the name of your app or product *as you want it to appear on the in-device menu*.
2. Expand **Other Settings** then **Rendering**, and set the **Color Space** property to **Linear**. This enables more realistic rendering. For more information, read Unity’s [gamma and linear color space workflow](https://docs.unity3d.com/Manual/LinearRendering-LinearOrGammaWorkflow.html) guide.
3. Also under **Rendering**, disable **Auto Graphics API** and make sure the only **Graphics API** listed is **Vulkan**. Additionally, make sure the **Texture Compression Format** is set to **DXT**.
4. Under **Identification**, set the **Minimum API Level** to 29.
5. Under **Configuration**, set the **Scripting Backend** to **IL2CPP**.
6. Also under **Configuration**, check the box next to the Target Architecture **x86-64 (Chrome OS and Magic Leap 2)** and set the **Target Devices** dropdown to **All Devices**.

## Build Settings

Build Settings let you set the target platform, configure build-related settings, and start the build process.

1. In the menu, go to **File** and select **Build Settings**.
2. Under **Platform**, select **Android**.
3. Click **Switch Platform**.
4. You are now ready to add scenes to the build order and build to the device!

## Validate Project Settings

Developers can use Unity's Project Validation tool to validate that project's settings have been configured properly.

1. Open the Magic Leap Project validation window  (**Window > XR > Magic Leap > Project Validation**).
2. Verify that no issues are listed. If there is an issue, select **Fix All** in the top right of the Project Validation window.

:::info
This tool can be used to configure new projects in the future. Note, the validation tool does not check your project's [Manifest](#custom-manifest), [API level](#player-settings), or [XR Plugin Management settings](#xr-plugin-management).

:::

## Next Steps

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

<h3><Link to={useBaseUrl("/docs/guides/unity/getting-started/graphics-settings")}> Configure Render Pipeline Settings</Link> </h3>

After configuring your project's settings, learn how to create and optimize your project's rendering for Magic Leap 2.

