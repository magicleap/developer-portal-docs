---
title: Power Manager Overview
sidebar_position: 1
date: 6/08/2023
tags: [Unity, Power Manager, Overview]
keywords: [Unity, Power Manager, Power, Controller, Battery]
---
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

Power Manager provides a set of power management APIs that allow applications to receive callbacks when the power state changes, APIs to get device components power state and properties, and to set the controller’s power states.

These APIs allow an application to function differently depending on its power needs. For example an application might use this API to put the controller in the idle state if the input mode is hand-tracking only.


Controller Power States:


| Component  | Power State               | Description |
| :--------: | :-----------------------: | :---------: |
| Controller | Normal                    | Controller is active |
|            | Disabled While Charging   | Certain SKUs cannot use controller while charging |
|            | Standby                   | Controller is turned on but inactive, press home button to switch to active manually |
|            | Sleep                     | Not supported for this component |


<DocCardList items={useCurrentSidebarCategory().items}/>

