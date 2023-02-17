Check the ELB address for the just created service and export it for later use:

```shell showLineNumbers
export AWS_ELB_DOMAIN=$(kubectl -n istio-system get svc istio-ingressgateway --template '{{(index .status.loadBalancer.ingress 0).hostname}}')
echo $AWS_ELB_DOMAIN
```

Modify your DNS zone by adding a CNAME entry for your domain pointing to the ELB address displayed in the previous step.

Update the load balancer attributes to increase the idle timeout:

```shell showLineNumbers
aws elb modify-load-balancer-attributes \
    --load-balancer-name ${AWS_ELB_DOMAIN%%-*} \
    --region $AWS_REGION \
    --load-balancer-attributes ConnectionSettings={IdleTimeout=360}
```
