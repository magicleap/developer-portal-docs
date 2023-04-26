---
id: virtual-keyboard
title: 3D Virtual Keyboard
description: An overview and walkthrough guide for using the 3D Virtual Keyboard prefab.
sidebar_position: 2
date: 04/20/2022
keywords: [Unity, Samples, Input, Keyboard]
tags: [Unity, Samples, Input, Keyboard]
---


## Overview

This project allows you to include a virtual 3D keyboard prefab in your Magic Leap 2 Unity projects. The keyboard can be moved around and supports two interaction modes, *raycasting* and *stick*. There is also a toggleable word-suggestion engine.

[Click here](/zips/MagicLeapUnityVirtualKeyboard-main.zip) to download the repository .zip file.

:::caution

- Requires SDK version 0.53.0 or newer
- Using this 3D keyboard package requires your project to completely switch to URP (instructions below).

:::

:::note
Currently the only supported language is English.
:::

## Keyboard Interaction

### Typing On The Keyboard

The keyboard supports two interaction modes for typing, *raycasting* and *stick*.

By default, the keyboard automatically switches between these two modes depending on the distance between the Magic Leap 2 controller and the virtual keyboard. It switches to *raycasting* when you are far away, and switches to *stick* when you are close. In the Unity scene, the distance threshold for this switch is determined by the `_switchDist` parameter in the InteractionManager script on the ControllerLogic GameObject (which is attached to the controller's GameObject). On the same InteractionManager script, there is a parameter called `_inputTypeEnabled`. You can use this enum parameter to force the keyboard to only enable one interaction mode.

#### Raycasting

Use the ray to aim at the key you want to type on, and press the trigger on the Magic Leap 2 controller to press down on the key.

![Raycasting Keyboard Input](/img/unity/resources/keyboard/keyboard-raycast.jpg)

#### Stick

Use the tip of the virtual stick attached to the Magic Leap 2 controller to touch and push down on the surface of the keys.

![Stick Keyboard Input](/img/unity/resources/keyboard/keyboard-stick.jpg)

### Moving the Keyboard

The keyboard allows you to grab and move it around using the side handles. You need to first either aim at the side handle using *raycasting* (first figure below) or overlap the *stick's* tip with the sidehandle (second figure below), then hold down the trigger button of the Magic Leap 2 controller to grab and move it.

![Moving the Keyboard with Raycasting](/img/unity/resources/keyboard/keyboard-ray-handle.jpg)

![Moving the Keyboard with the Stick](/img/unity/resources/keyboard/keyboard-stick-handle.jpg)

## Import Instructions

Follow these steps to import this package into your own Unity project:

1. Follow the [Unity Getting Started Guide](/versioned_docs/version-22-Mar-2023/guides/unity/getting-started/unity-getting-started.md) to ensure your development environment is set up properly.

2. [Download](/zips/MagicLeapUnityVirtualKeyboard-main.zip) the repository .zip file and extract the contents.

3. Import the repository as a Unity package.

   1. In the Unity Editor menu, go to Window > Package Manager.

   2. Open the dropdown next to the "+" icon, and select "Add package from disk".

   3. In the pop-up window, browse to the location of the repository you just downloaded and extracted and select the "package.json" file. Wait for the import to finish.

      1. If Unity shows a "TMP Importer" pop-up window, make sure you click "Import TMP Essentials".

      2. You should not see any red errors in the Unity console after importing the project and the TMP Essentials. If there is any error, it's likely that some sub-steps in Step 1 were not properly completed.

   4. Set up the Universal Render Pipeline (URP)

      1. If your project is already using URP (e.g. you started the project using the URP template), then you can skip this step.

      2. At this point, URP should have already been imported as a dependency of this keyboard package. We just need to set it up and switch the rendering method to URP from the legacy one. The following instructions can also be found on [Unity's URP Setup page](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@13.0/manual/InstallURPIntoAProject.html).

         1. To create a Universal Render Pipeline asset:
            1. In the Unity Editor, go to the Project window.
            2. Right-click in the Project window, and select Create > Rendering > URP Asset. Alternatively, navigate to the menu bar at the top, and select Assets > Create > Rendering > Universal Render Pipeline > Pipeline Asset.
            3. You can either leave the default name for the new Universal Render Pipeline Asset, or type a new one.

         2. Adding the Asset to your Graphics settings:
            1. Navigate to Edit > Project Settings... > Graphics
            2. In the Scriptable Render Pipeline Settings field, add the Universal Render Pipeline Asset you created earlier. When you add the Universal Render Pipeline Asset, the available Graphics settings immediately change. Your Project is now using URP.

## Using the Prefab

:::info
On the keyboard prefab, there is a boolean value called "ExperimentalWordSuggestion". Use it to toggle on/off the word suggestion engine.
:::

### Importing the Keyboard Into An Existing Project

1. Drag the keyboard prefab in `Packages/<this keyboard package>/Runtime/Prefabs/Keyboard` into your scene.

2. Set up Magic Leap 2 camera and controller:

   1. If you've already set up the Magic Leap 2 camera and controller in your scene beforehand, drag the controller prefab in `Packages/<this keyboard package>/Runtime/Prefabs/ControllerLogic` into your scene and attach it to the GameObject that represents the motion-tracked Magic Leap 2 controller.

   2. Otherwise if you don't have Magic Leap 2 camera and controller set up, drag the controller prefab in `Packages/<this keyboard package>/Runtime/Prefabs/Controller` into your scene and place it at world origin (0, 0, 0). Drag the `Packages/Magic Leap SDK/Tools/Prefabs/Main Camera` prefab into your scene and place it at world origin as well.

   3. Please make sure the Magic Leap 2 "Main Camera" GameObject is the only camera in the scene that has the tag of "MainCamera", otherwise the billboarding behavior of the keyboard will be wrong.

3. Make sure you have an "Event System" in your scene. If not, create one by selecting from main menu: "GameObject > UI > Event System". Without this, the blinking caret on the input field above the keyboard will not display properly.

4. At this point you should have a functional keyboard that you can click with either *raycasting* or *stick*, and it should show what you typed in the input field on top.

### Connecting Key Click Events

How to connect key click events from the keyboard to your own app logic:

1. On the Keyboard prefab, you'll see a custom event called `PublishKeyEvent` in the "KeyboardManager.cs" script. Any time a key is pressed, this event will be invoked. Simply attach your own handler to this event to connect your app logic to the keyboard.

   1. The example scene has an example connector handler attached to this keyboard event. The example handler just prints out information of the key click event.

#### Handler Function Input Parameters

The handler function needs to take in 4 input parameters:

- arg0 (string)
  - This is the character on the key being pressed for regular character keys (e.g., "w"). For suggestion keys, this is the selected word. For special keys (e.g., Shift), this is an empty string.
- arg1 (`MagicLeapUI.KeyType`)
  - This enum is written in KeyboardDefines.cs, defining all the different types of keys. For any "regular" character keys (e.g., "w"), it will be `KeyType.kCharacter`.
- arg2 (bool)
  - This boolean value indicates whether the key is double-clicked.
  - Each key on the keyboard has a script called Clickable attached, this script has a public float variable called `DoubleClickReactWindow`. When this variable is larger than 0, double-click is enabled and this number determines the system's reaction window in detecting the second click when interpreting a double-click input. If this variable is smaller than 0, double-click is disabled.
- arg3 (string)
  - All the content typed so far (should be the same as the text shown on the input field).

### Example Scene

Included in the package is a minimal example that contains the Magic Leap 2 camera, the Magic Leap 2 controller, and a 3D keyboard.

To open the example scene:

1. In the Unity Editor top menu, go to Window > Package Manager.

2. As shown in the screenshot below, select this virtual keyboard package on the left side.

3. You should see a dropdown menu called "Samples" on the right side. Expand it to reveal the sample called "Magic Leap Unity Keyboard Example Scene".

4. Click the button "Import" to import it into your project's Asset folder.

5. Locate it in the Asset folder and open the example scene called "MagicLeapUnityKeyboard".

:::note
As mentioned earlier, if you see a popup asking you to "Import TMP Essentials", make sure you do so.
:::

![Importing the Example Scene from the Package Manager](/img/unity/resources/keyboard/keyboard-sample-import.png)

## 3rd Party Software Usage

This Unity package uses two pieces of 3rd party software. Both are placed in `<this keyboard package>/Runtime/3rdParty/`:

- Shader Graph Custom Lighting
  - Location: `<this keyboard package>/Runtime/3rdParty/URP_ShaderGraphCustomLighting-main`
  - [The original repo](https://github.com/Cyanilux/URP_ShaderGraphCustomLighting), commit SHA of the version used: `9cc5ad86242878e8e700617d288cf96b1a29ecda`
- Word Suggestion Algorithm from Gaia, namely Mozilla's Phone UX for the Boot to Geck (B2G) project
  - Location: `<this keyboard package>/Runtime/3rdParty/WordSuggestion`
  - [Gaia's entire repo](https://github.com/mozilla-b2g/gaia)
  - [Word suggestion algorithm](https://github.com/mozilla-b2g/gaia/blob/master/apps/keyboard/js/imes/latin/predictions.js), commit SHA of the version used: `18b322aef7f508ddcf0cc5fadf912d978a826407`
  - [English dictionary](https://github.com/mozilla-b2g/gaia/blob/master/apps/keyboard/js/imes/latin/dictionaries/en_us.dict), commit SHA of the version used: `6426618e1418b3534f3af460c96f9441f3730fdc`

