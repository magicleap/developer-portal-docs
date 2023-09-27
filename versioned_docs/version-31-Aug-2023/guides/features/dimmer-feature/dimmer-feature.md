---
title: Global/Segmented Dimmer
sidebar_position: 3
date: 07/22/2022
keywords: [Dimming, Dimmer, Segmented, Overview, Global]
---

#  Global/Segmented Dimmer

Magic Leap devices have additive displays, which take the light within a user’s environment and add photon to the display, making it possible to render content. The Magic Leap 2 introduces a new low resolution panel which selectively *subtracts* photons in the environment by using two types of dimming: **Global Dimming** and **Segmented Dimming**.  

<Image url= {require("/img/design-dimmer/diagram1.png")} >Diagram 1</Image>

## What is Global Dimming?

**Global Dimming** is a *tint* applied over the entire display, behind your content. It sets a single opacity value that dims the real-world environment. Global Dimming is an exchange between two valuable resources: the visibility of the user’s environment, and the device’s *content opacity* (including image quality).

For example, if a user is in a bright room watching content, the application may request Global Dimming be set to a high (dark) value.

If the user is in a poorly lit room, talking with a coworker, the application may prioritize being able to see the coworker well and set Global Dimming to the minimum value.

## What is Segmented Dimming?

Unlike Global Dimming, **Segmented Dimming** utilizes the dimmer panel to allow **specific portions** of content to be dimmed—making virtual content appear more opaque without needing to tint the entire display.

| Global Dimming | Segmented Dimming |
| ----------- | ----------- |
| ![Global Dimming](/img/design-dimmer/global_dimming.gif)    | ![Segmented Dimming](/img/design-dimmer/segmented_dimming.gif)       |


### Design Guidelines

See our [Dimmer Design Guidelines document](/versioned_docs/version-31-Aug-2023/guides/features/dimmer-feature/dimmer-design-guidelines.md) to learn how to improve the visual fidelity of the Segmented and Global Dimmer Feature.

