---
id: soundfield-plugin
title: Soundfield Plugin
sidebar_position: 0
description: Installation and usage of Soundfield Audio
date: 09/10/2022
tags: [Unity, Walkthroughs, Audio, MSA, Soundfield]
keywords: [Unity,Audio, MSA, Soundfield]
---

# Soundfield Plugin

Note that "Soundfield" is used interchangeably in the documentation with "MSA" (**M**agic Leap **S**patial **A**udio).

:::caution For Windows Users
**The binaries for Windows require that the Visual Studio Redistributable C++ libraries are installed**. If you do not have this installed, please see Microsoft's official documentation to install it, [here](https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170).
:::

## Soundfield Plugin Installation

### From the Magic Leap Hub

1. In the Unity Packages section of the ML Hub Package Manager, you will find the Soundfield package here:

![Soundfield install from Magic Leap Hub](/img/unity/soundfield-Install-from-the-magic-leap-hub.png)

2. Download the Soundfield package via the Package Manager. Its location can be accessed from the Open Folder link in the ML Hub's Package Manager:

![Soundfield open folder from Magic Leap Hub](/img/unity/soundfield-open-folder.png)

![Soundfield install from Magic Leap Hub](/img/unity/soundfield-Install-from-the-magic-leap-hub-2.png)

3. Add this package from Unity's own Package Manager as a local file:

![Soundfield install from Magic Leap Hub](/img/unity/soundfield-Install-from-the-magic-leap-hub-3.png)

4. Select the **package.json** file in the folder you have previously downloaded (shown as an example in a screenshot above).

The plugin will now be ready to use in Unity:

![Soundfield install from Magic Leap Hub](/img/unity/soundfield-Install-from-the-magic-leap-hub-4.png)

### Update an Existing Installation

After updating the Soundfield plugin, if any unexpected/undesirable behaviors occur, it may be necessary to reset the Soundfield components. On simple objects, this can be accomplished with the three-dot menu in the Unity Inspector window for the Soundfield component.

Click the three-dot menu icon, then click on "Reset for various Soundfield components."

:::note
The reset should be performed on the `MLListener` component that is co-located with the Unity `AudioListener`, as well as the `MLPointSource` component.
:::

![updating existing Soundfield version](/img/unity/Soundfield-update-existing-version.png)

For prefab components, the process of resetting the Soundfield component is the same, which can be accomplishedd by opening the prefab from Unity's Project window, then selecting it and clicking "Open" in the inspector window, as those changes should be applied to all objects in the project using that prefab.

:::caution Don't forget
Whether updating from local disk as with the ML Hub, or from a package repository such as UPM (Unity Package Manager) or NPM (Nexus Package Manager), the Unity project must be restarted before Soundfield will be able to properly use updated files.
:::

## Editor Gizmos

In the editor, the MSA Gizmos are selectable from the "Gizmos" menu:

![ML Point Source component settings](/img/unity/editor-gizmos.png)

When a Soundfield Gizmo is selected, any GameObject that is selected in the project hierarchy will draw the relevant information in the Scene view.

![ML Point Source component settings](/img/unity/editor-gizmos-2.png)

More details on the way Gizmos behave in the editor can be found in the Unity documentation page [here](https://docs.unity3d.com/Manual/GizmosMenu.html).

### Runtime Gizmos

The Soundfield package provides a `RuntimeGizmos` component that allows developers to choose which Gizmos to make visible at runtime, on the device.

![ML Point Source component settings](/img/unity/runtime-gizmos.png)

When a Gizmo is selected, all the GameObjects with the ML component will be rendered.

### MLPointSource Gizmo Types

Depending on the radiation properties, the point source Gizmo changes to indicate the current selection.

#### Full radiation

![ML Point Source component settings](/img/unity/mlpoint-source-gizmo-types.png)

#### Billboarding is enabled

![ML Point Source component settings](/img/unity/mlpoint-source-gizmo-types-2.png)

#### Omnidirectional is enabled

![ML Point Source component settings](/img/unity/mlpoint-source-gizmo-types-3.png)

## Sample Scene

We will use a Camera, an `MLListener`, a source, and an obstruction.

![Creating a sample scene](/img/unity/soundfield-sample-scene.png)

The camera object will have the `MLListener` component. We also use `AudioListener` as a base class.

:::caution
Only one `MLListener` should be used per Scene.
:::

For more information, see the [Soundfield Components page](/versioned_docs/version-1.1.0-dev2/guides/unity/soundfield-audio/soundfield-components.md).

![Creating a sample scene](/img/unity/soundfield-sample-scene-2.png)

For the source, using our Leaper, remember we use `AudioSource` as a base class, so some things will be done there, like selecting an audio clip:

![Creating a sample scene](/img/unity/soundfield-sample-scene-3.png)

For the obstacle, you can inherit the geometric primitive from the visuals by default. **As long as it has a collider, it can obstruct sounds.**

:::note
Any 3D object with a collider can obstruct sound. If you would like only *some* of your objects to obstruct, **you can create a layer named "MLAudioObstruction" and only the objects within that layer will be considered.**
:::

:::caution
Layers 0-7 in Unity were formerly restricted and should **not** be used for obstructions. They may work in some cases, but this is not supported. See the [Unity TagManager docs](https://docs.unity3d.com/Manual/class-TagManager.html) for details.
:::
