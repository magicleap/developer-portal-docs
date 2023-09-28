---
id: renderdoc
title: RenderDoc
sidebar_position: 2
date: 08/07/2023
engine: All
tags: [Debugging, Ggraphics, RenderDoc]
keywords: [Debugging, Graphics, RenderDoc]
---

## RenderDoc Overview

[RenderDoc](https://renderdoc.org/) is a stand-alone graphics debugger that lets you capture and inspect a single frame of any application.

You can use RenderDoc with Magic Leap 2 for various purposes, such as:

- Debugging a shader
- Viewing pixel history
- Viewing a specific texture

## Prerequisites

Before you use this guide, make sure you have:

- [Magic Leap Hub](https://ml2-developer.magicleap.com/downloads) installed
- Magic Leap 2 device configured for use with your computer, either via WiFi on the bridge, or with a USB cable connecting the Magic Leap 2 device to the computer you're using for development. [Learn more](docs/guides/getting-started)

## Install RenderDoc via Magic Leap Hub

You can install RenderDoc from the Magic Leap Hub by following these steps:

1. Open Magic Leap Hub and navigate to the Package Manager. 

<Image url= {require("/img/renderdoc/renderdoc_install.png")} >Install RenderDoc</Image>

2. Click the **All** icon. 

<Image url= {require("/img/renderdoc/install_renderdoc_from_package_manager.png")} >Package Manager Screen</Image>

3. Find the RenderDoc package in the Common Packages category. Download the latest version.

<Image url= {require("/img/renderdoc/renderdoc_download.png")} >RenderDoc Package</Image>

4. Add the adb binary to your PATH Environment variable. This ensures RenderDoc can communicate with the Magic Leap 2 device. For Windows users, the path would be something like:

```bash
C:\Users\_user_\MagicLeap\MLHub\plugins\com.magicleap.adb.win32.x86_64_1.0.41.28_0_2_202304071616\adb\adb.exe
```

5. Verify that you've added the adb binary correctly by opening a command prompt window and running the following command. You should see your Magic Leap 2 device listed, confirming a successful connection.

```
adb devices
```

You should see your device connected to the host.
<Image url= {require("/img/renderdoc/renderdoc_device_attached.png")} >RenderDoc Device Attached Status</Image>

6. Locate the Render Doc Tile in the Magic Leap Hub.

<Image url= {require("/img/renderdoc/renderdoc_launch.png")} >RenderDoc Launch</Image>

7. Launch RenderDoc

 <Image url= {require("/img/renderdoc/renderdoc_tool.png")} >RenderDoc Tool</Image>

You should now have RenderDoc installed, and you can move on to taking a capture to work with in RenderDoc.

## Take a Capture with RenderDoc

This section walks you through how to take a capture with RenderDoc that you can use for analysis.
Do the following:

1. In the RenderDoc window, click **Replay Context: Local** in the bottom-left corner. A drop-down menu appears with the Magic Leap 2 device as an option. Click the device to connect to it.

<Image url= {require("/img/renderdoc/renderdoc_replay.png")} >RenderDoc Replay Context</Image>

The bottom status bar will display **Remote Server Ready** when the connection is successful. 

<Image url= {require("/img/renderdoc/renderdoc_check_server_ready.png")} >RenderDoc Check Server Ready</Image>

If you connect the device after opening Renderdoc, it may take a few seconds for it to connect.

If you want to check if the device is being detected, you can navigate to **File > Attach to Running Instance**. This opens the **Remote Host Manager** and you can see if the device has the server running on it allowing RenderDoc connection. 

<Image url= {require("/img/renderdoc/renderdoc_magicleap_localhost.png")} >RenderDoc Remote Host Manager</Image>

2. Go to the **Launch Application** tab and click the **|…|** at the end of Executable Path. Browse the device for applications you want to run from inside RenderDoc and select one.


<Image url= {require("/img/renderdoc/renderdoc_choose_app.png")} >RenderDoc Choose Application</Image>

3. Click **Launch** to start the application.

<Image url= {require("/img/renderdoc/renderdoc_launch_app.png")} >RenderDoc Launch Application</Image>

4. The app runs on your device. Within RenderDoc, a capture window opens. Click the **Capture Frame(s) Immediately** button to take a capture.

<Image url= {require("/img/renderdoc/renderdoc_capture_frame.png")} >RenderDoc Capture Frame</Image>

5. A progress bar will appear when the capture starts. Wait for the capture to complete.

<Image url= {require("/img/renderdoc/renderdoc_capture_progressbar.png")} >RenderDoc Capture Progress Bar</Image>

6. Right-click the capture inside the Captures Collection section and choose **Save As...** to save the capture.

<Image url= {require("/img/renderdoc/renderdoc_captures_collected.png")} >RenderDoc Capture Collected</Image>

7. Close the application inside the Magic Leap 2 or open the file on your computer to view the capture.

<Image url= {require("/img/renderdoc/renderdoc_open_capture.png")} >RenderDoc Open Capture</Image>

You now know how to create and view a capture with RenderDoc. 

## How to Analyze Your RenderDoc Capture

There are a number of resources you can use to learn how to analyze your RenderDoc capture. They're all created by RenderDoc and provided here for convenience. Resources to review include:

* [How Do I?](https://renderdoc.org/docs/how/index.html#) - A RenderDoc page that lists commonly asked questions and provides tutorials for each. 
* [How to debug a shader](https://renderdoc.org/docs/how/how_debug_shader.html)
* [How to inspect a pixel value](https://renderdoc.org/docs/how/how_inspect_pixel.html)
* [How to view a specific texture](https://renderdoc.org/docs/how/how_view_texture.html)
* [How to edit a shader](https://renderdoc.org/docs/how/how_edit_shader.html)

Additionally, we offer Magic Leap-specific tutorials about:

* [Debug a shader](#debug-a-shader)
* [View pixel history](#view-pixel-history)
* [View a specific texture](#view-a-specific-texture)

These follow in the next sections. Instructions for each assume you completed RenderDoc installation and collected a capture.

## Debug a Shader

Shader debugging in RenderDoc allows you to step-by-step run through a shader at a given time in the frame and make sure the right shader is being used at the right time.

1. Make sure RenderDoc is open and connected to Magic Leap 2. 

<Image url= {require("/img/renderdoc/rd_replay_context.png")} >RenderDoc Open and Connected to Magic Leap 2</Image>

1. Select **File > Open Capture**. 

<Image url= {require("/img/renderdoc/rd_open_file_capture.png")} >RenderDoc File Open Capture</Image>

3. Choose a capture from the list and double-click it to open it. 

<Image url= {require("/img/renderdoc/rd_choose_capture.png")} >RenderDoc Choose Capture</Image>

4. When you open a capture, you should see a view like this:

<Image url= {require("/img/renderdoc/rd_view_capture.png")} >RenderDoc View Capture</Image>

5. Select a draw call and right-click a pixel in the viewer on the left. You can debug the pixel from the Pixel Context window by selecting **Debug**. 

<Image url= {require("/img/renderdoc/rd_debug_shader.png")} >RenderDoc Debug Shader</Image>

6. A Disassembly window should open up with the associated shader that you can step through for debugging. 

<Image url= {require("/img/renderdoc/rd_disassembly_window.png")} >RenderDoc Debug Shader</Image>

You can use this method to debug any shader as needed.

## View Pixel History

Viewing pixel history is useful when you are debugging a specific part of the frame, for instance a corruption like an incorrect color showing up as part of a final image. Pixel history helps you understand which operations influenced the specific area you are viewing and you can step through each operation to see its state at a given moment.

1. Make sure RenderDoc is open and connected to Magic Leap 2. 

<Image url= {require("/img/renderdoc/rd_replay_context.png")} >RenderDoc Open and Connected to Magic Leap 2</Image>

2. Click on **File > Open Capture** at the top. 

<Image url= {require("/img/renderdoc/rd_open_file_capture.png")} >RenderDoc File Open Capture</Image>

3. Choose a capture from the list and double-click it to open it. 

<Image url= {require("/img/renderdoc/rd_choose_capture.png")} >RenderDoc Choose Capture</Image>

4. When you open a capture, it should show a view similar to this one: 

<Image url= {require("/img/renderdoc/rd_view_capture.png")} >RenderDoc View Capture</Image>

5. Hover over the texture in the viewer on left to show pixel information below the texture.

 <Image url= {require("/img/renderdoc/rd_pixel_info.png")} >RenderDoc Pixel Info</Image>

6. Right-click on the mouse to pick the pixel for analysis. 

<Image url= {require("/img/renderdoc/rd_examine_pixel.png")} >RenderDoc Pixel Analysis</Image>

7. In the Pixel Context window, select **History** to view the pixel history.

<Image url= {require("/img/renderdoc/rd_pixel_history.png")} >RenderDoc Pixel History</Image>

8. In the Pixel History panel, you can view every change made to the selected pixel from the start of the frame to the current event.

<Image url= {require("/img/renderdoc/rd_pixel_history_panel.png")} >RenderDoc Pixel History Panel</Image>

9. Double-click an event to jump to that event in the replay. 

<Image url= {require("/img/renderdoc/rd_doubleclick_replay_event.png")} >RenderDoc Replay an Event</Image>

10. VView and verify the state of the pixel at that event. 

<Image url= {require("/img/renderdoc/rd_view_pixel_state.png")} >RenderDoc View and Verify Pixel State</Image> 

You're able to use this guide to take a look at pixels in any captures you like.

## View a Specific Texture 

Viewing a specific pixel texture can help you ensure the texture states (onscreen and offscreen) at that point in the frame are correct. You can verify texture format, size and contents this way.

1. Make sure RenderDoc is open and connected to Magic Leap 2. 

<Image url= {require("/img/renderdoc/rd_replay_context.png")} >RenderDoc Open and Connected to Magic Leap 2</Image>

2. Click on **File > Open Capture** at the top. 

<Image url= {require("/img/renderdoc/rd_open_file_capture.png")} >RenderDoc File Open Capture</Image>

3. Select a capture from the list of displayed captures and open it by double clicking on it. 

<Image url= {require("/img/renderdoc/rd_choose_capture.png")} >RenderDoc Choose Capture</Image>

4. When you open a capture, it should show a view similar to this one: <Image url= {require("/img/renderdoc/rd_view_capture.png")} >RenderDoc View Capture</Image>

5. After you open a capture, in the Texture Viewer, click the **Open Texture List** button. 

<Image url= {require("/img/renderdoc/rd_open_texture_list.png")} >RenderDoc Open Texture List</Image>

6. Click on a texture name to open its resource details.

 <Image url= {require("/img/renderdoc/rd_texture_resource_details.png")} >RenderDoc Click Texture Name</Image>

7. In the texture resource details, you can view the initialization parameters, usage in frame, and related resources. 

<Image url= {require("/img/renderdoc/rd_initialization_parameters.png")} >RenderDoc Texture Resource Details</Image>

You can view any pixel texture in your capture with these instructions.

## Suggested Settings

Magic Leap suggests the following settings for Renderdoc:

1. Navigate to **Tools > Settings > Core > Open Advanced Config Editor > Remote Server > TimeoutMS**. 

2. Set the value to **30000** or up to **60000**. This increases the time Renderdoc can spend waiting for an action sent to the device to complete. This helps in cases where the USB connection is slow and the default lower timeout (**5000**) may cause issues opening or taking captures on device. 

<Image url= {require("/img/renderdoc/renderdoc_timeout_settings.png")} >RenderDoc Change Timeout Settings</Image>

## Known Issues that Can Affect a RenderDoc Capture

The following are known issues when taking a RenderDoc capture:

* For memory heavy applications, the Magic Leap 2 device has issues taking Renderdoc captures. You can workaround this issue by closing background apps to free up some memory.
* For GPU heavy applications, Renderdoc captures can cause the GPU to freeze. This happens as Renderdoc also adds to the load while capturing. If encountered, the device will need to be rebooted.

