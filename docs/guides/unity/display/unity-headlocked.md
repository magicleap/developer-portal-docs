---
id: unity-headlocked
title: Creating Headlocked Applications
description: Learn how to headlock content in Unity applications.
sidebar_position: 5
date: 07/11/2022
tags: [Unity, Display, Headlock, Stabilization]
keywords: [Unity, Display, Headlock, Stabilization]
---

## Overview

The Magic Leap SDK allows user's to disable the headset's Time Warp Stabilization, which allows content that is locked/parented to the headset's position and rotation to be rendered without jitteriness. When the `MLGraphicsFlags_Headlocked` flag is enabled input devices such as Hands and controller will not be positioned correctly by default. See the Example script in this section to learn how to position these devices correctly.

:::caution Headset Tracking Lost
Enabling Head Locked Graphics does not prevent the headset from loosing tracking.
:::

## Prerequisites

- Unity SDK 0.53.0 or later

## Configuration

To configure your Unity app to be head-locked, open **Project Settings** and select **XR Plug-in Management > Magic Leap Settings**. Enable the **Headlock Graphics** option.

<Image url= {require("/img/unity/display/unity-headlock.png")} >Toggle Graphics under Magic Leap Settings</Image>

## Calculating Controller Pose

To make sure the controller tracks correctly when using Headlock Graphics mode, you will need a custom script that positions that controller relative to the headset.

### Example Script

This script poses a transform so that it matches the controller's position and rotation.

```csharp showLineNumbers
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class HeadLockedController : MonoBehaviour
{
    // Transform that should follow the controller
    [SerializeField] private Transform _controllerTransform;
    
    private MagicLeapInputs _mlInputs;
    private MagicLeapInputs.HMDActions _hmdActions;
    private MagicLeapInputs.ControllerActions _controllerActions;

    void Start()
    {
        //Initialize ML Inputs to query Position and Rotation data
        _mlInputs = new MagicLeapInputs();
        _mlInputs.Enable();
        _hmdActions = new MagicLeapInputs.HMDActions(_mlInputs);
        _controllerActions = new MagicLeapInputs.ControllerActions(_mlInputs);
    }

    void Update()
    {
        if (MagicLeapSettings.currentSettings.headlockGraphics)
        {
            AdjustForHeadPoseLockedGraphics();
        }
    }

    // The purpose of this function is to transform the controller from
    // world coordinates to HMD coordinates.
    private void AdjustForHeadPoseLockedGraphics()
    {
        Vector3 controllerPosition = _controllerActions.Position.ReadValue<Vector3>();
        Quaternion controllerRotation = _controllerActions.Rotation.ReadValue<Quaternion>();

        Vector3 hmdPosition = _hmdActions.Position.ReadValue<Vector3>();
        Quaternion hmdRotation = _hmdActions.Rotation.ReadValue<Quaternion>();
        hmdRotation = hmdRotation.normalized;

        Matrix4x4 hmdMatrix = Matrix4x4.TRS(hmdPosition, hmdRotation, Vector3.one);
        Matrix4x4 inverseHmdMatrix = hmdMatrix.inverse;

        // Transform the local position and rotation from world to HMD space.
        Vector3 positionInHmdSpace = inverseHmdMatrix.MultiplyPoint(controllerPosition);
        Quaternion rotationInHmdSpace = (inverseHmdMatrix.rotation * controllerRotation);

        //Pose the transform relative to the headset
        _controllerTransform.SetPositionAndRotation(positionInHmdSpace, rotationInHmdSpace);
    }
    
    private void OnDestroy()
    {
        _mlInputs.Dispose();
    }
}
```
