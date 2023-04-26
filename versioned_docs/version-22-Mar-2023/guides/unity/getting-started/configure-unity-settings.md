---
id: configure-unity-settings
title: Configure Project Settings
sidebar_position: 3
date: 04/05/2023
tags: [Unity, Getting Started, Walkthroughs]
keywords: [Unity, Getting Started, Walkthroughs]
---

This topic describes how to configure the Unity Build Settings to utilize Magic Leap features.

## Prerequisites

- [Download Magic Leap Unity SDK](/versioned_docs/version-22-Mar-2023/guides/unity/getting-started/install-the-tools.md)
- [Unity project using Editor version 2022.2.0b7 or higher](/versioned_docs/version-22-Mar-2023/guides/unity/getting-started/create-a-project.md)
- [Download the Magic Leap Setup Tool from the Unity Asset Store](https://assetstore.unity.com/packages/tools/integration/magic-leap-setup-tool-194780)

## Quickstart

The fastest recommended way to set up your project for Magic Leap 2 development is to use the latest version of the [Magic Leap Setup Tool](https://assetstore.unity.com/packages/tools/integration/magic-leap-setup-tool-194780).

1. After adding it to your asset library, click the **Open in Unity** button.
2. This will bring up the tool inside the Package Manager window in the Unity Editor. Click **Import** in the upper right corner of the window next to the package name to import the tool into your project.
![Package Manager window](/img/unity/setup/setup-tool-package-manager.jpg)
3. Keep all of the package contents selected in the following popup window and click **Import** one more time.
![Import settings window](/img/unity/setup/setup-tool-import.jpg)
4. After the package is imported, you should see the Magic Leap Project Setup Tool popup window. If you do not see it, go to **Magic Leap > Project Setup Tool** in the Unity menu.
![Magic Leap Project Setup Tool popup window](/img/unity/setup/setup-tool-window.jpg)
5. The project setup tool will walk you through all of the steps necessary to complete setup, starting with setting the Magic Leap SDK folder. Click **Change** and select the folder containing the latest version of the Magic Leap Unity SDK.
6. After setting the SDK folder, click the **Apply All** button on the bottom of the window to quickly change all of the required settings.

After accepting all prompts and restarting the editor, your project will now be ready for Magic Leap 2 development.

:::note

The Magic Leap Setup Tool will import the latest version of the Magic Leap core SDK compatible with your Unity Editor version. If your project necessitates an older version of the SDK, you can [assign the Magic Leap SDK path](#assign-magic-leap-sdk-path) manually.

Please reference the Magic Leap OS, SDK and Unity SDK [compatibility matrix](/versioned_docs/version-22-Mar-2023/releases/version-matrix.md) to determine which version is right for you.
:::

## Manual Setup

### Import Magic Leap Unity SDK

The Magic Leap SDK provides access to Magic Leap's perception and input API. The Magic Leap Unity SDK can be imported using Unity's Package Manager.

1. Open the Package Manager window ( **Window > Package Manager**).

2. Select the "**+**" (plus) button in the top-left corner, then **Add package from tarball**.

![Unity Editor Package From Disk Dialogue](/img/unity/unity_add_tarball.png)

1. Navigate to the location of the following folders and select the .tgz file within to add the package from `com.magicleap.unitysdk.tgz` (downloaded via [ML Hub](/versioned_docs/version-22-Mar-2023/guides/getting-started/install-the-tools.md)). For example:

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

### Adding a Custom Scoped Registry (Optional)

Scoped Registries allow Unity to communicate the location of any custom package registry server to the **Package Manager** to access to several collections of packages at the same time. you can either edit your project manifest file directly or use the **Package Manager**'s **Project Settings** window to let Unity modify the manifest for you.

#### Using the Package Manger Settings

Navigate to to the **Package Manager** settings by selecting Edit > Project Settings from the menu. Then choose the Package Manager category.

Select the <kbd>+</kbd> button at the bottom of the list. A new entry will appear as New Scoped Registry in the list.

Enter the following details into the Scooped Registry:

```plaintext
Name : Magic Leap
URL : https://registry.npmjs.org
Scope : com.magicleap
```

Click <kbd>Apply</kbd>.

#### Editing the Project Manifest File

Open the `manifest.json` file located in the `Packages/` folder under the root folder of your Unity project.

:::info Reset to Default
At any time, you can fix any problems with your registry by choosing Reset packages to defaults from the main Unity **Help** menu. However, be aware that this action resets all changes you made to the dependencies of your project so it is best to do this as a last resort.
:::

Add the following Scoped registry:

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

Your relevant packages will have their versions checked automatically in the **Package Manager** now.

## XR Plugin Management

The Magic Leap XR Provider needs to be enabled before using Magic Leap's platform features. To do this:  

1. Go to **File > Build Settings > Player Settings > XR Plug-in Management** and enable **Magic Leap** as a Plug-in Provider on the **Android** platform.

## Assign Magic Leap SDK Path

The Magic Leap SDK Path setting will only show once the Magic Leap XR package is imported. If the Magic Leap SDK path setting is not visible, make sure that the `com.magicleap.xr` package was correctly imported.

1. Open **Edit > Preferences** on Windows (or macOS: **Unity > Preferences**), then navigate to **External Tools > Magic Leap**.

- Set the MLSDK path to the Magic Leap SDK you downloaded from the ML Hub earlier. For example:
  - Mac: `$HOME/MagicLeap/mlsdk/<Version>/`
  - Windows: `%USERPROFILE%/MagicLeap/mlsdk/<Version>/`

2. In the same window, if the path to the Application Simulator Runtime does not get populated automatically, check the 'Override' box and select the path to the latest version of the App Simulator Runtime package. This location can be found by clicking the 'Open folder' link underneath the package's name inside ML Hub's Package manager.

:::note
To locate the Magic Leap C SDK, open the ML Hub application and go to **Package Manager> My Tools**, under **Common Packages** expand **Magic Leap C SDK** and select the **Open Folder** or **Open Shell**. Note the path in the file explorer or shell.
:::

## Custom Manifest

 This section provides instructions on how to create a custom manifest file and declare Magic Leap 2 specific permissions for your application. For more information, see the [Permissions Overview](/versioned_docs/version-22-Mar-2023/guides/unity/permissions/declaring-permissions.md) guide.

 :::info
 Editing your application's permissions through the Unity Editor Window is only available if you have a valid [MLSDK path](#assign-magic-leap-sdk-path) assigned the Unity Editor's Preferences Window.
 :::

1. Enable a custom manifest in your project's settings by going to **Edit > Project Settings > Player**, then under **Publishing Settings** select **Custom Main Manifest**.
2. Go to **Edit > Project Settings > Magic Leap > Permissions** to enable permissions on various features. It is generally recommended to include any additional features based on your application's requirements.

### Player Settings

Under the **Edit > Project Settings > Player** section, make sure the Android tab is selected, then configure the following settings:

1. At the top, set the following identifiers:
      1. **Company Name** - the name of your company.
      2. **Product Name** - the name of your app or product *as you want it to appear on the in-device menu*.
2. Expand **Other Settings** then **Rendering**, and set the **Color Space** property to **Linear**. This enables more realistic rendering. For more information, read Unity’s [gamma and linear color space workflow](https://docs.unity3d.com/Manual/LinearRendering-LinearOrGammaWorkflow.html) guide.
3. Also under **Rendering**, disable **Auto Graphics API** and make sure the only **Graphics API** listed is **Vulkan**. Additionally, make sure the **Texture Compression Format** is set to **DXT**.
4. Under **Identification**, set the **Minimum API Level** to 29.
5. Under **Configuration**, set the **Scripting Backend** to **IL2CPP**.
6. Also under **Configuration**, check the box next to the Target Architecture **x86-64 (Chrome OS and Magic Leap 2)** and set the **Target Devices** dropdown to **All Devices**.

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

### Next Steps

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

<h3><Link to={useBaseUrl("/docs/guides/unity/getting-started/graphics-settings")}> Configure Render Pipeline Settings</Link> </h3>

After configuring your project's settings, learn how to create and optimize your project's rendering for Magic Leap 2.

