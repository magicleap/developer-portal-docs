---
id: unreal-create-app
title: Create an app using Unreal Engine 5
sidebar_position: 1
date: 08/30/2023
tags: [Android,Unreal Engine,Getting Started,Hello Cube]
keywords: [Android,Unreal Engine,Getting Started]

---

This guide shows you how to use Unreal Engine to create a simple OpenXR app for Magic Leap 2 devices.

## Prerequisites

You’ll need the preview version of Unreal Engine 5 with the Magic Leap 2 SDK for Unreal Engine 5 (ML2 Unreal SDK). We showed you how to build that in [Getting Started with Unreal Engine](/docs/guides/unreal/unreal-getting-started).

## Begin the project and configure default settings

1. Open the Unreal Editor. If you followed the instructions in [Getting Started with Unreal Engine](/docs/guides/unreal/unreal-getting-started), the executable file is located in the `UnrealEngine` folder at `\Engine\Binaries\Win64\UE5Editor.exe`.
2. In the project browser, choose **Games** as your development category. Choose **Blank** as your template.
3. Configure the project defaults:
    - Select **Blueprint** if you want to build your project in the Unreal Editor and use the Blueprint Visual Scripting system to create interactions and behavior.
    - Select **C++** if you want to build your project with C++ in Visual Studio.
    - Set **Mobile** as your target platform.
    - Set **Scalable** as your quality preset.
    - Make sure **Started Content** and **Raytracing** are unselected.

    <Image url= {require("/img/unreal/unreal-project-browser.png")} >Configure project defaults in the project browser</Image>

4. If you chose Blueprint as your implementation, click **Create**.

    If you chose C++ as your implementation, save, compile, and run the resulting project. For more information on compiling projects, see [Compiling Code Projects](https://docs.unrealengine.com/5.2/en-US/onboarding-guide-for-unreal-engine-games-licensees/) in the Unreal Engine 5 documentation.

    The Unreal Editor closes the project browser and opens the level editor.

## Create a level and add content to it

1. In the level editor, choose **File > New Level > Empty Level**. Click **Create**.

    <Image url= {require("/img/unreal/unreal-level-editor-create.png")} >Create a new level in the level editor</Image>

2. If you don’t see the Place Actors window, choose **Window > Place Actors**.
3. Click the lightbulb icon to see the list of lights. Drag a sky light into your level from the Lights menu.

    <Image url= {require("/img/unreal/unreal-lights-menu.png")} >Select a sky light from the Lights menu</Image>

4. In the Outliner, select the sky light instance that you just added. In the Details panel, set the source type to **SLS Specified Cubemap** and set the cubemap to **DaylightAmbientCube**.

    <Image url= {require("/img/unreal/unreal-set-light-details.png")} >Set the sky light's details in the Details panel</Image>

:::tip

If **DaylightAmbientCube** doesn’t appear in the drop-down menu, click the gear icon and check **Show Engine Content**.
:::

<Image url= {require("unreal-show-engine-content.png")} >Enable the Show Engine Content setting</Image>

5. In the Place Actors menu, click the cube icon to see the list of shapes. From the Shapes menu, drag the cube into your level.

    <Image url= {require("/img/unreal/unreal-shapes-menu.png")} >Select a cube from the Shapes menu</Image>

6. In the Outliner, select the cube instance that you just added. Set the cube’s location to 300, 0, 0 and its scale to 0.5, 0.5, 0.5. In the Details panel, click **+Add** to add a component. Add a **RotatingMovement** component.

    <Image url= {require("/img/unreal/unreal-add-rotatingmovement.png")} >Add a RotatingMovement component to the cube instances in the Details panel</Image>

7. In the Details panel, select the **StaticMeshComponent** of your cube instance and change its Mobility setting to **Movable**.

    <Image url= {require("/img/unreal/unreal-set-to-movement.png")} >Set the StaticMeshComponent to Movable in the Details panel</Image>

8. In the Place Actors menu, drag the player start into your level from the Basic menu. Set its location to 0, 0, 0.

    <Image url= {require("/img/unreal/unreal-basic-menu.png")} >Select a player from the Basic menu</Image>