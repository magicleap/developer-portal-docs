---
id: drawtrace
title: DrawTrace
sidebar_position: 3
date: 09/11/2023
engine: All
tags: [Debugging, Graphics, DrawTrace]
keywords: [Debugging, Graphics, DrawTrace]
---

## Overview

Draw tracing is a tool to aid you in understanding how long your draw calls take. The process involves running the tool on the ML2 device to generate a ‘trace log’ on the device while your app is running. This captures the relevant app activity in the file. The file is then transferred onto the host PC to view in the browser. The tool used on device is called Perfetto and when run it generates a file called trace.pftrace on the device.

### Prerequisites

* Magic Leap Hub
* Magic Leap device

### Set up adb
You need adb for this project. The adb tool is part of the Magic Leap Hub. Do the following:

1. Navigate to **C:\Users\_user_\MagicLeap\MLHub\plugins\com.magicleap.adb.win32.x86_64_1.0.41.28_0_2_202304071616\adb\adb.exe** for windows. Add this path to your Path environment variable on windows. 

2. Check that you have access to adb by running: ```adb devices```
You should see that your device is connected to the host. <Image url= {require("/img/developer-tools/lumin-aosp-tools/radeon-gpu-profiler/rgp_device_connected.png")} >Check Device Connection with adb</Image>

3. Connect your Magic Leap 2 device to WiFi. Public WiFi will not work since peer-to-peer connections are disabled on public WiFi. Try connecting to a private WiFi network with password protection. 

4. You can verify WiFi communication with these commands: 
```shell 
adb shell ip -o -h -c a #reveals the IP address of your device under wLan0
```

5. Now you need to set the properties required for capture in adb. Run these commands:
```shell
adb shell setprop persist.traced.enable 1
adb shell setprop ml.graphics.tracing.vk.enable 1
adb setprop ml.graphics.tracing.gl.enable 1
```

6. You also need a config file for the capture. You can set up for a full log or a partial log. 

* [Full/Extra Log Configuration](config-full-with-draw-tracing.txt)
* [Graphics Log Configuration](config-with-draw-tracing.txt)

When you click on the link, it will open a text file of the configuration file. Download the file you want to use.

7. Rename your downloaded file. If you selected Full Log Configuration, rename your file **config-full-with-draw-tracing.cfg** and save it. If you selected Partial Log Configuration, rename your file **config-with-draw-tracing.cfg**. 

8. Start your application and run the following while the application is running: 
```shell
type config-with-draw-tracing.cfg | adb shell perfetto --txt --config - --out /data/misc/perfetto-traces/trace
adb pull /data/misc/perfetto-traces/trace ./trace.pftrace
```

Save your **.pftrace** file, you need it for Perfetto and DrawTrace in the next section.

### Analyze Your Trace with DrawTrace and Perfetto

This section will walk you through using DrawTrace through Perfetto. The base user build for Magic Leap Hub comes pre-loaded with all the dependencies for DrawTrace and Perfetto. To get started analyzing your trace, do the following:

1. Open Magic Leap Hub.

2. Scroll until you see the Perfetto tile. 

3. On the Perfetto tile, click **Launch**.

4. You can open the trace from the browser window using **Open trace file**. <Image url= {require("/img/developer-tools/lumin-aosp-tools/drawtrace/drawtrace_open_trace.png")} >Open Trace File</Image>

5. When you open the trace file, you should see the timeline window open up showing all the API calls made for each application. User builds have a known issue where user builds do not showing all the statistics capable of being captured by draw tracing. See the [Known Issues](#known-issues) section for more details. <Image url= {require("/img/developer-tools/lumin-aosp-tools/drawtrace/drawtrace_view_trace.png")} >View Trace File</Image>

NOTE: You can use any trace file you like, for this walk through a trace file for AR Brochure is used. 

6. You need to search for the process with your application calls in case the name is not shown. Generally the first couple of process IDs correspond to the application. <Image url= {require("/img/developer-tools/lumin-aosp-tools/drawtrace/drawtrace_search_calls.png")} >Search DrawTrace Calls</Image> 

7. Draw tracing adds markers for each draw performed on a thread. You can see some of them in the second red box. AR Brochure is a Unity app so search for the thread with these arrows. <Image url= {require("/img/developer-tools/lumin-aosp-tools/drawtrace/drawtrace_markers.png")} >Search for Markers</Image> 

8. Clicking on a marker reveals information about the draw call. **debug.duration** is in nanoseconds(ns). <Image url= {require("/img/developer-tools/lumin-aosp-tools/drawtrace/drawtrace_click_marker.png")} >Click a Marker</Image> 

9. In order to find the list of largest running draw calls you need to run a SQL query. Navigate to the Query(SQL) tab on the left and click it. <Image url= {require("/img/developer-tools/lumin-aosp-tools/drawtrace/drawtrace_sql_query.png")} >Click SQL Query</Image> 

10. Run the query: 

```shell
SELECT slice.name, args.int_value as duration, slice.ts FROM slice INNER JOIN args ON slice.arg_set_id = args.arg_set_id ORDER BY args.int_value DESC;
```

This provides a list of api calls in descending order of duration in nanoseconds(ns).
<Image url= {require("/img/developer-tools/lumin-aosp-tools/drawtrace/drawtrace_run_query.png")} >Run SQL Query</Image> 

11. The general guidance is that draws should not exceed 2ms. In the example below, you can see numerous draws exceeding that threshold which can lead to bad performance. <Image url= {require("/img/developer-tools/lumin-aosp-tools/drawtrace/drawtrace_exceed2ms.png")} >Run SQL Query</Image>

You can examine any of your traces using these steps as guidance.
