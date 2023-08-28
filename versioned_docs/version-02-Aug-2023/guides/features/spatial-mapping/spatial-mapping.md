---
title: Spatial Mapping
sidebar_position: 5
date: 12/16/2022
tags: [Overview, Perception, Meshing, Planes]
keywords: [Overview, Perception, Meshing, Planes]
---

Magic Leap 2's Spatial Mapping APIs build a digital representation of the real-world surfaces around the user in real-time using the ToF sensors on the device. Apps can use this representation to occlude rendering, place digital objects, and for physics-based interactions or ray-casting. The depth sensor has the resolution of 544 x 480 and a felid of view of 75° (h) x 70°

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

## Building a Mesh

Spatial Mapping integrates sensor data over time from multiple viewpoints. The device pose (position and orientation) is tracked in the head-tracking component as the device moves. The sensor frame's pose is known as is its relationship to other poses. These environment viewpoints of the user's space are combined into a single reconstruction. With spatial and temporal averaging, that is averaging data from multiple viewpoints over time, the device builds a digital reconstruction which is more complete and less "noisy" than the original sensor data.

World reconstruction has 2 outputs from the model it builds:

Meshing - Triangulated meshes from the low-level reconstruction data
Plane Extraction - A set of rectangular planar regions

## Best Practices

### Environment

The environment should be mostly static with change like objects or people moving in front of the device only occasionally. For small changes, the reconstruction slowly update over several seconds to add or remove moved objects. Outdoor environments or environments with continuous change can leave holes or inaccurate geometry in the internal model.

Spatial Mapping discretized the 3D space of the real-world so that the minimum size of an object you can expect to reconstruct (i.e. the smallest detail you can see) is about 4cm wide. Thin structures like lamp stands, chair legs, chair backs, or thin monitors might not appear or might occasionally disappear when viewed from the side.

Spatial Mapping depends on accurate head tracking. Pose drift can occur more often in larger scale, darker or low texture environments. Head tracking's pose correction can cause visible, minor mis-alignments of reconstructed surfaces with respect to the real-world.

When users move into previously reconstructed areas they have reconstructed previously in the same session, the internally persisted model loads and the reconstruction outputs is updated. Persisted spatial mapping data is cleared at when the device powered off and a new reconstruction will always be started. Similarly,complete loss and reset of head tracking or head-tracking map change events can clear reconstruction data.

### Movement

Move around - Users should explore their space. Look behind furniture or objects to achieve the best reconstruction.

Don’t move fast or suddenly - Reconstruction works best during moderate movement and might ignore data viewed at high speed. Smooth, slow motion with stationary periods are the best for world reconstruction.

### Distance

Reconstruction sensors have a limited range. Maintain a moderate distance from objects and surfaces you are scanning. Optimal range: between 40cm and 5m from objects.

If an object is removed but its reconstruction does not disappear from the old location, ensure the sensors can see other surfaces behind the old object's location within 5m. The system knows that it can remove this data. You are encouraged to move around/re-scan an area to be able to fully update the reconstruction.

### Lighting and Materials

Sunlight or bright Infrared (IR) light negatively affect reconstruction quality and its output. This can result in holes or incorrect geometry.

The sensors might not see black, shiny or absorptive objects. This can lead to holes in the reconstruction. Try scanning from different angles, especially perpendicular to challenging surfaces.

Transparent objects like glass object will not appear in reconstruction.

Avoid mirrors because the reflection of the real world can cause distortion behind the plane of the mirror. This can overwrite previous valid reconstructed surfaces.

## More Information

<DocCardList items={useCurrentSidebarCategory().items}/>

