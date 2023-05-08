---
id: godot-installation
title: Godot Installation
sidebar_position: 2
date: 5/2/2023
tags: [Android, Godot, Setup]
keywords: [Android, Godot, Setup]
---

Godot is a a lightweight engine that, strictly speaking, has no installation client — it is merely downloaded and executed from that downloaded location. There is even a [web-based editor](https://editor.godotengine.org/releases/4.0.2.stable/godot.editor.html)!

## Download

Godot Engine 4 can be [downloaded from their Downloads page](https://godotengine.org/download).

## Prepare Android Exports

Magic Leap 2 is based on the Android Open Source Project and therefore requires a build pipeline compatible with Android. A one-time setup will have to be performed using [these instructions](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_android.html) for exporting to Android.

:::tip Signing an App
The above instructions outline steps for setting up a `debug.keystore` file. These steps are only required if signing an application, which is not a strict requirement when developing for ML2.
:::
