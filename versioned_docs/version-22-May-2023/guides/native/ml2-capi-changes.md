---
id: ml2-capi-changes
title: API Changes
sidebar_position: 3
date: 12/21/2021
---

## Magic Leap 1 Features Not Supported in Magic Leap 2

### MLInput

The Magic Leap 2 Controller lacks display LEDs. The following APIs are not supported in Magic Leap 2:

* MLInputStartControllerFeedbackPatternLED
* MLInputStartControllerFeedbackPatternEffectLED.
* ML2 does not support Wacom tablets.
* MLInput will not support mouse and keyboard events, use NDK APIs for this.

### MLPersistentCoordinate Frames

Local PCFs are not supported on Magic Leap 2. They will be replaced by Anchor APIs.

## MLCamera Changes

Magic Leap 2 comes with a new camera stack (both hardware and software) and introduces new camera APIs. Magic Leap 1 camera APIs will no longer be supported in Magic Leap 2.

:::info
Even though Android SDK and NDK provide Camera APIs, only APIs from ml_camera_v2.h are supported with Magic Leap 2 Cameras. Standard Android Camera APIs are not supported. ML Camera APIs still require the standard Android permissions (android.permission.CAMERA).
:::

## Library Renaming

AOSP has introduced new naming conventions for public libraries. Library names have changed between Magic Leap 1 and Magic Leap 2.

|  Magic Leap 1 | Magic Leap 2 |
|:-- |:--- |
|libml_audio.so |libaudio.magicleap.so |
|libml_bluetooth_adapter.so |libbluetooth_adapter.magicleap.so |
|libml_bluetooth_gatt.so|libbluetooth_gatt.magicleap.so|
|libml_bluetooth_le.so|libbluetooth_le.magicleap.so|
|libml_camera.so|libcamera.magicleap.so|
|libml_camera_metadata.so|libcamera_metadata.magicleap.so|
|libml_graphics.so|libgraphics.magicleap.so|
|libml_graphics_utils.so|libgraphics_utils.magicleap.so|
|libml_input.so|libinput.magicleap.so|
|libml_media_ccparser.so|libmedia_ccparser.magicleap.so|
|libml_media_cea708parser.so|libmedia_cea708parser. magicleap.so|
|libml_media_codeclist.so|libmedia_codeclist.magicleap.so|
|libml_media_codec.so|libmedia_codec.magicleap.so|
|libml_media_crypto.so|libmedia_crypto.magicleap.so|
|libml_media_drm.so|libmedia_drm.magicleap.so|
|libml_media_error.so|libmedia_error.magicleap.so|
|libml_media_extractor.so|libmedia_extractor.magicleap.so|
|libml_media_format.so|libmedia_format.magicleap.so|
|libml_media_muxer.so|libmedia_muxer.magicleap.so|
|libml_media_player.so|libmedia_player.magicleap.so|
|libml_media_recorder.so|libmedia_recorder.magicleap.so|
|libml_perception.so|libperception.magicleap.so|
|libml_platform.so|libplatform.magicleap.so|

## Removed Features

The following features are scheduled for removal with Magic Leap 2 launch. Some of them will be replaced by Android APIs (e.g. `ml_imu_tracking.h`), some will be replaced within the Magic Leap APIs (e.g. `ml_persistent_coordinate_frames.h` will be replaced by the anchors APIs), and some will be removed completely (e.g. `ml_purchase.h`).

1. ml_app_connect.h
2. ml_connections.h
3. ml_contacts.h
4. ml_screens.h
5. ml_found_object.h
6. ml_persistent_coordinate_frames.h
7. ml_passable_world.h
8. ml_data_array.h
9. ml_avatar.h
10. ml_dispatch.h
11. ml_lifecycle.h
12. ml_logging.h
13. ml_keycodes.h
14. ml_app_analytics.h
15. ml_identifier.h
16. ml_identity.h
17. ml_cloud.h
18. ml_secure_storage.h
19. ml_sharedfile.h
20. ml_fileinfo.h
21. ml_locale.h
22. ml_privilege_functions.h
23. ml_privileges.h
24. ml_purchase.h
25. ml_networking.h
26. ml_token_agent.h
27. ml_invoke_async.h
28. ml_location.h
29. ml_imu_tracking.h

