---
id: arcloud-deployment-ova
title: AR Cloud OVA Image Demo
sidebar_label: OVA Demo
sidebar_position: 4
date: 02/07/2023
tags: [ARCloud, Cloud, OVA]
keywords: [ARCloud, Cloud, OVA]
description: "A lightweight, pre-configured Virtual Machine for demo purposes"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Utm from './_utm.md'
import VirtualBoxImport from './_virtual_box_import.md'
import VirtualBoxLimitations from './_virtual_box_limitations.md'

The provided OVA image contains all the necessary infrastructure and services pre-configured to manage and work
with the Magic Leap devices. For this to work certain compromises had to be taken:

* The services are pre-configured to serve requests for a specific domain
* Only a HTTP listener is configured
* High availability for the services is disabled
* The observability stack is not installed

:::warning Warning
The provided image is not suitable for scalable and fault-tolerant deployments in production environments! It is suitable for quickly connecting devices and testing the services.
:::

---

## Requirements

### Virtualization support

Make sure hardware-assisted virtualization is enabled for your CPU

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

```shell
grep -cw vmx /proc/cpuinfo
```

:::info Expected Result
the output should be **1**
:::

  </TabItem>
  <TabItem value="windows" label="Windows">

#### Using the Task Manager

1. Start the Task Manager
2. Go to the Performance tab
3. Check if `Virtualization` is `Enabled` in the bottom right of the window

#### Using PowerShell

```PowerShell
Get-ComputerInfo -property "HyperVRequirementVirtualizationFirmwareEnabled"
```

:::info Expected Result
the output should be **True**
:::

  </TabItem>
  <TabItem value="macos" label="MacOS">

```shell
sysctl machdep.cpu.features | grep -cwi vmx
sysctl kern.hv_support
```

:::info Expected Result
one of the commands should output **1**
:::

  </TabItem>
</Tabs>

---

If virtualization is **not** enabled, follow the steps to enabled it:

<Tabs groupId="operating-systems">
  <TabItem value="generic" label="Generic Steps" default>

1. Restart your computer
2. Enter BIOS while the computer is booting up
3. Find the `Virtualization Technology (VTx)` setting, e.g. from different versions of BIOS:
    * "Security -> System Security"
    * "System Configuration -> Device Configuration"
4. Enable the setting
5. Save changes and boot your OS


  </TabItem>
  <TabItem value="windows" label="Windows" default>

[Windows Instructions](https://support.microsoft.com/en-us/windows/enable-virtualization-on-windows-11-pcs-c5578302-6e43-4b4b-a449-8ced115f58e1) for enabling the `Virtualization Technology (VTx)`

  </TabItem>
  <TabItem value="hp" label="HP" default>

[HP Instructions](https://support.hp.com/us-en/document/ish_5637142-5637191-16) for enabling the `Virtualization Technology (VTx)`

  </TabItem>
  <TabItem value="dell" label="Dell" default>

[DELL Instructions](https://www.dell.com/support/kbdoc/en-us/000195978/how-to-enable-or-disable-hardware-virtualization-on-dell-systems) for enabling the `Virtualization Technology (VTx)`

  </TabItem>
</Tabs>

After enabling the `Virtualization Technology (VTx)` verify that the feature is enabled by re-running your OS corresponding command [virtualization support](#virtualization-support).

:::warning Warning
If your computer does not support hardware-assisted virtualization, you will not be able to run the image.
:::

---

### Resources

Recommended system resources:

* CPUs: 8
* Memory: 16GB
* Disk: 100GB

*In case of performance issues the resources can be increased after stopping the VM.*

### Firewall

The following ports need to be exposed to use the provided services:

* 80 - HTTP
* 443 - HTTPS
* 1883 - MQTT
* 8883 - MQTTS

Depending on the runtime environment the firewall configuration might differ:

* configure your local firewall (if you have one) when running on a local machine
* configure a cloud firewall based on documentation from your cloud provider otherwise

## Runtime environments

---

#### Installation

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

[VirtualBox Linux download][vbox-linux-download] or for `Debian`-based Linux distrubutions on amd64 CPUs you can install VirtualBox with the following commands:

```shell
curl -sSL https://www.virtualbox.org/download/oracle_vbox_2016.asc | sudo gpg --dearmor --yes --output /usr/share/keyrings/oracle-virtualbox-2016.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/oracle-virtualbox-2016.gpg] http://download.virtualbox.org/virtualbox/debian $(lsb_release -cs) contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list
sudo apt update
sudo apt install VirtualBox-7.0
```

#### VirtualBox limitations

<VirtualBoxLimitations />

#### Importing the appliance

<VirtualBoxImport />

  </TabItem>
  <TabItem value="windows" label="Windows" default>

[VirtualBox Windows download][vbox-download]

#### Importing the appliance

<VirtualBoxImport />

  </TabItem>
  <TabItem value="macos" label="MacOS" default>

### VirtualBox

[VirtualBox Intel CPU download](https://www.virtualbox.org/wiki/Downloads)

#### VirtualBox limitations

<VirtualBoxLimitations />

#### Importing the appliance

<VirtualBoxImport />

### UTM

<Utm />

  </TabItem>
</Tabs>

---

## Credentials

System users:

* default user account - `arcloud`/`changeme`
* admin account - `root`/`changeme`

AR Cloud users:

* Enterprise console user account - `aradmin`/`KvIW5Kb6yoajIEiE8CoUfdhCi2m1EeZW`
* **Keycloak** admin account - `admin`/`Oh3AvNde0MSIjKdU2SJUGjay9oCyKrHa`

:::note Changing Your Password
After initial login, it is encouraged to overwrite the default login using the standard Password workflow for Linux:

```shell
passwd
```

:::

## Accessing the Running Virtual Machine

To access the virtual machine the IP address of your machine is needed.

The IP address might differ depending on the target platform:

* for local deployments - the loopback interface address (`127.0.0.1`) or the address of another network interface on the machine (e.g. `192.168.1.101`)
* for cloud providers - the configured/assigned public IP of the instance

To list the available IPv4 addresses on your machine/instance try one of the following commands:

<Tabs>
  <TabItem value="ubuntu" label="Ubuntu 20.04" default>

```shell
ip addr | awk '/inet / { print $2 }'
```

  </TabItem>
  <TabItem value="windows" label="Windows" default>

```shell
ipconfig /all | findstr /i /c:"ipv4"
```

  </TabItem>
  <TabItem value="macos" label="MacOS" default>

```shell
ifconfig | awk '/inet / { print $2 }'
```

  </TabItem>
</Tabs>

:::caution Caution
Verify that your Magic Leap device has an IP address assigned from the same subnet as your machine or the device is able to access one of the IP addresses from the list above (your router allows connectivity between different subnets).
:::

Apart from using the graphical interface directly, you can also access the machine using SSH:

```shell
ssh arcloud@<ip-address> -p 2222
```

e.g. :

```shell
ssh arcloud@192.168.1.101 -p 2222
```

## Deployment Options

The image is configured to use the `arcloud-ova.local` domain by default and initially supports HTTP only. An IP address has to be either linked with this domain or replaced it altogether.

Alternatively, a custom domain can be used. A custom domain will trigger the creation of a TLS certificate.

### Simple Deployment

With this approach we limit the configuration needed to access the services, but with the cost of lowered security.

#### Option 1. Use the IP Address Only

If you want to be able to connect to the machine from other devices, the services need to be reconfigured to use an IP address directly.

Run the `set_ip.sh` script from inside the virtual machine and provide your IP address as argument:

```shell
cd # change directory back to your home (~/) folder
./set_ip.sh <ip-address>
```

e.g. :

```shell
cd # change directory back to your home (~/) folder
./set_ip.sh 192.168.1.101
```

#### Option 2. Configure Local DNS Overrides

To be able to access the services, the IP address of the machine where the image is deployed can be set as the target of the pre-configured domain.

The requirement is that the IP should be accessible from the machine in a browser.

Add the following to the bottom of your `/etc/hosts` file (may require `sudo`):

```plaintext
# arcloud-ova
<IP-address> arcloud-ova.local
<IP-address> smtp.arcloud-ova.local
```

:::note
This will only make the services available on the devices that have the override configured.
:::

### Advanced Deployment

This allows to reconfigure the services to use a custom domain and issue a TLS certificate.

1. Point your custom domain to the IP address where the virtual machine is available and make sure that all the ports mentioned above are accessible.
2. Run the `set_domain.sh` script from inside the virtual machine and provide your domain as argument:

```shell
cd # change directory back to your home (~/) folder
./set_domain.sh <domain>
```

e.g. :

```shell
cd # change directory back to your home (~/) folder
./set_domain.sh my.domain.com
  ```

:::note
This is the recommended approach for all publicly accessible deployments (e.g. on GCP or AWS).
:::

### Revert to the default domain

In case you want to switch back to the default configuration of the virtual machine, run the `set_default.sh` script from
inside it:

```shell
cd # change directory back to your home (~/) folder
./set_default.sh
```

[vbox-download]: https://www.virtualbox.org/wiki/Downloads
[vbox-linux-download]: https://www.virtualbox.org/wiki/Linux_Downloads
[vbox-nat-limitations]: https://www.virtualbox.org/manual/ch06.html#nat-limitations
[gcp-image-import]: https://cloud.google.com/compute/docs/import/import-ovf-files
[aws-image-import]: https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html
