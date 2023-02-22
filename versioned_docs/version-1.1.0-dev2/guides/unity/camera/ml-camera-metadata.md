---
title: Intrinsic/Extrinsic Parameters
sidebar_position: 3
date: 10/09/2022
tags: [Unity, Intrinsic, Extrinsic, Camera]
keywords: [Unity, Intrinsic, Extrinsic, Camera]
---


This section includes details on reading the Intrinsic and Extrinsic parameters from the Magic Leap camera. These values can be queried using the `MLCamera.ResultExtras` value provided in the Camera Capture callbacks.

## Intrinsic Parameters

Intrinsic parameters describe the mapping of the scene into the pixels in the final image (sensor). Intrinsic parameters contain information like Focal Lengths, Principle Point, and Distortion Coefficients.

:::info
The Focal Length and Principle Point are in pixel coordinate space, and the Distortion Coefficients are normalized/unitless
:::

```csharp
void RawVideoFrameAvailable(MLCamera.CameraOutput output, MLCamera.ResultExtras extras)
{
    if (extras.Intrinsics != null)
    {
        string cameraIntrinsics = "Camera Intrinsics";
        cameraIntrinsics += "\n Width " + extras.Intrinsics.Value.Width;
        cameraIntrinsics += "\n Height " + extras.Intrinsics.Value.Height;
        cameraIntrinsics += "\n FOV " + extras.Intrinsics.Value.FOV;
        cameraIntrinsics += "\n FocalLength " + extras.Intrinsics.Value.FocalLength;
        cameraIntrinsics += "\n PrincipalPoint " + extras.Intrinsics.Value.PrincipalPoint;
        Debug.Log(cameraIntrinsics);
    }
}
```

## Extrinsic Parameters

Extrinsic parameters describe the pose of the camera in the world when the image was captured.

```csharp
void RawVideoFrameAvailable(MLCamera.CameraOutput output, MLCamera.ResultExtras extras)
{
    MLResult result = MLCVCamera.GetFramePose(extras.VCamTimestamp, out Matrix4x4 outMatrix);
    if (result.IsOk)
    {
        string cameraExtrinsics = "Camera Extrinsics";
        cameraExtrinsics += "Position " + outMatrix.GetPosition();
        cameraExtrinsics += "Rotation " + outMatrix.rotation;
        Debug.Log(cameraExtrinsics);
    }
}
```
