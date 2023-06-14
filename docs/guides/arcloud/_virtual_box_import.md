import AccessVM from './_access_vm.md';

1. Start **VirtualBox**
1. Select **File** > **Import Appliance...** from the menu
1. Select the [downloaded **OVA** file](/docs/guides/arcloud/arcloud-deployment-ova#download) from your disk and click **Next**
1. Uncheck the **Import hard drives as VDI** option
1. Click **Finish**
1. When the appliance has finished loading, select it from the left panel and click on **Start**

<AccessVM />

You can also run the imported virtual machine in headless mode:

```shell
vboxmanage startvm arcloud-ova --type=headless
```
