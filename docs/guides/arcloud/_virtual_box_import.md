1. Start **VirtualBox**.
2. Select **File** -> **Import Applicance...** from the menu.
3. Select the downloaded OVA file from your disk and click **Next**.
4. Uncheck the **Import hard drives as VDI** option.
5. Click **Finish**.
6. When the appliance has finished loading, select it from the left panel and click on **Start**.

When the virtual machine starts login by using the [credentials](#credentials) provided below, select a
[deployment option](#deployment-options) and continue from there.

You can also run the imported virtual machine in headless mode:

```shell
vboxmanage startvm arcloud-ova --type=headless
```
