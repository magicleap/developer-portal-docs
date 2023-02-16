---
id: arcloud-deployment-on-prem
title: AR Cloud "Desktop" Deployment
sidebar_label: Desktop
sidebar_position: 3
date: 02/07/2023
tags: [ARCloud, Cloud, Kubernetes, Istio, Helm]
keywords: [ARCloud, Cloud, Kubernetes, Istio, Helm]
description: "Demo server or a developer's desktop/laptop"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import DownloadArcloud from './_download_arcloud.md'
import InstallIstio from './_install_istio.md'
import InstallArcloud from './_install_arcloud.md'
import DeploymentVerification from './_deployment_verification.md'

## Prerequisites

## Infrastructure setup

### Install Docker

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

```shell
curl https://releases.rancher.com/install-docker/20.10.sh | sh
```

:::note Docker
Post installation step: [manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/).
:::

  </TabItem>
  <TabItem value="windows" label="Windows">

Installation steps for Docker Desktop for [Windows 10 (and up) with WSL2](https://docs.docker.com/desktop/install/windows-install/)

  </TabItem>
  <TabItem value="macos" label="MacOS">

Installation steps for Docker Desktop for [MacOS](https://docs.docker.com/desktop/install/mac-install/)

### Additional Tools

- Install `brew` (Homebrew), if needed: https://brew.sh/
- Install `wget`:

```shell
brew install wget
```

After installing Docker Desktop for MacOS, ensure you enable Kubernetes Support:

![Enable Kubernetes Support in Docker Desktop](/img/arcloud/macos-docker-kubernetes.png)

:::note
On future runs of AR Cloud setup processes, it will be important to make sure that Docker and the Kubernetes services are started.
:::

  </TabItem>
</Tabs>

<DownloadArcloud />

```shell
export DOMAIN="<your network adapter IP(IPv4)>"
```

:::note Kubernetes
Recommended Requirements:

- 8 CPUs
- 32 GB memory
:::

:::caution
If your computer is connected to more than one network interfaces (example: *WiFi and Ethernet*), select which network IP you want to receive the Kubernetes related traffic.
:::

Export your **network IP** (IPv4) to an environment variable

```shell
export ROUTER_LEASED_IP=<your network adapter IP>
```

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

#### Installing K3s - Kubernetes Distribution by Rancher

Removing previous Rancher K3s Kubernetes installation (skip if you do not have K3s installed):

```shell
/usr/local/bin/k3s-uninstall.sh
```

Set the required environment variables:

```shell
export INSTALL_K3S_VERSION=v1.23.9+k3s1
```

Run setup script:

```shell
curl -sfL https://get.k3s.io | sh -s - \
--docker \
--no-deploy traefik \
--write-kubeconfig-mode 600 \
--node-external-ip ${ROUTER_LEASED_IP}
```

Configure K3s service

```shell
sudo rm -rf $HOME/.kube/config && mkdir -p $HOME/.kube
sudo ln -s /etc/rancher/k3s/k3s.yaml $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
sudo chmod 600 $HOME/.kube/config
```

Verify that K3s service is running:

```shell
systemctl status k3s
```

  </TabItem>
  <TabItem value="windows" label="Windows">

Enabling Kubernetes on [Docker Desktop](https://docs.docker.com/desktop/kubernetes/)

  </TabItem>
  <TabItem value="macos" label="MacOS">

Enabling Kubernetes on [Docker Desktop](https://docs.docker.com/desktop/kubernetes/)

  </TabItem>
</Tabs>

### Install Helm

:::note Helm
Minimum version requirements 3.9.x
:::

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

Install Helm using [Apt](https://helm.sh/docs/intro/install/#from-apt-debianubuntu):

```shell
curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
sudo apt-get install apt-transport-https --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
```

  </TabItem>
  <TabItem value="windows" label="Windows">

Install Helm using [Chocolatey](https://helm.sh/docs/intro/install/#from-chocolatey-windows):

```shell
choco install kubernetes-helm
```

  </TabItem>
  <TabItem value="macos" label="MacOS">

Install Helm with [Homebrew](https://helm.sh/docs/intro/install/#from-homebrew-macos):

```shell
brew install helm
```

  </TabItem>
</Tabs>

## Install Istio

<InstallIstio />

## Install ARCloud

<InstallArcloud />

## Verify Installation

<DeploymentVerification />
