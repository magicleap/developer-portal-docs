```shell showLineNumbers
curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.16.0 sh -
cd istio-1.16.0
cat ../setup/istio.yaml | envsubst | ./bin/istioctl install -y -f -
```

:::note
If you received an error in the last step referring to port `8080`, the most likely cause is not having your **Kubernetes** services running on your host machine.
:::

