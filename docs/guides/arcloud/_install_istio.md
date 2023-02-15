```shell
curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.16.0 sh -
```
```shell
cd istio-1.16.0
```
```shell
./bin/istioctl install -y -f ../setup/istio.yaml
```

Install Istio gateway
```shell
kubectl -n istio-system apply -f ../setup/gateway.yaml
```
```shell
cd ../
```
