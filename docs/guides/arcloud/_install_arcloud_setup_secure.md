### Setup AR Cloud

:::caution IP-based deployment
If you do not have a custom domain and would like to use an IP address instead, add the `--no-secure` flag to the
command below and make sure that the domain environment variable is set correctly:

```shell
export DOMAIN="<IP address from the cloud provider>"
```

**This is heavily discouraged for publicly accessible deployments.**
:::

```shell showLineNumbers
./setup.sh \
    --set global.domain=${DOMAIN} \
    --no-observability \
    --accept-sla
```

:::note Software License Agreement
Passing the `--accept-sla` flag assumes the acceptance of the [Magic Leap 2 Software License Agreement](https://www.magicleap.com/software-license-agreement-ml2).
:::
