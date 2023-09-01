---
id: arcloud-integrations-overview
title: AR Cloud Integrations
sidebar_label: Integrations
sidebar_position: 7
date: 01/09/2023
tags: [ARCloud, Cloud, Keycloak, OpenTelemetry, Grafana]
keywords: [ARCloud, Cloud, Keycloak, OpenTelemetry, Grafana]
description: "Integrate additional solutions with your AR Cloud installation"
---
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

## Overview

[Keycloak](https://www.keycloak.org/) is provided by default to manage users and access to APIs.
Users can be managed directly in Keycloak or it can be used to federate an existing identity solution.

AR Cloud logs telemetry information and service logs using [OpenTelemetry](https://opentelemetry.io/).
The default installation installs [Grafana](https://grafana.com/) and [Prometheus](https://prometheus.io/),
but these can be substituted with other OTEL compliant solutions.

The **Health Check Endpoints** can be used to monitor the health of the system.  These primarily focus on 
connectivity to the underlying resources such as database access and file storage.

## Resources

<DocCardList items={useCurrentSidebarCategory().items}/>
