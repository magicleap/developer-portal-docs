---
title: Magic Leap Settings
description: Information about MRTK 3 settings for Magic Leap
sidebar_position: 1
tags: [Unity, MRTK3, Input,UI]
keywords: [Unity,Samples, MRTK3, UI]
---

# Magic Leap MRTK 3 Settings

The Magic Leap MRTK 3 package adds additional, Magic Leap specific, options to MRTK's Settings allowing you to enable or disable specific features based on their preferences.

## Open Magic Leap Settings

This sections includes instructions on how to open the MRTK Magic Leap Settings window.

 1. Open the Project Settings window by navigating to **Edit > Project Settings**. Then, from the sidebar, select **MRTK3 > Magic Leap Settings**.
 2. Here you can modify which prefabs are created at runtime to visualize the Magic Leap 2 controller and hands. Additionally, you can change the input action bindings if needed.

<Image url= {require("/img/third-party/mrtk3/MagicLeapSettings_1.0.0-pre2.jpg")} >Magic Leap Settings Window v1.0.0-pre.2</Image>


## MRTK XR Rig Runtime Configuration

The Magic Leap MRTK 3 settings allow developers to enable Runtime Configuration of the MRTK XR Rig. This package is an optional way to configure the MRTK XR Rig to be compatible with Magic Leap 2's input, eliminating the need to manually modify the **MRTK XR Rig** prefab.

<Image url= {require("/img/third-party/mrtk3/mrtk3-magicleap-runtime-config.jpg")} >MRTK3 Magic Leap Settings with the Runtime Config option selected</Image>

:::info
The **Runtime Config Enabled** option will only take effect in the editor if the Magic Leap App Simulator is active in the XR Plug-in Management. Follow these steps to modify the settings
:::

## Manual MRTK XR Rig Configuration

If you choose not to use the [Runtime Configuration](#runtime-mrtk-xr-rig-configuration), you will have to modify the existing MRTK XR rig by either replacing it or altering its input actions.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="replace" label="Use 'MRTK XR Rig - MagicLeap' Prefab" default>
When creating or modifying a scene, perform the following steps:

1. Delete the existing MRTK XR Rig if one exists.
2. Navigate to the `Packages/Magic Leap MRTK3/Runtime/MagicLeap/Prefabs/MRTK_Variants/` directory
3. Add the `MRTK XR Rig - MagicLeap` prefab to your scene.  


  </TabItem>
  <TabItem value="modify" label="Manually Edit the `MRTK XR Rig`">
This section describes how to configure the original MRTK XR Rig, instead of replacing it with the pre-configured "MRTK XR Rig - MagicLeap" variant.

1. Select the **MRTK XR Rig** in the scene. Add the **MagicLeapInputs** and **MagicLeapHandAuxiliaryInputs** input action assets to the **Input Action Manager**.
2. Expand the object so that the MRTK RightHand and MRTK LeftHand Controllers are visible (`MRTK XR Rig/ Camera Offset/`).
3. Add the `Packages/Magic Leap MRTK3/Runtime/MagicLeap/Prefabs/MRTK_Variants/MRTK MagicLeap Controller` prefab into the XR rig to add support for MagicLeap controller input.
4. Select each of the Hand Controller objects and update the following components:
   1. Update the **Articulated Hand Controller** to use equivalent `MagicLeapHandAuxiliaryInputs` inputs instead of the generic MRTK bindings. For example, the left hand bindings would be the following in order:
      1. `Aux LeftHand/DevicePosition`
      2. `Aux LeftHand/DeviceRotation`
      3. `Aux LeftHand/TrackingState`
      4. `Aux LeftHand/Select`
      5. `Aux LeftHand/Select Value`
   2. Remove actions that do not have matching values. For the left hand, these values would be:
       1. `MRTK LeftHand/Activate`
       2. `MRTK LeftHand/UI Press`
       3. `MRTK LeftHand/Rotate Anchor`
       4. `MRTK LeftHand/Translate Anchor`
5. Replace the input binding on each of the hand's child objects so they target the `MagicLeapHandAuxiliaryInputs` input actions.
   1. Select the **IndexTip PokeInteractor** then expand the Poke Pose Source/Pose Source List.
      Replace Element 1, to use Tracking State and PointerPosition/Rotation actions.
   2. Select the **Far Ray** then select the Aim Pose Source Pose / Source List. Replace Element 0, to use Tracking State and PointerPosition/PointerRotation actions.
   3. Select the **Far Ray** then select the Device Pose Source / Pose Source List. Replace Element 0 to use Tracking State and DevicePosition/DeviceRotation actions.
   4. Select **GrabInteractor** then select the Pinch Pose Source / Pose Source List. Replace Element 1 Tracking State and PointerPosition/PointerRotation actions.
   5. Select the **GazePinchInteractor** and Replace the **Device Pose Source** (DevicePosition/Rotation), and **Aim Pose Source** (PointerPosition/Rotation).
   6. Finally, select the **Main Camera**, then add the **MagicLeap Camera** component. *(Optional)*



  </TabItem>
</Tabs>

