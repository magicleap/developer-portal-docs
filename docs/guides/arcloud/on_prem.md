---
id: arcloud-deployment-on-prem
title: Desktop
sidebar_position: 3
date: 02/07/2023
tags: [ARCLoud, Cloud, Kubernetes, Istio, Helm]
keywords: [ARCLoud, Cloud, Kubernetes, Istio, Helm]
description: "Demo server or developer's desktop."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import DownloadArcloud from './_download_arcloud.md'
import InstallIstio from './_install_istio.md'
import InstallArcloud from './_install_arcloud.md'
import DeploymentVerification from './_deployment_verification.md'

## Prerequisites
<DownloadArcloud />

```shell
export DOMAIN="<your network adapter IP(IPv4)>"
```

## Infrastructure setup

### Install Docker  

<Tabs>
  <TabItem value="ubuntu" label="Ubuntu 20.04" default>

```shell
curl https://releases.rancher.com/install-docker/20.10.sh | sh
```
*Post installtion step: manage docker as a non-root user.

  </TabItem>
  <TabItem value="windows" label="Windows 10">

Installation steps for Docker Desktop for [Windows 10 (and up) with WSL2](https://docs.docker.com/desktop/install/windows-install/)

  </TabItem>
  <TabItem value="macos" label="MacOS">

Installation steps for Docker Desktop for [MacOS](https://docs.docker.com/desktop/install/mac-install/)

Additional tools:
- Install `Homebrew` if you need to: https://brew.sh/
- Install `wget`:
```shell
brew install wget
```

  </TabItem>
</Tabs>


### Install Kubernetes
*NOTE: Kubernetes Recommended Requirements:*
- 8 CPU's
- 32 GB memory

If your computer is connected to more than one network interfaces (example: *WiFi and Ethernet*) select which network IP you want to receive the Kubernetes related traffic.

Export your **network IP** (IPv4) to an environment variable
```shell
export ROUTER_LEASED_IP=<your network adapter IP>
```

<Tabs>
  <TabItem value="ubuntu" label="Ubuntu 20.04" default>

**Installing K3s - Kubernetes Distribution by Rancher**

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
  <TabItem value="windows" label="Windows 10">

Enabling Kubernetes on [Docker Desktop](https://docs.docker.com/desktop/kubernetes/)

  </TabItem>
  <TabItem value="macos" label="MacOS">

Enabling Kubernetes on [Docker Desktop](https://docs.docker.com/desktop/kubernetes/)

  </TabItem>
</Tabs>


### Install Helm
*NOTE: Helm Minimum version requirements 3.9.x*

<Tabs>
  <TabItem value="ubuntu" label="Ubuntu 20.04" default>

Installing Helm using [Apt](https://helm.sh/docs/intro/install/#from-apt-debianubuntu)

  </TabItem>
  <TabItem value="windows" label="Windows 10">

Installing Helm using [Chocolatey](https://helm.sh/docs/intro/install/#from-chocolatey-windows)

  </TabItem>
  <TabItem value="macos" label="MacOS">

Installing Helm [Homebrew](https://helm.sh/docs/intro/install/#from-homebrew-macos)

  </TabItem>
</Tabs>

## Install Istio
<InstallIstio />

## Install ARCloud
<InstallArcloud />

## Verify Installation
<DeploymentVerification />