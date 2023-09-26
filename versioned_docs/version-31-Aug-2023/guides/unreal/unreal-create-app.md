---
id: unreal-create-app
title: Create an app using Unreal Engine 5
sidebar_position: 2
date: 08/31/2023
tags: [Unreal Engine,Getting Started,Hello Cube]
keywords: [Unreal Engine,Getting Started]

---

This guide shows you how to use Unreal Engine to create a simple OpenXR app for Magic Leap 2 devices.

## Prerequisites

You’ll need the preview version of Unreal Engine 5 with the Magic Leap 2 SDK for Unreal Engine 5. We showed you how to build that in [Getting Started with Unreal Engine](/versioned_docs/version-31-Aug-2023/guides/unreal/unreal-getting-started).

## Begin the project and configure default settings

1. Open the Unreal Editor. If you followed the instructions in [Getting Started with Unreal Engine](/versioned_docs/version-31-Aug-2023/guides/unreal/unreal-getting-started), the executable file is located in the `UnrealEngine` folder at `\Engine\Binaries\Win64\UE5Editor.exe`.
2. In the project browser, choose **Games** as your development category. Choose **Blank** as your template.
3. Configure the project defaults:
    - Select **Blueprint** if you want to build your project in the Unreal Editor and use the Blueprint Visual Scripting system to create interactions and behavior.
    - Select **C++** if you want to build your project with C++ in Visual Studio.
    - Set **Mobile** as your target platform.
    - Set **Scalable** as your quality preset.
    - Make sure **Started Content** and **Raytracing** are unselected.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-project-browser.png")} >Configure project defaults in the project browser</Image>

4. If you chose Blueprint as your implementation, click **Create**.

    If you chose C++ as your implementation, save, compile, and run the resulting project. For more information on compiling projects, see [Compiling Code Projects](https://docs.unrealengine.com/5.2/en-US/onboarding-guide-for-unreal-engine-games-licensees/) in the Unreal Engine 5 documentation.

    The Unreal Editor closes the project browser and opens the level editor.

## Create a level and add content to it

1. In the level editor, choose **File > New Level > Empty Level**. Click **Create**.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-level-editor-create.png")} >Create a new level in the level editor</Image>

2. If you don’t see the Place Actors window, choose **Window > Place Actors**.
3. Click the lightbulb icon to see the list of lights. Drag a sky light into your level from the Lights menu.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-lights-menu.png")} >Select a sky light from the Lights menu</Image>

4. In the Outliner, select the sky light instance that you just added. In the Details panel, set the source type to **SLS Specified Cubemap** and set the cubemap to **DaylightAmbientCube**.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-set-light-details.png")} >Set the sky light's details in the Details panel</Image>

:::tip
If **DaylightAmbientCube** doesn’t appear in the drop-down menu, click the gear icon and check **Show Engine Content**.
:::

<Image url= {require("/img/unreal-5/previewdocs/unreal-show-engine-content.png")} >Enable the Show Engine Content setting</Image>

5. In the Place Actors menu, click the cube icon to see the list of shapes. From the Shapes menu, drag the cube into your level.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-shapes-menu.png")} >Select a cube from the Shapes menu</Image>

6. In the Outliner, select the cube instance that you just added. Set the cube’s location to 300, 0, 0 and its scale to 0.5, 0.5, 0.5. In the Details panel, click **+Add** to add a component. Add a **RotatingMovement** component.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-add-rotatingmovement.png")} >Add a RotatingMovement component to the cube instances in the Details panel</Image>

7. In the Details panel, select the **StaticMeshComponent** of your cube instance and change its Mobility setting to **Movable**.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-set-to-movable.png")} >Set the StaticMeshComponent to Movable in the Details panel</Image>

8. In the Place Actors menu, drag the player start into your level from the Basic menu. Set its location to 0, 0, 0.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-basic-menu.png")} >Select a player from the Basic menu</Image>

## Save the project map and create blueprints

1. In the project browser, choose **File > Save Current Level As**. Give your map a name. For example, **MyHelloCube**.

2. Click the **Content Drawer** button to open the Content Drawer.

3. Right-click the Content panel. In the Create Basic Asset menu that appears, select **Blueprint Class > Pawn**. Name the blueprint **XrPawn**. With **XrPawn** selected, press CTRL+S to save.

4. Right-click the Content panel. In the Create Basic Asset menu that appears, select **Blueprint Class > GameModeBase**. Name the blueprint **XrGameMode**. With **XrGameMode** selected, press CTRL+S to save.

## Add a camera

1. Double-click the **XrGameMode** blueprint you created and saved. The Unreal Editor opens the asset either as data or in the full Blueprint editor.

2. In the Details panel, under Classes, set the Default Pawn Class to **XrPawn**. Compile, save, and close the **XrPawn** blueprint. You can compile and save from the File menu or the main toolbar.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-set-pawn-class.png")} >Set the default pawn class in the Classes menu</Image>

3. In the Content panel, double-click the **XrPawn** blueprint. This opens the full blueprint editor.

4. In the Components tab of the blueprint editor, select **DefaultSceneRoot**. Click **+Add** and add a Camera component.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-add-camera.png")} >Add a camera in the Components panel</Image>

5. With the Camera component selected, click **+Add** again and add a Capsule Collision component.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-add-capsule-collision.png")} >Add a capsule collison to the camera component in the Components panel</Image>

    You hierarchy should now look like this:
    <Image url= {require("/img/unreal-5/previewdocs/unreal-hierarchy-with-capsule-collision.png")} >Your hierarchy  in the Components panel</Image>

6. With the capsule selected, in the Properties panel:

    - Set the capsule Z to -60
    - Set the half height to 85
    - Set the radius to 22

7. Compile, save, and close the XrPawn blueprint.

8. Click the Play In Editor button to make sure that everything in the scene is set up correctly. You should see the lit, white-textured cube spinning 3 meters in front of your spawn point.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-cube-play-in-editor.png")} >This is what your app should look like in Play in Editor</Image>

9. Stop the Play in Editor before you continue.

## Configure project settings and package the project

1. In the Unreal Editor main menu, select **Edit > Project Settings**.

2. In the project settings window, go to **Maps & Modes**. Under Default Maps, set **Editor Startup Map** and **Game Default Map** to the project map that you created.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-set-default-maps.png")} >Set the default maps setting for your project in Project Settings</Image>

3. Under Default Modes, set Default GameMode to **XrGameMode**, the game mode base blueprint you created.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-set-game-mode-base.png")} >Set the game mode base in Project Settings</Image>

4. From the main Unreal Editor menu, select **Edit > Plugins**. The plugins menu opens. Select **Augmented Reality**.

5. Under Augmented Reality:

    a. Disable the **Magic Leap** plugin, if it is enabled. If you see a message saying other plugins have to be enabled, click **Yes** to disable those plugins.

    b. Enable **Magic Leap OpenXR** if it is not enabled.

    c. If you made changes, you’ll be prompted to restart the Unreal Editor. You can make both changes before restarting. Click **Restart Now** to restart the Unreal Editor if prompted.

    d. Close the plugins window.

6. In the Unreal Editor main menu, select **Edit > Project Settings**. In the Project - Description list, go to Settings. Select **Start in VR**.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-enable-start-vr.png")} >Enable Start VR in Project Settings</Image>

7. Under Project Settings, go to Platforms and select **Android**. Under Android, go to APK Packaging. Click the **Configure Now** button in the red box.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-configure-now-android.png")} >Configure your project for the Android platform in Project Settings</Image>

    The red box turns green.

8. Under APK Packaging, select **Package game data inside .apk**.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-set-apk-packaging.png")} >Set .apk packaging in Project Settings</Image>

9. Under Android, go to **Build**. Under Build, set these options:
    - Deselect **Support arm64 [aka arm64-v8a]**.
    - Select **Support x86_64 [aka x64]**.
    - Deselect **OpenGL ES3.2**.
    - Select **Support Vulkan**.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-set-build-options.png")} >Set build options in Project Settings</Image>

10. Under Android, go to **Launch Images**. Under Launch Images, deselect **Show launch image**.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-deselect-launch-image.png")} >Disable showing launch image in Project Settings</Image>

11. Under Android, go to **Multi Texture Formats**. Under Multi Texture Formats, set these options:
    - Deselect **Include ETC2 textures**.
    - Select **Include DXT textures**.
    - Deselect **Include ASTC textures**.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-set-multi-texture-formats.png")} >Set multi-texture formats in Project Settings</Image>

12. Close the project setting window.

## Build the package

1. In the Unreal Editor main toolbar, select **Platforms > Android**. Select **Android (DXT)**.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-set-build-platform.png")} >Set the build platform to Android (DXT)</Image>

2. Select **Package Project**.

    <Image url= {require("/img/unreal-5/previewdocs/unreal-package-project.png")} >Select Package Project</Image>

3. In the dialog window that appears, choose where to store your built files and save.

## Deploy the app

After your app is built, you can deploy it using the `.bat` file saved to your build location.

