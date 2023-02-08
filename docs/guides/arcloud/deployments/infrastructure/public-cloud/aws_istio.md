---
id: arcloud-deployment-aws-istio
title: "AWS: Istio"
sidebar_position: 3
date: 02/07/2023
tags: [ARCLoud, Cloud, Kubernetes, Istio, AWS]
keywords: [ARCLoud, Cloud, Kubernetes, Istio, AWS]
---
*NOTE: AWS only !*

## Configuration
1. Check the ELB address for the just created service and export it for later use:
```sh
export AWS_ELB_DOMAIN=$(kubectl -n istio-system get svc istio-ingressgateway --template '{{(index .status.loadBalancer.ingress 0).hostname}}')
echo $AWS_ELB_DOMAIN
```
2. Modify your DNS zone by adding a CNAME entry for your domain pointing to the ELB address displayed in the previous step.
3. Update the load balancer attributes to increase the idle timeout:
```sh
aws elb modify-load-balancer-attributes \
    --load-balancer-name ${AWS_ELB_DOMAIN%%-*} \
    --region $AWS_REGION \
    --load-balancer-attributes ConnectionSettings={IdleTimeout=360}
```

*NOTE: Istio Minimum Requirements:*
- AR Cloud requires Istio **version 1.16.x**.
- DNS Pre-configured with corresponding certificate for TLS
- Configure Istio Gateway
- Open the MQTT Port (8883)