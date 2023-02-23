Download the AR Cloud Public Release from GitHub:

```shell showLineNumbers
LATEST_RELEASE=$(curl -L -s -H 'Accept: application/json' https://github.com/magicleap/arcloud/releases/latest)
LATEST_VERSION=$(echo $LATEST_RELEASE | sed -e 's/.*"tag_name":"\([^"]*\)".*/\1/')
ARTIFACT_URL="https://github.com/magicleap/arcloud/archive/refs/tags/$LATEST_VERSION.tar.gz"
wget -c $ARTIFACT_URL -O - | tar -xz
```

```shell
cd arcloud-$LATEST_VERSION
```

### Configure Environment

:::note
If you do not have a key assigned for Quay.io, please contact Customer Care:

care@magicleap.com
:::

```shell showLineNumbers
export REGISTRY_SERVER="quay.io"
export REGISTRY_USERNAME="<username>"
export REGISTRY_PASSWORD="<password>"
```

```shell
export NAMESPACE="arcloud"
```
