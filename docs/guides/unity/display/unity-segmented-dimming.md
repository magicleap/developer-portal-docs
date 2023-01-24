---
id: unity-segmented-dimming
title: Segmented Dimming
description: Learn how to dim sections of the display to add contrast to certain objects. 
sidebar_position: 0
date: 09/23/2022
tags: [Unity, Dimmer, Dimming, Segmented]
keywords: [Unity, Dimmer, Dimming, Segmented]
---


Magic Leap 2's Segmented Dimming API allows applications to dim portions of the display so that content appears opaque. The dimmer uses a lower resolution panel and therefore, developers must be conscious of it's use and is best used for larger objects.

## Prerequisites

- Unity SDK 0.52.2 or later
- Universal Render Pipeline (URP) version 14.0.0 or higher
- Segmented Dimming is enabled on the device
  - You must enable the dimmer in the Android Settings app on the headset by going to **Settings > Display > Segmented Dimming**.

## Setting Up Your Project

- Set up your Unity Project for Magic Leap 2 by completing the [Unity Getting Started guides](/docs/guides/unity/getting-started/unity-getting-started.md).

## Create the Segmented Dimmer Layer

Your project must have one Layer dedicated to the Segmented Dimmer.

1. Head to **Edit > Project Settings > Tags and Layers**
2. Select an unused User Layer and give it an appropriate name, like "SegmentedDimmer"

## Configure the Render Pipeline

1. Follow the directions in the [Unity Configure Project Settings guide](/docs/guides/unity/getting-started/configure-unity-settings.md) for Magic Leap 2 to make sure your project is set up with the Universal Render Pipeline (URP).

## Configure your URP renderer

:::caution

If you created the project using the URP Template, you'll find the pre-made assets in  `Assets/Settings`. The most recent version of the Template generates 3 sets of URP assets for you - "Balanced", "HighFidelity", and "Performant". You can see which one the project defaults to using by opening **Project Settings > Graphics**.

If your project is older and originated on an old version of the URP the renderer asset might be called `ForwardRenderer.asset` instead.

:::

### Filter the Renderer via layer masks

Find and select the **Universal Render Pipeline Asset_Renderer** component inside the **Project > Assets > Settings** folder.

With the Renderer component selected, check the following in the Inspector window:

1. **Opaque Layer Mask:** _Uncheck_ your SegmentedDimmer Layer
2. **Transparent Layer Mask:** _Uncheck_ your SegmentedDimmer Layer

![Asset filtering](/img/unity/renderer-asset-filtering.png)

### Add the Segmented Dimmer Feature

The Segmented Dimmer effect is enabled via a Renderer Feature:

1. With your Universal Render Pipeline Asset_Renderer selected, at the bottom of the Inspector window click the **Add Renderer Feature** button.
2. Select **Segmented Dimmer**.

![Render feature](/img/unity/render-feature-option.png)

### Configure the Segmented Dimmer Feature

1. **Layer Mask:**  Select only your SegmentedDimmer Layer

![Segmented Dimming Feature](/img/unity/segmented-dimming-feature.png)

### Assign the Render Pipeline

This might not be necessary if you modified a pre-made renderer asset in a project created from the URP Template, but follow along just to make sure your project is configured correctly.

1. Select your URP _settings asset_.
2. In the Inspector, at the top, ensure your renderer asset is assigned to the Renderer List.
3. In **Project Settings > Graphics**, ensure your settings asset is assigned as the **Scriptable Render Pipeline Settings** provider.

|  |  |
|---|---|
| ![](/img/unity/ml-render-pipeline-asset.png)| ![](/img/unity/ml-graphics-pipeline-settings.png) |

## Scene Setup

In your scene, create a mesh GameObject (or many if needed) - this can be a Cube, Sphere, or anything - that will be used as a mask for the Segmented Dimmer.

1. Set the new GameObject's Layer to your **SegmentedDimmer Layer**.
2. Assign the **Segmented Dimmer Material** provided by the Magic Leap XR Plugin to your Segmented Dimmer GameObject, which you can find in **Packages > Magic Leap XR Plugin > Runtime > URP > Segmented Dimmer Material**.

With this GameObject selected, look in the Inspector under the **Mesh Renderer** component, and **DISABLE** the following to avoid unexpected side-effects:

1. **Lighting > Cast Shadows** set to _off_
2. **Lighting > Contribute Global Illumination** _unchecked_
3. **Probes > Light Probes** set to _off_

![Segmented Dimmer URP](/img/unity/urp-segmented-dimmer.png)

**For 2D/ UI Elements**: Place the Segmented Dimmer mesh planes behind other scenery to dim their background and make them visually "pop". Place them in front of objects to dim or obscure them in shadow.

**For 3D elements**: Place the Segmented Dimmer mesh objects in the same exact location as the object you want to surround with the Segmented Dimmer and scale it up to your desired size. You may need to test out different sizes of the mesh in order to get the desired Segmented Dimmer border width around the object.

:::caution SDK 1.1.0-dev1 or later
Starting with **SDK 1.1.0-dev1** there is a new required step to turn on Segmented Dimmer in your Unity app:

You need to call the API `MLSegmentedDimmer.Activate()` once - this will request the MLGraphics API to provide _AlphaBlend_ mode frames from the XR plugin. This is necessary as the CAPI default was switched to _Additive_. Without this call, Segmented Dimmer meshes won't render, even if the feature is turned on in Android settings and you have URP configured correctly.

Similarly you can later call `MLSegmentedDimmer.Deactivate()` which returns rendering to _Additive_ if you no longer need Segmented Dimmer.

The simplest way to enable this call in your scene to create a new empty Game Object with the following script attached:

```csharp showLineNumbers
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.MagicLeap;

public class DimmerInitialize : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        MLSegmentedDimmer.Activate();
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
```

:::

## Troubleshooting

If you are having trouble seeing the Segmented Dimmer in your scene after completing the instructions above, try the following:

1. Verify that Segmented Dimming is enabled at the OS level inside the Settings application on the headset.
2. Increase the scale of the Segmented Dimmer mesh object. The Segmented Dimmer optical layer is at a lower resolution than the other display layers, which means some size adjustment may be necessary for the segmented dimming to fully appear around the object you are trying to highlight.
3. Delete and re-create a new URP Asset by going to **Create > Rendering > URP Asset (With Universal Rendering)**.

## MLSegmentedDimmer API

The **MLSegmentedDimmer** API in the Unity SDK provides easy access to the Segmented Dimmer feature's settings from a script, allowing you to dynamically adjust the base look and feel attributes of your dimmer meshes at runtime.

Use the following **properties** to manipulate the Segmented Dimmer.

### Exists

**Boolean (_Readonly_)**. Checks to see if your current URP configuration includes a Segmented Dimmer feature. Read this value before using any of the other properties below to avoid errors.

### IsEnabled

**Boolean**. Toggles on or off the Segmented Dimmer feature.

### LayerMask

**UnityEngine.LayerMask**. Set this value to change which scene layers to apply dimming to. See: [Layers and LayerMasks](https://docs.unity3d.com/Manual/layers-and-layermasks.html).

### ClearValue

**Float**. Valid values are between 0 and 1. Assigns the clear value for the texture using by Segmented Dimmer.

### IgnoreMaterials

**Boolean**. Toggle whether or not the render pipeline should override any materials on dimmer meshes and apply a fully opaque shader.

### UseFullResolution

**Boolean**. Set to true to render the dimmer mask directly in the alpha channel of the color target. Set to false to use a separate texture, allowing adjustment of  **RenderTargetWidth**  and  **RenderTargetHeight**.

### RenderTargetWidth

**Int**. Only Applicable if **UseFullResolution**  is false. Sets the dimmer's render target width.

### RenderTargetHeight

**Int**. Only Applicable if **UseFullResolution** is false. Sets the dimmer's render target height.

## Check if Segmented Dimming is enabled

The following sample shows how to check if the user enabled the segmented dimmer in their Display settings.

```csharp
public bool CheckDimmerMode()
{
  // Get context
  using (var actClass = new AndroidJavaClass("com.unity3d.player.UnityPlayer"))
  {
      var context = actClass.GetStatic<AndroidJavaObject>("currentActivity");
      AndroidJavaClass systemGlobal = new AndroidJavaClass("android.provider.Settings$System");

      var dimmerMode = systemGlobal.CallStatic<int>("getInt", context.Call<AndroidJavaObject>("getContentResolver"), "is_segmented_dimmer_enabled");

      Debug.Log("Dimmer Mode is set to : " + dimmerMode);

      return dimmerMode > 0;
  }
}
```

## Open Display Settings

You can use an Intent to launch the device's Display Settings. From there the user can choose to enable or disable the segmented dimmer.

```csharp
public void OpenDisplaySettings()
{
  using (var unityClass = new AndroidJavaClass("com.unity3d.player.UnityPlayer"))
  using (AndroidJavaObject currentActivityObject = unityClass.GetStatic<AndroidJavaObject>("currentActivity"))
  using (var intentObject = new AndroidJavaObject("android.content.Intent", "android.settings.DISPLAY_SETTINGS"))
  {
     currentActivityObject.Call("startActivity", intentObject);
  }
}
```
