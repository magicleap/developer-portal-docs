---
id: app-sim-module
title: UI Modules
sidebar_position: 2
date: 05/12/2022
tags: [Application Simulator, Module]
keywords: [Application Simulator, Module]
---


After opening Application Simulator and starting a session, the Application Simulator module populates with options.

## Application Simulator Module Layout

- A: [Scene View](#a---scene-view)
- B: [Device View](#b---device-view)
- C: [Tool Panels](#c---tool-panels)

<Image url= {require("/img/app-sim/app_sim_panels.png")} >Application Simulator Module Overview</Image>

You can hide or reveal panels, including **Scene View** or **Device View**, using the panels menu.

<Image url= {require("/img/app-sim/panels_button.png")} >Application Simulator Menu Button for Panels</Image>

## Primary Navigation Target Menu

Using this menu you can select the primary target of navigation

<Image url= {require("/img/app-sim/primary_target.png")} >Application Simulator Menu Primary Target of Navigation</Image>

<Image url= {require("/img/app-sim/navigation-target-menu-expanded.png")} >Application Simulator Primary Target of Navigation Expanded Dropdown Menu</Image>

To learn more about Primary Navigation Targets see [Action Bindings and Input Mapping](/docs/guides/developer-tools/app-sim/app-sim-action-bindings.md).

## A - Scene View

Depicts all the entities in the scene. The red lines represent the meshing frustum used in the Simulator.

### Scene View Toolbar

#### Manipulation Mode

| Icon | Description                                                                                 |
|------|---------------------------------------------------------------------------------------------|
| <Image url= {require("/img/app-sim/icons/sv-manipulate-select.png")} >Select icon</Image> | Manipulates selected objects. |
| <Image url= {require("/img/app-sim/icons/sv-manipulate-move.png")} >Move icon</Image>     | Moves the selected objects.   |
| <Image url= {require("/img/app-sim/icons/sv-manipulate-rotate.png")} >Rotate icon</Image> | Rotates the selected objects. |
| <Image url= {require("/img/app-sim/icons/sv-manipulate-scale.png")} >Scale icon</Image>   | Scales the selected objects.  |

#### Anchor Mode

| Icon | Description                                                                                                                     |
|------|---------------------------------------------------------------------------------------------------------------------------------|
| <Image url= {require("/img/app-sim/icons/sv-anchor-base.png")} >Base pivot point icon</Image>     | Set the gizmo transform pivot point to the object base.   |
| <Image url= {require("/img/app-sim/icons/sv-anchor-center.png")} >Center pivot point icon</Image> | Set the gizmo transform pivot point to the object center. |

#### Reference Mode

| Icon | Description                                                                                                                           |
|------|---------------------------------------------------------------------------------------------------------------------------------------|
| <Image url= {require("/img/app-sim/icons/sv-reference-local.png")} >Local reference icon</Image> | Set gizmo transforms to be relative to local object coordinates. |
| <Image url= {require("/img/app-sim/icons/sv-reference-world.png")} >World reference icon</Image> | Set gizmo transforms to be relative to world coordinates.        |

#### Scene View Camera Mode

| Icon | Description                                                                                                                    |
|------|--------------------------------------------------------------------------------------------------------------------------------|
| <Image url= {require("/img/app-sim/icons/sv-camera-top.png")} >Birds-eye view icon</Image>    | Shows a birds-eye view of the room contents in the Mini Map. |
| <Image url= {require("/img/app-sim/icons/sv-camera-freefly.png")} >Free Fly view icon</Image> | Free Fly Camera                                              |
| <Image url= {require("/img/app-sim/icons/sv-camera-reset.png")} >Reset camera icon</Image>    | Resets the camera to its starting position.                  |

#### Gizmos

| Icon | Description                                                                                                                 |
|------|-----------------------------------------------------------------------------------------------------------------------------|
| <Image url= {require("/img/app-sim/icons/sv-gizmos-group.png")} >Group icon</Image> | Select which gizmos to show, such as cache grid, compass, or hands. |

### Editing Objects in the Scene View

If you want to move, rotate, or resize any of the objects in the room:

1. Click the object in the Scene View to select it. A bounding box is drawn around the object.

<Image url= {require("/img/app-sim/virtual-room-object.png")} >Select Object in Scene View</Image>

2. Set your manipulation mode in the toolbar, or press one of the [hotkeys described in Action Bindings](/docs/guides/developer-tools/app-sim/app-sim-action-bindings.md). Ensure you're manipulating the object in the correct transform space by toggling pivot or orientation.

<Image url= {require("/img/app-sim/virtual-room-object-menu.png")} >Change Manipulation of Object in Scene View</Image>

3. Drag the controls on the gizmo to transform the object accordingly. The Headset, Control, and other Magic Leap API placeholders can be moved and rotated, but not resized.

| Move Gizmo                                                                         | Rotate Gizmo                                                                           | Scale Gizmo                                                                          |
|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| <Image url= {require("/img/app-sim/virtual-room-gizmo-move.png")} >Gizmo Move</Image> | <Image url= {require("/img/app-sim/virtual-room-gizmo-rotate.png")} >Gizmo Rotate</Image> | (<Image url= {require("/img/app-sim/virtual-room-gizmo-scale.png")} >Gizmo Scale</Image> |

4. Or, directly edit the Position, Orientation, or Scale of the object in the Scene Graph panel.

## B - Device View

This composites the graphics from the eye buffers with a view of the scene as seen from the point of view of the headset.

## C - Tool Panels

The panels provide information, controls, and configuration options for your scene, including simulated API data values and mouse sensitivity.

### Scene Graph Panel

Load new virtual rooms or custom models, or edit the objects on the scene.

#### Scene Graph Toolbar

| Icon | Description                                                                                                                                                                                                                                                 |
|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <Image url= {require("/img/app-sim/icons/sg-load-room.png")} >Load room icon</Image> | **Load Virtual Room** – You can load any `.room` file exported from the Virtual Room Generator or any session that has been converted to a `.room` file using the Package Session as Room option in the Session drop down.                                                      |
| <Image url= {require("/img/app-sim/icons/sg-add-model.png")} >Add model icon</Image> | **Add Model** – You can import individual 3D objects into your virtual room. The following formats are supported: `.3ds` 3ds Max; `.ase` 3ds Max; `.blend` Blender 3D; `.dae` Collada; `.fbx` Autodesk 2014/2015, *not* 2016+; `.obj` Wavefront; `.ply` Stanford Polygon Library; `.gltf`, `.glb` GL Transmission format |
| <Image url= {require("/img/app-sim/icons/sg-clear-room.png")} >Clear room icon</Image>  | **Clear Virtual** Room                                                                                                                                                                          |

### Properties

Select an object in the scene graph or in the scene view to change the position, orientation, or scale using X,Y,Z values.

### Rendering Panel

<Image url= {require("/img/app-sim/rendering-panel.png")} >Overview of the Rendering Panel in Application Simulator</Image>

### Scene View Camera Panel

:::tip
Position values are given in meters.

Orientation values are given in degrees.

Check boxes are boolean toggles for the associated property: selected is true, clear is false.
:::

To change the value of any numeric property:

- Click inside the field, type the new value, and then press Tab or Enter.

    -or-

- Pause on the label of a field. When the pointer changes to a ↔, drag the pointer to change the value.

### Head Pose Panel

Represents the position, orientation, and state of the Headset’s head pose.

The default starting position of the Headset is at (0, 2, 0) which is 2 meters high in the center of the virtual room.

### Control Panel

Represents the position, buttons, and touchpad inputs of the controllers.
You can also enable Control Head Pose Follow mode, which keeps the controllers in their relative positions when the Head Pose moves.

#### Actions

A touchpad touch registers only when the z (force) value is greater than zero. You can also send button presses.

#### Touchpad Gestures

You can perform swipes and other touchpad gestures.

1. Set the Gesture Type.
2. Change the Touchpad Gesture State to Start, and then change it to End.
3. Set the Gesture Direction.

### Hand Tracking Panel

Represents the position, orientation, and recognized static hand poses of the hand tracking system. Application Simulator can simulate the current Hand Tracking API.

For each selected gesture, your app receives notice of the recognized gesture, the confidence value, and the world coordinates (position and orientation) of the gesture.

A gesture with a confidence value of 0 is still a detected gesture. To indicate no detected gesture, click the no-hand gesture.

<Image url= {require("/img/app-sim/hand-tracking-key-pose.png")} >No Detected Gesture Selector in Hand Tracking Panel</Image>

:::note
The Simulator detects gestures and key points outside the meshing frustum. This is by design, but remember that on device, gestures outside the meshing frustum are not detected.
:::

### Eye Gaze Panel

Represents the vergence point (formerly called fixation point), the positions of the eyes, and the state of the eye tracking system.

The Fixation Position is a world coordinate.

The eye positions are the positions of the center of the eyes as would be reported by the eye tracking cameras.

We do not make any effort to correlate the fixation position with the values you enter for your eye position. You can set them independently and it is up to you to enter realistic values.

### Image Tracking Panel

Represents the position and orientation of image targets used by the Image Tracking system.

To simulate image tracking, add one or more image tracking target cubes in the Simulator. Click the “Add Target” button to add a target cube. You can change the position and orientation of the target cubes either in the Image Tracking properties or by manipulating them directly in the Scene View.

Each target cube represents an image you are actively tracking in your app. You can move and rotate these target cubes in the Scene View. Any target cubes within the meshing frustum are considered detected and tracked. The meshing frustum in the Simulator has a back clipping plane of 4.0 m.

Image Targets begin their life unassigned. When unassigned they do not represent a specific image in the environment. You can think of them as transparent plastic or simply non-existent. Image Targets are not automatically assigned, they require user interaction.

<Image url= {require("/img/app-sim/image-tracking-populate.png")} >Creating New Image Target</Image>

Once an application that uses the Image Tracking API has made a request to populate target image data, these images will appear as textures that can be mapped to any image target that you have created and placed in the scene.

The texture associated with the tracked image will be rendered by the image target cube in the Simulator. If no image is currently associated with the image target, it will be rendered as a red cube.

### System Events Panel

Provides the ability to trigger various System Events that the device can generate under different conditions. Common System Event sequences have been provided that attempt to mirror the behavior of the event cycles on the real device. Individual events can also be triggered manually.

<Image url= {require("/img/app-sim/system-events.png")} >System Events Panel</Image>

### Permissions Panel

Provides the ability to set states for several permission areas supported by the MLSDK. The permission states (**Allowed**, **Denied**, **Pending**) are enforced during ML API invocations, as documented in API headers.

<Image url= {require("/img/app-sim/permissions.png")} >Permissions Panel</Image>

When an API finds a permission state to be in **Pending** state, it signals the UI to generate a popup that lets the user allow or deny the permission.

<Image url= {require("/img/app-sim/permissions_pending.png")} >Permissions Panel</Image>

The UI lets you load a manifest file that filters available permissions to those specified in the file. All permission requests that are not specified in the manifest are denied. Two pre-defined filters, ZI PERMISSIONS and ALL PERMISSIONS, are also provided. The former filters permissions to areas supported by Application Simulator, whereas the latter filters to all permissions in the MLSDK.

All permission states can be saved in a named **Profile** and persist across Application Simulator sessions. The UI also has a **...** button that brings up a menu to save, load, and delete profiles. Additionally, all permission states can be set to allowed, denied, pending, or default. When set to default, all normal permissions state are set to allowed state, whereas all dangerous permissions are set to pending state.

<Image url= {require("/img/app-sim/permissions_profile.png")} >Permissions Panel</Image>

:::info
The permissions panel allows you to test workflows that require specific "Dangerous" permissions from the Application Simulator workflow in a more convenient way than on device, which requires fully uninstalling your app to test.  

That said, the default behavior is to allow all permissions recognized by Application Simulator, so that you can opt into the workflow as needed.

When developing ML C API applications, since Application Simulator does not simulate the AOSP Java runtime, you should conditionally replace the AOSP Java APIs with corresponding C API calls from `ml_zi_permissions.h`. When developing Unity scenes, the ML Unity SDK will automatically prompt for these permissions as needed via the Magic Leap Hub or Unity Editor.
:::

## Simulator Limitations

:::note
We verify that the values you enter are valid, but not whether they are realistic. That is so you can make sure your app can handle edge cases or seemingly nonsensical API data.
:::

### Audio

Applications exercising ML Audio APIs can play audio both on host and device. Audio input and analysis support is not implemented.
