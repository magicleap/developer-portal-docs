---
id: arcloud-overview
title: AR Cloud
date: 02/07/2023
tags: [ARCloud, Cloud, Mesh, Meshing, Map, Mapping]
keywords: [ARCloud, Cloud, Mesh, Meshing, Map, Mapping]
---
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
import SystemRequirements from './_system_requirements.md';

## Overview

AR Cloud is a connected service that allows Magic Leap 2 devices to access large-scale spatial data. This spatial data can be managed on the web-based console where digital twin administrators create Shared Spaces, manage device-side scans, and merge scans to contribute to larger-scale Spaces. AR Cloud admins are able to import and export spatial maps, manage large-scale digital twin deployments, and monitor Magic Leap 2 device access.

:::info Licensing
See our guide on required licensing to be able to use AR Cloud on your device(s):

[AR Cloud Licensing](/versioned_docs/version-31-Aug-2023/guides/arcloud/arcloud-licenses)
:::

## Benefits

AR Cloud allows users to go beyond the limitations of their Magic Leap 2 devices. The following features help enhance a user’s Magic Leap 2 experience:
- Co-present experiences – allows multiple users to experience the same digital content in the same place through shared maps and their spatial anchors.
- Large spatial maps (>10,000m<sup>2</sup>) – without AR Cloud, each device has a limit of five Local Spaces of ~250m<sup>2</sup>.
- Device access to an unlimited amount of [Spaces](/versioned_docs/version-31-Aug-2023/guides/features/spaces/spaces-tool) – Magic Leap 2 devices can gain unlimited access to shared Spaces, as opposed to the 5 stored locally.
- Textured mesh exports – export textured mesh scans of your Space in USD file format.

## Getting Started

### System Requirements

<SystemRequirements />

### Leap Brush

After installation of AR Cloud, we welcome you to try our first-party, Open Source project, [Leap Brush](https://github.com/magicleap/LeapBrush).

This project will allow you to quickly ramp up to a multi-user, collaborative experience, leveraging AR Cloud's power features. The project can work over local area network (LAN), enabling virtually no latency for your shared experience.

## Resources

<DocCardList items={useCurrentSidebarCategory().items}/>

