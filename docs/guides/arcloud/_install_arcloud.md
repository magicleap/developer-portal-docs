## Install Certificate Manager

```shell
CERT_MANAGER_VERSION=1.9.1
```

```shell
helm upgrade --install --wait --repo https://charts.jetstack.io cert-manager cert-manager \
  --version ${CERT_MANAGER_VERSION} \
  --create-namespace \
  --namespace cert-manager \
  --set installCRDs=true
```

```shell
kubectl -n istio-system apply -f ./setup/issuer.yaml
```

```shell
cat ./setup/certificate.yaml | envsubst | kubectl -n istio-system apply -f -
```

## Create K8s Namespace

```shell
kubectl create namespace ${NAMESPACE}
```

```shell
kubectl label namespace ${NAMESPACE} istio-injection=enabled
```

## Create Container Registry Secret

```shell
kubectl --namespace ${NAMESPACE} delete secret container-registry --ignore-not-found
```

```shell
kubectl --namespace ${NAMESPACE} create secret docker-registry container-registry \
  --docker-server=${REGISTRY_SERVER} \
  --docker-username=${REGISTRY_USERNAME} \
  --docker-password=${REGISTRY_PASSWORD}
```

### Log in to container registry

```shell
docker login ${REGISTRY_SERVER} --username "${REGISTRY_USERNAME}" --password "${REGISTRY_PASSWORD}"
```

## Setup ARCloud

```shell
./setup.sh \
  --set global.domain=${DOMAIN} \
  --no-secure \
  --no-observability \
  --accept-sla
```
