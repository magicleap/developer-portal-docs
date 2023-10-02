---
id: arcloud-deployment-aws
title: AR Cloud AWS Deployment
sidebar_label: AWS
sidebar_position: 2
date: 02/07/2023
tags: [ARCloud, Cloud, Kubernetes, Istio, Helm, AWS]
keywords: [ARCloud, Cloud, Kubernetes, Istio, Helm, AWS]
description: "Enterprise deployment to Amazon Web Services (AWS)"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import SystemRequirements from './_system_requirements.md';
import Licenses from './_licenses.md';
import LinuxNotice from './_linux_notice.md';
import DownloadArcloud from './_download_arcloud.md';
import ArcloudEnvVariables from './_arcloud_env.md';
import ArcloudEnvDomain from './_arcloud_env_domain.md';
import EnvFile from './_env_file.md';
import CliVersions from './_cli_versions.md';
import HelmRequirements from './_helm_requirements.md';
import InstallHelm from './_install_helm.md';
import InstallHelmMacOS from './_install_helm_macos.md';
import IstioRequirements from './_istio_requirements.md';
import InstallIstio from './_install_istio.md';
import InstallIstioGateway from './_install_istio_gateway.md';
import InstallIstioAws from './_install_istio_aws.md';
import InstallArcloud from './_install_arcloud.md';
import InstallArcloudSetupSecure from './_install_arcloud_setup_secure.md';
import DeploymentVerificationSecure from './_deployment_verification_secure.md';
import DebianDependencies from './_debian_dependencies.md';
import MacOSDependencies from './_macos_dependencies.md';
import WindowsDependencies from './_windows_dependencies.md';
import RegisterDevice from './_register_device.md';

## Overview

AR Cloud is a connected service that allows Magic Leap 2 devices to access large-scale spatial data. This spatial data
can be managed on the web-based console where digital twin administrators create Shared Spaces, manage device-side
scans, and merge scans to contribute to larger-scale Spaces. AR Cloud admins are able to import and export spatial maps,
manage large-scale digital twin deployments, and monitor Magic Leap 2 device access.

### Benefits

AR Cloud allows users to go beyond the limitations of their Magic Leap 2 devices. The following features help enhance a
user’s Magic Leap 2 experience:
- Co-present experiences – allows multiple users to experience the same digital content in the same place through shared
    maps and their spatial anchors.
- Large spatial maps (>10,000m<sup>2</sup>) – without AR Cloud, each device has a limit of five Local Spaces of
    ~250m<sup>2</sup>.
- Device access to an unlimited amount of [Spaces](/docs/guides/features/spaces/spaces-tool) – Magic Leap 2 devices can
    gain unlimited access to shared Spaces, as opposed to the 5 stored locally.

### Licensing

AR Cloud requires an active license to be activated on a device. Licenses are chosen at the time of purchase of a Magic
Leap 2 device.

#### Choosing a License

<Licenses />

##### Disambiguation

The primary entrypoint to any spatially-mapped experience on a Magic Leap 2 is our
[Spaces](/docs/guides/features/spaces/spaces-tool) tool. The Base model of ML2 can still use [Spatial
Anchors](/docs/guides/features/spaces/spatial-anchors), albeit in an offline manner, where Spatial Maps are stored
on-device.

*AR Cloud-ready refers to features described in the [Benefits section of our AR Cloud Overview
page](#benefits). Developer Pro or the Enterprise Editions are required to get these added feature
sets.

#### Activating a License

Learn more about managing an AR Cloud license using the guide [Managing Your Magic Leap 2
License](https://www.magicleap.care/hc/en-us/articles/9356966949389-Managing-Your-Magic-Leap-2-License).

## Technical Details

The estimated time required to complete the process is **1 hour** assuming:

- the reader has experience with [AWS EKS][aws-eks] and [Kubernetes][k8s] in general
- an account in AWS is already available and the [necessary privileges](#required-privileges) to create an EKS cluster
    are granted - this includes provisioning EC2 instances, VPC networks, subnets, creating IAM policies, roles and
    security groups, etc.

No user accounts or keys are created as part of this process. The cluster, however, uses [Service Accounts][k8s-sa] with
IAM roles assigned and [Secrets][k8s-secrets] where the default access credentials are automatically generated.

The installation process also uses the following solutions, but detailed knowledge about them is not required:

- [Helm][helm]
- [Istio][istio]
- [cert-manager][cert-manager]
- [Bash scripts][bash-wiki]

<LinuxNotice />

### Regions and Availibility Zones

The default configuration deploys the cluster in the selected region and nodes are placed in multiple availibility
zones. The only requirement for the region is that [it supports
EKS](https://docs.aws.amazon.com/general/latest/gr/eks.html).

### Provisioned Infrastructure

AWS services used by default:

- [EKS][aws-eks] - to run the Kubernetes cluster
- [EC2][aws-ec2] - to manage a dedicated VPC, node group, subnets, routes and ELB
- [CloudFormation][aws-cloud-formation] - to provision the cluster, node group and add-ons
- [ELB][aws-elb] - to get access to the services running inside the cluster

The deployed Kubernetes cluster is public by default and needs:
- [NAT gateway][aws-vpc-nat-gw]
- [Internet gateway][aws-vpc-internet-gw]
- [Elastic IP addess][aws-ec2-eip]

Additional services that can be used optionally:

- [RDS][aws-rds] - to host a database outside of the Kubernetes cluster
- [S3][aws-s3] - to host object storage outside of the Kubernetes cluster

:::note Costs
All the services listed above are billable, so verify the appropriate pricing for associated costs.
:::

Required components deployed inside the Kubernetes cluster by default:

- [PostgreSQL][postgresql] - DBMS
- [Minio][minio] - object storage
- [NATS][nats] - message broker

Add-ons needed in the Kubernetes cluster:

- [AWS Load Balancer Controller][aws-lb-controller]
- [Amazon EBS CSI Driver][aws-ebs-csi]
- [Amazon VPC CNI][aws-vpc-cni]

### Privileges

The detailed list of the required minimum IAM privileges can be found in [the eksctl documentation][eksctl-iam-min].

Each of the add-ons listed above uses a dedicated IAM role that is described in detail under the referenced links. The
roles are need for the add-ons to be able to access and manage the underlying resources.

:::warning Root Account
A root user accounts should never be used for day-to-day tasks and accounts with the least required privileges should be
used instead.

For more information check the [Security best practices in IAM][aws-iam-bp]
:::

### Stored Data

A PostgreSQL database is needed to store relational data about ML2 devices, shared spaces, maps, user accounts, etc.
Apart from user account credentials (in case an external Identity Provider is not used) and geographic coordinates of
the spaces, none of the data is sensitive or contains user-related information.

The AR Cloud deployment also uses an S3-compatible object storage to persist spatial maps, meshes and textures. These
can potentially contain sensitive information, so it is advised to never configure the buckets to be available publicly.

For additional security, encryption can be configured for the following components:
- [EBS volumes][aws-ebs-encryption]
- [RDS databases][aws-rds-encryption] - in case an external database is used
- [S3 buckets][aws-s3-encryption] - in case an external object storage is used

:::caution Backup and recovery
The data hosted for AR Cloud is not backed up by default. Backups can be configured on different levels and can include:

- [EBS volumes][aws-ebs-backup] - used by cluster node group instances and persistent volumes
- [RDS databases][aws-rds-backup] - in case an external database is used
- [S3 buckets][aws-s3-backup] - in case an external object storage is used
:::

### Architecture

During the deployment the following resources are created by default:

- a dedicated VPC - using the `192.168.0.0/16` CIDR
- a private and public subnet for each availability zone - each with a `/19` mask
- an Internet gateway
- a NAT gateway in one of the AZs
- an Elastic IP address attached to the the NAT gateway
- a main route table is created automatically for the VPC
- one route table for the public subnets and one for each of the private ones
- a route to the local VPC network and the Internet gateway in the routing table assiciated with the public subnets:

  | destination | target |
  |-------------|--------|
  | 0.0.0.0/0   | igw    |
  | 192.168.0.0/16 | local |

- a route to the local VPC network and the NAT gateway in each of the routing tables associated with a private subnets:

  | destination | target |
  |-------------|--------|
  | 0.0.0.0/0   | nat gw |
  | 192.168.0.0/16 | local |

- a network ACL allowing all traffic and associated with all the subnets
- security groups for the VPC, EKS cluster and ELB are created automatically
- a security group for communication between all nodes in the cluster
- a security group for communication between the control plane and the worker nodegroups
- an EKS cluster
- a nodegroup for the EKS cluster
- add-ons for the EKS cluster described [above](#provisioned-infrastructure) with the required policies and a dedicated role
- an ELB for the `istio-ingressgateway` with listeners for ports:
    - TCP `80`/`443` - for HTTP/gRPC traffic without/with a TLS certificate
    - TCP `1883`/`8883` - for MQTT traffic without/with a TLS certificate
    - TCP `15201` - for status checks

#### Using public networking for the node group
<Image url={require("/img/arcloud/architecture-public.png")}>AR Cloud architecture with public networking</Image>

#### Using private networking for the node group
<Image url={require("/img/arcloud/architecture-private.png")}>AR Cloud architecture with private networking</Image>

## Setup

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

<DebianDependencies />

  </TabItem>
  <TabItem value="windows" label="Windows">

<WindowsDependencies />

<DebianDependencies />

  </TabItem>
  <TabItem value="macos" label="MacOS">

<MacOSDependencies />

  </TabItem>
</Tabs>

### AWS CLI

To get started as quickly as possible, refer to these simple setup steps for:

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
- [eksctl](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html)

<CliVersions />

### Tools

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

#### Helm

<HelmRequirements />

<InstallHelm />

#### Kubectl

[Installing or updating kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html)

  </TabItem>
  <TabItem value="windows" label="Windows">

#### Helm

<HelmRequirements />

<InstallHelm />

#### Kubectl

[Installing or updating kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html)

  </TabItem>
  <TabItem value="macos" label="MacOS">

#### Helm

<HelmRequirements />

<InstallHelmMacOS />

#### Kubectl

[Installing or updating kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html)

  </TabItem>
</Tabs>

### AR Cloud

<DownloadArcloud />

## Configure Environment

<ArcloudEnvVariables />

<ArcloudEnvDomain />

<EnvFile />

## Infrastructure Setup

### Kubernetes System Recommendations

- Version `1.23.x`, `1.24.x`, `1.25.x`
- 8 Nodes (each with):
  - 8 CPUs
  - 32 GB memory

Example [instance types in AWS](https://aws.amazon.com/ec2/instance-types/):

- 8 * **t3.2xlarge**
- 8 * **m6i.2xlarge**
- 8 * **m6a.2xlarge**

### Environment Settings

In your terminal configure the following variables per your environment:

```shell
export AWS_PROFILE="your-profile"
export AWS_ACCOUNT_ID="your-account-id"
export AWS_REGION="your-region"
export AWS_CLUSTER_NAME="your-cluster-name"
```

:::note
These variables are already included in the [env file](#configure-environment) described above.
:::

### Sample cluster configurations

The two options below are alternatives that can be used depending on your preferences:

- Option 1 - an unmanaged node group is used, manual installation of add-ons is required
- Option 2 - an managed node group is used, add-ons and service accounts are installed automatically

:::note Private Networking
In both options the created node group can be isolated from the public Internet by placing the nodes in the private
subnet for each availability zone.

To enable private networking pass the `--node-private-networking` flag to the `eksctl create cluster` command.
Alternatively, the `privateNetworking` field for a node group can be set to `true` inside the eksctl sample
configuration files.

Check the [eksctl subnet documentation][eksctl-private-networking] for details.
:::

#### Option 1: Bare-bones cluster with non-managed node group

Adjust the `./setup/eks-cluster.yaml` file to your needs and create the cluster:

```shell
cat ./setup/eks-cluster.yaml | envsubst | eksctl create cluster -f -
```

Wait until the command finishes and verify the results in [CloudFormation](https://console.aws.amazon.com/cloudformation).

Confirm `kubectl` is directed at the correct context:

```shell
kubectl config current-context
```

:::info Expected response
`{your-email}@{your-cluster}.{your-region}.eksctl.io`
:::

Complete the following guides to install additional required cluster components:

- [Amazon EBS CSI driver][aws-ebs-csi]:
  - [Creating the Amazon EBS CSI driver IAM role for service accounts](https://docs.aws.amazon.com/eks/latest/userguide/csi-iam-role.html)
  - [Managing the Amazon EBS CSI driver as an Amazon EKS add-on](https://docs.aws.amazon.com/eks/latest/userguide/managing-ebs-csi.html)
- [Installing the AWS Load Balancer Controller add-on][aws-lb-controller]
- [Managing the Amazon VPC CNI plugin for Kubernetes add-on][aws-vpc-cni]

:::note
In case of problems installing the VPC CNI plugin, do *not* provide the version, so the default one is used instead.
:::

#### Option 2: Pre-configured cluster with managed node group and preinstalled add-ons

Adjust the `./setup/eks-cluster-managed-with-addons.yaml` file to your needs and create
the cluster:

```shell
cat ./setup/eks-cluster-managed-with-addons.yaml | envsubst | eksctl create cluster -f -
```

Wait until the command finishes and verify the results in [CloudFormation](https://console.aws.amazon.com/cloudformation).

Confirm `kubectl` is directed at the correct context:

```shell
kubectl config current-context
```

:::info Expected response
`{your-email}@{your-cluster}.{your-region}.eksctl.io`
:::

Install the AWS Load Balancer Controller (use the image repository for the selected region based on this
[list](https://docs.aws.amazon.com/eks/latest/userguide/add-ons-images.html)), e.g.:

```shell showLineNumbers
helm repo add eks https://aws.github.io/eks-charts
helm repo update
helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
    -n kube-system \
    --set clusterName=$AWS_CLUSTER_NAME \
    --set serviceAccount.create=false \
    --set serviceAccount.name=aws-load-balancer-controller \
    --set image.repository=602401143452.dkr.ecr.eu-west-3.amazonaws.com/amazon/aws-load-balancer-controller
```

### Cluster verification

To make sure the cluster is correctly configured you can run the following commands:

1. Check if your cluster is accessible using eksctl:

```shell
eksctl get cluster --region $AWS_REGION --name $AWS_CLUSTER_NAME -o yaml
```

:::info
The cluster status should be ACTIVE.
:::

2. Verify that the **OIDC** issuer is configured, e.g.:

```yaml
Identity:
  Oidc:
    Issuer: https://oidc.eks.eu-west-3.amazonaws.com/id/0A6729247C19177211F7EE71E85F9F50
```

3. Check if the add-ons are installed on your cluster:

```shell
eksctl get addons --region $AWS_REGION --cluster $AWS_CLUSTER_NAME -o yaml
```

:::info
There should be 2 add-ons and their status should be ACTIVE.
:::

## Install Istio

<IstioRequirements />

Update the Istio configuration for it to work with the
[AWS LB controller](https://kubernetes-sigs.github.io/aws-load-balancer-controller/):

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

```shell
sed -ri '/replicaCount:/{n;s#(^\s+)(service:)#\1serviceAnnotations:\n\1  service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing\n\1  service.beta.kubernetes.io/aws-load-balancer-type: nlb\n\1\2#}' ./setup/istio.yaml
```

  </TabItem>
  <TabItem value="windows" label="Windows">

```shell
sed -ri '/replicaCount:/{n;s#(^\s+)(service:)#\1serviceAnnotations:\n\1  service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing\n\1  service.beta.kubernetes.io/aws-load-balancer-type: nlb\n\1\2#}' ./setup/istio.yaml
```

  </TabItem>
  <TabItem value="macos" label="MacOS">

```shell
gsed -ri '/replicaCount:/{n;s#(^\s+)(service:)#\1serviceAnnotations:\n\1  service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing\n\1  service.beta.kubernetes.io/aws-load-balancer-type: nlb\n\1\2#}' ./setup/istio.yaml
```

  </TabItem>
</Tabs>

Install Istio:

<InstallIstio />

### Install Istio Gateway

<InstallIstioGateway />

### Configure Domain and Elastic Load Balancer

<InstallIstioAws />

## Install ARCloud

<InstallArcloud />

<InstallArcloudSetupSecure />

## Verify Installation

<DeploymentVerificationSecure />

<RegisterDevice />

## Maintenance

### Upgrade AR Cloud

AR Cloud can be easily upgraded by following the steps below:

1. Download a [newer release from Github](#ar-cloud).
1. Set all the environment variables for [AR Cloud](#configure-environment) and [your AWS
   account](#environment-settings) that were used during the initial installation.
1. Run the [setup script](#setup-ar-cloud) again to upgrade the services automatically.

### Upgrade the Kubernetes Cluster

Follow the [offical AWS documentation][aws-eks-update] to upgrade your Kuberenetes cluster to a newer version.

### Rotate Credentials

All credentials are automatically generated during the installation process and stored in Kubernetes secrets. To rotate
them, new secrets have to be created and then replaced in the Helm values used by AR Cloud.

The `postgresql` and `nats` secrets all use the same keys for the credentials:

- `username`
- `password`

The object storage secrets use the following keys for the credentials:

- `accesskey`
- `secretkey`

In case an external database or object storage are used, the process might differ for each of these services, but AR
Cloud still uses secrets to read the current credentials, so they should be adjusted accordingly.

:::note Existing Secrets
Make sure you use unique names for the new secrets, so that they do not overwrite the existing ones.
:::

1. Generate new secrets for the selected service and account, e.g.:

   ```yaml
   apiVersion: v1
   kind: Secret
   metadata:
     name: db-mapping-20231003
   type: Opaque
   data:
     username: base64-encoded-username
     password: base64-encoded-password
   ---
   ...
   ```

1. Create the new secrets inside the cluster, e.g.:

   ```shell
   kubectl -n arcloud apply -f /path/to/my-new-secrets.yaml
   ```

1. Update the `existingSecret` values and provide the names of the created secrets in the `values.yaml` file bundled
   with the AR Cloud release, e.g.:

   ```yaml
   ...
   postgresql:
     users:
     - username: mapping
       password: ""
       existingSecret: "db-mapping-20231003"
       database: arcloud
       role: connect
   ...
   ```

1. Follow [the procedure above](#upgrade-ar-cloud) to reinstall the AR Cloud services to use the new secrets.

### Manage AWS Quotas

Each AWS account has default quotas for all the available services. In case of problems related to exceeding these
quotas, please refer to [the documentation][aws-quotas] about checking or increasing them for your account.

### Check Object Storage Usage

In case the bundled `minio` service is running inside the cluster, it is possible to easily verify the used of the main
bucket used by AR Cloud.

1. Create a `minio-client-job.yaml` file with the following contents:

   ```yaml
   apiVersion: batch/v1
   kind: Job
   metadata:
     name: minio-disk-usage
     namespace: arcloud
   spec:
     parallelism: 1
     backoffLimit: 1
     completions: 1
     ttlSecondsAfterFinished: 100
     template:
       spec:
         containers:
         - args:
           - -c
           - |
             mc config host add my-alias http://minio:81 "$MINIO_ROOT_USER" "$MINIO_ROOT_PASSWORD";
             mc du -d 2 my-alias/arcloud;
             curl -sSX POST $ISTIO_QUIT_API/quitquitquit
           command:
           - /bin/bash
           env:
           - name: MINIO_ROOT_USER
             valueFrom:
               secretKeyRef:
                 key: accesskey
                 name: minio
           - name: MINIO_ROOT_PASSWORD
             valueFrom:
               secretKeyRef:
                 key: secretkey
                 name: minio
           - name: ISTIO_QUIT_API
             value: http://127.0.0.1:15020
           image: minio/mc
           imagePullPolicy: IfNotPresent
           name: mc
         restartPolicy: Never
   ```

1. Run the following command to create a job, log in to the storage service and check the disk usage of the arcloud bucket:

   ```shell
   kubectl apply -f minio-client-job.yaml; kubectl wait --for=condition=complete -n arcloud job/minio-disk-usage --timeout=60s; kubectl logs -n arcloud job/minio-disk-usage -c mc
   ```

   The output should look like this:

   ```
   job.batch/minio-disk-usage created
   job.batch/minio-disk-usage condition met
   Added `my-alias` successfully.
   876MiB	124 objects		arcloud/canonical-maps
   263MiB	704 objects		arcloud/dense-meshes
   29MiB	150 objects		arcloud/sensor-data
   2.1GiB	3301 objects	arcloud/support
   109MiB	16 objects		arcloud/tracking-maps
   3.4GiB	4295 objects	arcloud
   ```

1. Copy the output and send it to Magic Leap support for analysis.

## Troubleshooting

#### Run the setup script in debug mode

In some cases additional information might help finding the cause of issues with the installation. The setup script can
be run with in debug mode by adding the `--debug` flag, e.g.

```shell showLineNumbers
./setup.sh \
    --set global.domain=${DOMAIN} \
    --no-observability \
    --accept-sla \
    --debug
```

#### Show the installation information again

In case access credentials to the **Enterprise Console** or one of the bundled services is needed, the information shown
at the end of the installation process can be printed again whenever needed:

```shell
./setup.sh --accept-sla --installation-info
```

#### Services are unable to start, because one of the volumes is full

If one of the Stateful Sets using persistent volumes (`nats`, `minio`, `postgresql`) is unable to run correctly, it might mean
the volume is full and needs to be resized.

Using `minio` as an example, follow the steps to resize the `data-minio-0` persistent volume claim:

1. Allow volume resizing for the default storage class:

   ```shell
   kubectl patch sc gp2 -p '{"allowVolumeExpansion": true}' 
   ```

1. Resize the `minio` volume:

   ```shell
   kubectl patch pvc data-minio-0 -n arcloud -p '{"spec":{"resources":{"requests":{"storage":"100Gi"}}}}'
   ```

1. Track the progress of the resize operation (it will not succeed if there are no nodes available in the cluster):

   ```shell
   kubectl get events -n arcloud --field-selector involvedObject.name=data-minio-0 -w
   ```

1. Verify that the new size is visible:

   ```shell
   kubectl get pvc -n arcloud data-minio-0
   ```

1. Make sure the pod is running:

   ```shell
   kubectl get pod -n arcloud minio-0
   ```

1. Check the disk usage of the volume on a running pod:

   ```shell
   kubectl exec -n arcloud minio-0 -c minio -- df -h /data
   ```

#### Unable to complete the installation of the cluster services

Reinitialize the database in case of earlier errors installing `postgresql`.

This might happen when the database deployment was reinstalled, but the database itself has not been updated. Usually
this can be detected by the installation failing when installing `keycloak`. It is caused by the passwords in the secrets
not matching the ones for the users in the database.

:::warning Data Loss
This will remove all the data in the database!

In case the problem occurred during the initial installation, it is okay to proceed.
Otherwise, please contact Magic Leap support to make sure none of your data is lost.
:::

1. Uninstall `postgresql`:

   ```shell
    helm uninstall -n arcloud postgresql
    ```

1. Delete the persistent volume for the database:

   ```shell
   kubectl delete pvc -n arcloud data-postgresql-0
   ```

1. Run the installation again using the process described [above](#install-arcloud).

#### Problems accessing the Enterprise Console

Some content might have been cached in your web browser.

Open the developer console and disable cache (that way everything gets refreshed):

- Chrome (Disable cache):
    - https://www.webinstinct.com/faq/how-to-disable-browser-cache
    - https://developer.chrome.com/docs/devtools/settings/preferences/#network
- Firefox (Disable HTTP Cache): https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html

Alternatively, use a guest/separate user profile:

- Chrome: https://support.google.com/chrome/answer/6130773
- Firefox: https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles

## Support

In case you need help, please:

- [check this customer care article](https://www.magicleap.care/hc/en-us/articles/9312806819597-AR-Cloud)
- [file a bug or share feedback](https://ml2-developer.magicleap.com/support)
- [visit our developer forum](https://forum.magicleap.cloud/)
- [contact us](https://www.magicleap.care/hc/en-us/requests/new)



[helm]: https://helm.sh/
[istio]: https://istio.io/latest/
[cert-manager]: https://cert-manager.io/
[bash-wiki]: https://flokoe.github.io/bash-hackers-wiki/
[postgresql]: https://www.postgresql.org/
[minio]: https://min.io/
[nats]: https://nats.io/
[k8s]: https://kubernetes.io/
[k8s-secrets]: https://kubernetes.io/docs/concepts/configuration/secret/
[k8s-sa]: https://kubernetes.io/docs/concepts/security/service-accounts/
[aws-eks]: https://aws.amazon.com/eks/
[aws-eks-update]: https://docs.aws.amazon.com/eks/latest/userguide/update-cluster.html
[aws-ec2]: https://aws.amazon.com/ec2/
[aws-ec2-eip]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html
[aws-ebs-encryption]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html
[aws-ebs-backup]: https://aws.amazon.com/getting-started/hands-on/amazon-ebs-backup-and-restore-using-aws-backup/
[aws-elb]: https://aws.amazon.com/elasticloadbalancing/
[aws-vpc-nat-gw]: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html
[aws-vpc-internet-gw]: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html
[aws-rds]: https://aws.amazon.com/rds/
[aws-rds-encryption]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html
[aws-rds-backup]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html
[aws-s3]: https://aws.amazon.com/s3/
[aws-s3-encryption]: https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html
[aws-s3-backup]: https://docs.aws.amazon.com/aws-backup/latest/devguide/s3-backups.html
[aws-cloud-formation]: https://aws.amazon.com/cloudformation/
[aws-ebs-csi]: https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html
[aws-lb-controller]: https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html
[aws-vpc-cni]: https://docs.aws.amazon.com/eks/latest/userguide/managing-vpc-cni.html
[aws-iam-bp]: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
[eksctl-iam-min]: https://eksctl.io/usage/minimum-iam-policies/
[eksctl-private-networking]: https://eksctl.io/usage/vpc-subnet-settings/#use-private-subnets-for-initial-nodegroup
[aws-quotas]: https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html
