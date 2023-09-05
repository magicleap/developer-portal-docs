---
id: configure-unity-settings
title: Configure Project Settings
sidebar_position: 3
date: 04/05/2023
tags: [Unity, Getting Started, Walkthroughs]
keywords: [Unity, Getting Started, Walkthroughs]
---

This topic describes how to configure the Unity Build Settings to utilize Magic Leap features.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

- [Download Magic Leap Unity SDK](/docs/guides/unity/getting-started/install-the-tools.md)
- [Unity project using Editor version 2022.2.0f1 or higher](/docs/guides/unity/getting-started/create-a-project.md)

## Quickstart

The fastest recommended way to set up your project for Magic Leap 2 development is to use the latest version of the [Magic Leap Setup Tool](https://assetstore.unity.com/packages/tools/integration/magic-leap-setup-tool-194780).


1. Download the [Magic Leap Setup Tool from the Unity Asset Store](https://assetstore.unity.com/packages/tools/integration/magic-leap-setup-tool-194780)
2. After adding it to your asset library, click the **Open in Unity** button to show the tool inside Unity's Package Manager.
3. Select **Download** then **Import** to import the tool into your project.

<Image url= {require("/img/unity/setup/setup-tool-package-manager.jpg")} >Unity's Package Manager window with the Import option highlighted</Image>

4. Keep all of the package contents selected in the **Import Unity Package** window and select **Import**.

<Image url= {require("/img/unity/setup/setup-tool-import-annotated.jpg")} >Import Assets window with the Import option highlighted</Image>

5. After the package is imported, you should see the Magic Leap Project Setup Tool popup window. If you do not see it, go to **Magic Leap > Project Setup Tool** in the Unity menu.

<Image url= {require("/img/unity/setup/setup-tool.jpg")} >Magic Leap Project Setup Tool window</Image>


1. The project setup tool will walk you through all of the steps necessary to complete setup. Start by setting the Magic Leap SDK  by selecting **Locate SDK**. Then select the folder containing the latest version of the Magic Leap Unity SDK.
2. After setting the SDK folder, you can select the **Apply All** button on the bottom of the window to quickly change all of the required settings.
3. After accepting all prompts and restarting the editor, your project will now be ready for Magic Leap 2 development.

:::info Configuring the SDK version

The Magic Leap Setup Tool will import the latest version of the Magic Leap core SDK compatible with your Unity Editor version. If your project requires an older version of the SDK, you can [assign the Magic Leap SDK path](#assign-magic-leap-sdk-path) manually.

Please reference the Magic Leap OS, SDK and Unity SDK [compatibility matrix](/docs/releases/overview.md#api-version-matrix) to determine which version is right for you.
:::

## Manual Setup

This section provides detailed steps on how to manually configure your Unity Project so that you can build and deploy applications for Magic Leap 2.

### Import Magic Leap Unity SDK

The Magic Leap SDK provides access to Magic Leap's perception and input API. The Magic Leap Unity SDK can be installed using the Unity Package Manager by importing the SDK from your computer or a scoped registry.

<Tabs>
  <TabItem value="from-disk" label="From Disk" default>

1. Open the Package Manager window ( **Window > Package Manager**).

2. Select the "**+**" (plus) button in the top-left corner, then **Add package from tarball**.

<Image url= {require("/img/unity/unity_add_tarball.png")} >Unity Editor Package From Disk Dialogue</Image>

3. Navigate to the location of the following folders and select the .tgz file within to add the package from `com.magicleap.unitysdk.tgz` (downloaded via [ML Hub](/docs/guides/getting-started/install-the-tools.md)). For example:

- Mac : `$HOME/MagicLeap/tools/unity/<Version>/com.magicleap.unitysdk.tgz`
- Windows : `%USERPROFILE%/MagicLeap/tools/unity/<Version>/com.magicleap.unitysdk.tgz`

<Image url= {require("/img/unity/unitysdk_package.png")} >Unity tarball file in a folder</Image>

<details>

<summary> You may see the following pop-ups appear:</summary>

- "This project is using the new input system package, but the native platform backends for the new input system are not enabled in the player settings. This means that no input from native devices will come through. Do you want to enable the backends? Doing so will *RESTART* the editor and will *DISABLE* the old UnityEngine.Input APIs."
  - Select **Yes**

- "This project may contain an obsolete method to validate interactions between XR Interactors and Interactables. This Update is only required for older projects updating the XR Interaction Toolkit package. If this package was newly installed, please cancel this operation. If you choose 'Go Ahead', Unity will update all Interactors and Interactables in Prefabs and scenes to use the new Interaction Layer instead of the Unity physics Layer.  You can always manually run the XR InteractionLayerMask Updater fro... (For the full error message, see the editor log file located at ...)"
  - Click **I Made a Backup, Go Ahead!**

</details>

  </TabItem>
  <TabItem value="registry" label="Scoped Registry">

1. Navigate to to the **Package Manager** settings by selecting **Edit > Project Settings** from the menu. Then choose **Package Manager**.
2. Select the **+** button at the bottom of the list. A new entry will appear as **New Scoped Registry** in the list.
3. Enter the following details into the **Scoped Registry**:

```json
Name : Magic Leap
URL : https://registry.npmjs.org
Scope : com.magicleap
```

4. Click **Apply**.

Now you will be able to view Magic Leap packages in the Package Manager. Follow the steps below to download and import the Magic Leap Unity SDK.

1. Open the Package Manger window (**Window > Package Manager**).
2. Click the **Packages** dropdown and select **My Registries**.
3. Find and select the Magic Leap SDK package from the list.
4. Finally select **Download** and then **Import**.

<details>

<summary> You can also add the registry by editing your project's /Packages/manifest.json file directly</summary>

1. Open the `manifest.json` file located in the `/Packages/` folder inside your project's root directory.
2. Add the following scoped registry

```json
"scopedRegistries": [
    {
      "url": "https://registry.npmjs.org", 
      "scopes": [
        "com.magicleap"
      ], 
      "name": "Magic Leap"
    }
  ]
```

:::info Reset to Default
At any time, you can fix any problems with your registry by choosing Reset packages to defaults from the main Unity **Help** menu. However, be aware that this action resets all changes you made to the dependencies of your project so it is best to do this as a last resort.
:::

</details>

</TabItem>
</Tabs>

### XR Plugin Management

The Magic Leap XR Provider needs to be enabled before using Magic Leap's platform features. To do this:  

1. Go to **File > Build Settings > Player Settings > XR Plug-in Management** and enable **Magic Leap** as a Plug-in Provider on the **Android** platform.

### Assign Magic Leap SDK Path

The Magic Leap SDK Path setting will only show once the Magic Leap XR package is imported. If the Magic Leap SDK path setting is not visible, make sure the `com.magicleap.sdk` and `com.unity.xr.magicleap` packages were imported correctly and that there are no errors in the [Unity Console](https://docs.unity3d.com/Manual/Console.html).

1. Open **Edit > Preferences** on Windows (or macOS: **Unity > Preferences**), then navigate to **External Tools > Magic Leap**.

- Set the MLSDK path to the Magic Leap SDK you downloaded from the ML Hub earlier. For example:
  - Mac: `$HOME/MagicLeap/mlsdk/<Version>/`
  - Windows: `%USERPROFILE%/MagicLeap/mlsdk/<Version>/`

2. In the same window, if the path to the Application Simulator Runtime does not get populated automatically, check the 'Override' box and select the path to the latest version of the App Simulator Runtime package. This location can be found by clicking the 'Open folder' link underneath the package's name inside ML Hub's Package manager.

:::note
To locate the Magic Leap C SDK, open the ML Hub application and go to **Package Manager> My Tools**, under **Common Packages** expand **Magic Leap C SDK** and select the **Open Folder** or **Open Shell**. Note the path in the file explorer or shell.
:::

### Custom Manifest

 This section provides instructions on how to create a custom manifest file and declare Magic Leap 2 specific permissions for your application. For more information, see the [Permissions Overview](/docs/guides/unity/permissions/declaring-permissions.md) guide.

:::info

 Editing your application's permissions through the Unity Editor Window is only available if you have a valid [MLSDK path](#assign-magic-leap-sdk-path) assigned the Unity Editor's Preferences Window.

:::

1. Enable a custom manifest in your project's settings by going to **Edit > Project Settings > Player**, then under **Publishing Settings** select **Custom Main Manifest**.
2. Go to **Edit > Project Settings > Magic Leap > Permissions** to enable permissions on various features. It is generally recommended to include any additional features based on your application's requirements.

### Player Settings

Under the **Edit > Project Settings > Player** section, make sure the **Android** tab is selected, then configure the following settings:

1. At the top, set the following identifiers:
      1. **Company Name** - the name of your company.
      2. **Product Name** - the name of your app or product *as you want it to appear on the in-device menu*.
2. Navigate to the **Other Settings** section  
3. Set the **Color Space** property to **Linear**. This enables more realistic rendering.    For more information, read Unity’s [gamma and linear color space workflow](https://docs.unity3d.com/Manual/LinearRendering-LinearOrGammaWorkflow.html) guide.
4. Disable **Auto Graphics API** and make sure the only **Graphics API** listed is **Vulkan**.
5. **(Optional)** Enable **Multithreaded Rendering**.
6. Set the **Texture Compression Format** is set to **DXT + RGTC(BC4, BC5)**.
7. Under **Identification**, set the **Minimum API Level** to 29.
8. Under **Configuration**, set the **Scripting Backend** to **IL2CPP**.
9. Also under **Configuration**, check the box next to the Target Architecture **x86-64 (Chrome OS and Magic Leap 2)** and set the **Target Devices** dropdown to **All Devices**.

### Build Settings

Build Settings let you set the target platform, configure build-related settings, and start the build process.

1. In the menu, go to **File** and select **Build Settings**.
2. Under **Platform**, select **Android**.
3. Click **Switch Platform**.
4. You are now ready to add scenes to the build order and build to the device!

### Validate Project Settings

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
