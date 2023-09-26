---
title: Battery Intents
sidebar_position: 10
date: 10/07/2022
tags: [Unity, Intents, Battery]
keywords: [Unity, Intents, Battery]
---

This section demonstrates how to collect battery information from the Magic Leap 2's Compute Pack and Controller in Unity. See the [Android Intents Overview](/versioned_docs/version-31-Aug-2023/guides/features/android-intents-overview.md#battery-level) guide for information regarding the native implementation.

## Controller Battery

This example returns Magic Leap's Controller battery level. Before reading the value, the example script checks the intent's extras to determine the Controller's connection state.

- If the connection to the Controller is active, the following extras will be set:
  - **BatteryManager.EXTRA_PRESENT** : true
  - **BatteryManager.EXTRA_LEVEL** : current Controller battery level (0-100)
  - **BatteryManager.EXTRA_SCALE** : 100
  - **BatteryManager.EXTRA_BATTERY_LOW** : true if the current level is 25% or lower, otherwise false
  - **BatteryManager.EXTRA_STATUS** : **BatteryManager.BATTERY_STATUS_CHARGING** or **BatteryManager.BATTERY_STATUS_NOT_CHARGING**, based on the Controller charger connection state
- If the connection to the Controller is not active, the following extras will be set:
  - **BatteryManager.EXTRA_PRESENT** : false
  - **BatteryManager.EXTRA_STATUS** : **BatteryManager.BATTERY_STATUS_UNKNOWN**

```csharp
public static int GetControllerBatteryState()
{
#if PLATFORM_ANDROID && !UNITY_EDITOR
      using AndroidJavaClass unityPlayer = new AndroidJavaClass("com.unity3d.player.UnityPlayer");
      AndroidJavaObject activity = unityPlayer.GetStatic<AndroidJavaObject>("currentActivity");
      if (activity == null)
      {
        Utils.LogError("Activity is null");
        return -1;
      }

      using AndroidJavaObject filter = new AndroidJavaObject("android.content.IntentFilter");
      if (filter == null)
      {
        Utils.LogError("IntentFilter is null");
        return -1;
      }
      
      filter.Call("addAction", "com.magicleap.controller.action.BATTERY_CHANGED");
      
      using AndroidJavaObject intent = activity.Call<AndroidJavaObject>("registerReceiver", null, filter);
      if (intent == null)
      {
        Utils.LogError("Intent is null");
        return -1;
      }

      using AndroidJavaClass batteryManager = new AndroidJavaClass("android.os.BatteryManager");
      if (batteryManager == null)
      {
        Utils.LogError("BatteryManager is null");
        return -1;
      }
      string EXTRA_PRESENT = batteryManager.GetStatic<string>("EXTRA_PRESENT");
      string EXTRA_LEVEL = batteryManager.GetStatic<string>("EXTRA_LEVEL");
      bool isPresent = intent.Call<bool>("getBooleanExtra", EXTRA_PRESENT, false);
      return isPresent ? intent.Call<int>("getIntExtra", EXTRA_LEVEL, -1) : -1;
#else
    return -1;
#endif
}
```

## Compute Pack

The compute pack's battery level can be obtained using standard Android APIs. In Unity, this can be done using the `SystemInfo` class.

```csharp
  //This will return the compute pack battery level
  float batteryLevel = SystemInfo.batteryLevel;
```

