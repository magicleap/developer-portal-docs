---
title: Render Pipeline Settings
sidebar_position: 3
date: 06/27/2022
tags: [Unity, Getting Started, Walkthroughs]
keywords: [Unity, Getting Started, Walkthroughs]
---

This section assumes you created a new project using the URP template. The URP template project includes a collection of various URP assets, each pre-configured with different settings to represent different levels of quality. However, for Android apps running on our platform, the default configuration does not allow for a smooth 60 FPS experience in even the simplest scene. Follow these steps to configure the URP settings in your project to improve performance.

:::info
While using the Universal Render Pipeline is not required, it is strongly recommended because some features, such as Segmented Dimming, will not work properly when using Unity's legacy renderer
:::

## Prerequisites

- [Unity project using Editor version **2022.2.0f1 or higher**](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/create-a-project.md)
- [Configure Unity Settings](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started\configure-unity-settings.md)

## Delete the starter URP assets

To begin, simplify your project by removing the **Pipeline** and **Renderer** assets provided by the template. To do this, select the existing Render Pipeline assets, right-click, and choose **Delete**.

<Image url= {require("/img/unity/universal-render-pipeline-configuration-1.png")} >Delete the starter URP assets</Image>

## Create a new pair of URP assets

From the Unity menu, select **Assets > Create > Rendering > URP Asset (With Universal Renderer)**

## Configure Render Pipeline asset

Select the **Pipeline** asset you just created and tweak the Rendering, Quality, Lighting, and Shadows settings, removing or reducing things unnecessary for the look and feel of your project.

<Image url= {require("/img/unity/universal-render-pipeline-configuration-2.png")} >URP asset in the examples project</Image>

## Set the default Scriptable Pipeline

Open your Project's Graphics settings (**Edit > Project Settings** then select **Graphics**), and set the **Scriptable Render Pipeline Settings** to the URP pipeline asset you created in the previous step.

<Image url= {require("/img/unity/universal-render-pipeline-configuration-3.png")} >The Scriptable Render Pipeline Settings field</Image>

## Next Steps

import Link from '@docusaurus/Link';

<h3><Link to="/docs/guides/unity/getting-started/unity-building-simple-app"> Build A Simple Application</Link> </h3>

Learn how to [build and deploy an application](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/unity-building-simple-app.md) a Magic Leap 2 application. 

<h3><Link to="/docs/guides/unity/app-simulator/unity-app-simulator"> Configure App Simulator </Link> </h3>

The Magic Leap App Simulator can be used to test applications much faster, without deploying them to the physical device. See our [App Simulator for Unity](/versioned_docs/version-31-Aug-2023/guides/unity/app-simulator/unity-app-simulator.md) section to learn how to configure your unity settings to run applications in the Simulator.

<h3><Link to="/docs/guides/third-party/mrtk/mrtk-setup"> Using MRTK for Magic Leap </Link> </h3>

Developers can quickly build or upgrade applications using Magic Leap's MRTK support package. See the [MRTK Magic Leap Getting Started Guide](/versioned_docs/version-31-Aug-2023/guides/third-party/mrtk/mrtk-setup.md) to learn how to use the MRTK for Magic Leap package in your project.

