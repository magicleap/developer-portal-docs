---
id: ml-hub-advanced-capture
title: Advanced Capture
sidebar_position: 3
date: 03/03/2023
engine: All
tags: [ML Hub, Advanced Capture, Video, Photo]
keywords: [ML Hub, Advanced Capture, Video, Photo]
---

The Advanced Capture module in [Magic Leap Hub](/versioned_docs/version-22-May-2023/guides/developer-tools/ml-hub/magic-leap-hub) enables developers to have greater control over the quality and look of the photos and videos of mixed reality content captured on device.

## Using Advanced Capture

To begin an advanced capture session:

1. Connect the headset to the computer and power it on.
2. Check that the headset is detected by your machine by either opening [Device Bridge](/versioned_docs/version-22-May-2023/guides/developer-tools/ml-hub/ml-hub-device-bridge)inside Magic Leap Hub or executing `adb devices` in the terminal.
3. Start the Advanced Capture module from the Magic Leap Hub home menu.

![Advanced Capture module on ML Hub home page](/img/ml-hub/advanced-capture/advanced_capture_home.jpg)

## Capture Preview

Once your device is connected, you can capture a preview snapshot of the view from the device by clicking the refresh icon in the upper left corner of the preview window.

![Advanced Capture window no preview](/img/ml-hub/advanced-capture/home_no_preview.jpg)

The resulting still displays the quality of the image with its current settings, which can be adjusted using the settings UI on the left side of the Advanced Capture window.
![Advanced Capture window with preview](/img/ml-hub/advanced-capture/home_preview.jpg)

## Advanced Capture Settings

### Composition

- **Aspect Ratio**: 4:3 or 9:10 vertically
- **Quality**: 720p, 1080p or 4k resolution

![Composition Settings](/img/ml-hub/advanced-capture/composition_settings.jpg)

### Video and Audio

- **Delay**: Delays the capture start time from immediate to 5, 10, 20, 30 or a custom amount of seconds
- **Duration**: Sets the duration of the video capture, from Infinite to 30 seconds, 1 minute, 2 minutes or a custom duration
- **Video Stabilization**: when enabled this setting stabilizes shaky capture
- **Audio Type**: Specifies the source of the audio to be captured, Voice, World, Virtual or Mixed.

:::note
If you need to stop video capture before the set duration is up, the **Stop** button will appear on the Advanced Capture screen after 3 seconds of capture.
:::

![Video Settings](/img/ml-hub/advanced-capture/video_settings.jpg)

### Image Adjustment

- **Alpha Override** controls the transparency of the virtual content
- **Exposure Compensation** brightens or darkens the image to compensate for the level of light present in the real world
- **Tint** controls the warm or cool tone quality of the image
- **White Balance** is comparable to white balance settings on most digital cameras, the available white balance settings are Auto White Balance, Daylight, Cloudy, Twilight, Shade, Incandescent, Flourescent and Off.

![Image Settings](/img/ml-hub/advanced-capture/image_settings.jpg)

### Reset to Default

If you need to reset the image settings back to default, click the **Reset to default** button in the upper left corner of the Advance Capture window.

### Capturing Content

When you are satisfied with the capture settings, click on the photo or video icon under the preview window to begin capture.

The resulting files will be saved to the path displayed on the screen at capture completion.

![Image Settings](/img/ml-hub/advanced-capture/capture_success.jpg)

### Accessing Captured Files

To easily view the images and videos captured through advanced capture, click the **Open captures** link located in the upper right corner of the Advanced Capture window above the Preview display.

### Changing Capture Path

You can set the file path for your captures either from the Magic Leap Hub Home menu, under **Home > Settings > Device Stream > General > Capture location** or from the Advanced Capture window, under **Advanced Capture > Settings > Device Stream > General > Capture Location**.

![Capture Path Settings](/img/ml-hub/advanced-capture/capture_path.jpg)

### ADB Screen Capture Commands

If you'd prefer to work with Advanced Capture via command line, you can reference the [ADB Screen Capture Commands](/versioned_docs/version-22-May-2023/guides/developer-tools/android-debug-bridge/android-capture-commands) guide.

