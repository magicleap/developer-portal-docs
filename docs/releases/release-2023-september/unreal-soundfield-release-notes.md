---
id: unreal-soundfield-release-notes
title: Soundfield Audio Unreal Plugin 3.4.2 
sidebar_position: 2
date: 09/26/2023
---
## New for 3.4.2

- Early Access Unreal MSA plugin supporting default spatial audio - initial release. Customization via exposed properties not yet supported, will be available in future version.

## Known Issues

- OS Offload mode produces audio artifacts under certain conditions. Recommend using MSA plugin in App-Hosted mode (default).
- Changing MSA Plugin distance unit does not have an effect. Unreal engine distance unit behaving as expected, but recommend using default distance units (cm).
