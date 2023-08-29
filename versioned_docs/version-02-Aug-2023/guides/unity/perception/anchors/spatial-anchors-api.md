---
id: spatial-anchors-api-overview
title: Spatial Anchors API
description: Learn the core API calls required to implement Magic Leap 2's Spatial Anchors API.
sidebar_position: 2
date: 2/24/2022
tags: [Unity, Perception, Anchors, Persistence]
keywords: [Unity, Perception, Anchors, Persistence]
---

This section provides an overview of the core API calls required to get started developing using Magic Leap 2's Spatial Anchors API.

## Get Localization Info

Players must be localized in order to publish, delete or query existing anchors. This can be queried using the `MLAnchors.GetLocalizationInfo` API.

:::caution
This feature requires the `SPATIAL_ANCHORS` permission to be enabled in your project's Manifest Settings. (**Edit > Project Settings > Magic Leap > Manifest Settings**)
:::

```csharp
    //Get the user's current Localization Info
    MLResult mlResult = MLAnchors.GetLocalizationInfo(out MLAnchors.LocalizationInfo info);
    //If we were able to get the localization info, debug it.
    if (mlResult.IsOk)
    {
        // Debugs the current LocalizationInfo.
        //(LocalizationStatus, MappingMode, SpaceId and SpaceName)
        Debug.Log(info);
    }
    else
    {
        //Otherwise print the error
        Debug.Log("GetLocalizationInfo Error " + mlResult);
    }
```

## Querying Anchors

Developers can query the anchors in the Player's current map using the `MLAnchors.Request` API.

Before a map can be queried, developers are required to create the requests parameters, providing a location, search radius, maximum number of results, and whether the anchor results should be sorted by distance.

If `0` is provided for the search radius or maximum number of results, the default value will be used, and the search will not be constrained.

After the `Params` are configured, the `MLAnchors.Request` needs to be initialized, started and then queried.

The `MLResult` return values from `MLAnchors.Request.Start()` and `MLAnchors.Request.TryGetResult()` should be used to prevent runtime errors when queries are invalid.

```csharp
    //Specify the Request's parameters
    MLAnchors.Request.Params anchorRequestParams = new MLAnchors.Request.Params(Vector3.zero, 0, 0,false);
    // Initialzie the Request
    MLAnchors.Request mlAnchorsRequest = new MLAnchors.Request();
    // Starts the search using the parameters above.
    MLResult startResult = mlAnchorsRequest.Start(anchorRequestParams);
    // Query the search for anchors.
    MLResult resultStatus = mlAnchorsRequest.TryGetResult(out MLAnchors.Request.Result result);
```

## Creating New Anchors

Anchors can be created inside your application or using the Mapping Tool. When creating an anchor you will need to specify a **location** and **expiration time**.

- When the Pose is set to default, the anchor will spawn at the origin.
- When the expiration time is set to zero, the anchor will be kept in a space indefinitely.

After an anchor is created, it needs to be published on the map.

:::tip
The closer an anchor is to the place where the device localized (not necessarily the origin) the more reliable the anchor will be.
:::

:::caution
Anchors can be created at any time, but they can only be published after localization. Localization status can be obtained using the `MLAnchors.GetLocalizationInfo()` API.
:::

```csharp
    MLAnchors.Anchor.Create(controllerPose, 300, out MLAnchors.Anchor anchor);
    anchor.Publish();
```

## Removing Anchors

Anchors can be deleted using their ID.

:::caution
The user must be localized before deleting existing Spatial Anchors. Localization status can be obtained using the `MLAnchors.GetLocalizationInfo()` API.
:::

```csharp
  MLAnchors.Anchor.DeleteAnchorWithId(anchor.Id);
```

