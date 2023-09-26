---
title: Import and Export Spaces
description: Learn how to import and export maps between devices using ADB.
sidebar_position: 5
date: 2/24/2022
tags: [Perception, Anchors, Persistence]
keywords: [Perception, Import, Export, Spaces, Maps, Anchors, Persistence]
---

## Exporting and Importing Spaces

The Magic Leap allows developers to import and export spaces from other devices via `adb` and the `mlmapping` command line tool. You can use this feature to to co-locate devices without access to an ARCloud instance. The traditional workflow is that one device is used to create a high-quality map of an area including any Spatial Anchors, then that information is imported into any other devices that will be used in the same Space. Then, each device can localize against the same target map and view the same Spatial Anchors.

### Prerequisites

- A Magic Leap 2 that has a high quality map of the space you want to import.
- If you are using this feature for co-location, the space will need to contain at least 1 Spatial Anchor. These anchors can be created using the `MLSpatialAnchor API` ([Unity](/versioned_docs/version-31-Aug-2023/guides/unity/perception/anchors/spatial-anchors.md),[Native](/versioned_docs/version-31-Aug-2023/api-ref/api/Modules/group___magic_leap_spaces/group___spatial_anchor/group___spatial_anchor.md)). You can also use the sdk test/sample applications to create anchors. Any anchors created while localized to the space will be exported.

### Exporting a Space

To download the Space data to your host machine so it can be shared to other devices, first export the data to a user-readable directory on the device.

```bash
adb shell mlmapping -export_space “map name”
```

:::caution

If you use the Space ID instead of its name you must include curly braces `{}`, for example:

```bash
adb shell mlmapping -export_space {f7afd449-ab0f-7018-899e-01391c16cdd0}
```

:::

You can find info for all of the maps on the device using the following command:

```bash
adb shell mlmapping -spaces
```

You can then run the following command to download the zip file to your host machine:

```bash
adb pull /path/to/file
```

### Importing a Space

With the Space data exported, you can import it to another device. First you you will need to upload/push the file from your host machine to a directory on your device. This can be done using the following command , replaceing `<src>` with the path to the exported space data and `<dst>` pointing to a path on the device (e.g `/sdcard/Download`)

```bash

adb push <src> <dst>

```

Then import the zip so the data can be used

```bash

adb shell mlmapping -import_space /path/to/zip

```

:::caution

If you use the Space ID instead of its name here as well you must include the curly braces `{}`, for example:

```bash

adb shell mlmapping -import_space /path/to/{f7afd449-ab0f-7018-899e-01391c16cdd0}.zip

```

:::

### Using the Imported Space

Open the “Spaces” app and select the imported space to localize into. Once localized, the localization information and Spatial Anchors will be visible and available to any application on the device via the `MLSpatialAnchor` API.

### Testing on a Single Device

If you want to test using a single device, you can simulate having multiple devices by [exporting an existing space](#exporting-a-space) , then erasing the spaces stored on the device running the following command.

```bash

adb shell mlmapping -clear_all_data

```

After this is complete you can [import the exported data](#importing-a-space) to the device.

:::note

If you run any of the commands while the Spaces app is running, you will need to restart the application to see the changes take place.

:::
