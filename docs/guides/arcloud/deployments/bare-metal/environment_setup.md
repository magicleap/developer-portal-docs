---
id: arcloud-deployment-environment-setup
title: Environment Setup
sidebar_position: 1
date: 02/07/2023
tags: [ARCLoud, Cloud, Kubernetes, Istio, Helm]
keywords: [ARCLoud, Cloud, Kubernetes, Istio, Helm]
---

# Environment setup

## Install Docker  

**Ubuntu 20.04 steps**
```shell
curl https://releases.rancher.com/install-docker/20.10.sh | sh
```
*Post installtion step: manage docker as a non-root user.  

---
**Windows 10 (and up) with WSL2**

Please, follow the official installation steps for Docker Desktop for Windows: https://docs.docker.com/desktop/install/windows-install/

---
**MacOS**

Please, follow the official installation steps for Docker Desktop for MacOS: https://docs.docker.com/desktop/install/mac-install/

Additional tools:
- Install `Homebrew` if you need to: https://brew.sh/
- Install `wget`:
```shell
brew install wget
```

## Install Kubernetes

If your computer is connected to more than one network interfaces (example: *WiFi and Ethernet*) select which network IP you want to receive the Kubernetes related traffic.

Export your **network IP** (IPv4) to an environment variable
```shell
export ROUTER_LEASED_IP=<your network adapter IP>
```

---
**Ubuntu 20.04 (K3s Kubernetes Distribution by Rancher)**

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

---
**Windows 10 (and up) with WSL2**

Please, follow the official instructions for enabling Kubernetes on Docker Desktop: https://docs.docker.com/desktop/kubernetes/

---
**MacOS**

Please, follow the official instructions for enabling Kubernetes on Docker Desktop: https://docs.docker.com/desktop/kubernetes/

---

## Install Helm
Please, follow the official instructions for installing Helm:
- Ubuntu:
    - Apt: https://helm.sh/docs/intro/install/#from-apt-debianubuntu
    - Snap: https://helm.sh/docs/intro/install/#from-snap
- Windows: https://helm.sh/docs/intro/install/#from-chocolatey-windows
- MacOS: https://helm.sh/docs/intro/install/#from-homebrew-macos

or from a script: https://helm.sh/docs/intro/install/#from-script