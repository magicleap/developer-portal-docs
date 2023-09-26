---
id: iris-unlock-overview
title: Iris Unlock
description: Accessing Iris Unlock for developers
sidebar_position: 2
date: 09/26/2023
tags: [Unity, Native, Biometrics, Android API, Iris, Eyes]
keywords: [Unity, Native, Biometrics, Android API, Iris, Eyes]
---

Beginning in OS release *placeholder*, third party developers with a [Developer Pro or Enterprise Magic Leap 2 license](https://www.magicleap.care/hc/en-us/articles/9356966949389-Managing-Your-Magic-Leap-2-License#:~:text=License%20Types&text=Customers%20purchasing%20a%20Developer%20Pro,license%20key%20through%20their%20reseller.) now have access to request iris data and enable iris unlock inside within their applications. Iris Unlock is a feature that enables iris recognition as a biometric authentication method on the Magic Leap 2 device. This feature can be used as an alternative to requesting a pin or password, and can be used for things such as:

- Requesting authentication from a user within your app
- Encrypting or decrypting sensitive data using a key that depends on biometric authentication

## Using Iris Unlock

- Make sure you are using a **Developer Pro** or **Enterprise** license
- Follow [these steps](https://www.magicleap.care/hc/en-us/articles/17217917941133-Iris-Unlock) to enable Iris Unlock on your device.

## Developer Documentation

- Native Developers can use the [JNI](https://docs.oracle.com/javase/7/docs/technotes/guides/jni/spec/jniTOC.html) to access the [Android Biometrics API](https://source.android.com/docs/security/features/biometric/face-authentication) to request and access iris detection.
- Using Android Biometric APIs in Unity
