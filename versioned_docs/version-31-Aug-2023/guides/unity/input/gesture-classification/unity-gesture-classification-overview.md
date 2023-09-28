---
title: Gesture Classification Overview
sidebar_position: 0
date: 07/08/2022
tags: [Unity, Hand Tracking, Gesture, Classification, Input]
keywords: [Unity, Hand Tracking, Gesture, Classification, Input]
---
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

## Overview

Magic Leap's Gesture Classification API allows developers create interactions based on a user's hand pose. It provides access to calculate specific `KeyPoses` and more inclusive `Postures`. The API can also be used to query finger specific data such as : a finger's length and if the finger is fully extended or not.

|Supported Key Poses | Supported Postures|
|--------------------|-------------------|
|OK , C , Pinch , Finger , L , Thumb , Fist , Open | Pinch , Point , Grasp , Open|

## Namespace

 Classes that are related the gesture classification API can be found in the following namespaces.

```csharp
using UnityEngine.XR;
using UnityEngine.XR.MagicLeap;
```

## Requirements

The Hand Tracking API requires the Hand Tracking permissions to be declared in the application's Manifest. To do this Go to **Edit > Project Settings > Magic Leap > Manifest Settings** and enable `Hand_Tracking`. For more information, refer to the [permissions guide](/versioned_docs/version-31-Aug-2023/guides/unity/permissions/declaring-permissions.md).

<DocCardList items={useCurrentSidebarCategory().items}/>

