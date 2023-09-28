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

This deployment strategy will provide a production-ready system using Amazon Web Services.

<LinuxNotice />

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

- [Amazon EBS CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html):
  - [Creating the Amazon EBS CSI driver IAM role for service accounts](https://docs.aws.amazon.com/eks/latest/userguide/csi-iam-role.html)
  - [Managing the Amazon EBS CSI driver as an Amazon EKS add-on](https://docs.aws.amazon.com/eks/latest/userguide/managing-ebs-csi.html)
- [Installing the AWS Load Balancer Controller add-on](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html)
- [Managing the Amazon VPC CNI plugin for Kubernetes add-on](https://docs.aws.amazon.com/eks/latest/userguide/managing-vpc-cni.html)

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

