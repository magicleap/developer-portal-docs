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
import DownloadArcloud from './_download_arcloud.md';
import ArcloudEnvVariables from './_arcloud_env.md';
import IstioRequirements from './_istio_requirements.md';
import InstallIstio from './_install_istio.md';
import InstallIstioGateway from './_install_istio_gateway.md';
import InstallArcloud from './_install_arcloud.md';
import InstallArcloudSetupSecure from './_install_arcloud_setup_secure.md';
import DeploymentVerificationSecure from './_deployment_verification_secure.md';
import RegisterDevice from './_register_device.md';

This deployment strategy will provide a production-ready system using Google Cloud.

## Download

<DownloadArcloud />

### Configure Environment

<ArcloudEnvVariables />

Set the domain where AR Cloud will be available:

```shell
export DOMAIN="arcloud.domain.tld"
```

### Tools

To get started as quickly as possible, refer to these simple setup steps for [Google Cloud CLI](https://cloud.google.com/sdk/docs/install).

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

:::notenote
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
