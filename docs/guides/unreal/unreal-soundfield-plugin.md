---
id: unreal-soundfield-plugin
title: Soundfield audio plugin for Unreal Engine
sidebar_position: 2
date: 09/30/2023
tags: [Unreal Engine, Audio, Soundfield]
keywords: [Unreal Engine, Audio, Soundfield]

---

This guide shows you how to set up the Soundfield audio plugin for Unreal Engine 5 and use it to spatialize audio in your apps.

You can use Unreal Engine 5 to create apps for Magic Leap 2 devices if you're using Magic Leap 2 SDK for Unreal Engine 5 (Magic Leap 2 Unreal SDK), which is available in preview release.

:::note
Soundfield audio is sometimes referred to as Magic Leap Soundfield Audio or MSA.
:::

## Prerequisites

- Install and set up Unreal Engine 5 and the Magic Leap 2 Unreal SDK. See [Getting Started with Unreal Engine](/docs/guides/unreal/unreal-getting-started/).

- Start and save a project with the Unreal Editor. You configure each of your projects for Soundfield audio.

## Install the Soundfield plugin

1. Open the Magic Leap Hub and open Package Manager.
2. Select the **All** tab.
3. Scroll down to the Soundfield Plugin for Unreal Engine and select it.
    <Image url= {require("/img/unreal-5/soundfield/download_unreal_soundfield.png")} >The Soundfield plugin in the Magic Leap Hub.</Image>
4. If you're installing the plugin for the first time, click the download icon. If you're updating the plugin, click **Update**.
5. Click **Apply Changes** in the side panel.
    <Image url= {require("/img/unreal-5/soundfield/apply_changes_unreal_soundfield.png")} >Apply the changes you selected in the Magic Leap Hub.</Image>
6. To see where the plugin was saved on your computer, click the **Open folder** link , just under the plugin, in the right panel of the Magic Leap Hub.

## Configure an Unreal project for Soundfield audio

To configure an Unreal project for Soundfield audio, copy the Soundfeild plugin into your project file and enable it in the Unreal Editor.

To copy the Soundfield plugin to your project folder:

1. Find the Soundfield plugin files that you downloaded from the Magic Leap Hub. If the top-level folder is not named `Soundfield`, rename it `Soundfield`.
2. In your Unreal Projects folder, go to the folder for the project you want to configure for Soundfield audio.
3. If you don't have a folder named `Plugins` in your Unreal project folder, create one.
4. Copy the `Soundfield` folder containing the Sonderfield (or MSA) plugin to the `Plugins` folder in your Unreal project folder. This example shows how to do this for a Unreal project called `HelloCube`.
    <Image url= {require("/img/unreal-5/soundfield/copy_soundfield_folder.png")} >Copy the Soundfield plugin folder to the folder of an Unreal project called HelloCube.</Image>

To enable the Soundfield plugin in the Unreal Editor:

1. Open your project in the Unreal Editor.
    - When prompted, recompile the Soundfield plugin.
    - When prompted, update your Unreal project.
2. From the Unreal Editor main menu, select **Edit > Plugins** to open the plugins window.
3. Select **Audio** from the project list.
4. Enable the Soundfield plugin by selecting the checkbox next to it.
    <Image url= {require("/img/unreal-5/soundfield/select_soundfeild_in_plugins.png")} >The Soundfield plugin in the Unreal Editor plugin window.</Image>
5. From the Unreal Editor main menu, select **Edit > Project Settings**.
6. In the project settings search bars, search for "plugin".
7. Select **Windows** from the list of platforms on the right.
8. Choose **Soundfield** as the **Spatialization Plugin** and the **Reverb Plugin** settings.
<Image url= {require("/img/unreal-5/soundfield/soundfeild_in_windows_project_settings.png")} >Audio plugin set to Soundfeild in Windows platform project settings.</Image>
9. Select **Android** from the list of platforms. Choose **Soundfield** as the **Spatialization Plugin** and the **Reverb Plugin** settings.
    <Image url= {require("/img/unreal-5/soundfield/soundfeild_in_android_project_settings.png")} >Audio plugin set to Soundfield in Android platform project settings.</Image>
10. Select **Soundfield** from the list of plugins on the right to confirm or edit the Soundfield plugin settings.
    <Image url= {require("/img/unreal-5/soundfield/soundfeild_in_project_settings.png")} >The Soundfield plugin the project settings.</Image>

## Spatialize sounds with the Soundfield plugin

To spatialize a sound in your project:

1. In the Content Browser of the Unreal Editor, select the Content folder.
2. Click the **+Add** icon to create a new folder. Name the new folder **Audio**.
3. Select the **Audio** folder you created.
4. Import a .wav file into your project using the **Import** button.
5. Drag and drop the .wav file into the project map. This creates one AudioComponent actor. The AudioComponent actor has the same name as the .wav file and is Type(AmbientSound).
6. Select the AudioComponent actor that you just created.
7. In the Details tab, under Attenuation, enable **Allow Spatialization** and **Override Attenuation**.
8. In the Details tab, under Attenuation (Spatialization), change **Spatialization Method** to **Binaural**.
    <Image url= {require("/img/unreal-5/soundfield/spatialize_sounds.png")} >Spatialize a sound in your Unreal project.</Image>

### Create a sound cue

To create sound cue for an audio clip:

1. In the Content Browser, go to the **Audio** folder you created, and right-click an imported audio clip. Select **Create cue** to create a sound cue asset. Double-click the sound cue asset to open it.
2. Optional: If you want to make this sound cue a looping audio clip:
    a. In the sound cue working area (the grid with the Wave Player component), right-click and add a Looping component.
    b. Left-click and drag the Wave Player output to the Looping component input. This connects the Wave Player output to the Looping component input.
    c. Left-click and drag the looping component output to the final Output component to connect them.
3. Select the Output component and select the **Attenuation Override** checkbox to see more options.
4. Under Attenuation (Spatialization), select the **Enable Spatialization** checkbox and change **Spatialization Method** to **Binaural**.
    <Image url= {require("/img/unreal-5/soundfield/create_sound_cue.png")} >Create a sound cue for an audio clip in your Unreal project.</Image>
5. Save and close the sound cue.

### Create a sound attenuation asset

Sound attenuation assets can be re-used by multiple spatialized audio assets in your project. If you plan to use this sound attenuation asset with multiple sound assets, give it a name that will make sense to you and other people working with the asset.

To create a sound attenuation asset:

1. Right-click in the Content Browser to open the Sounds tab. In the Sounds tab, select **Sound Attenuation**.
    <Image url= {require("/img/unreal-5/soundfield/create_sound_attenuation_asset.png")} >Create a sound attenuation asset.</Image>
2. Double-click the sound attenuation component (NewSoundAttenuation) and open it for editing.
3. Under Attenuation (Spatialization), select the **Enable Spatialization** checkbox and change **Spatialization Method** to **Binaural**.
    <Image url= {require("/img/unreal-5/soundfield/edit_sound_attenuation_asset.png")} >Edit a sound attenuation asset.</Image>
4. Under Attenuation (Volume), select the **Enable Volume Attenuation** checkbox. Set the inner radius and the falloff distance to the values you want. The values are shown in centimeters.
5. Save and close the sound attenuation asset.
6. In the audio component or sound cue, assign the attenuation asset to the **Attenuation Settings** property. If you don't see **Attenuation Settings**, uncheck the **Override Attenuation**.
    <Image url= {require("/img/unreal-5/soundfield/assign_attenuation_asset.png")} >Assign an attenuation asset to Attenuation Settings</Image>
7. Close and save the audio component or sound cue.

The audio asset should now be spatialized in The Unreal Editor and in built apps.

The audio asset can be parented to an object in the scene and will be spatialized to the location of the object. Set the Sound source transform to 0,0,0 prior to parenting.