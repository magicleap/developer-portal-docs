---
id: arcloud-deployment-azure
title: AR Cloud Azure Deployment
sidebar_label: Azure
sidebar_position: 3
date: 02/07/2023
tags: [ARCloud, Cloud, Kubernetes, Istio, Helm, Azure]
keywords: [ARCloud, Cloud, Kubernetes, Istio, Helm, Azure]
description: "Enterprise deployment to Azure"
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
import InstallArcloud from './_install_arcloud.md';
import InstallArcloudSetupSecure from './_install_arcloud_setup_secure.md';
import DeploymentVerificationSecure from './_deployment_verification_secure.md';
import DebianDependencies from './_debian_dependencies.md';
import MacOSDependencies from './_macos_dependencies.md';
import WindowsDependencies from './_windows_dependencies.md';
import RegisterDevice from './_register_device.md';

This deployment strategy will provide a production-ready system using Azure.

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

### Azure CLI

To get started as quickly as possible, refer to these simple setup steps for [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli).

<CliVersions />

### Tools

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

#### Helm

<HelmRequirements />

<InstallHelm />

#### Kubectl

[Install and Set Up kubectl on Linux](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
```shell
az aks install-cli
```

  </TabItem>
  <TabItem value="windows" label="Windows">

#### Helm

<HelmRequirements />

<InstallHelm />

#### Kubectl

[Install and Set Up kubectl on Windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)
```shell
az aks install-cli
```

  </TabItem>
  <TabItem value="macos" label="MacOS">

#### Helm

<HelmRequirements />

<InstallHelmMacOS />

#### Kubectl

[Install and Set Up kubectl on macOS](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/)
```shell
az aks install-cli
```

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

Example [virtual machine sizes in Azure](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes):

- 8 * **Standard_B8ms**
- 8 * **Standard_D8_v5**
- 8 * **Standard_D8as_v5**

### Environment Settings

In your terminal configure the following variables per your environment:

```shell
export AZURE_SUBSCRIPTION_ID="your-subscription-id"
export AZURE_RESOURCE_GROUP_NAME="your-resource-group-name"
export AZURE_LOCATION="your-location"
export AZURE_CLUSTER_NAME="your-cluster-name"
```

<!--:::note
These variables are already included in the [env file](#configure-environment) described above.
:::-->

### Create a Resource Group

```shell
az group create --name "$AZURE_RESOURCE_GROUP_NAME" --location "$AZURE_LOCATION"
```

### Create a Cluster

```shell showLineNumbers
az aks create --name "$AZURE_CLUSTER_NAME" \
    --resource-group "$AZURE_RESOURCE_GROUP_NAME" \
    --location "$AZURE_LOCATION" \
    --kubernetes-version 1.25.6 \
    --auto-upgrade-channel patch \
    --node-vm-size Standard_B8ms \
    --enable-cluster-autoscaler --min-count 2 --max-count 8 \
    --network-plugin kubenet \
    --enable-addons monitoring
```

:::note Quotas
Make sure that the vCPU quota limit for the selected region and VM series allows you to provision the cluster.
The quotas for a region can be verified using the CLI:

```shell
az vm list-usage --location eastus -o table
```
:::

### Configure `kubectl` to Use the Created Cluster

```shell
az aks get-credentials --resource-group "$AZURE_RESOURCE_GROUP_NAME" --name "$AZURE_CLUSTER_NAME"
```

### Confirm `kubectl` is Directed at the Correct Context

```shell
kubectl config current-context
```

## Install Istio

<IstioRequirements />

<InstallIstio />

### Install Istio Gateway

<InstallIstioGateway />

### Configure Domain

Check the load balancer IP address for the just created service and export it for later use:

```shell showLineNumbers
export AZURE_LB_IP=$(kubectl -n istio-system get svc istio-ingressgateway --template '{{(index .status.loadBalancer.ingress 0).ip}}')
echo $AZURE_LB_IP
```

Modify your DNS zone by adding an A entry for your domain pointing to the IP address displayed in the previous step.

## Install ARCloud

<InstallArcloud />

<InstallArcloudSetupSecure />

## Verify Installation

<DeploymentVerificationSecure />

<RegisterDevice />

## Stopping and Starting the Cluster

In case the cluster is not needed, it can be stopped and later started again. This allows to decrease the costs of the
infrastructure by only having the cluster running when it is actually going to be used.

Stop the cluster:

```shell
az aks stop --name "$AZURE_CLUSTER_NAME" --resource-group "$AZURE_RESOURCE_GROUP_NAME"
```

Start the cluster again:

```shell
az aks start --name "$AZURE_CLUSTER_NAME" --resource-group "$AZURE_RESOURCE_GROUP_NAME"
```

