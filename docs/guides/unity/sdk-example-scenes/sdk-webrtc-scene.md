---
id: sdk-webrtc-scene
title: WebRTC
description: An overview of the WebRTC scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 21
date: 07/08/2022
tags: [Unity, Walkthroughs, Examples, Samples, XR Interaction Toolkit, WebRTC]
keywords: [Unity, Walkthroughs, Examples, Samples, XR Interaction Toolkit, WebRTC]
---


# WebRTC 

## Overview
This scene demonstrates Magic Leap 2's peer-to-peer WebRTC functionality using a Python bottle server. The Magic Leap 2 and a computer sharing the same local WiFi network can share video and audio streams.

## Requirements
To run this example, you’ll need:
* Python 3
* Unity Version 2022.2.0f1 or higher
* [Magic Leap Hub](https://developer-docs.magicleap.cloud/docs/guides/getting-started/install-the-tools#install-magic-leap-hub) 
* [Magic Leap Unity Examples Project](https://developer-docs.magicleap.cloud/docs/guides/unity/sdk-example-scenes/sdk-install-setup)
* [A Magic Leap 2 device that has Developer Mode enabled](https://developer-docs.magicleap.cloud/docs/guides/getting-started/enable-developer-mode)

## Running the Example Scene
To run the WebRTC example, you need to set up two parts - the server on your computer, and the scene on your device. This section goes over both parts.

### Set up the Server
For this example to work correctly, you need both your computer and the Magic Leap device connected to the same network.

1. Open a command-line interface (CLI) for example: Command Prompt on windows or Terminal on Mac and Linux.

2. Find and make note of your computer's local IP address by entering the following command:
* Mac and Linux: **ifconfig**
* Windows: **ipconfig**

:::tip
Often, local IP addresses start with 192.168.1.X. Each device on your network will have a unique number in the last position. However, your address might follow a different pattern, like 10.0.0.X. Always check your configuration before moving forward.
:::

3. In the CLI, navigate to the **Server** directory inside the Magic Leap Examples project.
```
cd <PATH-TO-YOUR-PROJECT-FOLDER>/Assets/MagicLeap/Examples/WebRTCSetup/Server
```

4. Start the server by running the following command:
```
python server.py
```

5. Next, open http://127.0.0.1:8080/ in a browser window (not on device).

6. On the website, select **Connect**.

7. When prompted, grant access to both the camera and microphone. Once granted, you should see your computer's camera feed displayed in the left video box.

### Set up the Device and the Scene
This section walks you through configuring and running the Unity WebRTC example on Magic Leap 2.

1. Power on the Magic Leap 2 and connect the device to your computer. Allow USB debugging if prompted. 

2. Open the Unity Hub. <Image url= {require("/img/unity/example-projects/sdk-example-scenes/webRTC/webrtc_open_project.png")} >Open Project in Unity</Image>

3. Click **Open Project**. 

4. Navigate to the Magic Leap examples folder. The path will be wherever you placed your Magic Leap folder, then inside the folder, navigate through **MagicLeap > tools > unity > version > MagicLeap_Examples**. 

5. Open **MagicLeap_Examples** as your project. For the version item, it will list the latest version, so you will see something in the pattern of v1.8.0 or similar.

6. When the project opens, click **File**. Choose **Build Settings**. <Image url= {require("/img/unity/example-projects/sdk-example-scenes/webRTC/webrtc_build_settings.png")} >Build Settings</Image>

7. Under **Scenes in Build**, put a checkmark next to **MagicLeap/Examples/Scenes/WebRTC**.

8. Make sure your Magic Leap 2 device is powered on, and configured for developer mode (instructions for setup if you haven’t done this yet are in the Requirements section). Plug the device into your computer via the Compute pack.

9. Click **Build and Run**. If you don’t have a folder for Unity builds yet, create one when you’re asked for what you want to name your build. This is a best practice. If your device isn’t connected, you may get this message: <Image url= {require("/img/unity/example-projects/sdk-example-scenes/webRTC/webrtc_check_connection.png")} >Device Connection Prompt</Image>
If this happens, make sure everything is plugged in, then click **Retry**.

10. When your project builds, put on your Magic Leap 2 headset. Accept the prompts and your webRTC experience should begin. You’ll be able to tell because there’s a floating menu about webRTC, and your controller’s pointer beam will appear red. Behind the floating menu, you should see a screen asking you to enter a server address.

11. Move the floating menu out of the way, and using the controller, enter the address of your server (for example, **192.168.1.15X**).

12. Click **Connect**.

13. Go back to the browser you set up with your webRTC example. You should now see yourself in the left panel as your computer camera would see you and in the right panel, you should see what your Magic Leap 2 headset sees. The smaller, second chat box is now active. You can type something and press **Send**, then look in your headset to see the message arrive. Likewise, using your controller on your headset, you can type something back, click **Send** and it will appear in the first, bigger chatbox on your web browser. 

## Additional Information and Troubleshooting
This section provides details about common troubleshooting scenarios you may encounter. 

### Connection Issues
* To get more information on what errors are occurring on device, you can use the logs from the [device bridge](https://developer-docs.magicleap.cloud/docs/guides/developer-tools/ml-hub/ml-hub-device-bridge).
* If you're having difficulties connecting over the local network, you may need to disable firewalls, particularly on port 8080.
* You must enable the CAMERA and RECORD_AUDIO permissions in the Unity Project Settings. It’s often enabled by default, but you can double check if you encounter issues. Refer to the [Permissions Guide](https://developer-docs.magicleap.cloud/docs/guides/unity/permissions/declaring-permissions) for more information. 

### WebRTC
* More information about [WebRTC](http://www.html5rocks.com/en/tutorials/webrtc/basics/).

### Python
* Make sure you're using a recent version of Python 3 to run the server script. You can check your version by running 'python --version' from your CLI.
