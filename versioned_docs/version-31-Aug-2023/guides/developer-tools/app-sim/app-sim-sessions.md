---
id: app-sim-sessions
title: Session Files
sidebar_position: 4
date: 08/29/2022
tags: [Application Simulator, Session Files]
keywords: [Application Simulator, Session Files]
---


Use session files to re-use your current scene setup for testing or to share your setup with other members of your team. Session information includes:

- Current scene graph layout, such as your lights or the contents of your virtual room
- Gizmo state, a combination of the virtual room-specific gizmo state and the state of the Simulator property panels
- Observed Geometry Cache (scanned environment state and for meshing and planes APIs)

You can save or load a session file from the Session dropdown in the Target Selector:

<Image url= {require("/img/app-sim/sessions-menu.png")} >Session Files Menu with Example Session</Image>

By default, session files are saved and opened from the `/MagicLeap/tools/zi/<version>VirtualDevice/data/VirtualRooms/ExampleRooms` folder.

## Save a session file

1. Expand the Session drop-down list.
2. Click **Save Session**, and then enter the file name.

<Image url= {require("/img/app-sim/sessions-save.png")} >Save a Session Dialogue Window</Image>

Your session data is now saved. See the section "Share a session" on how to share a session file.

## Open a session file

1. Expand the **Session** drop-down list.
2. You can open a recent session directly from the drop-down list, or click **Open Session**.
3. Select the session you want to open.

Your session is now loaded into the scene view, including the virtual room, hand gestures and any scanned meshes.

When you make changes to the scene, you can save the changes to the current session or to a new session using **Save As...**.

## Share a session file

You cannot directly share `.session` files as the file paths contained in them are local to the machine. You must convert them to a `.room` archive using the script `packageSession.py`.

The script can directly be executed from the UI.

1. Expand the **Session** drop-down list.
2. Click **Package Session as Room** to save the currently loaded `.session` file to a `.room` archive.

Alternatively, you can also execute it from the command line.

1. Open a terminal from ML Hub.
2. Ensure `python3` can be found.
3. Run the following command:

Windows:

```shell
python3 %ML_ZI_ROOT%\scripts\packageSession.py <path_to.session> <output.room>
```
macOS:

```shell
python3 $ML_ZI_ROOT/scripts/packageSession.py <path_to.session> <output.room>
```


