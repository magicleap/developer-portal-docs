Check the ELB (Elastic Load Balancer) address for the just created service and export it for later use:

```shell showLineNumbers
export AWS_ELB_DOMAIN=$(kubectl -n istio-system get svc istio-ingressgateway --template '{{(index .status.loadBalancer.ingress 0).hostname}}')
echo $AWS_ELB_DOMAIN
```

:::note ELB provisioning
It might take some time before the load balancer is provisioned. If the command above shows an error, try again a
moment later.
:::

#### Option 1: Using a custom domain

Modify your DNS zone by adding a CNAME entry for your domain pointing to the ELB address displayed in the previous step.

#### Option 2: Use Global Accelerator with a public IP address or subdomain provided by AWS

Configure a [Global Accelerator](https://aws.amazon.com/global-accelerator/) in front of the ELB.

:::note
Make sure to add all the necessary ports (`80`, `443`, `1883`, `8883`), pick the correct region and select the ELB
that was just created.
:::

When the accelerator is ready, public IP addresses and a domain issued by AWS will be available. The selected one has to
be set in the environment:

* one of the public IPs:

  ```shell
  export DOMAIN="<IP address from the global accelerator>"
  ```

* the domain:

  ```shell
  export DOMAIN="<domain of the global accelerator>"
  ```
