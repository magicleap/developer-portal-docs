---
id: global-segmented-dimming-feature
title: System Settings
sidebar_position: 2
date: 07/28/2022
---

# Global/Segmented Dimmer Settings

This article includes information on how to configure Magic Leap 2's segmented and global dimmer system settings.

## Enable Segmented Dimmer

The devices dimmer can be enabled or disabled using the System Settings.

1. Open the **Settings** application and select the **Display** option

<Image url= {require("/img/settings-dimmer/ML_DisplaySettings.png")} ></Image>

2. Enable or Disable the segmented dimmer using the toggle.

<Image url= {require("/img/settings-dimmer/ML_DimmingToggle.png")} ></Image>

### Safety

High opacities of Global and Segmented Dimming can create hazards to users by lowering visibility in their environments. Thus, it’s important to be aware of your user’s environment and consider what content truly needs to be high opacity and how you can maximize the visibility of both the real and virtual worlds. For example, choosing to globally dim more than 50% of the user’s environment may be limiting the experience if the user needs to see the real world while using the application.

You can set a maximum value for both Global and Segmented Dimming for your application,  but consider that a user can always choose to override this permission and set their own maximum values that they’ve configured in Settings.

<Image url= {require("/img/design-dimmer/settings.png")} >Settings</Image>

Manual settings found in  **Settings > Display**.

## Design Considerations

Please refer to the [Segmented Dimmer Design Guidelines](/docs/guides/features/dimmer-feature/dimmer-design-guidelines.md) to learn about optimizing your app for Segmented Dimming.
