---
id: fov
title: Field of View
sidebar_position: 4
date: 08/16/2022
tags: [FOV, Field of View, Best Practices, Design]
keywords: [FOV, Field of View, Best Practices, Design]
---

# Field of View (FOV)

This document details the devices felid of view as well as the field of view of the world and RGB cameras.

<Image url= {require("/img/human-interface-guidelines/FOV-Illustration_Side.png")} >FOV illustration side</Image>

<Image url= {require("/img/human-interface-guidelines/FOV-Illustration_Top.png")} >FOV illustration top</Image>

## Display FOV

The Magic Leap 2 display Field of View (FOV) is **45°H x 55°V (70°D)** but this may be significantly smaller if the user is not in the correct device fit. See [Headset Fit](/versioned_docs/version-31-Aug-2023/guides/features/eye-tracking/headset-fit.md) for more information.

<Image url= {require("/img/human-interface-guidelines/Viewing-Distance-Illustration.png")} >Distance illustration</Image>

:::tip

There are techniques that designers can use to mitigate noticing content extending beyond the virtual display FOV

- Blur or fade content on the edge of the FOV around where it is clipped.
- Use angular/square objects if they need to be clipped. Users tend to notice when round/circular objects are clipped more than angular/square objects

:::

## Capture FOV

**The display of Magic Leap 2 has a different field-of-view (FOV) than its picture camera. This leads to some considerations when capturing content (screenshots and/or videos)**.

- The display has an aspect ratio of 9:11. The picture (RGB) camera can capture content in 4:3. Other aspect ratios are possible by cropping either horizontal or vertical content.
- Note that the display can render content that is vertically larger than what the RGB camera can capture. Likewise, the RGB camera can record content that is horizontally larger than the display.
- The Magic Leap Capture app offers two aspect ratios for capturing content: 9:10 and 4:3.
- 9:10 is the maximum overlap between display and RGB camera. This means that screenshots and videos will capture as much of the combined content (of display and real world) as possible.
- The 4:3 option will capture the same virtual content as 9:10 but show additional real world content from the RGB camera (on the sides). The advantage is that you can capture more real world content. However, digital content may show cropped on the sides.

## Display FOV (9:11) and Picture Camera FOV (4:3 or 9:10)

:::tip

We suggest keeping the Countdown toggle **ON** in Settings to assist with your composition if you primarily use Capture with a combined controller interaction or voice command.

:::

## World Camera FOV

There are three World Cameras, with a total combined FOV of **170°H x 100°V (100°H x 100°V,  113.4°D per cam)**.

World Cameras are used for Spatial Mapping and to capture Gestures. Please refer to the best practices there.

## Drawing Attention Outside Display FOV

In some cases, you may wish to draw the user’s attention to content outside the FOV.

Use visual and audio cues such as arrows at the edges of the FOV, wayfinding paths, or spatial audio cues to direct the user’s attention to a place outside their immediate view.
Wayfinding arrows in Vuforia Expert Capture direct the user’s attention to content outside their FOV, and help them navigate to the next step.

