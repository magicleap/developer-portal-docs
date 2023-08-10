---
title: Spatial Mapping
sidebar_position: 6
date: 08/10/2023
tags: [Overview, Occlusion, Meshing, Planes]
keywords: [Overview, Occlusion, Meshing, Planes]
---

# MagicLeap Occlusion API

The MagicLeap Occlusion API enables you to create a mesh representation of near field objects, so they can be used for occlusion of virtual objects for a better immersion experience. The Occlusion API is an experimental API that could be changed or removed at any time.

# What is Object Occlusion?

Object Occlusion allows you to accurately render virtual objects alongside real-world objects. Without object occlusion, when you render a virtual object, it will just appear on top of everything in front of the scene. Object occlusion determines the depth of a scene, how far away a virtual object would appear based on depth, where it would be located, and how much of it you can see. For example, if you wanted to place a virtual object like a lamp so you can see part of it sticking out from behind a sofa, you’d use object occlusion to render it so that part of the lamp is obscured, and part of it in view. Without object occlusion, the lamp would float in front of the sofa. 

MagicLeap offers object occlusion. You can read more about object occlusion in Google’s documents for the [Depth API](https://developers.google.com/ar/develop/depth). 

# Features of the MagicLeap Object Occlusion API
This section provides a high-level description of the features of the MagicLeap Object Occlusion API. The API enables developers to:

* Set minimum/maximum distance to occlude objects (range from 0.3m to 7.5m), with the option to set these on initialization of the API.
* Obtain an occlusion mesh and retrieve the latest one. 

:::note
Currently, mesh data is returned at 5hz.
:::

# MagicLeap Object Occlusion API Resources
You can read more about what the Object Occlusion API offers in the MagicLeap documentation: [Occlusion](https://developer-docs.magicleap.cloud/docs/api-ref/api/Modules/group___occlusion)s.
