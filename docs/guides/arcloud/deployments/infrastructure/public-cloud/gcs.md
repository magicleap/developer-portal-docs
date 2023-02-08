---
id: arcloud-deployment-gcs
title: Google Cloud
sidebar_position: 1
date: 02/07/2023
tags: [ARCLoud, Cloud, Kubernetes, Istio, Helm, GCS, Google]
keywords: [ARCLoud, Cloud, Kubernetes, Istio, Helm, GCS, Google]
---

# Google Cloud Setup
To get started as quickly as possible, refer to these simple setup steps using [google cloud](https://cloud.google.com/sdk/docs/install).
#### Kubernetes Recommended Requirements
- Version **1.23.x, 1.24.x, 1.25.x**
- 8 Nodes (each with):
  - 8 CPU's
  - 32 GB memory

Example [machine types in GCP](https://cloud.google.com/compute/docs/general-purpose-machines):
- 8 * e2-medium
- 4 * e2-standard-2
- 2 * e2-standard-4

## Environment Settings
In your terminal configure the following variables per your environment.
```shell
export DOMAIN="arcloud.domain.tld"
```

```shell
export GC_PROJECT_ID="your-project"
export GC_REGION="your-region"
export GC_ZONE="your-region-zone"
export GC_DNS_ZONE="your-dns-zone"
export GC_ADDRESS_NAME="your-cluster-ip"
export GC_CLUSTER_NAME="your-cluster-name"
```

## Reserve a static IP
```shell
gcloud compute addresses create "${GC_ADDRESS_NAME}" --project="${GC_PROJECT_ID}" --region="${GC_REGION}"
```

## Retrieved the reserved static IP Address
```shell
export IP_ADDRESS=$(gcloud compute addresses describe "${GC_ADDRESS_NAME}" --project="${GC_PROJECT_ID}" --region="${GC_REGION}" --format='get(address)')
echo ${IP_ADDRESS}
```

## Assign the static IP to a DNS Record
```shell
gcloud dns --project="${GC_PROJECT_ID}" record-sets create "${DOMAIN}" --type="A" --zone="${GC_DNS_ZONE}" --rrdatas="${IP_ADDRESS}" --ttl="30"
```

## Create a Cluster

_NOTE: Be sure to create a VPC prior to running this command and supply it as the subnetwork. Refer to google cloud documentation for best practices [VPC](https://cloud.google.com/vpc/docs/vpc), [Subnets](https://cloud.google.com/vpc/docs/subnets)
and [Regions / Zones](https://cloud.google.com/compute/docs/regions-zones)_

```shell
gcloud container clusters create "${GC_CLUSTER_NAME}" \
    --project="${GC_PROJECT_ID}" \
    --zone "${GC_ZONE}" \
    --release-channel "regular" \
    --machine-type "e2-standard-4" \
    --num-nodes "3" \
    --enable-shielded-nodes
```

## Login kubectl into the remote Cluster
```shell
gcloud container clusters get-credentials ${GC_CLUSTER_NAME} --zone=${GC_ZONE} --project=${GC_PROJECT_ID}
```

## Confirm kubectl is directed at the correct context
```shell
kubectl config current-context
```

*NOTE: Expected response: `gke_{your-project}-{your-region}-{your-cluster}`*
