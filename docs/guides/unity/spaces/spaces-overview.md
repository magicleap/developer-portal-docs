---
id: spaces-overview
title: ML Spaces Overview
sidebar_position: 1
date: 2/16/2022
tags: [Unity, Spaces, ARCloud]
keywords: [Unity, Spaces, ARCloud, Import, Export, Manage, MLSpaces]
---
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# MLSpace Overview

The MLSpace API allows developers to manage Spaces inside their application. This includes functionality such as querying a list of spaces, requesting localization into a specific Space and importing/exporting on device Spaces.

A Magic Leap Space is a container that holds metadata about your scanned environment. It is a digital copy of a physical place and could include spatial anchors, environment meshes, environment objects, etc. Spaces can be created on device or in the Magic Leap AR Cloud. Spaces created in the AR Cloud can be easily shared between other devices.

## Key Features

**Localization Requests:** The Magic Leap Space API enables applications to query the list of Spaces available and discern the Space for device localization. To list the Spaces and initiate localization, the application needs to create a Space Manager. However, only one manager instance can be created per application and this API is not thread safe.

**Importing and Exporting Spaces:** Magic Leap Space API supports exporting and importing on device Spaces. Applications cannot export AR Cloud spaces. Applications will need additional permissions to import/export spaces: `com.magicleap.permission.SPACE_IMPORT_EXPORT` (protection level: dangerous). The format of the exported Space data can change with OS version updates. Backwards compatibility: Space exported using OS version n should work on OS versions up to and including OS version n-4. Forwards compatibility: Space exported using OS version n is not guaranteed to work on OS versions > n. Developers are strongly encouraged to encrypt the exported Magic Leap Spaces.

## MLSpace Structures
The MLSpace API provides several structures that help you manage and interact with your Spaces, including:
- **MLSpace.Settings**: Settings for the Space manager.
- **MLSpace.Space**: Information about a Magic Leap Space.
- **MLSpace.SpaceList**: A list of MLSpace objects.
- **MLSpace.SpaceLocalizationInfo**: Parameters for localization request.
- **MLSpace.SpaceLocalizationResult**: Information about the device's localization state.
- **MLSpace.SpaceImportInfo**: Information needed to import Magic Leap Space.
- **MLSpace.SpaceExportInfo**: Information about the Space export settings.

## MLSpace Enums
There are two enumeration types used in the MLSpace API:
- **MLSpace.Type**: Indicates the type of the Space (OnDevice or ARCloud).
- **MLSpace.Status**: Denotes the current localization status of the device (NotLocalized, Localized, LocalizationPending, or SleepingBeforeRetry).

Please refer to the specific APIs for further details on how to utilize them in your application development. U


<DocCardList items={useCurrentSidebarCategory().items}/>
