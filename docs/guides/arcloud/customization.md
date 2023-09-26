---
id: arcloud-customization
title: AR Cloud Customization and Security
sidebar_label: Customization and Security
sidebar_position: 6
date: 02/07/2023
tags: [ARCloud, Cloud, Kubernetes, Secure, PostgreSQL]
keywords: [ARCloud, Cloud, Kubernetes, Secure, PostgreSQL]
description: "Customize and secure your AR Cloud installation"
---

## Secure Deployment Best Practices

Magic Leap recommends reviewing the installed infrastructure to align with security best practices listed below.

- Configure Kubernetes secrets to use a secret manager such as Vault together with an
[external secret operator](https://github.com/external-secrets/external-secrets).
- Follow security best practices when deploying each of the preexisting components
  - Best practices for [Securing a Kubernetes Cluster](https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/)
  - [Kubernetes Security Checklist](https://kubernetes.io/docs/concepts/security/security-checklist/)
  - [Kubernetes Hardening Guide](https://www.cisa.gov/uscert/ncas/current-activity/2022/03/15/updated-kubernetes-hardening-guide)
  - Deployment guide for [OPA](https://www.openpolicyagent.org/docs/latest/deployments/)
  - Deployment best practices for [Istio](https://istio.io/latest/docs/ops/best-practices/deployment/)
  - Security guidelines for [PostgreSQL](https://www.postgresql.org/docs/7.0/security.htm):
    - [Client Authentication](https://www.postgresql.org/docs/current/client-authentication.html)
    - [Database Roles](https://www.postgresql.org/docs/current/user-manag.html)
    - [Privileges](https://www.postgresql.org/docs/current/ddl-priv.html)
    - [GCP Cloud SQL best practices](https://cloud.google.com/sql/docs/postgres/best-practices)
    - [AWS RDS best practices](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_BestPractices.Security.html)
  - IAM:
    - [GCP Use IAM securely](https://cloud.google.com/iam/docs/using-iam-securely)
        - [Use Workload identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity)
        - [Use Cloud SQL IAM database authentication](https://cloud.google.com/sql/docs/postgres/authentication)
    - [AWS Security best practices in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

### What To Avoid?

- Avoid permissive IAM policies in your environment
- Avoid hosting AR Cloud on public IPs
- Avoid public IPs for nodes
- Avoid using a domain without a TLS certificate (one can be automatically issued using cert-manager)
- Avoid allowing all traffic to the cluster on the firewall or disabling the firewall completely

### General Pointers

- Deploy the system on its own namespace
- Isolate the deployment’s namespace from other deployed assets on the network level
- Limit access to relevant container registries only
- Make sure to run nodes running Apparmor with Container OS for the host nodes (or other minimal OS)
- Keep all components up-to-date

## Advanced Setup

The instruction on other pages are meant to get AR Cloud running quickly and in its simplest manor.
However, AR Cloud is built to be flexible and can support many configurations.
For example, external object storage solutions can be used instead of MinIO or managed PostgreSQL
instances with high availability and integrated backups.

### Managed Database

The following steps outline the steps for connecting AR Cloud to the managed database instance.

:::note
These steps only apply to a new installation of AR Cloud.
:::

#### PostgreSQL Minimum Requirements

- PostgreSQL Version: `14+`
- PostGIS Version: `3.3+`

:::note
The PostGIS extension must be enabled on the `arcloud` database.
:::

#### Database Configuration

- Review and configure all settings within the `./scripts/setup-database.sh` script.
- Execute the `./scripts/setup-database.sh` script against the managed database instance.
- Create Kubernetes database secrets for each application within your AR Cloud namespace.
  Secret names are referenced for each AR Cloud application, see the `values.yaml` file `postgresql.existingSecret` keys.

#### AR Cloud Setup

When running the `./setup.sh` script, you will need to supply the following additional settings in order to disable the
default installation of postgresql, and point application connections to the managed database.

```sh
./setup.sh ... --set postgresql.enabled=false,global.postgresql.host=${POSTGRESQL_HOST},global.postgresql.port=${POSTGRESQL_PORT}
```
