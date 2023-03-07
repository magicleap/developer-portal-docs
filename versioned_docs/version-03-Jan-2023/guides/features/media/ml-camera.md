---
title: MLCamera
date: 10/09/2022
sidebar_position: 6
tags: [Unity, Overview, Camera, Stream, Capture]
keywords: [Unity, Overview, Camera, Stream, Capture]
---

The Magic Leap 2 `MLCamera` API allows developers to capture real and virtual content inside their applications. While the Magic Leap 2 has only one camera to capturing content, two separate streams can be access from the camera at the same time. This allows developers to create application that can stream the user's point of view, while using the camera to perform computer vision tasks.

## Camera Streams

Magic Leap 2 allows developers to access two streams from the same physical camera. The camera streams are accessed as devices in the Unity API and have the following identifiers:

0. **Main Camera** - provides access to compressed video and still images. This device allows you to capture virtual, real-world, mixed reality content and is the performed choice if you are not performing computer vision tasks on the output or if it is being used for streaming, broadcasting, or images.

1. **CV Camera** - best used for Computer vision scenarios, uncompressed, raw frames.
If you use this device to do CV in you application, you will be able to use the record/stream gameplay using the Capture Service, but you will not be able to perform Image or marker tracking using the SDK.

## Stream Capabilities

This section details the supported Resolution, Capture Type, Formats and Frame Rates. The following table provides general information about each of the supported formats.

- Camera type:  [Main, CV]
- Mode:         [Real, MR (Mixed Reality), Virtual]
- Capture type: [Preview, Video, Image]

These are formats supported:

| Format | Camera | Mode | Capture Type |
|---|---|---|---|
| YUV | **Main** | Real | Preview/Video/Image |
| YUV | **CV** | Real | Video/Image |
| RGBA | **Main** | MR/Virtual | Video/Image |
| RGBA | **CV** | Real | Video |
| JPEG | **Main** | Real/MR/Virtual | Image |

### Main Camera Stream

The table below shows which output formats are supported when capturing using the Main Camera Stream.

<div>
<table>
    <tbody><tr>
        <th>Camera </th><th>Mode </th><th>Resolution </th><th>Capture Type </th><th>Formats </th><th>FrameRate </th></tr>
      <tr>
        <td rowSpan={48}>Main</td><td rowSpan={12}>Cam_Only</td><td rowSpan={3}>640x480<br />
          1280x720<br />
          1280x960<br />
          1440x1080<br />
          1920x1080<br />
          2048x1536 </td><td rowSpan={1}>Preview</td><td rowSpan={1}>YUV</td><td rowSpan={1}>15/30/60 </td></tr>
      <tr>
        <td rowSpan={1}>Image</td><td rowSpan={1}>YUV/JPEG</td><td rowSpan={1}>15/30/60 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>YUV/RGB/Compressed</td><td rowSpan={1}>15/30/60 </td></tr>
      <tr>
        <td rowSpan={3}><br />
          2880x2160<br />
          3840x2160<br />
          4096x3072<br />
          <br />
        </td><td rowSpan={1}>Preview</td><td rowSpan={1}>YUV</td><td rowSpan={1}>15/30 </td></tr>
      <tr>
        <td rowSpan={1}>Image</td><td rowSpan={1}>YUV/JPEG</td><td rowSpan={1}>15/30 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>YUV/RGB/Compressed</td><td rowSpan={1}>15/30 </td></tr>
    </tbody></table>
</div>

### CV Camera Stream

The table below shows which output formats are supported when capturing using the Computer Vision Camera.

<div>
<table>
    <tbody><tr>
        <th>Camera </th><th>Mode </th><th>Resolution </th><th>Capture Type </th><th>Formats </th><th>FrameRate </th></tr>
      <tr>
        <td rowSpan={48}>CV</td><td rowSpan={24}>Cam_Only</td><td rowSpan={2}>640x480<br />
          1280x720<br />
          1280x960<br />
          1440x1080<br />
          1920x1080<br />
          2048x1536 </td><td rowSpan={1}>Image</td><td rowSpan={1}>YUV</td><td rowSpan={1}>15/30/60 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>YUV/RGB &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td><td rowSpan={1}>15/30/60 </td></tr>
      <tr>
        <td rowSpan={2}><br />
          2880x2160<br />
          3840x2160<br />
          4096x3072<br />
          <br />
        </td><td rowSpan={1}>Image</td><td rowSpan={1}>YUV</td><td rowSpan={1}>15/30 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>YUV/RGB </td><td rowSpan={1}>15/30 </td></tr>
    </tbody></table>
</div>

:::info

- 15Fps only supported in Auto Exposure Mode.
- When multiple streams are configured frame rate is constrained by max resolution.
- FrameRate_None can be used when only Image capture_type is used.

:::

### Mixed Reality / Virtual Only Capture

The table below shows which output formats are supported when capturing Virtual and Mixed Reality Content.

<div>
<table>
    <tbody><tr>
        <th>Camera </th><th>Mode </th><th>Resolution </th><th>Capture Type </th><th>Formats </th><th>FrameRate </th></tr>
      <tr>
        <td rowSpan={48}>Main</td><td rowSpan={24}>MR/Virtual_Only</td><td rowSpan={2}>648x720 </td><td rowSpan={1}>Image</td><td rowSpan={1}>RBG/JPEG</td><td rowSpan={1}>30/60 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>RGB/Compressed</td><td rowSpan={1}>30/60 </td></tr>
      <tr>
        <td rowSpan={2}>960x720 </td><td rowSpan={1}>Image</td><td rowSpan={1}>RBG/JPEG</td><td rowSpan={1}>30/60 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>RGB/Compressed</td><td rowSpan={1}>30/60 </td></tr>
      <tr>
        <td rowSpan={2}>972x1080 </td><td rowSpan={1}>Image</td><td rowSpan={1}>RBG/JPEG</td><td rowSpan={1}>30/60 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>RGB/Compressed</td><td rowSpan={1}>30/60 </td></tr>
      <tr>
        <td rowSpan={2}>1440x1080</td><td rowSpan={1}>Image</td><td rowSpan={1}>RBG/JPEG</td><td rowSpan={1}>30/60 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>RGB/Compressed</td><td rowSpan={1}>30/60 </td></tr>
      <tr>
        <td rowSpan={2}>1944x2160</td><td rowSpan={1}>Image</td><td rowSpan={1}>RBG/JPEG</td><td rowSpan={1}>30 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>RGB/Compressed</td><td rowSpan={1}>30 </td></tr>
      <tr>
        <td rowSpan={2}>2880x2160</td><td rowSpan={1}>Image</td><td rowSpan={1}>RBG/JPEG</td><td rowSpan={1}>30 </td></tr>
      <tr>
        <td rowSpan={1}>Video</td><td rowSpan={1}>RGB/Compressed</td><td rowSpan={1}>30 </td></tr>
    </tbody></table>
</div>


:::info

Quality and frame rate provided during connection should match the resolution and framerate in that was used when preparing capture.

:::

## Upgrading from Magic Leap 1

The Magic Leap 2 offers a new Unified Camera API, which means the Mixed Reality, Computer Vision and Standard camera streams can be accessed with the same set of APIs.

Additionally, the Magic Leap 2 allows access to two camera devices - Main Camera (Camera 0) and Computer Vision Camera (Camera 1), which allows for unique application features, such as streaming a user's point of view while tracking markers or performing custom computer vision tasks.

While the Magic Leap 2's APIs are new, the API semantics are similar to the Magic Leap 1 MLCamera API. The Magic Leap SDK provides samples that can be used for reference when creating or migrating your application.
