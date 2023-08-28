---
id: sdk-hand-meshing-scene
title: Hand Meshing
description: An overview of the hand meshing demo scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 9
date: 3/21/2022
tags: [Unity,Walkthroughs, Examples, Samples, XR Interaction Toolkit, Hand, Meshing]
keywords: [Unity,Walkthroughs, Examples, Samples, XR Interaction Toolkit, Hand, Meshing]
---


## Overview

This example demonstrates and prescribes preferred methods for hand meshing.

The example provides a HandMeshingExample script that drives parameters of the meshing API through the MLHandMeshingBehavior.

### Render Modes

- Occlusion: Using an unlit black material, anything behind the hand will be occluded.
- Flat: The hand mesh will be rendered with an unlit white material.
- Wireframe: The hand mesh will be rendered with a wireframe material.
- Paused: The hand mesh will stop updating, freezing any mesh previously acquired.

## Requirements

Mandatory privileges required by this feature:

- HandMesh

Privileges required by this example:

- GesturesSubscribe
- GesturesConfig
- ControllerPose

