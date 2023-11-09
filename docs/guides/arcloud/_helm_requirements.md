:::note Helm
The minimum version requirement is `3.9.x`.
:::

:::caution Helm 3.13.0
The `3.13.0` version of Helm introduced a [bug in the way values are merged](https://github.com/helm/helm/issues/12460).
The deployment will not work with this version, so please use version `3.13.1` or newer where the issue is fixed.
:::
