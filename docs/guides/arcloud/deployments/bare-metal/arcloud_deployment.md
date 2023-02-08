---
id: arcloud-deployment-bare-metal
title: Install ARCloud
sidebar_position: 2
date: 02/07/2023
tags: [ARCLoud, Cloud, Mesh, Meshing, Map, Mapping]
keywords: [ARCLoud, Cloud, Mesh, Meshing, Map, Mapping]
---

# Install ARCloud
## Configure environment
```shell
export NAMESPACE="arcloud"
export DOMAIN=${ROUTER_LEASED_IP}

export REGISTRY_SERVER="quay.io"
export REGISTRY_USERNAME="<username>"
export REGISTRY_PASSWORD="<password>"
```

## Download ARCloud public release
```shell
wget -c https://github.com/magicleap/arcloud/archive/refs/tags/1.7.86.tar.gz -O - | tar -xz

```

```shell
cd arcloud-1.7.86
```

## Install Istio
```shell
curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.16.0 sh -
```
```shell
cd istio-1.16.0
```
```shell
./bin/istioctl install -y -f ../setup/istio.yaml
```

Install Istio gateway
```shell
kubectl -n istio-system apply -f ../setup/gateway.yaml
```
```shell
cd ../
```

## Install certificate manager
```shell
CERT_MANAGER_VERSION=1.9.1
```
```shell
helm upgrade --install --wait --repo https://charts.jetstack.io cert-manager cert-manager \
  --version ${CERT_MANAGER_VERSION} \
  --create-namespace \
  --namespace cert-manager \
  --set installCRDs=true
```
```shell
kubectl -n istio-system apply -f ./setup/issuer.yaml
```
```shell
cat ./setup/certificate.yaml | envsubst | kubectl -n istio-system apply -f -
```

## Create K8s namespace
```shell
kubectl create namespace ${NAMESPACE}
```
```shell
kubectl label namespace ${NAMESPACE} istio-injection=enabled
```

## Create container registry secret
```shell
kubectl --namespace ${NAMESPACE} delete secret container-registry --ignore-not-found
```
```shell
kubectl --namespace ${NAMESPACE} create secret docker-registry container-registry \
  --docker-server=${REGISTRY_SERVER} \
  --docker-username=${REGISTRY_USERNAME} \
  --docker-password=${REGISTRY_PASSWORD}
```

Login to container registry
```shell
docker login ${REGISTRY_SERVER} --username "${REGISTRY_USERNAME}" --password "${REGISTRY_PASSWORD}"
```

## Setup ARCloud
```shell
./setup.sh \
  --set global.domain=${DOMAIN} \
  --no-secure \
  --no-observability \
  --accept-sla
```
