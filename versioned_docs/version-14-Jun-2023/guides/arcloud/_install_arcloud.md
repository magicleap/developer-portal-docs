### Install Certificate Manager

:::note
This part is only required if you plan on using a custom domain with a TLS certificate.

For local deployments or when using an IP address only, it can be skipped.
:::

```shell
export CERT_MANAGER_VERSION=1.9.1
```

```shell showLineNumbers
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

### Create K8s Namespace

```shell showLineNumbers
kubectl create namespace ${NAMESPACE}
kubectl label namespace ${NAMESPACE} istio-injection=enabled
kubectl label namespace ${NAMESPACE} pod-security.kubernetes.io/audit=baseline pod-security.kubernetes.io/audit-version=v1.25 pod-security.kubernetes.io/warn=baseline pod-security.kubernetes.io/warn-version=v1.25
```

### Create Container Registry Secret

```shell showLineNumbers
kubectl --namespace ${NAMESPACE} delete secret container-registry --ignore-not-found
kubectl --namespace ${NAMESPACE} create secret docker-registry container-registry \
    --docker-server=${REGISTRY_SERVER} \
    --docker-username=${REGISTRY_USERNAME} \
    --docker-password=${REGISTRY_PASSWORD}
```

