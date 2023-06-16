---
id: bluetooth-input
title: Bluetooth
sidebar_position: 3
date: 01/14/2023
tags: [Input, Bluetooth]
keywords: [Input, Bluetooth]
---

Magic Leap 2 provides support for Android’s default Bluetooth stack which includes both Classic Bluetooth and Bluetooth Low Energy. Using Bluetooth, Magic Leap 2 can create personal area networks to send and receive data with nearby Bluetooth devices. Integration with Android’s standard Bluetooth API means that users can connect existing Bluetooth devices that are supported on Android without any modification. Bluetooth devices can be connected in Magic Leap 2’s system settings using the steps below

1. On your Magic Leap 2, open the System Settings menu.
2. Select “Bluetooth & other devices.”
3. Toggle the Bluetooth switch on
4. Press the “Add Bluetooth or other device” button.
5. Select the device you are trying to pair.
6. Follow the on-screen instructions to complete the pairing process.
7. Once the device is connected, you can start using it with Magic Leap 2.

In addition to the system settings menu, Android’s Bluetooth APIs allow developers to find, connect and transfer information from bluetooth devices directly inside their application.

Learn more about integrating the Bluetooth API on [Android’s Bluetooth Overview](https://developer.android.com/guide/topics/connectivity/bluetooth) page

## Bluetooth Low Energy

Magic Leap 2’s standard Android’s Bluetooth API also provides built-in support for Bluetooth Low Energy (BLE). BLE is a wireless communication technology that is designed for low power consumption and is optimized for short range communication, enabling developers to create innovative applications and experiences.

These APIs can be used to discover devices, query for services, and transmit information

See [Android’s Bluetooth Low Energy](https://developer.android.com/guide/topics/connectivity/bluetooth/ble-overview) documentation for detailed information on how to integrate these APIs into your project.

## Human Interface Devices

Magic Leap 2 uses Android’s Bluetooth Human Interface Device (HID) protocol to communicate with Bluetooth HID devices. This protocol is based on the Bluetooth Low Energy (BLE) standard and allows data to be exchanged between two Bluetooth-enabled devices in a secure, low-power manner. On Magic Leap 2, the Bluetooth HID profile is enabled by default and is used to connect devices such as keyboards, mice, game controllers and media controllers.

See [Android’s Bluetooth HID Documentation](https://developer.android.com/reference/android/bluetooth/BluetoothHidDevice) for information on how to obtain raw HID data inside your application.

## Keyboards and Game Controllers

Magic Leap 2 also provides built-in support for external Game Controllers and Keyboards. Unity developers read the input from these devices without any additional configuration by using Unity’s Input System. Additionally, keyboard input can be used in any application as an alternative to the virtual keyboard.

See [Unity’s Input System Documentation](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/index.html) for more information on how to add controller support into your application.
