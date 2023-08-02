---
id: soundfield-plugin
title: Soundfield
sidebar_position: 0
description: Soundfield Plugin Overview
date: 02/03/2023
tags: [Unity, Walkthroughs, Audio, MSA, Soundfield, Audio Toolkit]
keywords: [Unity,Audio, MSA, Soundfield, Audio Toolkit]
---

# Soundfield Plugin for Unity

:::note
**Soundfield** is used interchangeably with **Magic Leap Spatial Audio (MSA)**.
:::

:::caution For Windows Users

**The binaries for Windows require that the Visual Studio Redistributable C++ libraries are installed**. If the computer is new or Unity shows errors about loading the Soundfield plugin in Unity, you may need to install the runtime libraries.

[Direct Install Link (Windows)](https://aka.ms/vs/17/release/vc_redist.x64.exe)

For more information, please see Microsoft's official documentation [here](https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170).
:::

## Soundfield Plugin Installation

### From the Magic Leap Hub

1. In the Unity Packages section of the ML Hub Package Manager, you will find the Unity Soundfield package here:

<Image url= {require("/img/unity/soundfield-Install-from-the-magic-leap-hub.png")} >Unity Soundfield install from Magic Leap Hub</Image>

2. Download the Unity Soundfield package via the Package Manager. Its location can be accessed from the **Open Folder** link in the ML Hub's Package Manager:

<Image url= {require("/img/unity/soundfield-open-folder.png")} >Unity Soundfield open folder from Magic Leap Hub</Image>

<Image url= {require("/img/unity/soundfield-path.jpg")} >Unity Soundfield install from Magic Leap Hub</Image>

3. Add this package from Unity's own Package Manager as a local file:

<Image url= {require("/img/unity/soundfield-Install-from-the-magic-leap-hub-3.png")} >Unity Soundfield install from Magic Leap Hub</Image>

4. Select the **package.json** file in the folder you have previously downloaded (shown as an example in a screenshot above).

The plugin will now be ready to use in Unity:

<Image url= {require("/img/unity/soundfield-Install-from-the-magic-leap-hub-4.png")} >Unity Soundfield install from Magic Leap Hub</Image>

### Update an Existing Installation

After updating the Soundfield plugin, if any unexpected/undesirable behaviors occur, it may be necessary to reset the Soundfield components. On simple objects, this can be accomplished with the three-dot menu in the Unity Inspector window for the Soundfield component.

1. For each Soundfield component that needs to be reset, click the three-dot menu icon next its name in the Inspector window, then click **Reset**.

:::note
The reset should be performed on the `MLListener` component that is co-located with the Unity `AudioListener`, as well as the `MLPointSource` component.
:::

<Image url= {require("/img/unity/Soundfield-update-existing-version.png")} >Updating existing Soundfield version</Image>

Resetting the Soundfield component in a prefab can be accomplished through the same process:

1. Select the prefab in the Unity project window and click **Open** in the Inspector window.
2. Reset each Soundfield component using the steps described above. The changes made inside the prefab will then be applied to all objects in the project using that prefab.

:::caution Don't Forget:
Whether updating from local disk as with the ML Hub, or from a package repository such as UPM (Unity Package Manager), the Unity project **must be restarted** before Soundfield will be able to properly use updated files.
:::

## Editor Gizmos

In the editor, the Soundfield Gizmos are selectable from the "Gizmos" menu:

<Image url= {require("/img/unity/editor-gizmos.png")} >ML Point Source component settings</Image>

When a Soundfield Gizmo is selected, any GameObject that is selected in the project hierarchy will draw the relevant information in the Scene view.

<Image url= {require("/img/unity/editor-gizmos-2.png")} >ML Point Source component settings</Image>

More details on the way Gizmos behave in the editor can be found in the Unity documentation page [here](https://docs.unity3d.com/Manual/GizmosMenu.html).

### Runtime Gizmos

The Soundfield package provides a `RuntimeGizmos` component that allows developers to choose which Gizmos to make visible at runtime, on the device.

<Image url= {require("/img/unity/runtime-gizmos.png")} >ML Point Source component settings</Image>

When a Gizmo is selected, all the GameObjects with the ML component will be rendered.

### MLPointSource Gizmo Types

Depending on the radiation properties, the point source Gizmo changes to indicate the current selection.

#### Full radiation

<Image url= {require("/img/unity/mlpoint-source-gizmo-types.png")} >ML Point Source component settings</Image>

#### Billboarding is enabled

<Image url= {require("/img/unity/mlpoint-source-gizmo-types-2.png")} >ML Point Source component settings</Image>

#### Omnidirectional is enabled

<Image url= {require("/img/unity/mlpoint-source-gizmo-types-3.png")} >ML Point Source component settings</Image>

## Sample Scene

We will use a Camera, an `MLListener`, a source, and an obstruction.

<Image url= {require("/img/unity/soundfield-sample-scene.png")} >Creating a sample scene</Image>

The camera object will have the `MLListener` component. We also use `AudioListener` as a base class.

:::caution
Only one `MLListener` should be used per Scene.
:::

For more information, see the [Soundfield Components page](/docs/guides/unity/soundfield-audio/soundfield-components.md).

<Image url= {require("/img/unity/soundfield-sample-scene-2.png")} >Creating a sample scene</Image>

For the source, using our Leaper, remember we use `AudioSource` as a base class, so some things will be done there, like selecting an audio clip:

<Image url= {require("/img/unity/soundfield-sample-scene-3.png")} >Creating a sample scene</Image>

For the obstacle, you can inherit the geometric primitive from the visuals by default. **As long as it has a collider, it can obstruct sounds.**

:::note
Any 3D object with a collider can obstruct sound. If you would like only *some* of your objects to obstruct, **you can create a layer named "MLAudioObstruction" and only the objects within that layer will be considered.**
:::

:::caution
Layers 0-7 in Unity were formerly restricted and should **not** be used for obstructions. They may work in some cases, but this is not supported. See the [Unity TagManager docs](https://docs.unity3d.com/Manual/class-TagManager.html) for details.
:::

## Project Audio Settings

:::note
If the **DSP Buffer Size** property is changed either in editor play mode or at runtime it will cause Unity to stop all the currently playing audio sources. The only way for them to recover will be to start them manually.
:::

## Trouble Shooting

When running a project, if an error similar to the below appears in the Unity error console, additional runtimes ("Workloads") may need to be installed, supplied by Microsoft:

```plaintext
Plugins: Failed to load 'C:/AppDirectory/Library/PackageCache/com.magicleap.soundfield@3.4.0-230405.66.cf20c31/Plugins/x86_64/AudioPluginMSASpatializer.dll' because one or more of its dependencies could not be loaded.
```

[Microsoft Visual C++ Redistributable latest supported downloads](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170).
