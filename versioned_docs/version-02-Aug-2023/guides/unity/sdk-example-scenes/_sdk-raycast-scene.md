---
id: sdk-raycast-scene
title: Raycasting
description: An overview of the raycast scene included in the Magic Leap 2 Examples Project, which uses Unity's XR Interaction Toolkit.
sidebar_position: 17
date: 03/21/2022
tags: [Unity,Walkthroughs, Examples, Samples, XR Interaction Toolkit, Raycasting]
keywords: [Unity,Walkthroughs, Examples, Samples, XR Interaction Toolkit, Raycasting]
---


## Overview

This example scene demonstrates and prescribes preferred methods for raycasting using MLRaycast.

There are three raycast modes: controller, head, and eyes.

A cursor will be displayed at the current raycast hit point by subscribing to that raycast's event callback. The same cursor will not show when the raycast does not hit.

When using eye raycast, make sure the calibration status is good for accurate results. Otherwise, run eye calibration from your device settings.

## Requirements

Mandatory privileges required by this feature:

- WorldReconstruction

Privileges required by this example:

- ControllerPose

