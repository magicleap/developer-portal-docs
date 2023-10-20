---
id: usb-sipsop-intents
slug : usb-sipsop-intents
title: USB SIP/SOP Intents
sidebar_position: 2
date: 09/25/2023
tags: [Magic Leap, Android, Intents, Medical, SIP/SOP, USB]
keywords: [Magic Leap, Android, Intents, Medical, SIP/SOP, USB]
---

# USB SIP/SOP Intents

Magic Leap 2 devices provide a USB SIP/SOP flow on medical devices that is 60601 compliant. We’ve introduced custom Android intents to enable our users to implement their own flow. This functionality broadcasts custom [Android Intents](https://developer.android.com/reference/android/content/Intent) when specific events occur - **“event intents”**.
These event intents may hold additional data in an Android Bundle, to which we refer as **“extras”**.
There are also additional intents that the user may broadcast to the system to urge some action, as an answer to the previously received event intent - **“reply intents”**.

The intents will be sent only on medical devices, with system notifications suppressed and with the `usbsipsop` service bound.

## Event Intents

The event intents will only be delivered to the user currently in the foreground.
The `usbsipsop` service needs to be bound to send event intents.

There are 8 event intents in total, which are described below. Please note that for a single connection multiple intents may be sent, as long as the related requirements are met.

### `com.magicleap.60601.action.UNAUTHORIZED_USB`

#### Extras

- `ID` - unique event intent identifier.
- `VENDOR_ID` - vendor ID of the connected USB device.
- `PRODUCT_ID` - product ID of the connected USB device.
- `PRODUCT_NAME`- product name of the connected USB device.

#### Requirements to send

- Connection of a USB device that acts as a client. Data is being accessed by ML2 (ML2 data role is `HOST`).

- This event intent won’t be sent if the device is recognized as ML2 Controller. Recognition is done by checking the Vendor Id (must be **11349**) and the Product Id (must be either **49665** or **49666**) of the connected device.

#### Possible reply intents

This event intent allows the receiver to reply by broadcasting [com.magicleap.60601.action.REQUEST_SHUTDOWN](#commagicleap60601actionrequest_shutdown) reply intent.

### `com.magicleap.60601.action.UNAUTHORIZED_CONNECTION`

#### Extras

- `ID`- unique event intent identifier.

#### Requirements to send

- Connection of a USB device that acts as a power sink. ML2 is charging the device (ML2 power role is `SOURCE`).

#### Possible reply intents

- This event intent allows the receiver to reply by broadcasting [com.magicleap.60601.action.REQUEST_SHUTDOWN](#commagicleap60601actionrequest_shutdown) reply intent.

### `com.magicleap.60601.action.MULTIPLE_USB`

#### Extras

- `ID`- unique event intent identifier.
- `DEVICES_NO`- number of currently connected USB devices, including ML2 Controllers.

#### Requirements to send

- Connection of multiple USB devices that act as clients, but are not recognized as ML2 Controllers. Data is being accessed by ML2 (ML2 data role is `HOST`).

#### Possible reply intents

- This event intent allows the receiver to reply by broadcasting [com.magicleap.60601.action.REQUEST_SHUTDOWN](#commagicleap60601actionrequest_shutdown) reply intent.

### `com.magicleap.60601.action.SELECT_USB_DATA_TRANSFER`

#### Extras

- `ID`- unique event intent identifier.
- `AVAILABLE_MODES`- comma-separated list of possible data transfer modes.

#### Requirements to send

- Connection of a USB device that acts as a host. Data is being provided by ML2 (ML2 data role is `DEVICE`).

#### Possible reply intents

- This event intent allows the receiver to reply by broadcasting [com.magicleap.60601.action.SET_USB_DATA_TRANSFER](#commagicleap60601actionset_usb_data_transfer) reply intent.

### `com.magicleap.60601.action.UNAUTHORIZED_CHARGING`

#### Extras

- `ID`- unique event intent identifier.

#### Requirements to send

- Connection of a compatible medical AC charger.

#### Possible reply intents

- None.

### `com.magicleap.60601.action.UNAUTHORIZED_CHARGER`

#### Extras

- `ID`- unique event intent identifier.

#### Requirements to send

- Connection of an incompatible AC charger.

#### Possible reply intents

- None.

### `com.magicleap.60601.action.USB_DISCONNECTED`

#### Extras

- `ID`- unique event intent identifier.

#### Requirements to send

- Disconnection of all USB devices, including the devices recognized as ML2 Controllers.

#### Possible reply intents

- None.

### `com.magicleap.60601.action.CHARGER_DISCONNECTED`

#### Extras

- `ID`- unique event intent identifier.

#### Requirements to send

- Disconnection of an AC charger.

#### Possible reply intents

- None.

## Reply Intents

Reply intents are meant as replies to the specific event intents.

For the service to receive the reply intents properly a user needs to [bind the proxy service](#binding-the-proxy-service) first!

There are 2 reply intents in total, which are described below.

### `com.magicleap.60601.action.SET_USB_DATA_TRANSFER`

#### Extras

- `ID`- token copied from event intents ID extra, to which it’s replying.
- `DATA_MODE`- data mode string, must be contained in [AVAILABLE_MODES extra from event intent](#commagicleap60601actionselect_usb_data_transfer).

#### Requested action

- ML2s USB port will be set to the selected data transfer mode.
- Currently possible values for `DATA_MODE` are: “MTP”, “PTP”, “RNDIS”, “None”. These are case sensitive and thus should be only selected/copied from [AVAILABLE_MODES extra from event intent](#commagicleap60601actionselect_usb_data_transfer).

### `com.magicleap.60601.action.REQUEST_SHUTDOWN`

#### Extras

- `ID`- token copied from event intents ID extra, to which it’s replying.

#### Requested action

- ML2 will shut down immediately.

## Binding the proxy service

For the service to receive the reply intents properly a user needs to bind to it first.

The service can be bound using an intent and a package name:

- Intent - `com.magicleap.usbsipsop.action.BIND_SERVICE`.
- Package name - `com.magicleap.usbsipsop`.

An example of such binding can be found in the snippet below:

```java
ServiceConnection sc = ...;
Intent intent = new Intent("com.magicleap.usbsipsop.action.BIND_SERVICE")
 .setPackage("com.magicleap.usbsipsop");
bindService(intent, sc, BIND_AUTO_CREATE);
```

## Security

### Intent receiver permissions

For an application to be able to receive event intents or send reply intents, a `com.magicleap.permission.USB_SIPSOP` permission is required.

### Token validity

There are 2 ways for a token to become invalid.

1. **Mass Invalidation**: All event intents that allow reply, become invalid when the [com.magicleap.60601.action.USB_DISCONNECTED](#commagicleap60601actionusb_disconnected) event intent is generated. This means that identifiers of all event intents that allow reply and have been sent since the last `USB_DISCONNECTED` event intent are valid until the next `USB_DISCONNECTED` event intent is sent.

2. **Singular Invalidation**: When a reply intent is received by the service, the token contained in the ID extra of the reply will become invalidated (if it was valid for the used reply intent). This will happen regardless of whether the reply intent was processed successfully (e.g. other used extra was invalid).

There is currently no TTL (Time to Live, meaning the validity timeout) implemented for the identifiers.
