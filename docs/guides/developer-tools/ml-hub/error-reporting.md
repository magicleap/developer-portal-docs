---
id: error-reporting
title: ML Hub Error Reporting
sidebar_position: 8
date: 01/30/2022
---

# Report an Error or Bug on Magic Leap Hub

This guide explains how to report an error or bug when using the Magic Leap Hub. Follow these instructions to gather and submit the necessary information for troubleshooting.

## Save Diagnostics Logs

Start by saving the diagnostic logs from the Magic Leap Hub application. These logs will help to understand the issue you are encountering.

1. Navigate to the Activities page on Magic Leap Hub.
2. Click on **Home**.
3. Select **Save Diagnostic Logs…** from the dropdown menu.

This command creates a .zip file of the available log files.

<Image url= {require("/img/ml-hub/ml_hub_diagnostic_logs.jpg")} >Save Diagnostic Logs menu item</Image>

## Reporting an Error or Bug

Please post your error reports and questions on our [Magic Leap 2 Developer Forum](https://forum.magicleap.cloud/).

## What Data Does the Report File Contain?

The .zip file includes diagnostic information from the user interface, the ML Hub server, and the ML Hub app. Examples of such information include, but are not limited to:

- Your user name
- Path names on your local hard drive
- Any log messages from the ml_logging APIs
- List of installed packages and versions
- ML Hub frontend layout
- Java crash reports
- mldb logs from default connected device
- Eclipse/ML Hub logs
- The ML Hub backend logs

These logs might contain information proprietary to you or that could identify you.

## Protect Your Privacy

Before attaching the Magic Leap Hub Diagnostic Logs, ensure to protect your privacy. You can open the Magic Leap Hub Diagnostic Logs which are compressed as a `.zip` file and review the contents of the logs. Remove or obscure any information you don't want to be public.
