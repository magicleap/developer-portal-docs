---
id: controller-recovery-guide
title: Controller Recovery Guide
sidebar_position: 2
date: 08/29/2022
tags: [OS, Flashing, Controller, ML Hub]
keywords: [OS, Flashing, Controller, ML Hub]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In the event that your Controller fails to update and results in the Controller not connecting to the Compute Pack or failing to boot; a manual flash may be required. This guide includes instructions on how to manually flash the Controller.

:::caution

Only perform a manual flash if the Controller fails to updated after connecting it to the Compute Pack.

**Manual flashing is only supported on Windows and Linux.**

:::

## Before you start

- Make sure the Controller's charge is above 40%
- If the recovery fails, you may need to try another cable.
- [Download the Controller recovery files](pathname:///control_4992-R2.zip)

<Tabs
  defaultValue="windows"
  values={[
    {label: 'Windows', value: 'windows'},
    {label: 'Linux', value: 'linux'},
  ]}>
<TabItem value="windows">

### Flashing

1. Make sure the Controller is NOT connected to your computer.
2. Download the Controller recovery files and extract the folder so it can be easily accessed. For example, the folder can be placed into the `MagicLeap/firmware/` directory.

- To extract the contents of the compressed file, you may need to enter a password. If prompted enter **MagicLeap**.

3. With the folder extracted, open command line and navigate to that directory:

```shell
cd Magicleap/firmware/control_4992-R2/
```

4. Run the Controller recovery command:

```shell
erase_myriad.bat
```

:::warning Hot Tip
If the output from running `erase_myriad.bat` shows some output resembling "instance not found" repeatedly, execute the following two commands until you get nothing but `OK:`s as output. If you get errors on the second command, run the first command until you get no errors, then the second one must have no errors on the first attempt, or you must start again:

```shell showLineNumbers
fcmd.bat mode 0101 & timeout /t 3 & fcmd.bat gpio 010300
fcmd.bat gpio 0003 & fcmd.bat edfu 01 & fcmd.bat edfu 040000000000040000
```

After both commands have been run without any errors (subsequently, in-a-row), run the following, one more time:

```shell
erase_myriad.bat
```

:::

</TabItem>
<TabItem value="linux">

### Set Udev Rules

These steps only need to be completed onceper machine. If you feel like your computer's Udev rules have already been updated, proceed to the next section.

1. Run the following commands:

```shell showLineNumbers
sudo chown root:root /etc/udev/rules.d/95-roshi.rules
sudo chmod 644 /etc/udev/rules.d/95-roshi.rules
sudo udevadm control --reload-rules
```

2. Add yourself to the `plugdev` and `dialout` groups, **then log out and back in**:

```shell
sudo usermod -a -G plugdev,dialout $USER
```

3. **Modem Manager** - The Linux modem manger service will conflict with the totem flashing communication,
1. You can either uninstall it by running:
 `sudo apt-get purge modemmanager`
3. Or run the following command after restarting your computer:
 `sudo stop modemmanager`

### Flashing

1. Make sure the Controller is NOT connected to your computer.
2. Download the Controller recover files and extract the folder so it can be easily accessed. For example, the folder can be placed into the `MagicLeap/firmware/` directory.

- To extract the contents of the compressed file, you may need to enter a password. If prompted enter **MagicLeap**.

3. With the folder extracted, open command line and navigate to that directory:

```shell
cd Magicleap/firmware/control_4992-R2/
```

4. Run the Controller recovery command:

```shell
./erase_myriad.sh
```

:::warning Hot Tip
If the output from running `erase_myriad.sh` shows some output resembling "instance not found" repeatedly, execute the following two commands until you get nothing but `OK:`s as output. If you get errors on the second command, run the first command until you get no errors, then the second one must have no errors on the first attempt, or you must start again:

```shell showLineNumbers
./fcmd.sh mode 0101 & timeout /t 3 & ./fcmd.sh gpio 010300
./fcmd.sh gpio 0003 & ./fcmd.sh edfu 01 & ./fcmd.sh edfu 040000000000040000
```

After both commands have been run without any errors (subsequently, in-a-row), run the following, one more time:

```shell
./erase_myriad.sh
```

:::

</TabItem>
</Tabs>

5. With the script running, turn on your Controller and connect it to your computer.
6. The command line should debug a success message after completing.
7. Finally, connect the Controller to your compute pack and wait for it to update and pair.


### Troubleshooting

If you still experience issues, such as your Controller appearing to not provide input to the ML2, try the following steps:

1. Hold the bumper, trigger and home buttons until the Controller beeps and turns off, to reset pairing, then plug the Controller into the Compute Pack (via direct USB-C to USB-C connection).
2. If that does not fix the issue, downgrade the Compute Pack to the previous OS version, flash the Controller to the previous version (via direct USB-C to USB-C connection), then upgrade the Compute Pack to the most recent OS and flash the controller to the most recent OS (via direct USB-C to USB-C connection).

