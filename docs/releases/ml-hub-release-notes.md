---
title: Magic Leap Hub Release Notes
sidebar_position: 2
date: 08/30/2023
---

## Version 2.0.14
* Advanced Capture: UX updates
* Device Bridge: UX updates
* OS Installer: enforce factory reset for OS versions that 4 major versions away from current device OS version
* OS Installer: UX updates
* Perfetto: UI works even if ML Hub is closed
* Remote Render: strict requirement to have Wi-Fi bridge enabled is removed
* Remote Render: sample application can be started from top left menu

## Version 2.0.13
* Advanced Capture: UI performance improvements
* Remote Render: QR Code Pairing

### Known behaviors

* Magic Leap Hub will fallback silently to bundled ADB if user provided ADB cannot be used for any reason.
* Advanced Capture produces videos that are few seconds shorter than shown in the Magic Leap Hub UI.

## Version 2.0.12

* Advanced Capture: various UX updates
* OS Installer: UX update

### Known behaviors

* Magic Leap Hub will fallback silently to bundled ADB if user provided ADB cannot be used for any reason.
* Advanced Capture produces videos that are few seconds shorter than shown in the Magic Leap Hub UI.

## Version 2.0.11

* Magic Leap Hub anonymous usage telemetry is disabled
* Remote Render: various UX updates
* Device Bridge: UI fix for long device names
* Device Stream: UI is updated to show FPS counter
* Package Manager: dedicated panel on Home Screen and various UI updates
* Advanced Capture: UX updates

### Known behaviors

* Magic Leap Hub will fallback silently to bundled ADB if user provided ADB cannot be used for any reason.
* Advanced Capture produces videos that are few seconds shorter than shown in the Magic Leap Hub UI.

## Version 2.0.10

* Device Bridge: ability to select and install multiple APKs
* Device Bridge: user name of current user is now shown
* Device Bridge: improved Wi-Fi bridge experience
* Device Bridge: ability to install APKs either for current or for all available users
* Device Bridge: factory reset support
* Advanced Capture: split mode is removed
* Advanced Capture: if device in low power mode, Hub will wake the device before doing the capture.
* Remote Render: preview version

### Known behaviors

* Magic Leap Hub will fallback silently to bundled ADB if user provided ADB cannot be used for any reason.
* Advanced Capture produces videos that are few seconds shorter than shown in the Magic Leap Hub UI.

## Version 2.0.9

* Device Bridge UX updates
* Links to LED guides are added to Device Bridge

### Known behaviors

* Magic Leap Hub will fallback silently to bundled ADB if user provided ADB cannot be used for any reason.
* Advanced Capture produces videos that are few seconds shorter than shown in the Magic Leap Hub UI.
* Advanced Capture will fail if device is in low power mode.

## Version 2.0.8

* Device Stream improvements
* Styling updates
* Minor bug fixes

### Known behaviors

* Magic Leap Hub will fallback silently to bundled ADB if user provided ADB cannot be used for any reason.
* Advanced Capture produces videos that are few seconds shorter than shown in the Magic Leap Hub UI.
* Advanced Capture will fail if device is in low power mode.

## Version 2.0.7

* Device Bridge: bugreports (if any) can be downloaded from device
* Advanced Capture capabilities
* Minor bug fixes

### Known behaviors

* Magic Leap Hub will fallback silently to bundled ADB if user provided ADB cannot be used for any reason.

## Version 2.0.6

* Device Bridge's Files tab is updated: shortcuts, folders in files table and other improvements
* Minor bug fixes

### Known behaviors

* Magic Leap Hub will fallback silently to bundled ADB if user provided ADB cannot be used for any reason.

## Version 2.0.5

* Magic Leap Hub (a.k.a. ML Hub) is the new name for The Lab 2.0. **Upgrade is not possible, please uninstall The Lab 2.0 and download ML Hub from Dev Portal.**
* Fix for Device Stream to work on MacOS with M1
* UI will show versions of newer OS builds differently: semantic versions will be shown (e.g. 1.1.0) instead of build strings (B3E....)
* Minor bug fixes

## Version 2.0.4

Magic Leap Hub (a.k.a. ML Hub) is the new name for The Lab 2.0. **Upgrade is not possible, please uninstall The Lab 2.0 and download ML Hub from Dev Portal.**

* Minor bug fixes

### Known issues

* Device Stream does not work yet on MacOS with M1

## Version 2.0.3

* Magic Leap Hub (a.k.a. ML Hub) is the new name for The Lab 2.0. **Upgrade is not possible, please uninstall The Lab 2.0 and download ML Hub from Dev Portal.**
* ML Simulator for Unity is the new name for Unity Zero Iteration
* ML C SDK is the new name for Lumin SDK
* ML OS is the new name for Lumin OS
* Magic Leap Application Simulator is the new name for Zero Iteration
* Virtual Room Generator is deprecated
* OS Installation procedure is hardened
* Software is upgraded to use Java 17
* MacOS user experience improvements
* Minor bug fixes

### Known issues

* Device Stream does not work yet on MacOS with M1

## Version 2.0.2

* User can override internal ADB with external one in Settings
* Minor bug fixes

## Version 2.0.1

* Minor fixes

## Version 2.0.0

The Lab 2.0 has been repurposed to be a tool for all device users, not just developers. Device Stream is now built in. The Lab 2.0 supports ML2 and later devices from Magic Leap. If you're using an ML1, please use the original version of The Lab.

* Faster downloads in Package Manager on Windows (compared to The Lab 1.0)

## Enterprise Networking

### TLS Interception

The Lab uses TLS (Transport Layer Security) network connections to connect to multiple cloud services:

* Lab Update handling
* Package Manager data retrieval
* Installations of Packages, e.g. MLSDK
* News to display
* Analytics

Some Enterprise networks are setup to inspect all the TLS traffic which breaks The Lab's network connections. The reason is that TLS cannot be transparently intercepted. Instead, the traffic received in The Lab gets re-encrypted with security certificates specific to the Enterprise. On Windows The Lab uses root CA certificates of the operating system, and hence works if the certificates are installed in the OS. On OSX and Linux, The Lab uses built in CA root certificates, hence network connections fail until the setup is adapted.

The CA root certificate used by the TLS Interception setup needs to be added to the list of CA root certificates known to The Lab.

* **Windows:** The Lab uses the system root CA certificates and hence works if the certificates used are installed in Windows.
* **OSX:** Open the\_lab.ini file in an editor. The file is located in 'The Lab 2.0.app/Contents/Eclipse'. With Finder, use the "Show Package Contents" context menu on "The Lab.app" folder to see the Contents subfolder which is hidden otherwise. Add the following two properties on separate lines at the end of the file:

    `-Djavax.net.ssl.trustStoreType=KeychainStore`

    Note: Adding this certificate breaks the networking support when run outside of the Enterprise TLS network. It should only be set when necessary.

* **Linux:** (similarly adapted steps can also be done Windows and OSX, as alternative)

    Retrieve the root CA certificate used by the TLS Interception setup. The IT department maintaining the TLS Interception setup should be able to provide it, and it may also be found pre-installed in the system. Below the file is referenced as new\_root\_ca.ser. Find the keytool binary contained in the JRE in The Lab plugins folder. E.g. from a shell:

    `find plugins -name "keytool"`

    If multiple JRE's are found, use the latest. Execute the following command with the path found in the prior step.

    `<path found above>/keytool -import -trustcacerts -file <path-to-cert>/new_root_ca.cer -alias custom-Root-CA-keystore -cacerts -storepass changeit`

    The currently known paths can be listed with the following command:`<path found above>/keytool -list -cacerts -storepass changeit`

Note that the JRE may get updated with a Lab update, when this happens (likely not often), then the commands need to be repeated. Alternatively, the lib/security/cacerts file which got updated (same remaining path as the keytool) can also be referenced with a -D The keytool binary updates the lib/security/cacerts file (same remaining path as the keytool). The resulting file can be copied elsewhere and referenced by a 
`-Djavax.net.ssl.trustStore=/app/security/truststore.jks` entry in the\_lab.ini.
  
### Network Proxy

The Lab uses the Internet system proxy setup on Windows and OSX.

Note that on Windows, when using the "Use the same proxy server for all protocols" settings, then The Lab is actually using the Socks proxy. If Socks is not supported, list the supported protocols separately instead of using "Use the same proxy server for all protocols".
