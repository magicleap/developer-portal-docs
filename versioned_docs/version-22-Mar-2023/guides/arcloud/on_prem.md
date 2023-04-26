---
id: arcloud-deployment-on-prem
title: AR Cloud Custom Deployment
sidebar_label: Custom Deployment
sidebar_position: 3
date: 02/07/2023
tags: [ARCloud, Cloud, Kubernetes, Istio, Helm]
keywords: [ARCloud, Cloud, Kubernetes, Istio, Helm]
description: "Demo server or a developer's desktop/laptop"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import DownloadArcloud from './_download_arcloud.md';
import ArcloudEnvVariables from './_arcloud_env.md';
import FindIPAddress from './_find_ip.md';
import InstallIstio from './_install_istio.md';
import InstallIstioGateway from './_install_istio_gateway.md';
import InstallArcloud from './_install_arcloud.md';
import InstallArcloudSetup from './_install_arcloud_setup.md';
import DeploymentVerification from './_deployment_verification.md';
import DebianDependencies from './_debian_dependencies.md';
import RegisterDevice from './_register_device.md';

This type of deployment is appropriate for any edge computing, on-premises, or any other deployment strategy that does not involve [Google Cloud](/versioned_docs/version-22-Mar-2023/guides/arcloud/arcloud-deployment-gcp) or [AWS](/versioned_docs/version-22-Mar-2023/guides/arcloud/arcloud-deployment-aws).

## Infrastructure Setup

### Install Basic Dependencies

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

<DebianDependencies />

  </TabItem>
  <TabItem value="windows" label="Windows">

#### Install the Windows Subsystem for Linux

:::caution WSL 2 Notice
All following installation instructions are assumed to be running inside an activated Windows Subsystem for Linux 2 environment (Debian or Ubuntu). See the following information about installing WSL 2:

[Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install).
:::

```shell
wsl --install
```

Launch the shell of the default WSL distribution:

```shell
wsl
```

#### Configure WSL

Download the [custom kernel for WSL](https://github.com/psemuu/WSL2-Linux-Kernel/releases/download/5.15.90.1%2Bistio/wsl2-kernel-with-istio-dns-support) and save it on disk `C:\`.

Create or edit the global WSL configuration file for your current user:

- using Command Prompt:

  ```shell
  notepad %UserProfile%/.wslconfig
  ```

- using PowerShell:

  ```shell
  notepad $env:USERPROFILE/.wslconfig
  ```

Use the following configuration for WSL (adjust the kernel path if needed):

```ini
[wsl2]
memory=16GB
processors=5
kernel=C:\\wsl2-kernel-with-istio-dns-support
localhostForwarding=false
```

Restart WSL for the changes to take effect:

```shell
wsl --shutdown
wsl
```

Verify that the new kernel is used:

```shell
uname -r
```

:::info Expected Result
The output should be **5.15.90.1-k8s-optimized-WSL2+**.
:::

#### Install required packages inside the WSL distribution

<DebianDependencies />

  </TabItem>
  <TabItem value="macos" label="MacOS">

Install [`brew` (Homebrew)](https://brew.sh/), if needed.

  </TabItem>
</Tabs>

### Install Docker

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

```shell
curl https://releases.rancher.com/install-docker/20.10.sh | sh
```

:::info Docker
Post-installation step:

[Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/).
:::

  </TabItem>
  <TabItem value="windows" label="Windows">

Install [Docker Desktop with the WSL 2 backend](https://docs.docker.com/desktop/install/windows-install/).

:::info WSL distributions
Integration with Docker for non-default WSL distributions needs to be explicitly enabled in the Docker Desktop settings:

[Enabling Docker support in WSL 2 distros](https://docs.docker.com/desktop/windows/wsl/#enabling-docker-support-in-wsl-2-distros).
:::

  </TabItem>
  <TabItem value="macos" label="MacOS">

Install [Docker Desktop for MacOS](https://docs.docker.com/desktop/install/mac-install/).

  </TabItem>
</Tabs>

### Download AR Cloud

<DownloadArcloud />

### Configure Environment

<ArcloudEnvVariables />

### Prepare Your IP Address

<FindIPAddress />

Set the IP address where AR Cloud will be available:

```shell
export DOMAIN="<IPv4 address of your active network adapter>"
```

### Install Kubernetes

:::note Kubernetes
Recommended Resources:

- 8 CPUs
- 32 GB memory
:::

:::caution
If your computer is connected to more than one network interface (example: WiFi *and* Ethernet), select which network IP you want to receive the Kubernetes-related traffic.
:::

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

Remove previous **Rancher K3s** **Kubernetes** installation (skip if you do not have **K3s** installed):

```shell
/usr/local/bin/k3s-uninstall.sh
```

Set the version of **K3s** to be installed:

```shell
export INSTALL_K3S_VERSION=v1.23.9+k3s1
```

Run setup script:

```shell showLineNumbers
curl -sfL https://get.k3s.io | sh -s - \
    --docker \
    --no-deploy traefik \
    --write-kubeconfig-mode 600 \
    --node-external-ip ${DOMAIN}
```

Configure **K3s** service:

```shell showLineNumbers
sudo rm -rf $HOME/.kube/config && mkdir -p $HOME/.kube
sudo ln -s /etc/rancher/k3s/k3s.yaml $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
sudo chmod 600 $HOME/.kube/config
```

Verify that the **K3s** service is running:

```shell
systemctl status k3s
```

  </TabItem>
  <TabItem value="windows" label="Windows">

Enable [Kubernetes on Docker Desktop](https://docs.docker.com/desktop/kubernetes/).

![Enable Kubernetes Support in Docker Desktop](/img/arcloud/windows-docker-kubernetes.png)

:::note
On future runs of AR Cloud setup processes, it will be important to make sure that Docker and the Kubernetes services are started.
:::

  </TabItem>
  <TabItem value="macos" label="MacOS">

Enable [Kubernetes on Docker Desktop](https://docs.docker.com/desktop/kubernetes/).

![Enable Kubernetes Support in Docker Desktop](/img/arcloud/macos-docker-kubernetes.png)

:::note Resources
Set `Memory` resources to at least 12 GB RAM from:

`Docker Desktop` > `Settings` > `Resources` > `Advanced`

![Configure Resources in Docker Desktop](/img/arcloud/macos-docker-resources.png)
:::

:::note
On future runs of AR Cloud setup processes, it will be important to make sure that Docker and the Kubernetes services are started.
:::

  </TabItem>
</Tabs>

### Install Helm

:::note Helm
The minimum version requirement is `3.9.x`.
:::

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

Install Helm using `apt`:

```shell showLineNumbers
curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
sudo apt-get install apt-transport-https --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
```

  </TabItem>
  <TabItem value="windows" label="Windows">

Install Helm using `apt`:

```shell showLineNumbers
curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
sudo apt-get install apt-transport-https --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
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

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Debian/Ubuntu" default>

<InstallIstio />

  </TabItem>
  <TabItem value="windows" label="Windows">

Update the Istio configuration for it to work with WSL:

```shell
sed -ri '/values:/{n;s/(^\s+)(gateways:)/\1proxy:\n\1  privileged: true\n\1\2/}' ./setup/istio.yaml
```

Install Istio:

<InstallIstio />

  </TabItem>
  <TabItem value="macos" label="MacOS">

<InstallIstio />

  </TabItem>
</Tabs>

### Install Istio Gateway

<InstallIstioGateway />

## Install ARCloud

<InstallArcloud />

<InstallArcloudSetup />

## Verify Installation

<DeploymentVerification />

<RegisterDevice />

