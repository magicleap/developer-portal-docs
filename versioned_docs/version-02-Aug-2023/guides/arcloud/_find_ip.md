import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The IP address might differ depending on the target platform:

* for local machines - the loopback interface address (`127.0.0.1`) or the address of another network interface on
    the machine (e.g. `192.168.1.101`)
* for cloud providers - the configured/assigned public IP of the instance

To list the available IPv4 addresses on your machine/instance, try the following command:

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

```shell
ip -br a | awk '/UP / { print $1, $3 }'
```

  </TabItem>
  <TabItem value="windows" label="Windows">

```shell
ipconfig /all | findstr /i "ipv4"
```

  </TabItem>
  <TabItem value="macos" label="MacOS">

```shell
scutil --nwi | awk '/flags/ { i=$1; next } /address/ { print i, $3 }'
```

  </TabItem>
</Tabs>

:::caution Caution
Verify that your Magic Leap device has an IP address assigned from the same subnet as your machine or the device is able
to access one of the IP addresses from the list above (your router allows connectivity between different subnets).
:::

