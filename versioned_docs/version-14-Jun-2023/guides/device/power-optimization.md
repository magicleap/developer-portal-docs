---
id: power-optimization
title: Power Optimization and USB Guidance
sidebar_position: 6
date: 05/05/2022
tags: [Power, USB, Performance, Optimization]
keywords: [Power, USB, Performance, Optimization]
---



Below are a few tips and guidelines for ensuring your Magic Leap 2 performance is not negatively affected by power or USB issues.

## Power Optimization

### MSAA Reduction

Please select the lowest level of MSAA needed by the application. If there is no discernable visual difference with MSAA enabled or disabled, reducing MSAA can result in significant improvements to performance.

## USB Tips

### Recommended Cables

For best USB connection of Magic Leap 2 to development computer, we recommend:

- high-quality cables
- 1 meter or less in length
- USB-IF certified

:::tip
If you're having issues with a USB-C cable, make sure it's a data cable and not a charging-only cable.
:::

### USB Charging Via Computer

Charging the Magic Leap 2 from a computer's USB port may be unreliable without high power ports/hubs or external power injectors. See the [CoolGear](#coolgear-power-injection) section for more information.

In addition, both Magic Leap 2 and Apple MacBooks are Dual Role Port devices, meaning they can either be a host or device. When you plug your Magic Leap 2 into the Apple MacBook, it's not guaranteed that MacBook will charge the Magic Leap 2 at all, in fact the MacBook may try to charge itself off the Magic Leap 2.

## CoolGear Power Injection Guide

The CoolGear power injector is used to add supplemental power when connecting a host PC to a Magic Leap 2 device. This power injector (or CoolGear) is necessary for prolonged development in order to sustain and charge the device battery since most PC hosts do not source sufficient power from the USB port. Only host computers that are USB-PD compliant and have high wattage negotiation (25W+) can guarantee Magic Leap 2 operation without draining the battery over time.

:::note
Other high power hubs and docks provide similar functionality, such as the [CalDigit Thunderbolt Docks](https://www.caldigit.com/docks/).
:::

<Image url= {require("/img/device/coolgear.png")} >CoolGear Power Injector</Image>

### Getting Started

1. Make sure the CoolGear is completely disconnected from everything.
2. **IMPORTANT:** The CoolGear does NOT have signal re-drivers that help compensate for some of the signal integrity loss so it is essential to use short, good quality cables. The total length of all the cables should ideally be no more than ~3ft. It is also important to follow the proper connection order otherwise there could be issues with USB host enumeration.

#### Connection Order

1. Power the CoolGear device through the supplied power adapter.
2. USB 3.0 B side to host for MLDB/ADB.
3. USB TypeC between Magic Leap 2 and CoolGear. The orientation of and order of this connection step does not matter. If orientation makes a difference it is highly likely the cable is bad.

#### Disconnection Order

1. USB TypeC between Magic Leap 2 and CoolGear.
2. USB 3.0 B connector side to host for MLDB/ADB.
3. Power to the CoolGear.

Normal day-to-day operations will require the user to just connect and disconnect TypeC to Magic Leap 2 device.

### Common Problems

#### USB3.0 A-B Cable Connector Length

If you have issues maintaining a solid connection on the B-side that goes into the CoolGear, you may need to replace the cable with one with longer B-side connector.

#### Enumeration Issues

Should you make a mistake and unintentionally disconnect host side USB or the power to CoolGear board, there is a good chance that you may experience issues with enumeration. In order to recover from this situation, you must follow these steps in order to recover stable enumeration:

1. Completely disconnect all the cables/power from CoolGear (follow the proper order if possible).
2. Power Down the PC and ML2 device
3. Power up the PC and ML2 device
4. Follow proper connect order as shown above.

:::warning
Using power supply into the CoolGear as a way to connect/disconnect USB is NOT a proper way and will cause issues and will require these recovery steps. If the user needs to be able to simulate a physical attach/detach of the USB cable it is recommended to use a [Acroname USB TypeC Redriver Switch](https://acroname.com/store/s85-rdvr-usbcsw?sku=S85-RDVR-USBCSW).
:::

If you have followed all the directions above and you're still experiencing issues with USB enumeration, these steps can be followed in order to isolate the issue:

1. If possible, take the CoolGear device and the cables attached to it to a known working PC and Magic Leap 2 device. This would help isolate the cables/CoolGear as the issue if this does not work. If it works on new PC and Magic Leap 2 device it does not indicate that CoolGear/Cables are NOT the issue.
2. Use the steps above to get a clean start.
3. If you have a proven working CoolGear set-up, swap pieces from that one by one in order to get a best guess what is at fault. If not try finding other short cables. Always follow proper plug in order as described above. Things to try incrementally:
   1. Swap out host to CoolGear cable, check enumeration.
   2. Swap out TypeC to TypeC from CoolGear to ML2.
   3. Swap out CoolGear itself with another.
4. Try different USB ports on Host PC (after unplugging the ML2 device side first). Normally the ports in the back of desktop PCs are best as they do not have extra extension cables and connect directly to the motherboard.
