:::note
If you do not have a key assigned for Quay.io, please contact Customer Care:

care@magicleap.com
:::

Configure the container registry details:

```shell showLineNumbers
export REGISTRY_SERVER="quay.io"
export REGISTRY_USERNAME="<username>"
export REGISTRY_PASSWORD="<password>"
```

Set the cluster namespace where the AR Cloud components will be installed:

```shell
export NAMESPACE="arcloud"
```

