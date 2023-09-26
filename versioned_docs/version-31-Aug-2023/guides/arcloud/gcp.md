---
id: arcloud-deployment-gcp
title: AR Cloud Google Cloud Deployment
sidebar_label: Google Cloud
sidebar_position: 1
date: 02/07/2023
tags: [ARCloud, Cloud, Kubernetes, Istio, Helm, GCP, Google]
keywords: [ARCloud, Cloud, Kubernetes, Istio, Helm, GCP, Google]
description: "Enterprise deployment to Google Cloud Platform (GCP)"
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

This deployment strategy will provide a production-ready system using Google Cloud.

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

### Google Cloud CLI

To get started as quickly as possible, refer to these simple setup steps for [Google Cloud CLI](https://cloud.google.com/sdk/docs/install).

<CliVersions />

### Tools

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

#### Helm

<HelmRequirements />

<InstallHelm />

#### Kubectl

```shell
gcloud components install gke-gcloud-auth-plugin kubectl
```

  </TabItem>
  <TabItem value="windows" label="Windows">

#### Helm

<HelmRequirements />

<InstallHelm />

#### Kubectl

```shell
gcloud components install gke-gcloud-auth-plugin kubectl
```

  </TabItem>
  <TabItem value="macos" label="MacOS">

#### Helm

<HelmRequirements />

<InstallHelmMacOS />

#### Kubectl

```shell
gcloud components install gke-gcloud-auth-plugin kubectl
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

Example [machine types in GCP](https://cloud.google.com/compute/docs/general-purpose-machines):

- 8 * **e2-standard-8**
- 8 * **n2-standard-8**
- 8 * **n2d-standard-8**

### Environment Settings

In your terminal configure the following variables per your environment:

```shell showLineNumbers
export GC_PROJECT_ID="your-project"
export GC_REGION="your-region"
export GC_ZONE="your-region-zone"
export GC_DNS_ZONE="your-dns-zone"
export GC_ADDRESS_NAME="your-cluster-ip"
export GC_CLUSTER_NAME="your-cluster-name"
```

:::note
These variables are already included in the [env file](#configure-environment) described above.
:::

### Reserve a Static IP

```shell
gcloud compute addresses create "${GC_ADDRESS_NAME}" --project="${GC_PROJECT_ID}" --region="${GC_REGION}"
```

### Retrieved the Reserved Static IP Address

```shell showLineNumbers
export IP_ADDRESS=$(gcloud compute addresses describe "${GC_ADDRESS_NAME}" --project="${GC_PROJECT_ID}" --region="${GC_REGION}" --format='get(address)')
echo ${IP_ADDRESS}
```

### Assign the Static IP to a DNS Record

```shell
gcloud dns --project="${GC_PROJECT_ID}" record-sets create "${DOMAIN}" --type="A" --zone="${GC_DNS_ZONE}" --rrdatas="${IP_ADDRESS}" --ttl="30"
```

### Create a Cluster

:::note
Be sure to create a VPC prior to running the following command and supply it as the subnetwork. Refer to Google Cloud documentation for best practices:

[VPC](https://cloud.google.com/vpc/docs/vpc), [Subnets](https://cloud.google.com/vpc/docs/subnets), and [Regions / Zones](https://cloud.google.com/compute/docs/regions-zones)
:::

```shell showLineNumbers
gcloud container clusters create "${GC_CLUSTER_NAME}" \
    --project="${GC_PROJECT_ID}" \
    --zone "${GC_ZONE}" \
    --release-channel "regular" \
    --machine-type "e2-standard-4" \
    --num-nodes "3" \
    --enable-shielded-nodes
```

### Log in to `kubectl` in the Remote Cluster

```shell
gcloud container clusters get-credentials ${GC_CLUSTER_NAME} --zone=${GC_ZONE} --project=${GC_PROJECT_ID}
```

### Confirm `kubectl` is Directed at the Correct Context

```shell
kubectl config current-context
```

:::info Expected response
`gke_{your-project}-{your-region}-{your-cluster}`
:::

## Install Istio

<IstioRequirements />

<InstallIstio />

### Install Istio Gateway

<InstallIstioGateway />

## Install ARCloud

<InstallArcloud />

<InstallArcloudSetupSecure />

## Verify Installation

<DeploymentVerificationSecure />

<RegisterDevice />

