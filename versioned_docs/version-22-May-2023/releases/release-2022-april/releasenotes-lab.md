---
id: release-notes-lab
title: 2.0.0.2 - Lab Tools Release Notes
sidebar_position: 2
date: 12/21/2021
---

# April 2022 Lab Tools Release Notes

## The Lab Release Notes

Version 2.0.0

### Initial Release

The Lab 2.0 has been repurposed to be a tool for all device users, not just developers. Device Stream is now built in and it, along with most of the Device Bridge functionality, will work without the device being in developer mode. The Lab 2.0 supports ML2 and later devices from Magic Leap. If you're using an ML1, please use the original version of The Lab.

## Device Stream

There is no settings UI on device currently to enable Device Stream, and it is not enabled by default. In order to to enable it, you need to run these adb commands once after flashing a new OS image:

```
adb root  
adb shell mage settings set secure is_app_mirroring_enabled 1  
adb shell killall -9 thirdeye_rtsp_server  
```

## Enterprise Networking

TLS Interception

The Lab uses TLS (Transport Layer Security) network connections to connect to multiple cloud services:

- Lab Update handling
- Package Manager data retrieval
- Installations of Packages, e.g. MLSDK
- News to display
- Analytics

Some Enterprise networks are setup to inspect all the TLS traffic which breaks The Lab's network connections. The reason is that TLS cannot be transparently intercepted. Instead, the traffic received in The Lab gets re-encrypted with security certificates specific to the Enterprise. On Windows The Lab uses root CA certificates of the operating system, and hence works if the certificates are installed in the OS. On OSX and Linux, The Lab uses built in CA root certificates, hence network connections fail until the setup is adapted.

The CA root certificate used by the TLS Interception setup needs to be added to the list of CA root certificates known to The Lab.

- **Windows:** The Lab uses the system root CA certificates and hence works if the certificates used are installed in Windows.
- **OSX:** Open the_lab.ini file in an editor. The file is located in 'The Lab 2.0.app/Contents/Eclipse'. With Finder, use the "Show Package Contents" context menu on "The Lab.app" folder to see the Contents subfolder which is hidden otherwise. Add the following two properties on separate lines at the end of the file:

    `-Djavax.net.ssl.trustStoreType=KeychainStore`

    Note: Adding this certificate breaks the networking support when run outside of the Enterprise TLS network. It should only be set when necessary.

- **Linux:** (similarly adapted steps can also be done Windows and OSX, as alternative)

    Retrieve the root CA certificate used by the TLS Interception setup. The IT department maintaining the TLS Interception setup should be able to provide it, and it may also be found pre-installed in the system. Below the file is referenced as new\_root\_ca.ser. Find the keytool binary contained in the JRE in The Lab plugins folder. E.g. from a shell:

    `find plugins -name "keytool"`

    If multiple JRE's are found, use the latest. Execute the following command with the path found in the prior step.

    `<path found above>/keytool -import -trustcacerts -file <path-to-cert>/new_root_ca.cer -alias custom-Root-CA-keystore -cacerts -storepass changeit`

    The currently known paths can be listed with the following command:

    `<path found above>/keytool -list -cacerts -storepass changeit`

Note that the JRE may get updated with a Lab update, when this happens (likely not often), then the commands need to be repeated. Alternatively, the lib/security/cacerts file which got updated (same remaining path as the keytool) can also be referenced with a -D The keytool binary updates the lib/security/cacerts file (same remaining path as the keytool). The resulting file can be copied elsewhere and referenced by a

`-Djavax.net.ssl.trustStore=/app/security/truststore.jks`

entry in the_lab.ini.

Network Proxy

The Lab uses the Internet system proxy setup on Windows and OSX.

Note that on Windows, when using the "Use the same proxy server for all protocols" settings, then The Lab is actually using the Socks proxy. If Socks is not supported, list the supported protocols separately instead of using "Use the same proxy server for all protocols".

