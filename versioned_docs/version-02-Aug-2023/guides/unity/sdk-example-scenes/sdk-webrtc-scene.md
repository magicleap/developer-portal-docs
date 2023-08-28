---
id: sdk-webrtc-scene
title: WebRTC
description: An overview of the WebRTC scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 21
date: 07/08/2022
tags: [Unity, Walkthroughs, Examples, Samples, XR Interaction Toolkit, WebRTC]
keywords: [Unity, Walkthroughs, Examples, Samples, XR Interaction Toolkit, WebRTC]
---


## Overview

This scene demonstrates the Magic Leap 2's peer-to-peer WebRTC functionality;The Magic Leap 2 and computer sharing the same local WiFi network can share video and audio streams.

## Requirements

:::note
For instructions on installing the SDK Examples Project and building this scene, follow the [**Examples Project Install Guide**](/versioned_docs/version-02-Aug-2023/guides/unity/sdk-example-scenes/sdk-install-setup.md).
:::

You must enable the `CAMERA` and `RECORD_AUDIO` permissions in the Unity Project Settings. Refer to the [Permissions Guide](/versioned_docs/version-02-Aug-2023/guides/unity/permissions/declaring-permissions.md) for more information.

## Running the Example Scene

1. Open a terminal window or other command-line interface (CLI).
2. Make sure the Magic Leap 2 and the computer your CLI is on are connected to the same wifi network, and then find your computer's local IP address by entering the following command:
   1. **Mac and Linux**: `ifconfig`
   2. **Windows**: `ipconfig`
    :::tip
    Your local IP address will have the prefix of `192.168.1.X`, where each device on your local network will have a different number in that last position.
    :::
3. Back on the CLI, navigate to your project directory and then to the *WebRTCSetup/Server* folder:

    ```bash
    cd <PATH-TO-YOUR-PROJECT-FOLDER>/Assets/MagicLeap/Examples/WebRTCSetup/Server
    ```

4. Run the *server.py* script:

    ```bash
    python server.py
    ```

5. Next, open [http://0.0.0.0:8080/](http://0.0.0.0:8080/) in a browser window (not on device).
6. Click on the **Connect** button and you should get a request to allow access to *camera* and *microphone*. Allow those permissions, and you should see a camera feed from your computer in the left video box.
7. After building the scene to your device, run it, and select **allow** on any permission requests that pop up.
8. Enter the IP you found in step 2 into the **Enter server address** input field in your open WebRTC example scene on-device. Click **Connect**.
9. Once connected, you will be able to see the peer (device) feed in the video panel on the right in the browser. The chat box will also be activated. All incoming and outgoing messages will be displayed in this box. Use the input text field and **Send** button to send messages to the connected peer.
10. Use the **Send Random Binary Data** button to send a list of 5 randomly generated integers to the peer as binary data through the data channel.
11. The browser client is set to disconnect itself from the server and stop the local streams when the peer disconnects.

## Additional Information and Troubleshooting

### Connection Issues

- If you're having difficulties getting the device to connect to the server and have another computer on your local network, you can test to see if the issue is with your server or the device by trying to load the browser client from the other computer. If you can open [http://0.0.0.0:8080](http://0.0.0.0:8080) on the other computer, the issue is with the device (probably an issue with the scene) not with the server.
- To get more information on what errors are occurring on device, you can use the logs from the [device bridge](/versioned_docs/version-02-Aug-2023/guides/developer-tools/ml-hub/ml-hub-device-bridge.md)
- If you're having difficulties connecting over the local network, you may need to disable firewalls, particularly on port 8080.

### WebRTC

- More information about [WebRTC](http://www.html5rocks.com/en/tutorials/webrtc/basics/).

### Python

- Make sure you're using a recent version of **Python3** to run the server script. You can check your version by running `python --version` from your CLI.

