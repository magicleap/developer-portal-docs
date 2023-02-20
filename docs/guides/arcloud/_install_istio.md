```shell showLineNumbers
curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.16.0 sh -
cd istio-1.16.0
./bin/istioctl install -y -f ../setup/istio.yaml
```

:::note
If you received an error in the last step referring to port `8080`, the most likely cause is not having your **Kubernetes** services running on your host machine.
:::

### Install Istio Gateway

```shell
kubectl -n istio-system apply -f ../setup/gateway.yaml
```

```shell
cd ../
```
