---
id: ready-player-me
title: Photon Fusion
sidebar_position: 1
description: Using Ready Player Me with Magic Leap 2
date: 04/24/2023
tags: [Unity, Walkthroughs,Guides, Ready Player Me, Avatars]
keywords: [Unity, guides, photon, Ready Player Me, Avatars]
---

# Ready Player Me for Magic Leap 2

This guide will walk you through how to implement the Ready Player Me VR half-body avatars inside your Unity project for Magic Leap 2.

In this guide you will:

1. [Import the Ready Player Me avatar into a Magic Leap 2 Unity project](#setting-up-your-project)
2. [Use hand tracking to drive the avatar hands](#configuring-hand-tracking-in-your-avatar)
3. [Use eye tracking to drive eye rotation and blinking](#configuring-eye-tracking-in-your-avatar)

You can use the sample scene to test the project for yourself by swapping out the "Avatar - REPLACE ME" child of the XR Rig in the ML2ReadyPlayerMeDemo scene or follow the guide below to set up your scene from scratch using the scripts provided in the sample.

:::note

This project has been confirmed to work with Unity 2022.2.20, Magic Leap 2 Unity SDK 1.8.0, Ready Player Me Avatar Loader 1.3.2 and Ready Player Me Core 1.3.1.

Please check the [Magic Leap 2 version compatibility matrix](/versioned_docs/version-31-Aug-2023/releases/releases-overview) to see the latest available versions of the Magic Leap 2 Unity SDK and check for updates in the [Ready Player Me documentation](https://docs.readyplayer.me/ready-player-me/integration-guides/unity) if you run into avatar import issues.
:::

## Prerequisites

Before you begin, you must:

- Download the [Magic Leap 2 Ready Player Me package](https://github.com/magicleap/MagicLeapReadyPlayerMe)
- Create a [Ready Player Me VR half-body avatar](https://vr.readyplayer.me/en/avatar)
- Complete [Eye Calibration](/versioned_docs/version-31-Aug-2023/guides/features/eye-tracking/eye-calibration) for accurate eye tracking on your Magic Leap 2 device

## Setting up your project

1. [Create a new Unity 2022 LTS 3D URP project.](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/create-a-project)

2. [Configure Unity project settings for Magic Leap 2.](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/configure-unity-settings)

3. Copy the link to your [Ready Player Me VR avatar](https://vr.readyplayer.me/en/avatar).

<img src="/img/unity/ready-player-me/vr_avatar_link.jpg" width="450px" />

4. Complete Step 1 of the  [Ready Player Me Unity Quickstart guide](https://docs.readyplayer.me/ready-player-me/integration-guides/unity/quickstart) to add the Ready Player Me package into your project. You may need to restart the project for the package to take effect.

5. After restarting your project, in the Unity menu go to **Ready Player Me > Avatar Loader**. Paste the glb file URL of the VR avatar you created earlier into the Avatar URL slot. Keeping all the other checkboxes checked, click **Load Avatar Into Current Scene**.

6. Delete the **Main Camera** object in the scene hierarchy.

7. In **Packages > Magic Leap SDK > Runtime > Tools > Prefabs** find the **XR Rig** prefab and drag it into your scene.

8. Expand the **XR Rig** and enable the **Right Hand Controller** and **Left Hand Controller** objects.

9. Import the [Magic Leap 2 Ready Player Me package](https://github.com/magicleap/MagicLeapReadyPlayerMe/tree/main) into your scene by navigating to **Assets > Import Package > Custom Package** and selecting the MagicLeapReadyPlayerMe.unitypackage file. Select **All** and click **Import**.

10. Head to **Edit > Project Settings > Magic Leap > Permissions** and enable **RECORD_AUDIO, EYE_TRACKING, VOICE_INPUT, EYE_CAMERA and HAND_TRACKING**.

11. Save the scene.

## Configuring your Avatar in the scene

1. Rename the imported Ready Player Me avatar object in your scene to something like “Avatar” and make it a child of the **Main Camera** object inside the **XR Rig** prefab.

<img src="/img/unity/ready-player-me/avatar_replace.jpg" width="450px" />

2. Select the Avatar object and in the inspector window and **disable** the Eye Animation Handler.
3. With the Avatar object selected, click **“Add Component”** and add an **Audio Source**.
4. Drag the newly created audio source into the “Audio Source” field in the **Voice Handler** script on the Avatar.
5. Add the **[EyeTracking](https://github.com/magicleap/MagicLeapReadyPlayerMe/blob/main/Runtime/Scripts/AvatarEyeTracking.cs)** and **[HandTrackingEnable](https://github.com/magicleap/MagicLeapReadyPlayerMe/blob/main/Runtime/Scripts/HandTrackingEnable.cs)** scripts from MagicLeapReadyPlayerMe package to your Avatar object.

<img src="/img/unity/ready-player-me/avatar_inspector.jpg" width="450px" />

6. Save the scene.

## Configuring Eye Tracking in your avatar

1. Expand the Avatar object until you find the **RightEye** and **LeftEye** children of the Armature (located under Armature>Hips>Spine>Neck>Head).

2. With the Avatar object selected, drag and drop the RightEye child of the Armature into the **Right Eye Bone** field and the LeftEye child into the **Left Eye Bone** field of the Eye Tracking script on the Avatar.

<img src="/img/unity/ready-player-me/project_structure.jpg" width="600px" />

## Configuring Hand Tracking in your avatar

1. In your scene hierarchy, expand the XR Rig prefab and make sure the **LeftHand Controller** and **RightHand Controller** objects are enabled.

2. Expand the Avatar object and select the **RightHand** child of the Armature.

3. With the **RightHand** object selected, go to the Inspector window and click **Add Component > Parent Constraint**.

4. Hit the **“+”** icon to add a new constraint. Drag and drop the **RightHand Controller** from the XR Rig into the source.

5. Click **Zero** in the parent constraint settings to activate the constraint

6. Uncheck **"Is active"**.

7. Set the RightHand’s position to **0,0,0** and rotation to **90,0,0**.

8. Save the scene. This step is necessary to ensure the transform offset isn't modified.

9. After saving, click **Activate** on the parent constraint to activate the parent constraint. Now the hand models will track to the hand controllers without offset.

<img src="/img/unity/ready-player-me/right_hand.png" width="450px" />

7. Select the **LeftHand** child of the armature and repeat steps 3, 4 and 5, this time adding the **LeftHand Controller** as the source of the parent constraint on the **LeftHand**.

8. Save the scene.

This will make the hands of the Ready Player Me avatar move along with the detected hands. Play around with the scale and offset to make them match the size of your hands. If you would like to only see the hand models you can disable the **Line Renderers** on the **RighHand Controller** and **LeftHand Controller** objects.

## Testing

- To see yourself using the avatar, drag and drop the **Mirror** prefab from the RPM Assets folder into the scene and position it at (0,0.5,1.6) to place the canvas where it was launched.
- If you run into issues with the material on the Mirror showing up as pink, make sure its shader is set to **Universal Render Pipeline - Unlit** and drag the **Camera Texture** from the RPM Assets folder into the **Base Map** field of the **RenderMat** material used by the Mirror plane.

## Further Resources

- [Ready Player Me full body avatars](https://docs.readyplayer.me/ready-player-me/api-reference/avatars/full-body-avatars)
- [Ready Player Me Unity documentation](https://docs.readyplayer.me/ready-player-me/integration-guides/unity)
- [Magic Leap 2 Eye Tracking](/versioned_docs/version-31-Aug-2023/guides/unity/input/eye-tracking/eye-tracking-overview)
- [Magic Leap 2 Hand Tracking](/versioned_docs/version-31-Aug-2023/guides/unity/input/hand-tracking/unity-hand-tracking-overview)

