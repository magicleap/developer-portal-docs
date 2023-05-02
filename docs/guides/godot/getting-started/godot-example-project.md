---
id: godot-example-project
title: Godot Example Project
sidebar_position: 3
date: 5/2/2023
tags: [Android, Godot, Example]
keywords: [Android, Godot, Example]
---

:::warning Git LFS
The following project must be `clone`d with a working installation of [`git lfs`](https://git-lfs.com/). Downloading as an archive (`.zip`/`tar.gz`) will not work as all files tracked with `lfs` will be file pointers with no content:
:::

## `clone` the Project

```shell
git clone https://codeberg.org/singlerider/godot-samples.git
```

## Important Notes

The most important part of this project are the following portions:

### Export Presets

A core feature of Godot Engine is the ability to have plug-and-play export options for many platforms. For Magic Leap 2, a full profile is included in the project:

- <https://codeberg.org/singlerider/godot-samples/src/branch/main/export_presets.cfg>

### XR Interface

If the XR Interface is not set correctly, nothing will render in the headset after launching.

- <https://codeberg.org/singlerider/godot-samples/src/branch/main/main.gd#L6>
