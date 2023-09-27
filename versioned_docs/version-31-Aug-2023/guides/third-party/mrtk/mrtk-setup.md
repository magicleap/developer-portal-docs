---
id: mrtk-setup
title: Set Up MRTK for Magic Leap 2
description: Setting Up MRTK with Magic Leap 2 for Unity
sidebar_position: 2
date: 10/05/2022
tags: [Unity, Walkthroughs, Samples, MRTK, Input, UI]
keywords: [Unity,Samples, MRTK, Input, UI]
---

## Current Status

| Feature | Status |
|--|--|
| Controller | Release |
| Eye Tracking  | Release |
| Hand Tracking | Pre-Release |
| Voice Commands | Pre-Release |

## Prerequisites

- Magic Leap SDK
- MRTK Foundations v2.8 (see [Import MRTK](#import-mrtk) section below)
- MRTK Examples v2.8 (see [Import MRTK](#import-mrtk) section below)
- A [configured Magic Leap 2 Unity project](/versioned_docs/version-31-Aug-2023/guides/unity/getting-started/configure-unity-settings.md)

:::note

If updating to Magic Leap Unity SDK 1.10.0 or 1.11.0, there may be a compile issue if your project contains the
Unity OpenXR package. A workaround for this is to remove the OpenXR package from the project in this situation.

:::

## Getting Started

### Configure Your Project

1. In Player Settings set the **Active Input Handling** to **Both**. Restarting the editor may be required.
2. Import the  **TMP Essential Resources** by selecting  **Window > TextMeshPro > Import TMP Essential Resources**.
3. Open the Unity Preferences window and set the **Script Changes While Playing** setting to **Stop Playing and Recompile** or **Recompile and Continue Playing**.
4. Install Universal RP from the Package Manager and set a **UniversalRenderPipelineAsset** in the **Graphics Settings**
5. Make sure **Custom Main Manifest** is selected under **Publishing Settings** so MagicLeap Manifest Settings can be set.

### Import MRTK

1. Download version 2.8 of  **MRTK Foundation** and  **MRTK Examples** from the MRTK [GitHub](https://github.com/Microsoft/MixedRealityToolkit-Unity/releases).
2. Import the  **MRTK Foundation 2.8**  package into your Unity project. Apply the recommended settings from the popup window that appears after doing so.
3. It will ask for Script Updating Consent, select **Yes, for these and other files that might be found later**.
4. Next, import the  **MRTK Examples 2.8**  package into your project. Note: Some Oculus prefabs may log an error, these can be cleared.
5. Note that the MRTK Tools package is now required for future upgrading to a newer version of MRTK according to the releases page linked to in #1.  
6. From the top menu Select **Mixed Reality > Toolkit > Utilities> Upgrade MRTK Standard Shader for Universal Render Pipeline**. This will be greyed out unless a URP pipeline asset is set in the Graphics Settings

### Edit MRTK Standard Shader

The standard shader in MRTK may give an error in 2022.2 when building and may block Build and Run. Make these edits in the shader to fix this.

1. On line 775 change `fixed facing : VFACE` to `bool facing : SV_IsFrontFace`
2. On lines 956 and 959 change `* facing` to `* (facing ? 1.0 : -1.0)`

### Import MRTK Magic Leap 2

1. Download the MRTK Magic Leap 2 Unity Asset using the ML Hub Package Manager.
2. Import the asset into your project by going to **Assets > Import Package > Custom Package** and selecting the MRTK Magic Leap Unity package, located under `USER / MagicLeap / tools / unity / mrtk / VERSION /` directory.

### MRTK Magic Leap 2 Examples

You can test the MRTK Magic Leap 2 implementation using the Example scenes located under `MRTK-Magic Leap 2/Samples/`

Make sure the `MixedRealityToolkit's` configuration profile is set to `MagicLeap2 ...`

## Troubleshooting

### Configure Hand Tracking Settings

#### Track a Single Hand

Hand tracking is currently in a preview state. We recommend tracking a single hand. This can be done by setting the following setting on `Start()`

```csharp
        MagicLeapHandTrackingInputProvider.Instance.CurrentHandSettings = MagicLeapHandTrackingInputProvider.HandSettings.Left;
```

#### Disable Hand Tracking

Hand tracking can be disabled by setting the MagicLeapHandTrackingInputProvider's `CurrentHandSettings` to `HandSettings.None` or remove the Magic Leap Hand Tracking Provider from the MRTK input providers

```csharp
        MagicLeapHandTrackingInputProvider.Instance.CurrentHandSettings = MagicLeapDeviceManager.HandSettings.None;
```

