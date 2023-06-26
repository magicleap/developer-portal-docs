# Ready Player Me avatars with Magic Leap 2

This guide will walk you through how to implement the Ready Player Me VR half-body avatars inside your Unity project for Magic Leap 2.

In this guide you will:
1. Import the Ready Player Me avatar into a Magic Leap 2 Unity project
2. Use hand tracking to drive the avatar hands
3. Use eye tracking to drive eye rotation and blinking

You can use the sample scene to test the project for yourself by swapping out the Avatar - REPLACE ME child of the XR Rig in the ML2_RPM_Demo scene or follow the guide below to set up your scene from scratch using the scripts provided in the sample.

## Prerequisites:

Before you begin, you must:
- Create a new [Magic Leap 2 project](/docs/guides/unity/getting-started/create-a-project)
- Create a [Ready Player Me VR half-body avatar](https://vr.readyplayer.me/en/avatar)

## Setting up your project

1. [Create a new Unity 2022 LTS 3D URP project](/docs/guides/unity/getting-started/create-a-project) 
2. [Configure the project](/docs/guides/unity/getting-started/configure-unity-settings)
3. Copy the link to your [Ready Player Me VR avatar](https://vr.readyplayer.me/en/avatar)

[INSERT IMAGE]

4. Follow the [Ready Player Me Unity Quickstart guide](https://docs.readyplayer.me/ready-player-me/integration-guides/unity/quickstart) to import your VR avatar into the Unity scene
5. Delete the Main Camera object in the scene hierarchy
6. In Packages > Magic Leap SDK > Runtime > Tools > Prefabs find the XR Rig prefab and drag it into your scene
7. Expand the XR Rig and enable the Right Hand Controller and Left Hand Controller objects
8. If it is not in your project already, add the Eye Tracking and Hand Tracking scripts into your project. (Internal: just add the unity package I shared with you to your project)
9. Head to Edit > Project Settings > Magic Leap > Permissions and enable EYE_TRACKING, EYE_CAMERA and HAND_TRACKING

## Configuring your Avatar in the scene
1. Rename the imported Ready Player Me avatar object in your scene to something like “Avatar” and make it a child of the Main Camera object inside the XR Rig prefab

[INSERT IMAGE]

2. Select the Avatar object and in the inspector window, disable the Eye Animation Handler
3. With the Avatar object selected, click “Add Component” and add an Audio Source
4. Drag the newly created audio source into the “Audio Source” field in the Voice Handler script
5. Add the Eye Tracking and Hand Tracking scripts(links to be inserted) to your Avatar object

[INSERT IMAGE]

## Configuring Eye Tracking in your avatar
1. Expand the Avatar object until you find the RightEye and LeftEye children of the Armature (located under Armature>Hips>Spine>Neck>Head)
2. With the Avatar object selected, drag and drop the RightEye child of the Armature into the Right Eye Bone field and the LeftEye child into the Left Eye Bone field of the Eye Tracking script on the avatar.

[INSERT SCREENSHOT]


## Configuring Hand Tracking in your avatar
1. In your scene hierarchy, expand the XR Rig prefab and enable the LeftHand Controller and RightHand Controller objects.
2. Expand the Avatar object and select the RightHand child of the Armature. 
3. With the RightHand object selected, go to the Inspector window and click Add Component > 3. Parent Constraint. 
4. Hit the “+” icon to add a new constraint. Drag and drop the RightHand Controller from the XR Rig into the source.
5. Set the RightHand’s rotation to 90,0,0
6. Click Activate in the parent constraint settings to activate the constraint

[INSERT SCREENSHOT]

7. Select the LeftHand child of the armature and repeat steps 3, 4 and 5, this time adding the LeftHand Controller as the source of the parent constraint on the LeftHand.


This will make the hands of the Ready Player Me avatar move along with the detected hands. Play around with the scale and offset to make them match the size of your hands.

## Testing
- To see yourself using the avatar, drag and drop the Mirror Plan prefab from the RPM Assets folder into the scene and see yourself move

## Further Resources

- [Ready Player Me full body avatars](https://docs.readyplayer.me/ready-player-me/api-reference/avatars/full-body-avatars)
- [Ready Player Me Unity documentation](https://docs.readyplayer.me/ready-player-me/integration-guides/unity)
- [Magic Leap 2 Eye Tracking](/docs/guides/unity/input/eye-tracking/eye-tracking-overview)
- [Magic Leap 2 Hand Tracking](docs/guides/unity/input/hand-tracking/unity-hand-tracking-overview)
