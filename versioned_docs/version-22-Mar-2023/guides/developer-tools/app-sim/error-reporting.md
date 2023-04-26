---
id: error-reporting
title: Error Reporting
sidebar_position: 8
date: 08/29/2022
---

Please report bugs in the [Magic Leap Developer Forums](https://forum.magicleap.cloud/c/app-simulator/142).

The **Save Diagnostic Logs…** command in the Application Simulator Activities menu creates a .zip file of the available log files that you may attach to your bug report post.

<Image url= {require("/img/app-sim/app-sim-save-logs.png")} >The Save Diagnostic Logs command in the Application Simulator</Image>

You may use the following as a template for your forum message. Remember to attach the .zip of your log files as well:

```dos
OS and Version:

Graphics card or chipset:

Details: 

- What were you doing when the problem occurred?
- Which mode were you using: Simulator, Device, or Hybrid?
- What 3D engine or development platform were you using?
- Any additional details pertinent to the problem
```

### What data does this report file contain?

These log files include diagnostic information from the user interface, the Application Simulator server, and the Application Simulator app, and could potentially contain information that is either proprietary to you or that might identify you in some way. Examples of such information include and are not limited to:

* Your user name
* Path names on your local hard drive
* Any log messages from the ml_logging APIs
* List of installed packages and versions
* ML Hub frontend layout
* Java crash reports
* adb logs from default connected device
* Eclipse/ML Hub logs
* Application Simulator backend logs
* Unity editor logs

### Protect your privacy

Posts in the Magic leap Discussion Forums are public. Before sending or attaching the .zip file of the logs to report an error, open the .zip file and view the contents of the logs to make sure you are not sending any information you don't want public.

