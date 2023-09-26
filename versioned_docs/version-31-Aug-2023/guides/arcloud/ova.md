---
id: arcloud-deployment-ova
title: AR Cloud OVA Image Deployment
sidebar_label: OVA Deployment
sidebar_position: 5
date: 02/07/2023
tags: [ARCloud, Cloud, OVA]
keywords: [ARCloud, Cloud, OVA]
description: "A lightweight, pre-configured Virtual Machine for demo purposes"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Utm from './_utm.md';
import VirtualBoxImport from './_virtual_box_import.md';
import VirtualBoxLimitations from './_virtual_box_limitations.md';
import FindIPAddress from './_find_ip.md';
import DeploymentVerification from './_deployment_verification.md';
import RegisterDevice from './_register_device.md';

The provided image contains all the necessary infrastructure and services pre-configured to be able to manage and work
with the Magic Leap devices. This allows to set up a Virtual Machine (VM) quickly and access the services without a
complex deployment process. For this to work certain, compromises had to be taken:

* The AR Cloud bundle needs to be installed when running the virtual machine for the first time
* High-availability for the services is disabled to limit the required resources
* The **observability** stack is not installed

The above limitations can be overcome by reconfiguring the infrastructure and services, but it requires additional steps
to be taken.

:::warning Warning
Taking all the above into consideration, the provided image is not suitable for scalable and fault-tolerant
deployments in production environments! Instead, it is a means of quickly testing the services and devices.
:::

## Download

The images are available on the [Magic Leap 2 Developer Portal](https://ml2-developer.magicleap.com/downloads#ar-cloud-ova).

:::caution Authentication and SLA
You must be logged in to the Developer Portal for these links to appear. You can log in by clicking the "person" icon in
the upper-right corner of the window at the link above.

To download an image the approval of the
[Software License Agreement](https://www.magicleap.com/software-license-agreement-ml2) is required.
:::

Download the latest version of an image for the [runtime environment](#runtime-environments) of your choice.
The OVA image supports the majority of the environments, except for MacBooks with Apple Silicon chipsets, in which case
the UTM image should be used.

## Requirements

### Virtualization Support

Make sure hardware-assisted virtualization is enabled for the host machine's CPU:

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

```shell
grep -cw vmx /proc/cpuinfo
```

:::info Expected Result
The output should be **1**.
:::

  </TabItem>
  <TabItem value="windows" label="Windows">

#### Using Command Prompt

Run Command Prompt as administrator and run:

```shell
systeminfo.exe
```

:::info Expected Result
The **Hyper-V Requirements** should be shown at the end with all the values set to **Yes**.
:::

:::caution Hypervisor running
If the **Hyper-V Requirements** display the message "A hypervisor has been detected. Features required for Hyper-V will
not be displayed." instead of the actual requirements, it means a hypervisor is already running on the machine and it
will prevent VirtualBox from using hardware-assisted virtualization.

[Disable the hypervisor launch](#optional-disable-the-hypervisor-launch).
:::

#### Using PowerShell

Run PowerShell as administrator and run:

```powershell
Get-ComputerInfo -property "HyperVRequirement*"
```

:::info Expected Result
The output should be **True** for all of the properties.
:::

:::caution Hypervisor running
If the output is empty, it means a hypervisor is already running on the machine and it will prevent VirtualBox from
using hardware-assisted virtualization.

[Disable the hypervisor launch](#optional-disable-the-hypervisor-launch).
:::

#### (Optional) Disable the Hypervisor Launch

In case the hypervisor is running, it should be disabled in the boot configuration:

```shell
bcdedit /set "{current}" hypervisorlaunchtype Off
```

:::info
The machine will need to be restarted for the changes to take effect.
:::

  </TabItem>
  <TabItem value="macos" label="MacOS">

```shell showLineNumbers
sysctl machdep.cpu.features | grep -cwi vmx
sysctl kern.hv_support
```

:::info Expected Result
One of the commands should output **1**.
:::

  </TabItem>
</Tabs>

If virtualization is **not** enabled, follow these steps to enable it:

<Tabs groupId="host-machines">
  <TabItem value="generic" label="Generic Steps" default>

1. Restart your computer
1. Enter BIOS while the computer is booting up
1. Find the **Virtualization Technology (VTx)** setting, e.g. from different versions of BIOS:
    * "Security -> System Security"
    * "System Configuration -> Device Configuration"
1. Enable the setting
1. Save changes and boot your OS


  </TabItem>
  <TabItem value="windows" label="Windows">

[Windows Instructions][vtx-windows] for enabling the **Virtualization Technology (VTx)**.

  </TabItem>
  <TabItem value="hp" label="HP">

[HP Instructions][vtx-hp] for enabling the **Virtualization Technology (VTx)**

  </TabItem>
  <TabItem value="dell" label="Dell">

[DELL Instructions][vtx-dell] for enabling the **Virtualization Technology (VTx)**

  </TabItem>
</Tabs>

After enabling the **Virtualization Technology (VTx)** verify that it is now supported by your OS by re-running the
[corresponding command](#virtualization-support).

:::warning Warning
If the host machine does not support hardware-assisted virtualization, the virtual machine will not be able to run.
:::

### Resources

To be able to comfortably use the virtual machine, the following resources are needed for the guest system:

* CPUs: 8
* Memory: 16GB
* Disk: 100GB

:::note
In case of performance issues, the resources can be increased after stopping the VM.
:::

:::caution
The resources mentioned above only include the virtual machine itself. If you are running it on a local machine,
you need more resources for the operating system and other running software.
:::

### Firewall

The following ports need to be exposed to use the provided services:

* `80` - HTTP
* `443` - HTTPS
* `1883` - MQTT
* `8883` - MQTTS

Additionally, a SSH server is configured on the virtual machine and is running on port `22`. The traffic on port `22` is
forwarded to port `2222` when using **VirtualBox** or **UTM**.

Depending on the [runtime environment](#runtime-environments), the firewall configuration might differ:

* Configure your local firewall (if you have one) when running on a local machine
* Configure a cloud firewall based on documentation from your cloud provider otherwise

## Runtime Environments

The virtual machine image can be run on a variety of local or cloud environments. Choose from the following supported
platforms:

<table>
    <thead>
        <tr><th>Environment</th><th>Platform</th><th>Image type</th></tr>
    </thead>
    <tbody>
        <tr><td rowspan="4">Local</td><td><a href="?operating-systems=linux#local-machine">Linux - VirtualBox</a></td><td align="center">OVA</td></tr>
        <tr><td><a href="?operating-systems=windows#local-machine">Windows - VirtualBox</a></td><td align="center">OVA</td></tr>
        <tr><td><a href="?operating-systems=macos#intel-chip---virtualbox">macOS Intel (x86_64) - VirtualBox</a></td><td align="center">OVA</td></tr>
        <tr><td><a href="?operating-systems=macos#apple-chip---utm">macOS Apple Silicon (arm64) - UTM</a></td><td align="center">UTM</td></tr>
        <tr><td rowspan="2">Cloud</td><td><a href="?cloud-providers=gcp#cloud-providers">GCP - Compute Engine</a></td><td align="center">OVA</td></tr>
        <tr><td><a href="?cloud-providers=aws#cloud-providers">AWS - EC2</a></td><td align="center">OVA</td></tr>
    </tbody>
</table>

### Local Machine

The virtual machine image can be run on a laptop/desktop computer or a server that is either not virtualized or that
supports nested virtualization. This approach might be suitable for developers that need to run AR Cloud locally or when
it is required to have the services running inside a private network.

<Tabs groupId="operating-systems" queryString>
  <TabItem value="linux" label="Debian/Ubuntu" default>

Download [VirtualBox for Linux][vbox-linux-download] or for **Debian**-based Linux distributions on amd64 CPUs you can
install **VirtualBox** with the following commands:

```shell showLineNumbers
curl -sSL https://www.virtualbox.org/download/oracle_vbox_2016.asc | sudo gpg --dearmor --yes --output /usr/share/keyrings/oracle-virtualbox-2016.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/oracle-virtualbox-2016.gpg] http://download.virtualbox.org/virtualbox/debian $(lsb_release -cs) contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list
sudo apt update
sudo apt install VirtualBox-7.0
```

#### VirtualBox Limitations

<VirtualBoxLimitations />

#### Importing the Appliance

<VirtualBoxImport />

  </TabItem>
  <TabItem value="windows" label="Windows" default>

Download [VirtualBox for Windows][vbox-download].

#### Importing the Appliance

<VirtualBoxImport />

  </TabItem>
  <TabItem value="macos" label="MacOS" default>

#### Intel Chip - VirtualBox

:::warning Apple Silicon
All newer MacBooks have non-Intel architectures, instead using "Apple Silicon" chipsets (M1 or M2). If you have one of
these M1 or M2 processors in your Mac, **VirtualBox** will not run and you need to follow the instructions for
**[UTM](/versioned_docs/version-31-Aug-2023/guides/arcloud/arcloud-deployment-ova#apple-chip---utm)** below.
:::

Download [VirtualBox for MacOS and Intel CPUs][vbox-download].

##### VirtualBox Limitations

<VirtualBoxLimitations />

##### Importing the Appliance

<VirtualBoxImport />

#### Apple Chip - UTM

:::info Apple Silicon
**UTM** offers native support for running images on Apple Silicon-based hardware.
:::

<Utm />

  </TabItem>
</Tabs>

### Cloud Providers

In case local machines are not available or the services need to be available publicly, it is also possible to deploy
the virtual machine image to the supported cloud providers described below.

<Tabs groupId="cloud-providers" queryString>
  <TabItem value="gcp" label="GCP" default>

Make sure you have the [Google Cloud CLI](https://cloud.google.com/sdk/docs/install) installed.

Check the [GCP documentation][gcp-image-import] or follow the steps below:

1. Prepare details about your [GCP project][gcp-identifying-projects] and user account:

   ```shell showLineNumbers
   export GCP_PROJECT_ID=my-project-id
   export GCP_PROJECT_NUMBER=1234567890
   export GCP_USER_EMAIL=me@my-domain.com
   ```

1. Enable the **Cloud Build API** (this creates the [Cloud Build service account][gcp-build-sa] automatically):

   ```shell
   gcloud services enable cloudbuild.googleapis.com --project $GCP_PROJECT_ID
   ```

1. If your user account already has the `roles/owner` role on the project:

   ```shell showLineNumbers
   gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
       --member "user:$GCP_USER_EMAIL" \
       --role 'roles/storage.objectAdmin'
   ```

1. Otherwise, grant the [required IAM roles][gcp-import-prereqs]:

    - to your user account:

      ```shell showLineNumbers
      gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
          --member "user:$GCP_USER_EMAIL" \
          --role 'roles/storage.admin'
      gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
          --member "user:$GCP_USER_EMAIL" \
          --role 'roles/viewer'
      gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
          --member "user:$GCP_USER_EMAIL" \
          --role 'roles/resourcemanager.projectIamAdmin'
      gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
          --member "user:$GCP_USER_EMAIL" \
          --role 'roles/cloudbuild.builds.editor'
      ```

    - to the **Cloud Build** service account:

      ```shell showLineNumbers
      gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
         --member "serviceAccount:$GCP_PROJECT_NUMBER@cloudbuild.gserviceaccount.com" \
         --role 'roles/compute.admin'
      gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
         --member "serviceAccount:$GCP_PROJECT_NUMBER@cloudbuild.gserviceaccount.com" \
         --role 'roles/iam.serviceAccountUser'
      gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
         --member "serviceAccount:$GCP_PROJECT_NUMBER@cloudbuild.gserviceaccount.com" \
         --role 'roles/iam.serviceAccountTokenCreator'
      ```

    - to the **Compute Engine** service account:

      ```shell showLineNumbers
      gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
        --member "serviceAccount:$GCP_PROJECT_NUMBER-compute@developer.gserviceaccount.com" \
        --role 'roles/compute.storageAdmin'
      gcloud projects add-iam-policy-binding $GCP_PROJECT_ID \
        --member "serviceAccount:$GCP_PROJECT_NUMBER-compute@developer.gserviceaccount.com" \
        --role 'roles/storage.objectAdmin'
      ```

1. Create a **GCS** bucket:

   ```shell showLineNumbers
   export GCP_BUCKET_NAME=my-bucket
   export GCP_BUCKET_LOCATION=us
   gcloud storage buckets create gs://$GCP_BUCKET_NAME --project $GCP_PROJECT_ID --location $GCP_BUCKET_LOCATION
   ```

1. Upload the OVA image to the **GCS** bucket:

   ```shell showLineNumbers
   export GCP_OVA_IMAGE='arcloud-1.2.3.ova'
   gsutil -o GSUtil:parallel_composite_upload_threshold=250M \
       -o GSUtil:parallel_composite_upload_component_size=50M \
       cp $GCP_OVA_IMAGE gs://$GCP_BUCKET_NAME
   ```

1. Create a new **Compute Engine** instance based on the imported OVA image:

   ```shell showLineNumbers
   export GCP_INSTANCE_NAME=my-instance
   export GCP_ZONE=us-central1-c
   gcloud compute instances import $GCP_INSTANCE_NAME \
       --source-uri gs://$GCP_BUCKET_NAME/$GCP_OVA_IMAGE \
       --project $GCP_PROJECT_ID \
       --zone $GCP_ZONE
   ```

1. Make sure the necessary [firewall](#firewall) rules are configured.

:::note
When importing a new image in the same project, you can start from step 6, but make sure to export all the
variables.
:::

  </TabItem>
  <TabItem value="aws" label="AWS">

Make sure you have the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) installed.

Check the [AWS documentation][aws-image-import] or follow the steps below:

1. Prepare details about your [AWS account][aws-find-account-id]:

   ```shell
   export AWS_ACCOUNT_ID=123456789012
   ```

   The account ID can be obtained by running:

   ```shell
   aws sts get-caller-identity --query Account --output text
   ```

1. Create an S3 bucket:

   ```shell showLineNumbers
   export AWS_BUCKET_NAME=my-bucket
   export AWS_BUCKET_REGION=us-east-1
   aws s3api create-bucket --bucket $AWS_BUCKET_NAME --region $AWS_BUCKET_REGION --acl private
   ```

   :::note Bucket Region
   When importing an OVA image the S3 bucket has to be in the same region as the AWS AMI image that is created. Adjust
   the bucket region to the one where the EC2 instance should be running.
   :::

1. Grant the [required permissions][aws-import-reqs]:

    - create a service role with a trust relationship document:

      ```shell showLineNumbers
      cat >vmimport-trust-policy.json <<EOF
      {
         "Version": "2012-10-17",
         "Statement": [
            {
               "Effect": "Allow",
               "Principal": {
                  "Service": "vmie.amazonaws.com"
               },
               "Action": "sts:AssumeRole",
               "Condition": {
                  "StringEquals": {
                     "sts:Externalid": "vmimport",
                     "aws:SourceAccount": "$AWS_ACCOUNT_ID"
                  },
                  "ArnLike": {
                     "aws:SourceArn": "arn:aws:vmie:*:$AWS_ACCOUNT_ID:*"
                  }
               }
            }
         ]
      }
      EOF
      aws iam create-role --role-name vmimport \
          --assume-role-policy-document "file://vmimport-trust-policy.json"
      ```

    - attach a policy to the created role:

      ```shell showLineNumbers
      cat >vmimport-role-policy.json <<EOF
      {
         "Version":"2012-10-17",
         "Statement":[
            {
               "Effect": "Allow",
               "Action": [
                  "s3:GetBucketLocation",
                  "s3:GetObject",
                  "s3:ListBucket"
               ],
               "Resource": [
                  "arn:aws:s3:::$AWS_BUCKET_NAME",
                  "arn:aws:s3:::$AWS_BUCKET_NAME/*"
               ]
            },
            {
               "Effect": "Allow",
               "Action": [
                  "ec2:ModifySnapshotAttribute",
                  "ec2:CopySnapshot",
                  "ec2:RegisterImage",
                  "ec2:Describe*"
               ],
               "Resource": "*"
            }
         ]
      }
      EOF
      aws iam put-role-policy --role-name vmimport \
          --policy-name vmimport \
          --policy-document "file://vmimport-role-policy.json"
      ```

      :::note Multiple Buckets
      The role policy above will overwrite any previously attached ones. If you would like to import OVA images in
      multiple regions, create separate buckets for each region and include them in the `Resource` list above.
      :::

1. Upload the OVA image to the S3 bucket:

   ```shell showLineNumbers
   export AWS_OVA_IMAGE='arcloud-1.2.3.ova'
   aws s3 cp $AWS_OVA_IMAGE s3://$AWS_BUCKET_NAME
   ```

1. Import the OVA image as an AWS AMI image:

   ```shell showLineNumbers
   cat >ec2-containers.json <<EOF
   [
     {
       "Description": "AR Cloud OVA",
       "Format": "ova",
       "Url": "s3://$AWS_BUCKET_NAME/$AWS_OVA_IMAGE"
     }
   ]
   EOF
   aws ec2 import-image --description "arcloud-ova" --disk-containers "file://ec2-containers.json"
   ```

   Note down the import task ID returned by the command.

1. Monitor the status of the import task until it is in the `completed` status by using the ID from the previous step:

   ```shell
   aws ec2 describe-import-image-tasks --import-task-ids import-ami-1234567890abcdef0
   ```

1. Find the ID of the imported image (use the date to find the correct image):

   ```shell showLineNumbers
   aws ec2 describe-images \
       --owners $AWS_ACCOUNT_ID \
       --filters 'Name=name,Values=import-ami*' \
       --query 'Images[*].[ImageId,CreationDate]' \
       --output text
   export AWS_IMAGE_ID=ami-0abcdef1234567890
   ```

1. Generate an updated block device mappings file based on the imported image and modify it to use a
   [Provisioned IOPS SSD volume](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/provisioned-iops.html):

   ```shell showLineNumbers
   aws ec2 describe-images --image-ids $AWS_IMAGE_ID --query 'Images[0].BlockDeviceMappings' > block-device-mappings.json
   sed -ri 's/^(\s+)("VolumeType": )"(.+)"/\1\2"io2",\n\1"Iops": 2000/' block-device-mappings.json
   ```

   :::note GNU sed
   The above command requires GNU sed to be installed on your system.
   :::

1. Run an EC2 instance using the imported image and the custom volume configuration file:

   ```shell showLineNumbers
   aws ec2 run-instances \
       --image-id $AWS_IMAGE_ID \
       --instance-type c5d.2xlarge \
       --associate-public-ip-address \
       --ebs-optimized \
       --block-device-mappings file://block-device-mappings.json
   ```

1. Make sure the necessary [firewall](#firewall) rules are configured.

:::note
When importing a new image in the same account, you can start from step 4, but make sure to export all the
variables.
:::

  </TabItem>
</Tabs>

---

## Credentials

The virtual machine includes a dedicated `arcloud` user with a password set to `changeme`. The password is set to expire
and needs to be changed during the first login.

:::warning Key-based Authentication
Password access should be disabled entirely for all publicly accessible deployments (e.g. on GCP or AWS).
Key-based authentication should be used instead.

To do this, create keys for your user accounts and modify `/etc/ssh/sshd_config` to include:
```ini
PasswordAuthentication no
```
:::

## Accessing the Running Virtual Machine

To access the virtual machine, the IP address of your machine is needed.

<FindIPAddress />

Apart from using the graphical interface directly, you can also access the machine using SSH (this makes it easier to
copy the generated credentials):

- to a local virtual machine:

  ```shell
  ssh arcloud@<ip-address> -p 2222
  ```

  e.g.:

  ```shell
  ssh arcloud@192.168.1.101 -p 2222
  ```

- to a cloud instance:

  ```shell
  ssh arcloud@<ip-address>
  ```

  e.g.:

  ```shell
  ssh arcloud@1.2.3.4
  ```

## Deployment Options

:::info
The remaining commands in this guide will be executed from the instantiated virtual machine, all from the home (`~/`)
directory.
:::

The image can be configured to use an IP address or the default `arcloud-ova.local` domain with HTTP only.

Alternatively, a custom domain can be used which will trigger the creation of a TLS certificate.

### Simple Deployment

With this approach we limit the configuration needed to access the services, but with the cost of lowered security.

#### Option 1. Use the IP Address Only

If you want to be able to connect to the machine from other devices, the services need to be configured to use an IP
address directly.

Run the `set_ip.sh` script from inside the virtual machine and provide your IP address as argument:

```shell
./set_ip.sh --accept-sla <ip-address>
```

e.g. :

```shell
./set_ip.sh --accept-sla 192.168.1.101
```

#### Option 2. Use the Default Domain and Configure Local DNS Overrides

In case you want to use the default domain, run the `set_default.sh` script from inside the virtual machine:

```shell
./set_default.sh --accept-sla
```

To be able to access the services, the IP address of the machine where the image is deployed can be set as the target of
the pre-configured domain.

The requirement is that the IP should be accessible from the machine in a browser.

Add the following to the bottom of your `/etc/hosts` file (may require `sudo`):

```plaintext showLineNumbers
# arcloud-ova
<IP-address> arcloud-ova.local
<IP-address> smtp.arcloud-ova.local
```

:::note
This will only make the services available on the devices that have the override configured.
:::

### Advanced Deployment - Use a Custom Domain with a TLS Certificate

This allows the services to use a custom domain and issue a TLS certificate.

1. Point your custom domain to the IP address where the virtual machine is available and make sure that [all the ports
   mentioned above](#firewall) are accessible
1. Run the `set_domain.sh` script from inside the virtual machine and provide your domain as argument:

   ```shell
   ./set_domain.sh --accept-sla <domain>
   ```

   e.g. :

   ```shell
   ./set_domain.sh --accept-sla my.domain.com
   ```

:::note
This is the recommended approach for all publicly accessible deployments (e.g. on GCP or AWS).
:::

## Verify Installation

<DeploymentVerification />

<RegisterDevice />

## Display Cluster Information

If you ever need to display the cluster information again, run the following script:

```shell
./show_info.sh --accept-sla
```

## Preserving the Virtual Machine State

The virtual machine is configured to preserve all the data created, changes made and configuration set during its usage
(e.g. registered devices, generated maps).

For this to work, it needs to be powered off safely as is required for all physical machines. To do it, connect to the
virtual machine using SSH and run the following command in the terminal:

```shell
sudo poweroff
```

It might take around 2 minutes to stop all the services and and turn off the virtual machine completely.

:::warning Warning
If you shut the virtual machine off from **VirtualBox**, **UTM** or the cloud vendor interface or will not wait until
it closes, your data might be lost.
:::

[vtx-windows]: https://support.microsoft.com/en-us/windows/enable-virtualization-on-windows-11-pcs-c5578302-6e43-4b4b-a449-8ced115f58e1
[vtx-hp]: https://support.hp.com/us-en/document/ish_5637142-5637191-16
[vtx-dell]: https://www.dell.com/support/kbdoc/en-us/000195978/how-to-enable-or-disable-hardware-virtualization-on-dell-systems
[vbox-download]: https://www.virtualbox.org/wiki/Downloads
[vbox-linux-download]: https://www.virtualbox.org/wiki/Linux_Downloads
[gcp-image-import]: https://cloud.google.com/compute/docs/import/import-ovf-files
[gcp-import-prereqs]: https://cloud.google.com/compute/docs/import/requirements-export-import-images
[gcp-build-sa]: https://cloud.google.com/build/docs/cloud-build-service-account
[gcp-identifying-projects]: https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects
[aws-image-import]: https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html
[aws-find-account-id]: https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-identifiers.html#FindAccountId
[aws-import-reqs]: https://docs.aws.amazon.com/vm-import/latest/userguide/required-permissions.html
[aws-launch-instance]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.html

